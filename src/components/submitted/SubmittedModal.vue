<!-- Component for rendering a modal that simply tells the user that their
  information has been submitted.  That's it.  -->
<template>
  <vk-modal :show.sync="show" size="container">

    <vk-modal-close @click="$emit('update:show', false)"/>
    <h2 class="uk-text-uppercase">{{ title }}</h2>

    <p class="uk-text-lead">Thank you for choosing Credit by Monet!
      We will be in touch within 24 hours.  We look forward to working with you!</p>

  </vk-modal>
</template>

<script>
export default {
  name: "SubmittedModal",
  props: ['show', 'title', 'type']
}
</script>
