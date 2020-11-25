<template>
	<v-app>
		<v-navigation-drawer
				v-model="drawer"
				v-if="mini"
				app
				right
		>
			<v-list dense>
				<v-list-item link :to="{path: '/' }">
					<v-list-item-action>
						<v-icon>mdi-home</v-icon>
					</v-list-item-action>
					<v-list-item-content >
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-item link :to="{path: '/portfolio' }">
					<v-list-item-action>
						<v-icon>mdi-wallet</v-icon>
					</v-list-item-action>
					<v-list-item-content >
						<v-list-item-title>Portfolio</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-item link :to="{path: '/contact' }">
					<v-list-item-action>
						<v-icon>mdi-email</v-icon>
					</v-list-item-action>
					<v-list-item-content >
						<v-list-item-title>Contact</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link :to="{path: '/about' }">
					<v-list-item-action>
						<v-icon>mdi-information</v-icon>
					</v-list-item-action>
					<v-list-item-content >
						<v-list-item-title>About</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-spacer></v-spacer>
					<v-container align="center" justify="center">
						<v-row justify="center">
							<a v-if="is_lang_english" class="pa-2 text-decoration-none" target="_blank" ><v-img max-height="40" max-width="40" src="./assets/united-kingdom.svg"></v-img></a>
							<a v-else class="pa-2 text-decoration-none" target="_blank" ><v-img max-height="40" max-width="40" src="./assets/france.svg"></v-img></a>
							<a class="pa-2 text-decoration-none" href="https://github.com/Murerr" target="_blank" ><v-icon size="40">mdi-github</v-icon></a>
							<a class="pa-2 text-decoration-none" href="https://www.linkedin.com/in/murerr/" target="_blank" ><v-icon size="40">mdi-linkedin</v-icon></a>
						</v-row>
					</v-container>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar app color="primary" dark>
			<v-container class="hidden-xs-only white--text" fluid>
				<router-link :to="{path: '/' }"><v-btn text class="white--text">{{ $t('navbar.home') }}</v-btn></router-link>
				<router-link :to="{path: '/portfolio' }"><v-btn text class="white--text">{{ $t('navbar.portfolio') }}</v-btn></router-link>
				<router-link :to="{path: '/contact' }"><v-btn text class="white--text">{{ $t('navbar.contact') }}</v-btn></router-link>
				<router-link :to="{path: '/about' }"><v-btn text class="white--text">{{ $t('navbar.about') }}</v-btn></router-link>
			</v-container>
			<v-spacer></v-spacer>
      <a @click="updateLang('en')" v-if="is_lang_french" class="hidden-xs-only" ><v-btn icon><v-img max-height="24" max-width="24" src="./assets/united-kingdom.svg"></v-img></v-btn></a>
      <a @click="updateLang('fr')" v-else class="hidden-xs-only color" ><v-btn icon><v-img max-height="24" max-width="24" src="./assets/france.svg"></v-img></v-btn></a>
			<a class="hidden-xs-only" href="https://github.com/Murerr" target="_blank" ><v-btn icon><v-icon>mdi-github</v-icon></v-btn></a>
			<a class="hidden-xs-only" href="https://www.linkedin.com/in/murerr/" target="_blank" ><v-btn icon><v-icon>mdi-linkedin</v-icon></v-btn></a>
			<v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
		</v-app-bar>

		<v-main class="pa-0">
			<router-view></router-view>
		</v-main>
		<v-footer class="justify-center" color="primary" height="100">
			<div class="title font-weight-light white--text text--lighten-1 text-center">
				&copy; {{ (new Date()).getFullYear() }} Made by Rudy Murer
			</div>
		</v-footer>
	</v-app>
</template>
<style scoped>
.v-application a {
  color: transparent;
}
</style>
<script>
	export default {
		name: 'App',
		components: {

		},
		computed: {
			mini() {
				switch (this.$vuetify.breakpoint.name) {
					case 'xs':
						return true;
					case 'sm':
						return false;
					case 'md':
						return false;
					case 'lg':
						return false;
					case 'xl':
						return false;
					default : return false
				}
			},
      is_lang_french() {
        return /^fr\b/.test(navigator.language) || this.$root.$i18n.locale === 'fr';
      }
		},
    methods:{
      updateLang(lang){
        this.$root.$i18n.locale = lang;
      }
    },
		data: () => ({
			drawer: null,
		}),
	};
</script>
