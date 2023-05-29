import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import Kutipan from "./pages/Kutipan";
import Acara from "./pages/Acara";

import Navigation from "./pages/Nav";
import Maps from "./pages/Maps";
import NavigationMobile from "./pages/NavMobile";
import youarealwayswithme from "./assets/you-are-always-with-me-piano-version-15841.mp3";

const routes = [
  { path: "/", name: "home", Component: Home },
  { path: "/profile", name: "profile", Component: Profile },
  { path: "/kutipan", name: "kutipan", Component: Kutipan },
  { path: "/acara", name: "acara", Component: Acara },
  { path: "/map", name: "location", Component: Maps },
];

export default function App(props) {
  useEffect(() => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    document.addEventListener("click", () => audioEl?.play?.());
  }, []);

  return (
    <div className="h-screen w-screen bg-main relative pt-10">
      <div className=" md:flex item-center md:h-screen">
        <div className="hidden md:block pt-10">
          <Navigation />
        </div>
        <div className="md:hidden fixed left-0 right-0 bottom-0">
          <NavigationMobile />
        </div>
        <Route
          render={({ location }) => (
            <div className=" flex-grow flex justify-center items-center text-center text-white  text-4xl">
              <Switch location={location}>
                {routes.map(({ path, Component }) => (
                  <Route exact key={path} path={path}>
                    <Component />
                  </Route>
                ))}
              </Switch>
            </div>
          )}
        />
      </div>
      <audio className="audio-element" autoPlay loop>
        <source src={youarealwayswithme}></source>
      </audio>
    </div>
  );
}
