import React, { useRef, useEffect, useState } from "react";
import { TimelineLite, Power3 } from "gsap/all";

const Box = ({ number, text }) => {
  return (
    <div className="box ">
      <div className="px-3 flex  items-center justify-center bg-orange-500 rounded-lg text-center text-black">
        <div className="text-white">{number}</div>
      </div>
      <div className="font-Dancing-Script text-lg mt-1 text-white">{text}</div>
    </div>
  );
};

export default function Home(props) {
  let tl = new TimelineLite();

  useEffect(() => {
    let names = document.getElementsByClassName("name");
    let titles = document.getElementsByClassName("title1");
    let box = document.getElementsByClassName("box");
    tl.from(titles, {
      x: -100,
      duration: 0.5,
      opacity: 0,
      ease: Power3.easeOut,
      stagger: {
        each: 0.3,
      },
    })
      .from(box, {
        y: -40,
        duration: 0.5,
        opacity: 0,
        stagger: {
          each: 0.3,
        },
      })
      .from(names, {
        y: 80,
        duration: 0.5,
        opacity: 0,
        stagger: {
          each: 0.3,
        },
      });

    return () => {};
  }, [tl]);

  return (
    <div className="space-y-12">
      <div className=" space-y-5 md:space-y-10 ">
        <div className="flex justify-center space-x-5 font-Dancing-Script">
          <div className="title1">Menuju </div>
          <div className="title1">Pernikahan</div>
        </div>
        <Timer />
        <div className="flex flex-col md:flex-row justify-center items-center space-x-5 md:space-x-12  font-Dancing-Script">
          <div className="text-6xl md:text-8xl name ">Yusuf</div>
          <div className="text-5xl md:text-6xl name ">&</div>
          <div className="text-6xl md:text-8xl name ">Amrina</div>
        </div>
      </div>
    </div>
  );
}

const Timer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("2023-05-07T10:10:10+07:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const hari = Math.floor(distance / (1000 * 60 * 60 * 24));
      const Jam = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const detik = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimerDays(hari);
        setTimerHours(Jam);
        setTimerMinutes(menit);
        setTimerSeconds(detik);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex justify-center space-x-4 md:space-x-6">
        <Box number={timerDays} text="Hari" />
        <Box number={timerHours} text="Jam" />
        <Box number={timerMinutes} text="Menit" />
        <Box number={timerSeconds} text="Detik" />
      </div>
    </div>
  );
};
