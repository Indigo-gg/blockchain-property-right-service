<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import { domTitle, setDocumentTitle } from '@/utils/domUtil'
import { i18nRender } from '@/locales'
import moment from 'moment'
// eslint-disable-next-line camelcase
import zh_CN from 'ant-design-vue'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')
export default {
  data () {
    return {
      isRouterAlive: true,
      zh_CN
    }
  },
  computed: {
    locale () {
      // 只是为了切换语言时，更新标题
      const { title } = this.$route.meta
      title && (setDocumentTitle(`${i18nRender(title)} - ${domTitle}`))

      return this.$i18n.getLocaleMessage(this.$store.getters.lang).antLocale
    }
  },
  mounted () {
  }
}
</script>
