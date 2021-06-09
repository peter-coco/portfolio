import main_logo from "../../image/main-logo.png";
import { Contact } from "../contact/contact";
import "./home.css";

export function Home({ homeToggle }: { homeToggle: boolean }) {
  return (
    <div id={homeToggle ? "home-main-wrap" : "home-others-wrap"}>
      <img
        id={homeToggle ? "home-main-logo-img" : "home-others-logo-img"}
        // src="/image/main-logo.png"
        src={main_logo}
        alt="ff"
        width="350"
        height="400"
      />

      <div id={homeToggle ? "home-main-logo-text" : "home-others-logo-text"}>
        Front-End Developer
      </div>
      <Contact homeToggle={homeToggle} />
    </div>
  );
}
