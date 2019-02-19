<template>

	<vk-modal :show.sync="show" size="container">

		<vk-modal-close @click="$emit('update:show', false)"></vk-modal-close>

		<vk-tabs-vertical align="left">

			<vk-tabs-item title="$45,000">Foo!</vk-tabs-item>
			<vk-tabs-item title="How Soon">
				<HowSoon amount="45,000"/>
			</vk-tabs-item>

		</vk-tabs-vertical>

	</vk-modal>

</template>

<script>
import HowSoon from './HowSoon.vue';
export default {
	name: "SliderForm",
	components: { HowSoon },
	props: ['show']
}
</script>
