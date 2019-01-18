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
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonContent
