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
    <div className="space-y-6">
      <h1 className=" span-title font-Dancing-Script">Kutipan</h1>
      <div className="text-center">
        <div className="flex flex-col justify-center space-x-6 text-sm px-10 md:px-0">
          <span className="span-1 max-w-md">
            "Dan diantara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, Dan Dia menjadikan diantaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (Kebesaran Allah) bagi kaum yang berfikir "
          </span>
          <span className="span-1">(QS. Ar-Rum:21)</span>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-12  font-Dancing-Script"></div>
    </div>
  );
}
