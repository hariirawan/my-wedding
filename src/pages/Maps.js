import React, { useEffect } from "react";
import imgMap from "../assets/maps.png";
import { TimelineLite, Power3 } from "gsap/all";

export default function Maps(props) {
  const tl = new TimelineLite();

  useEffect(() => {
    let brand = document.getElementsByClassName("map-title");
    tl.from(brand, {
      duration: 0.5,
      ease: Power3.easeInOut,
      y: 50,
      opacity: 0,
      stagger: {
        each: 0.3,
      },
    });
    return () => {};
  }, [tl]);

  return (
    <div className="container space-y-10">
      <div className="font-Dancing-Script map-title">Lokasi</div>
      <div className="flex justify-center relative">
        <div className="w-1/2 rounded-xl border-2 border-white map-title">
          <img src={imgMap} alt="img.png" className="rounded-xl" />
        </div>

        <a
          href="https://www.google.co.id/maps/place/SMP+NW+JERUA/@-8.7109906,116.4496629,17z/data=!3m1!4b1!4m5!3m4!1s0x2dcc4da7dda4ec4b:0xfb18f4a3aa3cc999!8m2!3d-8.7109906!4d116.4518516?hl=id"
          target="_blank"
          className="map-title absolute bg-pink-700 w-auto text-sm px-4 py-3 rounded-md bottom-0 mb-3 translate-x-0 hover:translate-x-4"
          rel="noopener noreferrer"
        >
          Lihat di Goole Maps
        </a>
      </div>
    </div>
  );
}
