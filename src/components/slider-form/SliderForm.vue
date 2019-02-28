<template>

	<vk-modal :show.sync="show" size="container">

		<vk-modal-close @click="$emit('update:show', false)"></vk-modal-close>

		<!-- Not in the docs, but if we pass active-tab as a prop and specify a
			number, then we can make tab (n) show up first rather than tab 0 -->
		<vk-tabs-vertical align="left" v-bind:active-tab="1">

			<vk-tabs-item title="$45,000" disabled></vk-tabs-item>
			<vk-tabs-item v-bind:title="howSoonTitle" active>
				<HowSoon amount="45,000" v-model="yearsFromNow"/>
			</vk-tabs-item>
			<vk-tabs-item title="Credit Cards">
				<CardAccounts/>
			</vk-tabs-item>
			<vk-tabs-item title="Monthly Income">
				<AnnualIncome />
			</vk-tabs-item>
			<vk-tabs-item title="Industry">
				<Industry />
			</vk-tabs-item>
			<vk-tabs-item title="Contact">
				<SliderContact />
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
	props: ['show'],
	data: function() {
		return {
			yearsFromNow: Number,
			creditCards: Number,
			income: Number,
			industry: String,
			contact: {
				firstName: String,
				lastName: String,
				email: String,
				phone: Number
			}
		}
	},

	computed: {

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
</style>
