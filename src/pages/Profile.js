import React, { useEffect } from "react";
import imageIda from "../assets/ida.png";
import imagehari from "../assets/hari.png";
import { TimelineLite } from "gsap/all";

export default function Profile(props) {
  let tl = new TimelineLite();

  useEffect(() => {
    let sec0 = document.getElementsByClassName("sec-0");
    let sec1 = document.getElementsByClassName("sec-1");
    let sec2 = document.getElementsByClassName("sec-2");
    let sec3 = document.getElementsByClassName("sec-3");
    tl.from(sec0, {
      y: 60,
      duration: 0.5,
      opacity: 0,
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
      })
      .from(sec3, {
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
    <div className=" space-y-24 ">
      <div className="space-y-8">
        <h1 className="font-Dancing-Script sec-0">Profile</h1>
        <div className="subtitle flex flex-col justify-center space-x-6 text-sm">
          <span className="sec-1">
            Maha Suci Allah Subhanahu Wa Ta’ala yang menciptakan makhluk-Nya
          </span>
          <span className="sec-1">
            berpasang-pasangan. Ya Allah perkenankan
          </span>
          <span className="sec-1">kami menikahkan Putra Putri kami.</span>
        </div>
      </div>
      <div className="flex justify-center items-center   font-Dancing-Script">
        <div className="flex justify-center flex-col items-center w-64 ">
          <div className="sec-2 w-32 h-32 rounded-full bg-pink-700 border-2 border-pink-600  mb-4">
            <img src={imageIda} alt="hari-ida.wedding.com" />
          </div>
          <div className="sec-2 text-2xl">Siti Hidayatul Ikhlas</div>
          <div className="sec-2 text-sm font-mono">Putri dari Pasangan</div>
          <div className="sec-2 text-sm font-mono">Karsiah & Masiah</div>
        </div>
        <div className="w-auto sec-2 ">&</div>
        <div className="flex justify-center flex-col items-center w-64  ">
          <div className="sec-3 w-32 h-32 rounded-full bg-pink-700 mb-4  border-2 border-pink-600">
            <img src={imagehari} alt="hari-ida.wedding.com" />
          </div>
          <div className="sec-3 text-2xl">Hari Irawan</div>
          <div className="sec-3 text-sm font-mono">Putri dari Pasangan</div>
          <div className="sec-3 text-sm font-mono">Karsiah & Masiah</div>
        </div>
      </div>
    </div>
  );
}
