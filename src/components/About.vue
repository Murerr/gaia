<template>
	<v-content>
		<section id="about-me">
			<div class="py-12"></div>
			<v-container class="text-center">
				<h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>
				<v-responsive class="mx-auto mb-8" width="56">
					<v-divider class="mb-1"></v-divider>
					<v-divider></v-divider>
				</v-responsive>
				<v-avatar class="elevation-12 mb-12" size="128">
					<v-img src="https://media-exp1.licdn.com/dms/image/C5603AQGVyqblooz8vg/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=UPbYVPG3GO4ZvkHxDRprEtzT5EMSjLl5BOiHU1eq2RA"></v-img>
				</v-avatar>
				<v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
					In this section you will find more about me, my skills and my journey <br><br>
				</v-responsive>
			</v-container>
		</section>
	</v-content>
</template>

<script>
	export default {
		name: 'About',
		data: () => ({

		}),
	}
</script>
