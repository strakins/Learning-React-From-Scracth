import './SeasonDisplay.css';
import React from "react";


const seasonConfig = {
  summer: {
    text: "Let's hit the Beach",
    iconName: "sun"
  },
  winter: {
    text: "Burr, it is chilly",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  // console.log(props.lat)
  // We need to write code to display the month
  const season = getSeason(props.lat, new Date().getMonth());

  // The below has been replaced with config file @ the top of the codebase
  // const actions = season === "winter" ? "Burr, it is chilly" : "Let us hit the Beach"
  // const icons = season === "winter" ? "snowflake" : "sun"

  // To reference the configfile
  const {text, iconName} = seasonConfig[season]
  return (
    <div className={`season-display ${season}`}>
        <i className={`${iconName} icon-left icon massive`}  />
        <h1>{text}</h1>
        <i className={`${iconName} icon-right icon massive`}  />

    </div>
  );
};

export default SeasonDisplay;
