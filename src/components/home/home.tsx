import main_logo from "../../image/main-logo.png";
import { Contact } from "../contact/contact";
import "./home.css";

export function Home({ homeToggle }: { homeToggle: boolean }) {
  return (
    <div id="home-main-wrap">
      <img
        id="home-main-logo-img"
        // src="/image/main-logo.png"
        src={main_logo}
        alt="ff"
        width="350"
        height="400"
      />
      <div id="home-main-logo-text">Front-End Developer</div>
      <Contact homeToggle={homeToggle} />
    </div>
  );
}
