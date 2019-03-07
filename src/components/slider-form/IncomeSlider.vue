<!-- Actual slider that triggers the slider modal. -->
<template>
	<form class="uk-container-small uk-margin-top uk-margin-auto">

		<input type="range" min="0" max="50000" step="500"
			:value="value"
			@input="$emit('input', $event.target.value)"
			@mouseup="$emit('mouseup')"/>
			
	</form>
</template>

<script>
export default {
	name: "IncomeSlider",
	props: ['value']
}
</script>

<style lang="scss" scoped>
@import 'src/styles/colors';
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
	  border-radius: 18px;
	  background: $monet-gold;
	  cursor: pointer;
	  margin-top: -12px; /* webkit only, without margin thumb is not positioned
			along center of track. */
	}

	&::-moz-range-thumb {
	  height: 36px;
	  width: 36px;
		border: none;
	  border-radius: 18px;
	  background: $monet-gold;
	  cursor: pointer;
	}

	&::-ms-thumb {
	  height: 36px;
	  width: 36px;
		border: none;
	  border-radius: 18px;
	  background: $monet-gold;
	  cursor: pointer;
	}

	&::-webkit-slider-runnable-track {
	  width: 100%;
	  height: 16px;
	  cursor: pointer;
	  background: $monet-blue;
	  border-radius: 1.3px;
	  border: 0.2px solid #010101;
	}

	&::-moz-range-track {
	  width: 100%;
	  height: 16px;
	  cursor: pointer;
	  background: $monet-blue;
	}

	&::-ms-track {
	  width: 100%;
	  height: 8.4px;
	  cursor: pointer;
	  background: transparent;
	  border-color: transparent;
	  border-width: 16px 0;
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
</style>
