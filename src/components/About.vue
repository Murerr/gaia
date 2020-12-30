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

				<v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
					<v-timeline-item
							v-for="(item, i) in items"
							:key="i"
							:color="item.color"
							:icon="item.icon"
							fill-dot>
						<v-card :color="item.color" dark>
							<v-card-title class="title">{{item.title}}</v-card-title>
							<v-card-subtitle class="subtitle-1 text-left ">{{item.location}}</v-card-subtitle>
							<v-card-text class="white text--secondary justify-center">
								<ul class="text-center font-weight-medium pt-2"> {{item.text}}
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

<script>
	import axios from 'axios';
	export default {
		name: 'About',
		methods: {
			downloadCV() {
				let url = 'Rudy_Murer_CV_ENGLISH.pdf';
				axios.get(this.publicPath + url , {responseType: 'blob'})
					.then(response => {
						const blob = new Blob([response.data], {type: 'application/pdf'});
						const link = document.createElement('a');
						link.href = URL.createObjectURL(blob);
						link.download = 'Rudy_Murer_CV.pdf'; // Filename
						link.click();
						URL.revokeObjectURL(link.href)
					}).catch(console.error)
			}
		},
		data: vm => ({
			publicPath: process.env.BASE_URL,
			items: [
				{
					color: 'red lighten-1',
					icon: 'mdi-buffer',
					github: '',
					youtube: '',
					title:'Fullstack Software Developer',
					location:'ASA Marketing, Cork, ' + vm.$i18n.t('about.ireland') ,
					list: ['Facilitated and hosted a Web application using Firebase.',
						'Implemented a realtime fleet tracking system with Google Maps.',
						'Designed and developed a UI to filter and sort artworks.',
						'Learnt to prioritize my missions by using an issue tracking system.'
					],
					year:'2019-Now'

				},
				{
					color: 'deep-orange lighten-2',
					icon: 'mdi-android',
					github: 'https://github.com/Murerr/CIT_transportAI',
					youtube: '',
					title:'Final Year Project : Transport AI',
					location:'Cork Institute Of Technology, Cork, ' + vm.$i18n.t('about.ireland'),
					list:['Developed a mobile application to book the nearest self-driving car.',
						'The data was stored and retrieved using Firebase.',
						'Google Maps API was used to display user location.'
					],
					year:'2019'
				},
				{
					color: 'blue lighten-2',
					icon: 'mdi-school',
					github: '',
					youtube: '',
					title:'BSc in Software Development',
					location:'Cork Institute Of Technology, Cork, ' + vm.$i18n.t('about.ireland'),
					text:'1 Year Erasmus program, Core Modules:',
					list:[ ' Programming Mobile Device & Object Oriented Programming',
						'Server-side Web Development & Agile Processes',
						'Open Source Project & Cloud Networking'
					],
					year:'2018-2019'

				},
				{
					color: 'red lighten-1',
					icon: 'mdi-android',
					github: '',
					youtube: 'https://youtu.be/b1QzD9aA2Ec',
					title:'Android Internship',
					location:'Cansii, Châteauneuf-sur-Isère, France',
					text:'',
					list:['Developed a mobile application using Kotlin for MenuOnline web users. ',
						'Used a RESTful API to synchronize data. ',
						'Retrieved data from the end-point with Retrofit. ',
						'Understood the importance of CI tools and Unit testing with Robotelectric. '
					],
					year:'2018'

				},
				{
					color: 'deep-orange lighten-2',
					icon: 'mdi-printer-wireless',
					github: '',
					youtube: 'https://youtu.be/Mo2wg_2_93U',
					title:'Final Year Project: Reprography App',
					location:'Université Grenoble Alpes, Valence, France',
					text:'',
					list:['Established a web application that handle photocopies requests.',
						'The project was carried out using Symfony Framework (PHP).',
						'Learnt the importance of the Model View Controller.'
					],
					year:'2018'
				},
				{
					color: 'red lighten-1',
					icon: 'mdi-chart-timeline',
					github: '',
					youtube: '',
					title:'PHP Internship',
					location:'8 Fablab, Crest, France',
					text:'',
					list:['Created a client-side interface for customers to book a training session. ',
						'Carried out an administration panel to manage the bookings using Dolibarr',
						'Billed customers using Stripe API.',
					],
					year:'2017'

				},
				{
					color: 'blue lighten-2',
					icon: 'mdi-school',
					github: '',
					youtube: '',
					title:'DUT Informatique',
					location:'Université Grenoble Alpes, Valence, France',
					text:'A two year university Diploma in Computing, Core Modules:',
					list: ['Web Development & Object-Oriented programming',
						'Object-Oriented programming and mobile application development',
						'IT Project Management, Network Administration and OOP Design pattern'
					],
					year:'2015-2018'

				},
				{
					color: 'blue lighten-2',
					icon: 'mdi-school',
					github: '',
					youtube: '',
					title:'Baccalauréat STI2D SIN',
					location:'Lycée Des Catalins, Montélimar, France',
					text: vm.$i18n.t('about.bac.text'),
					list:[
						'C & Embedded programming',
						'Arduino & Mechanical Engineering'
					],
					year:'2015'

				}
			],
		}),
  }
</script>
