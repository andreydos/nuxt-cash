import { storiesOf } from '@storybook/vue';
import store from '../.storybook/store';
import Wallets from './Wallets';

storiesOf('Wallets', module)
  .add('As a component', () => ({
    components: { Wallets },
    store,
    template: '<Wallets />'
  }));
