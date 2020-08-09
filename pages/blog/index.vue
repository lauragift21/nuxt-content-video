<template>
  <div class="container mx-auto">
    <h1 class="text-5xl font-bold text-center my-8">
      My Writing 📚
    </h1>
    <section class="text-gray-700 body-font overflow-hidden">
      <div class="container px-5 pt-24 mx-auto">
        <div v-for="article in articles" :key="article.id" class="-my-8">
          <div class="py-8 flex flex-wrap md:flex-no-wrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="tracking-widest font-medium title-font text-gray-900">CATEGORY</span>
              <span class="mt-1 text-gray-500 text-md">{{ article.createdAt | formatDate }}</span>
            </div>
            <div class="md:flex-grow">
              <h2
                class="text-2xl font-medium text-gray-900 title-font mb-2"
              >
                {{ article.title }}
              </h2>
              <p
                class="leading-relaxed"
              >
                {{ article.description }}
              </p>
              <a class="text-teal-500 inline-flex items-center mt-4">
                <nuxt-link :to="`/blog/${article.slug}/`">
                  Learn More
                </nuxt-link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <nuxt-link to="/" class="text-gray text-2xl pt-4 underline">
      Go Home
    </nuxt-link>
  </div>
</template>

<script>
import { format } from 'date-fns'
export default {
  name: 'Blog',
  filters: {
    formatDate () {
      return format(new Date(), 'dd MMM yyyy')
    }
  },
  async asyncData (context) {
    const { $content } = context
    const articles = await $content('blog').fetch()
    return {
      articles
    }
  }
}
</script>

<style>
</style>
