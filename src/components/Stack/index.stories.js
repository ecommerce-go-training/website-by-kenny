import Stack from '.';

import './style.scss';

export default {
  type     : 'Components/Stack',
  component: Stack,
  argTypes : {
    totalChildren: {
      type        : 'number',
      defaultValue: 3,
    },
  },
};

const Template = ({ totalChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(totalChildren).keys()].map((item) => (
      <div
        className='item'
        key={item}
        onClick={() => alert('Pop item description later')}
      >
				Img
      </div>
    ))}
  </Stack>
);

const rowStack = Template.bind({});
rowStack.args = {
  spacing  : 4,
  wrap     : true,
  direction: 'row',
};

const colStack = Template.bind({});
colStack.args = {
  spacing  : 4,
  wrap     : true,
  direction: 'column',
};

export { colStack, rowStack };
