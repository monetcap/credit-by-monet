<!-- This component renders the how soon section of the slider form -->
<template>

	<div>
		<h2 class="text-gold semi-bold uk-text-uppercase">How soon would you like
			to pay off ${{ amount }}?</h2>

		<form class="uk-form-stacked">
			<div class="uk-form-controls">
				<p class="uk-text-lead">
					<input type="radio" class="uk-radio" name="how-soon" value="3"
					v-bind:checked="value == 3"
					v-on:input="$emit('input', $event.target.value)"/>
					3 years from now.
				</p>
				<p class="uk-text-lead">
					<input type="radio" class="uk-radio" name="how-soon" value="4"
					v-bind:checked="value == 4"
					v-on:input="$emit('input', $event.target.value)"/>
					4 years from now.
				</p>
				<p class="uk-text-lead">
					<input type="radio" class="uk-radio" name="how-soon" value="5"
					v-bind:checked="value == 5"
					v-on:input="$emit('input', $event.target.value)"/>
					5 years from now.
				</p>
				<p class="uk-text-lead">
					<input type="radio" class="uk-radio" name="how-soon" value="5+"
					v-bind:checked="value == '5+'"
					v-on:input="$emit('input', $event.target.value)"/>
					More than 5 years from now.
				</p>
			</div>
		</form>

	</div>

</template>

<script>
export default {
	name: "HowSoon",
	props: ['amount', 'value']
}
</script>
