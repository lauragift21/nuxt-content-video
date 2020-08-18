<template>
  <article class="container mx-auto my-10">
    <header class="text-4xl text-center font-bold">
      {{ article.title }}
      <p class="text-xl">
        {{ article.createdAt | formatDate }}
      </p>
    </header>
    <nuxt-content :document="article" class="w-3/4 mx-auto py-6" />
    <nuxt-link to="/blog" class="underline text-lg">
      Blog Home
    </nuxt-link>
  </article>
</template>

<script>
import { format } from 'date-fns'
export default {
  filters: {
    formatDate () {
      return format(new Date(), 'dd MMM yyyy')
    }
  },
  async asyncData ({ $content, app, params }) {
    let articles = await $content(app.i18n.defaultLocale, 'blog', params.slug).fetch()
    if (app.i18n.defaultLocale !== app.i18n.locale) {
      try {
        const newArticles = await $content(app.i18n.locale, params.slug).fetch()
        articles = articles.map((article) => {
          const newArticle = newArticles.find(newArticle => newArticle.slug === article.slug)
          return newArticle || article
        })
      } catch (err) {}
    }
    return {
      articles
    }
  }
}
</script>

<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 20px;
  margin-top: 15px;
}
.nuxt-content p {
  margin-top: 10px;
}
.icon.icon-link {
  background-image: url('~assets/hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
</style>
