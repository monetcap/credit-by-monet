<!-- Part of slider form responsible for getting user's annual income -->
<template>
	<div>
		<h2 class="uk-text-uppercase semi-bold text-gold">What is your annual income?</h2>

		<form>

			<p class="uk-text-lead">
				<input type="radio" class="uk-radio" name="income" value="$0-$10,000"
					v-bind:checked="value == '$0 - $10,000'"
					v-on:input="$emit('input', $event.target.value)"/>
				$0 - $10,000
			</p>

			<p class="uk-text-lead">
				<input type="radio" class="uk-radio" name="income"
					value="$10,000-$25,000"
					v-bind:checked="value == '$10,000 - $25,000'"
					v-on:input="$emit('input', $event.target.value)"/>
				$10,000 - $25,000
			</p>

			<p class="uk-text-lead">
				<input type="radio" class="uk-radio" name="income"
					value="$25,000-$50,000"
					v-bind:checked="value == '$25,000 - $50,000'"
					v-on:input="$emit('input', $event.target.value)"/>
				$25,000 - $50,000
			</p>

			<p class="uk-text-lead">
				<input type="radio" class="uk-radio" name="income"
					value="$50,000 - $100,000"
					v-bind:checked="value == '$50,000 - $100,000'"
					v-on:input="$emit('input', $event.target.value)"/>
				$50,000 - $100,000
			</p>

			<p class="uk-text-lead">
				<input type="radio" class="uk-radio" name="income"
					value="$100,000 - $250,000"
					v-bind:checked="value == '$100,000 - $250,000'"
					v-on:input="$emit('input', $event.target.value)"/>
				$100,000 - $250,000
			</p>

			<p class="uk-text-lead">
				<input type="radio" class="uk-radio" name="income" value="$250,000+"
					v-bind:checked="value == '$250,000'"
					v-on:input="$emit('input', $event.target.value)"/>
				$250,000+
			</p>

		</form>
	</div>
</template>

<script>
export default {
	name: "AnnualIncome",
	props: ['value']
}
</script>
