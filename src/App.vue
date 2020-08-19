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

			</v-list>
		</v-navigation-drawer>
		<v-app-bar app color="primary" dark>
			<v-container class="hidden-xs-only white--text" fluid>
				<router-link :to="{path: '/' }"><v-btn text class="white--text">Home</v-btn></router-link>
				<router-link :to="{path: '/portfolio' }"><v-btn text class="white--text">Portfolio</v-btn></router-link>
				<router-link :to="{path: '/contact' }"><v-btn text class="white--text">Contact</v-btn></router-link>
				<router-link :to="{path: '/about' }"><v-btn text class="white--text">About</v-btn></router-link>
			</v-container>
			<v-spacer></v-spacer>
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
			}
		},
		data: () => ({
			drawer: null
		}),
	};
</script>
