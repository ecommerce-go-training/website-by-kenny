import Slider3, { Slider3Item } from 'components/Sliderv3';

import { beachEdit1, beachEdit2, beachEdit3, beachEdit4 } from 'assets/images';

function Test() {
  const data = [beachEdit1, beachEdit2, beachEdit3, beachEdit4];

  return (
    <div>
      <Slider3>
        {data.map((item, index) => (
          <Slider3Item key={index}>
            <div>
              <img src={item} alt='dress image' />
            </div>
          </Slider3Item>
        ))}
      </Slider3>
    </div>
  );
}

export default Test;
