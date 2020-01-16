import { storiesOf } from '@storybook/vue'
import Logo from './Logo'
import store from '@/.storybook/store'

storiesOf('Logo', module)
  .add('As a component', () => ({
    components: { Logo },
    store,
    template: '<Logo />'
  }))
