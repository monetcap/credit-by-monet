<!-- Row of icons that serve as a sort of boundary between above-fold and
	below-fold content.  They sort of straddle the line to indicate that, yes,
	there is in fact more -->
<template>
	<div class="uk-container fold-icons">
	<vk-grid class="uk-margin-top uk-margin-bottom uk-child-width-1-2@s
	uk-child-width-expand@m uk-text-center">

		<vk-card type="blank">
			<div slot="media-top">
				<img src="../assets/icon-lightning.png" />
			</div>
			<vk-card-title>Consolidate debt quickly</vk-card-title>
		</vk-card>

		<vk-card type="blank">
			<div slot="media-top">
				<img src="../assets/icon-bunny.png"/>
			</div>
			<vk-card-title>Fast customer service</vk-card-title>
		</vk-card>

		<vk-card type="blank">
			<div slot="media-top">
				<img src="../assets/icon-money-bag.png"/>
			</div>
			<vk-card-title>Save money for other things</vk-card-title>
		</vk-card>

		<vk-card type="blank">
			<div slot="media-top">
				<img src="../assets/icon-money-hand.png"/>
			</div>
			<vk-card-title>Provide ample support</vk-card-title>
		</vk-card>

	</vk-grid>
	</div>
</template>

<script>
export default {
	name: "FoldIcons"
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';

.fold-icons {
	background-color: $monet-blue;

	h2, h3 {
		color: $white;
		font-weight: 700;
		text-transform: uppercase;
	}

	& > * {
		padding-top: 40px;
	}
}
</style>
