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
						<vk-button class="uk-visible@m" type="secondary" @click="show = true">Contact Us</vk-button>
						<a href="#" class="uk-hidden@m" @click="slide = true"><i class="material-icons text-blue">menu</i></a>
					</vk-navbar-item>
				</vk-navbar-nav>

				<vk-offcanvas :overlay.sync="slide" mode="slide" :show.sync="slide" :flipped="true">

					<vk-offcanvas-close class="text-blue" @click="slide = false"></vk-offcanvas-close>

					<div class="img-container">
						<img class="uk-width-small uk-align-center" src="../assets/logo.png"/>
					</div>

					<ul class="uk-nav uk-nav-primary">

            <li>
							<a href="#section-partners" v-vk-scroll
								@click="slide = false"><span>Apply Now</span>
							</a>
						</li>

            <li>
							<a href="#section-how-it-works" v-vk-scroll
								@click="slide = false"><span>How It Works</span>
							</a>
						</li>

            <li>
							<a href="#section-about" v-vk-scroll
								@click="slide = false"><span>Testimonials</span>
							</a>
						</li>

            <li>
							<a href="#" @click="show = true"><span>Contact us</span></a>
						</li>

          </ul>

				</vk-offcanvas>


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
			show: false,
			slide: false
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
