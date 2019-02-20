<!-- Component responsible for rendering the site's navbar.  Also renders a
	contact modal if the user elects to click the contact button -->
<template>

	<vk-sticky>

		<div>

			<ContactModal :show.sync="show" title="Contact Us" class="bg-white"/>

			<vk-navbar>

				<vk-navbar-nav>

					<a href="#app" v-vk-scroll>
						<vk-navbar-logo>
								<img src="../assets/logo.png"/>
						</vk-navbar-logo>
					</a>

				</vk-navbar-nav>

				<vk-navbar-nav slot="right">
					<vk-navbar-item>
						<vk-button type="secondary" @click="show = true">Contact Us</vk-button>
					</vk-navbar-item>
				</vk-navbar-nav>

			</vk-navbar>

		</div>

	</vk-sticky>

</template>

<script>
import ContactModal from './contact/ContactModal.vue';
export default {
	name: "Navbar",
	components: { ContactModal },
	data: function() {
		return {
			show: false
		}
	}
}
</script>

<style lang="scss" scoped>
nav.uk-navbar {
	background-color: rgba(248, 248, 248, 0.95);
}
img {
	max-height: 100%;
	padding: 20px 0;
}
</style>
