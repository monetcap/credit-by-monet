<template>

	<vk-modal :show.sync="show" size="container">

		<vk-modal-close @click="$emit('update:show', false)"></vk-modal-close>

		<!-- Not in the docs, but if we pass active-tab as a prop and specify a
			number, then we can make tab (n) show up first rather than tab 0 -->
		<vk-tabs-vertical align="left" v-bind:active-tab="1">

			<vk-tabs-item title="$45,000" disabled></vk-tabs-item>
			<vk-tabs-item title="How Soon" active>
				<HowSoon amount="45,000"/>
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

		</vk-tabs-vertical>

	</vk-modal>

</template>

<script>
import AnnualIncome from './AnnualIncome.vue';
import CardAccounts from './CardAccounts.vue';
import HowSoon from './HowSoon.vue';
import Industry from './Industry.vue';
export default {
	name: "SliderForm",
	components: {
		AnnualIncome,
		CardAccounts,
		HowSoon,
		Industry
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
	}
}
</script>

<style lang="scss">
.uk-tab > * > a{
	padding: 20px;
}
</style>
