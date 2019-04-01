<!-- Component for rendering the footer section -->
<template>
	<div class="footer">
		<div class="uk-container">
			<vk-grid class="uk-child-width-expand@m">

				<div>
					<p class="uk-text-lead">&copy; 2019 Monet Capital | 495 Flatbush Ave,
						Brooklyn, NY 11225 | credit@monetcap.com</p>
					<p>Privacy Policy</p>
				</div>

				<div class="uk-width-1-6@m">
				</div>

			</vk-grid>

			<p class="uk-text-meta">Monet Capital is a free, no obligation financial service, connecting
				prospective borrowers with prospective lenders for Personal Loans. Monet
				Capital is not a financial institution or a lender and cannot guarantee
				final approval of your loan. Qualifying for final approval for a Personal
				Loan depends on many factors including, but not limited to: income levels,
				credit and state of residence. Independent loan companies and lenders may
				verify your supplied information with a number of independent verification
				companies including but not limited to: CLVerify, Teletrack, or Accurint.
				Not all independent loan companies will approve a loan up to $15,000 or
				approve all credit situations. All applications are subject to credit
				approval by the lender and the exact terms of your loan (including
				underwriting criteria for approval, interest and rates, repayment periods
				and monthly payment information) will be determined and presented to you
				by your lender. Each lender uses their own policies to determine their
				terms. You should carefully review each lender's terms and conditions to
				determine which loan works for you and your personal financial situation.
				Interest rates and terms are subject to change at any time without notice.
				Late or missed loan payments may be subject to increased fees and interest
				rates. There is no guarantee you will be approved for credit or that upon
				]approval you will qualify for the advertised rates, fees, or terms shown.
				The offers on this site are from lenders who provide compensation to
				Zippyloan.com for provided leads. There is no cost to you to use this
				service. All reasonable efforts are made to provide and maintain accurate
				information. The rates set forth herein are examples for illustrative
				purposes only unless otherwise indicated and are not a guarantee or
				commitment to loan funds or extend credit. Loans are not available in all
				states at all requested amounts. If we are unable to connect your
				application with a lender, we will direct you to additional options to
				help address your financial needs. This service is not available to
				residents from West Virginia or the District of Columbia.</p>

		</div>
	</div>
</template>

<script>
export default {
	name: "Footer"
}
</script>

<style lang="scss" scoped>
@import 'src/styles/colors';
.footer {
	background-color: $light-grey;
	padding-top: 60px;
	padding-bottom: 60px;
}

.uk-text-lead {
	font-size: 20px;
}

.uk-text-meta {
	color: $black;
}
</style>
