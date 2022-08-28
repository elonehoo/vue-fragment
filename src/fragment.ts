import Vue from 'vue'
import frag from './frag'

export default new Vue({
  name: 'Fragment',
  directives: {
    frag,
  },
  render(h) {
    return h(
      'div',
      {
        directives: [
          { name: 'frag' },
        ],
      },
      this.$slots.default,
    )
  },
})
