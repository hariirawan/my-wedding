import React from "react";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import Kutipan from "./pages/Kutipan";
import Acara from "./pages/Acara";

import Navigation from "./pages/Nav";
import Maps from "./pages/Maps";
import NavigationMobile from "./pages/NavMobile";

const routes = [
  { path: "/", name: "home", Component: Home },
  { path: "/profile", name: "profile", Component: Profile },
  { path: "/kutipan", name: "kutipan", Component: Kutipan },
  { path: "/acara", name: "acara", Component: Acara },
  { path: "/map", name: "location", Component: Maps },
];

export default function App(props) {
  return (
    <div className="h-screen w-screen bg-main relative">
      <div className="md:flex item-center">
        <div className="hidden md:block">
          <Navigation />
        </div>
        <div className="mb-20 md:hidden">
          <NavigationMobile />
        </div>
        <Route
          render={({ location }) => (
            <div className=" flex-grow flex justify-center items-center text-center text-white  text-4xl h-auto md:h-screen">
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
    </div>
  );
}
