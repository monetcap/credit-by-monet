<!-- This component renders the how soon section of the slider form -->
<template>

	<div>
		<h2 class="text-gold">How soon would you like to pay off ${{ amount }}</h2>

		<form class="uk-form-stacked">
			<div class="uk-form-controls">
				<p class="uk-text-lead">
					<input type="radio" class="uk-radio" name="how-soon"/>
					3 years from now.
				</p>
				<p class="uk-text-lead">
					<input type="radio" class="uk-radio" name="how-soon"/>
					4 years from now.
				</p>
				<p class="uk-text-lead">
					<input type="radio" class="uk-radio" name="how-soon"/>
					5 years from now.
				</p>
				<p class="uk-text-lead">
					<input type="radio" class="uk-radio" name="how-soon"/>
					More than 5 years from now.
				</p>
			</div>
		</form>

	</div>

</template>

<script>
export default {
	name: "HowSoon",
	props: ['amount']
}
</script>

<style lang="scss" scoped>
.uk-text-lead {
	font-size: 20px;
}
</style>
