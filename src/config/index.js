//import Slider from 'components/Slider';
import Slider2 from 'components/sliderv2';

/* eslint-disable */
import {
	beachEdit1,
	beachEdit2,
	beachEdit3,
	beachEdit4,
	newArrival1,
	newArrival2,
	newTop,
	newTop2,
} from 'assets/images';

function Test() {
	const imgList = [
		beachEdit1,
		beachEdit2,
		beachEdit3,
		beachEdit4,
		newArrival1,
		newArrival2,
		newTop,
		newTop2,
	];

	return <Slider2 imgList={imgList} />;
}

export default Test;
