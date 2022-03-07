import React from 'react'
import { FullscreenControl, Map, Placemark, YMaps } from "react-yandex-maps";

const YandexMap = () => {
  const placeMark = {
    geometry: [56.7572164879372, 37.13465278968181],
    properties: {
      hintContent: "Hotel",
      cursor: "pointer",
    },
    options: { hasHint: true },
    modules: ["geoObject.addon.hint"],
  };
  return (
    <YMaps>
      <div className="test">
        <Map
          defaultState={{
            center: [56.7572164879372, 37.13465278968181],
            zoom: 5,
          }}
          width="100%"
          height="500px"
        >
          <Placemark {...placeMark} />
          <FullscreenControl options={{ float: "right" }} />
        </Map>
      </div>
    </YMaps>
  );
};

export default YandexMap;
