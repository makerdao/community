# Episode 135: April 1st, 2021

## Agenda

- [00:00](https://youtu.be/FCPAV83tEqw): Introduction and Governance Update
- [07:21](https://youtu.be/FCPAV83tEqw?t=441): Forum at a Glance
- [10:25](https://youtu.be/FCPAV83tEqw?t=625): Real World Finance Update
- [13:51](https://youtu.be/FCPAV83tEqw?t=837): Smart Contracts Team Update
- [25:18](https://youtu.be/FCPAV83tEqw?t=1518): Oracles Team Update
- [35:23](https://youtu.be/FCPAV83tEqw?t=2123): Operational Support Update
- [40:30](https://youtu.be/FCPAV83tEqw?t=2459): MIPs Update
- [43:25](https://youtu.be/FCPAV83tEqw?t=2605): Growth Core Unit Update
- [1:10:23](https://youtu.be/FCPAV83tEqw?t=4038): Liquidation 2.0 Parameters
- [1:22:01](https://youtu.be/FCPAV83tEqw?t=4921): Open Discussion

## Video

<https://youtu.be/FCPAV83tEqw>

## Introduction

### Preamble + Governance Update

#### LongForWisdom

[00:00](https://youtu.be/FCPAV83tEqw)

- Hello everyone, and welcome to the MakerDAO scientific Governance and Risk meeting #135, taking place on Thursday, April 1st at 17:00 UTC. Welcome to everyone. I'm joined by a bunch of excited Maker people.
- If someone is speaking and you have questions, please don't be afraid to ask them. We enjoy it when people get involved.
- Recently, we had topics on the forum more contentious than usual and in the chat and various other places and such. I would like to give everyone a general reminder to keep things civil and try to engage in good faith in these discussions, these meetings, etc. I don't think we are anywhere near getting to the point where I need to tell anyone that, but I think it serves as a good general reminder. Most people would agree that everyone is on the same side. We are all working towards the same goal, so if someone says something you disagree with, please try and take it in the best way possible or with the best possible intentions.
- I'll get into my updates for Governance. [Last week's executive](https://vote.makerdao.com/executive/increase-debt-ceilings-modify-risk-parameters?network=mainnet#proposal-detail) passed and hasn't been executed yet, but that will see some increases to the DCs and addition to the DC Instant Access Module for a few of the UNI LP tokens, which I know a couple of people have been eagerly awaiting. This isn't all of them; This is DAI-ETH, USDC-ETH, and DAI-USDC, all of which are seeing increases. We are also ready to [increase the ETH-B debt floor](https://vote.makerdao.com/polling/QmaP9wBh#poll-detail), also known as `dust,` from 2000 to 15000 Dai. And we also [increased the surplus lot size](https://vote.makerdao.com/polling/QmeLmzsa#poll-detail) from 10000 to 30000. This is the lot size when we do `flap` options, where we burn auctions off Dai to burn MKR.
- We had a [set of polls this week](https://forum.makerdao.com/t/maker-relay-ep-38/7249), all of which have passed. There were four polls for DC increases on PSM-USDC-A, ZRX-A, YFI-A, and COMP-A. YFI-A is particularly timely because we're now at the DC.
- This week's executive will include all of those four poll outcomes. It will also include the first budget distribution for the Core Units, Governance, Risk, and RWF. We will see the first monthly payments to those units, which is exciting.
- To give a brief update on what Gov Alpha and our Core Unit have been doing, we [posted on the MIPs' portal](https://mips.makerdao.com/mips/list) a couple of times. We've had a new update pushed to the main URL. This now includes sub-proposals. You can now view sub-proposals on the MIPs portal. We had other improvements as well. You can now link directly to a section within a MIP. The search functionality is improved. There have been other minor polishes. we've provided a 1.2 spec on new features for the next version. Development on that will continue.
- We've had the initiative to clean up the MIPs themselves and add tags to tie them at the MIPs portal. We can use the MIPs portal tags to provide more tailored searches, which may be useful to individual Core Units or people interested in certain things. Onboarding is going fairly well; We are continuing to onboard Prose to operate on many Governance processes such as polls and the executive process. We are continuing to onboard Elihu as well. The MIP3 rewrite is in progress, which we discussed at last week's Governance meeting. Since then, we have had a separate meeting about it. We agreed that MIP3, the monthly Governance Cycle MIP, could use a bit of rewrite; That's in progress, and we are hoping to post that early next week on the forum for feedback.
- Finally, we have been working on parameter documentation for Liquidations 2.0. When the first poll goes out for the LINK-A parameters, which is on Monday, Governance will have easy links that will tell them what parameters mean. This is in progress, but we are getting there. We are hoping to have everything ready for Monday. We may only get 90% of the most important parameters done, but let's see.

Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### Forum at a Glance

#### Peyton Rose

[07:21](https://youtu.be/FCPAV83tEqw?t=441)

[Forum at a Glance: Mar 26 - Apr 01, 2021](https://forum.makerdao.com/t/governance-at-a-glance-march-26-april-1-2021-now-forum-at-a-glance/7276)

##### Three Point Summary

- Total DAI supply above 3B!
- The Surplus Buffer will cross 20M DAI for the first time today
- Weekly VWAP for DAI down to $1.001

##### ICYMI Announcements

- @SebVentures and the Real-World Finance Team published an [article on (Crypto) Banking 101.](https://forum.makerdao.com/t/crypto-banking-101/7257)
- [Catch up on the MKR Compensation conversation](https://forum.makerdao.com/t/framing-a-framework-for-mkr-compensation-wednesday-march-31-17-00-utc/7200) and consider joining the newly * announced working group!

##### Discussions

- [Core Unit Mandate Overlap](https://forum.makerdao.com/t/core-unit-mandate-overlap/7210)
    - @Planet_X points to overlap within Core Unit mandates, inviting community discussion on the process of decentralization.
- [Business strategy and evaluation framework for Business-like Core Units](https://forum.makerdao.com/t/business-strategy-and-evaluation-framework-for-business-like-core-units/7218)
    - @SebVentures builds on the above thread and invites conversation on how Core Units can be evaluated.

##### Signal Requests

- [Petition Letter to A16z](https://forum.makerdao.com/t/signal-request-petition-letter-to-a16z/7181)
    - Voting Ends Soon! Following a previous [discussion](https://forum.makerdao.com/t/proposal-petition-letter-to-a16z/7025), @iammeeoh is looking to gather consensus around a petition for a16z to get involved in governance.

### Real World Finance Team Update

#### Sebastien Derivaux

[10:25](https://youtu.be/FCPAV83tEqw?t=625)

- First, the financial reports for last month will be done tomorrow. It was slightly too short today to get it done. There were some complications in the SQL query, but everything is fixed. My numbers show that we had less than 3 million last night at midnight, which is different from the numbers we usually use. I will make a post about that.
- On data infrastructure, I made good progress, or at least I spoke with a lot of people from inside the Foundation and outside of it to see how we can work together to create data infrastructure to source all the data we need. not only for my Core Units but for other Core Units as well. If there is an idea for Data Core Units outside in the wild, please reach out to me.
- On the collateral side, we will have New Silver quite soon. I will let Chris expand more on that. We will have the final due diligence with them next Tuesday. I have to find a bit of Dai to invest in this pool as I'm one of the core investors in the pool. We will work on a timeline with the SC Team and other moderators to see how we can use more RWAs within the following months. We have a pipeline; We have ConsoleFreight that can be done almost any time. Still, we will wait a little bit to see if things works out with New Silver and, after that, begin to onboard other collaterals.
- I created an [article on Crypto Banking 101](https://medium.com/@sebastien.derivaux/crypto-banking-101-ece9f1c2b031). Check it out.​

### Smart Contracts Team Update

#### Christopher Mooney

[13:51](https://youtu.be/FCPAV83tEqw?t=837)

- We've not made any significant progress on the collateral onboarding sheet last week, but we assigned Nas to it. He's going to gut-check each one of those collaterals. We want to begin ranking all the newly added collaterals over the past two months and have an idea of what we're going to pick up after liquidations 2.0.
- There were no collateral assessments this week. But there ae updates on collateral for Kovan.
- We ended up shipping PAX-G to Kovan. PAX-G is relatively more difficult to get into the system due to fee-charging on transfers. Our current way of using the system with UIs would result in double fees. This is similar to Tether. However, they don't have the fee turned on. This is a generic way to handle any token that does transfer fees.
- We also have [NS2-DRP](https://forum.makerdao.com/t/ns2drp-ns-drop-mip22-token-smart-contract-domain-team-assessment/5517), which I will detail in a few minutes.
- We're dealing with the medians on Kovan and trying to reflect their price updates. This was done through a cross-collaboration process with the Oracle team.
- Three things are in review: We have a more efficient MegaPoker that we're looking at and hoping to get that out on to Kovan soon. We have LP Oracle tokens review and the Sushi Join adapter, which is off for auditing.
- On the MIP22 Centrifuge front, we squeezed that RWA addition into a MIP21 style adapter. It's still called MIP22 because it handles its own liquidations, but it's in MIP21 format, making it easy to adapt. We've added the first version of the Centrifuge, the New Silver edition; that's the NS2-DRP token we've added to Kovan. MIP21 and MIP22 are officially in Kovan and have been tested in Kovan. We will be able to release YFI based on the shipment of Liquidations 2.0. we're expecting it up on Kovan by Wednesday. However, there is lots of work, and it may go up by Friday. Some of the work involved`dust` consistency and comment changes that we merged in the main PR.
- We reviewed and merged the `clippermom,` which is the new clipper that will have a publicly accessible circuit breaker on it. We have also reviewed the ESM replacement.
- Ilk registry is completed but still in review. We also have Dss interface changes that we need to update. There is the actual Kovan spell itself with a giant checklist on it. It's a huge spell. If you're interested in auditing, feel free to check it out.
- We have many changes based on the clarifications of MIP45, including additions of all audits. We're going to post all the audit reports into MIP45 as well as make clarifications and remove some function parameters in that PR. Let us know if these are too many changes for a MIP.
- Finally, we have to create a bug bounty for Liquidations 2.0 and update the security docs.

### Updates on Optimism L2

#### SamM

- The Optimism team delayed their launch, which gives us more time to audit. We don't have to rush the contracts.
- We've developed an upgradable v1 bridge that can be replaced to support fast withdrawals in the future. We also developed a Governance repeater, which is a mechanism that allows us to run spells on L2 Optimism. We don't need to use the multi-sig.
- We've been actively looking into Optimism's token bridge standard design discussions.
    - Chris: I would like Derek to speak on the community sections. He was working directly with the SC domain team or the protocol engineering team.
    - Derek: Yesterday, I [submitted the SC Core Unit Application](https://forum.makerdao.com/t/mip39c2-sp7-adding-protocol-engineering-core-unit/6831), which is now in the formal submission. It's been renamed into ProtocolEengineering because we've expanded the team to include two more individuals, Bartek and Chris, who have been doing a lot of work in L2 Optimism. It's enabling us to focus on innovation growth on the L2 world a lot more now than previously focused on. In the upcoming week, I will focus on creating team-specific backlogs, priorities and OKRs in advance of the executive vote. I am highlighting this point because we're committed to working on decentralization strategies and building a structure that enables multiple teams to contribute to the protocol.

### Oracle Team Update

#### Nik Kunkel

[25:18](https://youtu.be/FCPAV83tEqw?t=1518)

- There was a [light feed proposal from Defi Saver](https://forum.makerdao.com/t/mip10c14-sp7-proposal-appoint-defi-saver-as-a-light-feed/7207). I have reviewed their proposal, and it all checks out to polling votes on Monday for the DAO to vote on. They are a really good team. They've done a lot to bring the Maker ecosystem further along. They've provided an alternative interface to Oasis. The automation service they made's prevented the auction vulnerability that we have. Please, vote your honest opinion.
- I am the point of contact for ABDK ever since we did a Uniswap LP audit with them. We're still finishing some of the fixes they brought up in their audits. There are some dependencies on the SC team, who are busy at the moment. We will finalize this as quickly as possible and complete the final audit report.
- We've got an ABDK agreement to do the audit for crop join adapter implementation for Sushi Swap. This is a pared-down version of Compound. It will cost us 8000 DAI, which we are planning to submit by April and expecting a report by May. Then we would have another round of feedback with them. However, if no critical issues are found, maybe we can deploy the Sushi Swap crop join adapter without the final report being published.
- We've been working on revamping the Oracle Kovan deployment. It used to source its own non-mainnet feeds. This revamping is the kind of effort we're trying to get into running Liquidations 2.0 on Kovan. This will be helpful for the people that are trying to integrate changes coming with Liquidations 2.0. The migration should be complete today.
- Regarding Uniswap LP Oracles, we just had the vote to raise DC. The Rates Group is discussing raising DC on more Uniswap LP collateral types. The plan is to lean more towards the ETH derivative, not EWRC20 types. In the past, we raised DAI-USDC, DAI-ETH, and USDC-ETH. Coming up would be ETH-USDT and probably UNI-ETH, and WBTC-ETH could be an interesting option as well.
- The patched client we've been talking about, which fixes the state size issues, is now stable. We've got an instance close to 100 GB, which is the target. Previously, the state size was 4.3 GB. We're looking to launch within the next few weeks.

### Operational Support Update

#### Juan

[35:23](https://youtu.be/FCPAV83tEqw?t=2123)

- We now have the [new version of the MIPs portal](https://mips.makerdao.com). You will find an improved search sub proposal mode and realizations if you go to [mip.makerdao.com](mip.makerdao.com). The Gov Alpha team uses it to clean a lot of data and ensure that data is consistent and readable.
- Know your MIP is going to be next Friday at 1PM. We will publish the agenda. Tim and Seb are going to discuss the EURO-DAI MIP. If you're interested, please join us.
- Regarding collateral onboarding, we have [Bancor next week on April 7th](https://forum.makerdao.com/t/collateral-onboarding-call-29-bancor-wednesday-april-7-18-00-utc/7054). It will be followed by [SolidBlock](https://forum.makerdao.com/t/collateral-onboarding-call-30-solidblock-wednesday-april-14-17-00-utc/7052) on April 14th talking about the RWF; agendas are in the forum. We have seen a lot of updates on Core Units. We are keeping track of everything on them. [coreunit.makerdao.network](https://coreunit.makerdao.network/Core-Unit-Corner-f79281d7617b4a61b958c30d3ea768af) has new images for deadlines.
- We had a [call yesterday with Otonomos](https://www.youtube.com/watch?v=y01e2ClZSiI) explaining how their Otocore works and how to spin LLC directly from a wallet. It was followed by the Maker compensation framework.
- We will be having a call with @davidutro on April 21st to discuss the [Core Unit he proposed](https://forum.makerdao.com/t/mip39c2-sp8-governance-communications-core-unit-com-001/7009), which is Gov Comms, including all the new modifications that he has been doing.
- The Protocol Engineering Core Unit has been [renamed](https://forum.makerdao.com/t/mip39c2-sp7-adding-protocol-engineering-core-unit/6831) to align more with the mandate.
- Special emphasis on Maker Compensation working group. After [yesterday's call](https://forum.makerdao.com/t/framing-a-framework-for-mkr-compensation-wednesday-march-31-17-00-utc/7200/3), we plan to assemble a small group that can put forward proposals for Governance which we can vote on. We're looking for one current core unit, either facilitator or contributor; We're looking for a proposed one. We're also looking for a third party that will be neutral and brings experience to the topic. Then, we're looking for one large Maker holder and a community member with less of a position. We're trying to hear all the voices and propose something.

[Operational Support Weekly Update: March 25-30, 2021](https://forum.makerdao.com/t/operational-support-weekly-update-march-25-30-2021/7275)

### MIPs Update

#### David Utrobin

[40:30](https://youtu.be/FCPAV83tEqw?t=2459)

![](https://i.imgur.com/8BH4VjH.png)

![](https://i.imgur.com/itDjom9.png)

## Other Presentations and Updates

### Nadia Alvarez

#### Growth Core Unit Update

[43:25](https://youtu.be/FCPAV83tEqw?t=2605)

![](https://i.imgur.com/zW7uivQ.png)

- I would like to explain who and what the Growth Core Unit and Business Development Units are, and what work we have been doing in the Foundation. We actually discovered that there can be improvements made on visibility and communication overall for MakerDao and the Maker Protocol.

![](https://i.imgur.com/4ydAOyL.png)

- We currently have over 1,000 partners from across the world who are each focused on different solutions.

![](https://i.imgur.com/UGTodYa.png)

- We want our partners to integrate Dai if it makes sense for them to do so. We need to understand the differentials. The Dai savings rate is one of the leading advantages of using the Maker Protocol over other DeFi Protocols, stablecoins, and banks. However, partners are waiting until we have more RWAs in the Protocol before continuing with us.

![](https://i.imgur.com/XPdL41a.png)

- We need to focus on improving trust with our Vault and Dai users. There have been issues and scenarios in the past where some users may be cautious using our Vaults and Dai, but we want to focus on generating trust with these users.
- These are challenges we are facing trying to reach bigger companies, banks, NDOs and OTCs across various countries.

![](https://i.imgur.com/1amnYkU.png)

![](https://i.imgur.com/4orRHYH.png)

- One of our challenges concerns conversion between Dai-USD and Dai-FIAT. This is due Peg, slippage, and fees involved in transactions using Dai.

![](https://i.imgur.com/qYXrxCP.png)

- CeFi vualts requires our partners to trust in the Maker Protocol and the people working with Maker. We have to make them feel comfortable and secure with loaning a lot of money toward the Maker Protocol.

![](https://i.imgur.com/HLG2yOV.png)

![](https://i.imgur.com/ONrViU5.png)

- Binance is a strong competitor as it gains users through low gas fees.

![](https://i.imgur.com/IPhvN8p.png)

![](https://i.imgur.com/NWUR9kp.png)

![](https://i.imgur.com/GkHmGks.png)

![](https://i.imgur.com/1AmZw5N.png)

- Should the Growth Core Unit focus on partners or instead on campaigns to pump MKR? We want the community to help decide.

### Emilio Silva Schlenker (@e18r)

#### Liquidations 2.0 Parameters

[01:10:23](https://youtu.be/FCPAV83tEqw?t=4038)

![](https://i.imgur.com/3iIZqj7.png)

![](https://i.imgur.com/swjRSCp.png)

![](https://i.imgur.com/y6SlTfq.png)

![](https://i.imgur.com/29oNODE.png)

![](https://i.imgur.com/foVa92F.png)

![](https://i.imgur.com/2SfJy8c.png)

![](https://i.imgur.com/WwhslIT.png)

![](https://i.imgur.com/VVMMXqF.png)

![](https://i.imgur.com/ACe2p0c.png)

![](https://i.imgur.com/RMy5Wug.png)

![](https://i.imgur.com/JOGe3NG.png)

![](https://i.imgur.com/VX8EsK3.png)

![](https://i.imgur.com/D5YjxMG.png)

![](https://i.imgur.com/s87W5AF.png)

![](https://i.imgur.com/KkpqzRb.png)

![](https://i.imgur.com/jnx4b77.png)

![](https://i.imgur.com/uqiJZUv.png)

- Prose: I have a question on `tail` vs. `cusp.` When you adjust one, do you need to adjust another, or is it the `tail` that factors into that linear decrease of the curve?
    - Emilio: `Tail` is a different parameter. In this case, it's not relevant. Those who don't know about `tail,` it's similar to what we have in Liquidations 1.0. It's a time limit on the duration of the liquidation. In this case, the Risk Team decided to use `cusp.` They define `tail` to be 2hrs 20 minutes instead of 2hrs 18 minutes. The fact that `tail` exists and allows you to have the freedom of deciding which parameters you want to use.
- Akash: What happens when nobody wants to buy at the minimum price? Does it reset? I'm thinking if the fair value price drops very fast while being below the minimum price, nobody will then bid that minimum price.
    - Emilio: When it reaches the minimum price, no one can make a bid anymore. There is a possibility of resetting the function, and there can be incentives to do so. The initial price then gets recalculated into the new market conditions.

## Open Discussion

#### Keepers, Optimism, and Liquidations 2.0

[1:22:01](https://youtu.be/FCPAV83tEqw?t=4921)

- Christopher Mooney: Is anybody planning to run a Keeper now that they don't require capitalization?
    - David: I am not because the bots set up in the space are overspecialized and able to beat me. I'm waiting for a Dao or service that will allow me to participate without much setup.
    - BrianMcMichael: You can borrow collateral from the auction contract and then sell it on the market and buy it back. This provides somewhat of a Flash Loan solution. We would like other aggregators to integrate some of these auctions.
- Akash: What do you think about people who will try to front-run?
    - Kurt: That will probably happen. It's an acknowledged challenge within the Ethereum space as a whole. If it gets serious, we will plan on other designs which can lack this single block composability property, such as batched auctions with sealed bids containing various properties.
    - Akash: In the first sets of auctions, people bid above fair market value. They are trying to drive away other auction participants. If one person is continuously winning, how do you combat that?
    - Kurt: The protocol doesn't care, but vaults are being liquidated, and the vaults are recapitalizing. However, you can worry about being overly reliant on a single participant. If something happens to that participant, the auctions may not get covered. We believe Liquidations 2.0 is a lot more resilient allows for more participants.
    - Akash: Is there a game theory audit on this?
    - Kurt: We don't have a game theory audit. But we have relative audits and more available soon.
- LongForWisdom: We are working on in-depth documentation for parameters in Liquidations 2.0. We are trying to prepare them to release on Monday.
- Kurt: A long-term direction to think about Liquidations 2.0 is along the lines of encouraging cooperative protocols. B protocol has been discussed a lot and is now abling liquidations to happen more predictably. These kinds of solutions are the more efficient direction to focus on if you want to recapitalize. Ethereum is fundamentally flawed by the exact things that make it great; composability, transparency, MEV, and others. These characteristics will have to be solved in a major way. The future can involve app-specific chains or migrate to DeFi specific chains due to a lack of infinite possibilities. We may eventually get to the area of Polkadot and Cosmos through roll-ups. Ethereum may break down into a network of blockchains.
    - Frank Cruz: NICE!! (very excited)
- Akash: Does Optimism solve any of these problems?
    - Kurt: It really depends on the scenario. For some things, it can be better.

#### Links from Chat

- [Approved Oracle Light Feeds](https://blog.makerdao.com/makerdao-approves-4-new-light-feeds-for-oracles/)
- [Ops Support Weekly Update](https://forum.makerdao.com/t/operational-support-weekly-update-march-25-30-2021/7275)
- [Vesting YT Video](https://www.youtube.com/watch?v=8_W9kQqxp54)

## Common Abbreviated Terms

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`GF`: Governance Facilitator

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

`OSM`: Oracle Security Module

`LR`: Liquidation Ratio

`RWA`: Real-World Asset

## Credits

- Artem Gordon produced this summary.
- Gala Guillen produced this summary.
- Sai Teja produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
