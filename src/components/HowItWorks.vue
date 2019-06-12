<!-- Component for rendering the how it works section -->
<template>
  <div id="section-how-it-works" class="how-it-works">

    <div class="uk-container">

      <h1 class="uk-text-center uk-margin-large">How it works</h1>

      <vk-grid gutter="medium" class="uk-child-width-1-2@m uk-margin-large-bottom" matched>

        <!-- Seems bizarre, but we need to wrap cards in divs in order to make
          gutters actually work -->
        <div>
          <vk-card type="blank">
            <div class="foo">
              <img src="../assets/circle-icon-comment.png"/>
              <h4 class="uk-text-uppercase">We provide an initial estimate</h4>
            </div>
            <p class="uk-text-lead">We'll analyze your credit file to determine
            how much credit repair you require and discuss the next steps
            for increasing your credit score.</p>
          </vk-card>
        </div>

        <div>
          <vk-card type="blank">
            <div class="foo">
              <img src="../assets/circle-icon-gesture.png"/>
              <h4 class="uk-text-uppercase">Next, we'll build and repair your
                credit</h4>
            </div>
            <p class="uk-text-lead">We assess your credit report to idenitify
              any derogatory remarks that we can remove and create a personalized
              plan for building new credit.</p>
          </vk-card>
        </div>

        <div>
          <vk-card type="blank">
            <div class="foo">
              <img src="../assets/circle-icon-dollar.png"/>
              <h4 class="uk-text-uppercase">Finally, you can obtain credit</h4>
            </div>
            <p class="uk-text-lead">A stronger credit profile means you can
              focus on achieving your financing goals. The amount of credit
             available to you will depend on the stength of your profile.</p>
          </vk-card>
        </div>

        <div>
          <vk-card type="blank">
            <div class="foo">
              <img src="../assets/circle-icon-checklist.png"/>
              <h4 class="uk-text-uppercase">A credit maintenance plan for you</h4>
            </div>
            <p class="uk-text-lead">We'll provide guidance and tips for maintaining
            your newly repaired credit so that you can keep on building. This
            way, you'll have access to credit if you ever need it again.</p>
          </vk-card>
        </div>

      </vk-grid>

    </div>

  </div>
</template>

<script>
export default {
  name: "HowItWorks"
}
</script>

<style lang="scss" scoped>
@import 'src/styles/colors';
.how-it-works {
  min-height: 100%;
  padding: 30px 20px;
  display: flex;
  align-items: center;

  & > div {
    width: 100%;
  }

  .foo {
    display: flex;
    align-items: center;

    & h4 {
      width: 50%;
    }

    & img {
      width: 30%;
      margin-right: 20px;
    }
  }
}

.uk-text-lead {
  font-size: 20px;
}

.uk-card {
  border: 2px solid $light-grey;
}
</style>
