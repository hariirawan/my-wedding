import React, { useEffect } from "react";
import { TimelineLite } from "gsap/all";

import CSSPlugin from "gsap/CSSPlugin";
const C = CSSPlugin;

export default function Acara(props) {
  let tl = new TimelineLite();

  useEffect(() => {
    let sec0 = document.getElementsByClassName("sec-0");
    let sec1 = document.getElementsByClassName("sec-1");
    let sec2 = document.getElementsByClassName("sec-2");
    tl.from(sec0, {
      x: -40,
      duration: 0.5,
      opacity: 0,
      stagger: {
        each: 0.3,
      },
    })
      .from(sec1, {
        y: 40,
        duration: 0.5,
        opacity: 0,
        stagger: {
          each: 0.3,
        },
      })
      .from(sec2, {
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
      <div className="flex justify-center space-x-5 font-Dancing-Script">
        <span className="sec-0">Acara</span>
        <span className="sec-0">Pernikahan</span>
      </div>
      <div className="">
        <div className="flex justify-center flex-col space-x-6 text-sm">
          <span className="sec-1">
            Dengan memohon Rahmat dan Ridho Allah Subhanahu Wa Ta’ala.
          </span>
          <span className="sec-1">
            Kami bermaksud menyelenggarakan pernikahan, yang Insya Allah akan
            diselenggarakan.
          </span>
          <span className="sec-1">
            Kami bermaksud menyelenggarakan pernikahan Putra Putri kami,
          </span>
          <span className="sec-1">
            yang Insya Allah akan diselenggarakan pada.
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-12  font-Dancing-Script">
        <div className="flex justify-center flex-col items-center w-64">
          <div className="text-5xl text-pink-600 sec-2">Akad Nikah</div>
          <div className="space-y-1">
            <div className="text-2xl sec-2">Ahad, 25 Oktober 2020</div>
            <div className="text-sm font-mono sec-2">Pukul 08:30 - Selesai</div>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center w-64 ">
          <div className="text-5xl text-pink-600 sec-2">Tasyakkuran</div>
          <div className="space-y-1 sec-2">
            <div className="text-2xl sec-2">Ahad, 25 Oktober 2020</div>
            <div className="text-sm font-mono sec-2">Pukul 08:30 - Selesai</div>
          </div>
        </div>
      </div>
    </div>
  );
}
