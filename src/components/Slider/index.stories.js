import Slider from '.';

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

export default {
  type     : 'Components/Input',
  component: Slider,
};

const Template = (args) => <Slider {...args} />;

const normalSlider = Template.bind({});
normalSlider.args = {
  shiftImg: '1',
  imgList : imgList,
};

export { normalSlider };
