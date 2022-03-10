import { CButton } from "@coreui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RoomsInfo } from "../../data/PrepareData";
import { reservationCollapse } from "../../store/actions/reservation";

export const SingleRoom = () => {
  let { id } = useParams();
  const dispatch = useDispatch()

  return (
    <section id="single_room" class="bg-white section-padding">
      <div class="container-fluid">
        <h3>{RoomsInfo[id].title}</h3>
        <div className="row single_room-images_wrapper">
          {RoomsInfo[id].images.map((imageLink) => (
            <div className="col-lg-6">
              <img src={imageLink} alt="room" loading="lazy" />
            </div>
          ))}
        </div>
        {RoomsInfo[id].content ? (
          <div>
            <h4>Описание</h4>{" "}
            <div dangerouslySetInnerHTML={{ __html: RoomsInfo[id].content }} />
          </div>
        ) : null}
        <div className="extra_price_wrapper" dangerouslySetInnerHTML={{ __html: RoomsInfo[id].price }} />
        <div className="row">
          <div className="col-lg-8">
            {RoomsInfo[id].includes.length ? (
              <ul className="row">
                <h4>Оснащенность номера</h4>
                {RoomsInfo[id].includes.map((list) => (
                  <li className="col-lg-4">{list}</li>
                ))}
              </ul>
            ) : null}
            
            {RoomsInfo[id].bonuses.length ? (
              <ul className="row">
                <h4>Включено в стоимость номера</h4>
                {RoomsInfo[id].bonuses.map((list) => (
                  <li className="col-lg-4">{list}</li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="col-lg-4">
            {typeof RoomsInfo[id].extra_details === "object" ? (
              <ul className="room_details">
                <h4>Включено в стоимость номера</h4>
                {Object.entries(RoomsInfo[id].extra_details).map((list) => (
                  <li className="row">
                    <div className="col-lg-6">{list[0]}</div> <div className="col-lg-6">{list[1]}</div>
                    </li>
                ))}
                <CButton className="btn btn-primary mt-3 text-white" onClick={()=>dispatch(reservationCollapse(+id))}>Зарезервировать</CButton>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
