<!-- Hero is used to render the above-fold call-to-action and slider -->
<template>
  <div class="hero">

    <SliderForm :show.sync="show" :amount="sliderDebt"/>
    <SubmittedModal :show.sync="submitted"/>

    <vk-card>
      <div class="uk-card-body uk-margin-bottom">
      <!-- CTA text -->
      <div class="hero-text">
        <h1>Do you know your current credit score?</h1>
        <p>Credit by Monet can repair your credit score, helping you secure
        your financial future.</p>
        </div>
      </div>

      <DebtSlider v-model="sliderDebt" @mouseup="show = true"/>

    </vk-card>

  </div>
</template>

<script>
import DebtSlider from './slider-form/DebtSlider.vue';
import SliderForm from './slider-form/SliderForm.vue';
export default {
  name: "Hero",
  components: { DebtSlider, SliderForm },
  data: function() {
    return {
      show: false,
      submitted: false,
      sliderDebt: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  align-items: center;
  background: linear-gradient(
    rgba(255, 255, 255, 0.85),
    rgba(255, 255, 255, 0.65)
    ),
    url('../assets/monet-bubble-bg.gif') fixed;
  display: flex;
  min-height: 100%;
  text-align: center;

  & > div {
    width: 100%;
  }

  p {
    font-size: 21px;
  }

}

.uk-card {
  background: rgba(white, .8);
}

.uk-card-body {
  background: transparent;
}
</style>
