<template>

	<vk-modal class="slider-form-modal" :show.sync="show">

		<vk-modal-close @click="$emit('update:show', false)"></vk-modal-close>

		<vk-tabs :active-tab="tabIndex" >

			<vk-tabs-item class="uk-text-center" title="Page1">
				<h2>We'll help you access ${{ amount }}.</h2>
        <h4 class="uk-margin-remove-top">Provide your details below to get started.</h4>

        <form class="uk-grid-small" uk-grid>
          <input class="uk-input uk-width-1-2@s" type="text" placeholder="Full Name" />
          <input class="uk-input uk-width-1-2@s" type="text" placeholder="Date of Birth" />
          <input class="uk-input uk-width-1-2@s" type="text" placeholder="SSN (Last 4 Digits)" />
          <input class="uk-input uk-width-1-2@s" type="text" placeholder="Email Address" />
          <input class="uk-input uk-width-1-2@s" type="text" placeholder="Street Address" />
          <input class="uk-input uk-width-1-2@s" type="text" placeholder="City" />
          <input class="uk-input uk-width-1-2@s" type="text" placeholder="State" />
          <input class="uk-input uk-width-1-2@s" type="text" placeholder="Zip Code" />
        </form>
			</vk-tabs-item>

			<vk-tabs-item title="Page2">
				<h4>Consumer Credit File Rights (State & Federal)</h4>
        <textarea class="uk-textarea uk-margin-small-bottom" disabled>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
        <label for="rights-checkbox">I have read and understand my rights.</label>
        <input id="rights-checkbox" class="uk-checkbox uk-margin-small-left" type="checkbox" />

        <hr />

        <h4 class="uk-margin-remove-top">E-Sign Consent and Disclosure</h4>
        <textarea class="uk-textarea uk-margin-small-bottom" disabled>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
        <label for="esign-checkbox">I have read the disclosure and consent to the terms.</label>
        <input id="esign-checkbox" class="uk-checkbox uk-margin-small-left" type="checkbox" />

			</vk-tabs-item>

			<vk-tabs-item title="Page3">
				<h2>By signing below, I acknowledge that I have received, read, and understand the:</h2>
        <p>1. Application and Consent;</p>
        <p>2. E-Sign Consent and Disclosure; and the</p>
        <p>3. Disclosure Statement;</p>

        <form class="uk-grid-small" uk-grid>
          <input class="uk-input uk-width-1-2@s" type="text" placeholder="Signature" />
          <input class="uk-input uk-width-1-2@s" type="text" placeholder="Printed Name" />
          <input class="uk-input uk-width-1-2@s" type="text" placeholder="Date" />
        </form>
			</vk-tabs-item>

		</vk-tabs>

    <div class="uk-flex uk-flex-right uk-flex-middle">
      <vk-button v-on:click="nextTab">Continue</vk-button>
    </div>

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
