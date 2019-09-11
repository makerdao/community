---
id: oracles
title: Oracles
---

## What is an Oracle?

An Oracle makes both off-chain and on-chain data available for use in smart-contracts. For example, the price-feed data for ETH and MKR. The system relies on the Oracle to securely provide the price of each asset so that the system’s smart contracts can determine a number of variables such as how much Dai CDPs can generate, liquidation prices, whether liquidation prices are hit, and many others.

## Why is the Oracle an attack target for malicious actors?

If the reference price for ETH was determined by a single party, then they could fraudulently report an incorrect price and cause a lot of issues. For instance, if the price of ETH was reported to be fraudulently low, say $0.01, then every single CDP in the system would be liquidated and charged a Liquidation Penalty for being undercollateralized. On the other hand, if the price of ETH was reported to be artificially high, say $1,000,000.00, then any CDP user would be able to issue an excessive amount of Dai since the system thinks there is more collateral value than there actually is. This means that the Dai issued in excess is not properly collateralized and would lead to the system becoming insolvent.

## How is the Oracle mechanism made secure?

To defend against fraudulent reporting of data, the reporting is decentralized; there are multiple data reporters who are independent of each other. The current ETH price feed has [14 price-feed providers](https://mkr.tools/system/feeds) who send their data to the [Medianizer](https://github.com/makerdao/medianizer) contract. The Medianizer uses the median of the reported prices as the official reference price. Using the median instead of the mean makes it harder to manipulate the reference price since control over half of the feed providers is needed in order for a fraudulent price to be published. Additionally, using the median filters out the outliers automatically.

In addition to this, the Oracle Security Module\(OSM\) safeguards the process by delaying price-feed data for one hour. This allows MKR token holders to have time to identify bugs or attacks on the price-feed system. Currently, the OSM is active on the MKR price feed, but not the ETH feed. This is because in Single Collateral Dai, when a CDP is liquidated, the collateral is sold at the current market price according to the feed, therefore the ETH price cannot have a delay. This will change in Multi Collateral Dai to ensure all price feeds can be delayed.

## What is the Oracle Security Module?

The Oracle Security Module\(OSM\) delays the publishing of new reference prices for one hour. This allows MKR Token Holders to have time to react to bugs or attacks on the price-feed system. Currently, the OSM is active on the MKR price feed, but not the ETH feed. This is because in Single Collateral Dai when a CDP is liquidated the collateral is sold at the current market price according to the feed, while in MCD it will be sold through an auction mechanism that does not require a price feed.

## Who are the Price-Feed Providers?

The feed providers are anonymous, they consist of people internal to Maker, influential people in the greater crypto community, as well as active community members.

## Are identities of people providing Oracle Price Feeds known?

A very small number of people within the Maker Foundation know who all the current price feed providers are.

## How does the Price-Feed system work?

The ETH reference price is published by the Medianizer contract which is given prices by [14 price-feed providers](https://mkr.tools/system/feeds). Each feed provider sends an update to the Medianizer when:

- Source price differs from the most recently submitted price by more than a predefined amount \(currently between 1% and 2% depending on the feed provider\)
- The last price update was more than t hours ago \(configured by each individual feed provider\).

Each price-feed provider uses a tool called [Setzer](https://github.com/makerdao/setzer) which pulls the median price from a set of exchanges and then pushes it to the Medianizer. The Medianizer then takes the median of the reported price-feed medians. Price-feed providers may configure Setzer to pull from any exchanges of their choosing.

## What is the Medianizer?

The [Medianizer](https://github.com/makerdao/medianizer) is the smart contract in the Oracle system that collects price-feed information and publishes a reference price for each asset. It maintains a whitelist of price-feed providers and a record of recent prices supplied by each address. Every time a new price update is received by the Medianizer, the reference price is recalculated and published.

## How often does the Medianizer publish an updated reference price?

Every time a change in the median occurs on an individual price-feed, the Medianizer gets "poked" with the updated price. This price is then placed in the set along with the other feed prices. The medianizer recalculates the median and updates the reference price if there is a change.

## Can MakerDAO Governance change the time of the Oracle Security Module's delay?

Yes, this parameter is called the "Price Feed Delay".

## What's the process for becoming a feed provider?

Currently, there is no formal way to become a feed-provider. When Maker started setting up the feeds, there were people inside the Maker Foundation who volunteered to be providers. Eventually, more people were added; some from the community, some from other projects. The identities have been kept obscure.

## Is the Oracle system resistant to Sybil attacks?

To quote from [Wikipedia's page on Sybil Attacks](https://en.wikipedia.org/wiki/Sybil_attack), "In a Sybil attack, the attacker subverts the reputation system of a peer-to-peer network by creating a large number of pseudonymous identities, using them to gain a disproportionately large influence. A reputation system's vulnerability to a Sybil attack depends on how cheaply identities can be generated, the degree to which the reputation system accepts inputs from entities that do not have a chain of trust linking them to a trusted entity, and whether the reputation system treats all entities identically."

The short answer is yes, the Oracle system is resistant to Sybil attacks because of the existence of a whitelist for price-feed providers. It's not simple to become a price-feed provider, you need to be approved for the medianizer contract to accept your data. Therefore, you cannot gain a majority influence by creating cheap pseudo-identities which act as feed-providers.

## What happens if there is a flash crash on an exchange?

Since the reference price used in the Dai Credit System is a median of the median prices that are reported by 14 different feed providers, outliers are automatically filtered out. In practice, this means if a single exchange experiences a "flash-crash" the set of prices will look something like this:

`[0.70, 104.00, 104.11, 104.13, 104.49, 105.02, 105.45]`

The median of this set still reflects the real market-wide price of the asset. Flash crashes on single exchanges do not affect the published reference price.
