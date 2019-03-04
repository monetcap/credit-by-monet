<!-- Testimonials section -->
<template>
	<div class="testimonials">

		<div>
			<h2 class="uk-h1 uk-text-center uk-margin-large">Testimonials</h2>

			<vk-grid gutter="medium" class="uk-child-width-expand@m" matched>

				<div>
					<vk-card type="blank">

						<!-- NOTE: technically star_rate is an acceptable alias for star in
							material icons.  However, for whatever reason it takes up an
							obscene amount of room.  So, in the future, never use star_rate -->
						<!-- eslint-disable -->
						<i class="material-icons filled" v-for="n in 5">
							star
						</i>

						<h4 class="uk-text-uppercase">I should have done this sooner!</h4>
						<p class="uk-text-lead">I was struggling to make minimum payments to get by.  Credit
							really saved me by stopping interest and late fees!</p>
						<p class="uk-text-lead">Rosemary T.</p>
					</vk-card>
				</div>

				<div>
					<vk-card type="blank">

						<i class="material-icons" v-for="n in 5" v-bind:class="{'filled': n < 5}">
							star
						</i>

						<h4 class="uk-text-uppercase">Excellent service</h4>
						<p class="uk-text-lead">It's embarassing to seek financial assistance.  I wish there was
							an easier way to list my debts.  Service was amazing.</p>
						<p class="uk-text-lead">Ethan M.</p>
					</vk-card>
				</div>

				<div>
					<vk-card type="blank">

						<i class="material-icons filled" v-for="n in 5">
							star
						</i>

						<h4 class="uk-text-uppercase">No hassles, no worries, just amazing</h4>
						<p class="uk-text-lead">I'm pretty disorganized, so having Credit
							manage my debt was a game-changer.  I finally feel in control of
							my life again!</p>
						<p class="uk-text-lead">Jessica P.</p>
					</vk-card>
				</div>

			</vk-grid>
		</div>

	</div>
</template>

<script>
export default {
	name: "Testimonials"
}
</script>

<style lang="scss" scoped>
@import 'src/styles/colors';
.testimonials {
	background-color: $monet-blue;
	display: flex;
	align-items: center;
	min-height: 100%;
	padding: 30px 20px;

	h2, h4, p {
		color: $white;
	}

	.uk-text-lead {
		font-size: 20px;
	}

	h4 {
		margin: 10px 0;
	}

	& > div {
		width: 100%;
	}
}

.uk-card {
	border: 2px solid $light-grey;
}

.material-icons {

	color: $light-grey;

	&.filled {
		color: $monet-gold;
	}

}

</style>
