import { Navbar } from "../navbar/navbar";

import { Icon, InlineIcon } from "@iconify/react";
import sharpNavigateNext from "@iconify/icons-ic/sharp-navigate-next";
import htmlFive2 from "@iconify/icons-icomoon-free/html-five2";
import css3Icon from "@iconify/icons-fa-brands/css3";
import bxlReact from "@iconify/icons-bx/bxl-react";
import typescriptIcon from "@iconify/icons-cib/typescript";
import linkOut from "@iconify/icons-akar-icons/link-out";

import { useState, useEffect } from "react";

import "./works.css";

function Worklist({
  imageSrc,
  title,
  subscription,
  position,
}: {
  imageSrc: string;
  title: string;
  subscription: string;
  position: string;
}) {
  return (
    <li className="works-list">
      <img src={imageSrc} alt="" className="works-list-image" />
      <div className="works-list-detail">
        <div className="works-list-detail-title">{title}</div>
        <div className="works-list-detail-subscription">{subscription}</div>
        <div className="works-list-detail-languages">
          <Icon icon={htmlFive2} className="languages-icons" />
          <Icon icon={css3Icon} className="languages-icons" />
          <Icon icon={bxlReact} className="languages-icons" />
          <Icon icon={typescriptIcon} className="languages-icons" />
        </div>
        <div className="works-list-detail-subscription">{position}</div>
        <a className="link-icons" href="http://www.naver.com" target="_blank">
          <Icon icon={linkOut} />
        </a>
        {/* <div className="works-list-detail-subscription">
                2021.05.24 - 2021.05.31
              </div> */}
      </div>
    </li>
  );
}

export function Works({ worksToggle }: { worksToggle: boolean }) {
  const [projectsIdx, setProjectsIdx] = useState<number>(0);
  const [workListWidth, setWorkListWidth] = useState<number>(window.innerWidth);

  const workListArray = [
    [
      "/image/works/projects1.JPG",
      "포트폴리오 웹 사이트",
      "포트폴리오 웹 사이트를 React를 사용하여 SPA로 구현하였습니다.",
      "기획, 디자인, 개발",
    ],
    [
      "/image/works/projects2.JPG",
      "Music Player",
      "react를 이용하여 music player app을 구현해봤습니다.",
      "기획, 디자인, 개발",
    ],
    [
      "/image/works/projects3.JPG",
      "독도 재단 랜딩페이지",
      "독도 재단 홈페이지를 react로 클론코딩하였습니다.",
      "개발",
    ],
  ];

  useEffect(() => {
    const alarmZoneTimer = setInterval(() => {
      setProjectsIdx((pre) => (pre + 1 === 3 ? 0 : pre + 1));
      // console.log(`hello : ${alarmZoneBannerIdx}`);
    }, 3000);

    return () => clearInterval(alarmZoneTimer);
  }, []);

  useEffect(() => {
    function resizeEventFunc() {
      setWorkListWidth((pre) => window.innerWidth);
    }

    window.addEventListener("resize", resizeEventFunc);
    return () => window.removeEventListener("resize", resizeEventFunc);
  }, []);

  return (
    <div
      id="works"
      style={{
        visibility: worksToggle ? "visible" : "hidden",
        clipPath: worksToggle
          ? "polygon(100% 0, 0 0, 0 100%, 100% 100%)"
          : "polygon(100% 0, 0 0, 0 0, 100% 0)",
        transition: worksToggle ? "all 800ms" : "all 800ms",
        transitionDelay: worksToggle ? "1000ms" : "",
      }}
    >
      <div id="works-wrap">
        <ul
          id="works-lists"
          style={{
            transition: "1000ms",
            transform:
              workListWidth > 340
                ? `translate(${projectsIdx * -500}px)`
                : `translate(${projectsIdx * -280}px)`,
          }}
        >
          {workListArray.map(([imageSrc, title, subscription, position]) => (
            <Worklist
              key={title}
              imageSrc={imageSrc}
              title={title}
              subscription={subscription}
              position={position}
            />
          ))}
        </ul>
      </div>
      <div id="imageSequenceOperation">
        <div
          onClick={() => {
            setProjectsIdx((pre) => (pre - 1 === -1 ? 2 : pre - 1));
          }}
          className="imageSequenceChangeBtn"
        >
          <Icon
            icon={sharpNavigateNext}
            style={{
              transform: "rotate(-180deg)",
            }}
          />
        </div>
        <div id="imageSequence">
          <div
            className="sequence"
            onClick={() => {
              setProjectsIdx((pre) => 0);
            }}
            style={{
              backgroundColor: projectsIdx === 0 ? "#f2c94c" : "#ffffff",
            }}
          ></div>
          <div
            className="sequence"
            onClick={() => {
              setProjectsIdx((pre) => 1);
            }}
            style={{
              backgroundColor: projectsIdx === 1 ? "#f2c94c" : "#ffffff",
            }}
          ></div>
          <div
            className="sequence"
            onClick={() => {
              setProjectsIdx((pre) => 2);
            }}
            style={{
              backgroundColor: projectsIdx === 2 ? "#f2c94c" : "#ffffff",
            }}
          ></div>
        </div>

        <div
          onClick={() => {
            setProjectsIdx((pre) => (pre + 1 === 3 ? 0 : pre + 1));
          }}
          className="imageSequenceChangeBtn"
        >
          <Icon icon={sharpNavigateNext} />
        </div>
      </div>
    </div>
  );
}
