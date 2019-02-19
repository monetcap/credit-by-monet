<!-- Component for rendering the partner contact form, presented as a modal-->
<template>
	<vk-modal :show.sync="show">
		<vk-modal-close @click="$emit('update:show', false)"/>
		<vk-modal-title>We'd make a good team</vk-modal-title>
	</vk-modal>
</template>

<script>
export default {
	name: "PartnerContact",
	props: ['show']
}
</script>
