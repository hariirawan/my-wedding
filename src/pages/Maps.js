import React from "react";
import imgMap from "../assets/maps.png";

export default function Maps(props) {
  return (
    <div className="container space-y-10">
      <div className="font-Dancing-Script">Lokasi</div>
      <div className="flex justify-center ">
        <div className="w-1/2 rounded-xl border-2 border-white">
          <img src={imgMap} alt="img.png" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}
