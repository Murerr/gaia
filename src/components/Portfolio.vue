<template>
	<v-main>
		<section id="portfolio">
			<div class="py-6"></div>
			<v-container class="text-center">
				<h2 class="display-2 font-weight-bold mb-3 text-uppercase">{{ $t('porfolio.title') }}</h2>
			</v-container>
			<v-responsive class="mx-auto mb-8" width="56">
				<v-divider class="mb-1"></v-divider>
				<v-divider></v-divider>
			</v-responsive>

			<v-container fluid>
					<v-progress-linear v-if="!loading" indeterminate color="secondary"></v-progress-linear>
					<v-row v-else no-gutters>
						<v-col v-for="project in projects" :key="project.id">
							<ProjectCard :project="project"></ProjectCard>
						</v-col>
				</v-row>
			</v-container>

			<v-container v-if="loading" class="text-center">
				<h2 class="display-1 font-weight-medium mb-3 text--secondary">{{ $t('porfolio.forked-projects') }}</h2>
			</v-container>

			<v-responsive class="mx-auto mb-8" width="56">
				<v-divider class="mb-1"></v-divider>
				<v-divider></v-divider>
			</v-responsive>

			<v-row no-gutters>
				<v-col v-for="project in forked_projects" :key="project.id">
					<project-card :project="project"></project-card>
				</v-col>
			</v-row>
		</section>
	</v-main>
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
	import ProjectCard from './project-card.vue';
	export default {
		name: 'Portfolio',
		components: {
			ProjectCard
		},
		data: () => ({
			projects: [],
			forked_projects: [],
			loading : false
		}),
		methods: {
		},
		created() {

			axios.get('https://api.github.com/users/murerr/repos').then((response) => {
				this.projects = response.data;
				this.projects.sort((a, b) => { return new Date(b.created_at) - new Date(a.created_at) });
				this.forked_projects = this.projects.filter(project => project.fork === true);
				this.forked_projects.forEach(fork => this.projects.splice(this.projects.findIndex(project => project.id === fork.id),1));
				this.loading = true
			});
		}
	}
</script>
