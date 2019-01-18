import './SeasonContent.css';
//Webpack will see that a CSS file is imported and stick it in the index.html file
import React from 'react';

//DRY
//This also helps provide easy updating for either text or iconName
const seasonConfig = {
  summer: {
    text: 'Lets hit the river!',
    iconName: 'sun'
  },
  winter: {
    text: 'Brrr, it is chilly!',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonContent = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season] //return season with text and icon

  return (
    <div className={`season-content ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonContent
