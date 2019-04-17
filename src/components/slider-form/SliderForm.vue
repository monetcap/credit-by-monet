<template>

  <vk-modal class="slider-form-modal" :show.sync="show">

    <vk-modal-close @click="$emit('update:show', false)"></vk-modal-close>

    <form id="slider-form" @submit="checkForm" action="http://localhost:8080/api" method="post" novalidate="true" class="uk-grid-small" uk-grid>

      <vk-tabs :active-tab="tabIndex" >

        <vk-tabs-item class="uk-text-center" title="Page1">
          <h2>We'll help you access ${{ amount }}.</h2>
          <h4 class="uk-margin-remove-top">Provide your details below to get started.</h4>

          <input class="uk-input uk-width-1-2@s" id="name" name="name" type="text" placeholder="Full Name" v-model="name" />
          <input class="uk-input uk-width-1-2@s" id="date-of-birth" name="date-of-birth" type="date" placeholder="Date of Birth" v-model="dateOfBirth" />
          <input class="uk-input uk-width-1-2@s" id="last-four-of-ssn" name="last-four-of-ssn" type="text" placeholder="SSN (Last 4 Digits)" v-model="lastFourOfSSN" />
          <input class="uk-input uk-width-1-2@s" id="email" name="email" type="email" placeholder="Email Address" v-model="emailAddress" />
          <input class="uk-input uk-width-1-2@s" id="state" name="state" type="text" placeholder="State" v-model="state" />
          <input class="uk-input uk-width-1-2@s" id="city" name="city" type="text" placeholder="City" v-model="city" />
          <input class="uk-input uk-width-1-2@s" id="street-address" name="street-address" type="text" placeholder="Street Address" v-model="streetAddress" />
          <input class="uk-input uk-width-1-2@s" type="text" placeholder="Zip Code" v-model="zipCode" />

        </vk-tabs-item>

        <vk-tabs-item title="Page2">
          <h4>Consumer Credit File Rights (State & Federal)</h4>
          <textarea class="uk-textarea uk-margin-small-bottom" readonly>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
          <label for="rights-checkbox">I have read and understand my rights.</label>
          <input id="rights-checkbox" class="uk-checkbox uk-margin-small-left" type="checkbox" v-model="rightsCheckbox" />

          <hr />

          <h4 class="uk-margin-remove-top">E-Sign Consent and Disclosure</h4>
          <textarea class="uk-textarea uk-margin-small-bottom" readonly>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
          <label for="esign-checkbox">I have read the disclosure and consent to the terms.</label>
          <input id="esign-checkbox" class="uk-checkbox uk-margin-small-left" type="checkbox" v-model="esignCheckbox" />

        </vk-tabs-item>

        <vk-tabs-item title="Page3">
          <h2>By typing my name below, I acknowledge that I have received, read, and understand the:</h2>
          <p>1. Application and Consent;</p>
          <p>2. E-Sign Consent and Disclosure; and the</p>
          <p>3. Disclosure Statement;</p>

          <input class="uk-input uk-width-1-2@s" type="text" placeholder="Printed Name" v-model="printedName" />
          <input class="uk-input uk-width-1-2@s" type="date" placeholder="Date" v-model="date" />

          <div class="uk-margin-small-top uk-text-center" v-if="errors.length">
            <h2 class="uk-text-danger">Please correct the following error(s):</h2>
            <ul class="uk-list">
              <li v-for="error in errors" :key="error">
                {{ error }}
              </li>
            </ul>
          </div>

          <div>
            <input type="submit" class="uk-button uk-button-default uk-width-1-1 submit" />
          </div>
        </vk-tabs-item>

      </vk-tabs>

    </form>

    <div class="uk-flex uk-flex-right uk-flex-middle">
      <vk-button v-bind:class="{ 'uk-hidden': tabIndex===0 }" v-on:click="backTab">Go Back</vk-button>
      <vk-button v-bind:class="{ 'uk-hidden': tabIndex===tabCeiling-1 }" v-on:click="nextTab">Continue</vk-button>
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
        tabCeiling: 3,
        name: null,
        dateOfBirth: null,
        lastFourOfSSN: null,
        emailAddress: null,
        streetAddress: null,
        city: null,
        state: null,
        zipCode: null,
        rightsCheckbox: false,
        esignCheckbox: false,
        printedName: null,
        date: null,
        errors: []
      }
  },
  methods: {
    backTab: function() {
      let { tabIndex } = this.$data;
      (tabIndex === 0 ? null: this.$data.tabIndex--)
    },
    nextTab: function() {
      let { tabCeiling, tabIndex } = this.$data;
      (tabIndex === tabCeiling ? null : this.$data.tabIndex++)
    },
    checkForm: function(e) {
      this.errors = []

      if(!this.name) { this.errors.push("Name Required.")}
      if(!this.dateOfBirth) { this.errors.push("Date of Birth Required.")}
      if(!this.lastFourOfSSN) { this.errors.push("Last 4 Digits of SSN Required.")}
      if(!this.emailAddress) { this.errors.push("Email Address Required.")}
      if(!this.streetAddress) { this.errors.push("Street Address Required.")}
      if(!this.city) { this.errors.push("City Required.")}
      if(!this.state) { this.errors.push("State Required.")}
      if(!this.zipCode) { this.errors.push("Zipcode Required.")}
      if(!this.rightsCheckbox) { this.errors.push("Check that you've read and understand the Consumer Credit File Rights")}
      if(!this.esignCheckbox) { this.errors.push("Check that you've read and understand the E-Sign Consent and Disclosure")}
      if(!this.printedName) { this.errors.push("Printed Name Required.")}
      if(!this.date) { this.errors.push("Date after Printed Name Required.")}

      if(!this.errors.length) { return true; }

      e.preventDefault();
    }
  }
}

</script>

<style lang="scss">
@import 'src/styles/colors';

.slider-form-modal {
  ul.uk-tab { display: none; }

  h4, h2 { color: $monet-gold; }

  button.uk-button, input.uk-button {
    background-color: $monet-gold;
    color: white;

    &.submit {
      background-color: $monet-blue;
    }
  }

  input[type="date"]:before {
    content: attr(placeholder) !important;
    color: #aaa;
    margin-right: 0.5em;
  }
  input[type="date"]:focus:before,
  input[type="date"]:valid:before {
    content: "";
  }
}
</style>
