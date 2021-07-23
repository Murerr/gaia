<template>
	<v-main>
		<section id="about-me">
			<div class="py-6"></div>
			<v-container class="text-center">
				<h2 class="display-2 font-weight-bold mb-3 text-uppercase">{{ $t('about.title') }}</h2>

				<v-responsive class="mx-auto mb-8" width="56">
					<v-divider class="mb-1"></v-divider>
					<v-divider></v-divider>
				</v-responsive>

				<v-avatar class="elevation-12 mb-12" size="128">
					<v-img src="./../assets/rudy_avatar.jpeg"></v-img>
				</v-avatar>

				<v-responsive class="mx-auto title font-weight-light mb-8 text-center" max-width="720">
          {{ $t('about.description') }}
        </v-responsive>
				<a @click.prevent="downloadCV()"><v-btn color="primary" outlined large>
						<span class="primary--text font-weight-bold">
              {{ $t('about.download') }}
						</span>
				</v-btn></a>

				<v-timeline id="timeline" align-top :dense="$vuetify.breakpoint.smAndDown">
					<v-timeline-item
							v-for="(item, i) in $t('about.items')"
							:key="i"
							:color="item.color"
							:icon="item.icon"
							fill-dot>
						<v-card :color="item.color" dark>
							<v-card-title class="title">{{item.title}}</v-card-title>
							<v-card-subtitle class="subtitle-1 text-left ">{{item.location}}</v-card-subtitle>
							<v-card-text class="white text--secondary justify-center">
                <ul class="text-center font-weight-medium pt-2 pb-2">{{item.text}}</ul>
								<ul>
									<li class="text-left font-weight-regular" v-for="(item, index) in item.list" :key="index" > {{item}}</li>
								</ul>
								<a v-if="item.github" class="text-decoration-none" :href="item.github" target="_blank" ><v-btn color="primary" icon><v-icon>mdi-github</v-icon></v-btn></a>
								<a v-if="item.youtube" class="text-decoration-none" :href="item.youtube" target="_blank" ><v-btn color="red" icon><v-icon>mdi-youtube</v-icon></v-btn></a>
							</v-card-text>
						</v-card>

						<template v-slot:opposite>
							<span class="headline font-weight-bold text--secondary" v-text="item.year"></span>
						</template>
					</v-timeline-item>
				</v-timeline>

			</v-container>
		</section>
	</v-main>
</template>
<style scoped>
#timeline{
  max-width: 1201px;
  margin: 0 auto;
}
</style>
<script>
	import axios from 'axios';
	export default {
		name: 'About',
		methods: {
			downloadCV() {
				let url = this.$root.$i18n.locale === 'fr' ? 'Rudy_Murer_CV_FRENCH.pdf' :'Rudy_Murer_CV_ENGLISH.pdf';
				axios.get(this.publicPath + url , {responseType: 'blob'})
					.then(response => {
						const blob = new Blob([response.data], {type: 'application/pdf'});
						const link = document.createElement('a');
						link.href = URL.createObjectURL(blob);
						link.download = url;
						link.click();
						URL.revokeObjectURL(link.href)
					}).catch(console.error)
			},
		},
		data: () => ({
			publicPath: process.env.BASE_URL
		}),
  }
</script>
