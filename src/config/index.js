import Slider from 'components/Slider';

import {
  beachEdit1,
  beachEdit2,
  beachEdit3,
  beachEdit4,
  newArrival1,
  newArrival2,
  newArrival3,
  newArrival4,
} from 'assets/images';

function Test() {
  const imgList = [
    beachEdit1,
    beachEdit2,
    beachEdit3,
    beachEdit4,
    newArrival1,
    newArrival2,
    newArrival3,
    newArrival4,
  ];

  return <Slider imgList={imgList} />;
}

export default Test;
