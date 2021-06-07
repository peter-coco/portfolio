import { Icon, InlineIcon } from "@iconify/react";
import githubFill from "@iconify/icons-akar-icons/github-fill";
import welcomeWriteBlog from "@iconify/icons-dashicons/welcome-write-blog";

import "./contact.css";

export function Contact({ homeToggle }: { homeToggle: boolean }) {
  return (
    <div
      id="contact"
      style={{
        visibility: homeToggle ? "visible" : "hidden",
        clipPath: homeToggle
          ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
          : "polygon(0 0, 100% 0, 0 0, 0 0)",
        height: "70px",
        transition: "all 300ms",
        transitionDelay: homeToggle ? "1000ms" : "",
      }}
    >
      <a className="link-icons" href="https://github.com/coco-peter">
        <Icon icon={githubFill} />
      </a>
      <a className="link-icons" href="https://coco-peter.tistory.com/">
        <Icon icon={welcomeWriteBlog} />
      </a>
    </div>
  );
}
