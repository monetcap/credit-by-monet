<!-- Hero is used to render the above-fold call-to-action and slider -->
<template>
	<div class="hero">

		<SliderForm :show.sync="show"/>
		<SubmittedModal :show.sync="submitted"/>

		<div class="uk-card">
			<div class="uk-card-body">
			<!-- CTA text -->
			<div class="hero-text">
				<h1>How much credit do you need?</h1>
				<p>Credit by Monet Capital can repair your credit score, resulting in
					increased lines of credit.</p>
				</div>
			</div>

			<DebtSlider v-model="sliderDebt" @mouseup="show = true"/>

		</div>

	</div>
</template>

<script>
import DebtSlider from './slider-form/DebtSlider.vue';
import SliderForm from './slider-form/SliderForm.vue';
export default {
	name: "Hero",
	components: { DebtSlider, SliderForm },
	data: function() {
		return {
			show: false,
			submitted: false,
			sliderDebt: 0
		}
	}
}
</script>

<style lang="scss" scoped>
.hero {
	align-items: center;
	display: flex;
	min-height: 100%;
	margin-bottom: -100px;
	text-align: center;

	& > div {
		width: 100%;
	}

	p {
		font-size: 21px;
	}

}
</style>
