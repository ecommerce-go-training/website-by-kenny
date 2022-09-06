import { withRouter } from 'storybook-addon-react-router-v6';

import Footer from '.';

export default {
  type      : 'Components/Footer',
  component : Footer,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/',
    },
  },
};

const Template = (args) => <Footer {...args} />;

const info = Template.bind({});
info.args = {};

export { info };
