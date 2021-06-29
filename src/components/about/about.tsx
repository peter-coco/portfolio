import "./about.css";

import { Icon, InlineIcon } from "@iconify/react";
import thinking20Regular from "@iconify/icons-fluent/thinking-20-regular";
import peopleCommunity20Filled from "@iconify/icons-fluent/people-community-20-filled";
import outlineDirectionsRun from "@iconify/icons-ic/outline-directions-run";
import roundLightbulb from "@iconify/icons-ic/round-lightbulb";

export function About({ aboutToggle }: { aboutToggle: boolean }) {
  return (
    <div id="about">
      <div id="about-wrap">
        <div id="about-introduce">
          <div className="about-titles">WHO AM I</div>
          <div id="about-introduce-discription">
            안녕하세요 ! 성장하고싶은 프론트 개발자 윤재원입니다. 최근까지
            영상처리 개발자로 일하였고, Input/Output의 경계가 분명한 웹개발
            분야의 매력을 느껴 공부하고 있습니다. 유지보수가 가능한 코드를 짜기
            위해 항상 생각하며 코딩을 하고 있습니다
          </div>
        </div>
        <div id="about-keyword">
          <div className="about-titles">KEYWORD</div>
          <ul id="about-keyword-lists">
            <li className="about-keyword-list">
              <Icon className="about-keyword-icons" icon={thinking20Regular} />
              <div className="about-keyword-text">Thinking</div>
            </li>
            <li className="about-keyword-list">
              <Icon
                className="about-keyword-icons"
                icon={peopleCommunity20Filled}
              />
              <div className="about-keyword-text">Communication</div>
            </li>
            <li className="about-keyword-list">
              <Icon
                className="about-keyword-icons"
                icon={outlineDirectionsRun}
              />
              <div className="about-keyword-text">Effort</div>
            </li>
            <li className="about-keyword-list">
              <Icon className="about-keyword-icons" icon={roundLightbulb} />
              <div className="about-keyword-text">Creative</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
