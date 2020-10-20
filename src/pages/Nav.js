import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { TimelineLite } from "gsap/all";

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
      name: "Location",
      path: "map",
    },
  ];

  useEffect(() => {
    let brand = document.getElementsByClassName("brand");
    let menus = document.getElementsByTagName("li");
    tl.from(brand, 1, { autoAlpha: 0, left: -50 }).staggerFrom(
      menus,
      1,
      { left: "+=0", opacity: 0 },
      0.2,
      "-=1"
    );
    return () => {};
  }, [tl]);

  return (
    <div className="brand pl-8 pt-8 w-1/6 space-y-24 text-white font-Dancing-Script hidden md:block">
      <h1 className="text-5xl">Wedding</h1>
      <ul className="space-y-3 text-3xl">
        {menus.map((obj, key) => (
          <li key={key}>
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
