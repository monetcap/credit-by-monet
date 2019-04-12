<!-- Component for rendering the refund policy. -->

<template>
	<vk-modal :show.sync="show" class="refund-policy">

		<vk-modal-close @click="$emit('update:show', false)"/>

		<vk-modal-title class="uk-text-uppercase uk-text-center">
			{{ title }}
		</vk-modal-title>

		<!-- Beginning of policy content -->

		<div>
      <p>
        Cancellations received prior to the provision of services will entitle
        client to a refund of any amounts paid in connection with the services,
        less a service fee of $50.
      </p>
		</div>


	</vk-modal>
</template>

<script>
export default {
	name: "RefundPolicy",
	props: ['show', 'title']
}
</script>
