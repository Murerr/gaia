<template>
	<v-content>
		<section id="hero">
			<v-row no-gutters>
				<v-img :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'" src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80">
					<v-container fill-height>
						<v-row align="center" class="white--text mx-auto" justify="center">
							<v-col class="white--text text-center hero-header" cols="12" tag="h1">
								<span class="font-weight-light font-size" >RUDY MURER</span><br>
								<span class="font-weight-black">SOFTWARE DEVELOPER</span>
							</v-col>
							<v-btn class="align-self-end" fab outlined color="white" @click="$vuetify.goTo('#about-me')">
								<v-icon>mdi-chevron-double-down</v-icon>
							</v-btn>
						</v-row>
					</v-container>
				</v-img>
			</v-row>
		</section>
		<section id="about-me">
			<div class="py-12"></div>
				<v-container class="text-center">
					<h2 class="display-2 font-weight-bold mb-3">Hi! I'm Rudy</h2>
					<v-responsive class="mx-auto mb-8" width="56">
						<v-divider class="mb-1"></v-divider>
						<v-divider></v-divider>
					</v-responsive>
					<v-avatar class="elevation-12 mb-12" size="128">
						<v-img src="https://media-exp1.licdn.com/dms/image/C5603AQGVyqblooz8vg/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=UPbYVPG3GO4ZvkHxDRprEtzT5EMSjLl5BOiHU1eq2RA"></v-img>
					</v-avatar>
					<v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
						Welcome to my website! <br><br>
						I have graduated with a Bachelor of Computing in France and I have been working in Ireland for more than 2 years now.
						I always have been passionate about new technologies, particularly mobile and web development. <br>
						You can have a quick look at my portfolio by clicking the link below !
					</v-responsive>
					<router-link class="porfolio-router-link pb-8" :to="{path: '/portfolio' }">
					<v-btn color="primary" href="https://vuetifyjs.com" outlined large>
						<span class="primary--text font-weight-bold">
							My portfolio
						</span>
					</v-btn>
					</router-link>
					<v-responsive class="mx-auto title font-weight-light mt-8" max-width="720">
						You want to know more about me and my programming journey ? <br><br>
					</v-responsive>

					<router-link class="porfolio-router-link" :to="{path: '/portfolio' }">
						<v-btn color="primary" href="https://vuetifyjs.com" outlined large>
						<span class="primary--text font-weight-bold">
							About Me
						</span>
						</v-btn>
					</router-link>
					<v-spacer></v-spacer>
				</v-container>
		</section>
	</v-content>
</template>

<style scoped>
	.hero-header {
		font-size: 3em;
	}
	.porfolio-router-link {
		text-decoration: none;
	}
</style>

<script>
	export default {
		name: 'Home',
		data: () => ({}),
		components: {
		},
	}
</script>
