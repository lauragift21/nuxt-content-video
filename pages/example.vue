<template>
  <section class="text-gray-700 body-font">
    <div class="container mx-auto flex px-5 py-48 md:flex-row flex-col items-center">
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1 class="title-font sm:text-5xl text-5xl mb-4 font-medium text-gray-900">
          {{ $t('home.heading') }}
        </h1>
        <div
          class="mb-8 leading-relaxed"
        >
          <nuxt-content :document="doc" />
        </div>
        <div class="flex justify-center">
          <button
            class="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg"
          >
            {{ $t('home.home') }}
          </button>
          <button
            class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
          >
            <nuxt-link to="/blog">
              {{ $t('home.blog') }}
            </nuxt-link>
          </button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    let doc
    try {
      doc = await $content('example').fetch()
    } catch (error) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    return {
      doc
    }
  },
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
