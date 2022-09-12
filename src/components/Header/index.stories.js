import { withRouter } from 'storybook-addon-react-router-v6';

import Header from '.';

export default {
  type      : 'Components/Header',
  component : Header,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
};

const Template = (args) => <Header {...args} />;

const navBar = Template.bind({});
navBar.args = {};

export { navBar };
