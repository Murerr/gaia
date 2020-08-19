<template>
	<v-content>
		<section id="portfolio">
			<div class="py-12"></div>
			<v-container class="text-center">
				<h2 class="display-2 font-weight-bold mb-3">My Portfolio</h2>
			</v-container>
			<v-responsive class="mx-auto mb-8" width="56">
				<v-divider class="mb-1"></v-divider>
				<v-divider></v-divider>
			</v-responsive>
			<v-container fluid>
					<v-row dense>
						<v-col
								v-for="project in projects"
								:key="project.id"
								:cols="4"
						>
							<v-card>
								<v-card-title v-text="project.name"></v-card-title>
								<v-card-subtitle v-text="project.description"></v-card-subtitle>
								<v-card-actions>
									<v-chip v-if="project.language" class="ma-2" color="primary">{{project.language}}</v-chip>
									<v-spacer></v-spacer>

									<v-btn icon>
										<v-icon>mdi-heart</v-icon>
									</v-btn>

									<v-btn icon>
										<v-icon>mdi-youtube</v-icon>
									</v-btn>

									<v-btn icon>
										<v-icon>mdi-github</v-icon>
									</v-btn>
								</v-card-actions>
							</v-card>
						</v-col>
					</v-row>
			</v-container>
		</section>
	</v-content>
</template>

<script>
	//const axios = require('axios');
	import axios from 'axios';
	export default {
		name: 'Portfolio',
		data: () => ({
			projects: []
		}),
		created() {
			axios.get('https://api.github.com/users/murerr/repos').then((response) => {
				this.projects = response.data;
				this.projects.sort((a, b) => { return new Date(b.created_at) - new Date(a.created_at) });
				console.log(this.projects);

			});
		}
	}
</script>
