import React, { useEffect } from "react";
import imageIda from "../assets/1.jpg";
import imagehari from "../assets/2.jpg";
import { TimelineLite } from "gsap/all";

export default function Profile(props) {
  let tl = new TimelineLite();

  useEffect(() => {
    let sec0 = document.getElementsByClassName("sec-0");
    let sec1 = document.getElementsByClassName("sec-1");
    let sec2 = document.getElementsByClassName("sec-2");
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
      });

    return () => {};
  }, [tl]);

  return (
    <div className=" space-y-10 ">
      <div className="space-y-8">
        <h1 className="font-Dancing-Script sec-0">Profile</h1>
        <div className="subtitle flex flex-col justify-center  text-sm px-5">
          <span className="sec-1">Bismillahirrahmanirrahim</span>
          <span className="sec-1">
            Assalamualaikum Warahmatullahi Wabarakatuh
          </span>
          <span className="sec-1">
            Dengan Memohon Rahmat dan Ridha Allah SWT
          </span>
          <span className="sec-1">
            Kami bermaksud menyelenggarakan pernikahan
          </span>
          <span className="sec-1">Putra Putri kami</span>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-6 font-Dancing-Script">
        <div className=" flex justify-center flex-col items-center ">
          <div className="sec-2 h-20 w-20 md:w-32 md:h-32 rounded-full bg-pink-700 mb-4  border-2 border-pink-600 overflow-hidden">
            <img src={imagehari} alt="hari-ida.wedding.com" />
          </div>
          <div className="h-20 ">
            <div className="sec-2 text-xs md:text-2xl text-pink-600">
              Hari Irawan
            </div>
            <div className="sec-2 text-1sm md:text-xs font-mono">
              Putra dari Pasangan
            </div>
            <div className="sec-2 text-1sm md:text-xs font-mono">
              Karsiah & Masiah
            </div>
          </div>
        </div>
        <div className="sec-2 ">&</div>
        <div className="flex justify-center flex-col items-center">
          <div className="sec-2 h-20 w-20 md:w-32 md:h-32 rounded-full bg-pink-700 border-2 border-pink-600  mb-4 overflow-hidden">
            <img src={imageIda} alt="hari-ida.wedding.com" />
          </div>
          <div className=" h-20 ">
            <div className="sec-2 text-xs md:text-2xl text-pink-600">
              Siti Hidayatul Ikhlas
            </div>
            <div>
              <div className="sec-2 text-1sm md:text-xs font-mono">
                Putri dari Pasangan
              </div>
              <div className="sec-2 text-1sm md:text-xs font-mono">
                Sahiruddin, QH, S.Pd.I <br /> &<br /> Sere'ah, QH, S.Pd.I
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
