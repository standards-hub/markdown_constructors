<template>
  <footer class="h-16 relative w-full border-t dark:border-gray-800 bg-white dark:bg-gray-900 z-20">
    <div class="h-full w-full container mx-auto px-4 lg:px-8 flex items-center justify-between">
      <div class="flex items-end">
        <p>version: {{appVersion}}</p>
      </div>
      <div class="flex">
        <AppLangSwitcher />
        <AppColorSwitcher class="ml-4" />
      </div>
    </div>
  </footer>
</template>

<script>
import {version} from '../../package'

export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  data: () => ({
    appVersion:version
  })
}
</script>
