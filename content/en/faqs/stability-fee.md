<StatusBanner sticky>

These are legacy guides and will not be maintened. You may be looking for the page on <Button  secondary inline to="/learn/vaults/stability-fees/">Stability Fees</Button>

</StatusBanner>

# Stability Fee

## What is the Stability Fee?

The Maker Protocol collects a Stability Fee on Dai that is generated from [Maker Vaults](/learn/vaults/). It is a variable-rate fee that changes when Maker’s governing body votes on proposals put forth by Risk Teams.

## What is the purpose of the Stability Fee?

The Stability Fee is a Risk Parameter designed to address the inherent risk in generating Dai against collateral in [Maker Vaults](/learn/vaults/). A part of the Stability Fee is also set aside for the purpose of sustaining operations of the Maker Protocol which include the [DSR](dsr.md), Risk Teams, and other costs inherent to the protocol.

## When do I have to pay the Stability Fee?

The Stability Fee continuously accrues to the generated Dai Balance of a user’s [Vault](/learn/vaults/). Vault owners are free to pay back Dai at any time they wish. Vaults have no standards around repayment, instead, they require the owner of the Vault to keep its [Collateralization Ratio](/learn/vaults/#what-is-the-collateralization-ratio) above the [Liquidation Ratio](/learn/liquidation.mdx#what-is-the-liquidation-ratio).

## Do I have to pay the new fees on old debt in the case of a Stability Fee change?

No. Stability Fees are never applied retroactively. After a fee change, users will accrue a Stability Fee at the new rate from that point forward.

## Why does the Stability Fee Change?

The Stability Fee for each [Vault](/learn/vaults/) type changes as a result of the decisions of MKR token holders who govern the protocol. These decisions are based on the recommendation of Risk Teams who perform risk assessments on Collateral used in the system. The Risk Teams may update their proposed Stability Fee when something fundamental changes about the underlying asset or the system as a whole.

## How is the Stability Fee calculated?

The Stability Fee is continuously compounding interest at a growth rate of x% per second. When the Stability Fee is set to 2%, for example, it will be accumulating at 1.0000000006279371924910298109948‬% per second, meaning that at the end of year one the user will owe exactly 2% on the principal. Assuming the user put in 100 Dai, at the end of year one they would have 102.00, and at the end of year two, they would have 104.04.

Technical documentation about how Rates work in the Maker Protocol can be found in the [Rates Module](https://docs.makerdao.com/smart-contract-modules/rates-module) section of our Documentation Portal.

## What does the system do with the collected fees?

The Stability Fees are collected inside the Maker Protocol’s [internal balance sheet](https://docs.makerdao.com/smart-contract-modules/core-module/vat-detailed-documentation). Once the maximum level of surplus is reached, the system will automatically send Dai to a [Surplus Auction](https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol#surplus-auction). During this auction, keepers bid in MKR for DAI. At the end of the auction, the Dai is released to the winning bidder, while the MKR that was paid gets burned.

## Where can I see my currently accrued Stability Fee?

Since the Maker Protocol can be integrated by anyone, many different front-ends may be used for interacting with it. One can usually find the amount of accrued fees on these user-interfaces.

There are also a number of third-party tools for tracking Vaults, like [mkr.tools](https://mkr.tools/cdps), which allows a user to see the Stability Fees owed on any Vault. More of these tools can be found in the [Watch your Dai](https://awesome.makerdao.com/#watch-dai) section of the [Awesome-MakerDAO](https://awesome.makerdao.com/) resource repository.

## How can I calculate my potential Stability Fee?

There are a number of online calculators that can be found on the [Monitor Vaults](https://awesome.makerdao.com/#monitor-vaults) section of the Awesome-MakerDAO resource repository.

## Where can I learn more about Risk Teams and how Stability Fees are determined?

Please visit our Risk Management FAQ(_coming soon_) to learn more about Risk Teams and the work that they do. Additionally, documentation about their models for determining Stability Fees can be found in our [Governance Forum](https://forum.makerdao.com/), under the [Risk](https://forum.makerdao.com/c/risk/) section.

## Is there a limit to how much a Stability Fee can change?

Yes, there is a weekly limit to how much a given Stability Fee can change, defined by the range of options available for MKR governors to vote on. It is a range that is subject to change. The Stability Fee adjustment votes that were going on in October 2019, for example, offered a range of -4% to 4%. To find out the current range on a given Stability Fee adjustment, visit [mkrgov.science/polls](https://mkrgov.science/polls) and look at the most recent relevant Governance Poll.

## How often do Stability Fees change?

Stability Fee changes don’t happen on a regular schedule. They happen in response to changing market dynamics and risks. It is not possible to give an exact answer to how often Stability Fees change. Risk Teams approach any adjustments on a case-by-case basis.

## Where can I find more technical information about Stability Fees?

Visit our [Documentation Portal](https://docs.makerdao.com/) for all technical documentation of the Maker Protocol. Technical documentation about the Stability Fee can be found in the [Jug - Detailed Documentation](https://docs.makerdao.com/smart-contract-modules/rates-module/jug-detailed-documentation) subsection of our Documentation Portal. Documentation about how Rates work in the Maker Protocol can be found in the [Rates Module](https://docs.makerdao.com/smart-contract-modules/rates-module) section of our Documentation Portal.
