---
id: liquidation
title: Liquidation
---

## What is Liquidation?

A CDP can be Liquidated if it is deemed unsafe. This ensures there is enough collateral in the system to guarantee the value of all outstanding Dai. Liquidation occurs when the total value of a CDP's collateral \(as judged by the Oracles\) is worth less than the required collateralization for the asset class. During the Liquidation process enough collateral is seized to cover its debt plus fees, leaving the remaining collateral available to the user for withdrawal.

## Why does Liquidation exist?

Unlike most types of fiat, which hold value only by government decree, Dai is a modern and cryptographically secure incarnation of _representative currency_; all circulating Dai is backed by a surplus of collateral tokens stored in smart contracts, ensuring trustlessness and eliminating counterparty risk. It is this complete transparency that maintains user confidence in the system.

## Who triggers Liquidation?

To make sure that the required surplus of collateral exists at all times, a class of users called Keepers are charged with maintaining a constant watch for CDPs that become unsafe or under-collateralized. These Keepers are a special category of the Dai Stablecoin System users. They are the actors in the system who are incentivized to make sure that the outstanding Dai supply remains fully collateralized and solvent. They help maintain the health of the entire ecosystem by ensuring that unsafe CDPs are offered up for Liquidation as quickly as possible. This is particularly important during rapid market downturns as the collateral value could fail to satisfy debt obligations.

## What is the Liquidation Ratio?

Each collateral type has a Liquidation Ratio, which is determined based on the risk profile assigned to that particular asset. Currently, the only collateral type is ETH. At the launch of the Single-Collateral Dai iteration of the system, Maker's Interim Risk Team made an assessment of the ETH asset's risk profile and deemed the appropriate Liquidation Ratio to be 150%.

A decentralized Oracle Feed provides the system with pricing data for ETH to calculate when the Collateralization Ratio for a specific CDP falls below Liquidation Ratio. This combination of Risk Profile and the Market Price as determined by the Oracle Feed is what defines the Liquidation Ratio.

For example, a user wants to draw 200 DAI and thinks the value of the collateral will not drop below 50% of its current market price. The user decides to stake at least double the minimum collateralization threshold. Since the minimum collateralization is 150%, the user deposits \$600 of ETH and draws 200 DAI, leaving their CDP at 300% collateralization.

**It is important to remember that 150% is the lowest point at which an ether based CDP can be collateralized before being made available for Liquidation by the Keepers.** Staying above that minimum level prevents a user's collateral from being Liquidated.

## What is the Liquidation Price?

This is the lowest unit price the staked collateral can reach before the CDP becomes vulnerable to Liquidation.

## What is the Liquidation Penalty?

This is a fee that is added to the total outstanding DAI debt when a Liquidation occurs, which is subtracted from a CDPs collateral holdings.

Proceeds from penalty fees are transferred to the PETH pool. This increases the ratio of WETH that users receive when they remove their collateral from a CDP. This fee inflates the value of the collateral pool during periods when there are a lot of Liquidations, for example, due to a high level of instability in the market.

## What happens during a Liquidation?

Liquidation occurs when a Keeper closes a CDP and sends it to the Liquidity Providing Contract \(LPC\), which in turn, offers the CDPs assets for sale on the [Dai Dashboard](https://dai.makerdao.com). Once the debt obligations have been met, the unsold PETH collateral is returned to the CDP owner.

The order of operations looks like this:

- The defaulted CDP is closed.
- The Penalty Fee is applied to the DAI debt.
- The LPC removes enough PETH collateral to satisfy the debt at current Oracle Prices.
- The CDP owner is now able to remove their remaining collateral from the closed position.
- The seized PETH is offered for sale at [dai.makerdao.com](http://dai.makerdao.com) with an incentivizing discount, called the [Boom/Bust Spread](glossary.md#boombust-spread), applied to the value.
- The DAI earned from the sale of PETH is burned to wipe out the CDP debt.
- If there is excess DAI from the sale, it is sold for PETH which is then burned, inflating the value of the remaining PETH.
- If there is insufficient DAI from the sale, then PETH is issued and offered for sale to cover the shortfall. This dilutes the total value of the pool.

## How much collateral is left after a Liquidation?

To determine how much collateral you would possess after a Liquidation you can use the following simplified formula:

`(Collateral * Oracle Price * PETH/ETH Ratio) - (Liquidation Penalty * Stability Debt) - Stability Debt = (Remaining Collateral * Oracle Price) DAI`

Assuming:

- The Oracle Price of one ETH is 350USD
- The total Locked PETH is 10 ETH
- The ratio of PETH/ETH is 1.012
- The Liquidation Penalty is 13%
- The CDP has a Stability Debt of 1000 DAI

`(10 × 350 × 1.012) − (13% × 1000) − 1000 = 2412 DAI or 6.891428571 ETH`

## How do I calculate my Liquidation Price?

You can use the following simplified formula to determine how far the value of your collateral must fall to trigger a settlement:

`(Stability Debt * Liquidation Ratio) / (Collateral * PETH/ETH Ratio) = Liquidation Price`

Given that:

- The value of one ETH is 350USD
- The total staked PETH is 12
- The ratio of PETH/ETH is 1.012
- The Liquidation Ratio is 150%
- The Stability Debt is 1000 DAI

`(1000 × 1.5) ÷ (12 × 1.012) = 123.51 USD`

The price of ETH would need to fall to 123.51 USD to before the CDP is considered unsafe and is at risk of being Liquidated.

## How do I calculate my Collateralization Ratio?

If you would prefer to determine the health of your position by looking at a ratio of collateral to debt, as opposed to a Liquidation Price, you can use the following simplified formula:

`(Locked PETH × ETH Price × PETH/ETH Ratio) ÷ Stability Debt × 100 = Collateralization Ratio`

Given that:

- The value of one ETH is 350USD
- The total staked PETH is 12
- The ratio of PETH/ETH is 1.012
- The Stability Debt is 1000 DAI

`(12 × 350 × 1.012) ÷ 1000 × 100 = 425.04%`

The CDP has a Collateralization Ratio of 425.04%.

## How do I lower my Liquidation Price?

The primary challenge CDP owners face is maintaining a safe leveraged position in a highly unpredictable market. If your CDP is close to the Liquidation Price, you may either add more collateral or return DAI to reduce that risk.

Which option you choose, depends on your long-term goals. If you firmly believe in the future value of your underlying collateral, you may decide to add more to your position. Or, if you would like to lower your exposure to price volatility, you would pay down your debt by returning DAI to your CDP.

The best way to lower your risk of Liquidation is to repay DAI, as your Liquidation Price decreases far more efficiently. This also has the added benefit of reducing the fees you accrue on your position.

Assuming:

- The value of one ETH is 350USD
- The total staked PETH is 12
- The ratio of PETH/ETH is 1.012
- The Liquidation Ratio is 150%
- The Stability Debt is 1000 DAI

Current Liquidation Price:

`(1000 × 1.5 ) ÷ (12 × 1.012) = 123.51 USD`

Liquidation Price change by **adding** 700 USD worth of collateral:

`(1000 × 1.5 ) ÷ (14 × 1.012) = 105.87 USD`

Liquidation Price change by **removing** 700 USD worth of debt:

`(300 × 1.5 ) ÷ (12 × 1.012) = 37.05 USD`

We can see that the Liquidation Price is significantly reduced by returning DAI as opposed to adding more collateral.

## Typical Practices to avoid getting Liquidated

Remaining aware of the health of your CDP is **your responsibility**. Ensuring that assets remain safe from Liquidation is entirely in the hands of each CDP user. Below are some common practices to monitor the health of a CDP.

- Set up price alerts in your favorite app, or multiple apps, so you are not surprised by market events.
- Make sure you have access to the sideline assets that will be used to manage your CDP. You do not want to be stuck without access during a market crash.
- Ensure you have sufficient assets available on the sidelines that can be used to top up your position through the addition of more collateral, or sale of those assets for DAI to pay down your debt.
- If you believe the market may be taking a sustained downturn, you can draw excess collateral from your CDP that you can sell for DAI which you can then use to pay down your debt. _Make sure that you maintain a safe distance from your Liquidation Price, as this tactic will temporarily put you in a riskier position until you wipe your debt with Dai._

Remember that opening a CDP represents the creation of risk. How much risk you are willing to take on is dependent on multiple factors. Determining what your [risk profile](https://www.investopedia.com/terms/r/risk-profile.asp) looks like is a science in itself, but something every CDP user has to figure out for themselves.

For further information on risks, please refer to the [Terms of Service](https://cdp.makerdao.com/terms) that provide important legal information. Every CDP user needs to accept the Terms of Service before using the Dai Stablecoin System.

## How does the smart contract sell collateral?

When a Keeper Liquidates an unsafe CDP, the Liquidity Providing Contract \(LPC\) ensures the collateral is offered for sale on the Dai Dashboard. The sale price is determined by the Oracle feeds with a special modifier applied. This modifier generally takes the form of a discount, which is then applied to the outstanding debt that must be recovered. This additional "spread" is designed to incentivize a quick recapitalization of the system by offering a better than market price to collateral buyers.

Users can purchase PETH that has been seized by the LPC on the dashboard. Any DAI surplus from the sale can be bought with PETH.

## Can I purchase seized PETH?

On the DAI dashboard, there is a section entitled "Total Liquidity Available from forced CDP Liquidations" where market participants can purchase seized PETH at a discount as determined by the Bust/Boom Spread.

## How would a "flash crash" affect the Liquidation of CDPs?

A flash crash on a single exchange will not affect the system as each Oracle aggregates prices from many exchanges. Once collected, the medianizer calculates the median of these individual feeds. You can see a graph of all the individual oracles at [https://mkr.tools/system/feeds](https://mkr.tools/system/feeds).

- Detailed information: [https://developer.makerdao.com/feeds/](https://developer.makerdao.com/feeds/)
- Feeds code: [https://github.com/makerdao/price-feed](https://github.com/makerdao/price-feed)
- Medianizer code: [https://github.com/makerdao/medianizer](https://github.com/makerdao/medianizer)
- Updater code: [https://github.com/makerdao/setzer](https://github.com/makerdao/setzer)
- Feeds Monitoring: [https://mkr.tools/system/feeds](https://mkr.tools/system/feeds)

## Where can I view live information about Liquidations?

You can explore [mkr.tools](https://mkr.tools/), which is a 3rd party tool that tracks the MakerDAO system. The two most relevant pages for information are [Liquidations](https://mkr.tools/system/liquidations) and [bites](https://mkr.tools/system/bites).
