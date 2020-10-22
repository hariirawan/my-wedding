import { TimelineLite } from "gsap/all";
import React, { useEffect } from "react";

export default function Kutipan(props) {
  let tl = new TimelineLite();

  useEffect(() => {
    let sec0 = document.getElementsByClassName("span-title");
    let sec1 = document.getElementsByClassName("span-1");
    tl.from(sec0, {
      x: -40,
      duration: 0.5,
      opacity: 0,
      stagger: {
        each: 0.3,
      },
    }).from(sec1, {
      y: 40,
      duration: 0.5,
      opacity: 0,
      stagger: {
        each: 0.3,
      },
    });

    return () => {};
  }, [tl]);

  return (
    <div className=" space-y-6 ">
      <h1 className=" span-title font-Dancing-Script">Kutipan</h1>
      <div className="">
        <div className="flex flex-col justify-center space-x-6 text-sm">
          <span className="span-1">
            "Dan nikahkanlah orang-orang yang sendirian di antara kamu, dan
            orang-orang yang layak
          </span>
          <span className="span-1">
            (menikah) dari hamba sahayamu yang lelkai dan hamba-hamba sahayamu
            yang perempuan
          </span>
          <span className="span-1">
            jika mereka miskin Allah akan mengkayakan mereka dengan karunianya.
          </span>
          <span className="span-1">
            Dan Allah Maha Luas (pemberiannya) dan maha mengetahui."
          </span>
          <span className="span-1">(QS. An Nuur(24):32)</span>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-12  font-Dancing-Script"></div>
    </div>
  );
}
