<template>
  <div
    class="container mx-auto flex px-5 py-48 md:flex-row flex-col items-center"
  >
    <div
      class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
    >
      <h1
        class="title-font sm:text-5xl text-5xl mb-4 font-medium text-gray-900"
      >
        {{ title }}
      </h1>
      <p class="mb-8 leading-relaxed">
        {{ subtitle }}
      </p>
      <div class="flex justify-center">
        <button
          class="inline-flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg"
        >
          {{ homeText }}
        </button>
        <button
          class="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg"
        >
          <nuxt-link to="/blog">
            {{ blogLabel }}
          </nuxt-link>
        </button>
      </div>
    </div>
    <div v-if="image" class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" :src="image">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''

    },
    image: {
      type: String,
      default: ''
    },
    homeText: {
      type: String,
      default: ''
    },
    blogLabel: {
      type: String,
      default: ''
    }
  }
}
</script>
