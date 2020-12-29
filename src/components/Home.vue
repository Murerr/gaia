<template>
	<v-main>
		<section id="hero">
			<v-row no-gutters>
				<v-img :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'" src="./../assets/background.jpeg">
					<v-container fill-height>
						<v-row align="center" class="white--text mx-auto" justify="center">
							<v-col class="white--text text-center hero-header" cols="12" tag="h1">
								<span class="font-weight-light font-size" >RUDY MURER </span><br>
								<span class="font-weight-black text-uppercase">{{ $t('home.software-developer') }}</span>
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
			<div class="py-6"></div>
				<v-container class="text-center">
					<h2 class="display-2 font-weight-bold">{{ $t('home.introduction') }}</h2>
					<v-responsive class="mx-auto mb-6" width="56">
						<v-divider class="mb-1"></v-divider>
						<v-divider></v-divider>
					</v-responsive>
					<v-avatar class="elevation-12 mb-10" size="128">
						<v-img src="./../assets/rudy_avatar.jpeg"></v-img>
					</v-avatar>
					<v-responsive class="mx-auto title font-weight-light mb-6 text-center" max-width="720">
            {{ $t('home.greetings') }}
					</v-responsive>
					<v-responsive class="mx-auto title font-weight-light text-justify" max-width="720">
            {{ $t('home.whoami') }}<br><br>
					</v-responsive>
					<v-responsive class="mx-auto title font-weight-light mb-8 text-center" max-width="720">
            {{ $t('home.have-a-look') }}
					</v-responsive>
					<router-link class="porfolio-router-link pb-8" :to="{path: '/portfolio' }">
					<v-btn color="primary" outlined large>
						<span class="primary--text font-weight-bold">
							{{ $t('home.my-portfolio') }}
						</span>
					</v-btn>
					</router-link>
					<v-responsive class="mx-auto title font-weight-light mt-8 text-center" max-width="720">
            {{ $t('home.know-more') }} <br><br>
					</v-responsive>

					<router-link class="porfolio-router-link" :to="{path: '/about' }">
						<v-btn color="primary" outlined large>
						<span class="primary--text font-weight-bold">
							{{ $t('home.about-me') }}
						</span>
						</v-btn>
					</router-link>
					<v-spacer></v-spacer>
				</v-container>
		</section>
	</v-main>
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
