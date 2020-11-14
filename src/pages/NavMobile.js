import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { TimelineLite, Power3 } from "gsap/all";

export default function NavigationMobile(props) {
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
    let brand = document.getElementsByClassName("brand-mobile");
    let menus = document.getElementsByClassName("nav-mobile");
    tl.from(brand, {
      duration: 0.5,
      ease: Power3.easeInOut,
      x: 50,
      opacity: 0,
      stagger: {
        each: 0.3,
      },
    }).from(menus, {
      duration: 0.3,
      ease: Power3.easeInOut,
      x: 30,
      opacity: 0,
      stagger: {
        each: 0.1,
      },
    });
    return () => {};
  }, [tl]);

  return (
    <div className="px-3 space-x-3 pt-8 w-screen text-white font-Dancing-Script flex justify-between">
      <h1 className="text-lg brand-mobile ">Merarik</h1>
      <ul className=" text-lg flex space-x-3 md:space-x-4">
        {menus.map((obj, key) => (
          <li key={key} className="nav-mobile">
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
