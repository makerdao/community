# Collateral Debt Positions

> Notice: You are reading the Single-Collateral Dai version of this FAQ. For the up-to-date version, visit the [Vault FAQ.](/faqs/vault.md)

## What are Collateralized Debt Positions?

The MakerDAO Collateralized Debt Position \(CDP\) is a type of loan administered by a smart contract system that runs on the Ethereum blockchain. The CDP is a core component of the Dai Stablecoin System, which facilitates the creation of Dai against escrowed collateral which is held until the drawn Dai is returned.

CDP usage collectively alters the total supply of Dai. Users create Dai by drawing it against their collateral and destroy Dai when repaying their debt. This process happens on-chain, which enables full auditability of circulating Dai and the collateral backing it.

CDPs are required to be overcollateralized. The value of collateral in a CDP is required to be higher than the amount of debt which guarantees Dai users that their Dai is valuable and fully backed with real assets.

## How does a CDP work?

Any user who wishes to draw Dai may deposit ETH into a CDP. Once escrowed, the user may generate Dai against the value of their deposit. As long as CDP owners maintain the minimum [Collateralization Ratio](#what-is-the-collateralization-ratio), they may freely withdraw or deposit surplus collateral.

After generating their Dai, CDP users can do whatever they want with it. If a user wishes to reclaim the full amount of their collateral, they will need to pay the full amount of Dai back.

This cycle of lending/repayment and adding/removing collateral can continue as long as CDP owners choose to keep their positions open. Users can close their CDPs by paying the debt and associated fees in full.

## Who can open a CDP?

CDPs are permissionless; anyone can create and use one. There are no requirements related to prior borrowing history or cumbersome application processes. The system is not controlled by gatekeepers or intermediaries. Maker CDPs are owned by the Ethereum accounts that create them and can be transferred between wallets freely.

## Does a CDP incur any fees?

Yes. CDP owners are required to pay a Stability Fee on their outstanding debt. It is an [APY continuously compounded rate](https://www.investopedia.com/personal-finance/apr-apy-bank-hopes-cant-tell-difference/).

If a CDP becomes under-collateralized, or ‘unsafe,' it can be liquidated and have its assets autonomously seized by the Maker System and sold to cover the outstanding debt. This imposes a Liquidation Penalty.

## What is the Collateralization Ratio?

The Collateralization Ratio is the ratio between the value of collateral users have added to their CDP, and how much DAI they have drawn.

For example: Let's say the Ether locked in one's CDP is worth $150 right now and 50 Dai was borrowed. This means the Collateralization Ratio is 300%. For each 1 Dai, there is $3 worth of collateral value backing it. In the Maker System, your CDP may be liquidated if it falls below the [Liquidation Ratio](liquidation.md#what-is-the-liquidation-ratio), which is the minimum Collateralization Ratio.

## What risks are associated with owning a CDP?

Owning a CDP is inherently risky. There are four major categories of risks to consider with using a CDP—Market Risks, User Risks, Systemic Risks, and Parameter Variability Risk.

- **Market Risks:** Using a CDP involves assuming debt and transferring ownership of your assets to a smart contract that can sell your assets in the event of a market downturn. Any CDP with debt has a liquidation price, the price at which one's CDP is liquidated. Using a CDP for [leverage](https://www.investopedia.com/terms/l/leverage.asp) introduces another layer of risk. The potential for reward is higher through leverage, but the potential for loss is magnified as well. It is a common practice among users to maintain a high collateralization ratio in preparation for market downturns—to avoid liquidation.
- **User Risks:** These are risks associated with user errors. MakerDAO does not possess the ability to reverse any transactions or recover funds sent to incorrect addresses or contracts.
- **Systemic Risks:** There are many potential risks facing the successful and continued operation of the Maker Platform. The following list attempts to highlight some systemic risks, but is not all-inclusive:
  - A malicious hacking attack against the smart contract infrastructure
  - Black swan event in one or more collateral assets
  - Pricing errors, irrationality, and unforeseen circumstances
  - Failure of centralized infrastructure. E.g., failed internet connections, MetaMask bugs, etc.
- **Parameter Variability Risk:** It's important to note that CDP owners are subject to changes in the Risk Parameters that govern the system. This equates to financial risk for the CDP owner. Below is a partial list of parameters that are subject to change:
  - Stability Fee
  - Liquidation Ratio
  - Debt Ceiling of the Collateral type
  - Liquidation Penalty

## What are Common Practices to limit risk?

Market risks can be mitigated by using price alerts, maintaining a higher Collateralization Ratio, monitoring the health of your CDP regularly, and keeping enough reserves outside of your CDP to pay down your debt or to add to your collateral. Many people can find themselves over-extended or may find they tend to make risky bets on market movements. This can lead to the liquidation of their CDPs resulting in losses.

User risks can be mitigated by using small test amounts beforehand, and by thoroughly checking which addresses one is interacting with.

## What are some benefits of owning a CDP?

- **Flexible repayment terms:** There are no time limits or minimum repayment schedules involved with owning a CDP. Users are free to draw Dai or add additional collateral, whenever they choose.
- **No credit history requirements:** There are no requirements related to prior borrowing history or cumbersome application processes. Anyone with an Ethereum address can access the system.
- **No counterparty risk:** The system runs as an autonomous smart contract, users are able to interact with a transparent financial system without having to trust a counterparty institution to successfully manage, or release their funds. All transactions are recorded on a public blockchain and are available for anyone to audit.
- **Decentralized margin trading:** Users can choose to lock up their Ether, draw DAI, and purchase more Ether to add to their original position. This allows them to take a leveraged margin position.

## Why would I want to open a CDP?

There are many reasons why one may use a CDP. Based on user experiences, we have collected a few examples below:

- **Leverage**: a user may believe that an asset will increase in value soon, so they leverage some of their existing collateral to draw Dai and purchase the asset. Later, if that asset has appreciated, they could sell it for more Dai than they had drawn and return the original loan while pocketing the difference.
- **Flexible line of credit:** a user wishes to purchase a car. They might determine that traditional financing options do not offer terms or fees as attractive as those they can get through opening a CDP. The user could draw Dai against their ETH, purchase the car, and make repayments to their debt position on their own schedule.
- **Refinance:** a user may owe money on a high-interest loan. Rather than liquidating their assets to cover the payments, they can choose to draw Dai against their ETH, convert the Dai to Fiat and pay down a portion or full amount of their more expensive debt.

It is important to remember that by creating a CDP and drawing Dai, users are creating debt and taking on risk. E.g., Stability Fee variance and Liquidation.

## Are there reasons to avoid opening a CDP?

_None_ of this dialogue constitutes investment advice but one may take note of possible reasons to avoid opening CDPs.

For instance, if you are interested in obtaining a stable cryptocurrency but are unfamiliar with the nuances of interacting with smart contracts, you should not open a CDP. Instead, standard practice would be to purchase DAI on an exchange.

Opening a CDP may also result in exposing oneself to various kinds of risk, which may ultimately result in financial loss.

If you believe that the market is entering an extended downturn, you may want to evaluate how much management opening a CDP might require. A prolonged bear market may require the constant addition of collateral to a position to ensure its health, or the ready availability of enough assets to exchange for DAI to pay down outstanding debt.

## What kind of collateral can I stake?

In Single Collateral Dai, Ethereum is the only supported collateral type. In the next iteration of the system, Multi Collateral Dai, multiple collateral types will be supported. New collateral types will be determined by MKR token holders through the Governance process.

## Is it possible to pay down Dai from an exchange wallet?

No, you need to interact with a special method of the contract which can only be done through a web interface or by interacting with the contract directly. Using anything other than a web UI and the wallet that opened the CDP can have disastrous results if you don't have deep insight into the design of the contract.

## How much can I over-collateralize?

There is no upper limit on how much collateral can be deposited into a CDP.

## What happens to airdrops when I have locked up my Ether in a CDP?

All assets held in the system are administered by smart contracts that are not capable of tracking or redistributing airdropped tokens. There is no way to access tokens sent to these addresses.

## What happens if I want to stake my collateral with another project and also want to open a CDP with it?

Once your collateral has been staked or escrowed, it is no longer possible to use the same tokens with another contract. At some point in the future, projects _may_ issue deposit tokens that represent collateral escrowed in their systems. It is possible that in the future MakerDAO voters may choose to allow using those types of tokens as collateral.

## Do I have to pay back Dai if my collateral goes up in value?

Users must manually repay all their debt, including the [Stability Fee](stability-fee.md#what-is-the-stability-fee) if they wish to free the entirety of their collateral. The system does not automatically pay Stability Fees from the appreciating value of collateral inside CDPs.

As collateral goes up in value, one can withdraw portions of it while maintaining the same Collateralization Ratio. Any collateral above the minimum Collateralization Ratio can be withdrawn, however doing so will push up one's liquidation price thus increasing one's risk. If your collateral value grows, your Collateralization Ratio grows.

## Can I use the same CDP after it has been liquidated?

Yes, so long as there is collateral inside of the CDP you can draw Dai. Liquidation does not close out the CDP; you can add collateral and start again.

## How can I verify the solvency of the CDP ecosystem?

The system runs on the Ethereum blockchain, so all contracts and transactions are public. Users can interact with a fully transparent financial system without having to trust a counterparty institution. Anyone can verify the solvency of the system for themselves by visiting one of the many [MakerDAO statistics dashboards](https://github.com/makerdao/awesome-makerdao/blob/master/README.md#watch-your-dai), or by querying the blockchain directly.
