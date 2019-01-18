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

  return (
    //Use {} to reference JS variable but can also put any JS expression inside {}
    //This will be used to help display a summer or winter statement depending on season variable
    //Using ternary expression is a split vote topic in community
    //Can either use below eample or create another variable then call that varaible in the div
    <div>{season === 'Winter' ? 'Brrr, it is chilly' : 'Lets hit the beach' }</div>
  );
};

export default SeasonContent
