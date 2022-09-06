import Dropdown from '.';

export default {
  type     : 'Components/Dropdown',
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

const faq = Template.bind({});
faq.args = {
  label      : 'How to cook an egg',
  description: ['You dont', 'Have to', 'Cook it'],
};

export { faq };
