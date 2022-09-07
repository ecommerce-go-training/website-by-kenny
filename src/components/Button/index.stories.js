import Button from '.';

export default {
  title    : 'Components/Button',
  component: Button,
  argTypes : { handleClick: { action: 'Execute something when clicked' } },
};

const Template = (args) => <Button {...args} />;

const logIn = Template.bind({});
logIn.args = {
  type    : 'button',
  children: 'log in',
};

const signIn = Template.bind({});
signIn.args = {
  type    : 'submit',
  children: 'sign in',
};

export { logIn, signIn };
