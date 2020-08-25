<template>
  <header class="p-3 border-b-2 border-gray-100">
    <div class="container mx-auto flex justify-between items-center">
      <div class="right flex justify-start items-center">
        <nuxt-link to="/" class="flex">
          <Logo class="w-8 h-8 mr-3" />
          <h1 class="text-lg font-bold text-gray-700 pl-2 pt-2">
            Nuxt Content Demo
          </h1>
        </nuxt-link>
      </div>
      <div class="left self-end">
        <ul class="flex lang-switch justify-around">
          <li v-if="$i18n.locale !== 'en'" class="px-2">
            <nuxt-link class="text-md ..." :to="switchLocalePath('en')">
              EN
            </nuxt-link>
          </li>
          <li v-if="$i18n.locale !== 'es'" class="px-2">
            <nuxt-link class="text-md ..." :to="switchLocalePath('es')">
              ES
            </nuxt-link>
          </li>
          <li v-if="$i18n.locale !== 'fr'">
            <nuxt-link class="text-md ..." :to="switchLocalePath('fr')">
              FR
            </nuxt-link>
          </li>
        </ul>
      </div>
      <!-- <div class="left self-end">
        <select
          class="lang-switch bg-gray-200 rounded font-medium px-3 py-2"
          :value="$i18n.locale"
          @change="onChange"
        >
          <option
            v-for="(locale, i) in $i18n.locales"
            :key="i"
            :value="locale.code"
            class="text-2xl text-green"
          >
            {{ locale.code }}
          </option>
        </select>
      </div> -->
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    onChange (event) {
      const locale = this.$i18n.locales.find(
        locale => locale.code === event.target.value
      )
      window.location = locale.code || ''
    }
  }
}
</script>
