import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueI18n from 'vue-i18n'

Vue.use(Vuetify);
Vue.use(VueI18n)

import fr from 'vuetify/es5/locale/fr'
import en from "vuetify/es5/locale/en";

export default new Vuetify({
	lang: {
		locales: { en, fr },
		current: 'en',
	},
	icons: {
		iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
	},
	theme: {
		themes: {
			light: {
				primary: '#212121',
				secondary: '#90a4ae',
				accent: '#c1d5e0',
				error: '#b71c1c',
				success: '#66BB6A',
			},
		},
	},
});
