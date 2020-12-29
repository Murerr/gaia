import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
	},
	theme: {
		themes: {
			light: {
				primary: '#1E1E1E',
				secondary: '#90a4ae',
				accent: '#c1d5e0',
				error: '#b71c1c',
				success: '#66BB6A',
			},
		},
	},
});
