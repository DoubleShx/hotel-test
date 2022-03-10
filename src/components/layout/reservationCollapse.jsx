import { CCloseButton, CCol } from "@coreui/react";
import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { useDispatch, useSelector } from "react-redux";
import db, { fetchDataFirestore } from "../../firebase.config";
import { RoomsInfo, tgBotData } from "../../data/PrepareData";
import { reservationCollapse } from "../../store/actions/reservation";
import DatePicker from "react-datepicker";
import moment from "moment";
import axios from "axios";

const InitialformData = {
  dataPeriod: { start: new Date(), end: new Date() },
  room_id: "",
  user_name: ''
};
const InitialSubmitformData = {
  dataPeriod: {
    start: moment().format("yyyy-MM-DD"),
    end: moment().format("yyyy-MM-DD"),
  },
  room_id: "",
  reservation_count: 0,
  user_name: ''
};
export const ReservationCollapse = (props) => {
  const reservation = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  const { show } = reservation;
  const [formData, setFormData] = useState(InitialformData);
  const [submitFormData, setSubmitFormData] = useState(InitialSubmitformData);
  const [roomsCount, setRoomsCount] = useState([]);
  const [roomsReservation, setRoomsReservation] = useState([]);
  const [freeRoomsCount, setFreeRoomsCount] = useState("");
  const [blogs, setBlogs] = useState([]);

  const handleClickAway = () => {
    if (show)  {
      dispatch(reservationCollapse(false));
    }
  };

  const addValue = () => {
    db.collection("RoomsCount").add({
      roomsCount: {
        1: 5,
        2: 5,
        3: 4,
        4: 3,
        5: 2,
        6: 1,
      },
    });
  };

  //add doc with custom id and set items
  const MakeReservation = (type) => {
    let startDate = moment(submitFormData.dataPeriod.start);
    let endDate = moment(submitFormData.dataPeriod.end);
    let currentReservingArray = [];
    let day = startDate;
    while (day <= endDate) {
      currentReservingArray.push({
        [day.format("yyyy-MM-DD")]: +submitFormData.reservation_count - 1,
      });
      day = day.clone().add(1, "d");
    }
    let reservedArray = roomsReservation.length
      ? roomsReservation[0][`reservation_${show}`].reservation
      : [];
    let resultedArray = [...reservedArray, ...currentReservingArray].reduce((prevItem, item, index) => {
      let key = Object.keys(item)[0]
      if (prevItem.hasOwnProperty(key)) {
        return {
          ...prevItem,
          [key]: +prevItem[key] + item[key]
        }
      }
     return {...prevItem, ...item}
    }, {})
    let sortedArray = Object.entries(resultedArray).reduce((prevItem, item, index) => {      
      return [...prevItem, { [item[0]]: item[1] }]
    }, []).sort((a, b) => {
      let currentDate = Object.entries(b)
      let prevDate = Object.entries(a)
      return moment(prevDate[0][0]).diff(currentDate[0][0])
    })
    // console.log(sortedArray, 'sortedarray')
    db.collection(`RoomReservation`)
      .doc(`reservation_${type}`)
      .set({
        reservation: sortedArray,
      }).then(res => {        
        fetchRoomsReservation(+show)
      })
    axios({
        method: 'get',
        url: `https://api.telegram.org/bot${tgBotData.token}/sendMessage`,
        params: {
            chat_id: tgBotData.chat_id,
            parse_mode: 'MarkdownV2',
            text: `${formData.user_name} reserved room:${submitFormData.room_id}, periods: ${moment(submitFormData.dataPeriod.start).format('yyyy/MM/DD')}  ${moment(submitFormData.dataPeriod.end).format('yyyy/MM/DD')}`
        }
    })
    .then(res => {
      setSubmitFormData(InitialSubmitformData)
      setFormData(InitialformData)
      dispatch(reservationCollapse(false));
    })
    .catch(err => console.log(err))
  };

  const fetchRoomsCount = () => {
    fetchDataFirestore("RoomsCount").then((data) => {
      let { roomsCount } = data.docs[0].data();
      setRoomsCount(roomsCount);
    });
  };
  const fetchRoomsReservation = (type) => {
    fetchDataFirestore(`RoomReservation`).then((data) => {
      const documents = [];
      data.forEach((doc) => {
        if (doc.id === `reservation_${type}`) {
          const document = { [doc.id]: doc.data() };
          documents.push(document);
        }
      });
      setRoomsReservation(documents);
      getFreeRoomsCount(documents, type);
    });
  };

  const getFreeRoomsCount = (reservedDates, type) => {
    let { start, end } = submitFormData.dataPeriod;
    let startMoment = moment(start).add(-1, "days");
    let endMoment = moment(end).add(1, "days");
    let maxReservedCount = reservedDates[0][
      `reservation_${type}`
    ].reservation.reduce((prevItem, item, index) => {
      let entries = Object.entries(item);
      if (
        moment(entries[0][0]).isBetween(startMoment, endMoment) &&
        entries[0][1] > prevItem
      ) {
        return entries[0][1];
      } else return prevItem;
    }, 0);
    let minFreeRoomsCount = roomsCount[type] - maxReservedCount;
    setFreeRoomsCount(minFreeRoomsCount);
  };

  useEffect(() => {
    // addValue()
    fetchRoomsCount("RoomsCount");
  }, []);

  useEffect(()=>{
    if (typeof show === 'number' && +show !== 0) {
      fetchRoomsReservation(show)
    }
  }, [submitFormData])
  const addDataIfShowObject = (objectField) => {
    if (typeof show === "number" && +show !== 0) {
      return true;
    } else return false;
  };
  const handleSetDates = (date, type) => {
    setFormData({
      ...formData,
      dataPeriod: { ...formData.dataPeriod, [type]: date },
    });
    setSubmitFormData({
      ...submitFormData,
      dataPeriod: {
        ...submitFormData.dataPeriod,
        [type]: moment(date).format("yyyy-MM-DD"),
      },
    });
  };

  const selectRoomChange = (e) => {
    dispatch(reservationCollapse(+e.target.value));
    setSubmitFormData({
      ...submitFormData,
      room_id: +e.target.value,
    });
    fetchRoomsReservation(e.target.value);
  };

  const selectRoomCountChange = (e) => {
    setSubmitFormData({
      ...submitFormData,
      reservation_count: e.target.value,
    });
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div class="box-collapse">
        <div class="row">
          <CCol xs="9"></CCol>
          <CCol xs="3">
            <CCloseButton className="mt-3"
              onClick={() => dispatch(reservationCollapse(false))}
            />
          </CCol>
          <h3
            class="title-d"
            // onClick={() =>
            //   console.log(
                // "reservation",
                // roomsReservation,
                // "roomscount",
                // roomsCount,
                // 'submitFormdata',
            //     submitFormData.reservation_count
            //   )
            // }
          >
            Зарезервировать Номер <br />
            {addDataIfShowObject() ? RoomsInfo[show].title : ""}
          </h3>
        </div>

        <div class="box-collapse-wrap form">
          <form class="form-a">
            <div class="row">
              <div class="col-md-12 mb-2">
                <select
                  class="form-control form-control-lg form-control-a"
                  id="room_id"
                  required={true}
                  onChange={(e) => {
                    selectRoomChange(e);
                  }}
                >
                  <option value={0}>Тип Номера</option>
                  {Object.entries(RoomsInfo).map((item, index) => (
                    <option value={+index + 1}>{item[1].title}</option>
                  ))}
                </select>
              </div>
              <h5>Период резервации</h5>
              <div class="col-md-6 mb-2">
                <label>Начало</label>
                <div class="form-group">
                  <DatePicker
                    className="w-100 form-control form-control-lg form-control-a"
                    selected={formData.dataPeriod.start}
                    onChange={(date) => handleSetDates(date, "start")}
                    selectsStart
                    startDate={formData.dataPeriod.start}
                    endDate={formData.dataPeriod.end}
                    required={true}
                  />
                </div>
              </div>
              <div class="col-md-6 mb-2">
                <label>Конец</label>
                <div class="form-group">
                  <DatePicker
                    className="w-100 form-control form-control-lg form-control-a"
                    selected={formData.dataPeriod.end}
                    onChange={(date) => handleSetDates(date, "end")}
                    selectsEnd
                    startDate={formData.dataPeriod.start}
                    endDate={formData.dataPeriod.end}
                    minDate={formData.dataPeriod.start}
                    required={true}
                  />
                </div>
              </div>
                    <h5>Детали резерва</h5>
              <div class="col-md-6 mb-2">
                <select
                  class="form-control form-control-lg form-control-a"
                  id="count"
                  required
                  onChange={(e) => {
                    selectRoomCountChange(e);
                  }}
                >
                  <option value={0}>
                    Количество
                  </option>
                  {[...Array(freeRoomsCount + 1).keys()].map((item, index) => (
                    <option value={+index + 1}>{item}</option>
                  ))}
                </select>
              </div>
              <div class="col-md-6 mb-2">
                <input required name="user_name" type="text" class="form-control form-control-lg form-control-a" placeholder="Полное Имя" value={formData.user_name} onChange={(e)=>setFormData({...formData, user_name: e.target.value})}/>
              </div>
              <div class="col-md-12">
                {roomsCount[+submitFormData.room_id]
                  ? `Количество номеров: ${
                      roomsCount[+submitFormData.room_id]
                    } ||`
                  : ""}
                {freeRoomsCount
                  ? ` Количество свободных номеров в период: ${freeRoomsCount}`
                  : ""}
              </div>

              <div class="col-md-12">
                <button
                  type="submit"
                  class="btn btn-primary p-3 mt-3"
                  onClick={(e) => {
                    e.preventDefault();
                    MakeReservation(submitFormData.room_id);
                  }}
                  disabled={!submitFormData.dataPeriod || !submitFormData.reservation_count || +submitFormData.reservation_count <= 1 || !submitFormData.room_id || !formData.user_name ? true : false}
                >
                  Submit
                </button>
              </div>
              {addDataIfShowObject() ? (
                <img
                  src={RoomsInfo[show].images[0]}
                  alt="img"
                  className="mt-3"
                />
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </ClickAwayListener>
  );
};
