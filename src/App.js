import React from "react";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import Profile from "./pages/Profile";
import Kutipan from "./pages/Kutipan";
import Acara from "./pages/Acara";

import Navigation from "./pages/Nav";
import { CSSTransition } from "react-transition-group";

const routes = [
  { path: "/", name: "home", Component: Home },
  { path: "/profile", name: "profile", Component: Profile },
  { path: "/kutipan", name: "kutipan", Component: Kutipan },
  { path: "/acara", name: "acara", Component: Acara },
];

export default function App(props) {
  return (
    <div className="h-screen w-screen bg-main">
      <div className="flex item-center">
        <Navigation />

        <div className="flex-grow flex justify-center items-center text-center text-white text-4xl h-screen">
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route exact key={path} path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={500}
                    classNames="page"
                    unmountOnExit
                    onExit={() => console.log("hallo")}
                    onEntering={() => console.log("hallo")}
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </div>
  );
}
