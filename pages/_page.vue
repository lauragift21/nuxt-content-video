<template>
  <nuxt-content :document="doc" />
</template>

<script>
export default {
  async asyncData ({ $content, app, params }) {
    const { page } = params
    let doc
    try {
      doc = await $content(`${app.i18n.locale}/pages`, page || 'home').fetch()
    } catch (error) {
      try {
        doc = await $content(`${app.i18n.defaultLocale}/pages`, page || 'home').fetch()
      } catch (error) {
        return error({ statusCode: 404, message: 'Page not found' })
      }
    }
    return {
      doc
    }
  }
}
</script>
