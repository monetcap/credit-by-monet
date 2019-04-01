<!-- Actual slider that triggers the slider modal. -->
<template>
	<form class="uk-container-small uk-margin-top uk-margin-auto">

		<span id="sliderTooltip" class="tooltip" v-bind:style="{'left': `${tooltipOffset}px`}">
			{{ formattedAmount }}
			<span class="arrow"></span>
		</span>

		<div class="slider">
			<span class="thumb" v-bind:style="{'left': `${offsetLeft}px`}">
				<i class="material-icons">
					attach_money
				</i>
			</span>

			<input type="range" min="25000" max="250000" step="1000"
				:value="value"
				@input="slide"
				@mouseup="$emit('mouseup')"/>
		</div>
	</form>
</template>

<script>
export default {
	name: "DebtSlider",
	props: ['value'],
	data: function() {
		return {
			offsetLeft: 0,
			tooltipOffset: 0,
		}
	},

	methods: {

		slide: function(event) {

			let percentage = ((event.target.value - 1000) / 240000);
			let compensation = (percentage * 36) - 2;

			let tooltipWidth = document.getElementById('sliderTooltip').clientWidth;
			let tooltipCompensation = (percentage * tooltipWidth);

			this.offsetLeft = percentage * event.target.clientWidth - compensation;
			this.tooltipOffset = percentage * event.target.clientWidth - tooltipCompensation / 2;
			this.$emit('input', event.target.value);

		}

	},

	computed: {

		// Takes number from slider, adds some commas
		formattedAmount: function() {

			if (this.value == 0) {
				return "$0";
			}

			return `$${ Math.floor(this.value / 1000) },000`
		}

	}
}
</script>

<style lang="scss" scoped>
@import 'src/styles/colors';

form {
	text-align: left;
}

.slider {
	display: flex;
	align-items: center;
	position: relative;
	margin-top: 25px;
}

input[type=range] {

  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */

	&:focus {
	  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */

		&::-webkit-slider-runnable-track {
		  background: #367ebd;
		}

		&::-ms-fill-lower {
		  background: #3071a9;
		}

		&::-ms-fill-upper {
		  background: #367ebd;
		}

	}

	&::-ms-track {
	  width: 100%;
	  cursor: pointer;

	  /* Hides the slider so custom styles can be added */
	  background: transparent;
	  border-color: transparent;
	  color: transparent;
	}

	&::-webkit-slider-thumb {
	  -webkit-appearance: none;
	}

	&::-webkit-slider-thumb {
	  -webkit-appearance: none;
	  height: 36px;
	  width: 36px;
		border: none;
	  background: transparent;
	  cursor: pointer;
	  margin-top: -12px; /* webkit only, without margin thumb is not positioned
			along center of track. */
	}

	&::-moz-range-thumb {
	  height: 36px;
	  width: 36px;
		border: none;
	  background: transparent;
	  cursor: pointer;
	}

	&::-ms-thumb {
	  height: 36px;
	  width: 36px;
		border: none;
	  background: transparent;
	  cursor: pointer;
	}

	&::-webkit-slider-runnable-track {
	  width: 100%;
	  height: 24px;
	  cursor: pointer;
	  background: $monet-blue;
	}

	&::-moz-range-track {
	  width: 100%;
	  height: 24px;
	  cursor: pointer;
	  background: $monet-blue;
	}

	&::-ms-track {
	  width: 100%;
	  height: 8.4px;
	  cursor: pointer;
	  background: transparent;
	  border-color: transparent;
	  border-width: 24px 0;
	  color: transparent;
	}

	&::-ms-fill-lower {
	  background: #2a6495;
	  border: 0.2px solid #010101;
	  border-radius: 2.6px;
	  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
	}

	&::-ms-fill-upper {
	  background: #3071a9;
	  border: 0.2px solid #010101;
	  border-radius: 2.6px;
	  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
	}

}

.thumb {
	color: $white;
	pointer-events: none;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	border-radius: 25px;
	background: $monet-gold;
	position: absolute;
	font-size: 36px;

	i {
		font-size: 32px;
	}
}

.tooltip {
	position: relative;
	text-align: center;
	border-radius: 12px;
	color: $white;
	background: $monet-blue;
	display: inline-block;
	padding: 12px 16px;
	margin-bottom: 10px;

	.arrow {
		position: absolute;
		bottom: -5px;
		left: 20px;
		display: inline-block;
		width: 0;
		height: 0;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-top: 5px solid $monet-blue;
	}
}
</style>
