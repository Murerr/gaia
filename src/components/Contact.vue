<template>
	<v-content>
		<section id="contact-section">
			<v-sheet id="contact" color="white" tag="section" tile>
				<div class="py-12"></div>
				<v-container>
					<h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contact Me</h2>
					<v-responsive class="mx-auto mb-12" width="56">
						<v-divider class="mb-1"></v-divider>
						<v-divider></v-divider>
					</v-responsive>
						<v-row>
							<v-col cols="12">
								<v-text-field flat label="Name*" outlined color="primary"></v-text-field>
							</v-col>

							<v-col cols="12">
								<v-text-field flat label="Email*" outlined color="primary"></v-text-field>
							</v-col>

							<v-col cols="12">
								<v-text-field flat label="Subject*" outlined color="primary"></v-text-field>
							</v-col>

							<v-col cols="12">
								<v-textarea flat label="Message*" outlined color="primary"></v-textarea>
							</v-col>

							<v-col class="mx-auto" cols="auto">
								<v-btn color="primary" x-large>Submit</v-btn>
							</v-col>
						</v-row>
				</v-container>
			</v-sheet>
		</section>
	</v-content>
</template>

<script>
	export default {
		name: 'Contact',
		data: () => ({

		}),
	}
</script>
