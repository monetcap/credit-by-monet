<!-- Part of slider form responsible for getting user's annual income -->
<template>
	<div>
		<h2 class="uk-text-uppercase semi-bold text-gold">What is your annual income?</h2>

		<form>

			<p class="uk-text-lead">
				<input type="radio" class="uk-radio" name="income"/>
				$0 - $10,000
			</p>

			<p class="uk-text-lead">
				<input type="radio" class="uk-radio" name="income"/>
				$10,000 - $25,000
			</p>

			<p class="uk-text-lead">
				<input type="radio" class="uk-radio" name="income"/>
				$25,000 - $50,000
			</p>

			<p class="uk-text-lead">
				<input type="radio" class="uk-radio" name="income"/>
				$50,000 - $100,000
			</p>

			<p class="uk-text-lead">
				<input type="radio" class="uk-radio" name="income"/>
				$100,000 - $250,000
			</p>

			<p class="uk-text-lead">
				<input type="radio" class="uk-radio" name="income"/>
				$250,000+
			</p>
			
		</form>
	</div>
</template>

<script>
export default {
	name: "AnnualIncome"
}
</script>
