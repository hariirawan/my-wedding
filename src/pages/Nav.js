import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { TimelineLite, Power3 } from "gsap/all";

export default function Navigation(props) {
  let tl = new TimelineLite();

  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Profile",
      path: "profile",
    },
    {
      name: "Acara",
      path: "acara",
    },
    {
      name: "Kutipan",
      path: "kutipan",
    },
    {
      name: "Lokasi",
      path: "map",
    },
  ];

  useEffect(() => {
    let brand = document.getElementsByClassName("brand");
    let menus = document.getElementsByClassName("nav-sm");
    tl.from(brand, {
      duration: 0.5,
      ease: Power3.easeInOut,
      y: 50,
      opacity: 0,
      stagger: {
        each: 0.3,
      },
    }).from(menus, {
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

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { accuracy, latitude, longitude } }) => console.log(accuracy)
      );
    }
  }, []);

  return (
    <div className="pl-8 pt-8 w-1/6 space-y-24 text-white font-Dancing-Script">
      <h1 className="text-5xl brand ">Merarik</h1>
      <ul className="space-y-3 text-3xl">
        {menus.map((obj, key) => (
          <li key={key} className="nav-sm">
            <NavLink
              to={obj.path}
              exact
              activeStyle={{
                fontWeight: "bold",
                color: "#d53f8c",
              }}
            >
              {obj.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
