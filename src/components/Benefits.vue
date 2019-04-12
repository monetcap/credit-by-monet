<!-- Component for rendering the Benefits section -->
<template>

	<div class="partners uk-margin-large">
		<div class="uk-container">

			<!-- Render this contact form if someone clicks the button -->
			<ContactModal :show.sync="show" title="Get in touch with us"/>

			<div>

				<h2 class="uk-h1 uk-text-center uk-margin-large">Benefits</h2>

				<vk-grid gutter="large" class="uk-child-width-expand@m">

					<div>
						<div class="good-team uk-padding">
							<h2 class="uk-text-uppercase uk-margin-top">Why Credit by Monet?</h2>

							<p class="uk-text-lead">Credit by Monet Capital is able to negotiate
							lower interest rates than our competitors.</p>

							<p class="uk-text-lead">Creating financial freedom means creating
							abundance. We aim to provide more than just an improved credit
							score.</p>

							<p class="uk-text-lead">We look forward to working with you!</p>
						</div>

						<vk-button class="uk-width-1-1" size="large" type="primary" @click="show = true">
							Get in touch with us
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

				<vk-grid gutter="large" class="uk-child-width-expand@m uk-text-center">
					<h4><span class="semi-bold">Fees start as low as</span><br>
						<span class="price-fancy">$<span class="text-gold">100</span><sup>*</sup></span>
					</h4>
					<h4 class="semi-bold">If we don't deliver, <em>you don't pay</em>!</h4>
				</vk-grid>

			</div>
		</div>
	</div>

</template>

<script>
import ContactModal from './contact/ContactModal.vue';
export default {
	name: "Benefits",
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
