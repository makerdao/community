# Liquidation

## What is Liquidation?

Liquidation is the process of selling collateral to cover the amount of Dai a user has generated from their [Vault](/learn/vaults/). Liquidation is the process of selling collateral to cover a user’s generated Dai. A Vault can be Liquidated if the value of its collateral falls below the required minimum level, called the Liquidation Ratio. During the Liquidation process, enough collateral is sold to cover the debt along with a Liquidation Penalty, leaving the remaining collateral available for withdrawal.

## Why does Liquidation exist?

Dai is a proxy for the US Dollar, with the additional benefit of being fully backed by real value in the form of various collateral assets. Liquidation helps to ensure that Dai is always backed by an appropriate amount of collateral by closing-out [Vaults](/learn/vaults/) that are under their minimum required Collateralization Ratio for their given collateral type.

## Who triggers Liquidation?

To make sure that the required surplus of collateral exists at all times, a class of users called Keepers are incentivized to maintain a constant watch for [Vaults](vault.md) that become under-collateralized. These Keepers are a special category of Maker Protocol users. They are the actors in the system who are incentivized to make sure that the outstanding Dai supply remains fully collateralized and solvent. They help maintain the health of the entire ecosystem by ensuring that undercollateralized Vaults are offered up for Liquidation as quickly as possible. This is particularly important during rapid market downturns as the collateral value could be subject to slippage.

## What is the Liquidation Ratio?

The Liquidation Ratio is the minimum required collateralization level for each [Vault](/learn/vaults/) type before it is considered undercollateralized and subject to Liquidation. The Maker Protocol’s [Oracles](/learn/Oracles/) provide the system with pricing data that is used to track Vaults for when their Liquidation Ratio is breached. Once breached, they are available for Liquidation.

For example, a Vault with a 150% Liquidation Ratio will require a minimum $1.50 of collateral value for every $1 of Dai generated. If the value of the collateral falls to \$1.49 it will be Liquidated to cover the generated Dai in addition to a fee called the Liquidation Penalty.

Each Vault type’s Liquidation Ratio is determined by a combination of the collateral’s risk profile and the [Stability Fee](/learn/vaults/stability-fees/). There may be multiple Vault types for each collateral, with varying Liquidation Ratios and Stability Fees.

## What is the Liquidation Price?

This is the price at which a [Vault](/learn/vaults/) becomes vulnerable to Liquidation. It is unique to each user’s Vault and moves up slowly as [Stability Fees](/learn/vaults/stability-fees/) accrue.

## What is the Liquidation Penalty?

This is a fee that is paid by [Vault](/learn/vaults/) owners when their Vaults are Liquidated. The fee is added to the Vault’s total outstanding generated DAI when a Liquidation occurs, which results in more of the collateral being sold on [Auction](https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol).

Proceeds from Liquidation Penalties are put towards the Surplus Auctions, which result in burned MKR.

## Why is the Liquidation Penalty necessary?

The penalty is necessary to prevent Auction Grinding Attacks, which essentially break the [Auction mechanism](https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol) since an attacker can exploit the Maker Protocol for profit. To read more about this attack read this paper: [The Auction Grinding Attack: and a case for a liquidation penalty in Dai](https://github.com/livnev/auction-grinding/blob/master/grinding.pdf).

## What happens during a Liquidation?

Liquidation occurs through an [Auction mechanism](https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol) built into the Maker Protocol.

The simplified order of operations looks like this:

- A Keeper detects an undercollateralized [Vault](/learn/vaults/) and triggers a Liquidation.
- All of the collateral is put up for auction to cover the outstanding Dai + Liquidation Penalty
- Once bids reach the Dai amount equaling to the outstanding Dai + Liquidation Penalty, the auction reverses and bidders now compete by offering to accept less collateral for the Dai they bid in the previous phase.
- Once the auction completes bidders receive the sold collateral, the winning bidders Dai is burned, and the Vault owner receives leftover collateral if any remains.

For a more detailed guide on how Auctions and Keepers work see [The Auctions of the Maker Protocol](https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol) on our [Documentation Portal](https://docs.makerdao.com/).

## How much Collateral is left after a Liquidation?

Since Liquidations occur through [Collateral Auctions](https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol#collateral-auction-collateral-sale), there is no way to accurately predict the exact amount of collateral one would receive.

## How do I calculate my Liquidation Price?

The Liquidation Price for a given [Vault](/learn/vaults/) is usually shown on front-ends that offer Vaults. Though one can manually calculate their Liquidation Price by using the following simplified formula:

### Formula

```
(Generated Dai * Liquidation Ratio) / (Amount of Collateral) = Liquidation Price
```

| Variable             | Value    |
| -------------------- | -------- |
| Generated Dai        | 1000 DAI |
| Liquidation Ratio    | 150%     |
| Amount of Collateral | 10 ETH   |

### Result

```
(1000 × 1.5 ) ÷ (10) = 150 USD
```

If we use ETH as an example, it would need to fall to 150 USD before the Vault is considered undercollateralized by the system.

## How do I calculate my Collateralization Ratio?

The Collateralization Ratio for a given [Vault](/learn/vaults/) is usually shown on front-ends that offer Vaults. Though one can manually calculate their Collateralization Ratio by using the following simplified formula:

Formula:

```
(Collateral Amount x Collateral Price) ÷ Generated Dai × 100 = Collateralization Ratio
```

Given that:

| Variable          | Value    |
| ----------------- | -------- |
| Collateral Amount | 10 ETH   |
| Collateral Price  | 300 USD  |
| Generated Dai     | 1000 DAI |

Result:

```
(10 x 300) ÷ 1000 × 100 = 300%
```

The Vault in this example has a Collateralization Ratio of 300%.

## How do I lower my Liquidation Price?

If a user’s [Vault](/learn/vaults/) is close to the Liquidation Price, they may either add more collateral or pay Dai back into the Vault.

The most efficient way a user can lower their Liquidation Price is to repay DAI. This also has the added benefit of reducing the Stability Fees that accrue for the owner of the Vault. This can be proven by the following example:

Formula:

```
(Generated Dai x Liquidation Ratio) ÷ Collateral Amount = Liquidation Price
```

Given that:

| Variable          | Value    |
| ----------------- | -------- |
| Liquidation Ratio | 150%     |
| Collateral Amount | 10 ETH   |
| Collateral Price  | 200 USD  |
| Generated Dai     | 1000 DAI |

Current Liquidation Price:

```
(1000 × 1.5 ) ÷ (10) = 150 USD
```

Liquidation Price change by **adding** 400 USD worth of collateral:

```
(1000 × 1.5 ) ÷ (12) = 125 USD
```

Liquidation Price change by **repaying** 400 Dai:

```
(600 × 1.5 ) ÷ (10) = 90 USD
```

## What are typical practices to avoid getting Liquidated?

Remaining aware of a [Vault’s](/learn/vaults/) condition is the Vault owner’s own responsibility. Ensuring that assets remain safe from Liquidation is entirely in the hands of each Vault owner. Below are some common practices to monitor the health of a Vault:

Vault owners could:

- Set up price alerts for the collateral asset(s) being used.
- Set up a personal rule that would require them to unwind their Vaults if the collateral price falls below a certain level, this may act as an additional buffer.
- Make sure they have adequate access to their Vaults, especially during volatile periods in the markets.
- Keep note of their Vault’s number. They can use it as a reference to have an external party payback Dai or add collateral on their behalf if they don’t have immediate access to their Vault.
- Make sure they have access to emergency funds or assets that can be readily used to pay back Dai or add more collateral to their positions.

Remember that opening a Vault and generating Dai represents the creation of risk. Vault owners should be very cognizant of this fact and should use Vaults at their own risk.

## How would a flash crash affect the Liquidation of Vaults?

A flash crash on a single exchange will not affect the system as each [Oracle](/learn/Oracles/) aggregates prices from many sources. The Oracle calculates the median of these prices, which naturally filters outliers like a broken price from an exchange that’s experienced a flash crash. You can read more about the Maker Protocol’s decentralized Oracles in the [Oracle FAQ](/learn/Oracles/).

## Where can I view live information about Liquidations?

Liquidations occur on-chain, so anyone can pull the data themselves. Several MakerDAO analytics dashboards already exist. You can see a [list of them](https://awesome.makerdao.com/#watch-dai) in the [Awesome-MakerDAO](https://awesome.makerdao.com) resource repository.

## Where can I find more technical information about Liquidations?

Visit our [Documentation Portal](https://docs.makerdao.com/) for all technical documentation of the Maker Protocol. Technical documentation of Liquidations can be found in the [Flipper - Detailed Documentation](https://docs.makerdao.com/smart-contract-modules/collateral-module/flipper-detailed-documentation) and the [Cat - Detailed Documentation](https://docs.makerdao.com/smart-contract-modules/core-module/cat-detailed-documentation) subsections of our Documentation Portal.
