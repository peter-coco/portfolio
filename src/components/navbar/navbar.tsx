import { useState, useCallback } from "react";

import { Contact } from "../contact/contact";
import "./navbar.css";

export function Navbar({
  homeToggle,
  aboutToggle,
  worksToggle,
  setHomeToggle,
  setAboutToggle,
  setworksToggle,
}: {
  homeToggle: boolean;
  aboutToggle: boolean;
  worksToggle: boolean;
  setHomeToggle: Function;
  setAboutToggle: Function;
  setworksToggle: Function;
}) {
  const [navbarMenuBtnActivate, setNavbarMenuBtnActivate] = useState(false);

  const navbarMenuBtnActivateFunc = useCallback(() => {
    setNavbarMenuBtnActivate((pre) => !pre);
  }, [setNavbarMenuBtnActivate]);

  return (
    <nav id={homeToggle ? "navbar-main" : "navbar-others"}>
      <div id={homeToggle ? "navbar-main-menus" : "navbar-others-menus"}>
        <img
          id={
            homeToggle ? "navbar-main-menus-logo" : "navbar-others-menus-logo"
          }
          src="/image/navbar-logo.png"
          alt="fd"
          width="70"
          height="70"
        />
        <ul>
          <li
            style={{ color: homeToggle ? "#f2c94c" : "#ffffff" }}
            onClick={() => {
              if (!homeToggle) {
                setHomeToggle((pre: boolean) => !pre);
              }
              if (worksToggle) {
                setworksToggle((pre: boolean) => !pre);
              }
              if (aboutToggle) {
                setAboutToggle((pre: boolean) => !pre);
              }
            }}
          >
            HOME
          </li>
          <li
            style={{ color: aboutToggle ? "#f2c94c" : "#ffffff" }}
            onClick={() => {
              if (homeToggle) {
                setHomeToggle((pre: boolean) => !pre);
              }
              if (worksToggle) {
                setworksToggle((pre: boolean) => !pre);
              }
              if (!aboutToggle) {
                setAboutToggle((pre: boolean) => !pre);
              }
            }}
          >
            ABOUT
          </li>
          <li
            style={{ color: worksToggle ? "#f2c94c" : "#ffffff" }}
            onClick={() => {
              if (homeToggle) {
                setHomeToggle((pre: boolean) => !pre);
              }
              if (aboutToggle) {
                setAboutToggle((pre: boolean) => !pre);
              }
              if (!worksToggle) {
                setworksToggle((pre: boolean) => !pre);
              }
            }}
          >
            WORKS
          </li>
        </ul>
      </div>
      <div id={homeToggle ? "navbar-main-logo" : "navbar-others-logo"}>
        <img
          id={homeToggle ? "navbar-main-logo-img" : "navbar-others-logo-img"}
          src="/image/main-logo.png"
          alt="ff"
          width="350"
          height="400"
        />

        <div
          id={homeToggle ? "navbar-main-logo-text" : "navbar-others-logo-text"}
        >
          Front-End Developer
        </div>
        <Contact homeToggle={homeToggle} />
      </div>
      <button
        id={navbarMenuBtnActivate ? "navbar-menuBtn-active" : "navbar-menuBtn"}
        onClick={navbarMenuBtnActivateFunc}
      >
        <i></i>
        <i></i>
        <i></i>
      </button>
      <div
        id="navbar-menuBtn-activate"
        style={{
          height: navbarMenuBtnActivate ? "100%" : "0px",
          opacity: navbarMenuBtnActivate ? "1" : "0",
          visibility: navbarMenuBtnActivate ? "visible" : "hidden",
          transition: "all 700ms",
        }}
      >
        <ul>
          <li
            style={{ color: homeToggle ? "#f2c94c" : "#ffffff" }}
            onClick={() => {
              if (!homeToggle) {
                setHomeToggle((pre: boolean) => !pre);
              }
              if (worksToggle) {
                setworksToggle((pre: boolean) => !pre);
              }
              if (aboutToggle) {
                setAboutToggle((pre: boolean) => !pre);
              }
              setNavbarMenuBtnActivate((pre) => !pre);
            }}
          >
            HOME
          </li>
          <li
            style={{ color: aboutToggle ? "#f2c94c" : "#ffffff" }}
            onClick={() => {
              if (homeToggle) {
                setHomeToggle((pre: boolean) => !pre);
              }
              if (worksToggle) {
                setworksToggle((pre: boolean) => !pre);
              }
              if (!aboutToggle) {
                setAboutToggle((pre: boolean) => !pre);
              }
              setNavbarMenuBtnActivate((pre) => !pre);
            }}
          >
            ABOUT
          </li>
          <li
            style={{ color: worksToggle ? "#f2c94c" : "#ffffff" }}
            onClick={() => {
              if (homeToggle) {
                setHomeToggle((pre: boolean) => !pre);
              }
              if (aboutToggle) {
                setAboutToggle((pre: boolean) => !pre);
              }
              if (!worksToggle) {
                setworksToggle((pre: boolean) => !pre);
              }
              setNavbarMenuBtnActivate((pre) => !pre);
            }}
          >
            WORKS
          </li>
        </ul>
        <img src="/image/navbar-logo.png" alt="fd" width="70" height="70" />
      </div>
    </nav>
  );
}
