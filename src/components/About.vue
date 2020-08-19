<template>
	<v-content>
		<section id="about-me">
			<div class="py-12"></div>
			<v-container class="text-center">
				<h2 class="display-2 font-weight-bold mb-3 text-uppercase">About Me</h2>
				<v-responsive class="mx-auto mb-8" width="56">
					<v-divider class="mb-1"></v-divider>
					<v-divider></v-divider>
				</v-responsive>
				<v-avatar class="elevation-12 mb-12" size="128">
					<v-img src="https://media-exp1.licdn.com/dms/image/C5603AQGVyqblooz8vg/profile-displayphoto-shrink_200_200/0?e=1603324800&v=beta&t=UPbYVPG3GO4ZvkHxDRprEtzT5EMSjLl5BOiHU1eq2RA"></v-img>
				</v-avatar>
				<v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
					In this section you will find more about me, my skills and my journey <br>
				</v-responsive>
				<v-btn color="primary" href="#" outlined large>
						<span class="primary--text font-weight-bold">
							Download My CV
						</span>
				</v-btn>

				<v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
					<v-timeline-item
							v-for="(item, i) in items"
							:key="i"
							:color="item.color"
							:icon="item.icon"
							fill-dot
					>
						<v-card
								:color="item.color"
								dark
						>
							<v-card-title class="title">{{item.title}}</v-card-title>
							<v-card-subtitle class="subtitle-1 text-left ">{{item.location}}</v-card-subtitle>
							<v-card-text class="white text--secondary justify-center">
								<p class="" >{{item.text}}</p>
								<v-btn v-if="item.github" color="primary" icon><v-icon>mdi-github</v-icon></v-btn>
								<v-btn v-if="item.youtube" color="red" icon><v-icon>mdi-youtube</v-icon></v-btn>
							</v-card-text>
						</v-card>
						<template v-slot:opposite>
							<span class="headline font-weight-bold text--secondary" v-text="item.year"></span>
						</template>
					</v-timeline-item>
				</v-timeline>

			</v-container>
		</section>
	</v-content>
</template>

<script>
	export default {
		name: 'About',
		data: () => ({
			items: [
				{
					color: 'red lighten-1',
					icon: 'mdi-buffer',
					github: '',
					youtube: '',
					title:'Fullstack Software Developer',
					location:'ASA Marketing, Cork, Ireland',
					text:'Facilitated and hosted a Web application using Firebase. ' +
						'Implemented a realtime fleet tracking system with Google Maps. ' +
						'Designed and developed a UI to filter and sort artworks. ' +
						'Learnt to prioritize my missions by using an issue tracking system.',
					year:'2019-Now'

				},
				{
					color: 'deep-orange lighten-2',
					icon: 'mdi-android',
					github: '',
					youtube: '',
					title:'Final Year Project : Transport AI',
					location:'Cork Institute Of Technology, Cork, Ireland',
					text:'Developed a mobile and web application to book the nearest self-driving car. ' +
						'The data was stored and retrieved using Firebase. ' +
						'Google Maps API was used to display user location.',
					year:'2019'
				},
				{
					color: 'blue lighten-2',
					icon: 'mdi-school',
					github: '',
					youtube: '',
					title:'BSc in Software Development',
					location:'Cork Institute Of Technology, Cork, Ireland',
					text:'Erasmus program, I took the Programming Mobile Device, Object Oriented Programming and Server-side Web Development core modules. ' +
						'Agile Processes, Open Source Project and Cloud Networking were electives modules',
					year:'2018-2019'

				},
				{
					color: 'red lighten-1',
					icon: 'mdi-android',
					github: '',
					youtube: '',
					title:'Android Internship',
					location:'Cansii, Châteauneuf-sur-Isère, France',
					text:'Developed a mobile application using Kotlin for MenuOnline web users. ' +
						'Used a RESTful API to synchronize data. ' +
						'Retrieved data from the end-point with Retrofit. ' +
						'Understood the importance of CI tools and Unit testing with Robotelectric. ',
					year:'2018'

				},
				{
					color: 'deep-orange lighten-2',
					icon: 'mdi-printer-wireless',
					github: '',
					youtube: '',
					title:'Final Year Project: Reprography App',
					location:'Université Grenoble Alpes, Valence, France',
					text:'Established a web application that handle photocopies requests. The project was carried out using Symfony Framework (PHP). Learnt the importance of the Model View Controller.',
					year:'2018'
				},
				{
					color: 'red lighten-1',
					icon: 'mdi-chart-timeline',
					github: '',
					youtube: '',
					title:'PHP Internship',
					location:'8 Fablab, Crest, France',
					text:'Created a client-side interface for customers to book a training session. ' +
						'Carried out an administration panel to manage the bookings using Dolibarr ERP. ' +
						'Billed customers using Stripe API.',
					year:'2017'

				},
				{
					color: 'blue lighten-2',
					icon: 'mdi-school',
					github: '',
					youtube: '',
					title:'DUT Informatique',
					location:'Université Grenoble Alpes, Valence, France',
					text:'A two year university Diploma in Computing: Learnt Web, Object-Oriented programming and mobile application development. Studied IT Project Management, Network Administration and OOP Design pattern',

					year:'2015-2018'

				},
				{
					color: 'blue lighten-2',
					icon: 'mdi-school',
					github: '',
					youtube: '',
					title:'Baccalauréat STI2D SIN',
					location:'Lycée Des Catalins, Montélimar, France',
					text:'Leaving Certificat equivalent with special emphasis on Programming & Engineering. Learnt C and Embedded programming',
					year:'2015'

				}
			],
		}),
	}
</script>
