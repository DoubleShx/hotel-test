import { CCloseButton, CCol } from "@coreui/react";
import React, { useEffect, useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { useDispatch, useSelector } from "react-redux";
import db, { fetchDataFirestore } from "../../firebase.config";
import { RoomsInfo } from "../../data/PrepareData";
import { reservationCollapse } from "../../store/actions/reservation";
import DatePicker from "react-datepicker";
import moment from "moment";

const InitialformData = {
  dataPeriod: { start: new Date(), end: new Date() },
  room_id: "",
};
const InitialSubmitformData = {
  dataPeriod: {
    start: moment().format("yyyy-MM-DD"),
    end: moment().format("yyyy-MM-DD"),
  },
  room_id: "",
  reservation_count: 0,
};
export const ReservationCollapse = (props) => {
  const reservation = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  const { show } = reservation;
  const [formData, setFormData] = useState(InitialformData);
  const [submitFormData, setSubmitFormData] = useState(InitialSubmitformData);
  const [roomsCount, setRoomsCount] = useState([]);
  const [roomsReservation, setRoomsReservation] = useState([]);
  const [freeRoomsCount, setFreeRoomsCount] = useState('')
  const [blogs, setBlogs] = useState([]);

  const handleClickAway = () => {
    // if (show)  {
    //   dispatch(reservationCollapse(false));
    // }
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
    db.collection(`RoomReservation`)
      .doc(`reservation_${type}`)
      .set({
        reservation: [
          { [submitFormData.dataPeriod.start]: 1 },
          { [submitFormData.dataPeriod.end]: 1 },
        ],
      });
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
      getFreeRoomsCount(documents, type)
    });
  };

  const getFreeRoomsCount = (reservedDates, type) => {
    let {start, end} = submitFormData.dataPeriod 
    let startMoment = moment(start).add(-1, 'days');
    let endMoment = moment(end).add(1, 'days');
    console.log(start, end)
    let maxReservedCount =  reservedDates[0][`reservation_${type}`].reservation.reduce((prevItem, item, index) => {
          let entries =  Object.entries(item)
          if (moment(entries[0][0]).isBetween(startMoment, endMoment) && entries[0][1] > prevItem) {
            return entries[0][1]
          }
          else return prevItem
          
        }, 0)
        let minFreeRoomsCount = roomsCount[type] - maxReservedCount
        setFreeRoomsCount(minFreeRoomsCount)
  };

  useEffect(() => {
    // addValue()
    fetchRoomsCount("RoomsCount");
  }, []);
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
    fetchRoomsReservation(e.target.value)
  }
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div class="box-collapse">
        <div class="row">
          <CCol xs="9"></CCol>
          <CCol xs="3">
            <CCloseButton
              onClick={() => dispatch(reservationCollapse(false))}
            />
          </CCol>
          <h3
            class="title-d"
            onClick={() =>
              console.log(
                // "reservation",
                // roomsReservation,
                // "roomscount",
                roomsCount,
                // 'submitFormdata',
                // submitFormData
              )
            }
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
                  id="city"
                  onChange={(e) => {
                    selectRoomChange(e)
                  }}
                >
                  <option value={0}>Пожалуйста выберите номер</option>
                  {Object.entries(RoomsInfo).map((item, index) => (
                    <option value={+index + 1}>{item[1].title}</option>
                  ))}
                </select>
              </div>
              <div class="col-md-6 mb-2">
                <div class="form-group">
                  <DatePicker
                    className="w-100"
                    selected={formData.dataPeriod.start}
                    onChange={(date) => handleSetDates(date, "start")}
                    selectsStart
                    startDate={formData.dataPeriod.start}
                    endDate={formData.dataPeriod.end}
                  />
                </div>
              </div>
              <div class="col-md-6 mb-2">
                <div class="form-group">
                  <DatePicker
                    className="w-100"
                    selected={formData.dataPeriod.end}
                    onChange={(date) => handleSetDates(date, "end")}
                    selectsEnd
                    startDate={formData.dataPeriod.start}
                    endDate={formData.dataPeriod.end}
                    minDate={formData.dataPeriod.start}
                  />
                </div>
              </div>

              <div class="col-md-12 mb-2">
                <select
                  class="form-control form-control-lg form-control-a"
                  id="city"
                  onChange={(e) => {
                    setSubmitFormData({
                      ...submitFormData,
                      reservation_count: e.target.value,
                    });
                  }}
                >
                  <option value={0}>
                    Пожалуйста выберите количество номеров
                  </option>
                  {[...Array(freeRoomsCount+1).keys()].map((item, index) => (
                    <option value={+index + 1}>{item}</option>
                  ))}
                </select>
              </div>
              <div class="col-md-12">
                {roomsCount[+submitFormData.room_id] ? `Количество номеров: ${roomsCount[+submitFormData.room_id]}` : ''}
              </div>

              <div class="col-md-12">
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    MakeReservation(submitFormData.room_id);
                  }}
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
