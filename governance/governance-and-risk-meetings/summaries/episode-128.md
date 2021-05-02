# Episode 128: February 11, 2021

## Agenda

- [00:00](https://youtu.be/WY06KzgAjRI): Introduction
- [04:40](https://youtu.be/WY06KzgAjRI?t=280): Governance at a Glance
- [10:25](https://youtu.be/WY06KzgAjRI?t=625): Smart Contracts Team Update
- [21:58](https://youtu.be/WY06KzgAjRI?t=1318): Oracles Team Update
- [35:43](https://youtu.be/WY06KzgAjRI?t=2143): MIPs Update
- [46:05](https://youtu.be/WY06KzgAjRI?t=2766): Risk Team Update
- [50:47](https://youtu.be/WY06KzgAjRI?t=3047): Real World Finance Update
- [53:32](https://youtu.be/WY06KzgAjRI?t=3212): Operational Support Update
- [01:06:58](https://youtu.be/WY06KzgAjRI?t=4018): Community Development Update
- [01:07:45](https://youtu.be/WY06KzgAjRI?t=4065): Open Discussion

## Video

<https://youtu.be/WY06KzgAjRI>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/WY06KzgAjRI)

- Hello everybody, and welcome to the MakerDAO Scientific Governance and Risk Meeting number #128 taking place on Thursday, February 11th at 17:00 UTC. My name is LongForWisdom. I am the governance facilitator at MakerDAO.
- As usual, we've got a bit of an agenda to get through. We've got updates from the people at MakerLand. Please feel free to interrupt and voice any opinions or comments. We would love to hear from you.
- I will start with governance updates. We had ten polls up last week. We had debt ceilings and Instant Access Module polls for six assets that passed. We had onboarding polls for LINK-ETH UNI and UNI LPs that passed. The interim DAO budget poll had passed, and we had the rates proposal poll that passed. We should see all of these in the executive tomorrow.
- Last week's executive has passed earlier today. We saw less participation than usual in both the executive and the polls. Presumably, because the crisis of gas on the Ethereum network is now massive, this is something we'll be keeping an eye on going forwards. We're starting to get concerned about the prices and impact on voting and other parts of the Maker protocol. I spoke to Smart Contracts this week regarding emergency measures to take if we start having problems. There should be avenues we can look into if things get unconscionably bad.
- Happy news; The MIPs portal that Juan and Dspot have been working on is coming along well. It's up at [mips.makadao.com](mips.makerdao.com). However, this is a pre-alpha version. If you want to get an idea of what it looks like, go and have a look. There's also a feedback button that you can press if you have any feedback. We're expecting this to get a lot more polished within the next few weeks.
- Concerning onboarding, we continue to get Prose and Eli up to speed. Eli's going to have a lot more time soon, and we should begin to see him around more. Prose and Eli both helped set up the weekly polls last week as well as this week. We're performing the knowledge transfer stuff because we need to get the redundancy in the governance domain. The documentation continues to move forward. I will merge some PSM documentation by linking it in several of the upcoming polls that concern the PSMs.
- Finally, as a reminder, the governance core units MIP set proposals are up on the forum. I would appreciate it if people could read them and give any feedback.
- Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### Peyton Rose

#### Governance at a Glance

[04:40](https://youtu.be/WY06KzgAjRI?t=280)

- Three-point summary
    - DAI remains in hot demand, with just short of 2B in total DAI supply
    - ETH-A secured its spot on the MakerDAO mantle as the first vault type to issue over 1B in DAI
    - The Peg remains very strong, with the daily VWAP still hovering at $1.001
- ICYMI - Announcements
    - [Vote tracking](https://beta.mcdgov.info/) is arriving at Maker! Check out [the forum post](https://forum.makerdao.com/t/introducing-the-mcd-voting-tracker/6386) for full details!
    - Yearn.Finance recently [used a MakerDAO vault](https://twitter.com/iearnfinance/status/1359108691677614080) to restore user funds after exploiting a V1 pool targeting yDAI.

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance-feb-5-11-2021/6507)
If you have the time to read over and vote in active threads, that would be much appreciated.

##### Discussions

- [Pre-MIP discussion: PSM flapper](https://forum.makerdao.com/t/pre-mip-discussion-psm-flapper/6378)
    - Andy_McCall brings a pre-MIP discussion on using USDC from the PSM to buyback and burn MKR tokens.
- [Minting New DAI to Offset Lost DAI](https://forum.makerdao.com/t/minting-new-dai-to-offset-lost-dai/6396)
    - Jeycryptz11 makes a case for minting DAI to offset "lost" DAI sent to contract addresses both as a means of customer support and a way to counteract the deflationary pressure of the lost DAI.

##### Signal Requests

- [IAM-DC Parameters: LRC-A, BAT-A, BAL-A, MANA-A, ZRX-A, KNC-A, RENBTC-A](https://forum.makerdao.com/t/iam-dc-parameters-2-lrc-a-bat-a-bal-a-mana-a-zrx-a-knc-a-renbtc-a/6431)
    - Last Chance to Vote! primoz puts forward the second round of Debt Ceiling Instant Access Module parameters for new vault types. Voting ends tomorrow, Feb. 12th.
- [Adjust ETH-A DC-IAM-line (2021-04)](https://forum.makerdao.com/t/signal-request-adjust-eth-a-dc-iam-line-2021-04/6332)
    - Signal Extended! Ultraschuppi signals raising the ETH-A debt ceiling for the 4th time in 2021. Signal extended to get more participation, so please vote!
- [Initial Flash Mint Module Fee](https://forum.makerdao.com/t/signal-request-initial-flash-mint-module-fee/6485)
    - Hexonaut signals community preference on the fee imposed for Flash Minting in anticipation of MIP25: Flash Mint Module.
 - [Lower PSM-USDC-A tout Parameter](https://forum.makerdao.com/t/signal-request-lower-psm-usdc-a-tout-parameter/6447)
    - Hexonaut signals lowering the tout parameter for the PSM-USDC-A vault type. This change would make it cheaper to exchange DAI for USDC, a trade currently underutilized for the first PSM.
- [Turn stablecoins DC to 0](https://forum.makerdao.com/t/turn-stablecoins-dc-to-0/6432)
    - Alexis signals changing the Debt Ceiling to 0 for all non-PSM stablecoin vaults, with options to start with USDC. Polling ends in one week (Feb. 18th)!
- LongForWisdom: Thank you, Prose. I want to note that people mentioned in the chats that they're having trouble keeping up with the signal requests, which have recently gone up. If anybody has any suggestions about how we can re-structure the forum to keep things more accessible, or if anyone needs any advice on keeping track of these, please reach out.

### Christopher Mooney

#### Smart Contracts Team Update

[10:25](https://youtu.be/WY06KzgAjRI?t=625)

- We didn't do any work on the collateral onboarding sheet this week because we have a lot cued right now. We didn't have any cycles to spend on it, and we have plenty of work to do. We're planning to do the collateral assessments for UNI-V2-AAVE-F and UNI-V2-WBTC-DAI, which should be completed by Friday. We're also going to do FC and WBTC-B. These are the alternate collateral types for FA and WBTC with various parameters. They are interesting because we don't have a collateral assessment for them. We might use this opportunity to get a technical assessment for each one. Next, regarding collateral to Kovan, we're trying to get MIP21 in on Friday, which I'll talk about in a second.
- We're iterating the tooling right now on Dss.Exec Lib. There are changes that we want to make. We're slowly discovering what makes that tool very useful. For MIP45, Liquidations 2.0, we had minor updates to the RC; We made some small enhancements to Liquidations 2.0 through a separate branch for gas optimizations and stuff. The auditors are continuing to work on the main code frozen version. We have met with the auditors and are working with them right now. Also, we did work over the last couple of days on MIP21. We are suggesting some changes and are setting those up for review. I think we're still waiting on opinions from Lev and Will concerning one of our changes. We're looking at the unit and integration tests to deploy it to Kovan on Friday.
- Matt, you're on the call. I want to mention that we'll do the conduit testing sometime. For MIP22, there is an outstanding PR that needs review. We're still 'cooking with fire' on MIP21. We're pushing through that, and then we'll flip over to MIP22.
- For security work, we began defining the security roadmap as well as the mission statement. We also began documenting a tutorial for formal verification. There's a couple of DEFCON spells we have. In case you're unfamiliar, they're spells that we use in case of emergency. We're getting them all pre-deployed and ready to go after completing a few updates. Also, we need to add the UNI-V2-DAI-USDC to that. We're going to detect whether or not the stablecoin is even there and then fix those. These will be deployed on Friday. We will get it all ready to go and plant it on Sunday when gas is cheap.
- I think we're well converged on a solution for PAX-D, PAX-G, and USDT. These are fee-charging tokens on transfer. USDT doesn't have it turned on yet, but in theory, they could. There are a few changes that we need to accommodate to prevent double charges on fees. This will open up other types of collateral that do this to our system. We're building a factory for deploying the `flips` and the joins. Gas is getting expensive to the point that the collateral types from last week cost us 2,500 dollars to deploy the `flips` and the joins for them. Sam had shared the Flash Mint Module as well, which we'll be looking at shortly. Does anybody have questions?
    - Brian McMichael: That was comprehensive.
    - Frank Cruz: With everyone asking questions about L2s: what would be the best response for the community or outside the community asking where Maker is regarding L2s?
    - Brian McMichael: Right now, we are focused entirely on these RWAs and then some of the other things that have been voted in. It would be nice to focus on L2 research. Some other teams inside of the Foundation have been researching it as well. However, I don't know if we can announce anything as of yet. We don't have a published solution. But it is on the agenda, and I would encourage Governance to prioritize that research.
    - Juan: Brian, this would be a great core unit. You probably know people who are better suited to or want to tackle this issue.
    - Brian McMichael: We would relish the opportunity for R&D as well. Right now, we're grinding on all of these MIPs that are coming through.
- Wouter: I can give a little more color to the L2 research inside the Foundation. Two things are ongoing: We have been doing research and thinking about ways to deal with L2 solutions, and there are many ways of integrating with those L2 solutions. However, it's good to understand that trust issue comes with security implications, which led us to believe it would be good if the community were to have an evaluation framework expressing some opinions about Maker L2 solutions. Let's see if there is a consensus about what a good solution would look like. Then we go from there for further implementation. After that, we may propose an evaluation framework that might start talking about these L2 networks. The other part is that we have been looking more, from a practical point of view, to look like a DAI integration for one L2 solution. I want to mention that it is happening. This is a more practical approach to looking into the nitty-gritty details. I expect at least a discussion on the forum centering on this topic. I don't want to speak on behalf of other people, but my gut feeling is that these discussions will begin to pop up within several weeks. After discussions initiate, we can start to accelerate on these ideas.
    - Frank Cruz: Cool, thank you.
    - LongForWisdom: I think that everyone's comforted to know it's on someone's radar. That's appreciated. Thank you.
    - Wouter: I would add one thing to that. Please don't listen to this and conclude that the Foundation is working on it. If there are any other initiatives or people with an idea of how we can approach this, please continue to work on that regardless of the work happening within the Foundation. We don't have all the answers at the moment. There's a lot of input and feedback that we require from the community.
    - Juan: I think that this is something governance would pay for. It's a matter of organizing the budget, getting it approved, and having a facilitator and a core unit organizing it. It's all doable, and we should think about going through with it.
    - LongForWisdom: If anyone knows anyone interested in building L2 solutions for the DAO or Maker, please refer them to the forum or the chat. We can help walk them through the material.

### Nik Kunkel

#### Oracle Team Update

[21:58](https://youtu.be/WY06KzgAjRI?t=1318)

- We're going to deploy the LINK-ETH and UNI-ETH LP tokens oracles later today. Those are going into tomorrow's executive. We are not looking forward to that because each of those contracts will cost around 400 dollars to deploy. That's how the world works right now—crazy. In terms of assessments, we're working on the CF-DROP assessment. We're working on the WBTC-DAI assessment and a few others.
- On the L2 side of things, I can contribute a little bit to that discussion. We've been working on integrating Starkware into the oracles and for DYDX's upcoming launch since they're launching on Starkware. It'll be fantastic to get experience working with Starkware functions. We are experimenting with L2, so once optimism gets going, we can look in that direction. I'm sure we'll have customers of the oracles who will be transitioning to L2 as well.
- We should talk about gas and audits. The ABDK audit for the LP oracle is underway. We expect to get that back in just over a week. Then we'd have to incorporate the feedback followed by community consideration toward raising the DC for the LP tokens.
- We should be talking about ways to mitigate gas usage for the oracles. It's crazy right now. If the current gas prices continue, it would be 16 million a year just for gas prices, which is insane. There are some things that we can do. We need to decide as a community on what we're willing to do and what we're not. Right now, we update most assets on a one percent threshold. That means that every time the price changes by one percent, we'll update it. We have certain assets for very large vaults. For example, ETH and WBTC are on a more strict interval of half a percent. However, what is some things we can do? We could increase the threshold for assets that don't see much usage to a three, four, maybe even five percent threshold. This would cut down costs. However, Risk would need to be consulted because due to existing collateralization ratios, if the oracle price doesn't update, that can be a five percent discrepancy to the actual trading price. Another alternative is that we begin delisting some of the vaults that aren't seeing much usage. I'm personally not a big fan of that approach. We've spent a lot of time integrating these assets, and just because they don't see any usage now doesn't mean that things can't become very popular in the future. For example, let's consider yield farming, which made some assets very popular on Compound. I think that there are external factors at play here that can boost the demand for one of these assets. I would hate for us to miss out on that. We're researching terms of what we can do to reduce the gas footprint. For example, one thing we could do utilize zero-knowledge proofs. They have a constant gas cost for verifying proof. Right now, it's about five million gas, which is a lot, but you could update a bunch of oracles at once. This could save gas depending on how many oracles you're trying to update. However, that comes with issues if you're trying to keep a specific price update sensitivity. Not all of them are going to need to be updated at the same time. In those cases, the gas cost for verifying the proof, the 5 million gas, may not be worth it if you don't have enough prices to update at a single time. There's no magic bullet here. Chainlink is probably spending just as much, if not more, than us because they're not very gas efficient. It's an industry-wide issue and not specific to our oracles. Nonetheless, this is a concern that my team will heavily look into over the next several months because the current situation is just not sustainable.
     - Frank Cruz: I would switch the gears here and not concentrate on gas as much. I was listening to this podcast about one of my favorite subjects lately: NFTs. one question that came up was: what's missing for NFTs? One of the answers is an exchange such as UNISWAP, where I can trade my hash mask for a little Miquela NFT. I'm bringing this up because somebody said they are predicting Maker will be the first to offer vaults for NFTs. However, how difficult would it be to have a price oracle for NFTs?
     - Nick: I love that there are rumors about us being the first to do anything. Usually, we're the last to do anything. This sounds like our public image has flipped in terms of how to price an NFT. This is a complex problem. Most NFTs are very illiquid. The potential for manipulation is very likely. Imagine someone is hoarding little Miquela's and then manages to corner the market and drive up the price. If they wanted to sell all of their little Miquela's, they would crash the entire price to zero. But if they borrow in Maker against all of them, it's like a way to liquidate without experiencing the slippage. It's very tricky to price NFTs in a way that can't be manipulated. The risk level to the system is also relatively high because NFTs are trending right now. We need more use cases on Ethereum besides just finance. The underlying value of these things is hugely questionable. Yes, they can be entertaining. However, let's take Cryptopunk as an example; they had a price spike, and they're trading around ten thousand dollars at a minimum or something like that, which is fantastic. Let's say the market crashes and goes to a bear market in six months. What will be Cryptopunk's worth? It's probably going to crash, and very suddenly as well. It's not a smooth process. I would want to see the market and the liquidity for NFTs first to develop some more.
     - Frank Cruz: Yeah, that makes sense. Even if NFTX does their hedge fund vehicle of many various NFT collections, they're going to do the same thing. They already bought this zambape, if you're into soccer, from PSG. They paid a hundred and something thousand for it. That wouldn't work in the short term.
     - Nick: We want to see the market for these NFTs mature and develop a bit more. We should not be a first mover. I don't see an advantage. The risk is too high.
     - Frank Cruz: Sounds good, man. Thanks for the commentary.
     - Nick: I know that's probably not what you wanted to hear.
     - Frank Cruz: I'm thinking the same thing. I would love to see a hash mask trade for an NFT Cryptopunk, but it's not going to happen anytime soon. If you guys know him, Rack mentioned that Maker would be the first to offer me the ability to get a 2000 DAI loan.
     - Nick: I'm glad we have Rack in our camp.

### Charles St. Louis

#### MIPs Update

[35:43](https://youtu.be/WY06KzgAjRI?t=2143)

- Given that we don't have an active governance cycle this month, this review will just be an overview of all the current proposals in conception and RFC and some active pre-MIP discussions, followed by an overview of some collateral onboarding updates.

![](https://i.imgur.com/qsF30p6.png)

![](https://i.imgur.com/KlnYdX9.png)

![](https://i.imgur.com/EvHT1Lm.png)

![](https://i.imgur.com/nD2rDR5.png)

![](https://i.imgur.com/tkZjOcs.png)

![](https://i.imgur.com/jeuGGxW.png)

![](https://i.imgur.com/OEhKXv0.png)

- Ignore the ones awaiting an executive vote. Those are the ones from last week.
    - LongForWisdom: Thank you, Charles. The next greenlight polls will be up on Monday. They will be up for two weeks and not three days.
    - Charles: Yeah, they'll be up for two weeks and end on March 1st. At the beginning of the March governance cycle.

### Primoz Kordez

#### Risk Team Update

[46:05](https://youtu.be/WY06KzgAjRI?t=2766)

- Regarding collateral evaluations, we're posting another two UniLP evaluations this week, which are renBTC-DAI and AAVE-ETH. We posted this week's DC instant access module parameters for smaller vault types. This should go into the on-chain poll next Monday. If confirmed, we should have all vault types using this module apart from UniLPs. We plan to propose these parameters very soon. For stablecoins, we've already suggested that this vault type module wouldn't be applicable due to DAI liquidity crunch reasons, etc. Lately, we've been monitoring the growth of ETH-A debt exposure. The Rates group may propose another rate increase on ETH-A because the last one hasn't been implemented yet. However, it should be this Friday if confirmed. The idea is to try to lower the pace of debt growth. We're also doing simulations on ETH-C vault types, the newer vault type with a higher liquidation ratio. The idea here is to stimulate ETH-A vault users to migrate toward safer vault type, such as ETH-C or new DAI minting from ETH to be done on ETH-C. The strategy could be a bit questionable because it doesn't seem that borrowers are very rate sensitive at the moment. It remains unclear what the spread between ETH-A and ETH-C would be needed for users to move to a vault type that's less capital efficient and cheaper. We also made a report on auctions this week using this year's data. In summary, there were 150 auctions this year. Maker collected all penalty fees, which is about half a million. Vaults were getting the appropriate amount of collateral return. Still, there was one auction where Maker didn't collect the total amount of the penalty fee, which was the DAI-ETH Uni LP vault that was liquidated. There was only one keeper at the time, which raises concerns about how many people bid Uni LP auctions. This is important to know if we increase the DC on Uni LP after the oracle audit. We are thinking of raising the minimum bit increase parameter, called back, and potentially the penalty fee. Hopefully, this would attract more keepers because, on the one hand, there's a higher incentive for keepers to bid due to higher back and minimum increase. If there's a higher penalty fee, vault owners might be more cautious with not getting liquidated. Additionally, we'll also try to do a bit more PR about this potential change around DeFi. We're primarily focused on liquidations 2.0 and doing our regular related risk work.
    - LongForWisdom: Thank you Primoz, looking forward to seeing what sort of parameters come from risk in terms of liquidations 2.0. That should be interesting.

### Seb

#### Real World Finance

[50:47](https://youtu.be/WY06KzgAjRI?t=3047)

- Three points this week:
    - we're continuing to work with legal to improve the infrastructure of RWAs, which will be a long-term process.
	- We are working on eight collaterals for the next few months. It's not something that will be quick. We still have three collaterals waiting in production. We are easing the onboarding process for asset originators because they don't understand all the MIP and DeFi stuff. Now we have a sheet explaining all the processes. This will be on the forum very soon.
	- We are continuing to discuss with a company that was greenlighted long ago to provide something that may be better suited for both parties. We began to work on the implication of term loans. We are lending for a fixed rate for a given amount of time. That's something that was posted in the forum with YFI-DAI. It also speaks about implications; if you promise to lend for a long time at a fixed rate and the DAI supply decreases, there can be a liquidity issue. Research should be done in this direction to if it's a significant risk. If there are any risks, what are their limitations?
- LongForWisdom: Thank you, Seb.

### Amy Jung

#### Operational Support Update

[53:33](https://youtu.be/WY06KzgAjRI?t=3212)

- We started posting our updates on the forum. You can see them in the thread using the links, and it'll give you the highlights. For the KYM, we did the Keg last Friday. Then we did the long-term lending module by Alan from yield protocol, and Levwho co-wrote it. The collateral onboarding happening next Wednesday included Fortunafi, the yield and lending protocol for tokenized real-world cash flowing assets.
- we've been working on the core unit, beginning with the community call, which included Frank, Juan, Imeo, and Prose. In this call, they broke down the unit and answered questions. A second section consists of a few MIPs and sub proposals. Therefore, the core unit framework itself, risk, Governance, real-world finance, suggests leaving comments and reading through it one final time before it goes into a frozen period at the end of next week. Please check it out and leave comments. We have two new core unit drafts: the growth core unit by Nadia and then a marketing core unit by Seth. We have a few that are still in draft that was recently posted. We have the smart contracts and front-end, both written by Derek. Then we have strategic communications PR and marketing by Kathleen. We have Seth, who commented that it's not supposed to be competitive to Kathleen, but instead is a different kind of approach. Therefore, if you see a core unit created, it doesn't mean you can't do, create, or propose that core unit. However, it is recommended that you check out whether someone else has written or spoke about that core unit. Check for redundancies or overlaps.
- Juan and I are also working on our core unit. I always encourage people to check out Imeo's [core units I wish existed](https://forum.makerdao.com/t/core-units-i-wish-existed/6248). This is where all the brainstorming comes together to say I wish something like this had existed. I encourage you to reach out to your network. Maybe you want to become a facilitator or build a team around one of these core units. We all need to all work together and pull together our network to ensure we have all the bases covered.
- We have a call coming up with Opolis in two weeks. It will be the Tuesday community lead by David. Details will be coming soon. that will be another kind of employment service provider. I like to think of it from an employee's perspective versus the accountable perspective proposed by Dennis. We had a few interesting conversations on the core units and topics concerning facilitator responsibilities. Some questions included inquiries such as the expected facilitator responsibilities as a high-level. The answers to this are written out in the core unit frameworks. The main thing to know is that you'd be responsible for the budget even if you have someone doing accounting for your company. If something like half a million goes missing, you're going to be the person who has to communicate and get details on that. Another responsibility is the expectation of communicating with Governance by being with the facilitators and things like that. It's essential to communicate the monthly reports. Stuff like that would be considered the responsibility of a facilitator. That being said, depending on how you structure your team and how it's organized, you can be a PM and also a facilitator. You're the person responsible. Keeping in mind that there are responsibilities of a facilitator. If you have a busy role, you might not always be able to cover both. You might have a facilitator who's responsible for communication. They don't have to be two separate roles. If you're torn between two, but feel like it all folds in can do both, then you can be both. It doesn't make sense to have two separate budget line items, such as a facilitator budget and then a PM budget, because you would be playing both roles. Any comments or questions on that?
    - LongForWisdom: I'll sort out something. The other key part of the core unit structure is the core unit mandate. That's the place where facilitators can define any extra responsibilities they want to take on or commit to in terms of what the core units could be doing for Governance and the DAO.
    - Amy: Yeah. A good example of that is SebVentures, who hosted his monthly report. He gave a January monthly report of what that team has been doing. in your core unit, you can decide what you want to be responsible for. One of the things that operational support spoke about was giving a quarterly report of all the core units. Long said it's dependent on your mandate as well. The second interesting conversation that's been brought up is facilitator salaries. LongForWisdom and his governance budget kicked this off. You should [check out that thread](https://forum.makerdao.com/t/mip40c2-sp3-core-unit-budget-gov-001/6349). Generally, there's been conversation around the expected transparency and what expectations a proposed core unit or salary that someone decides to be public could involve regarding other future core units or facilitators that go into it. I should add that some teams would rather have that more loose. They might say this is the general amount that we're going to spend on people, and that's okay. We see different structures. I would open the floor up now if people wanted to bring up any questions or thoughts.
- Amy: Juan, would you like to experiment with something?
    - Juan: No. I think that each core unit should choose the level that they want. You can go for super transparent, where everything is public. Some companies are doing it in the open. The fact that it's the blockchain and everything is transparent should not trick you into thinking that that's required. Nick brought the point that sometimes it's harder to negotiate with different peoples or attract talent if everything is public. I tend to agree with his point of view. However, Brian brings up another important point: privacy. If you're a developer making half a million, that could be a security issue at some point.
    - Chris: Yeah, that's my recommendation for almost everybody thinking about this. Everyone can make their own choices. However, I would highly recommend that you scope the budget at the domain team level that this sort of utopia of radical transparency is a giant dangerous security trap. You do not want people knowing how much you make because the tokens that we get paid out in the space are bearer assets. You should think carefully about the operational security and whether or not you want to have everyone's salaries transparent.
    - Matthew Rabinowitz: Agreed. The beautiful thing about this core unit aspect is that it has the danger of spiraling into a bureaucracy. There's an aspect to whatever period frequency of having a unit present, whatever the status, whatever it was done in the previous month or quarter, and outlining the historical and forecasted budget.
    - Amy: If something feels off, it could be in a positive way. Let's say there's this massive budget, and we say 'that seems kind of low.' we wouldn't be able to say how it feels low if it wasn't vaguely broken down. Maybe it's the people that are too low, or the people are too high, or whatever it is. I should bring up that for the governance budget and why that was also brought up. While the discussion was initiated around the individual's value, It is a positive opportunity. People can say, 'hey, I think you're being undervalued.' We need that kind of commentary in the community to ensure that we have fair pay; otherwise, if no one says anything, people will be undervalued, and people who are undervalued seldom speak up or represent themselves.
    - Matthew Rabinowitz: I'm not even trying to say people shouldn't be paid. It's quite the opposite. I want to make sure that it stays efficient.
    - Brian McMichael: I don't want to cause any alarm, but the smart contracts team lost several developers to better opportunities last year. That needs to be rearranged.
    - Juan: I agree. Also, if you are using a pseudonym such as Long is, it's easier to be transparent. We all trust him, and we want to keep him doing his job. I mentioned this several times in the forum. Not being pseudonymous may cause issues that you might not be aware of today but can happen in the future.

### Anna Kryukova

#### Community Development Team Update

[01:06:58](https://youtu.be/WY06KzgAjRI?t=4018)

- David hosted an informative call with some community members. Here is a [link](https://www.youtube.com/watch?v=TnkJRhTk7NM&t=4s) if anyone's interested to learn more about core units as well as the various questions discussed. Some contributors in community development are also writing core units and sharing them in Rocketchat. There will be more updates in the coming weeks, but for now, everyone is working on core units and community development.

## Open Discussion

[01:07:45](https://youtu.be/WY06KzgAjRI?t=4065)

- Matthew Rabinowitz: Regarding the budget, are we planning to have an aggregate view of what the contemplated budget would be for all the units at some point?
    - Juan: That's the minimum detail that you need to include in a core unit. There's the budget implementation, which is the number that the protocol will payout. That's the minimum that you have to disclose. Then there's the budget breakdown in which you can go as detailed as you want. Some aggregation is fine, for example, saying salaries or expected salaries are okay. You don't have to use the whole budget that's assigned. I hope that clarifies the issue.
    - Matthew Rabinowitz: That's when you submit it into the forum. What would we want as a collective to see regularly? Each individual, sure, but at some point, will we have an aggregate slide that says what we're currently spending, similar to what Seb put in the last presentation. I'd love to see what our expenses are going to be in aggregate.
    - Juan: Yes.
- Amy: One of the quarterly reports that I had mentioned. There are two phases: One would be the budgets coming in. We would have two months to understand how much we would be required to spend. The second would be to see what we're spending currently.
    - Juan: Wouter also says he would not want to be in a hiring interview for three engineers who know the three budgets. But you can say, hey, we're planning on growing ten engineers. When you hire a couple, you can start doing the math, but there are buffers. You're considering various things, and it's not a hundred percent transparent or visible if you don't want it to be.
- Frank Cruz: I was going to change the subject if that's okay because something interesting came up this week with Seth Goldfarb. He brought up the code of conduct. I'm sure some of you heard about Blockfolio. It became a hot mess for them where the founder, Sam, had to go on social media and try to answer some serious questions. How do we handle the code of conduct for core units? Is that something each facilitator should set a precedent for? or is it something someone from operations will provide with an outline? How does that work in a DAO?
    - LongForWisdom: That's a good question. If we don't set up something in advance, then we will handle it as we go. I think the best practices will evolve from that. It's something everyone has to deal with.
    - Frank Cruz: We have many really good people here, so I'm not worried about that. As we grow, we should take it step by step.
    - Christopher Mooney: I think Bill and Ted said it best: be excellent to each other. It's not a complex problem.
    - LongForWisdom: There was a discussion earlier about gas. Someone brought up the ip1559 in the chat. I'm curious as to whether or not anyone has any opinions on that.
    - BrianMcMichael: It's buyback and burns, which is what we do, right? Sounds good to me.
    - LongForWisdom: I know none of our devs are experts on consensus or the Ethereum protocol itself, but does anyone have any thoughts on what it'll deliver in terms of gas prices?
    - BrianMcMichael: Does everyone know what the ip1559 is, to begin with?
    - LongForWisdom: That's a good point. Let's start with that. Does anyone want to give an executive summary?
    - BrianMcMichael: There are two components. They're going to increase the block size a little but then change how the fees are managed. There will be a base fee, which is the minimum amount you need to spend on a transaction, and then there will still be a market fee. Everything over that base fee will be a tip to the miner. Still, the base fee for each transaction will get burned and therefore reducing the supply of Ethereum. This will turn Ethereum into a deflationary token. The miners will still get a profit. Nonetheless, they'll get the tips above and beyond the base fee.
    - SamM: Is there an opcode for the base fee?
    - LongForWisdom: I wondered that too because I think it has implications for your Dss.chron module or something, right?
    - SamM: It would be nice if there were. It would allow us to determine whether somebody's paying a competitive gas price or not.
    - BrianMcMichael: I don't know how it's implemented in the protocol yet.
    - LongForWisdom: The general goal is to bring stability to gas fees rather than drastically lowering them.
    - Matthew Rabinowitz: Is there any approximate timing on when that is going to happen? I've heard estimates.
    - LongForWisdom: As far as I am aware, the plan is before proof of stake. But I am not sure.

#### Links from Chat

- [PreMIP Collateralization of Commodities](https://forum.makerdao.com/t/premip-collateralization-of-commodities-for-purposes-of-financing-duties-and-tariffs/6262)
- [Flip Auction Stats](https://forum.makerdao.com/t/makerdao-flip-auction-stats-ytd-data/6474)
- [Op Support Weekly Update](https://forum.makerdao.com/t/operational-support-weekly-update-feb-8-12-2021/6509)
- [Community Call Feb 09th, 2021: Let's Talk About Core Units](https://www.youtube.com/watch?v=TnkJRhTk7NM&t=4s)
- [Core Unit IWE](https://forum.makerdao.com/t/core-units-i-wish-existed/6248/16)
- [Core Unit Budget Gov](https://forum.makerdao.com/t/mip40c2-sp3-core-unit-budget-gov-001/6349)

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

`RWA`: Real-World Asset

## Credits

- Artem Gordon produced this summary.
- David Utrobin produced this summary.
- Denis Mitchell produced this summary.
- Jose Ferrari produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
