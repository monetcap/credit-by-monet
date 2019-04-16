<template>

	<vk-modal class="slider-form-modal" :show.sync="show">

		<vk-modal-close @click="$emit('update:show', false)"></vk-modal-close>

		<vk-tabs :active-tab="tabIndex" >
			<vk-tabs-item title="Page1">
				Page 1
			</vk-tabs-item>
			<vk-tabs-item title="Page2">
				Page 2
			</vk-tabs-item>
			<vk-tabs-item title="Page3">
				Page 3
			</vk-tabs-item>
		</vk-tabs>

		<vk-button v-on:click="nextTab">Continue</vk-button>
	</vk-modal>

</template>

<script>

export default {
	name: "SliderForm",
	props: ["show", "amount"],
	data: function() {
			return {
				tabIndex: 0,
				tabCeiling: 3
			}
	},
	methods: {
		nextTab: function() {
			this.$data.tabIndex++;
			let { tabCeiling, tabIndex } = this.$data;
			(tabIndex === tabCeiling ? this.$data.tabIndex = 0: null)
		}
	}
}

</script>

<style lang="scss">
.slider-form-modal {
	ul.uk-tab { display: none; }
}
</style>
