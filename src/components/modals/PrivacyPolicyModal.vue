<!-- Component for rendering the privacy policy. -->

<template>
   <vk-modal :show.sync="show" class="privacy-policy">
      <vk-modal-close @click="$emit('update:show', false)"/>
      <vk-modal-title class="uk-text-uppercase uk-text-center">
         {{ title }}
      </vk-modal-title>

      <!-- Beginning of policy content -->
      <div>
         <h3>Your privacy is critically important to us.</h3>
         Credit by Monet is located at:<br/>
         <address>
            Credit by Monet<br/>495 Flatbush Ave<br />Brooklyn, NY 11225
         </address>
         Alternately, please direct questions regarding this policy to:<br/>
         <address>
            Credit by Monet<br/>81 Willoughby St <br />Brooklyn, NY 11201
         </address>
         <p>It is Credit by Monet’s policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to <a href="http://creditbymonet.com">creditbymonet.com</a> (hereinafter, "us", "we", or "creditbymonet.com"). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy ("Privacy Policy") to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.</p>
         <p>This Privacy Policy, together with the Terms and conditions posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.</p>
         <h2>Website Visitors</h2>
         <p>Like most website operators, Credit by Monet collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Credit by Monet’s purpose in collecting non-personally identifying information is to better understand how Credit by Monet’s visitors use its website. From time to time, Credit by Monet may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.</p>
         <p>Credit by Monet will also be collecting potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on http://creditbymonet.com blog posts. Credit by Monet only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.</p>
         <h2>Gathering of Personally-Identifying Information</h2>
         <p>Certain visitors to Credit by Monet’s websites choose to interact with Credit by Monet in ways that require Credit by Monet to gather personally-identifying information. The amount and type of information that Credit by Monet gathers depends on the nature of the interaction. For example, we ask visitors who sign up for a blog at http://creditbymonet.com to provide a username and email address.</p>
         <h2>Security</h2>
         <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
         <h2>Advertisements</h2>
         <p>Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Credit by Monet and does not cover the use of cookies by any advertisers.</p>
         <h2>Links To External Sites</h2>
         <p>Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms and conditions of every site you visit.</p>
         <p>We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.</p>
         <h2>Cookies</h2>
         <p>To enrich and perfect your online experience, Credit by Monet may use "Cookies", similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.</p>
         <p>A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. Credit by Monet uses cookies to help Credit by Monet identify and track visitors, their usage of http://creditbymonet.com, and their website access preferences. Credit by Monet visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Credit by Monet’s websites, with the drawback that certain features of Credit by Monet’s websites may not function properly without the aid of cookies.</p>
         <p>By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Credit by Monet's use of cookies.</p>
         <h2>Privacy Policy Changes</h2>
         <p>Although most changes are likely to be minor, Credit by Monet may change its Privacy Policy from time to time, and in Credit by Monet’s sole discretion. Credit by Monet encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.</p>
         <h2>Contact Information</h2>
         <p>If you have any questions about this Privacy Policy, please contact us via <a href="mailto:info@creditbymonet.com">email</a>.</p>
      </div>
      <!-- End policy content -->

   </vk-modal>
</template>

<script>
   export default {
    name: "PrivacyPolicy",
    props: ['show', 'title']
   }
</script>

<style lang="scss">
@import 'src/styles/colors';



  h2 {
    color: $monet-gold;
    font-weight: 500;
    font-size: 1.5em;
  }


</style>
