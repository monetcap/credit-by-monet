<!-- Component for rendering the how it works section -->
<template>
	<div class="how-it-works">

		<div>

			<h1 class="uk-text-center">How it works</h1>

			<vk-grid gutter="medium" class="uk-child-width-expand@m" matched>

				<!-- Seems bizarre, but we need to wrap cards in divs in order to make
					gutters actually work -->
				<div>
					<vk-card type="blank">
						<div class="foo">
							<img src="../assets/circle-icon-comment.png"/>
							<h4 class="uk-text-uppercase">Review Your Finances</h4>
						</div>
						<p class="uk-text-lead">Review your debts, budget and credit free of
							charge with a certified Credit counselor.</p>
					</vk-card>
				</div>

				<div>
					<vk-card type="blank">
						<div class="foo">
							<img src="../assets/circle-icon-gesture.png"/>
							<h4 class="uk-text-uppercase">We start when you are ready</h4>
						</div>
						<p class="uk-text-lead">Once you are ready to go, we will contact
							your creditors to negotiate lower interest rates.</p>
					</vk-card>
				</div>

				<div>
					<vk-card type="blank">
						<div class="foo">
							<img src="../assets/circle-icon-dollar.png"/>
							<h4 class="uk-text-uppercase">Get out of debt faster</h4>
						</div>
						<p class="uk-text-lead">Debt-free as soon as 36 months by one monthly
							payment to us.  We take care of the rest.</p>
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
			width: 100%;
			flex-grow: 1;
		}

		& img {
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
