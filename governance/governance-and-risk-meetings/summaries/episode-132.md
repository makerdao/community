# Episode 132: March 11, 2021

## Agenda

- [00:00](https://youtu.be/ueLk_ksOZ5w): Introduction
- [05:10](https://youtu.be/ueLk_ksOZ5w?t=310): Governance at a Glance
- [07:20](https://youtu.be/ueLk_ksOZ5w?t=440): Smart Contracts Team Update
- [21:35](https://youtu.be/ueLk_ksOZ5w?t=1295): Oracles Team Update
- [24:28](https://youtu.be/ueLk_ksOZ5w?t=1468): Risk Team Update
- [28:10](https://youtu.be/ueLk_ksOZ5w?t=1690): Real World Finance Update
- [31:54](https://youtu.be/ueLk_ksOZ5w?t=1914): Operational Support Update
- [38:07](https://youtu.be/ueLk_ksOZ5w?t=2287): MIPs Update
- [1:01:13](https://youtu.be/ueLk_ksOZ5w?t=3673): Gauntlet Report on Liquidations 2.0

## Video

<https://www.youtube.com/watch?v=ueLk_ksOZ5w>

## Introduction

### Agenda and Preamble

#### LongForWisdom

[00:00](https://youtu.be/ueLk_ksOZ5w)

- Hello everyone, and welcome to the MakerDAO scientific Governance and Risk meeting #132, taking place on Thursday, March 11th at 17H00 UTC. My name is LongForWisdom. I'm the Governance facilitator at MakerDAO. I'm joined by at least 40 people interested in Maker and Maker-related things.
- If you want to interrupt, comment, or ask questions, please do. I would love to hear from everyone.
- Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

##### Weekly Governance Updates

[01:00](https://youtu.be/ueLk_ksOZ5w?t=60)

- We've had an executive last week containing the [initial implementation of the Real World Assets 001](https://vote.makerdao.com/executive/parameter-updates-and-onboarding-rwa-001?network=mainnet#proposal-detail) with preliminary parameters for testing purposes. The Vault is not online yet, but this is a significant step in that direction.
- We've also increased the ETH-A total available debt from 30 million to 80 million. This is known as the GAP, the amount of available space the DC instant access module tries to maintain within the ETH-A Vault type.
- We've approved some collateral auction parameter updates. Please check out the executive page to see what those were.
- We've also finished the weekly polls. They mainly were inclusion polls, but we also had a [rates proposal poll](https://vote.makerdao.com/polling/QmWakAdq?network=mainnet#poll-detail) which includes the minor increases to some of the Uniswap LP token stability fees and some other changes. We saw some [inclusion polls for this month's Governance cycle](https://vote.makerdao.com/polling/QmYwiCHC?network=mainnet#poll-detail), which had all passed. That includes the core unit MIP-set and the three initial core units: real-world finance, governance, and risk. We also saw the [Liquidations 2.0 updates inclusion poll](https://vote.makerdao.com/polling/QmQDoMAN?network=mainnet#poll-detail) pass and some other technical changes such as the [`keg` streaming payments module](https://vote.makerdao.com/polling/QmPCpB7a?network=mainnet#poll-detail), the [term lending module](https://vote.makerdao.com/polling/QmTeCt5Q?network=mainnet#poll-detail), and some software Governance stuff like [multisig wallet management](https://vote.makerdao.com/polling/QmRgHDAf?network=mainnet#poll-detail) and [parameter proposal groups](https://vote.makerdao.com/polling/QmNnhoP4?network=mainnet#poll-detail). These will continue to the MIPs bundle poll next week. This week's executive will include ETH-C onboarding and the rates' updates I just mentioned.
- In terms of the Governance domain, Governance contributors have made a [presentation on Wednesday](https://forum.makerdao.com/t/core-unit-launch-pod-sessions-session-2-governance-alpha-core-unit/6847) on Gov-Alpha, the governance core unit. We are in the process of rewriting MIP 0 to make it more accessible. We don't plan to create actual content or logical changes but instead make it more accessible, clearer, and hopefully shorter.
- We are also working on Liquidation 2.0 documentation concerning governance parameters so that Governance can get an overview of what each parameter is, what it does, the trade-offs, etc.
- Finally, we had Elihu working on the MakerDAO mission setting, calling the project Compass, which perhaps Amy or Juan can speak about.

## Weekly Updates

### Governance at a Glance

#### Elihu

[05:10](https://youtu.be/ueLk_ksOZ5w?t=310)

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance-mar-5-mar-11-2021/6977)

- Three-point-summary:
    - Total Value Locked (TVL) in MakerDAO as of today is $6.8 billion
    - The DAI supply keeps reaching new highs with 2.6B
    - DAI’s volume weighted average price (VWAP) is stable at $1.001
- ICYMI - Announcements
    - The 3rd session of the Core Unit Launch Podcast will take place on Wednesday, March 17. Join our host, Juan, along with the Smart Contracts Core Unit Team to discuss their proposal.
    - The MakerDAO community will be featuring DAI on the Optimism Layer 2 solution, enabling near-instant withdrawals of DAI tokens and thus enabling wider adoption of Optimism and profiting from it on March 23rd.
    - DAI has now been integrated into the GLUFCO Service Switch to allow the direct exchange of DAI to USD or VES in Venezuela. More regional currencies are expected to be added in the future.

##### Discussions

- [[Brainstorm/Discussion] Features I Wish Existed](https://forum.makerdao.com/t/brainstorm-discussion-features-i-wish-existed/6873)
- [How to eventually remove DAI’s dependence on USDC and other stablecoins](https://forum.makerdao.com/t/how-to-eventually-remove-dais-dependence-on-usdc-and-other-stablecoins/6875/10)

##### Signal Requests

- [Increase the bump / ttl parameters of FLAP auctions](https://forum.makerdao.com/t/signal-request-increase-the-bump-ttl-parameters-of-flap-auctions/6842)
    - @Aaron_Bartsch proposes increasing the `bump` and `ttl` parameters of FLAP auctions to decrease the number of auctions and give participants more time to accrue funds respectively.
- [Adjust the Surplus Buffer (March/April 2021)](https://forum.makerdao.com/t/signal-request-adjust-the-surplus-buffer-march-april-2021/6979)
    - @ultraschuppi proposes raising the Surplus Buffer with voting options going up to 80 MM.

### Smart Contracts Team Update

#### Christopher Mooney

[07:20](https://youtu.be/ueLk_ksOZ5w?t=440)

- We didn't have any collateral assessments nor collateral onboarding priority work this week. However, we are in the process of deploying ETH-C to Kovan. We've got one more review, and then we'll end up pushing that to Kovan.
- Most of the tooling that we were updating has been finished, and it's now part of our ongoing process at this point.
- For [MIP45](https://forum.makerdao.com/t/mip45-liquidations-2-0-liq-2-0-liquidation-system-redesign/6352), which is Liquidations 2.0, we've completed some of the deploy scripts. We're prepping that for Kovan. We were hoping to have it on Monday. We've got some of the audit feedback, and there was a couple of gas optimization that we're going to make. We also need to create a clipper-mon for the circuit breaker capabilities. We need to create a new ESM because we have to replace the old end contract. We need to make some updates around the ilk registry and the gas optimization PRs and whatnot. There is an additional economic attack situation that we've been considering; We can either do nothing because the parameters we have are good enough or propose changes such as limiting the amount of dirt that we dig out of the hole. Kovan will be ready a week from now. Any team or integrator that's depending on that can expect to see those addresses sometime next week.
    - Wouter: Can you show the timeline again?
    - Brian McMichael: While you pull that up, I want to mention that we are still waiting on Trail of Bits audit as well. Things can happen between now and then. We are not expecting any surprises, but just keep that in mind.

![timeline](https://i.imgur.com/oL5Z2yO.png)

- We are on March 11th. Imagine we shift this Kovan deployment by a week. This entire set of other requirements is going to end up shifting by a week as well. This is going to be part of my next portion. We're going to do LINK first, and that will allow everyone to tool up around LINK, which involves all the keepers, and any UIs to make sure that LINK works. We are going to add YFI right after that. These are two mid-range collaterals. This allows keepers to make sure that they can handle multiple collaterals at once. Then we will go for big ones like ETH and wBTC. Following these are the standard collateral types, and then LP tokens will be last. Everyone can see this coordination that's happening across many other teams. We've got databases, integrations, and UIs. We've also had the final reports for PWC and Quantstamp. Every Friday, we have a session going on with Trail of Bits. Gauntlet has given us enough feedback for us to choose some good parameters with risk. Risk is still working with Gauntlet, but this might end up being more of an ongoing engagement to continue to stimulate those risk parameters and keep them up-to-date.
- As for [MIP21](https://forum.makerdao.com/t/mip22-centrifuge-direct-liquidation-module/3930), which we deployed to mainnet still has the one responsible for sitting down with 6S and doing a circuit. This is a dress rehearsal of the small DC that we gave them, making sure that all those contracts are connected up correctly.
- Regarding MIP22, we sat down with the Centrifuge team yesterday. We had a discussion about changing the implementation. More on that later as we actually converge on something.
- There's a portion of our team working on a security strategy. This is a formal verification that helps us ensure contract correctness and security of the protocol going forward. They are going to have a strategy that they'll be releasing soon.
- For miscellaneous work, we are reviewing authorizations of some of the mappings for authorizations to oracles and other contracts. Then, we've been doing work with the SC domain team budget. There will be a community call with them next week. Derek, do you want to invite people to that?
    - Derek: Yes! We'll get the invite out. Juan created one for Wednesday, next week, everyone come along, and we'll share in all the usual channels.
- Finally, we have been doing some side work on the L2 Optimism Dai Bridge. I want to thank Sam and other elements of the Community that have been putting that together.

### Discussion

#### Sam Macpherson

[15:13](https://youtu.be/ueLk_ksOZ5w?t=913)

- Earlier this week, I put out an [announcement](https://forum.makerdao.com/t/announcing-the-optimism-dai-bridge-with-fast-withdrawals/6938) that we were going to be bringing Dai to Optimism L2. It received attention and excitement. It's a big opportunity for Maker to become the primary offramp for Optimism L2. There have been developments around the [open-source, public code](https://github.com/BellwoodStudios/optimism-dai-bridge). We are building the first version of the bridge and using a multisig wallet due to time constraints. Optimism is coming online by the end of the month. We plan to roll out v1 of the bridge and then upgrade it over time. When the bridge is deployed, it is experimental, so be careful when using Optimism; This is currently experimental technology. Also, we are deploying a new version of Dai, which gives us a chance to modernize permit function, minor gas efficiency improvements, and add flash minting capabilities directly into the token. We may get flash minting on L2 before L1.
    - LongForWisdom: You're deploying an upgraded version of Dai to L2 on Optimism, not mainnet, right?
    - SamM: Yes. It's essentially the same as L1.
- Nkunkel: If Dai is the only token with flash withdrawals and the only stable token with these withdrawals on Optimism, it's a niche that we can conquer against USDC and Tether. They would suffer from capital inefficiency. From a technical POV, we can easily support every stable coin. The question is, do we want to?
    - LongForWisdom: Circle can offer the same flash withdrawal bridge.
    - Samm: Because we can mint Dai, we will always have a liquidity availability advantage compared to others who may have to lock up capital.
    - Matthew Rabinowitz: it depends on directions, where both directions cause an offset to the transfers. Initially, yes, but over time there should be harmony between their inflow and outflow of L2.
    - Samm: This remains to be seen, but we have the upper edge advantage here. We should be at the forefront because we can mint Dai.
    - Seb: Circle can do the same because as you go into the bridge, USDC is on the Circle balance sheet. They can mint USDC on L1 as well. They don't have the capital need neither. The USDC outstanding doesn't change.
- BrianMcMichael: P.S., the community does not plan to make the Dai token upgradable on Optimism. SamM has posted a [link](https://forum.makerdao.com/t/announcing-the-optimism-dai-bridge-with-fast-withdrawals/6938/27) about this. Consider this as an RFC period, so to speak.

### Oracle Team Update

#### Nik Kunkel

[21:35](https://youtu.be/ueLk_ksOZ5w?t=1295)

- We're pushing the patched version of Scuttlebutt into production. This fixes the state-size bug hard-coded limit that Scuttlebutt has, determining how big it can get before it blows up. That was the issue affecting us during Thanksgiving. We finally resolved it. Therefore, we don't need to upgrade or reset the Scuttlebutt network every two months.
- We've also been reviewing the feedback from the ABDK audit on the Uniswap LP oracle. They cited few things; nothing exploitable or functionality breaking. Still, we will look at a couple of fixes. We're hoping to have the revised version out by the end of next week reviewed by ABDK. After we get the go-ahead, we can consider raising the DC for the LP tokens. We must also keep the risk side in terms of liquidations on top of our heads.
- In the past, LP tokens did not go very well for vault owners. We want to ensure that the keepers are there to support and are willing to buy LP tokens.​

### Risk Team Update

#### Primoz Kordez

[24:28](https://youtu.be/ueLk_ksOZ5w?t=1468)

- There are not many updates. We're primarily focused on preparing grant proposals for Liquidation 2.0 parameters.
- As already mentioned by Chris, we'll start with LINK because we don't want to implement it for ETH vaults as of yet. LINK is a better candidate for a trial run because LINK has many vaults for liquidation, which can be tested. Also, the liquidation ratio is a bit higher. Therefore we can test the auction price curve.
- There are still some discussions concerning how to mitigate specific risks around limiting the number of pending auctions. The auction throughput in Liquidations 2.0 can be high. We may want to limit it by adjusting parameters. One potential adjustment is to lower the dependency on the auction price curve on OSM price. This was discussed on forums. This could be made to protect against historical attacks when the auction starts. In any case, we should have our analysis and proposal ready by next week. We should include findings and recommendations from Gauntlet, which had made excellent simulations. We have similar results, which is good because they use the GBM model to simulate liquidations. In contrast, we focus on simulating this auction using the Black Thursday price drop.
- Within the week, some signals are ending. Winning votes should go on-chain poll on Monday. I want to invoke increment of [`dust` level from current 2000 DAI to 5000 DAI](https://forum.makerdao.com/t/signal-request-adjusting-dust-parameter-2021-2/6704) for all vault types except ETH-B. The `dust` value was proposed or voted to be 15000 DAI for ETH-B. Other changes based on signal requests are to increase the max DC for renBTC-A to 500 million to increase DC ETH-A to 15 billion. Basically no limit on ETH-A, which may sound odd, but we plan to limit ETH-A debt exposure by using rates as a tool.

### Real World Finance

#### Sébastien Derivaux

[28:10](https://youtu.be/ueLk_ksOZ5w?t=1690)

- The week was mainly legal stuff. We made the first call with 6S and potentially have with future legal core unit on MakerDAO.
- We had a call with an SPV service firm that could help us scale the SPV business to make it more secure with more work structures.
- We'll have the ConsultFreight document review later this week. We are waiting for a final review, which should be done tomorrow.
- We are making an appointment with a law firm to review most of the documents that we will have to agree on to ensure there are no issues. I want to start by looking at how much it would cost to hire a lawyer and check those documents and everything's legal aspects.
- On the analytics side, we have a financial statement on Dune Analytics that works very well. Sadly, the pivot table presentation will be removed from Dune Analytics starting next month or next week. I don't remember. I will have to find another solution to continue to track the financials of MakerDAO. More on that in the following weeks.
- We did a review of MIP 21 and MIP 22 on the purely Smart Contracts. This is to understand how it will work with the rest of the Real World Assets' legal structuring with Smart Contracts and Centrifuge to work on MIP22.
- Lastly, we took the time to look at the RWA competition in DeFi. When we started last year, we were alone, but now there is a lot of competition. On the one hand, it could be harmful. On the other hand, it could be a good opportunity because we can use those protocols to delegate the management of RWAs at some point. It could be a solution to scale RWAs. Our idea on how to scale RWAs was, instead of using assets originators, to use assets managers that will manage a lot of assets originators. We can use something that is more DeFi-compliant using other protocols. There are a lot of different protocols that are dealing with RWAs. Space is early, not as early as Optimism but still super early. It will take a lot of time to see if something is interesting to be done in this case.

### Operational Support Update

#### Amy Jung

[31:54](https://youtu.be/ueLk_ksOZ5w?t=1914)

- In terms of KYM and collateral onboarding, there have been no calls. We will soon begin to resume them. A lot of focus has been on the core units and their developments.
- Juan posted some of the critical functions that core units must cover to continue developing the protocol. It would be great to have some insights in there. We can follow some of the life developments on the [coreunit.makerdao.network](coreunit.makerdao.network) notion page.
- We have a call with Gov Alpha for this Launchpad series. Launchpad sessions are about the core units that want to present their team. It's like a job interview, so please feel free to ask questions that you want to.
- Regarding upcoming calls, [Sablier is presenting tomorrow](https://forum.makerdao.com/t/core-unit-tools-02-through-sablier-march-12th-17-00/6866) as one of the core unit tools. Sablier is discussing a platform where you stream money to whoever is working for you. On Wednesday, we have the Smart Contracts Team Core Units Discussion. I want to point out that the Launchpad series is about the core unit itself. There's a lot of conversation around vesting, for example. Derek's not necessarily defending vesting. It's specific to smart contracts. It would be great to bring questions for smart contracts regarding those areas as well.
- After the Governance and Risk call, I was thinking on Thursday, we would bring up the discussion more generally around incentives and vesting as a larger government. Long will add to the agenda. After the smart contract updates, we can compare and discuss the summaries and takeaways from that call.
- That same Friday, we will have real-world finance present their core units as well. Feel free to join that. After that, we'll have content production throughout the week.
- Four core units moved into RFC. Three of which are new. We have a growth core unit, Smart contracts, content production, and Maker DAO Shop by Coulter. There are few drafts in progress. Although there are updates on the coreunit.makerdao.network notion page, we have a lot being discussed which hasn't been publicly posted as a draft. Those are coming up. Kathleen posted strategic communications, PR, and marketing. She just updated the MIP and added budgets, which are still in the draft. It hasn't formally moved into the forum yet.
- An interesting conversation that is happening now is around MKR vesting and incentives at large. That discussion was a catalyst by the smart contracts budget. Long and I discussed bringing that thread out of the smart contracts due to the increased volume of discussion. Should the incentives be threaded at a higher level, or should it be in core units? What's a better framework and mechanisms? We will be discussing those deeper next week.
    - Derek: I just want to add that in the lead up to the Wednesday call next week, I'll broaden the conversation to the smart contract team regarding how we're looking to evolve, the discussion around potential sub-teams, and the different themes that we cover the team as of today and how it'll grow. If there are any questions from the community in the lead-up to that, feel free to drop them into the forum post that I wrote regarding the team. We can keep the discussion there. I'll have a presentation where we can walk through to get a better feel about the team's vision.

### MIPs Update

#### Charles St.Louis

[38:07](https://youtu.be/ueLk_ksOZ5w?t=2287)

- For this weekly MIPs update, we had the formal submission period for the March governance cycle ending on Wednesday, March 3rd. There were a total of 21 proposals formally submitted of 32 that were eligible. This included MIPs expanding from Technical, General Process, Core Unit Proposals, and Amendments. On Thursday, all 21 proposals were confirmed by LongForWisdom to proceed to the inclusion poll stage on Monday, March 8th.

![](https://i.imgur.com/fC1wcv7.png)

- The proposals were bundled into specific areas because 21 inclusion polls are a lot to vote on. We had them broken down into the Keg bundle, which covers the streaming payments using the Keg. Then there is the Core Unit Framework highlighting the entire framework for the Core Unit detailing the facilitator framework, the budget framework, the DAO primitives, and two amendments. If this framework is approved, the amendments will occur to the previous rules defined in MIP 16 and MIP 0. Initially, we had two technical proposals. One was the Term Lending Module, and of course, we had Liquidations 2.0 and General Proposals. We had Parameter Proposal Groups and the MakerDAO Multisig Wallet Management. Lastly, the 3 Core Unit MIPs for Real-World Onboarding, Risk Core Onboarding, and the Governance Team Onboarding.

![](https://i.imgur.com/S7uWXBh.png)

- This week, we had those 21 proposals voted on in inclusion polls. All the proposals have successfully passed. Today, we're going to have LongForWisdom confirm that all the proposals are eligible for the monthly MIPs governance poll on Monday, March 15th.

![](https://i.imgur.com/41Mh1uI.png)

- In terms of other updates, the March community green light polls will go out following Monday, March 15th. I'll show which greenlights polls that'll be after the newly submitted proposal review. We had three core units get proposed and are now in RFC. Additionally, we had a declaration of intent put forward for EURO-DAI. The previous one had been worked on and iterated on by Andrew Burban and co. Lastly, an official MIP zero amendment is being worked on as well by the Governance Domain Team. The proposals that are eligible for community green lights are ETH, 2 Curve LP tokens, 2 AAVE tokens, sUSD, SNX, sSUSHI, SolarX, and SD-BFDC. Ten in total will be put forward on Monday, don't forget to vote once those go out. That sums up my presentation for today.

![](https://i.imgur.com/D4QqC37.png)

### Inclusion Poll Review

#### LongForWisdom

[41:58](https://youtu.be/ueLk_ksOZ5w?t=2521)

- LongForWisdom: Perfect, thank you, Charles. I want to confirm that the inclusion polls were all successful. They will be in next week's MIPs bundle poll. Any other questions about MIPs?
    - Charles: It looks like Eli had something to add concerning how there are also MIP 9 amendments put forward to RFC recently.
    - LongForWisdom: There's definitely a lot of stuff in RFC at this point. Does anyone want to start a discussion on anything specific?
    - Amy: Do we want to talk about the governance process?
    - LongForWisdom: That was in the sidebar. We could discuss that briefly. The questions concern whether we should do any governance action regarding the optimism DAI bridge. Maybe Sam could chime in on that?

### Discussion

#### SamM

[43:42](https://youtu.be/ueLk_ksOZ5w?t=2622)

- SamM: What I said in the post is that we could run a declaration of intent for the fast withdrawal piece, but due to the time constraints, we need to get this online quickly after Optimism goes up. Because it's a permissionless system and we were to not offer this as an official bridge, somebody can take over and become the official DAI on Optimism. I wouldn't oppose running a signal request of an urgent poll to decide whether or not we should go forward with this.
    - LongForWisdom: We're expecting Optimism towards the end of the month, right?
    - SamM: Yes, that's what they said.
    - LongForWisdom: We can put the poll up next week on Monday to confirm the direction. Anyone else thinks we should be doing more in terms of governance?
    - Brian: It was brushed over very quickly, but there will be a multisig on Optimism controlling governance of that DAI token in the interim. There will be some authorizations to change parameters and things like that. There may be more to discuss concerning who will be in control of that multisig and how long.
    - LongForWisdom: Yes, that's a good point. Have you thought about who would be key holders for that?
    - SamM: That's something that we need to work out.
- Nik: Would people be against having the mandated actors that are not a part of the foundation be the signatories on the multisig? Is anyone immediately against that?
    - LongForWisdom: As one of the key holders, I'm not thrilled, but that's fine. We're the default option. That's something we could discuss offline and incorporate into the poll.
    - SamM: Kurt, you're correct. We will definitely want to give governance control. It's not trivial to forward the executive intent up into L2. Even in the medium term, we want to ship that over to governance.
    - LongForWisdom: Technically, does that need to be a multisig that's set up on Optimism?
    - SamM: Yes, teams are working on it right now, building a multisig using Gnosis. This is a problem that almost every team in the ecosystem has right now, so it's being worked on.
- LongForWisdom: Any other questions or comments on the Optimism DAI bridge?
    - Frank Cruz: Is this something that has to happen for every bridge?
    - SamM: What do you mean? Which component has to happen for every bridge?
    - Frank Cruz: The multisig.
    - SamM: It doesn't have to happen. It has to happen if we want administrative controls on things. The bridge is a version 1 because we're rushing it out there. We are absolutely going to upgrade it as we wrap our heads around the ecosystem. To facilitate that bridge upgrade, we do need some administrative control. Otherwise, it's just set in stone.
    - Kurt: I think the distinction here is not between having a multisig or no control. Instead, it is whether there is a multisig or control somehow given to the smart governance contracts. It's going to depend on a bridge-to-bridge basis and the extent to which bridge technology has developed. Since it's the first one, there are challenges to doing direct chief control immediately. In the long term, assuming we want governance to influence all the DAI bridges, we will need to start out with a multisig. We may also be able to start directly with the chief being in control. It depends on how the technology develops.
    - Brian: Right now, if you want to transfer your DAI to xDAI, it goes through a bridge that's controlled by the xDAI foundation, and it becomes the native token on that network. If you want to transfer to Binance Smart Chain, Binance will wrap that token and give you a receipt. Those are DAI placeholders that are out of our control on those other networks. We would receive full control of the DAI on Optimism. We want that because the bridge will need to mint DAI as it gets passed through. Still, we will also want authorizations to give the mint authority to a new system. Right now on mainnet, the only thing that can mint DAI is the DAI join adaptor Governance can't even mint DAI if they want to. On liquidations 2.0, we will have the ability to have multiple ways to mint DAI. One of those ways being the bridge.
    - Frank Cruz: Does that mean that Binance could technically mint a synthetic DAI?
    - Brian: They already do. I think there were over 50 million DAI in Binance Smart Chain already wrapped into a wrapped Binance DAI.
    - Frank Cruz: I meant a synthetic of a synthetic. If that makes sense.
    - LongForWisdom: You're asking if they can mint DAI that isn't backed, right?
    - Kurt: In that case, it's not DAI. Somebody can create a system that makes a synthetic that's pegged to DAI.
    - Brian: That would only affect the DAI on Binance Smart Chain, though, so they can mint all they want. You'd be responsible for auditing the amount of DAI in the wrapper contract that they have on Ethereum mainnet.
    - Kurt: It really affects you if you're a user of that synthetic DAI.
    - LongForWisdom: It's more of a problem if Binance passes it off as real DAI. I don't believe they're doing this now and don't plan to do so.
    - Kurt: Hopefully, that won't be done.
- Payton Rose: In terms of risk on the layer 1 side, what exactly are we dealing with here?
    - SamM: It's entirely opt-in, and anybody could deploy a bridge. There's no apparent risk to the Maker system. It's pretty safe. This will go up one way or another, so it's better if we get one that we could control and promote.
    - Brian: There's always smart control risk. There's a risk that the DAI that goes in the L1 bridge component can get stuck there.
    - Kurt: You can make a shortlist of the things that could go wrong when you're locking DAI in a contract like this. We need to do our due diligence and testing.
    - SamM: The fast withdrawal component is a risk that we need to analyze for the system since it's a new collateral type.
    - Kurt: It's worth noting that we can enable a bridge without enabling the fast withdrawal. Risks discovered to make that unattractive. It's essential to make that distinction. We could have the bridge with its particular risks with or without the risks of fast withdrawal.
    - Brian: If the liquidations 2.0 portion of it having the ability to mint a token called DAI was somehow subverted, you could theoretically mint any number of it. The message passing has to be tight.
    - Kurt: It wouldn't translate back to L1. That's not a risk to L1 or the main system. It's a risk to users of the L2 or things relying on that wrapped L2 token. There are risks on the L2 side for people transacting there as well. However, those don't translate back into L1 risks.
    - LongForWisdom: I would say the risks are more reputational than technical.
- Derek: I was looking at multichain the other day. If you have a look at the tokens there, you could imagine a scenario where Optimism launches. Sam's point around a permissionless nature of L2 means that you could end up with multiple versions of DAI or any other token on there. For a user experience, that could be quite challenging because if you choose the wrong one, you may not revert back to L1. It could be a loss of funds.
    - LongForWisdom: That's also just a nightmare for any integrations.
    - Frank Cruz: This happens in the real world, right? The Bahamas dollar is a dollar, and US dollars get lost everywhere. If some of these people take the risk of minting DAI or taking DAI on Binance or any other layer 2 chains' part life.
    - Brian: It is a risk to the mainnet system if our L1 DAI gets locked up in contracts. If it gets sent to Binance Smart Chain and decides we're not letting it out, that could be put pressure on the peg. Same if we have an L1 bridge that locks large amounts of DAI up, and our vault holders can't repay their debt. That would require us to try to solve that and get more liquidity on the market.
    - Frank Cruz: You're right. I didn't think about the peg. Speaking of the peg, I am wondering if Primoz is still around. Can he give us a little info about the Gauntlet report on Liquidations 2.0? Chris mentioned that the risk team is working with Gauntlet.

## Gauntlet Report on Liquidations 2.0

#### Primoz Kordez

[1:01:13](https://youtu.be/ueLk_ksOZ5w?t=3673)

- Primoz: Next week, we should publish an analysis of the proposed parameters. I was thinking of including my findings as well as Gauntlets'. Not sure if they want to come on a call and present their own findings. I can't speak on their behalf, but so far, it looks good. They simulated different combinations of parameters. There are nine parameters possible for each vault type. We're primarily concentrated on the price curve, how steep the price curve should be, as well as the pros or cons if we were to make it steeper or flatter, and when auctions clear. We want to know if they are moving too fast or too slow? We have similar results in some ranges of parameters, which is good. However, we're still optimizing the best combination of parameters. I can not make a whole presentation right now on their behalf.
    - Frank Cruz: Thank you, Primoz.
    - LongForWisdom: You mentioned nine different parameters for each vault type, increasing complexity over the current system. I'm interested in whether or not there is there any way of making that less complex for governance when they have to deal with it? Do you expect those nine parameters to be different for every vault type?
    - Primoz: I've been thinking about this one a lot. We'll make few vault types with a high collateralization ratio than others with a lower one. This is associated with the assets' volatility. The more volatile the asset is, the higher the liquidation ratio. This also affects the price curve and the buffer.
    - LongForWisdom: In terms of price curves, is there any number of mathematical functions that you could use as a price curve? How stable should we expect that to be?
    - Primoz: It's going to be an exponential price curve, not linear. You're starting above the OSM price with the buffer. In the early phases of the auction, you may want the price to fall faster, so that's why the exponential curve makes more sense. The difference is the slope.
    - LongForWisdom: Thank you for that.
    - Primoz: I'm planning to write the complete analysis soon. Hopefully, it won't be too complicated.
- Tanner Allar: Another thing worth mentioning that the complexity, in general, is going to increase over the long term. We're exploring decisions. You can call it computerized governance to better understand the system's state and the effects of policy changes and proposals.
    - LongForWisdom: Okay, that sounds intriguing.
- Nik: The ABDK audit was thorough. Relative to what the foundation has usually paid for other audits, it's a very good value. I wanted to reach out to them to see if we could reach an agreement in terms of retaining them. Every month, they commit a certain amount of hours to do auditing work for us. It's a consistent form of income for them, and it's a guaranteed slot where we could get auditing work done. Getting auditors is a process that could take many, many months if you want good ones. People frequently will do this trade-off when they can't get the good ones quickly, and they'll go with a not-so-good one because they're available. I want to formalize this into a signal request. I would like to go ahead and have that conversation with them.
    - Brian: The audit came back, and it was very comprehensive. I was very happy with what they produced for us.
    - Amy Jung: Are you guys thinking that it would fall under a core unit budget, or would we pay directly from the protocol?
    - Nik: I was not thinking about it from a core unit perspective, but maybe that is the right way to do this. I want to lock these guys in before they get popular.
    - Kurt: There are a few options there. It could come out of a combination of the smart contracts and oracle teams' budgets because they would both make use of them.
    - LongForWisdom: I think expecting them to fill out the core unit sub proposals to start with is a big ask. Perhaps we want to set them up with a retainer agreement for the first few months, and then if they're going to formalize that further, we could bring them in.
    - Nik: I'll approach them with that idea. If there's a warm response from their side, I'll put out a signal request on the forum.
    - LongForWisdom: That sounds fine.

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

## Credits

- Artem Gordon produced this summary.
- David Utrobin produced this summary.
- Denis Mitchell produced this summary.
- Gala Guillen produced this summary.
- Sai Teja produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
