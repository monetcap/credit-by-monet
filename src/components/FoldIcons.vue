<!-- Row of icons that serve as a sort of boundary between above-fold and
	below-fold content.  They sort of straddle the line to indicate that, yes,
	there is in fact more -->
<template>
	<vk-grid class="fold-icons uk-child-width-1-2@s uk-child-width-expand@m uk-text-center">

		<div>
			<h3>Consoliate debt quickly</h3>
		</div>

		<div>
			<h3>Fast customer service</h3>
		</div>

		<div>
			<h3>Save money for other things</h3>
		</div>

		<div>
			<h3>Provide ample support</h3>
		</div>

	</vk-grid>
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
		font-weight: 500;
		text-transform: uppercase;
	}
}
</style>
