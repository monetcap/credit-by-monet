<!-- Component for rendering a contact form that the user can use to enter
	contact info.  Unlike shared contact form used in other pages, it has a
	simpler layout, which prompted the creation of another component. -->
<template>
	<div>
		<h2 class="semi-bold uk-text-uppercase text-gold">How Can We Contact You?</h2>

		<vk-grid class="uk-grid-medium uk-child-width-1-2@m">

			<div>
				<input class="uk-input" type="text" placeholder="First name"
					name="firstName"
					v-bind:value="value.firstName"
					v-on:input="handleInput"/>
			</div>

			<div>
				<input class="uk-input" type="text" placeholder="Last name"
					name="lastName"
					v-bind:value="value.lastName"
					v-on:input="handleInput"/>
			</div>

			<div class="uk-width-1-1 uk-margin-small">

				<input class="uk-input uk-margin-small" type="email"
					placeholder="Email address" name="email"
					v-bind:value="value.email"
					v-on:input="handleInput"/>

				<input class="uk-input" type="text" placeholder="Phone number"
					name="phone"
					v-bind:value="value.phone"
					v-on:input="handleInput"/>

			</div>

		</vk-grid>

		<vk-button type="primary" class="uk-align-right">
			Apply Now
		</vk-button>

	</div>
</template>

<script>
export default {
	name: "SliderContact",
	props: ['value'],

	methods: {

		handleInput: function() {

		}

	}
}
</script>
