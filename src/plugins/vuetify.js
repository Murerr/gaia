import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		themes: {
			light: {
				primary: '#212121',
				secondary: '#90a4ae',
				accent: '#c1d5e0',
				error: '#b71c1c',
				success: '#a5d6a7',
			},
		},
	},
});
