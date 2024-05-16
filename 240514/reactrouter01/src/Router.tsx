import React from "react";
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Rote from "./Rote";
import About from "./About";

const Router = createBrowserRouter([{ path: "/", element: <Rote /> }]);

export default Router;
