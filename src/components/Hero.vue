<!-- Hero is used to render the above-fold call-to-action and slider -->
<template>
	<div class="hero">

		<SliderForm :show.sync="show"/>

		<div>

			<!-- CTA text -->
			<div class="hero-text">
				<h1>What is your total credit card debt?</h1>
				<p>Credit by Monet Capital can reduce your total credit card payments by up
					to 30-50%!</p>
			</div>

			<!-- Fancy Slider -->
			<vk-button type="primary" @click="show = true">
				Slider Trigger
			</vk-button>

		</div>

	</div>
</template>

<script>
import SliderForm from './slider-form/SliderForm.vue';
export default {
	name: "Hero",
	components: { SliderForm },
	data: function() {
		return {
			show: false
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
