<template>
	<v-content>
		<section id="portfolio">
			<div class="py-12"></div>
			<v-container class="text-center">
				<h2 class="display-2 font-weight-bold mb-3 text-uppercase">My Portfolio</h2>
			</v-container>
			<v-responsive class="mx-auto mb-8" width="56">
				<v-divider class="mb-1"></v-divider>
				<v-divider></v-divider>
			</v-responsive>
			<v-container fluid>
					<v-progress-linear v-if="!loading" indeterminate color="secondary"></v-progress-linear>
					<v-row v-else no-gutters>
						<v-col v-for="project in projects" :key="project.id">
							<v-card width="350" height="160" class="mx-auto pa-2 ma-2">
								<v-card-title class="one-line" v-text="project.name"></v-card-title>
								<v-card-subtitle v-text="project.description"></v-card-subtitle>
								<v-card-actions>
									<v-chip v-if="project.language" class="ma-2 text--primary" :color="project.project_color">{{project.language}}</v-chip>
									<v-spacer></v-spacer>

									<v-btn icon>
										<v-icon>mdi-youtube</v-icon>
									</v-btn>

									<a class="card_actions" :href="project.html_url" target="_blank">
										<v-btn icon><v-icon>mdi-github</v-icon></v-btn>
									</a>
								</v-card-actions>
							</v-card>
						</v-col>
				</v-row>
			</v-container>
			<v-container class="text-center">
				<h2 class="display-1 font-weight-bold mb-3 text--secondary" >Forked Projects</h2>
			</v-container>
			<v-responsive class="mx-auto mb-8" width="56">
				<v-divider class="mb-1"></v-divider>
				<v-divider></v-divider>
			</v-responsive>
			<v-row no-gutters>
			<v-col v-for="project in forked_projects" :key="project.id">
				<v-card width="350" height="180" class="mx-auto pa-2 ma-2">
					<v-card-title class="one-line" v-text="project.name"></v-card-title>
					<v-card-subtitle v-text="project.description"></v-card-subtitle>
					<v-card-actions>
						<v-chip v-if="project.language" class="ma-2" :color="project.project_color">{{project.language}}</v-chip>
						<v-spacer></v-spacer>

						<v-btn icon>
							<v-icon>mdi-youtube</v-icon>
						</v-btn>

						<a class="card_actions" :href="project.html_url" target="_blank">
							<v-btn icon><v-icon>mdi-github</v-icon></v-btn>
						</a>
					</v-card-actions>
				</v-card>
			</v-col>
			</v-row>
		</section>
	</v-content>
</template>
<style scoped>
	.card_actions {
		text-decoration: none;
	}
	.one-line {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>
<script>
	import axios from 'axios';
	export default {
		name: 'Portfolio',
		data: () => ({
			projects: [],
			forked_projects: [],
			loading : false
		}),
		methods: {
			getProjectColor(projectName){
				switch (projectName) {
					case "Go" : return "#00ADD8";
					case "HTML" : return "#e34c26";
					case "Shell" : return "#89e051";
					case "JavaScript" : return "#f1e05a";
					case "TypeScript" : return "#2b7489";
					case "Java" : return "#b07219";
					case "Kotlin" : return "#F18E33";
					case "Python" : return "#3572A5";
					case "PHP" : return "#4F5D95";
					case "Vue" : return "#2c3e50";
					default: return "primary";
				}
			}
		},
		created() {

			axios.get('https://api.github.com/users/murerr/repos').then((response) => {
				this.projects = response.data;
				this.projects.forEach(project => {
					console.log(project);
					if (project.language){
						project["project_color"] = this.getProjectColor(project.language);
					}
				});
				this.projects.sort((a, b) => { return new Date(b.created_at) - new Date(a.created_at) });
				this.forked_projects = this.projects.filter(project => project.fork === true);
				this.forked_projects.forEach(fork => this.projects.splice(this.projects.findIndex(project => project.name === fork.name),1));
				console.log(this.projects);
				console.log(this.forked_projects);
				this.loading = true

			});
		}
	}
</script>
