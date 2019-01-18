import React from 'react';

//sole purpose to determine what the season is
//return the string either Summer or Winter
const getSeason = (lat, month) => {

}

const SeasonContent = props => {
  //make sure to be able to call getSeason function
  const season = getSeason(props.lat, new Date().getMonth())

  return (
    <div>Season Content</div>
  );
};

export default SeasonContent
