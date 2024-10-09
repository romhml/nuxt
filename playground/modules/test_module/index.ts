// `nuxt/kit` is a helper subpath import you can use when defining local modules
// that means you do not need to add `@nuxt/kit` to your project's dependencies
import { createResolver, defineNuxtModule, extendPages } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'test-module',
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    extendPages((pages) => {
      pages.unshift({
        name: 'isolated',
        path: '/isolate',
        file: resolve('./runtime/isolate.vue'),
        meta: {
          isolate: true,
        },
      })
    })
  },
})
