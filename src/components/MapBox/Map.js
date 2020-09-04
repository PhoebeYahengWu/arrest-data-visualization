import React from "react";
import L from "leaflet";

export default (props) => {
  React.useEffect(() => {
    if (props.lat && props.lon && props.pins) {
      const mymap = L.map("mapid").setView([props.lat, props.lon], 10);

      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            process.env.REACT_APP_MAP_API_KEY,
        }
      ).addTo(mymap);

      props.pins.forEach((pin) =>
        L.marker([pin.latitude, pin.longitude]).addTo(mymap)
      );
    }
  }, [props.lat, props.lon, props.pins]);

  return <div id="mapid"></div>;
};
