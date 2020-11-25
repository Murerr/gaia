<template>
	<v-card width="350" height="160" class="mx-auto pa-2 ma-2">
		<v-card-title class="one-line" v-text="project.name"></v-card-title>
		<v-card-subtitle class="card_subtitles" v-text="project.description"></v-card-subtitle>
		<v-card-actions>
			<v-chip v-if="project.language" class="ma-2 text--primary" :color="getProjectColor(project.language)">{{project.language}}</v-chip>
			<v-spacer></v-spacer>

			<a v-if="getYoutubeLink(project.id)" class="card_actions" :href="getYoutubeLink(project.id)" target="_blank">
				<v-btn icon><v-icon color="red">mdi-youtube</v-icon></v-btn>
			</a>

			<a class="card_actions" :href="project.html_url" target="_blank">
				<v-btn icon><v-icon>mdi-github</v-icon></v-btn>
			</a>
		</v-card-actions>
	</v-card>
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
  .card_subtitles{
    max-height: 38px;
  }
</style>
<script>
	export default {
		name: 'project-card',
		props: ["project"],
		data: () => ({
		}),
		methods: {
			getProjectColor(projectLanguage){
				switch (projectLanguage) {
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
			},
			getYoutubeLink(projectID){
				switch (projectID) {
					case 288771330 : return "https://youtu.be/mjGoD80olBE"; // Inaturalist
					case 162812782 : return "https://youtu.be/11itQ0yDuRc"; // Teamwork API
					default : return null
				}
			}

		},
		created() {

		}
	}
</script>
