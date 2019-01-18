import React from 'react';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  }
  else {
    return lat > 0 ? 'Winter' : 'Summer';
  }
}

const SeasonContent = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === 'Winter' ? 'Brrr, it is chilly' : 'Lets hit the beach'

  return (
    <div>{text}</div>
  );
};

export default SeasonContent
