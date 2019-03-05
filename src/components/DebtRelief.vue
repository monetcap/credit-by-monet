<!-- Component that renders section of the page for debt relief.  The one that
	contains the map. -->
<template>

	<div class="debt-relief uk-container uk-padding-large">

		<div>

			<h1 class="uk-h1 uk-text-center">Debt relief wherever you are.</h1>

			<vk-grid gutter="large" class="uk-child-width-expand@m">

				<div class="uk-width-1-3@m debt-copy">
					<div>
						<h2 class="uk-text-uppercase">Let's work together</h2>

						<p>Credit by Monet Capital offers debt relief in various locaitons
							nationwide.  Get in touch to see if we cover your county or state.</p>

						<p>We can reduce or eliminate interest charges and lower your total
							payments by up to 30%-50%.</p>
					</div>
				</div>

				<div>
					<img
						src="../assets/monet-service-map.png"
						alt="National debt relief throughout the United States."
					/>
				</div>
			</vk-grid>

		</div>

	</div>
</template>

<script>
export default {
	name: "DebtRelief"
}
</script>

<style lang="scss" scoped>
@import 'src/styles/colors';
.debt-relief {
	display: flex;
	align-items: center;
	min-height: 100%;
	padding-top: 60px;
	padding-bottom: 60px;
	background-color: $monet-blue;

	& > div {
		width: 100%;
	}

	h1 {
		margin-bottom: 100px;
	}

	h2 {
		font-weight: 500;
	}

	h1, h2, p {
		color: $white;
	}

	p {
		font-size: 20px;
	}
}

.debt-copy {
	display: flex;
	align-items: center;
}
</style>
