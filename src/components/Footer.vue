<!-- Component for rendering the footer section -->
<template>
  <div class="footer">
    <div class="uk-container">

      <!-- Render this privacy policy modal if someone clicks the button -->
      <PrivacyPolicyModal :show.sync="show" title="Privacy Policy"/>
      <TermsConditionsModal :show.sync="showterms" title="Terms and Conditions"/>

      <div class="uk-text-center">
        <ul class="footer-detail uk-padding-remove-left">
          <li>495 Flatbush Ave, Brooklyn, NY 11225</li>
          <li>info@creditbymonet.com</li>
          <li><img src="../assets/BBB-Logo.png" class="uk-width-small" alt="BBB Accredited" /></li>
        </ul>
        <ul class="footer-detail uk-padding-remove-left uk-margin-medium-bottom">
          <li>© 2019 Credit by Monet</li>
          <li><a href="#" @click="show = true"><span>Privacy Policy</span></a></li>
          <li><a href="#" @click="showterms = true"><span>Terms and Conditions</span></a></li>
        </ul>
        <!--<p class="footer-disclaimer">
          Uncomment and use this if you need to add fine print.
          <br>
        </p>-->
      </div>
    </div>
  </div>
</template>

<script>
import PrivacyPolicyModal from './modals/PrivacyPolicyModal.vue';
import TermsConditionsModal from './modals/TermsConditionsModal.vue';
export default {
  name: "Footer",
  components: { PrivacyPolicyModal, TermsConditionsModal },
  data: function() {
    return {
      show: false,
      showterms: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/colors';
.footer {
  background-color: $light-grey;
  padding-top: 60px;
  padding-bottom: 60px;
}

.uk-text-lead {
  font-size: 20px;
}

.uk-text-meta {
  color: $black;
}
</style>
