<!-- This component renders the how soon section of the slider form -->
<template>

	<div>
		<h2>How soon would you like to pay off ${{ amount }}</h2>

		<form>
			<label><input type="radio" class="uk-radio" name="how-soon"/>3 years from now.</label>
			<label><input type="radio" class="uk-radio" name="how-soon"/>3 years from now.</label>
			<label><input type="radio" class="uk-radio" name="how-soon"/>3 years from now.</label>
			<label><input type="radio" class="uk-radio" name="how-soon"/>3 years from now.</label>
		</form>

	</div>

</template>

<script>
export default {
	name: "HowSoon",
	props: ['amount']
}
</script>
