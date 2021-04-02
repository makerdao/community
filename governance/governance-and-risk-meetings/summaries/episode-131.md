# Episode 131: March 04, 2021

## Agenda

- [00:00](https://youtu.be/C6K33TNTxrc): Introduction
- [06:16](https://youtu.be/C6K33TNTxrc?t=376): Governance at a Glance
- [10:02](https://youtu.be/C6K33TNTxrc?t=602): Smart Contracts Team Update
- [19:44](https://youtu.be/C6K33TNTxrc?t=1185): Oracles Team Update
- [29:23](https://youtu.be/C6K33TNTxrc?t=1763): Risk Team Update
- [39:16](https://youtu.be/C6K33TNTxrc?t=2356): Real World Finance Update
- [43:21](https://youtu.be/C6K33TNTxrc?t=2601): Operational Support Update
- [47:53](https://youtu.be/C6K33TNTxrc?t=2873): Community Development Update
- [48:38](https://youtu.be/C6K33TNTxrc?t=2918): MIPs Update
- [55:50](https://youtu.be/C6K33TNTxrc?t=3347): March MIPs Submission Review
- [57:42](https://youtu.be/C6K33TNTxrc?t=3462): February Financial Presentation with Sebastien Derivaux
- [01:15:49](https://youtu.be/C6K33TNTxrc?t=4547): Discussion

## Video

<https://youtu.be/C6K33TNTxrc>

## Introduction

### Agenda and Preamble

#### LongForWisdom

[00:00](https://youtu.be/C6K33TNTxrc)

- Hello everybody, and welcome to the MakerDAO Scientific Governance and Risk Meeting number #131 taking place on Thursday, March 4th at 17:00 UTC. As usual, I'm joined by many Maker folks and/or others interested in governance. We've got an agenda to get through; We have our regular updates. We also have our standard monthly financial presentation from SebVentures.
- This is meant to be an interactive meeting. Feel free to interrupt and ask questions. We'd love to hear from you.
- We had two executives pass this week. These were last week's executives, which [lowered the PSM fee](https://forum.makerdao.com/t/signal-request-lower-psm-usdc-a-tout-parameter/6447) out from 0.1 to 0.04 percent. Also included in that executive was [onboarding UNI-V2-DAI-USDT](https://forum.makerdao.com/t/uni-v2-dai-usdt-collateral-onboarding-oracle-assessments-mip10c3-sp28/6674) liquidity pool tokens. We increased the [ETH-A and ETH-B stability fees](https://forum.makerdao.com/t/rates-changes-proposal-2-mar-2021/6812) slightly to 5.5 percent and nine percent, respectively. We also had an [out-of-schedule executive](https://forum.makerdao.com/t/urgent-executive-psm-usdc-a-usdc-a-dc-changes-1st-march-2021/6794) on Monday because we're concerned that if the market did take a turn for the bearish, we potentially wouldn't have enough stablecoin facility available in the case that people wanted to close out their vaults pushed to demand DAI increase. This was mainly out of caution. Hopefully, we won't need to worry about it for the time being. For clarity's sake, the executive increased the PSM USDCA DC to one billion and reduced the USDCA DC to zero.
- We had another set of polls this week. We had [ETH-C onboarding](https://forum.makerdao.com/t/eth-c-risk-parameters/6684), another ETH collateral vault with a higher liquidation ratio but a lower stability fee. It passed. We also had a [poll](https://forum.makerdao.com/t/signal-request-increase-eth-a-dc-iam-gap/6603) to increase the ETH-A target available debt, known as the gap from 30 million to 80 million. We had seen that the ETH-A vault was maxed out temporarily in periods of high demands. Increasing the available target debt should reduce the number of situations where that situation can occur. Also, a collection of auction parameter updates had passed. There's quite a lot in there. Nonetheless, some parameter tweaks keep auctions happening efficiently and allow us to auction more collateral in a shorter amount of time. Finally, we had a [poll](https://forum.makerdao.com/t/signal-request-does-makerdao-support-eip-1559/6646/19) to make a statement that MakerDAO supports the EIP1559, which we've discussed over the last few calls. This is an Ethereum Improvement Proposal that should benefit the entire ecosystem.
    - Chris: Except for miners.
    - LongForWisdom: Well, maybe not miners, at least immediately.
- The executive this week will include the ETH-A gap change. It will consist of the auction parameter updates. It won't include ETH-C. Also, we should have [RWA001 onboarding](https://vote.makerdao.com/executive/parameter-updates-and-onboarding-rwa-001?network=mainnet#proposal-detail), which is the 6S facility. I'll let Chris discuss that in detail later.
- In terms of governance alpha or domain updates, we've been continually working on SourceCred. There are a couple of tweaks we want to make, which we're working through at the moment. Work is also continuing on the MIPs portal that we showed off a couple of weeks back. Hopefully, we'll be continuing work on the parameter documentation, specifically around the introduction of Liquidations 2.0. We want to have the major Liquidations 2.0 parameters documented for governance when they need to vote on them. We also discussed improving the readability of MIP0 and helping make the MIPs process more accessible, which led to action points that we're going to be working on over the next few weeks. We had spent a few days brainstorming on the executive copy that goes up with the executive votes attempting to make it more readable and efficient in terms of where important things are placed. Hopefully, we will use that this week and no one will hate it.
- Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### Governance at a Glance

#### Peyton Rose

[06:16](https://youtu.be/C6K33TNTxrc?t=376)

- Three-Point Summary
    - Another week, another ATH for DAI Supply! Currently sitting just north of 2.5B.
    - The most recent rates change has brought annualized revenues to 95M DAI.
    - Despite plenty of volatility in the Crypto market this week, DAI continues to trade extremely close to its peg!
- ICYMI - Announcements
    - Special thanks to tadeo for bringing us [What's backing my Dai?: An interactive visualisation](https://forum.makerdao.com/t/whats-backing-my-dai-an-interactive-visualisation/6813)
    - [February's Governance Review](https://forum.makerdao.com/t/maker-governance-review-february-2021/6803) has been posted! Take a walk through everything we've accomplished in the last month.

[Governance at a Glance - Forum Thread](link)
If you can read over and vote in active threads, that would be much appreciated.

##### Discussions

- [Could Dai be short squeezed like Gamestop?](https://forum.makerdao.com/t/could-dai-be-short-squeezed-like-gamestop/6746)
    - New user, Peterssam, brings a discussion about market pressures on DAI.
- [[NS-DROP] and [SIXS] Implementation](https://forum.makerdao.com/t/ns-drop-and-sixs-implementation/6822)
    - MKR1 asks for an update on Real-World Asset progress, and a discussion about the next steps is underway!

##### Signal Requests

- [Increase the bump / ttl parameters of FLAP auctions](https://forum.makerdao.com/t/signal-request-increase-the-bump-ttl-parameters-of-flap-auctions/6842)
    - Aaron_Bartsch signals some changes to Flap (Surplus) auctions in light of other auction parameter implementations.
- [Adjusting Dust Parameter ](https://forum.makerdao.com/t/signal-request-adjusting-dust-parameter-2021-2/6704)
    - Voting ends soon! monet-supply signals community preference on increasing the Dust (minimum debt) parameter for the 2nd time in 2021. Voting concludes 3/10.
- [Adjust ETH-A DC-IAM-line (2021-05)](https://forum.makerdao.com/t/signal-request-adjust-eth-a-dc-iam-line-2021-05/6688)
    - Polling extended! ultraschuppi brings the 5th signal of the year requesting a larger line for the ETH-A vault type.
- [Adjust WBTC-A DC-IAM-line](https://forum.makerdao.com/t/signal-request-adjust-wbtc-a-dc-iam-line/6807)
    - ultraschuppi proposes raising the WBTC line following a Risk Report on the state of WBTC.

### Smart Contracts Team

#### Christopher Mooney

[10:02](https://youtu.be/C6K33TNTxrc?t=602)

- We didn't do any work on collateral assessments. No collateral to Kovan this week.
- Last week we mentioned that we put MIP21 on Kovan and that we were working on tooling. However, we have developments on MIP45, which is Liquidations 2.0. We received the interim audit reports for Gauntlet, PWC, and Quantstamp. We shared the results with those teams to help them think outside of where they were currently looking. They could get ideas from each other's reports. We also responded to those reports and shipped a release candidate into the liquidations Liq-2.0 branch on GitHub in the Dss repo. All of those audit teams have the responses to their audit reports, and I should also mention that Trail of Bits has started their audit. They have the updated release candidate as well. Trail of Bits is slightly behind our schedule. Also, we're prepping Liquidations 2.0 to go to Kovan for next week. Right now, it looks like we're going to ship it with LINK as the first collateral type. If there are any objections or feedback to that, I've reached out to the various stakeholders. We think LINK is one of the better candidates to test with. There's lots of coordination work happening behind the scenes on Liquidations 2.0 among other teams. There has been a lot of working with the Foundations integrations team toward working on the Keeper and the contracts' reference implementation. Also, marketing and messaging, thank you to everybody. Thanks to everybody that's participating.
- Derek: I can do a quick plug, Chris. There are two MIP submissions. One is the smart contract MIP39 core unit application. This one is in RFC. In this MIP, I cover responsibilities, team philosophy, and our proposed mandate, which covers many topics, including security and safety of protocol, engagement with the community, collateral onboarding, protocol growth, protocol evolution around adding new functionality. We also include research and development along with tooling and automation initiatives. That's the first MIP that defines the mandate, as you guys know. Then, the second MIP generated a whole lot of really great for and against discussion in the forum today. I put it up last night. This is the smart contract MIP40 budget application, which is also in RFC. This documents the budget to support the team mandate. I've included rationale around what went into this proposal, which led to it at a high level. It's for a team of 10 to 14 employees. It covers all operational costs, audits, overheads, those sorts of things. It includes a DAI budget as well as an MKR vesting proposal. Nonetheless, remember, it's still in RFC, so we want as much discussion over the following month to align with what the community is comfortable with. We all want to explain, break it down, and give more explanation where needed before we lodge it for formal submission at the end of the month.
    - LongForWisdom: Thank you, Derek. Chris, did you want to show the Liquidation 2.0 timeline now?
    - Chris: Sure. Let me just share my screen. Wouter, did you want to make any comments in particular about this?
    - Wouter: I think you already mentioned most things.

![](https://i.imgur.com/V4mmXkR.png)

- Chris: Here we are today on the fourth. You can see the final reports for Gauntlet and PWC are expected on Friday. We've got another final report on Monday from QuantStamp. There's Kovan deployment on Monday or next week. This gives you an idea of the array of things happening around Liquidations 2.0. Anyone with governance expertise should fact-check our timeline for governance here.

### Oracle Team

#### Nik Kunkel

[19:44](https://youtu.be/C6K33TNTxrc?t=1185)

- The team has been making a lot of progress lately. In particular, we have a new testing staging framework that is more scalable and thorough than before. We can spin up a new type of staging environment on the fly. In parallel, they have their own chain and their own grafana dashboard, which gives us a much more granular view of testing things before we send them to live. This technical debt has been building up for quite some time. I am thrilled that we were able to knock that down.
- Now, we have four different oracle builds that are being tested in parallel.
    1. First is a patched version of Scuttlebutt that fixes the state size issue. For those of you who recall, back in November, we had a brief oracle outage due to the state size limitation in Scuttlebutt. after it hits a particular state, it just falls over and dies. After doing some research, we realized there is no reason for this state size issue to exist. It's a hardcoded value deep in the Scuttlebutt code. We've bumped up that value. There have been thorough testing to see if anything would break or if any dependencies are limited or affected by the state size. We've been testing this for about six weeks, and everything looks good.
    2. Second is a tool called the Gofer tool. It's made to minimize our dependency on any single component in the Oracle stack. This design's goal is to have redundant components for every piece of the Oracle stack. If ever there is a bug or a single tool fails, it ensures a redundant backup. Now, what is Gofer? It's a pricing tool that we use to get the prices of assets, and it serves as redundancy for an existing tool that we've called sensor.
    3. The third deployment that we've had is a tool called [Sablier](https://forum.makerdao.com/t/core-unit-tools-02-through-sablier-march-12th-17-00/6866). Sablier integrates lib p2p into the oracles. Lib p2p is a peer-to-peer gossip type of network. It's a redundancy to Scuttlebutt. As you see, we have this theme of redundancy, redundancy, and redundancy that's been code complete for quite some time. Sablier is in staging as well.
    4. Finally, we have the Starkware L2 oracle that we did last week. That's gonna be live with DyDx mainnet launch, which is coming up soon. We have a ton of releases coming up.
- Even though we haven't had a problem with the oracles' reliability, I think it's good knowing that we'll have that redundancy on the LP oracle. We still have to go through it with a fine-tooth comb. Currently, there were no critical issues. Therefore, it doesn't seem it'll need a complete redesign or anything drastic like that. They found some math-related issues in terms of overflows or something. We'll have to patch those up. The idea is that we'd fix those issues or make our case for why we don't think that they're important to resubmit to ABDK. Then they would create a final audit report that can then be published to the community. That would be one of the blockers for raising the DC of the LP tokens out of the way. Over time, we've discovered other blockers, such as participation in the liquidation auctions for LP tokens that haven't been what we expected them to be. So far, with the current DC, it's ok. However, raising the DC with the current lack of participation in these liquidation pool auctions is dangerous. we need to come up with a plan around that
- Concerning LP tokens, there's a lot of liquidity in Curve. I've looked from a design perspective regarding what needs to happen. It's actually quite simple; we need to write custom code calling a function that Curve has already made, audited, and battle-tested. I don't think that should take too long.
- We're still working on the Core Unit Proposal. However, keep in mind the gas costs. The foundation has been spending an enormous sum of gas on the oracles. When gas costs are 300 GWEI to 500 GWEI, you can be spending thousands of dollars on gas in a day. In response, we lowered the sensitivity of the oracles. We did this for the vault types with relatively low DAI minted against them because that's safer. Hence, ETH and WBTC were completely untouched. others were lowered from 1% to about 4% sensitivity. Still, given the higher collateralization ratios for many of those assets in our conversations with the Risk Team, it seems this change shouldn't have an outsized effect on the risk that protocol was taking in terms of collateral risk with liquidations. In conclusion, this has cut down our oracle costs concerning the gas expenditure. I don't have hard numbers yet, but it seems to be in better shape by looking at the update frequency. I can give a formal report and strategy plan regarding gas prices fairly soon.
    - LongForWisdom: I think everyone is excited to see the Uniswap tokens and orders to be done on the Uniswap oracles. Great news.

### Risk Team

#### Primoz Kordez

[29:23](https://youtu.be/C6K33TNTxrc?t=1763)

- We agreed to focus on RWAs and Liquidations 2.0 within the coming weeks regarding collateral onboarding mandated actors. This means we have to delay onboarding other collateral for a short period. Therefore, we didn't do any collateral evaluations. However, we did make a few proposals during the previous week.
- We proposed auction parameters, which Maker voters supported. I have reached out to various keepers, such as Keeper DAO, to let keepers know about these changes. Hopefully, this will attract more of them.
- Regarding Niks' concerns, we hope that higher back values resulting in minimum bid increase and lower duration times of auctions could attract more keepers to bid on UNI LPs. We can't be sure until we test it. It's difficult to say whether or not we are confident enough to increase DC. In comparison, we could increase the DC of UNI LPs with liquidations turned off, such as DAI-USDC, where auctions are not a significant concern.
- Marco released his research on wBTC last week; The findings justify an additional increase of the maximum DC for wBTC, currently at 330 million, to a proposed 500 million. This was mentioned in the recent signal request. However, we don't support the onboarding of lower liquidation ratio wBTC vaults because of risks related to the redemption cycle of wBTC and general high wBTC leverage in the Defi ecosystem. More than half of the wBTC supply is used for leverage. Due to lower liquidation, vaults such as ETH-B do not do well in auctions. This is why we proposed a delay of onboarding lower liquidation ratio wBTC until liquidations 2.0 is released.
- I [proposed an urgent executive](https://forum.makerdao.com/t/urgent-executive-psm-usdc-a-usdc-a-dc-changes-1st-march-2021/6794) last week. We had a price drop in ETH. This caused some vault owners to deleverage. A lot of DAI liquidity was taken out of liquid venues such as Curve. Consequently, the PSM DC got fully utilized. Even USDC-A debt exposure began to increase because people were already shorting DAI, expecting us to react. This is why I proposed an urgent increase of PSM-USDC-A DC to 1 billion to distract speculators from minting DAI from USDC-A, which doesn't charge any fees.
- Lastly, we had a Rates Group on Monday. We decided *not* to increase for larger vault types because we had a price correction during the past two weeks. We don't want to overshoot the rates in case bear sentiment may continue. We decided not to propose any changes for the time being. However, we have the opportunity to react during the upcoming month if we begin seeing the continuation of this bull run and increased debt exposure, particularly on ETH-A vaults. We proposed a few rate changes, though, mainly for UNI LP vaults. We saw the fees being charged were not in line with the fees being charged on ETH vaults. Therefore, we decided to increase ETH LP pairs by 1%. We increased those rates because APY on UNI LPs is considerably higher than the current stability fees. The majority of the risk for UNI LP is currently in low participation of keepers in auctions. Hence, a higher fee makes sense from a risk perspective.
    - LongForWisdom: People were wondering if Vishesh will be joining us for the State of the Peg anytime soon?
    - Primoz: I hope so. I have a call with him tomorrow. I will try to get more info on where he's hiding.
    - David Utrobin: There's a version of State of the Peg that's done every week by our very own Tim Black, which is posted along with the Maker Relay.

#### Discussion

- Frank Cruz: Quick question to Primoz regarding WBTC coming to DeFi. How does the Risk Team view this?
    - Primoz: Compared to Compound, we have less wBTC because they have a lower liquidation ratio which is currently increasing. In general, with wBTC, we did analyze counter-party risk. Marco points out that if something goes wrong with Bitgo and consequently with wBTC, it's a substantial systemic risk. The other risk concerns Maker related and the redemption cycle. We looked at how much time it took to burn wBTC and get Bitcoin on their address; It took a few hours, which could be one of the issues for Maker where we could have liquidations. The keeper could want to recycle capital. It takes six hours to get Bitcoin and transfer Bitcoin to exchanges and then convert it back to stablecoin. This is one of our main worries about Bitcoin to wBTC and trying to limit the DC. The other concern is that a lot of wBTC is used for leverage. When you're going to have these liquidations, typically, other platforms such as Compound and AAVE would probably liquidate first because they don't use OSM. a lot of wBTC liquidity could disappear. Then when Maker auctions start happening, it could be a problem for us.
    - Frank Cruz: So you think that Bitcoin is far away from being a part of DeFi, in your opinion?
    - Primoz: No, far from that. This part of DeFi is not on the same scale as Ether.
    - Frank Cruz: Got it, thank you.

### Real-World Finance

#### Sebastien Derivaux

[39:16](https://youtu.be/C6K33TNTxrc?t=2356)

- On the collateral side, we are on starting to review the documents of 6S. MIP21 will be alive very soon. We have progressed in reviewing documents for ConsolFreight. They are similar to NewSilver because both criteria include Centrifuge. There will be a post in the forum next week.
- (Joking)Thanks to the Real World Asset airlines, you can go to [Phuket](https://forum.makerdao.com/t/sb-bfdc-mip6-application-own-and-trade-a-piece-of-paradise-with-this-beachfront-hotel-in-phuket-thailand-managed-by-best-western-plus-a-solidblock-offering/6778). We received another collateral onboarding application for a tokenized real estate project.
- We made progress with the People's Company regarding the negotiation phase to reduce the protocol's risk. It's too risky for us concerning their initial proposition. We are trying to find a method allowing the deal to be easier for us. However, this deal is complex and may take more than a few months.
- There has been much discussion on many prospects for collaterals and the ones already in the pipeline.
- Also, there was work in the accounting infrastructure. I will present this later. However, it's still based on Dune Analytics. We have some problems with Dune because all the codes of functions that don't have parameters are not found in Dune Analytics. It was impossible to get the amount of DAI stored inside the DSR. As we increase the DSR, we want to have this information.
- We would like to use the Query application, but it's still in the early stages. However, it would help make more progress in this direction. If other core units are interested in having analytics on the on-chain data and team up together, it would be an exciting project for the Maker Foundation. However, it does use GraphQL, which is complicated. But if we can work through it, we can put some information into the database and get some helpful analytics.
- Lastly, we continue to work on scaling SPVs (Special Purpose Vehicles), which we use to store real-world assets. But the issue we currently have is how can we be sure that people won't do anything wrong inside the SPVs. Right now, they are managed by the asset organizer. We have some solutions, although this space is very complex. We are working with the Centrifuge asset originator and all the parties to find the best solutions that are also cost-effective.

### Operational Support Update

#### Juan

[43:21](https://youtu.be/C6K33TNTxrc?t=2601)

- Amy is out of the office for the week. Regarding KYM, we haven't had anything yet. We are negotiating with Utraschuppi to get the Euro-DAI declaration of intent. As soon as he gets something going, we will publish it on the agenda. That's in the Know Your MIP section. We haven't had any calls for collateral onboarding because of what Chris and Seb mentioned regarding MIP21. However, Matt Rabinowitz posted the 6S state of the business. It's a very interesting post if you want to check it out. Regarding collaterals, Tadeo has made this cool visualization that Prose mentioned before.
- [Operational Support Weekly Update: March 1-4, 2021](https://forum.makerdao.com/t/operational-support-weekly-update-march-1-4-2021/6848)
- [Synthetix replay from last week](https://www.youtube.com/watch?v=HJh0Hq9wl6Y)
- [Gnosis replay from last week](https://www.youtube.com/watch?v=TehZ-3JbBZk)
- schuppi will soon present the [EURDai Declaration of Intent](https://forum.makerdao.com/t/mip13c3-sp10-declaration-of-intent-eurdai/6766/). Stay tuned for the date! Will publish the agenda soon.
- mrabino1 has posted [6s State of the Business](https://forum.makerdao.com/t/6s-capital-state-of-the-business/4420/) as we wait for MIP21 to go through the finish line.
- More collateral than onboarding, but Tadeo made this cool visualization that shows the [collateral that's backing each Dai](https://forum.makerdao.com/t/whats-backing-my-dai-an-interactive-visualisation/6813).
- You can follow live developments of Core Units on [coreunit.makerdao.network](https://coreunit.makerdao.network)
- If you or someone you know might be a good fit, encourage them to check out [Core Units I Wish Existed](https://forum.makerdao.com/t/core-units-i-wish-existed/6248)
- Core Unit Launch Pod Sessions [#1: Growth Core Unit](https://forum.makerdao.com/t/core-unit-launch-pod-sessions-session-1-growth-core-unit/6711) already out! Check the video.
- Next Wednesday, March 10th, we'll have [Session #2: Governance Alpha Core Unit](https://forum.makerdao.com/t/core-unit-launch-pod-sessions-session-2-governance-alpha-core-unit/6847). Join LongForWisdom, prose11, elihu, and blimpa on their plan to decentralize Governance.
- A little bit of action on the core units that are being proposed. Derek has already mentioned it, but he's proposing himself as a smart contract core unit facilitator. Hopefully, we can have him on one of these calls. Colter has proposed a draft for a swag MakerDAO store. Then we have Kathleen for strategic Marcomms. We also have Gov Comms with David Utrobin and Oracles with Nick. Many things are happening, and we're working towards making this transition as easy as possible. Are there any questions?
    - LongForWisdom: How many core units do we have now which are either proposed or in the process of being proposed?
    - Juan: I think there are four. There are three informal submissions; Governance Alpha, Risk, and Real-World Finance, and then in RFC, we've got Growth. We have a lot being drafted, but I don't know how long they will be in draft form.
    - LongForWisdom: Cool. Nice to see things coming along so well. That's pretty awesome.

### Community Development Team Update

#### Anna Kryukova

[47:53](https://youtu.be/C6K33TNTxrc?t=2873)

- There are not many updates this week under community development. Many community members have been working on drafting more core units that we had done a retrospective on last week during the hackathon. Keep a lookout on the forum for any core units being proposed by community development.

### MIPs Update

#### David Utrobin

[48:38](https://youtu.be/C6K33TNTxrc?t=2918)

[Weekly MIPS Update #28 (March 1st, 2021)](https://forum.makerdao.com/t/weekly-mips-update-28/6791)

![](https://i.imgur.com/SQwpjwU.png)

![](https://i.imgur.com/U96QoGr.png)

![](https://i.imgur.com/s4VZZLB.png)

![](https://i.imgur.com/GBzDv80.png)

![](https://i.imgur.com/IqqgCYK.png)

![](https://i.imgur.com/MMmMkHM.png)

![](https://i.imgur.com/GneFkwU.png)

![](https://i.imgur.com/lEOFdHr.png)

![](https://i.imgur.com/bXu7O6H.png)

![](https://i.imgur.com/GUjqDjz.png)

![](https://i.imgur.com/3cwZYzo.png)

![](https://i.imgur.com/xtDSB7Z.png)

![](https://i.imgur.com/wTfIhhp.png)

![](https://i.imgur.com/WRpmxZg.png)

![](https://i.imgur.com/37GubWm.png)

![](https://i.imgur.com/OG111T1.png)

## Procedural

### February MIPs Submission Review

#### LongForWisdom

[55:50](https://youtu.be/C6K33TNTxrc?t=3347)

- Thank you, David. Since we're back to doing governance cycles, I need to do the MIP submission review. I will briefly go over the same MIPs that they just went over. We have many informal submissions because there are many MIPs this month in the *formal* submissions. We're planning to group some of them as sets based on ease of use since they are functionally related. The first group will be keg MIPs, the streaming payments for the keg and streaming payments module. We're going to group the core unit framework MIPs and the amendments directly related to that. We have four separately; we have the terminating module, liquidations 2.0, parameter proposal groups, Maker DAO multisig wallet management. Some of those will go in individually. We also have the sets of sub proposals from each reward finance, risk, and gov-alpha. They will go in a group link of three groups, one for each of those core units. They all meet their requirements.

## Other Presentations and Updates

### Sebastien Derivaux

#### February Financials

[57:42](https://youtu.be/C6K33TNTxrc?t=3462)

![](https://i.imgur.com/7jmcBeS.png)

![](https://i.imgur.com/R2ZbDJG.png)

- Let's start with monthly results. As you can see, we're making great progress. Let's talk about net interest income. The difference between the stability fee we're earning and DSR is up 92% versus last month, which is insane. This is thanks to loan demand and higher stability fees proposed by the rate-setting group.
- Another interesting item is the net trading income, which is the  PSM. It's increasing as well, which means it's starting to become a new business line for Maker. The only drawback is that currently, we're only getting USDC inflows but no outflows. It is not perfect, but maybe this will soon change.
- Next is net liquidation income. January was quite volatile because there was a lot of liquidation. However, this was nothing compared to February. Let's hope that it doesn't repeat in March because we made a lot of liquidation money.
- Regarding the workforce expenses, it is getting bigger and bigger and will continue to increase. This month was the first interim multisig of monolithic expenses mainly related to PSM. There was also gas asked for smart contract development. It may have been an executive of last week. Nonetheless, there was an incoming donation from the donor. If many people want to give back to the Maker DAO, you can turn in your DAI to the interim multisig. Net income is increasing, and recurring income is a bit less because most of the increase was in trading and liquidation income. Those are not used in the recurring income.
- MKR price was not flat but instead showed a good increase, however not as much as the rest of the financial results

![](https://i.imgur.com/eyellcv.png)

![](https://i.imgur.com/xaS93Xs.png)

![](https://i.imgur.com/ipDqsrs.png)

![](https://i.imgur.com/rzaRLvm.png)

![](https://i.imgur.com/kyuFRWo.png)

![](https://i.imgur.com/9cRG27R.png)

![](https://i.imgur.com/n2bAJ8N.png)

- Someone: Sebastien, what did you say the target was for that CET-1 in banks? What do they typically shoot for?
    - Sebastien Derivaux: Banks should aim for 8%, but I wouldn't make any comparison at all between those two numbers because I didn't check insolvency in how to write the numbers. Obviously, when they made the norms, they weren't crypto-asset loans. Therefore, it's difficult to estimate, but you can try to use the leverage ratio. It should be 3% for banks. We're still a lot below that, but I don't think our business is as risky as a bank. I'm not sure if that's something we need to work on. I try to see the brokers' model, such as interactive brokers, because they have the same balance sheets. They are making a lot of loans backed by stocks and bonds. Therefore, it's quite the same issue. It wasn't evident what models they were using, and there is not much to report. Still, obviously, their leverage ratio was higher. There is legislation in the US that if you want to be a broker and give your customers loans, you need to have a leverage ratio of 3%.

![](https://i.imgur.com/i5Zri4A.png)

![](https://i.imgur.com/R8u5q4P.png)

#### Discussion

[01:15:49](https://youtu.be/C6K33TNTxrc?t=4547)

- Sebastien Derivaux: Does anyone have any questions or statements to make around this presentation?
    - Matthew Rabinowitz: Yeah, oracles make up more of that just because of the cost of gas to update them.
    - Sebastien Derivaux: Yeah, I've asked Nick about that just before the meeting. He didn't have a clear view, but it could be in the ballpark. Obviously, it depends on the price of the gas, and therefore it can change dramatically.
    - Matthew Rabinowitz: If the amount of DAI outstanding was ten times greater, how much of these costs would be ten times higher, or what percent they are?
    - Sebastien Derivaux: Let's say ETH and gas price remains the same. Expenses could end up being the same. Obviously, that doesn't work in real life, but you increase the expenses because you have more income. In conclusion, it's possible.
- Matthew Rabinowitz: My point is it's a good exercise for every core unit team to ask for the budget today and ask what if everything grows 10X or another 10X. In those extreme cases, how much budget will you need to sustain? Oracles are probably one of the greatest examples where their budget really shouldn't change unless their business model changes. Marketing and real-world finance may change, but it's a question for each unit.
    - Sebastien Derivaux: It's super early because we don't have all the core units proposed yet.
    - Juan: Matt, I was going to say the opposite; an oracle is the only one expected to go up if DAI is backed by other types of collateral types relative to smart contracts. It could go up to an estimated multiple of 3X. That would be healthy, at least for Brian and Chris, and the rest could grow slightly more. Still, I would expect the oracle parts to be the one that grows the most.
    - Matthew Rabinowitz: Yeah, the operating expenses of the protocol aren't that much. The cost is the oracle itself if we keep everything the same. Obviously, we don't want to do it because we want to grow and do awesome things.
    - Juan: Not so much yet.
- Brian McMichael: I want to mention that smart contracts numbers came out. They factored for 14 devs tops, giving us space to add 4 or 5 new ones. If we do wanna grow past that, the plan is to prepare a package like one of the headcount packages that we can reintroduce to governance to approve at that time.
    - Sebastien Derivaux: Yeah, it's a good point. It's only the budget I took. Maybe some budgets have some room to grow.
- Payton: I'm taking a step back to the leverage ratio stuff. In your assessment, are we in a good spot? We're about halfway to raise the surplus buffer to 30 million. I'm also curious if maybe including strategic reserves would help that number at all?
    - Sebastien Derivaux: Yes, that's a good question. I didn't find any clear answer yet. Actually, I was more focused on the liquidity side because there are two risk issues when you're doing banking. One is solvency; when your surplus buffer is negative, that's not good. You're minting and unsure about the feature and liquidity. When you go to your bank and say I want my money back, you can end up bankrupt. My first assumption was that it was impossible in Maker because, obviously, DAI is not redeemable for anything except at emergency shutdown. I found out that it's not correct at all. You can't redeem DAI, but what happened is that price of DAI change when you look at your bank account. You've got one dollar in your bank account. It's always one dollar. There is not one dollar beyond that because banks don't have this one dollar. It's a loan to buy a house or anything else; usually, they have some liquidity reserves. In our case, liquidity reserves will be strategizing assets, mainly the PSM but other vaults, if you convert them to the PSM. Having this buffer is a curse and blessing. It's a curse because we take the regulatory risk of USDC. It's a blessing if all the DAI farming stops tomorrow and most people using DAI to farm want to go to USDC because they prefer USDC for any reason. There will be a lot of redeeming, and this buffer will help us to take the heat. We don't have to increase the stability fee in a rush or stuff like that. Even if you increase stability fees, it takes at least 2 days to be increased, probably more because the price of DAI can go below one dollar for maybe one week, which is not very good for our customers. Going back to the solvency issue, it's difficult to define a good number; what is safe, or what is not? I think it truly depends. At 1%, we will be safe if regulation 2.0 is solving most of the issue, and maybe we're even safe at a 25% alpha percentage. I don't know. I don't have the number on top of my head. But if we had 1% last year, we would not have met the Black Monday event. However, no promises.

#### Links from Chat

- [MIP6 Uprets SolarX REITS Mortgage Loan](https://forum.makerdao.com/t/mip6-uprets-solarx-reits-mortgage-loan/6718)
- [Op Support Weekly Update](https://forum.makerdao.com/t/operational-support-weekly-update-feb-22-25-2021/6736)
- [Community Call: Opolis for MakerDAO Contributors and Teams](https://youtu.be/DB00V5RxAT4)
- [MIP39 Core Unit Framework](https://forum.makerdao.com/t/mip39-core-unit-framework/6096)
- [Road to Dao: Core Unit Op Model](https://forum.makerdao.com/t/road-to-dao-the-core-unit-operating-model/6105)

## Common Abbreviated Terms

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

`OSM`: Oracle Security Module

`LR`: Liquidation Ratio

`RWA`: Real-World Asset

`SPV`: Special Purpose Vehicle

## Credits

- Artem Gordon produced this summary.
- David Utrobin produced this summary.
- Gala Guillen produced this summary.
- Jose Ferrari produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
