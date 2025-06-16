import { defineBoot } from '#q-app/wrappers'
import { VueQueryPlugin } from '@tanstack/vue-query'

// This boot file sets up Vue Query for the application
// Based on https://tanstack.com/query/latest/docs/framework/vue/installation#vue-query-initialization

export default defineBoot(({ app }) => {

  app.use(VueQueryPlugin);

})
