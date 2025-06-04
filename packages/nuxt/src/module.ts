import {defineNuxtModule} from '@nuxt/kit'

import x from '@test-nx/vue'

export default defineNuxtModule({
  meta: {
    name: '@test-nx/nuxt',
    configKey: 'exampleKey',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  setup(options, nuxt) {
    console.log(x)
  },
})
