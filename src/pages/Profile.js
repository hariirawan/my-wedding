import React, { useEffect } from "react";
import imageIda from "../assets/amrina.png";
import imagehari from "../assets/yusuf.png";
import sunatan1 from "../assets/sunatan1.png";
import sunatan from "../assets/sunatan.png";
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
    <div className=" space-y-10 flex flex-col justify-center">
      <div className="space-y-8">
        <h1 className="font-Dancing-Script sec-0">Profile</h1>
        <div className="subtitle flex flex-col justify-center  text-sm px-5">
          <span className="sec-1">Bismillahirrahmanirrahim</span>
          <span className="sec-1">
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </span>
          <span className="sec-1">
            Dengan penuh rasa atas limpahan rahmat dan
          </span>
          <span className="sec-1">
            ridho Allah SWT, kami bermaksud menyelenggarakan
          </span>
          <span className="sec-1">acara pernikahan putra-putri kami</span>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-6 font-Dancing-Script text-xs ">
        <div className=" flex justify-center flex-col items-center flex-1">
          <div className="sec-2 h-20 w-20 md:w-32 md:h-32 rounded-full  mb-4  border-2 bg-white overflow-hidden">
            <img src={imagehari} alt="hari-ida.wedding.com" />
          </div>
          <div className="h-20 ">
            <div className="sec-2 font-mono text-sm md:text-2xl text-orange-400">
              Munawar Yusuf
            </div>
            <div className="sec-2 text-1sm md:text-xs font-mono">
              Putra dari Pasangan
            </div>
            <div className="sec-2 text-1sm md:text-xs font-mono">
              H. Burhanuddin & Hj. Johariah
            </div>
          </div>
        </div>
        <div className="sec-2 text-sm">&</div>
        <div className="flex justify-center flex-col items-center flex-1">
          <div className="sec-2 h-20 w-20 md:w-32 md:h-32 rounded-full bg-white border-2 border-white  mb-4 overflow-hidden">
            <img src={imageIda} alt="yusuf amrina.wedding.com" />
          </div>
          <div className=" h-20 ">
            <div className="sec-2  font-mono text-sm md:text-2xl text-orange-400">
              Amrina Rosyada
            </div>
            <div>
              <div className="sec-2 text-1sm md:text-xs font-mono">
                Putri dari Pasangan
              </div>
              <div className="sec-2 text-1sm md:text-xs font-mono">
                Mohammad Sapri <br />& Ayuni
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center sec-2 space-y-2">
        <div className=" sec-2 text-sm mb-3 font-mono">Tasyakkuran Khitan</div>
        <div className="flex flex-row justify-items-center border border-gray-300 rounded w-3/4">
          <div className=" w-20 h-20 md:w-20 overflow-hidden mr-2">
            <img
              src={sunatan}
              className=" sec-2 w-20  md:w-20  object-cover rounded "
            />
          </div>
          <div className="text-left flex flex-col text px-2">
            <div className=" sec-2 text-lg md:text-2xl text-orange-400">
              M. Irsyal Aufa
            </div>
            <div className="text-xs break-normal sec-2">
              <span>
                Putra dari Pasangan
                <br />
                Hairul Anwar, S.HI & <br /> Rohmatul hayati, S.Pd.I
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-items-center border border-gray-300 rounded w-3/4 mb-20">
          <div className=" w-20 h-20 md:w-20 overflow-hidden mr-2">
            <img
              src={sunatan1}
              className=" sec-2 w-20  md:w-20  object-cover rounded "
            />
          </div>
          <div className="text-left flex flex-col text px-2">
            <div className=" sec-2 text-sm md:text-2xl text-orange-400">
              Muhammad azkaril umam
            </div>
            <div className="text-xs break-normal sec-2">
              Putra dari bpk Fauzan wadi & <br /> Ibu Mala kurnia sari
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
