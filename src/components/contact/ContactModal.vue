<!-- Component for rendering a contact form, presented as a modal.  The app
  currently has two with identical layouts but varying presentation, so we use
  props to control the latter -->
<template>
  <vk-modal :show.sync="show" size="3-4" class="partner-contact">

    <vk-modal-close @click="$emit('update:show', false)"/>

    <vk-modal-title class="uk-text-uppercase uk-text-center">
      {{ title }}
    </vk-modal-title>

    <!-- Beginning of form proper -->
    <form>

      <vk-grid class="uk-grid-medium uk-child-width-1-2@m">

        <div>

          <vk-grid class="uk-grid-small uk-child-width-1-2@m">

            <div>
              <input class="uk-input" type="text" placeholder="First Name"/>
            </div>
            <div>
              <input class="uk-input" type="text" placeholder="Last Name"/>
            </div>

          </vk-grid>

        </div>

        <div>
          <input class="uk-input" type="text" placeholder="Phone number"/>
        </div>

        <div class="uk-margin">
          <input class="uk-input" type="text" placeholder="Email address"/>
        </div>

        <div class="uk-margin">
          <input class="uk-input" type="text" placeholder="Business name"/>
        </div>

      </vk-grid>

      <textarea class="uk-textarea" rows="8" placeholder="Message"/>

      <vk-button type="primary" class="uk-align-right">
        Submit
      </vk-button>

    </form>

  </vk-modal>
</template>

<script>
export default {
  name: "PartnerContact",
  props: ['show', 'title', 'type']
}
</script>

<style lang="scss">
@import 'src/styles/colors';
.partner-contact .uk-modal-dialog {

  background-color: $monet-blue;

  h2 {
    color: $white;
    font-weight: 500;
  }


}

.partner-contact.bg-white {

  .uk-modal-dialog {
    background-color: $white;
  }

  h2 {
    color: $monet-gold;
  }

}
</style>
