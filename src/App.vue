<template>
	<v-app>
		<v-app-bar app color="primary" dark>
			<v-container class="white--text" fluid>
				<router-link :to="{path: '/' }"><v-btn text class="white--text">Home</v-btn></router-link>
				<router-link :to="{path: '/portfolio' }"><v-btn text class="white--text">Portfolio</v-btn></router-link>
				<router-link :to="{path: '/contact' }"><v-btn text class="white--text">Contact</v-btn></router-link>
				<router-link :to="{path: '/about' }"><v-btn text class="white--text">About</v-btn></router-link>
			</v-container>
			<v-spacer></v-spacer>
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

		data: () => ({
			//
		}),
	};
</script>
