import Collapse from '.';

export default {
  type     : 'Components/Dropdown',
  component: Collapse,
  argTypes : {
    totalChildren: {
      type        : 'number',
      defaultValue: '3',
    },
  },
};

const Template = ({ totalChildren, args }) => (
  <Collapse {...args}>
    {[...Array(totalChildren).keys()].map((item) => (
      <div key={item}>{item}</div>
    ))}
  </Collapse>
);

const faq = Template.bind({});
faq.args = {
  label: 'How to cook an egg',
};

export { faq };
