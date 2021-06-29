import { Icon, InlineIcon } from "@iconify/react";
import sharpNavigateNext from "@iconify/icons-ic/sharp-navigate-next";
import htmlFive2 from "@iconify/icons-icomoon-free/html-five2";
import css3Icon from "@iconify/icons-fa-brands/css3";
import bxlReact from "@iconify/icons-bx/bxl-react";
import typescriptIcon from "@iconify/icons-cib/typescript";
import linkOut from "@iconify/icons-akar-icons/link-out";
import githubFill from "@iconify/icons-akar-icons/github-fill";

import { useState, useEffect, useCallback } from "react";

import project1 from "../../image/projects1.png";
import project2 from "../../image/projects2.png";
import project3 from "../../image/projects3.png";

import "./works.css";

function Worklist({
  imageSrc,
  title,
  subscription,
  position,
  projectUrl,
  projectGitUrl,
}: {
  imageSrc: any;
  title: string;
  subscription: string;
  position: string;
  projectUrl: string;
  projectGitUrl: string;
}) {
  return (
    <div className="works-list">
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
        <div
          id="links"
          style={{ display: "flex", margin: "0 auto", gap: "30px" }}
        >
          <a className="works-link-icons" href={projectUrl} target="_blank">
            <Icon icon={linkOut} />
          </a>
          <a className="works-link-icons" href={projectGitUrl} target="_blank">
            <Icon icon={githubFill} />
          </a>
        </div>
      </div>
    </div>
  );
}

export function Works({ worksToggle }: { worksToggle: boolean }) {
  const [projectsIdx, setProjectsIdx] = useState<number>(0);
  const projectsCnt = 3;
  const [workListWidth, setWorkListWidth] = useState<number>(window.innerWidth);
  // console.log(project1, project2, project3);
  const workListArray = [
    [
      `${project1}`,
      "포트폴리오 웹 사이트",
      "포트폴리오 웹 사이트를 React를 사용하여 SPA로 구현하였습니다.",
      "기획, 디자인, 개발",
      "https://coco-peter.github.io/portfolio/",
      "https://github.com/coco-peter/portfolio",
    ],
    [
      `${project2}`,
      "Music Player",
      "react를 이용하여 music player app을 구현해봤습니다.",
      "기획, 디자인, 개발",
      "https://coco-peter.github.io/portfolio_musicPlayer/",
      "https://github.com/coco-peter/portfolio_musicPlayer",
    ],
    [
      `${project3}`,
      "독도 재단 랜딩페이지",
      "독도 재단 홈페이지를 react로 클론코딩하였습니다.",
      "개발",
      "https://coco-peter.github.io/dokdoLandingPage/",
      "https://github.com/coco-peter/dokdoLandingPage",
    ],
  ];

  const [alarmZoneTimerToggle, setAlarmZoneTimerToggle] = useState(false);

  const alarmZoneTimerOn = useCallback(() => {
    setAlarmZoneTimerToggle(true);
    // console.log("mouse leave");
  }, [setAlarmZoneTimerToggle]);

  const alarmZoneTimerOff = useCallback(() => {
    setAlarmZoneTimerToggle(false);
    // console.log("mouse enter");
  }, [setAlarmZoneTimerToggle]);

  useEffect(() => {
    if (alarmZoneTimerToggle) {
      const alarmZoneTimer = setInterval(() => {
        setProjectsIdx((pre) => (pre + 1 === projectsCnt ? 0 : pre + 1));
        // console.log(`hello : ${alarmZoneBannerIdx}`);
      }, 5000);

      return () => clearInterval(alarmZoneTimer);
    }
  }, [alarmZoneTimerToggle, setAlarmZoneTimerToggle]);

  useEffect(() => {
    function resizeEventFunc() {
      setWorkListWidth((pre) => window.innerWidth);
    }

    window.addEventListener("resize", resizeEventFunc);
    return () => window.removeEventListener("resize", resizeEventFunc);
  }, []);

  useEffect(() => {
    worksToggle ? alarmZoneTimerOn() : alarmZoneTimerOff();
  }, [worksToggle]);

  return (
    <div
      id="works"
      style={{
        visibility: "visible",
      }}
    >
      <div
        id="works-wrap"
        onMouseEnter={alarmZoneTimerOff}
        onMouseLeave={alarmZoneTimerOn}
      >
        <div id="works-lists">
          {workListArray.map(
            ([
              imageSrc,
              title,
              subscription,
              position,
              projectUrl,
              projectGitUrl,
            ]) => (
              <Worklist
                key={title}
                imageSrc={imageSrc}
                title={title}
                subscription={subscription}
                position={position}
                projectUrl={projectUrl}
                projectGitUrl={projectGitUrl}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
