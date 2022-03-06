import React from "react";
import { useParams } from "react-router-dom";
import { MeetingRoomsInfo, sliderData } from "../../data/PrepareData";

export const SingleMeetingRoom = () => {
  let { id } = useParams();

  return (
    <section id="single_room" class="bg-white section-padding">
      <div class="container-fluid">
        <h3>{MeetingRoomsInfo[id].title}</h3>
        <div className="row single_room-images_wrapper">
          {MeetingRoomsInfo[id].images.map((imageLink) => (
            <div className="col">
              <img src={imageLink} alt="room" loading="lazy" className="single_meeting_room-image" />
            </div>
          ))}
        </div>
        {MeetingRoomsInfo[id].content ? (
          <div>
            <h4>Описание</h4>{" "}
            <div dangerouslySetInnerHTML={{ __html: MeetingRoomsInfo[id].content }} />
          </div>
        ) : null}
        <div className="extra_price_wrapper" dangerouslySetInnerHTML={{ __html: MeetingRoomsInfo[id].price }} />
        <div className="row">
          <div className="col-lg-8">
            {MeetingRoomsInfo[id].includes.length ? (
              <ul className="row">
                <h4>В зале присутствует</h4>{" "}
                {MeetingRoomsInfo[id].includes.map((list) => (
                  <li className="col-lg-4">{list}</li>
                ))}
              </ul>
            ) : null}
            {MeetingRoomsInfo[id].bonuses && MeetingRoomsInfo[id].bonuses.length ? (
              <ul className="row">
                <h4>Включено в стоимость номера</h4>{" "}
                {MeetingRoomsInfo[id].bonuses.map((list) => (
                  <li className="col-lg-6">{list}</li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="col-lg-4">
            {typeof MeetingRoomsInfo[id].extra_details === "object" ? (
              <ul className="room_details">
                <h4>Характеристики зала</h4>{" "}
                {Object.entries(MeetingRoomsInfo[id].extra_details).map((list) => (
                  <li className="row">
                    <div className="col-lg-6">{list[0]}</div> <div className="col-lg-6">{list[1]}</div>
                    </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
