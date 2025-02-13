import Vue from 'vue'
import SvgIcon from '@/views/components/svgIcon/svgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('@/assets/icons', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
