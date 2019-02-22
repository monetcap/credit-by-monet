<!-- Section of slider forms that let's user enter in how many cards they have -->
<template>
	<div>

		<h2>How many credit cards do you have?</h2>

		<form>

			<label>
				<input type="radio" class="uk-radio" name="credit-cards"/>
				1 - 2 Credit Cards
			</label>

			<label>
				<input type="radio" class="uk-radio" name="credit-cards"/>
				3 - 5 Credit Cards
			</label>

			<label>
				<input type="radio" class="uk-radio" name="credit-cards"/>
				5 - 10 Credit Cards
			</label>

			<label>
				<input type="radio" class="uk-radio" name="credit-cards"/>
				More than 10 Credit Cards
			</label>
			
		</form>
	</div>
</template>

<script>
export default {
	name: "CardAccounts"
}
</script>
