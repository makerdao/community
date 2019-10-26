# Glossary of Terms

## A

## B

##### Bite

- the action of triggering a [CDP](cdp.md#what-are-collateralized-debt-positions) [liquidation](liquidation.md#what-is-liquidation)

##### Boom/Bust Spread

- Discount/premium at which the system sells collateral PETH for DAI

##### Burn

- the process of destroying MKR that are paid as [stability fees](stability-fee.md#what-is-the-stability-fee)

##### Burner Address

- the public Ethereum address that escrows MKR prior to burning

## C

##### CDP Portal

- a front-end application with which you can interact with your [CDP](cdp.md#what-are-collateralized-debt-positions)

##### CDP

- Collateralized Debt Position, a collateral position holding locked Ethereum administered by a smart contract system

##### Collateral Claims

- the amount of redeemable collateral Dai holders and CDP owners have claim to in the event of an [Emergency Shutdown](emergency-shutdown#what-is-an-emergency-shutdown)

##### Collateral

- assets locked in a [CDP](cdp.md#what-are-collateralized-debt-positions)

##### Collateralization Ratio

- the ratio between a [CDPs](cdp.md#what-are-collateralized-debt-positions) collateral and the [Dai](dai.md#what-is-dai) issued by that CDP

##### Continuous Approval Voting

- a voting design that involves leaving your vote in the previous proposal

## D

##### Dai Credit System

- a name for the [MakerDAO](makerdao.md#what-is-makerdao) smart contract system

##### Dai

- USD pegged decentralized stablecoin of the Dai Credit System

##### Debt Ceiling:

- the maximum amount of Dai that can be generated in the Dai Credit System

##### Debt:

- the amount of Dai generated through a [CDP](cdp.md#what-are-collateralized-debt-positions)

##### Decentralized Risk Management

- the cooperative interaction between Maker Token Holders and all [Risk Teams](risk-management.md#what-are-risk-teams) to manage risks in [MakerDAO](makerdao.md#what-is-makerdao)

##### Development Fund

- another name for the [Maker Foundation’s](makerdao.md#what-is-the-maker-foundation) multisig wallet that contains MKR, which is sold for operational expenses

##### Draw

- the action of generating [Dai](dai.md#what-is-dai) from a [CDP](cdp.md#what-are-collateralized-debt-positions)

## E

##### Emergency Shutdown

- a security feature that allows the system to shut down and make underlying collateral available for redemption

##### Executive Vote

- a continuous approval vote that executes changes in the system if passed

## F

##### Free

- the action of releasing collateral from a [CDP](cdp.md#what-are-collateralized-debt-positions)

## G

##### Give

- the action of transferring [CDP](cdp.md#what-are-collateralized-debt-positions) ownership to a different Ethereum address

##### Governance Poll

- a time-based vote to gather soft consensus

##### Governance Portal

- a front-end application that allows you to interact with [MakerDAOs](makerdao.md#what-is-makerdao) on-chain [governance](governance.md#what-is-governance)

## H

## I

## J

##### Join/Exit Spread

- a system parameter that represents a discount or premium for converting between ETH and [PETH](#peth)

## K

##### Keeper

- external actors who perform various functions in the system

## L

##### Liquidation Penalty

- a penalty fee that's applied to a [CDPs](cdp.md#what-are-collateralized-debt-positions) [Dai](dai.md#what-is-dai) balance when it is [liquidated](liquidation.md#what-is-liquidation)

##### Liquidation Price

- lowest price per unit of collateral before a [CDP](cdp.md#what-are-collateralized-debt-positions) is vulnerable to [liquidation](liquidation.md#what-is-liquidation)

##### Liquidation Ratio

- a [risk parameter](#risk-parameters) defining the minimum [Collateralization Ratio](cdp.md#what-is-the-collateralization-ratio) below which a [CDP](cdp.md#what-are-collateralized-debt-positions) is vulnerable to [liquidation](liquidation.md#what-is-liquidation)

##### Liquidation

- automatic sale of a [CDPs](cdp.md#what-are-collateralized-debt-positions) collateral to cover its outstanding [Dai](dai.wd#what-is-dai)

##### Liquidity Providing Contract

- a smart contract which facilitates collateral sales

##### Lock

- the action of placing collateral into your [CDP](cdp.md#what-are-collateralized-debt-positions)

## M

##### Maker Foundation Interim Risk Team

- the first [Risk Team](risk-management.md#what-are-risk-teams) whose role is to help bootstrap the Decentralized Risk Management function

##### Maker Foundation

- the organization that created to develop and bootstrap the Dai Credit System

##### Market-Maker

- an agent that provides liquidity to a market by offering to both buy and sell a given asset.

##### MCD

- acronym for Multi Collateral Dai

##### Medianizer

- the smart contract that collects price feed information from [Price-Feed](oracle.md#how-does-the-price-feed-system-work) Providers and publishes a reference price for each asset

##### MKR

- governance token of [MakerDAO](makerdao.md#what-is-makerdao)

##### Multi Collateral Dai

- the upgraded Dai Credit System that utilizes multiple collateral types

## N

## O

##### Oracle Security Module

- a security mechanism that delays the [Oracle price feed](oracle.md#how-does-the-price-feed-system-work)

##### Oracle

- a smart contract system which makes off-chain data, such as price data, available on-chain

## P

##### PETH

- a token representing pooled ether

##### Price-Feed Delay

- a risk parameter that controls the delay of the [Oracle](oracles.md#what-is-an-oracle) price feed

##### Price-Feed Provider

- operator of an Oracle that reports price data to the Medianizer

##### Proposal

- a written plan put forward for a vote

## Q

## R

##### Reference Price

- the authoritative asset price published by the Medianizer

##### Risk Construct

- a collection of data, risk models, outputs, documentation, and analysis

##### Risk Model

- an analytical model measuring and predicting risk, including the input data and output of the model

##### Risk Parameters

- a set of configurable, risk-related, variables used to manage the system

##### Risk Team

- an independent party who creates a [Risk Construct](risk-management.md#what-is-a-risk-construct) for Maker [Governance](governance.md#what-is-governance)

## S

##### SCD

- acronym for Single Collateral Dai

##### Shut

- action of closing a [CDP](cdp.md#what-are-collateralized-debt-positions) by paying back outstanding [Dai](dai.md#what-is-dai) and the [Stability Fee](stability-fee.md#what-is-the-stability-fee)

##### Single Collateral Dai

- the Dai Credit System which solely accepts ETH as collateral

##### Soft-peg

- relating the target value of a cryptocurrency to the absolute value of a fiat currency, allowing for some variance

##### Stability Debt:

- the amount of [Dai](dai.md#what-is-dai) generated through a [CDP](cdp.md#what-are-collateralized-debt-positions)

##### Stability Fee

- a variable Fee charged to a [CDP](cdp.md#what-are-collateralized-debt-positions) for the creation and use of [Dai](dai.md#what-is-dai), set by MKR holders through governance actions

## T

##### Time-Based Voting

- a voting design that ends a vote at a predetermined time

## U

## V

##### Voting Proxy

- a smart contract that allows MKR token holders to vote with their hot wallets using MKR that is stored on their cold wallets

## W

##### WETH

- ERC-20 compatible ETH

##### Wipe

- action of paying back [Dai](dai.md#what-is-dai) to a [CDP](cdp.md#what-are-collateralized-debt-positions)

## X

## Y

## Z
