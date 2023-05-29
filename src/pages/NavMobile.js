import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";
import { TimelineLite, Power3 } from "gsap/all";
import { HiHome, HiMap, HiUser, HiClock, HiHeart } from "react-icons/hi";

export default function NavigationMobile(props) {
  let tl = new TimelineLite();

  const menus = [
    {
      name: "Home",
      path: "/",
      icon: <HiHome color="white" />,
    },
    {
      name: "Profile",
      path: "profile",
      icon: <HiUser color="white" />,
    },
    {
      name: "Acara",
      path: "acara",
      icon: <HiClock color="white" />,
    },
    {
      name: "Kutipan",
      path: "kutipan",
      icon: <HiHeart color="white" />,
    },
    {
      name: "Lokasi",
      path: "map",
      icon: <HiMap color="white" />,
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
    <div className="px-3 pt-8 w-full text-white font-Dancing-Script  ">
      {/* <div className=" brand-mobile absolute left-0 right-0 w-full text-center">
        <h1 className="text-3xl">Invitation</h1>
      </div> */}

      <div
        className=" bg-black py-4 mx-4 flex justify-center rounded-md"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 20,
        }}
      >
        <ul className="text-lg flex space-x-6 md:space-x-4">
          {menus.map((obj, key) => (
            <li key={key}>
              <NavLink
                to={obj.path}
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "#ed8936",
                }}
              >
                <div className="flex flex-col items-center">
                  {obj.icon}

                  {obj.name}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
