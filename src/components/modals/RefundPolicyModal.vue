<!-- Component for rendering the refund policy. -->

<template>
  <vk-modal :show.sync="show" class="refund-policy">

    <vk-modal-close @click="$emit('update:show', false)"/>

    <vk-modal-title class="uk-text-uppercase uk-text-center">
      {{ title }}
    </vk-modal-title>

    <!-- Beginning of policy content -->

    <div>
      <p>Client may request a refund if they believe that Credit by Monet did not complete the obligations as defined in our Terms and Conditions, or the Client’s signed agreement.</p>
      <p>Refund of up to 50% of total price may be possible to the Client only if <em>all</em> the below conditions exist:</p>
      <ul>
        <li>Client shall have been current on all payments, without any late payments, and Client shall have completed all payments per the agreement.</li>
        <li>Client shall be current on all payments to Credit by Monet, and Client shall have completed all payments per agreement.</li>
        <li>Client shall have followed all Credit by Monet directions based on the credit repair plan (Excessive time spent with clients in any form of communication, or personal meetings will count against the allocated time per plan, and obviously reduce time spent on actual credit repair, therefore client may not get optimal results.)</li>
        <li>On existing credit lines at time of signed agreement, and on any newly obtained credit, whether or not per the Credit by Monet recommendation, Client always made at least the minimum payment due on time per industry suggestion (which was communicated with the Client.)</li>
        <li>Client never exceeded maximum 30% balance-to-available-credit on revolving credit lines (If Client acquired new credit lines on their own, or per Credit by Monet recommendation, and Client has exceeded suggested maximum 30% balance-to-available-credit , and, or late in making minimum on time payments, no refund shall be given.)</li>
        <li>Client was never late and always paid minimum balance due on all existing trade lines, or new credit lines acquired during duration of Credit by Monet agreement.</li>
        <li>Client upon signing Credit by Monet agreement strictly followed at least one of several suggested methods to improve or increase scores as noted in the credit repair plan.</li>
        <li>To receive a 50% refund of total money paid to Credit by Monet, the Client shall request such refund in writing.
        Credit by Monet shall review the request to confirm if Client complied with the terms of our Refund Policy.</li>
      </ul>
      <p>Credit by Monet shall determine the final refund amount, if any at all, and Credit by Monet decision shall be final.</p>
    </div>


  </vk-modal>
</template>

<script>
export default {
  name: "RefundPolicy",
  props: ['show', 'title']
}
</script>
