<!-- Component used in slider form for getting the industry that the user works
	in -->
<template>
	<div>
		<h2 class="semi-bold text-gold uk-text-uppercase">What industry are you in?</h2>

		<select class="uk-select" v-on:input="handleIndustry">

			<option
				v-bind:selected="value.value == 'Accomodation & Food Services'">
				Accommodation & Food Services
			</option>

			<option
				v-bind:selected="value.value == 'Agriculture, Forestry, and Fishing'">
				Agriculture, Forestry, and Fishing
			</option>

			<option
				v-bind:selected="value.value == 'Arts, Entertainment, and Recreation'">
				Arts, Entertainment, and Recreation
			</option>

			<option
				v-bind:selected="value.value == 'Construction'">
				Construction
			</option>

			<option
				v-bind:selected="value.value == 'Educational Services'">
				Educational Services
			</option>

			<option
				v-bind:selected="value.value == 'Finance and Insurance'">
				Finance and Insurance
			</option>

			<option
				v-bind:selected="value.value == 'Health Care & Social Assistance'">
				Health Care & Social Assistance
			</option>

			<option
				v-bind:selected="value.value == 'Manufacturing'">
				Manufacturing
			</option>

			<option
				v-bind:selected="value.value == 'Professional, Scientific, & Technical'">
				Professional, Scientific & Technical
			</option>

			<option
				v-bind:selected="value.value == 'Services'">
				Services
			</option>

			<option
				v-bind:selected="value.value == 'Real Estate, Rental & Leasing'">
				Real Estate, Rental & Leasing
			</option>

			<option
				v-bind:selected="value.value == 'Retail Trade'">
				Retail Trade
			</option>

			<option
				v-bind:selected="value.value == 'Transportation and Warehousing'">
				Transportation and Warehousing
			</option>

			<option
				v-bind:selected="value.value == 'Wholesale Trade'">
				Wholesale Trade
			</option>

			<option
				v-bind:selected="value.value == 'Other'">
				Other (please specify)
			</option>

		</select>

		<input v-if="value.value == 'Other'" class="uk-input uk-margin"
			placeholder="Enter industry"
			v-bind:value="value.specifics"
			v-on:input="handleOther"/>

	</div>
</template>

<script>
export default {
	name: "Industry",
	props: ['value'],

	methods: {

		// Normally we would just inline input handlers, but this a tiny bit more
		// than would be considered clean to inline.
		handleIndustry: function(event) {
			if (event.target.value == "Other (please specify)") {
				this.$emit('input', {value: "Other"});
				return;
			}
			this.$emit('input', {value: event.target.value});
		},

		handleOther: function(event) {
			this.$emit('input', {
				value: this.value.value,
				specifics: event.target.value
			});
		}

	}
}
</script>
