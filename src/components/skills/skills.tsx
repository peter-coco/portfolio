import "./skills.css";

function Skill({
  title,
  percentage,
  color,
}: {
  title: string;
  percentage: string;
  color: string;
}) {
  return (
    <li className="about-skills-list" style={{ marginBottom: "20px" }}>
      <div
        className="about-skills-titles"
        style={{ color: "#ffffff", marginBottom: "10px" }}
      >
        {title}
      </div>
      <div style={{ width: "100%", height: "4px", backgroundColor: "#454545" }}>
        <span
          style={{
            display: "inline-block",
            width: `${percentage}%`,
            height: "4px",
            backgroundColor: color,
            position: "relative",
            bottom: "13px",
            // animation: aboutToggle ? `${title} 1s ease-in-out` : "",
            // animationDelay: aboutToggle ? "1.1s" : "",
          }}
        ></span>
      </div>
    </li>
  );
}

export function Skills() {
  return (
    <div id="skillsWrap">
      <div id="skills">
        <div className="about-titles">I CAN</div>
        <ul>
          {[
            ["HTML5", "75", "#4DA3BE"],
            ["CSS3", "70", "#864DBE"],
            ["JavaScript", "65", "#BE4D83"],
            ["TypeScript", "50", "#4DBE81"],
            ["React", "60", "#AEBE4D"],
            ["Python", "70", "#BE6F4D"],
          ].map(([title, percentage, color]) => (
            <Skill
              key={title}
              title={title}
              percentage={percentage}
              color={color}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
