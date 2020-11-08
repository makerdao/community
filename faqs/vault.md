# Vaults

## What are Maker Vaults?

The Maker Vault is a core component of the Maker Protocol, which facilitates the generation of Dai against locked up Collateral.

Vault usage collectively alters the total supply of Dai. Users create Dai by generating it against their Collateral and in-turn destroy Dai when repaying their generated Dai balance. This process happens on-chain, which enables full auditability of circulating Dai and the Collateral backing it.

Vaults are required to be overcollateralized and have a [Liquidation Ratio](liquidation.md#what-is-the-liquidation-ratio) that Vault owners need to uphold to avoid the [Liquidation](liquidation.md) of their positions. Additionally, a [Debt Ceiling](#what-is-a-debt-ceiling) is imposed globally on the Maker Protocol, as well as individually on each Vault type.

## How does a Vault work?

Any user who wishes to generate Dai may deposit Collateral into a Vault and do so, paying a Stability Fee on the generated Dai balance.

Vault users are free to generate or pay back Dai and can add or withdraw Collateral with no time-constraints. As long as Vault owners maintain a minimum [Collateralization Ratio](#what-is-the-collateralization-ratio), specified for each Vault type as the [Liquidation Ratio](liquidation.md#what-is-the-liquidation-ratio), they may interact with their Vaults freely. If a Vault’s Liquidation Ratio is breached, the position gets Liquidated. To read more about Liquidation, visit the [Liquidation FAQ](liquidation.md). If a user wishes to reclaim the full amount of their Collateral, they will need to pay the full amount of Generated Dai back along with the Stability Fees owed.

## What is a Debt Ceiling?

In the Maker Protocol, a Debt Ceiling is the maximum amount of Dai that can be generated. There are two types of Debt Ceilings. One is a `Global Debt Ceiling` which limits the amount of Dai that can be generated across the entire system. The other is a Vault-specific `Debt-Ceiling` that limits how much Dai each Vault type can generate.

## Are there different types of Vaults?

Yes. Each Collateral type may have multiple Vault types.

## What kind of Collateral can I use?

In Multi-Collateral Dai, accepted Collateral types are determined by MKR token holders through the [MakerDAO governance process.](governance.md) For a current list of Collateral types and Vault types, visit [Oasis Borrow](https://oasis.app/borrow) or other [Maker Vault front-ends](https://awesome.makerdao.com/#third-party-vault-portals).

## Who can open a Vault?

This depends on the type of Vault. While some Vault types are permissionless others may carry requirements. Typically there are no requirements related to prior borrowing history or cumbersome application processes since Vaults are configured according to the risk profile of the underlying Collateral that is being used. Vaults are owned by the Ethereum addresses that create them and can be transferred between wallets freely.

## Are there fees for using a Vault?

Yes. Vault owners are required to pay a [Stability Fee](stability-fee.md) on their generated Dai. The rate is expressed as an APR that compounds annually in practice. However, technically speaking, the fees are continuously compounding at a growth rate of x% per year. To learn more about how rate accumulation works visit this [documentation on rates](https://docs.makerdao.com/smart-contract-modules/rates-module/jug-detailed-documentation).

If a Vault becomes undercollateralized, as specified by each Vault type’s [Liquidation Ratio](liquidation.md#what-is-the-liquidation-ratio), it can be liquidated and have its assets automatically sold to cover the generated Dai. If a Vault is liquidated, a [Liquidation Penalty](liquidation.md#what-is-the-liquidation-penalty) is applied to the Generated Dai balance.

The Stability Fee and Liquidation Penalty vary according to the Vault type.

## What is the Collateralization Ratio?

The Collateralization Ratio is the ratio between the value of the collateral and the value of the Generated Dai on a given Vault.

For example: Let's say the ETH locked in a user’s Vault is worth $150 and 50 Dai was generated. This means the Collateralization Ratio is 300%. For each 1 Dai, there is $3 worth of collateral value backing it. In the Maker Protocol, your Vault may be liquidated if it falls below the [Liquidation Ratio](liquidation.md#what-is-the-liquidation-ratio), which is the minimum Collateralization Ratio. The Liquidation Ratio varies by Vault type.

## What risks are associated with owning a Vault?

Owning a Vault is inherently risky. There are four major categories of risks to consider when creating a Vault: Market Risks, User Risks, Systemic Risks, and Parameter Variability Risk.

- **Market Risks:** Using a Vault involves generating Dai and transferring ownership of your assets to a smart-contract that can sell your assets in the event of a market downturn. Any Vault with Generated Dai has a Liquidation Price, the price of the underlying asset at which one's Vault would be liquidated. Using a Vault for leverage introduces additional risk. The potential for reward is higher through leverage, but the potential for loss is magnified as well. It is a common practice among users to maintain a high Collateralization Ratio to protect from Market Risks and thereby Liquidation.
- **User Risks:** These are risks associated with user errors. MakerDAO does not possess the ability to reverse any transactions or recover funds sent to incorrect addresses or contracts.
- **Systemic Risks:** There are many potential risks facing the successful and continued operation of the Maker Protocol. The following non-exhaustive list highlights some of these risks:
  - A malicious hacking attack against the smart-contract infrastructure.
  - A Black Swan event in one or more Collateral assets.
  - Failure of centralized infrastructure. E.g., failed internet connections, MetaMask bugs, etc.
- **Parameter Variability Risk:** It's important to note that Vault owners are subject to changes in the Risk Parameters that govern the system. This equates to financial risk for the Vault owner. Below is a partial list of parameters that are subject to change:
  - [Stability Fee](stability-fee.md)
  - [Debt Ceiling](#what-is-a-debt-ceiling)
  - [Liquidation Penalty](liquidation.md#what-is-the-liquidation-penalty)

## What are Common Practices to limit risk?

Market risks can be mitigated by using price alerts, maintaining a higher [Collateralization Ratio](#what-is-the-collateralization-ratio), monitoring the health of your Vault regularly, and keeping enough reserves outside of your Vault to payback Generated Dai or to add to your deposited collateral. Many people can find themselves over-extended or may find they tend to make risky bets on market movements. This can lead to the [Liquidation](liquidation.md) of their Vaults resulting in financial loss.

User risks can be mitigated by using small test amounts beforehand, and by thoroughly checking which addresses one is interacting with.

## How would a flash crash on a single exchange affect the Liquidation of Vaults?

A flash crash on a single exchange will not affect the system as each Oracle aggregates prices from many sources and uses a median for reference prices. Using a median naturally filters out broken prices, as a price from an exchange that has experienced a flash crash. You can read more about the Maker Protocol’s Oracle System in the [Oracle FAQ](oracles.md).

## Where can I view live information about Liquidations?

Liquidations occur on-chain, so anyone can pull the data themselves. Several MakerDAO analytics dashboards already exist. You can see a [list of them](https://awesome.makerdao.com/#watch-dai) in the [Awesome-MakerDAO](https://awesome.makerdao.com) resource repository.

## Where can I find more technical information about Vaults?

Visit our [Documentation Portal](https://docs.makerdao.com/) for all technical documentation of the Maker Protocol. Technical documentation about Vaults Fee can be found in the [Jug - Detailed Documentation](https://docs.makerdao.com/smart-contract-modules/rates-module/jug-detailed-documentation) subsection of our Documentation Portal. Documentation about how Rates work in the Maker Protocol can be found in the [Rates Module](https://docs.makerdao.com/smart-contract-modules/rates-module) section of our Documentation Portal.
