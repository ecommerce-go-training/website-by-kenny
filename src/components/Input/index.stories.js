import Input from '.';

export default {
  type     : 'Components/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

const username = Template.bind({});
username.args = {
  label: 'username',
};

const password = Template.bind({});
password.args = {
  label: 'password',
  type : 'password',
};

export { password, username };
