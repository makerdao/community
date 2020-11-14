# Episode 101: July 16, 2020

## Agenda

- [00:00](https://youtu.be/zyTd7pUX__M): Intro with LongForWisdom
- [02:02](https://youtu.be/zyTd7pUX__M?t=122): Governance at a Glance with LongForWisdom
- [05:30](https://youtu.be/zyTd7pUX__M?t=330): Weekly MIPs Update with Charles St. Louis
- [10:42](https://youtu.be/zyTd7pUX__M?t=642): Inclusion Polls Review with LongForWisdom
- [12:47](https://youtu.be/zyTd7pUX__M?t=767): PSM Discussion with LongForWisdom
- [17:32](https://youtu.be/zyTd7pUX__M?t=1052): TUSD Update with Lucas Manuel
- [30:25](https://youtu.be/zyTd7pUX__M?t=1825): Governance Chief Contract Redesign with Derek Flossman
- [48:56](https://youtu.be/zyTd7pUX__M?t=2936): MANA and LEND Evaluation with Brian McMichael
- [52:15](https://youtu.be/zyTd7pUX__M?t=3135): State of the Peg with Vishesh Choudry

## Video

<https://youtu.be/zyTd7pUX__M>

## Introduction

### LongForWisdom

#### Agenda Summary and Talking Points

[00:00](https://youtu.be/zyTd7pUX__M)

- Hello everybody. Welcome to the July 16th edition of the Governance and Risk meeting, taking place on Thursday, July 16th at 4 PM UTC. I am LongForWisdom, one of the Governance Facilitator for MakerDAO, joined by all sorts of people with various levels of affiliation. We have a fairly full agenda this week.

## Governance

### LongForWisdom

#### Governance at a Glance

[02:02](https://youtu.be/zyTd7pUX__M?t=122)

- [Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84): If you have the time to read over and vote in active threads, that would be much appreciated.

##### Discussions

- [Negative DSR / TRFM](https://forum.makerdao.com/t/negative-dsr-trfm/3175)
  - OliverNChalk begins a discussion and argues in favor of negative rates.
- [Turn ETH liquidations off until the peg is restored](https://forum.makerdao.com/t/turn-eth-liquidations-off-until-the-peg-is-restored/3221)
  - bit suggests disabling ETH-A liquidations as a radical solution to fix the DAI peg. Most people prefer not to do that, but there was some debate around lowering the liquidation ratio.
- [What? So What? Now What? PSM Solution](https://forum.makerdao.com/t/what-so-what-now-what-psm-solution/3154)
  - FourthStreet writes up a summary of the pros and cons of PSM implementation, which I think are worth the read. We've had a couple of good discussions.

##### Signal Requests

- [Should we raise the ETH debt ceiling?](https://forum.makerdao.com/t/signal-request-should-we-raise-the-eth-debt-ceiling/3228)
  - Cyrus of the MakerDAO Risk Team asks if we should increase the ETH-A debt ceiling since we're nearing the ETH debt ceiling again.
- [TUSD Update (Forum Poll): Concerns Surrounding the TUSD Collateral Type](https://forum.makerdao.com/t/tusd-update-forum-poll-concerns-surrounding-the-tusd-collateral-type/3225)
  - Lucas Manuel from the Maker Foundation Smart Contracts team asks how governance wishes to move forward with the TUSD collateral type considering the recent contract upgrades.
- [Adjust the ZRX and KNC Risk Premiums](https://forum.makerdao.com/t/signal-request-adjust-the-zrx-and-knc-risk-premiums/3181)
  - monet-supply proposes decreasing the risk premiums for KNC and/or ZRX to make them more attractive, in the quest to emit more Dai.
- [Consider refinements to PSM or release ASAP?](https://forum.makerdao.com/t/signal-request-consider-refinements-to-psm-or-release-asap/3165)
  - Joshua_Pritikin asks whether the first version of the PSM should include some of the proposed improvements, or should be implemented without refinements. I think in general, people would prefer to release it sooner rather than try to build in something complicated initially.
- [Increase duration of governance security module?](https://forum.makerdao.com/t/signal-request-increase-duration-of-governance-security-module/3065)
  - Joshua_Pritikin asks whether we should increase the Governance Security Module delay to 24 hours to make it easier to defend against governance attacks.
- [Should MakerDAO signal that it prefers for COMP rewards for DAI suppliers and borrowers to be disabled?](https://forum.makerdao.com/t/signal-request-should-makerdao-signal-that-it-prefers-for-comp-rewards-for-dai-suppliers-and-borrowers-to-be-disabled/3112)
  - equivrel (Lev) asks if Maker Governance should signal to Compound that we would prefer COMP rewards for DAI to be disabled. It's failed to pass, so we won't be recommending that.

## MIPs

### Charles St. Louis

#### Weekly MIPs Update

[05:30](https://youtu.be/zyTd7pUX__M?t=330)

![Title Slide](https://i.imgur.com/ZA1PBh3.png)

![This Week](https://i.imgur.com/D97pUG3.png)

- To address the issues, we will need to have further conversations in the forum threads.
- It makes sense that the MIP12 amendment didn't pass because it relates closely to MIP17 and incorporates some of the logic in having these reoccurring adjustments in place for MIP17. And that was for the actual debt ceiling and actual risk premium adjustments.
- I'll follow up on my MIPs update later in the week, and we'll have to start more open conversations, hopefully in the [MIPs rocketchat channel](https://chat.makerdao.com/channel/mips) and [the forums](https://forum.makerdao.com/tag/mips), about how we can get the best solution for both of these.
- During the Governance Poll Review, likely only five of them will be moving forward.

![Next Week](https://i.imgur.com/LVidDXX.png)

![Other News](https://i.imgur.com/sz7mhVE.png)

- Brian will be covering the smart contract assessment of both of these collateral types later in the call.
- This month's greenlight polls are going live before as part of the amendment.
- We'll see a bunch of collateral onboarding polls go up. I think for seven assets.

![Other News 2](https://i.imgur.com/xnUnUi1.png)

- I do encourage anyone that hasn't checked [MIP20](https://forum.makerdao.com/t/mip20-target-price-adjustment-module-vox/3196) out yet, to do so in the forums an provide feedback and input.
- I believe that a Declaration of Intent was [proposed by Akiva](https://forum.makerdao.com/t/mip13c3-sp1-declaration-of-intent-forward-guidance/3130?u=davidutro), and he's working with other community members on it.
- TUSD update: Lucas will be speaking about that as well.

![Join the community](https://i.imgur.com/cbmBsGo.png)

### LongForWisdom

#### Inclusion Review

[10:42](https://youtu.be/zyTd7pUX__M?t=642)

- As Charles said, there were seven MIPs and sub-proposals that went through last week.

##### MIPs

- Passed: [MIP16](https://forum.makerdao.com/t/mip16-the-weekly-governance-cycle/3008/3) - The Weekly Governance Cycle
- Passed: [MIP18](https://forum.makerdao.com/t/mip18-meta-parameter-adjustments/3118/4) - Meta-Parameter Adjustments
- Passed: [MIP19](https://forum.makerdao.com/t/mip19-liquidations-system-1-1-upgrade/3098/4) - Liquidations System 1.1 Upgrade
- Failed: [MIP17](https://forum.makerdao.com/t/mip17-weekly-actual-debt-ceiling-and-actual-risk-premium-adjustments/3021) - Weekly Actual Debt Ceiling and Actual Risk Premium Adjustments

##### Sub-Proposals

- Passed: [MIP18c4-SP1](https://forum.makerdao.com/t/mip18c4-sp1-subproposal-for-modifying-meta-parameter-adjustments/3119/4) - Subproposal for Modifying Meta-Parameter Adjustments
- Passed: [MIP12c2-SP3](https://forum.makerdao.com/t/mip12c2-sp3-domain-work-requirements-for-the-onboarding-of-mana/3139) - Domain Work Requirements for the Onboarding of MANA
- Failed: [MIP4c2-SP5](https://forum.makerdao.com/t/mip4c2-sp5-mip12-amendments/3137) - MIP12 Amendments
  - "Yes" votes exceeded the "No" votes, but without passing the threshold.

## Risk

### LongForWisdom

#### PSM Timeline

[12:47](https://youtu.be/zyTd7pUX__M?t=767)

[The PSM Governance Timeline - Forum Thread](https://forum.makerdao.com/t/psm-governance-timeline/3204)

- As part of the governance timeline and plan for the Peg Stabilization Module(PSM), I mentioned there would be a chance to discuss this in the next few meetings. I don't think we can afford to spend the entire meeting to discuss it like last week, but we can give it about ten or fifteen minutes.

##### PSM Timeline - Next Steps

- The PSM timeline that I shared on the forum states that there will be a poll on Monday about whether we want to implement the PSM in some form. This will be an on-chain governance poll.
- The week after, there will be one or more governance polls that determine the parameters for the PSM implementation.
- On the 31st or possibly the week after, which is on August 7th, we will have executive votes that will actually enable the PSM depending on the smart contract team's workload. It might be a good idea for Governance to start considering what parameters we would like to set.

##### PSM Parameters

- Cyrus: Is there an overview of what the various parameters are that need to be considered for the PSM, or will there be one put out?
  - LongForWisdom: Yes, there is one. I added it to the PSM timeline post. We also have the option of implementing multiple copies of that with various parameters. For each PSM, there are these four parameters:
    - debt ceiling
    - fee-in
    - fee-out
    - token.
- LongForWisdom: We can have a number of those parameters but shouldn't exceed more than five parameters because that would be a lot. I haven't thought too deeply about it yet, but do you have any thoughts about what possible settings you would want for these parameters?
  - Cyrus: No, we are going to start reviewing the spec and seeing what needs to be done, and hopefully, we will put out something over the next few days. Up to now, we are just waiting for the spec to finalize.

##### PSM - Sets of Parameters

- LongForWisdom: One point is that because there are four parameters for each PSM, and there's a decision to be made about how many of these we will have, it is probably best to vote on the parameters in the form of sets. We have someone propose sets of parameters for a given PSM, and then we pick one out of a maximum of five sets, rather than voting on each parameter individually because that would get confusing (considering the fact that we can apply 1:N PSMs.) That is something I would consider. It's also why we probably won't be voting individually on parameters and instead be voting on a set of parameters or a strategy to follow with this implementation.
  - Cyrus: Yep, that makes sense.
  - Christopher Mooney: I want to say to take my silence as a complete agreement with the process that you guys will follow.
  - LongForWisdom: That's always nice to hear!

## Smart Contracts

### Lucas Manuel

#### TUSD Update

[17:32](https://youtu.be/zyTd7pUX__M?t=1052)

- I'm Lucas, on the Smart Contracts team. Over the last week, I was tasked with looking at the new TUSD implementation and whitelisting it. When I was reviewing the code, I found four main concerns if we choose to whitelist this new implementation.

##### Declaring Deposit Addresses

- TUSD has functionality that enables them to declare deposit addresses. So if one address is declared as a deposit address for another, if you transfer TUSD tokens to that first address, it automatically gets routed to the second address. The issue with that is that if our Join adaptor for TUSD is declared as a deposit address, someone would be able to call `join` and the `transfer from` in that `join`, would forward the funds out of the Join adaptor. But our internal accounting system in the VAT would be convinced that there were TUSD tokens in the VAT. So it would compromise the internal accounting system of the VAT. People would be able to mint unbacked Dai because there would actually be no TUSD in the system. So that's a big concern.

##### TUSD Private Keys

- If the TUSD private keys were to be hacked, the implementation could be changed to a malicious ERC20 implementation. A hacker could mint infinite TUSD and then actually change the ERC20 back to the whitelisted implementation. They could then use this unbacked TUSD to enter a vault and mint, through proxy, unbacked Dai. Also a concern for us.

##### Frozen Period while on Review

- Every time the TUSD team upgrades their smart contract, the Smart Contracts team has to review the new code and whitelist that implementation before anyone is able to exit their vault positions. So in between the time that a smart contract is upgraded and we have reviewed it, the TUSD funds on the Protocol are frozen. Due to the fact that this TUSD is about 20 times the size of an average ERC20 token implementation, it takes a very long time to review. If there were multiple upgrades per year, this could be a big-time suck on the Smart Contracts team.

##### Diminishing Returns of Reviewing an Upgradeable Token

- TUSD is currently is the only collateral type in the Maker Protocol, which is upgrade-able. We're concerned that this token could lead to diminishing returns because time would be taken away from the Smart Contracts team to review and onboard new collateral types and adding them to the collateral portfolio to maintain this existing collateral type. We said that this would be worth it if it was a more valuable collateral type, such as wBTC, something that provides revenue for the protocol and has a high amount of utilization. But TUSD has a low stability fee and a low debt ceiling. The amount of benefit for the amount of work seems to be leading to diminishing returns.

##### Vote on the Forum Poll

- I posted a [forum poll](https://forum.makerdao.com/t/tusd-update-forum-poll-concerns-surrounding-the-tusd-collateral-type/3225) yesterday, it's going to be up for seven days. Next Wednesday, we'll finish up the forum poll and move forward from there to an on-chain ranked-choice poll. I encourage everyone to vote.

#### Discussion 1

##### TUSD Upgrades Frequency

[22:18](https://youtu.be/zyTd7pUX__M?t=1338)

- LongForWisdom: Have we had any contact with the TUSD team about the upgrades, and how frequent they will be?
  - Lucas Manuel: They said that for sure, they will be upgrading again by the end of the year, but outside of that, we don't know.
  - Christopher Mooney: I'll add that their team was super cooperative and very helpful with us as well. Their engineering team seems to be great.

##### Implementation Upgradeability

- Lev Livnev: If I understand correctly, for TUSD right now, we're using the GemJoin5 adaptor, which that doesn't have this implementation pinning feature the GemJoin6 does. Even though USDC, just like TUSD, uses the same implementation proxy pattern. I assume this is because USDC was added on an accelerated timeline, but it's worth noting that, in principle, the same concerns apply. Also, in principle, we may want to be using the GemJoin6 pattern for USDC as well.
  - Mariano Conti: You're correct on both counts. It was added quickly, so we didn't have the Join adapter with the implementation. We're looking at it for the `PSM`. But even then, for example, USDC, the implementation is a small sub-contained standard ERC20. TUSD, on the other hand, has been upgraded at least three or four times this year alone. Every time, it keeps adding new code to review. What we've heard from the TUSD team is that, at least for now, they don't plan to do any upgrades. They have also mentioned that, if possible, they would let us know beforehand. But I do agree that it should also have the GemJoin6 or something similar.

##### Moving Adaptors

- LFW: Is it easy to move from the current adaptor to a new adaptor?
  - Mariano Conti: It is more complicated. If the `PSM` ends up being something obsolete, the USDC-A, for example, we could see it go organically go from one to the other. Otherwise, we would probably need some kind of plan. We can discuss this in a future call.

##### Some Features of the Tokens

- Brian McMichael: We did look over the contract. Currently, it's got the ERC20 implementation in there, and they also have a blacklist, a rewards program, they have implemented their own gas refund component to the token. There's the forwarding that was mentioned, as well. Those are things that come to mind. Some of this stuff could have probably been done in a more modular way, but they have put it all into the token, and it means we have to review it all when we go through it.

##### Feedback to the TUSD Team about Modular Design

[26:48](https://youtu.be/zyTd7pUX__M?t=1608)

- Lev Livnev: Not that it matters so much for us, but has someone given the feedback that because this over-engineered upgradeable implementation potentially we're going to end up having to drop this token because it's not worth the effort reviewing it all the time? It just seems that this wasn't the greatest decision on their part.
  - Christopher Mooney: I've raised some of these concerns in the forum threads, hoping that they get a chance to read that. The nice thing is that their token is upgradeable so they could upgrade and fork all that stuff out and maybe make the design more modular.
  - Cyrus Younessi: That discussion has been floating around in quite a few places.

##### Forum Poll Options

- LongForWisdom: Just to summarize the three options of the poll, they are:
  - Approve this new implementation of TUSD with the same risk parameters.
  - Approve this new implementation of TUSD with different risk parameters.
  - Set the debt ceiling of TUSD to zero.
- Lucas Manuel: We chose to propose the idea of setting the debt ceiling to zero because, if they do upgrade the smart contract in the future to be simpler and easier to review, we would be happy to onboard it back. This would allow the people that have their funds in the vault right now to be able to exit while not allowing any new vaults to be opened with TUSD for the time being.

##### Silver Linings

- Christopher Mooney: We were lucky this time that users didn't have a bunch of TUSD locked in the protocol. I think one of the engineers has. There would have been a lot of complaining and user pressure to quickly approve the new implementation; otherwise, that would have added a whole social component to this.
- Mariano Conti: Also, this collateral type has no liquidations activated, so you can imagine if the did have liquidations, and for some reason, they upgrade the token, and nobody can join in anymore, and the price is dropping, and things like that. These things help for future collateral types but may end up in this situation as well.

##### Transferring the Trust from the Code to the Team

- Chris Mooney in the `chat`: In the context of trust but verify, upgradability basically removes the ability to "verify" a contract by breaking code immutability. IMHO, any upgradable contract, reduces back down to how well one can "trust" the team that manages the keys. All upgradable collaterals should be thought of in this paradigm when thinking about monetary and technical risk.

## Governance

### Derek Flossman

#### Governance Chief Contract Redesign

[30:25](https://youtu.be/zyTd7pUX__M?t=1825)

![Intro Slide](https://i.imgur.com/TjxT4aC.png)

- I'm Derek from the Product team. Over the last weeks or months, I've been working with the Smart Contracts team on coming up with a redesign of the Governance Chief Contract. So I'm going to provide a summary of a recent [forum post](https://forum.makerdao.com/t/governance-chief-contract-redesign-a-pre-mip-discussion/3080).
- I'll go over the definition of Chief, a bit about the problems, the goals of this initiative, and the key concepts and features that are a part of it. Also, try to provide an indicative timeline.
- I have flagged the [Chief Redesign External channel](https://chat.makerdao.com/channel/chief-redesign-ext), so feel free to ping myself or LongForWisdom. We'd love to have more people participating in the discussion around some of these features. I welcome you all.

![101 Refresher - DSChief and its Scope](https://i.imgur.com/EH2voGL.png)

- Changes can mean:
  - DSR
  - Stability Fee
  - Oracle changes
  - Collateral changes
  - Process and protocol changes
- There's also a bunch of technical stuff that the DSChief includes in regards to its interaction with the Chief Approvals. I won't go into details, but I'm happy to break this out into a more formal structure in the post with the help of the Smart Contracts team if we'd like to get into that detail.

![DSChief Problem Space](https://i.imgur.com/eDJcv1D.png)

- I will attach the presentation to the forum post.
- The example on the bottom right shows an example of the recent MKR distribution between different proposals.

![The Goal - Security and Usability](https://i.imgur.com/QMhG1sX.png)

- We haven't spoken about it, but there's an opportunity to use the wrapper, making it a lot more efficient and work with the token.
- There may be trade-offs depending on how the system is designed.

![Proposed Redesign](https://i.imgur.com/G0g5FjR.png)

![Threshold and Minimum Quorum](https://i.imgur.com/O01L6J7.png)

![Threshold and Minimum Quorum - Real Numbers](https://i.imgur.com/rBIVST1.png)

- If we take the model and put it on the actual executive proposals this year, we see that we're actually split between 50,000 and 100,000 MKR.
- It looks like the beginning of June was our highest. Just over 100,000 MKR participating.
- We need to take the theory, analyze it, plot it against the actual MKR participation, and make sure we have something that introduces security without locking the system.

![Other Key Concepts & Features](https://i.imgur.com/rvLEN0e.png)

- We also need to consider gas costs and optimize for that as well.

![Other Key Concepts & Features - 2](https://i.imgur.com/aDpzyxJ.png)

- Spell Creation Bond may be very useful from a future-proof point of view.
- My plan will be for the formal MIP to have a list of all the values that we need to decide on, probably in a tabular format, and we can just work through them and make sure that it aligns with everyone's view.
- We might need more discussion on Pause Support, but I wanted to include it.

![Indicative Q3 Next Steps](https://i.imgur.com/qMIUk2A.png)

- The first phase is where we are now.
- I haven't elaborated on the coordination migration plan here. However, it's quite important, since there's a migration risk at this time, the same we mentioned earlier in the presentation. We have to make sure that migration from one Chief to the other is coordinated, understood by the Community, and that everyone is on board.
- That concludes the presentation. Feel free to ask any questions. Smart Contract team, feel free to jump in and add or correct anything.

[Governance Chief Contract Redesign: A Pre-MIP Discussion - Forum Thread](https://forum.makerdao.com/t/governance-chief-contract-redesign-a-pre-mip-discussion/3080)

#### Discussion 2

[45:34](https://youtu.be/zyTd7pUX__M?t=2734)

##### Improving the Monthly Governance Cycle

- LongForWisdom: Thanks, that was very interesting. Looking forward to being able to get rid of bundling the unrelated changes together in the voting cycle. One thing I would like to mention is that this new Chief gives us the opportunity of modifying how the monthly governance cycle works to make it more efficient. That's another possible benefit of this.

##### Delegation

- MakerMan in the `chat`: Any concept of delegation in this? Meaning having one wallet pass MKR deposited to do something to another wallet to actually do it? Or are we always going to require a wallet putting up the MKR to do the action?
  - Derek: A lot of people are interested in delegation, and we started looking into that we found that the Chief Contract we have today wasn't optimal, and if we were to do delegation with what we have, we would have to redo it once we did the new Chief. So how much delegation we will be able to roll into this? I'm not sure. I think our approach will be to optimize the Chief Wrapper to enable us to do delegation. But that will be a separate, not core set of contracts. I'll leave it at that because at this point in time I don't know. But I will work to do the delegation document, and I think that will be the next one we will put out there for the Community to take a look at. I'll try to get it out in a couple of weeks and make sure everything aligns.

### Brian McMichael

#### MANA and LEND Smart Contracts Evaluation

[48:56](https://youtu.be/zyTd7pUX__M?t=2936)

- This is the Smart Contracts technical presentation on MANA and LEND, and I do have pretty good news.

![](https://i.imgur.com/LZgXC0l.png)

- MANA is an ERC20 token.
- It follows standard ERC20 patterns.
- It's not upgradeable, so we would be able to use it with the `GemJoin` adaptor with this, which is the standard adaptor we use for BAT.
- There's a mint function, which is mintable by the `Crowdsale` contract. However, the `Crowdsale` contract has been self-destructed. So the total supply for MANA is the current max supply.
- There was an audit done by OpenZeppelin, and the team has given this one a low-risk assessment.
- [MANA - Collateral Onboarding Risk Evaluation - Forum Thread](https://forum.makerdao.com/t/mana-mip12c2-sp2-collateral-onboarding-risk-evaluation/3128)

![](https://i.imgur.com/yBdkzIQ.png)

- It's also a very low risk, basic, ERC20 token.
- Non-upgradeable.
- It can also use the `GemJoin` adaptor.
- The only non-standard feature we found in this one is that the decimals return a `uint256` instead of a `uint8`. Which doesn't really affect our adaptors.
- This does have mint functions as well. However, there's a state machine built into the contract such that the coin is only mintable in the presale or ICO state, and we can't go back from there.
- There's also an [audit done by Victor Mezrin](https://github.com/ETHLend/ICO_SmartContract/blob/master/ETHLend%20Token%20Sale%20Smart%20Contract%20Security%20Audit%20Report.pdf), and that was approved for MainNet.
- [LEND - Collateral Onboarding Risk Evaluation - Forum Thread](https://forum.makerdao.com/t/lend-mip12c2-sp2-collateral-onboarding-risk-evaluation/3127)

## Risk

### Vishesh

#### Relevant Links

[MCD System Stats](http://daistats.com)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)
[Maker Vault Stats](http://makervaults.descipher.io/)

#### The State of the Peg

[52:15](https://youtu.be/zyTd7pUX__M?t=3135)

![Overview](https://i.imgur.com/sgnRmpO.png)

- Dai from ETH has grown to 154 million Dai out of 160 million debt ceiling.
- Total Dai at \$198 million.

![ETH-A <-> Dai Supply](https://i.imgur.com/2J8XeNx.png)

- A few significant mints over the last couple weeks, where it ballooned from 114 million to 154 million.

![USDC-A <-> Dai Supply](https://i.imgur.com/vhrsf9o.png)

- USDC-A roughly 19 million Dai jump issued since July 1st. Primarily one to two large users. We saw it grow from then.

![WBTC-A <-> Dai Supply](https://i.imgur.com/K6iAko7.png)

- After the initial 10 million steady-state utilization, it increased pretty really quickly to 20 million after the DC was increased.

![BAT-A <-> Dai Supply](https://i.imgur.com/tupxC1E.png)

- A significant dip in BAT after the March 12th events, and then another dip on July 1st timeline. As we all know, a few weeks ago, Compound Farming activity began, which impacted the Dai ecosystem in a significant way.

![Table Supply Borrow](https://i.imgur.com/CmFurR9.png)

- We see a significant amount of Dai being supplied in Compound. Obviously, there's a significant amount of borrow, but given the nature of the re-wrapping, the biggest net impact here is the additional 85 million Dai sitting as reserves. For other assets such as USDC and ETH, there's an even larger buffer in the amount that's supplied versus the amount borrowed.
- Given the nature of profitability of the different types of farming behaviors with various projected stabilities and yields, those are being used as collateral effectively for other borrowing behaviors on Compound.
- That margin of the amount of Dai being borrowed versus supplied on a percentage basis is much smaller than other assets.

![Compound Loans Originated](https://i.imgur.com/lN0YTAK.png)

- In the last week or so, about \$300 million in nominal borrow of Dai happened on Compound. That doesn't necessarily reflect the amount of net borrow increase. That's a distinction that we can touch on. The method of accounting for borrow and supply leads to virtual borrow interest that is effectively achieving a more aggressive `CR`. For the amounts of loans outstanding, that's a large looking number at around 800 million. But given that Dai supply outstanding is 154 million from ETH and another 40 or so million from a couple of other assets, we're looking at a total of about 190 some million Dai issued there, and 88 million of that Dai is in the DSR(because of Compound.)

![Table Supply Borrow](https://i.imgur.com/CmFurR9.png)

- Net you're looking at 100 million Dai floating out there, and you've got an excess supply in Compound of 85 million Dai.
- So that's a pretty significant chunk of the Dai supplied floating out there that is currently sitting on Compound as supplied assets. That's something to be aware of, as movements in this pool of Dai could have significant impacts.

![Debt Collateral Charts](https://i.imgur.com/rissl9x.png)

- We have seen an increase in positions living at the lower collateralization Ratios, which is more risk to be aware of and how to go about handling and managing that risk.

![Projected Dai liquidated](https://i.imgur.com/RuNxvHn.png)

- Even at an ETH price of \$170, you'd be looking at 30 million Dai liquidated.
- At \$150, you'd be looking at a total projected Dai liquidated of about 70 million.
- Those are pretty significant amounts, and those are not completely unrealistic potential price drops for ETH.

![ETH price drop](https://i.imgur.com/o2ALBsl.png)

- The ETH price is already falling a bit down to $235-ish. During the last week, the ETH has been falling, and the Dai price has stayed consistently at what a lot of people call an elevated level, around $1.02. In the grand scheme of things, this is a legitimate elevated Dai price.
- Earlier in June, we saw Dai fluctuating between 1.00 and 1.01. Around the beginning of July, we saw the Dai price rise and sit at 1.02, and since then, it's come down a little bit.
- In the past, the peg was mainly driven by ETH price movements. It's not 100% clear whether ETH price is driving what happens with the Dai peg.

![Chart last week](https://i.imgur.com/bhkOohF.png)

- Some of the fluctuations in ETH price would historically produce different effects on what's going on with the Dai price.
- When ETH started to fall from $246-ish to around $239, the Dai price did rise a little bit. But since July 13th or so, as the ETH price was coming down, you did not see a commensurate rise in the Dai price, it actually fell a little bit. That was a bit contrary to what we usually see. It's important to think about all this external ecosystem around Dai and how it's impacting supply and demand.
- With just the significant amount of increase in supply, particularly in ETH-Dai supply in the last two weeks, it makes sense to consider that there is a portion that's been supplied on Compound, but also a decent amount that probably made its way onto the market in terms of selling pressure.
- All that minting is at a very low cost, so there are very few barriers at the moment for people looking to lever up, mint Dai, sell it, or use USDC vaults, despite cap on DC, for getting free hedge positions. If you look at a vault with USDC, where liquidations are not enabled at the moment, it's a pretty low-risk option for minting and engaging in multiple different kinds of yield-seeking behavior. COMP farming is just one example, but there are plenty of others.

#### Discussion 3

##### USDC-A Debt Ceiling Not in Use

[1:04:21](https://youtu.be/zyTd7pUX__M?t=3861)

- Vishesh: The USDC-A DC was raised. There's the potential for that minting behavior. When we were looking back on July 1st, there was an immediate utilization of the amount of the available DC. That hasn't jumped again to cap out the "increased leash." It's worth considering to see if the potential for utilization is still there. A few large users drove a huge chunk of that utilization. Whether we expect to see if another large user comes in and uses the remaining DC, how do we want to handle it? Sam suggested lowering the base rate. There's a conversation to be had there.

##### Some Risks of USDC and its Concerns

- Vishesh: If you're providing low-cost routes for minting Dai and getting access to a lower risk capital position and then using it for higher-risk higher-yield activities, there is a question of how low you want to make the rates to incentivize that, versus accounting for the risk that you're inherently underwriting by facilitating this behavior. We've looked at the MKR-ETH collateralization ratio, and most people have nestled on the USDC collateral positions being a lower risk pool. It's always something to keep aware of, that as the pool grows, the risk becomes different. It's not necessarily a market risk. Given that liquidations aren't currently enabled, we don't see too many people concerned with that USDC collateral pool.

##### USDC Stability Fee

- Vishesh: There are independent threads on how the fees are being managed and when the ceilings are moved. MakerMan is suggesting a more comprehensive conversation on that. I'm not sure what exactly you would do differently. Right now, it's not been a risk-driven conversation on what the Stability Fees are, but more on the levels at which you incentivize different behaviors. The DCs appear to be moved when you need more slack. It's not necessarily the wrong way to manage that, just stylistic. I don't know if you would change the narrative of how to choose to set those DCs. Right now, it seems to be that when you want to incentivize more utilization, you provide more slack and when it's not being used, you lower the SFs.
- Vishesh: That's the suggestion in the chat about the USDC Stability Fee. That's a conversation to be had with the community. Not sure if I would be able to comment on that right here or now.

##### Risk, Peg, and Parameters

- Makerman: I haven't posted on this. We are taking on risk, though. I don't have a good vault analysis tool to look at why we have these big numbers of liquidations that have higher risk points. I think it's just bigger players taking on farming risks and using their ETH to do it. You'd like to raise fees to capture some of these farming activities to mitigate the risk. You do that, and the peg might go up, you put more strain on it. Literally, half of available Dai is stuck in the DSR via Compound. Do you want to take on the risk behavior? I honestly don't know. I don't know if anyone knows. But it's kind of the real question here. If the peg is number one, and three out of four people say peg is a big deal, including Rune, then everything else isn't as important. I don't have a good feeling about that, but it has implications for stretching other things. If we're going to only grow Dai by growing assets, you have to think about how to do that. We have three key players. Unfortunately, we have two more on top of ETH: USDC and WBTC. WBTC wants more. We could raise the rate while we raise the DC and see if they take it again. USDC-A, if we want to help that, we got to come down on rate. Do we want to coordinate and try to get another 50 million to touch this risk and have risk behavior, and when the Compound thing switches, it's going to switch hard and fast. The big money is going to move out of this, and we will have to step it up. Fortunately, we have a lot of good tools to do that. I just don't know how we do the coordinated thing. I'd love to hear from Vishesh, Cyrus, Christopher Mooney, Rune, and others, about all the implications on what we do and when.

##### Consider the Lifecycle of the Dai and Market Fundamentals

[1:11:36](https://youtu.be/zyTd7pUX__M?t=4296)

- Vishesh: One thing to keep in mind is that increasing supply only impacts the peg when users are willing to mint that dai and sell it on the open market. That's an important part of the conversation, for the types of supply created are fragmented into multiple use cases. You have to consider what is the end use-case and what is the path to removal from circulation for every marginal Dai that's created. Is it being created just to lock on Compound, is it being created to be sold for something else? Considering the lifecycle of that Dai is a little bit missing, but it's important to keep in mind that if the goal is bringing down the peg, you have to target use cases of Dai that will put more liquidity on the open market and help drive that price down. You also have to think if that's something that will happen at this point in time, if there are other market conditions or smart contract-driven fundamentals that are putting a premium on Dai that makes Dai worth more than 1 USDC. That's another important part of the conversation that is being under-discussed. For peg management, increasing supply is not 100% equivalent to driving down the peg. It only works when that supply makes it way onto the open market.

##### Multiple Tiers of ETH to Discover Risk Appetite

- Christopher Mooney: Let's imagine the peg was at 1. We would all be concerned with the amount of risk building up. Just a month ago, we were looking at that histogram where liquidation ratios wherein the 500%-600% range. We had a lot of people that were risk-off because of Black Thursday and the overall macroeconomic sentiment. COMP has incentivized ETH-A collateral holders to go risk on. They're pushing towards lower bounds where liquidations are extremely risky. And thanks for calling that out, Vishesh. If we were at peg right now, we would probably want to suggest multiple ETH collateral types, where the effective 0% SF would be reserved for something that had a liquidation of maybe 300% or something that pushes people to have a higher CR. Maybe we need multiple tiers at this point for ETH. Naturally, people that want the lower rate that have higher liquidation ratios are going to move into those other tiers, and we start to get a good idea on who's "risk-on," and how much would we have to liquidate of those people. Maybe not ideal.
  - MakerMan: I agree with that. We're coming to "more tools better." The idea of having multiple tiers of the same thing: why do that? It's to manage risk by setting the liquidation ratio. Also, to understand where the money and risk spread out on a spectrum. The best bottom one will always be taken for the longer haul, but the higher risk stuff, to see where it's landing, collect some fees, deal with the risk by having liquidation ratios managed, I think it's all a plus. We should do a MIP on it actually and have it as part of the Protocol. Not just one, but a couple of tiers in each of them. We could pick the ones that are working right now, like ETH, and maybe WBTC, and USDC-A.

##### Subsidizing USDC-A and the Base Rate

[1:17:04](https://youtu.be/zyTd7pUX__M?t=4624)

- Sam MacPherson: As Vishesh said, we should maybe consider lowering the base rate to a negative value to encourage more supply coming from USDC-A. It shot up pretty quickly when we were at 0%. And now it's staying flat. That's more Dai that we could bring to fill this COMP-driven demand. I think we need to fill it in whatever way we can. We can't be too concerned about recouping risk premiums because we're in a really hard place right now, and we need to subsidize it through MKR. I don't think we have a choice.

##### Liquidity into COMP

- MakerMan: I really want to re-echo what Vishesh said. We're taking on risk here, so keep in mind how we're managing this. I like the idea of getting fees out of different tiers to deal with taking on these risks. If these markets will do it, I would rather do it that way. ETH-A as it sits right now, those are our core people. We could add another at 1% or 2% for all the new people that want to take their ETH and cycle in. We have probably missed out on 50 million worth of ETH that would have paid us 1% or 2% to have access to a facility with lower ratios. When people that are in the "good facility" leave, that money will jump there. There's a real issue with how we manage this. It's still the same point: You would like to get some fees but anything you try to collect, is it going to affect the peg?
- They're progressively eating up liquidity. If you graph the USDC supply and borrow, it keeps going up slowly. I'm not sure if it's new money turning up into the bigger accounts. We can add liquidity, but if it gets buried somewhere, it's not going to do anything to the peg. How do we deal with the peg in the face of COMP farming? You can throw 50 million at this, and the peg doesn't even flinch until the COMP thing changes. Throw 500 million Dai at it, maybe it changes. I see it as a blessing in disguise, as it makes us think about the size of the market. Everyone wants to grow, and we can determine how we should grow. This demand could come from anywhere. Any time and any amount. Other places could pull the same trick and make Dai the big deal.

##### Market Making and System Risks

- Vishesh: You can continue to increase the supply of an asset, but it's not going to impact the peg unless users are willing to say, "I'm going to mint, sell and relinquish the Dai above peg, and I'm ok with maintaining the risk and the fees, in exchange for that short-term profit." Unless you have that market-making behavior, that arbitrage behavior, you're not doing anything to the peg by increasing supply. That's a really important point that's completely overlooked because people in their minds think "more supply, lower price," but we're missing the Rube Goldberg in-between that gets you there. Everyone is focused on the peg, and we tend to overlook system-level risk, and I showed earlier that it's growing. Not just in percentage terms, but also in total dollar terms. How much of that nominal risk can and should MKR be able to underwrite?
  - Sam MacPherson: COMP farming will not lower the price of the Dai peg, but it removes upward pressure.

## Outro

### LongForWisdom

#### Closing Comments

[1:12:14](https://youtu.be/zyTd7pUX__M?t=4994)

- LFW: Fantastic discussion around the peg and the current issues facing us. I encourage everyone to continue the discussion in the forums. I know it's cliché, and I say this every week, but that's where governance happens. I would love to see this discussed in more detail. Specifically, more concrete proposals about what we could or should do.

#### Vault Compensation Plan

- MakerMan: We have a quandary with 95k MKR voting to say yes, and now we have 45K MKR saying no. It's unclear for me what to do about it and I'm leaving it as a quandary for the Community to handle. I encourage everyone to speak up on that.
  - LFW: Another thing we should address in the future. See you all next week.

## Abbreviated Terms

`MCD`: The Multi-Collateral Dai system

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

`PSM`: Peg Stabilization Module

## Credits

- Tim Black produced this summary.
- David Utrobin produced this summary.
- Artem Gordon produced this summary.
- Galla Guillen produced this summary.
- Juan Guillen produced this summary.
- Everyone who spoke and presented on the call (listed in the headers.)
