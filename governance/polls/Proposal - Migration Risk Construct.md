---
title: Migration Risk Construct Proposal
summary: If accepted by the community, this proposal signals support for the included risk parameters to be initialized MCD at launch.
discussion_link: https://forum.makerdao.com/t/proposal-migration-risk-construct/724
poll_rules: The voter may select to vote for one of the poll options or they may elect to abstain from the poll entirely
options:
   0: Abstain
   1: Yes
   2: No
---
# Poll: Migration Risk Construct Proposal

## Maker Foundation Interim Risk Team

PLEASE READ IMPORTANT DISCLAIMERS [HERE](https://github.com/makerdao/community/blob/master/risk/disclaimers%20to%20proposals%20and%20risk%20reports.md)

## Introduction

On November 18th, 2019, the Maker Protocol is scheduled to upgrade to a new version called Multi-Collateral Dai (MCD). The current iteration, Single-Collateral Dai (SCD), will live in parallel for some indeterminate amount of time. During this overlap, the MKR community will be tasked with managing two Dai currencies, two stability fees, and, ultimately, two ecosystems. This presents a variety of risks to the Maker Protocol, and as a result, we, the Interim Risk Team at the Maker Foundation, are proposing a conservative migration strategy designed to mitigate overall risk.

## Migration Overview

**_Please note: the current SCD version of Dai will be called ‘Sai,’ and the new MCD version will be referred to as ‘Dai.’_**

### MCD vs. SCD

SCD has been in operation for almost two years now and has gained significant traction in the DeFi ecosystem. There are many benefits to the SCD protocol, such as battle-tested code and relative simplicity. However, we believe that that SCD users will eventually choose to migrate over to MCD for a variety of reasons:

- Dai holders can take advantage of the Dai Savings Rate (DSR)
- The DSR is a new governance tool for ensuring Dai stability
- New security features such as the Governance Security Module, Oracle Security Module, and Emergency Shutdown Module
- The introduction of additional supported collateral types
- An improved liquidation process through the new MCD auction mechanism

These features should result in lower stability fees, improved liquidity, and future growth of the Maker Protocol.

### Stakeholders

The current SCD protocol has four primary stakeholders: Sai holders, CDP owners, liquidity providers, and MKR token holders. The current Sai supply is roughly 90 million, which imposes the following responsibilities on these stakeholders:

- **CDP owners** have collectively minted 90 million Sai from the Maker Protocol which must eventually be paid back to retrieve their collateral.
- **Sai holders** are in possession of the 90 million outstanding Sai.
- **Liquidity providers** participate in market making in order to keep Sai stable in the open markets.
- **MKR token holders** are responsible for the ongoing governance of the protocol.

The goal of this Migration Risk Construct is to transport the above stakeholders from SCD to MCD in a safe and secure manner. This will be achieved by:

- **CDP owners** redenominating their CDP Sai issuance into Dai
- **Sai holders** exchanging their Sai for Dai.
- **Liquidity providers** to start providing liquidity for Dai instead of Sai.
- **MKR token holders** adapting to a new and improved form of governance.

Sai holders and CDP owners can migrate in a variety of ways. How they choose to do so entails different levels of risk and/or may impact the market negatively. A migration that occurs completely in the open market could represent an uncontrolled and potentially risky path for the ecosystem. For example, an undesirable path to migration is as follows:

- Holders begin selling their Sai and buying Dai on the open market, incurring significant slippage. This results in downward pressure on Sai and upward pressure on Dai.
- CDP owners purchase Sai on the open market (incurring slippage as well) in order to pay down their CDP. They then reestablish their position by minting and selling Dai in MCD, incurring slippage again.
- Liquidity providers may not have sufficient balance sheet capacity to facilitate the amount of Sai and CDPs being migrated, resulting in peg instability.
- MKR token holders would be required to actively micro-manage the monetary policy of both systems.

These scenarios are undesirable because:

- they destabilize both the Sai price and the Dai price,
- it could become more expensive for CDP owners to close their obligations, and
- users incur slippage during some or all of the stages of the transition process.

### Migration Contract

Due to the potential for destabilization of both the Sai and Dai price, there will be a special migration contract included in the Maker Protocol. The functionality of the migration contract is contingent upon governance approving Sai as a collateral type in MCD.

The migration contract works as follows:

- Sai holders can lock their Sai into the migration contract and generate Dai at a 0% stability fee and a 100% liquidation ratio. This is effectively a token swap from Sai to Dai.
- The distinguishing feature of the migration contract is that it acts much like a shared CDP that anyone can access. Locked Sai can be made available to _other_ users (i.e., CDP owners in SCD needing to close their obligations).
- CDP owners use this Sai liquidity to migrate their positions from SCD to MCD. This process reduces the Sai liquidity in the migration contract. Additionally, the used Sai is burned, leading to a reduction in the outstanding Sai supply.
- As long as there is Sai liquidity in the migration contract, Dai holders may reverse their positions back into Sai.
- Sai needs to exist in the migration contract in order for CDP owners to successfully upgrade. Otherwise, the contract will not be able to execute the migration.
- CDP owners must repay their accrued stability fee in order to complete the migration. The migration app is designed to facilitate this process.

Because this process is fully contained in the migration contract, neither Sai holders nor CDP owners need to interact with public exchanges. This mitigates destabilization risks for both the Sai and Dai price. Further operational and technical details for this process can be found [here](https://github.com/makerdao/developerguides/blob/master/mcd/upgrading-to-multi-collateral-dai/upgrading-to-multi-collateral-dai.md).

### Emergency Shutdown

When the community has determined that it is no longer possible to effectively manage the Sai ecosystem, or desirable to do so, an emergency shutdown will be triggered in SCD. An emergency shutdown is essentially an unwinding of the protocol, which allows Sai holders to redeem their tokens for \$1 USD worth of ether (based on the oracle price at shutdown) and CDP owners to collect their collateral, minus the balance of their drawn Sai.

Other emergency scenarios (some of which are described further below) may also necessitate an emergency shutdown to be triggered.

## Governance Strategy

The launch of MCD represents a collection of significant improvements to the Maker Protocol. There are new governance levers (such as the DSR), a new liquidation process, and the inclusion of multiple collateral types. However, governance must manage numerous additional risk parameters, a significant increase from the current model of just two (stability fee and debt ceiling).

Additionally, the migration effectively represents a deleveraging of 90 million Sai and a potential re-leveraging of 90 million Dai. Two sudden supply shocks in a short period of time put a strain on market liquidity and threaten the stability of both Sai and Dai. Consequently, the risk team proposes what it believes is a conservative governance strategy, which is designed to mitigate potential risks during the migration process. Part of this strategy is the selection of the initial risk parameters, which the risk teams believes will help minimize any potential negative impact on the Sai and Dai price.

### Stability Fee and DSR

One strategy for achieving a safe and orderly migration is to incentivize users to upgrade in a coordinated and predictable manner.

A straightforward way to incentivize Sai holders to migrate is the introduction of the DSR, a tool that makes holding Dai more attractive compared to Sai. Given the absence of any empirical data, it is difficult to select a precise starting DSR value. However, a DSR of 2% is likely to be competitive with the broader DeFi ecosystem, which currently offers a ~6% (and dropping) savings rate on Sai. After adjusting for the added counterparty risk present in other platforms, a 2% DSR should incentivize a moderate amount of Sai holders to begin the migration. This parameter can be adjusted through governance as needed.

For CDP owners, a spread between the SCD and MCD stability fees should be sustained as well, ensuring it will be cheaper to mint Dai in MCD. The Eth stability fee spread could likely be 1-2% throughout the migration cycle. We propose a 1% stability fee spread to start. CDP users can often be insensitive to stability fee changes, so we do not expect an immediate and strong shift in CDP owner behavior. While a 1% spread may be too conservative, we recommend erring on the side of caution until more data becomes available.

Another incentive we would like to target is the sequence of migration for Sai holders and CDP owners. Given that CDP owners utilize Sai liquidity from the migration contract, it is important that enough Sai holders switch over to support the other migration participants. Otherwise, CDP owners will be forced to source Sai on the public markets, impacting prices.

There are multiple ways this sequencing can be achieved. First, from a practical standpoint, the Maker Foundation has been working with exchanges that hold large Sai balances to migrate as soon as possible on behalf of their users or to provide them with the tools to do so manually.

Beyond the coordinated migration of our partners, however, governance can continue to use monetary policy if they so desire. An increase in the DSR or stability fee spread should impact stakeholders accordingly.

### Debt Ceiling

There are several considerations to be made regarding the debt ceiling, which would be monitored and governed separately for SCD and MCD.

Debt ceiling cap space is a critical tool for market makers to effectively carry out their role in helping keep Sai stable. Therefore, governance should ensure that there is always sufficient room in the debt ceiling so that market makers have sufficient access to Sai liquidity should they need it. We recommend a continuous 10-20 million Sai buffer.

For the MCD Eth debt ceiling, we propose 50 million, to be raised when needed. As the Sai supply migrates, the SCD outstanding supply is reduced. The debt ceiling should then be lowered to allow for simultaneous increases in the MCD debt ceiling. However, a minimum supply of Sai as a liquidity buffer for market makers should be kept intact, even as the maximum Sai debt ceiling goes down.

### Monetary Policy Governance

While our initial recommendation of risk parameters represents a logical starting point for the new protocol, standard operating procedure for governance still applies. Typical pressures such as changing demand for leverage, volatile ether prices, or sentiment shifts may still cause instability in the price of Sai or Dai. The governance community will continue to use the same general mechanisms to manage both the old and the new peg.

But, we also must now consider the possibility of additional migration-specific issues that could arise and require rapid adjustments to debt ceilings, stability fees, or the DSR. Governance must remain agile and vigilant with these monetary policy tools so that they can quickly respond to various market pressures.

While we cannot predict the full gamut of possible situations, we highlight a few that might be relevant to the governance community in the coming weeks after launch.

- The introduction of the DSR could mean that new capital flows into Sai, which would then be migrated into Dai and deposited into the DSR contract. The DSR might quickly buoy Sai and Dai prices above \$1, necessitating immediate adjustments to monetary policy.
- The Sai price is not expected to drop below \$1, as the migration process would entail a steady stream of Sai demand.
- There is a higher risk that the Sai price rises above \$1. If this occurs, market makers need to be able to generate more Sai in order to keep the Sai price in line.
- The Dai price may be strong or weak depending on the counteracting forces of DSR and new CDP generation (which puts downward pressure on Dai).
- The Sai price is not expected to go below the Dai price because one can always swap Sai to Dai through the migration contract. The reverse depends on liquidity in the migration contract, however, and so the Dai price could dip below Sai.

As a general rule for policy tools, we suggest using the stability fee to target incentives instead of the DSR. Due to the relative immaturity of the DSR, it is likely to be ineffective (or unpredictable) as a monetary policy tool. Additionally, any stability fee changes should aim to keep the spread across SCD and MCD in line.

### Emergency Shutdown

Certain conditions may necessitate an early emergency shutdown. The most likely reason for this would be a shortage of Sai liquidity, leading to highly volatile prices and wide bid/ask spreads. Even with sufficient debt ceiling room, market makers may be unwilling to mint and sell Sai if there is an expectation that the price will continue to increase. For market makers to be willing to sell, they must be confident that emergency shutdown is a credible threat.

Because Sai would be redeemed at its target price of \$1 USD in an emergency shutdown, perception would then help drive downward pressure on Sai towards the target price.

### Governance Polls and Executive Votes

Due to the unpredictable nature of the migration, the community should be prepared to take unscheduled action with regard to monetary policy. In some cases, emergency action on short notice may be required. Consequently, the community should expect an increased number of governance calls, governance polls, and executive votes. Of note, the community should be on the lookout for emergency shutdown discussions and votes. The Maker Foundation will use all available communication platforms to notify the community when any such actions may be necessary.

### Additional Collateral Types

In addition to ether (ETH), the risk team is proposing to launch with one additional collateral type, the Basic Attention Token (BAT), which scored the highest in the asset priority poll held in July. The primary reason for this addition at launch is so that engineers in the development community can fully test all of the features and functionality of the Maker Protocol. In the weeks following launch, a more formal analysis and risk evaluation of BAT will be released. For now, we propose a conservative debt ceiling of 3 million and, for simplicity’s sake, an identical stability fee to Eth.

## Risk Analysis

In this section, we examine a cross section of migration risks along with potential mitigations. **This list is not exhaustive due to the unpredictable nature of the launch**. The following risks are listed in no particular order of likelihood or severity.

### The pace of migration is too slow.

A slow pace of migration could cause a number of undesirable side-effects relating to the stability of Sai or Dai. First, there will be a considerable increase in operational and social overhead required to manage two pegs and two sets of system parameters. These parallel ecosystems could also result in fractured liquidity, brand confusion, a lack of consumer confidence, and/or a disruption in business for our ecosystem partners.

#### Mitigation

It is difficult to quantify ‘too slow’ or pin down what the target timeline is for migration. However, the community should remain vigilant in the governance process in order to respond to market forces. For example, depending on the market’s reaction to the initial risk parameters, governance may choose to increase the DSR or stability fee spread if necessary.

### The pace of migration is too quick.

Protocol upgrades can often have unpredictable consequences, and a rapidly migrating user base could exacerbate any potential issues. Due to the length of time currently required to complete each governance cycle, the community may not be able to react to emerging threats to the system.

#### Mitigation

Similar to the above risk, governance must monitor the pace of migration and adjust risk parameters accordingly. Additional governance calls should also be held to speed up the governance process.

### Borrowers on secondary lending platforms are unlikely to use the migration contract.

Secondary lending platforms such as Compound and dYdX are some of the largest ecosystem users of the Maker Protocol. In total, roughly 50 million Sai has been deposited into these platforms. From that number, roughly 30 million Sai has been lent out to borrowers.

The borrowers on these secondary lending platforms resemble Maker CDP owners, in that they have Sai obligations against their collateral. However, Sai borrowers on secondary lending platforms may not have direct access to Sai liquidity from the migration contract to close their positions.

This has a few consequences:

- Borrowers on lending platforms might vie for limited Sai liquidity on the open markets to repay their outstanding obligations. This could create upwards price pressure on Sai as 30 million or more Sai must be sourced.
- Frictions involved in an open market migration may present too much overhead for borrowers. As a result borrowers may choose inaction, delaying the overall migration.

#### Mitigation

The standard response to an increase in Sai price is to decrease the stability fee such that market makers are incentivized to mint more Sai and push the price back downwards. This requires sufficient debt ceiling for market makers.

### There is no Sai liquidity in the open marketplace or in the migration contract.

There is a risk that Sai liquidity will dry up, making it difficult for CDP owners and secondary Sai borrowers to migrate and potentially driving the Sai price upwards. This could happen for a variety of reasons:

- An imbalance of incentives due to the MCD launch risk parameters causes CDP owners to migrate earlier or quicker than Sai holders.
- Exchange liquidity has dried up due to exchanges migrating over to Dai.
- Market makers cannot mint any more Sai due to the debt ceiling, or are unable due to capital constraints.
- Market makers are unwilling to sell Sai because they do not feel confident that the price will return to \$1, or they do not believe the likelihood of an emergency shutdown is credible.
- Some portion of the Sai supply has been lost, making it mathematically impossible for all CDP owners to migrate.
- Arbitrageurs mint Dai and drain Sai liquidity from the migration contract.
- An attacker hoards a significant portion of the Sai supply to corner the market.

#### Mitigation

Ideally, risk parameters are set in such a way that Sai holders are incentivized to migrate early, ensuring sufficient liquidity. However, if any of these scenarios occur, the Sai price may spike upwards. In some cases, market makers may not have the balance sheet capacity to temper the price. If this scenario persists, triggering emergency shutdown is the only available option. As a result, the community must be willing to undergo this emergency measure should the situation arise.

### The MCD Eth debt ceiling increases exposure risk.

To facilitate CDP owners and secondary lending borrowers migrating over, an appropriate Dai debt ceiling must be set. However, the doubling of the global debt ceiling across SCD and MCD unintentionally increases exposure risk for the Maker Protocol. While this additional debt ceiling is intended specifically to facilitate CDP owners to migrate, there is nothing to stop new users (or an attacker) from utilizing this new debt ceiling space. This could trigger a supply shock and negatively impact Dai liquidity.

#### Mitigation

Ideally, the MCD Eth debt ceiling should be low enough to protect against too much Dai being minted at once, but high enough to facilitate migration without exhausting the supply. While we don’t anticipate a sudden surge of new demand for Dai leverage, we believe the Maker Protocol should be able to handle an unexpected increase of 50 million in the Dai supply.

## Conclusion

The bootstrapping of a second ecosystem within the Maker Protocol will involve managing a series of unknowns with our familiar governance tools, plus a few new ones. Due to the lack of empirical data available to us to accurately model a Multi-Collateral Dai which exists in concert with a Single-Collateral Sai, the Interim Risk Team recommends that the governance community approve this proposal to initialize the launch of MCD with a series of logical and conservative defaults. The Interim Risk Team believes the proposed parameters, as listed in the appendix below, will give the governance community a stable foundation with which it can begin to manage the new monetary policy requirements of a post-MCD world.

If this proposal is accepted by the community, it will signal its support for the following risk parameters to be initialized at the launch of MCD.

## Proposed Risk Parameters

### Collateral Type: Ether (ETH)

| Parameter             | Value          |
| --------------------- | -------------- |
| Stability Fee         | Current SF -1% |
| Debt Ceiling          | 50,000,000     |
| Liquidation Ratio     | 150%           |
| Auction lot size      | 50 ETH         |
| Minimum bid increment | 3%             |
| Bid duration          | 10 minutes     |
| Max auction duration  | 3 days         |
| Liquidation penalty   | 13%            |
| Dust                  | 20 Dai         |

### Collateral Type: Single-Collateral Dai (SAI)

| Parameter             | Value       |
| --------------------- | ----------- |
| Stability Fee         | 0           |
| Debt Ceiling          | 100,000,000 |
| Liquidation Ratio     | N/A         |
| Auction lot size      | N/A         |
| Minimum bid increment | N/A         |
| Bid duration          | N/A         |
| Max auction duration  | N/A         |
| Liquidation penalty   | N/A         |
| Dust                  | N/A         |

### Collateral Type: Basic Attention Token (BAT)

| Parameter             | Value          |
| --------------------- | -------------- |
| Stability Fee         | Current SF -1% |
| Debt Ceiling          | 3,000,000      |
| Liquidation Ratio     | 150%           |
| Auction lot size      | 50,000 BAT     |
| Minimum bid increment | 3%             |
| Bid duration          | 10 minutes     |
| Max auction duration  | 3 days         |
| Liquidation penalty   | 13%            |
| Dust                  | 20 Dai         |

### System Parameters

| Parameter                              | Value       |
| -------------------------------------- | ----------- |
| Dai Savings Rate (DSR)                 | 2%          |
| Global Stability Fee                   | 0%          |
| Global Debt Ceiling                    | 153,000,000 |
| Surplus Buffer                         | 500,000     |
| Debt Auction Delay                     | 2 days      |
| Governance Security Module Delay       | 0           |
| Emergency Shutdown Module Delay        | 73 hours    |
| Oracle Security Module Delay           | 1 hour      |
| Oracle Feed Quorum                     | 13          |
| Emergency Shutdown Threshold           | 50,000 MKR  |
| Surplus Auction Lot Size               | 10,000 Dai  |
| Surplus Auction Minimum Bid Increment  | 3%          |
| Surplus Auction Bid Duration           | 30 minutes  |
| Surplus Auction Max Duration           | 3 days      |
| Debt Auction Lot Size                  | 50,000 Dai  |
| Debt Auction Maximum Initial Bid       | 50 MKR      |
| Debt Auction Minimum Bid Increment     | 3%          |
| Debt Auction Max Auction Duration      | 3 days      |
| Debt Auction Reinitialization Discount | 20%         |
