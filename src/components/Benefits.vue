<!-- Component for rendering the Benefits section -->
<template>

  <div class="partners uk-margin-large">
    <div class="uk-container">

      <!-- Render this contact form if someone clicks the button -->
      <!--<ContactModal :show.sync="show" title="Get in touch with us"/>-->
      <!-- Render this refund policy modal if someone clicks the button -->
      <RefundPolicyModal :show.sync="show" title="Refund Policy"/>

      <div>

        <h2 class="uk-h1 uk-text-center uk-margin-large">Benefits</h2>

        <vk-grid gutter="large" class="uk-child-width-expand@m">

          <div>
            <div class="good-team uk-padding">
              <h2 class="uk-text-uppercase uk-margin-top">Why Credit by Monet?</h2>

              <p class="uk-text-lead">Credit by Monet is able to repair your
              credit more quickly than those using traditional methods. We are
              dedicated to providing you with the consult you need for a
              sustainable, long-term fix.</p>

              <p class="uk-text-lead">Creating financial freedom means creating
              abundance. We aim to provide more than just an improved credit
              score.</p>

              <p class="uk-text-lead"><span class="semi-bold">Fees start as low as</span>
                <span class="price-fancy uk-margin-small-left">$<span class="text-gold">100</span><sup>*</sup></span><br>
              </p>

              <p class="uk-text-lead">

              </p>
            </div>

            <vk-button class="uk-width-1-1" size="large" type="primary" @click="show = true">
              Read our refund policy
            </vk-button>
          </div>

          <div>
            <!-- TODO: Feed these guys to a variable and use that instead. -->
            <img
              class="uk-position-relative uk-position-center uk-width-large"
              src="../assets/monet-partners-graphic.png"
              alt="Partner with us and meet your financial goals."
            />
          </div>

        </vk-grid>

        <!--<vk-grid gutter="large" class="uk-child-width-expand@m uk-text-center">
          <h4><span class="semi-bold">Fees start as low as</span><br>
            <span class="price-fancy">$<span class="text-gold">100</span><sup>*</sup></span>
          </h4>
          <h4 class="semi-bold">If we don't deliver, <em>you don't pay</em>!</h4>
        </vk-grid>-->

      </div>
    </div>
  </div>

</template>

<script>
//import ContactModal from './contact/ContactModal.vue';
import RefundPolicyModal from './modals/RefundPolicyModal.vue';
export default {
  name: "Benefits",
  components: { RefundPolicyModal },
  data: function() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/styles/colors';
.partners {
  display: flex;
  align-items: center;
  min-height: 100%;

  & > div {
    width: 100%;
  }
}

.good-team {
  margin-bottom: 10px;
  background-color: rgba(216, 216, 216, 0.5);
  border-bottom-right-radius: 30px;

  h2 {
    font-weight: 500;
  }

  .uk-text-lead {
    font-size: 20px;
    color: $monet-blue;
  }
}
</style>
