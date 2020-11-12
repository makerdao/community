# Keeper

> Notice: You are reading the Single-Collateral Dai version of this FAQ. An up-to-date version of this FAQ will be released soon and will be found [here.](/faqs/keepers.md)

## What is a Keeper?

A Keeper is an external independent actor that is incentivized to contribute to decentralized systems, they "keep" the system running by performing necessary functions. In the context of Single Collateral Dai, the title of "Keeper" can refer to a few different types of system participants. Usually, these roles are performed by a program rather than a human.

## What kinds of Keepers exist within the Maker Ecosystem?

There are five primary types of Keepers, those that:

1. Trigger [Liquidation](./liquidation.md) of CDPs
1. Participate in the buy side of liquidated collateral sales
1. Perform market-making activities on [Dai](./dai.md) pairs
1. Arbitrage Dai
1. Provide price-feed information

As MakerDAO grows and evolves, other types of Keepers may be created.

## What incentivizes Keepers?

Keepers are incentivized by the natural profit opportunities available in the Maker ecosystem. For example, agents can trigger CDP liquidations so they can participate in the subsequent collateral sale, thus providing an opportunity to purchase ETH at a discount. Another example is a market maker who provides liquidity and helps maintain the stability of Dai, who is incentivized by the opportunity to make money on the bid-ask spread.

## Are there any resources available for people wanting to become Keepers?

Maker has provided reference implementations for several types of Keepers.

- [Bite-Keeper](https://github.com/makerdao/bite-keeper)
- [Arbitrage-Keeper](https://github.com/makerdao/arbitrage-keeper)
- [CDP-Keeper](https://github.com/makerdao/cdp-keeper)
- [Market-Maker-Keeper](https://github.com/makerdao/market-maker-keeper)

There is also a [developers guide](https://github.com/makerdao/developerguides/blob/master/keepers) for Keepers.

Please treat these repositories as starting points, not as finished products. Experiment with them at your own risk.

## What is the Bite-Keeper?

A [Bite-Keeper](https://github.com/makerdao/bite-keeper) triggers the liquidation of unsafe CDPs, thereby making their collateral available for sale.

A Bite-Keeper can then participate in the collateral sale by purchasing the collateral at a discount then immediately selling it on the spot market, earning the margin.

Please treat these repositories as starting points, not as finished products. Experiment with them at your own risk.

## What is the Arbitrage-Keeper?

The [Arbitrage-Keeper](https://github.com/makerdao/arbitrage-keeper) constantly looks for profitable arbitrage opportunities. This Keeper also provides a valuable source of information on where to look for arbitrage opportunities in the Dai system and how to exploit them. It also demonstrates how to do atomic arbitrage using the [tx-manager contract](https://github.com/makerdao/tx-manager).

Please treat these repositories as starting points, not as finished products. Experiment with them at your own risk.

## What is the CDP-Keeper?

The [CDP-Keeper](https://github.com/makerdao/cdp-keeper) is responsible for monitoring and managing open CDPs. It can allow for the topping up of CDPs and repaying Dai debt. This Keeper is incomplete but provides a useful example for interacting with a CDP using Python.

Please treat these repositories as starting points, not as finished products. Experiment with them at your own risk.

## What is a Market-Maker-Keeper?

The [Market-Maker-Keeper](https://github.com/makerdao/market-maker-keeper) is a set of Keepers that facilitates market making and is compatible with numerous centralized and decentralized exchanges. The Market-Maker-Keeper is capable of dynamically placing and canceling orders based on price movements.

Please treat these repositories as starting points, not as finished products. Experiment with them at your own risk.

## Can I create my own Keeper bot?

Yes, anyone can create their own Keeper software. You do not need to use the MakerDAO Keeper repositories, though they can be used as a starting point for learning about how to interact with the ecosystem.

## Is anyone able to become a Keeper?

It depends on the type of Keeper. Excluding price-feed providers, who provide the Oracle system with pricing information, all other Keepers can be run permissionless.

## Do I need to own MKR to run a Keeper?

No.

## Do Keepers only exist in MakerDAO?

No, Keepers exist throughout the blockchain world. For example, the bots in the Augur network who report on the outcome of events are Keepers.

## Are there any tutorials available for setting up Keepers?

The team has not published any tutorials for setting up Keepers. However, the team has provided reference implementations for several types of Keepers. The repositories for each of these can be used as guides to get you started. There is also a [developers guide](https://github.com/makerdao/developerguides/blob/master/keepers) for Keepers.
