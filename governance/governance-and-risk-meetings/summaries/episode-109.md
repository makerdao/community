# Episode 109: September 10, 2020

## Agenda

- [00:00](https://youtu.be/gWnh4KptWbk): Introduction
- [01:42](https://youtu.be/gWnh4KptWbk?t=102): Smart Contracts Team Update
- [03:20](https://youtu.be/gWnh4KptWbk?t=200): Oracles Team Update
- [09:34](https://youtu.be/gWnh4KptWbk?t=574): Risk Team Update
- [15:22](https://youtu.be/gWnh4KptWbk?t=922): Governance at a Glance
- [19:00](https://youtu.be/gWnh4KptWbk?t=1140): September MIPs Submission Review
- [33:47](https://youtu.be/gWnh4KptWbk?t=2027): State of the Peg with Vishesh Choudry
- [45:20](https://youtu.be/gWnh4KptWbk?t=2731): Open Discussion - Liquidations
- [56:20](https://youtu.be/gWnh4KptWbk?t=3380): Real-World Assets and Prioritization of Collateral Onboarding

## Video

<https://youtu.be/gWnh4KptWbk>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:05](https://youtu.be/gWnh4KptWbk?t=5)

- Hello, everyone. Welcome to the MakerDAO Scientific Governance and Risk Meeting number 109, taking place of September the 10th at 16:00 UTC. My name is LongforWisdom, I'm the MakerDAO governance facilitator and I'm joined currently by 36 people. The agenda for today is a little bit lighter than usual but we've got some discussion points. Feel free to interrupt if you have something to say.
- Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Domain Team Updates

### Will Barnes

#### Smart Contracts Team Update

[01:42](https://youtu.be/gWnh4KptWbk?t=102)

- Just a few things changed in terms of risk parameters this week. The Base rate will remain unchanged this week at 2% and TBTC will be whitelisted on the ETH/BTC Oracle. There is an ongoing signal request to increase the USDC-A debt ceiling on the forum. The result of this will be included in tomorrow's executive. In terms of MIPs, we'll discuss later. Dark Spell is in a formal submission. We have a proposal to onboard the four members of the smart contracts domain team: Lucas, Brian, Chris, and myself that was submitted yesterday. And last week a proposal to off-board Mariano MIP7c4. And that's all I have unless anyone wants to add. There's something to discuss the hold up in collateral types that will be discussed later. But that's it.

### Nik Kunkel

#### Oracle Team Update

[03:20](https://youtu.be/gWnh4KptWbk?t=200)

- Nik: Kind of brief this week. We had a whitelisting proposal this week to whitelist TBTC on the ETH-BTC Oracle. They were already whitelisted before on their previous deployment. They had a bug and they went back and fixed it. So this was more of a swap between their old and new address. Still, surprising to see one voter with 500 MKR voting against it. Even more surprising to see their voting history, they voted on the first poll to whitelist them in the first place. Not sure what's going on but maybe they want to bring that up in the forum
- The much more important issue is that last week we deprecated the Oracle V1 contracts. These were the ones used in Single Collateral DAI. We shut down Single Collateral DAI and warned people that after a healthy amount of time after it got shut down we will be shutting the Oracles down as well. We gave people over six months as a heads up and had confirmation from multiple people that they are fine. Other people didn't respond for a few months. And low and behold, we have our first casualties. OPYN sold put options against ETH that don't expire until June 2021 and they have no way of changing which Oracle these are pointed to. If they can't use Oracle v1 Medianizer, they're screwed. I discussed with them what the options are and what if we were to whitelist Oracle V1 on our current Oracles. Then anyone could poke the V1 contract. Then anyone could pay the gas price, call the function to update the price on V1 contract and V1 contract will just read from V2 Oracle. It's a little bit controversial because part of us selling Oracle as a service. If people want to use our data they have to get whitelisted versus this which lets people go around that. If anyone can call this function, and it's not something we can change because the contract has been deployed, means that anyone willing to pay the gas price can get the price anyway. That's something the community needs to weigh. I think it's more of a PR issue because we don't want to be the ones to let another protocol hang out to dry. And if it's until June we can see this as a PR move.
- Last week's executive proposal went through. MyCrypto and Argent are light feeds that are supplying prices to the Oracles.
  - LongForWisdom: If we do whitelist the V1 Oracles, we can up-whitelist them again fairly easily in case things go bad?
  - Nik: That's correct. Once those options expire in June we can un-whitelist them and in the meanwhile monitor blockchain data on how many people are using that V1 Oracle. If we see a big spike in usage, we know it's parasitic behavior and we'll know who those people are.
  - Sam MacPherson: Do they need the Oracle the whole time or would it be sufficient to get access to the Oracle for June?
  - Nik: They need it the whole time because options are collateralized and can get liquidated if the price drops low enough on the underlying. They posted a proposal in the Oracle section in the forum, you can ask them more specifics there.

### Primoz

#### Risk Team Update

[09:34](https://youtu.be/gWnh4KptWbk?t=574)

- This week we published 2 collateral risk evaluations. One was posted by our independent analyst, Will, for LINK. We posted one for COMP. There was also another for Loopring, which didn't pass. Will suggested a 5M DC, 2% RP, and 175 LR as the risk parameters for LINK.
  - I commented that these risk parameters are conservative. The analysis shows that LINK is very liquid especially compared to other assets we've looked at in the past. If you look at yEarn vaults there is a possibility they may use LINK in one of them using Maker for their strategy. We could go higher, I think it's fairly safe, but that's up to governance. We can lower the debt ceiling initially and then increase in time based on behavior and risk exposure.
- A seven million DC for COMP is fairly liquid. What's particularly good is the DEX volume which bodes well for liquidations. 3% RP LR 175.
- Marko and I [published research for cUSD and cDAI](https://forum.makerdao.com/t/research-ctokens-as-collateral/3979). I suggest checking it out. It's interesting to model the DAI price effects from those assets. The main strategy now in Compound is to recycle DAI, but enabling cUSDC is a more interesting strategy where people re-leverage through Maker vaults, achieve nice yields, and push DAI price down.
- We're also focusing on a different rate-setting approach which I wrote about in the past coming up with solutions that benefit governance, make it more agile and less complex. There are inconsistencies with how we set rates and apply RPs.
- We're going to apply some tests so we can better understand the vault actions. My idea to have more community participation in the risk related organization as well as understand the current risk exposure of vaults. We'd ideally want to know what users are doing with DAI before we're setting rates. I'll provide tests and ask for feedback if there is an opportunity to help us out and possibly become a contributor to the risk team, which is currently understaffed.
- Lastly, there were two posts initiated this week:
  - [Lowering auction box 50 and potentially lowering ttl](https://forum.makerdao.com/t/signal-request-should-we-change-box-ttl-auction-parameters/4023), this opens for on-chain vote beginning September 14th.
  - [Signal for DC on USDC-A vault](https://forum.makerdao.com/t/signal-request-should-we-increase-usdc-a-debt-ceiling/4068/) we've seen more minting because DAI price is trending higher. Today we've seen a couple of strategies for minting DAI through USDC and getting better yields. Ideally, we'd want to diversify from USDC to other stable coins and we wanted to see the USDT and PAX demand. Not sure how interesting those newly launched vaults are for arbitrageurs, it makes more sense to increase USDC DC. If this passes, it goes into the September 11th executive.

## Governance

### LongForWisdom

#### Governance at a Glance

[15:22](https://youtu.be/gWnh4KptWbk?t=922)

- [Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84): If you have the time to read over and vote in the active threads, that would be much appreciated.

##### Discussions

- [Discussion - MakerDAO in 5 years](https://forum.makerdao.com/t/discussion-makerdao-in-5-years/3804)
  - SebVentures discussing different changes in the DeFi ecosystem and MakerDAO’s role in it.
- [Working Group: Autonomous MakerDAO](https://forum.makerdao.com/t/working-group-autonomous-makerdao/4036)
  - LongForWisdom introduces a largely community working group making an effort to push the decentralization of MakerDAO.
  - The autonomous MakerDAO working group, which is working on pushing the DAO more towards decentralization.
  - We're focusing on the responsibilities of a facilitator and getting sign off on that from governance. We are also improving to tidy up the MIPs process and make it more streamlined while working on the Governance cycle.

##### Signal Requests

- [Should we increase USDC-A debt ceiling?](https://forum.makerdao.com/t/signal-request-should-we-increase-usdc-a-debt-ceiling/4068)
  - Primoz proposes an urgent signal request to raise the USDC-A debt ceiling. Will be included in the executive on Friday, September 11th.
- [Should we change box & ttl auction parameters?](https://forum.makerdao.com/t/signal-request-should-we-change-box-ttl-auction-parameters/4023)
  - Primoz posts a signal to gather input on the box and `ttl` parameter.
  - Semi-urgent poll which ended on Friday, September 11th.

##### Initiatives

- [Collateral Calls - Calling all Projects!](https://forum.makerdao.com/t/collateral-calls-calling-all-projects/3715)
  - juanjuan sets up a signup thread for projects wishing to present on the bi-weekly collateral call. Know any potential collateral partners that want to present? Refer them here.
- [Collateral Status Index](https://forum.makerdao.com/t/collateral-status-index/2231)
  - Confused about the current status of the various collateral types that have been discussed recently? Check out this post to find out the status and current position of each within the onboarding process.
- [Weekly MIPs Updates](https://forum.makerdao.com/tag/mips-update)
  - charlesstlouis is producing a weekly update on the world of MIPs.
- [The Official Welcome Thread](https://forum.makerdao.com/t/the-official-welcome-thread/771/4)
  - A welcome and introductions thread. Not strictly speaking governance, but if anyone new or old wants to introduce themselves, now is your chance!
- [Forum Navigation Index](https://forum.makerdao.com/t/forum-tag-index/648)
  - An index that aims to make navigation and browsing easier around the forum.
- [Practical Guide to the Signaling Process](https://forum.makerdao.com/t/practical-guide-to-the-signaling-process/2623)
  - LongForWisdom writes an updated guide to the signaling process, highlighting conventions to follow.

## MIPs

### Charles St. Louis

#### Weekly MIPs Update

[19:00](https://youtu.be/gWnh4KptWbk?t=1140)

![Intro](https://i.imgur.com/q9jzaCu.png)

![Weekly Activity](https://i.imgur.com/GvWk89K.png)

![Collateral Onboarding Updates](https://i.imgur.com/twkCxS3.png)

![Proposal in the RFC Phase](https://i.imgur.com/ruZeLY2.png)

- Would like to highlight a few of these:
  - MIP13c3-SP4- Declaration of Intent for off-chain Real-World-Asset collateral onboarding for DAI.
  - MIP 22 Collateral Onboarding for Centrifuge.
  - MIP 23 Domain Teams and Their Roles in Those Teams.

![](https://i.imgur.com/uhHaq7M.png)

- Offboarding of Mariano and Cyrus.
- Wil Barnes, Lucas, Chris Mooney, and Brian from Smart contracts will be onboarding.
- Risk Domain Team onboarding is for Primoz.
- Rich's offboarding didn't pass and it's worth noting a process improvement. I believe this should change so mandated actors should be able to offboard themselves voluntarily, to not go through Governance. The caveat is communication to the community in the forum or as a sub proposal. I have an action item for MIP0 and MIP7 to change for offboarding.

![](https://i.imgur.com/v88FSXG.png)

##### Dai Flash Mint with Sam

[25:52](https://youtu.be/gWnh4KptWbk?t=1552)

- The Flash mint module is a request for the Smart contracts team for building, approved ideally via Governance. What is does is allow DAI minting for arb opportunities for what they want. As long as it's returned with a fee they get to keep the excess similar to flash loans.
  - Improves market efficiency
  - Democratized of arbitrage
  - Security exploits found quicker, making DeFi stronger
  - A fee provides as an income source
  - DC required
- I got a little bit of feedback and it's in the final phase. Additionally, I wrote an initial implementation for no UI but should be easy to add.
  - Brian McMichael: expect a PR with tips and comments to help usher it towards production-ready.
  - Sam: Thanks!
  - Akiva: Speaking of feedback, if anyone has comments on why they didn't vote for forward guidance, message me and we can fix the proposal to improve it in cycle moving forward.

##### Collateral Onboarding

[29:00](https://youtu.be/gWnh4KptWbk?t=1737)

- Matthew R: Quick plug for RWA and onboarding credit tenant leases as collateral for DAI.
- LongForWisdom: Good point. I should give Juan a chance to talk about it.
- Juan: Yesterday we had a collateral onboarding call with one inch and trust token. Next week Lucas and Matthew from 6s capital to discuss real-world assets. Sept 16. Agenda in the forums. Then Stani from Aave and Tyler Winklevoss from Gemini. Join us.
- Lucas Vogelsang: Quick on MIP13-c3-SP 5. or, in English, a declaration to onboard centrifuge assets. The backstory is since MCD went live we've had 4 MIP6 that were greenlit by the community. We've been working with the community to address liquidations, DC, SF, and how we build contracts, how they interact. Now we believe it feasible to properly onboard them. The DOI outlines guidelines for developing this process. They function slightly differently than vanilla ERC-20 tokens in MCD. This MIP is a predecessor for a MIP and eventual executive to see how we can work with domain teams. Centrifuge is happy to step in and handle that work as much as possible.

### MIPs submission review

- Nine proposals were submitted for September. All of them are fine. I agree with Charles that offboarding voluntarily is better, voting on it is not effective for Maker. Happy for Charles to deal with that outside of governance.
- Everything else goes to inclusion on Monday.

## Other Presentations and Updates

### Vishesh Choudry

#### The State of the Peg

[MCD System Stats](http://daistats.com)
[MCD System Stats Alt](https://catflip.co/)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)
[Maker Vault Stats](http://makervaults.descipher.io/)

[33:47](https://youtu.be/gWnh4KptWbk?t=2027)

![Peg](https://i.imgur.com/HLv3EkA.png)

- DAI peg trending downward with ETH going up around the 1st of September. There was tremendous liquidity in the market at the time.
- As ETH price fell and we saw liquidations or unwind on different platforms, we saw drying up of liquidity in the moment.
- As certain positions unwound, more Dai was on the open market. A huge chunk of the trades that occurred last week was on Uniswap.

![VWAP](https://i.imgur.com/BoH4780.png)

- Proportionally Uniswap of volume versus oasis and DYDX which typically dominate a larger part of the volume.

![USDC price](https://i.imgur.com/0Pf7LH2.png)

- A large chunk here of DAI<->USDC price is on Curve. We saw a price run up to 1.02 1.03.

![USD price](https://i.imgur.com/0Pf7LH2.png)

- DAI<->USD echoes that with a fair amount of variability on price.

![USDT price](https://i.imgur.com/UOOknE7.png)

- DAI<->USDT is very similar to USDC.

![Dai Stats](https://i.imgur.com/xAMPNrJ.png)

- Supply is at ~430 million DAI. 340 from ETH. 3.4 from BAT. 40 million USDC-A. 47 mill from WBTC. smaller amounts from other collateral types.

![USDC-A supply](https://i.imgur.com/5gIF9rk.png)

- USDC-A low utilization for the better part of the month. in the past few days, it shot to 40 million.

![WBTC Supply](https://i.imgur.com/5gIF9rk.png)

- WBTC was steady at 80 million but over the last few days as it went > 60 > 47 million. Many positions were cleared out.

![ETH-A supply](https://i.imgur.com/IgDeG8n.png)

- We saw a trend for ETH-A supply trending up and then run down to clear out. What was going on? a few things:
  - ETH price dropped, some liquidations, but they were small. Compared to 80 million or so clearing out over three days.
  - Much of that move wasn't liquidation it was refinancing or unwinding.
  - Repayments of DAI brought the supply down.

![yETH vaults](https://i.imgur.com/IgDeG8n.png)

- 17 million in yETH Vault pools.

![Curve Dai](https://i.imgur.com/rUKlSE2.png)

- 32 million DAI in Curve deposits.

![Compound Dai](https://i.imgur.com/AlW3jn0.png)

- About 140 million excess supply in Compound.

![yETH example-large unwinding vault](https://i.imgur.com/flvzIcF.png)

- Large holders, 70 million in the SushiSwap liquidity pool. 37 million in the Uniswap pool. 13.6 million in Balancer, 13.1 million in Curve. Smaller amounts are in known smart contracts.

![](https://i.imgur.com/YyNMKAo.png)

- Thread here is a large quantity of movement out of Uniswap into SushiSwap liquidity pool. In addition, a fair amount of repayments on platforms such as COMP are undergoing farming where people were supplying excess DAI.

![](https://i.imgur.com/TBasYpu.png)

- [This is an example](https://defiexplore.com/cdp/13972) of a large vault with yETH positions. On the 4th, there was a series of repayments in 2.5 million DAI each, unwinding to a safer CR. We've seen yEarn's halt in deposits and mintings after which was paused and rounded down. This contributed to a reduction in supply minted from ETH.

![](https://i.imgur.com/bPglqEt.png)

- All in all that was trading volume and liquidity for DAI drying up. You see a lot of the movements counteracted on price impact. But on something like the USDC pair, it's not the same phenomenon. So prices went up a bit. But again, you can tie that back to liquidity drying up and DAI supply going down.

#### Farm Opportunities

[42:23](https://youtu.be/gWnh4KptWbk?t=2543)

- Kiarahs: It looks like the move is farming driven but if anyone wants to expand on that I would appreciate it.
- Vishesh: Given the SF value, it's more likely for native asset price and farming yields to be driving. Liquidations as well. Decreased apps for farming yields all contribute to the movement of DAI supply minting and collateral locked as well as SFs. By and large, people are more concerned with liquidation and losing access to large yields. I think that drives the decision process more so than I pay 2% more per year for holding positions.
- Primoz: Marko did an analysis of unwinding those vaults migrated to Aave borrowed USDC and farmed Sushi. If SF had an impact? I think not because borrowing on Aave is 4%. It's a farming yield versus increased SF when considering having an effect.

## Open Discussion

#### Liquidation

[45:20](https://youtu.be/gWnh4KptWbk?t=2731)

- Primoz: There was a poll a month ago in support of lower LR for ETH, which would be on ETH-B vault with intention of charging fees and increasing DAI supply via opening new vaults or attracting existing users to mint more DAI. The RP debt ceiling wasn't voted on and the final vote leads the risk team to bring this up for discussion. If we include lower LR for ETH-B vault, we'll be able to charge more money but potentially have more risk because of lower CR. We need a consensus for what's the longer-term strategy. ETH-A vaults are using DAI to farm it and will be interesting to move toward ETH-B. If we lower LR to 130, they'll be able to mint more DAI and boost yields over 50%. When assessing risk on DC, with lower CR there is a higher probability of losses. With low LR, there are OSM risks. If ETH drops rapidly, people could dump ETH on MRK on the lowest LR using vault OSM price and they would mint as much DAI as they could, thereby making an instant profit. I want to highlight that whatever DC we choose, we need to be utilizing it as much as possible to minimize OSM risk. I propose starting with lower DC and increasing it and always utilizing it as much as possible. We can calculate RP similar to ETH-A. The calculation might be biased because it's hard to assess OSM risk, so governance might want to charge higher rates. We should test how rate-sensitive our users are to have more feedback. Going forward we intend to address all of this in a post. The ETH-B vault will be heavily utilized because it's good for yield farmers.
- Matthew Rabinowitz: Is it possible that if someone issues DAI in the previous hour we can have LR to be high to offset that OSM risk.
- Will B: It would be quick difficult to do that.
- Brian M: It would involve changing some core contracts. We could consider it in Liquidations 2.0. We'll have a different pattern in a few months.
- Matthew: An idea is to have a severe penalty if we see someone with an intent to exploit the system.
- Nik: It's exploring the discrepancy in price if ETH drops suddenly by 20% but the current price hasn't updated. You could borrow more DAI than your ETH is worth. The exploiter isn't expecting to get any of their collateral back.
- Kurt: For these situations, we have an upper limit of DAI required to cover outstanding auctions, so there's a ceiling on how much can be liquidated at once. It at least limits how damaging it is to the system.

#### Real-World Assets and How the Teams Prioritize Onboarding Collateral Types

[56:20](https://youtu.be/gWnh4KptWbk?t=3380)

- Matthew R: This is Matt from 6s Capital and we're putting forward a declaration of intent to bring on real-world assets. We're putting together a scalable legally compliant way to bring on credit tenant commercial leases where we know the credit behind it is using the same mechanism used today for putting today's statutory trusts.
- LongForWisdom: I think the intention is to have a discussion on why RWA hasn't been implemented yet and how the teams are prioritizing the collateral onboarding process.
- Planet_X: I've been noticing that we're greenlighting many collateral types but the actual implementation is lacking. Where is the domain work for the collateral? What is holding up the process on the domain side?
- Nik: There are 3 domain teams right now, almost all are foundation employees and collateral onboarding isn't our only job. Collateral onboarding and governance takes a significant amount of time but not our only job. There's a lot of things the team is working on so it's limited by domain teams bandwidth. If we want to onboard more collateral, we need to have more domain teams. I talked about our methodology in the forum for evaluating what work do we want to do next. Before that post, there was a lack of transparency. The factors we take into account are: how much DAI can be generated from a given collateral type? How difficult is it to onboard it?
- Chris_p: We ask why this isn't getting done sooner and your answer is "I work for the foundation."
- Nik: Given our limited input we have to prioritize what collateral can we onboard that will generate the maximum amount of DAI supply? The community greenlit a lot of security & LP tokens but compared to vanilla tokens, the work required to onboard them is significantly higher with DAI supply potential being unclear. We have to prioritize low hanging fruit like LINK, that are highly liquid and we can expect similar pay off to other tokens we've onboarded. Whereas security tokens can take three months to onboard. These are tradeoffs we have to make.
- Lucas Vo: KNC, ZRX, MANA generated 500,000 DAI in debt, it will take a hundred more of these to generate 50 million. RWA can generate new DAI and add diversified uncorrelated DAI that has many other advantages. How can we as a community move forward if we just keep taking small familiar steps?
- Nik: I agree that KNC, ZRX, MANA were kind of flops but the work to add them was very little. We're not saying we won't add security LP tokens but we're focusing on the reasoning behind adding them. If we went through the top ERC20 tokens, we can add all the low hanging fruit by November, and then we can look at adding LP and security tokens as things slow down by the end of the year.
- Lev: The way to frame it is not asking why is there a pile-up of greenlit collateral types that haven't been assessed by risk teams but rather should we have a discussion about priorities and making sure we're making the most efficient use of domain team resources. In the near future, it will always be easier to add mid-market cap ERC20 tokens. It will continue being low hanging fruit forever. Eventually, we'll need to bite the bullet and look towards other potentially much more scalable collateral types. There's a lot more to do there but maybe it's time to raise other priorities and when is the right time to start looking at these other collateral types. When we needed emergency action to fix the DAI peg, it invigorated a lot of activity around adding new collateral types, like WBTC, which turned out to be a success. Can we do a similar kind of initiative to kick start adding real-world assets and raise those priorities?
- Nik: I agree and its all a balancing act of short versus long term prioritization.
- Will R: Another consideration for RWA is we have to adapt other practices like the risk framework. We'll need to consider how we will assess risk premiums, sources of information, OSM. It will take time and effort that goes into adaptation to RWA and we have some ideas that I'll bring to the table from working in banking for a long time. Data sources and properly assessing the risk will be important.
- Lucas Vo: Centrifuge has been working with Maker for a while and I propose moving forward with collateral onboarding on a small scale with reduced complexity. The same way as Single Collateral DAI was launched with a small debt ceiling with one asset and we spent years managing ETH as a collateral type. We can learn a lot by taking these small steps and do it at a safe scale as the core of MIP13 declaration of intent which I'd love feedback on and to solidify with everyone.
- Will R: Sounds good. Most important is capturing data as soon as possible so we work with real data rather than theoretical and we can measure expectations. Start conservative and scale accordingly.
- Lucas Vo: We talked to credit people in the traditional financial world and onboarding RWA will give access to collateral types that are several times the size of our current DAI supply. If we figure out how to do this safely we won't have an issue with DAI supply. We'll have plenty of borrowers willing to pay SF generating us revenue and allowing us to bring back the DSR and normalizing the system. the peg is broken at the moment and adding this baseline of a stable supply of DAI will drastically change DAI market because of diverse collateral types.
- Planet_X: Is this a feasible solution? Is possible to fast-track Centrifuge collateral with a low debt ceiling and see how it plays out?
- Nik: We could find a way to onboard centrifuge security token if we're not onboarding any other collateral types.
- Primoz: We could fast-track it and use a general risk model for crypto assets. If we have the infrastructure in place to monitor current exposure, particularly liquidation infrastructure. But one risk with this collateral type is legal. We have 3 domain teams now and it wasn't discussed who would cover the legal risk.
- Will R: Yeah I can cover that, we discussed the initial proposal. At the moment there's a legal team at the foundation. The feedback is that the risk team would assume that that legal work would be done but the legal team but I'm not sure at the moment.
- Lucas Vo: We've been working a lot on this topic and out how to do this. We've been working with lawyers and I outlined how to do liquidations without having a sale of securities within Maker. More info will be on the forum. To address that it would require 3 months of work, I hope that it will not put a hold on smart contract or domain work to move these assets forward.
- Mathew: I agree. The community needs to weigh the maximum impact of bringing DAI to the market knowing that RWA teams have spent a lot of time and effort preparing for this process.
- Lev: In light of this discussion on priorities, should we have a signal request on this?
- LongForWisdom: I think that would be a reasonable use of a signal request process.
- Amy: We are just lacking the staff needed to work on this. There are grants available if anyone is interested in doing this work. Please do reach out because we've been looking across the community for more help.
- LongForWisdom: I look forward to a discussion on the forum, thanks to everyone for coming.

#### Links from Chat

- https://forum.makerdao.com/t/mip10c9-sp7-whitelist-maker-v1-medianizer-on-ethusd-oracle/4061
- https://forum.makerdao.com/t/governance-at-a-glance/84
- https://forum.makerdao.com/t/collateral-status-index/2231
- https://forum.makerdao.com/t/mip23-domain-structure-and-roles/4021
- https://forum.makerdao.com/t/weekly-mips-update-14/4028/3

## Common Abbreviated Terms

`MCD`: The Multi-Collateral Dai system

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`EV`: Executive Vote

`GF`: Governance Facilitator

`GP`: Governance Poll

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

`OSM`: Oracle Security Module

`LR`: Liquidation Ratio

`RP`: Risk Premium

## Credits

- Anna Alexa K Produced this summary.
- Artem Gordon produced this summary.
- Gala Guillen produced this summary.
- Tim Black produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
