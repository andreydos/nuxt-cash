import { storiesOf } from '@storybook/vue';
import store from '../.storybook/store';
import Logo from './Logo';

storiesOf('Logo', module)
  .add('As a component', () => ({
    components: { Logo },
    store,
    template: '<Logo />'
  }));
