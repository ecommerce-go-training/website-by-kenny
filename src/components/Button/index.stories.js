import Button from '.';

export default {
  title    : 'Components/Button',
  component: Button,
  argTypes : { handleClick: { action: 'Execute something when clicked' } },
};

const Template = (args) => <Button {...args} />;

const logIn = Template.bind({});
logIn.args = {
  label: 'log in',
  size : 'med',
};

const signIn = Template.bind({});
signIn.args = {
  label: 'sign in',
  size : 'med',
};

const create = Template.bind({});
create.args = {
  label: 'create',
  size : 'med',
};

const submit = Template.bind({});
submit.args = {
  label: 'submit',
  size : 'med',
};

export { create, logIn, signIn, submit };
