<!-- Row of icons that serve as a sort of boundary between above-fold and
  below-fold content.  They sort of straddle the line to indicate that, yes,
  there is in fact more -->
<template>
  <div class="fold-icons">
    <div class="uk-container">
      <vk-grid class="uk-margin-top uk-margin-bottom uk-child-width-1-2 uk-child-width-1-4@m uk-text-center">

        <vk-card type="blank">
          <div slot="media-top">
            <img src="../assets/icon-lightning.png" />
          </div>
          <vk-card-title>Boost your credit score quickly</vk-card-title>
        </vk-card>

        <vk-card type="blank">
          <div slot="media-top">
            <img src="../assets/icon-bunny.png"/>
          </div>
          <vk-card-title>Fast customer service</vk-card-title>
        </vk-card>

        <vk-card type="blank">
          <div slot="media-top">
            <img src="../assets/icon-money-bag.png"/>
          </div>
          <vk-card-title>Access higher lines of credit</vk-card-title>
        </vk-card>

        <vk-card type="blank">
          <div slot="media-top">
            <img src="../assets/icon-money-hand.png"/>
          </div>
          <vk-card-title>Meet your goals sooner</vk-card-title>
        </vk-card>

      </vk-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoldIcons"
}
</script>

<style lang="scss" scoped>
@import '../styles/colors';

.fold-icons {
  background-color: $monet-blue;

  h2, h3 {
    color: $white;
    font-weight: 700;
    text-transform: uppercase;
  }

  & > * {
    padding-top: 40px;
  }
}
</style>
