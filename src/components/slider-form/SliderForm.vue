<template>

	<vk-modal :show.sync="show" size="3-4">

		<vk-modal-close @click="$emit('update:show', false)"></vk-modal-close>

		<!-- Not in the docs, but if we pass active-tab as a prop and specify a
			number, then we can make tab (n) show up first rather than tab 0 -->
		<vk-tabs-vertical align="left" v-bind:active-tab="tabIndex" @update:activeTab="tabIndex = $event">

			<vk-tabs-item :title="formattedAmount" disabled></vk-tabs-item>

			<vk-tabs-item :title="howSoonTitle">
				<HowSoon class="slider-content"
					v-model="yearsFromNow"
					:amount="formattedAmount"
					@input="tabIndex ++" />
			</vk-tabs-item>

			<vk-tabs-item :title="creditCardsTitle">
				<CardAccounts class="slider-content"
					v-model="creditCards"
					@input="tabIndex ++" />
			</vk-tabs-item>

			<vk-tabs-item :title="incomeTitle">
				<AnnualIncome class="slider-content"
					v-model="income"
					@input="tabIndex ++" />
			</vk-tabs-item>

			<vk-tabs-item :title="industryTitle">
				<Industry class="slider-content"
					v-model="industry"
					@input="tabIndex ++" />
			</vk-tabs-item>

			<vk-tabs-item title="Contact">
				<SliderContact class="slider-content"
					v-model="contact"/>
			</vk-tabs-item>

		</vk-tabs-vertical>

	</vk-modal>

</template>

<script>
import AnnualIncome from './AnnualIncome.vue';
import CardAccounts from './CardAccounts.vue';
import HowSoon from './HowSoon.vue';
import Industry from './Industry.vue';
import SliderContact from './SliderContact.vue';
export default {
	name: "SliderForm",
	components: {
		AnnualIncome,
		CardAccounts,
		HowSoon,
		Industry,
		SliderContact
	},
	props: ['show', 'amount'],

	data: function() {
		return {
			yearsFromNow: String,
			creditCards: String,
			income: String,
			industry: {
				value: String,
				specifics: String
			},
			contact: {
				firstName: "",
				lastName: "",
				email: "",
				phone: ""
			},
			tabIndex: 1
		}
	},

	computed: {

		// Generates a human-readable, dynamic title for credit cards tab
		creditCardsTitle: function() {

			if (this.creditCards) {
				switch(this.creditCards) {
					case '1':
						return "1-2 credit cards";
					case '3':
						return "3-5 credit cards";
					case '5':
						return "5-10 credit cards";
					case '10':
						return "More than 10 credit cards";
				}
			}

			return "Credit Cards";

		},

		// Takes the amount entered in from the debt slider on the front page, and
		// adds some commas
		formattedAmount: function() {

			return `$${ Math.floor(this.amount / 1000) },000`;

		},

		// When we determine the timeline for when the user wants to pay off their
		// debt we store only a number (occasionally with a plus).  This computed
		// prop turns that number into a more human-readable title.
		howSoonTitle: function() {

			if (this.yearsFromNow && this.yearsFromNow <= 5) {
				return `${this.yearsFromNow} years from now`;
			} else if (this.yearsFromNow === '5+') {
				return "More than 5 years";
			}

			return "How Soon";

		},

		incomeTitle: function() {

			if (typeof this.income === "function") {
				return "Monthly Income";
			}
			return this.income;

		},

		industryTitle: function() {

			if (typeof this.industry.value === "function") {
				return "Industry";
			}

			return this.industry.value;

		}

	},

	methods: {

		// Handles submission event triggered by apply now button.
		handleSubmit: function() {

		},

		updateTab: function(event) {
			debugger;
		}

	}
}
</script>

<style lang="scss">
@import 'src/styles/colors';

.uk-tab {
	background-color: $light-grey;
}

.uk-tab > *.uk-disabled, .uk-tab > *.uk-active {
	background-color: $monet-blue;

	& > a {
		color: $white;
	}
}

.uk-tab > *.uk-disabled ~ * {
	background-color: $monet-blue;

	& > a {
		color: $white;
	}
}

.uk-tab *.uk-active ~ * {
	background-color: $light-grey;

	& > a {
		color: $black;
	}
}

.uk-tab > * > a {
	padding: 20px;
}

.uk-tab-left::before {
	border-left-color: $monet-blue;
}

.slider-content {
	padding-top: 60px;
	padding-bottom: 60px;
}
</style>
