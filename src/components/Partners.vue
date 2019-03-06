<!-- Component for rendering the partners section -->
<template>

	<div class="partners uk-margin-large">
		<div class="uk-container">

			<!-- Render this contact form if someone clicks the button -->
			<ContactModal :show.sync="show" title="We'd make a good team"/>

			<div>

				<h2 class="uk-h1 uk-text-center uk-margin-large">Partners</h2>

				<vk-grid gutter="large" class="uk-child-width-expand@m">

					<div>
						<div class="good-team uk-padding">
							<h2 class="uk-text-uppercase uk-margin-top">We'd make a good team.</h2>

							<p class="uk-text-lead">Credit by Monet Capital is able to negotiate lowered interest rates
								and minimized fees in half the time of our competitors.</p>

							<p class="uk-text-lead">Team up with us so we can provide even more amazing service for our
								clients.  There is no idea too big or too small.</p>

							<p class="uk-text-lead">We look forward to working with you!</p>
						</div>

						<vk-button class="uk-width-1-1" size="large" type="primary" @click="show = true">
							Team up with us
						</vk-button>
					</div>

					<div>
						<!-- TODO: Feed these guys to a variable and use that instead. -->
						<img
							class="uk-position-relative uk-position-center uk-width-large"
							src="../assets/monet-partners-graphic.png"
							alt="Partner with us and maximize your profits."
						/>
					</div>

				</vk-grid>

			</div>
		</div>
	</div>

</template>

<script>
import ContactModal from './contact/ContactModal.vue';
export default {
	name: "Partners",
	components: { ContactModal },
	data: function() {
		return {
			show: false
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'src/styles/colors';
.partners {
	display: flex;
	align-items: center;
	min-height: 100%;

	& > div {
		width: 100%;
	}
}

.good-team {
	margin-bottom: 10px;
	background-color: rgba(216, 216, 216, 0.5);
	border-bottom-right-radius: 30px;

	h2 {
		font-weight: 500;
	}

	.uk-text-lead {
		font-size: 20px;
		color: $monet-blue;
	}
}
</style>
