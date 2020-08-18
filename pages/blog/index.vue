<template>
  <div class="container mx-auto">
    <h1 class="text-5xl font-bold text-center my-8">
      {{ $t('blog.title') }}📚
    </h1>
    <section class="text-gray-700 body-font overflow-hidden">
      <div class="container px-5 pt-24 mx-auto">
        <div v-for="article in articles" :key="article.id" class="-my-8">
          <div class="py-8 flex flex-wrap md:flex-no-wrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span class="tracking-widest text-xl font-xl title-font text-gray-900">{{ $t('blog.category') }}</span>
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
                <nuxt-link :to="`${article.slug}`">
                  {{ $t('blog.learn') }} ➚
                </nuxt-link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <nuxt-link to="/" class="text-gray text-xl font-medium pt-4 underline">
      {{ $t('blog.home') }}
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
  async asyncData ({ $content, app }) {
    let articles = await $content(app.i18n.defaultLocale, 'blog')
      .sortBy('date', 'desc')
      .fetch()
    if (app.i18n.defaultLocale !== app.i18n.locale) {
      try {
        const newArticles = await $content(app.i18n.locale, 'blog')
          .sortBy('date', 'desc')
          .fetch()
        articles = articles.map((article) => {
          const newArticle = newArticles.find(newArticle => newArticle.slug === article.slug)
          return newArticle || article
        })
      } catch (err) {}
    }
    return {
      articles
    }
  },
  head () {
    return {
      title: this.$i18n.t('blog.title')
    }
  }
}
</script>
