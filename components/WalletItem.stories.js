import { storiesOf } from '@storybook/vue';
import store from '../.storybook/store';
import WalletItem from './WalletItem';
import mocks from '@/helpers/mocks';
const fakeWallet = mocks.generateFakeWallets(1)[0];

storiesOf('WalletItem', module)
  .add('As a component', () => ({
    components: { WalletItem },
    data () {
      return {
        fakeWallet
      };
    },
    store,
    template: '<WalletItem :wallet-item="fakeWallet" />'
  }))
  .add('Mobile view', () => ({
    components: { WalletItem },
    data () {
      return {
        fakeWallet
      };
    },
    store,
    template: '<div style="width: 150px;"><WalletItem :wallet-item="fakeWallet" /></div>'
  }));
