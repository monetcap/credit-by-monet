<!-- Component for rendering the partners section -->
<template>

	<div class="partners">

		<!-- Render this contact form if someone clicks the button -->
		<PartnerContact :show.sync="show"/>

		<div>
			<h2 class="uk-h1 uk-text-center">Partners</h2>

			<vk-grid gutter="medium" class="uk-child-width-expand@m" matched>

				<div>
					<div class="good-team">
						<h2 class="uk-text-uppercase">We'd make a good team.</h2>

						<p class="uk-text-lead">Credit by Monet Capital is able to negotiate lowered interest rates
							and minimized fees in half the time of our competitors.</p>

						<p class="uk-text-lead">Team up with us so we can provide even more amazing service for our
							clients.  There is no idea too big or too small.</p>

						<p class="uk-text-lead">We look forward to working with you!</p>
					</div>

					<vk-button size="large" type="primary" @click="show = true">
						Team up with us
					</vk-button>
				</div>

				<div>
					<!-- Partner graphic goes here -->
				</div>

			</vk-grid>
		</div>

	</div>

</template>

<script>
import PartnerContact from './contact/PartnerContact.vue';
export default {
	name: "Partners",
	components: { PartnerContact },
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
	padding: 30px 20px;

	& > div {
	width: 100%;
	}
}

.good-team {
	padding: 20px;
	background-color: $light-grey;

	h2 {
		font-weight: 500;
	}

	.uk-text-lead {
		font-size: 20px;
		color: $monet-blue;
	}
}
</style>
