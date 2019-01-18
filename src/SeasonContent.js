import React from 'react';

//sole purpose to determine what the season is
//return the string either Summer or Winter
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) { //this will only handle summer months
    return lat > 0 ? 'Summer' : 'Winter'; //if it is then it must be the Northern Hemisphere
  }//if lat is above 0 then it will return summer, if below 0 it wll return winter
  else {
    return lat > 0 ? 'Winter' : 'Summer';
  }
}

const SeasonContent = props => {
  //make sure to be able to call getSeason function
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season)

  return (
    <div>Season Content</div>
  );
};

export default SeasonContent
