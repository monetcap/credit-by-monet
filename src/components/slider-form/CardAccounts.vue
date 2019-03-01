<!-- Section of slider forms that let's user enter in how many cards they have -->
<template>
	<div>

		<h2 class="semi-bold text-gold uk-text-uppercase">How many credit cards do
			you have?</h2>

		<form>

			<p class="uk-text-lead">
				<input type="radio" class="uk-radio" name="credit-cards" value="1"
					v-bind:checked="value == 1"
					v-on:input="$emit('input', $event.target.value)"/>
				1 - 2 Credit Cards
			</p>

			<p class="uk-text-lead">
				<input type="radio" class="uk-radio" name="credit-cards" value="3"
					v-bind:checked="value == 3"
					v-on:input="$emit('input', $event.target.value)"/>
				3 - 5 Credit Cards
			</p>

			<p class="uk-text-lead">
				<input type="radio" class="uk-radio" name="credit-cards" value="5"
					v-bind:checked="value == 5"
					v-on:input="$emit('input', $event.target.value)"/>
				5 - 10 Credit Cards
			</p>

			<p class="uk-text-lead">
				<input type="radio" class="uk-radio" name="credit-cards" value="10"
					v-bind:checked="value == 10"
					v-on:input="$emit('input', $event.target.value)"/>
				More than 10 Credit Cards
			</p>

		</form>
	</div>
</template>

<script>
export default {
	name: "CardAccounts",
	props: ['value']
}
</script>
