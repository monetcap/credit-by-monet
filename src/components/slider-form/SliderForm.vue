<template>

  <vk-modal class="slider-form-modal" :show.sync="show">

    <vk-modal-close @click="$emit('update:show', false)"></vk-modal-close>

    <form id="slider-form" @submit="checkForm" action="http://localhost:8080/api" method="post" novalidate="true" class="uk-grid-small" uk-grid>

      <vk-tabs :active-tab="tabIndex" >

        <vk-tabs-item class="uk-text-center" title="Page1">
          <!--<h2>We'll help you access ${{ amount }}.</h2>-->
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
          <div style="overflow-y: scroll; height: 8em;" class="uk-textarea uk-margin-small-bottom">
            <p>You have a right to dispute inaccurate information in your credit report by contacting the credit bureau directly. However, neither you nor any ‘credit repair’ company or credit repair organization has the right to have accurate, current, and verifiable information removed from your credit report. The credit bureau must remove accurate, negative information from your report only if it is over 7 years old.
            Bankruptcy information can be reported for 10 years.</p>
            <p>You have a right to obtain a copy of your credit report from a credit bureau. You may be charged a reasonable fee. There is no fee, however, if you have been turned down for credit, employment, insurance, or a rental dwelling because of information in your credit report within the
            preceding 60 days. The credit bureau must provide someone to help you interpret the information in your credit file.</p>
            <p>You are entitled to receive a free copy of your credit report if you are unemployed and intend to apply for employment in the next 60 days, if you are a recipient of public welfare assistance, or if you have reason to believe that there is inaccurate information in your credit report due to fraud.
            You have a right to sue a credit repair organization that violates the Credit Repair Organization Act. This law prohibits deceptive practices by credit repair organizations.</p>
            <p>You have the right to cancel your contract with any credit repair organization for any reason within 3 business days from the date you signed it.</p>
            <p>Credit bureaus are required to follow reasonable procedures to ensure that the information they report is accurate. However, mistakes may occur.</p>
            <p>You may, on your own, notify a credit bureau in writing that you dispute the accuracy of information in your credit file. The credit bureau must then reinvestigate and modify or
            remove inaccurate or incomplete information. The credit bureau may not charge any fee for this service. Any pertinent information and copies of all documents you have concerning an error should be given to the credit bureau.</p>
            <p>If the credit bureau’s reinvestigation does not resolve the dispute to your satisfaction, you may send a brief statement to the credit bureau, to be kept in your file, explaining why you think the record is inaccurate. The credit bureau must include a summary of your statement about disputed information with any report it issues about you.</p>
            <p>The Federal Trade Commission regulates credit bureaus and credit repair organizations.<p>
            <p><b>For more information contact:</b><br>
            The Public Reference Branch<br>
            Federal Trade Commission<br>Washington, D.C. 20580</p>
          </div>
          <input id="rights-checkbox" class="uk-checkbox uk-margin-small-right" type="checkbox" v-model="rightsCheckbox" />
          <label for="rights-checkbox">I have read and understand my rights.</label>
          <hr />

          <h4 class="uk-margin-remove-top">E-Sign Consent and Disclosure</h4>
          <div style="overflow-y: scroll; height: 8em;" class="uk-textarea uk-margin-small-bottom">
            <p>
              <b>Please carefully review this E-Sign Consent and Disclosure Form in order to use your electronic signa- ture and receive all
              communications electronically. Be advised that your consent is optional.</b>
            </p>
            <p>
              <b>Your Consent to Use Electronic Signature and Receive Electronic Communications.</b>
              By signing this form, you agree that your e-signature shall be deemed your legal signature; you consent to the use of your electronic signature for the purpose of signing documents, and to receive documents and/ or communications (“Communication(s)”) related to Credit Repair Source LLC d/b/a Credit by Monet (“Mon- et”) services electronically unless and until you withdraw your consent as described herein. Your consent includes, but is not limited to the following communications:
              <ul>
                <li>notices</li>
                <li>disclosures</li>
                <li>consents</li>
                <li>contracts</li>
                <li>any communications with respect to Monet, credit bureau and/or any communication relating to your credit.</li>
              </ul>
              By agreeing, you consent that all Communications that Monet will provide to you in electronic form will be sent to the email you indicated on file.
            </p>
          </div>
          <input id="esign-checkbox" class="uk-checkbox uk-margin-small-right" type="checkbox" v-model="esignCheckbox" />
          <label for="esign-checkbox">I have read the disclosure and consent to the terms.</label>
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
