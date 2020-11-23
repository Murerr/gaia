<template>
	<v-main>
		<section id="contact-section">
			<v-sheet id="contact" color="white" tag="section" tile>
				<div class="py-12"></div>
				<v-container>
					<h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contact Me</h2>
					<v-responsive class="mx-auto mb-12" width="56">
						<v-divider class="mb-1"></v-divider>
						<v-divider></v-divider>
					</v-responsive>
					<v-form id="form" ref="form" v-model="valid" :lazy-validation="lazy">
						<v-progress-linear v-if="loading" indeterminate color="secondary"></v-progress-linear>
						<v-row>
							<v-col cols="12">
								<v-text-field required :rules="nameRules" v-model="name" flat label="Name*" outlined color="primary"></v-text-field>
							</v-col>

							<v-col cols="12">
								<v-text-field required :rules="emailRules" v-model="email" type="email" flat label="Email*" outlined color="primary"></v-text-field>
							</v-col>

							<v-col cols="12">
								<v-text-field required :rules="subjectRules" v-model="subject" flat label="Subject*" outlined color="primary"></v-text-field>
							</v-col>

							<v-col cols="12">
								<v-textarea required :rules="messageRules" v-model="message" flat label="Message*" outlined color="primary"></v-textarea>
							</v-col>

							<v-col class="mx-auto" cols="auto">
								<v-btn :disabled="!valid" color="primary" x-large @click="sendForm">Submit</v-btn>
							</v-col>
						</v-row>
					</v-form>
					<v-snackbar v-model="snackbar" bottom :color="snackbarColor" timeout="3000">
						{{ snackbarText }}
					</v-snackbar>
				</v-container>
			</v-sheet>
		</section>
	</v-main>
</template>

<script>
	import axios from 'axios';
	export default {
		name: 'Contact',
		data: () => ({
			name:null,
			email:null,
			subject:null,
			message:null,
			lazy: false,
			valid:true,
			loading:false,
			snackbar:false,
			snackbarColor:'success',
			snackbarText:'Email sent successfully !',

			nameRules: [
				v => !!v || 'Name is required',
				v => (v && v.length >= 3) || 'Name must be more than 3 characters',
			],
			emailRules: [
				v => !!v || 'E-mail is required',
				v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
			],
			subjectRules: [
				v => !!v || 'Subject is required',
				v => (v && v.length >= 3) || 'Subject must be more than 3 characters',
			],
			messageRules: [
				v => !!v || 'Message is required',
				v => (v && v.length >= 5) || 'Message must be more than 5 characters',
			],

		}),
		methods: {
			sendForm(){
				this.loading = true;
				this.$refs.form.validate();
				var formData = new FormData();
				formData.append('service_id', 'gmail');
				formData.append('template_id', 'template_aGxFwLUw');
				formData.append('user_id', 'user_r41rqdbvEqxU9UvCaHUL3');
				formData.append("name", this.name);
				formData.append("email", this.email);
				formData.append("subject", this.subject);
				formData.append("message", this.message);
				let url = 'https://api.emailjs.com/api/v1.0/email/send-form';
				axios({
					method: 'POST',
					url:url,
					data: formData,
					contentType: false, // auto-detection
					processData: false // no need to parse formData to string
				}).then(result => {
					if (result && result.status === 200) {
						this.$refs.form.reset();
						this.toggleSnackbar(true)
					} else {
						this.toggleSnackbar(false);
					}
				}).catch(error => {
					console.log(error);
					this.toggleSnackbar(false);
				}).finally( () => {
					this.loading = false
				});
			},
			toggleSnackbar(success){
				if (success){
					this.snackbarColor = 'success';
					this.snackbarText = 'Email sent successfully !';
				} else {
					this.snackbarColor = 'error';
					this.snackbarText = 'An error occurred while sending mail';
				}
				this.snackbar = true
			}
		}
	}
</script>
