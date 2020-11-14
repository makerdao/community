# Episode 105: August 13, 2020

## Agenda

- [00:00](https://youtu.be/ZzEbuwyaZRQ): Intro with LongForWisdom
- [01:24](https://youtu.be/ZzEbuwyaZRQ?t=84): Smart Contracts Domain Team Update with Mariano Conti
- [06:30](https://youtu.be/ZzEbuwyaZRQ?t=390): Oracles Domain Team Update with Nik Kunkel
- [07:09](https://youtu.be/ZzEbuwyaZRQ?t=429): Risk Domain Team Update with Cyrus Younessi
- [08:31](https://youtu.be/ZzEbuwyaZRQ?t=511): MIP20 with Lev Livnev
- [25:25](https://youtu.be/ZzEbuwyaZRQ?t=1525): Governance at a Glance with LongForWisdom
- [28:43](https://youtu.be/ZzEbuwyaZRQ?t=1723): Weekly MIPs Update with Charles St. Louis
- [35:11](https://youtu.be/ZzEbuwyaZRQ?t=2111): Vault Compensation Update with Monet_Supply
- [52:00](https://youtu.be/ZzEbuwyaZRQ?t=3117): State of the Peg with Vishesh Choudry

## Video

<https://youtu.be/ZzEbuwyaZRQ>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/ZzEbuwyaZRQ)

- Hello everyone, welcome to 105th MakerDAO Scientific Governance and Risk meeting. Today is Thursday, August 6th. My name is LongForWisdom. I am one of the Governance Facilitators for MakerDAO. I am joined by a host of people interested in Maker. We have a reasonably hefty agenda for today. As a reminder, anybody is free to interrupt and ask questions during any point of this call.
- We have an abnormal ordering of the agenda today because one of our presenters has to leave early.
- As a reminder, discussions happen in the [Forum.](https://forum.makerdao.com/)

## Smart Contracts

### Mariano Conti

[01:24](https://youtu.be/ZzEbuwyaZRQ?t=84)

- As you know, we have the liquidations 1.2 updates that we spoke about last week. There is a [forum post.](https://forum.makerdao.com/t/liquidations-system-1-2-upgrade-timeline/3592) Very quickly, what this does is it puts a cap on the total amount of DAI that can be in liquidation at the same time. We think this is a good thing to have. The community reacted favorably to it. What we are going to do as the Smart Contracts team is take another week to finalize the code and write more tests.
- Initially, we were a little optimistic, thinking we'd have it by next Friday. But looking at the ecosystem right now and with everything that has been going on, we wouldn't mind taking an extra week to do other testing and show these tests to the community if more people want to look at our solution. That was the first item I wanted to speak about, but we are not going to upgrade this weekend.
- The second thing I wanted to address was the [failed spell](https://forum.makerdao.com/t/bug-in-2020-08-07-executive-spell-contract/3603) from last week, which reduced the WBTC-A debt ceiling to zero. There was a mismatch in the units, and it was pretty serious. The good thing is that the bug worked in our favor this time. It could have been the other way and increase the debt ceiling to astronomically large numbers. In this case, the debt ceiling was already maxed, and the only thing that happened is it could create new DAI from WBTC-A almost precisely as it was before, but then a new spell came out and fixed it.
- But that error did prompt this from the smart contracts team to be more thorough with reviews. We will be sharing all the steps shortly we will be taking to ensure this doesn't happen again. I think we have been a little complacent week after week - we got the poll's results, did a spell, did a review, and then deployed on Friday. I don't want to get into this too much, but maybe the community should speak about the length of time that the Smart Contracts team has to write the spells and if it is sufficient. Because it is under twenty-four hours, and that doesn't give the community itself enough time to review these spells. Rest assured that we are adding to our methodology to ensure that this doesn't happen again. Expect more stuff in the forums. If anybody in the community is somewhat technical and is up for reviewing these spells, please, do so.

## Oracles

### Nik Kunkel

#### Subject/Segment Description

[06:30](https://youtu.be/ZzEbuwyaZRQ?t=390)

- Pretty quiet this week. I did have tBTC reach out because they want to swap the contract that they have white-listed since they are gearing up for another release candidate, so I expect to see them post a proposal probably later next week.

## Risk

### Cyrus Younessi

#### Subject/Segment Description

[07:09](https://youtu.be/ZzEbuwyaZRQ?t=429)

- No real updates from our end. We put out the blueprint valuation last week, and this week we've been strategizing for liquidations 1.2 parameters and reviewing some other general system parameters, things like a circuit breaker.
- We are still waiting on a few last-minute things to put out USDT tether and PAX MIP12 submissions and the same for Chainlink.
  - (chat): "Oops, I forgot to say. Also working on eth-a and eth-b."

## MIP20: Target Price Adjustment Module

### Lev

#### MIP20: Target Price Adjustment Module

[08:31](https://youtu.be/ZzEbuwyaZRQ?t=511)

- It's not so much of a presentation today. Instead of going through the MIP, I would like to invite a discussion about the most critical issues that people feel about this MIP, to move it along, and see where it should go, given that it's in the RFC phase right now.
- For background, we are talking about [MIP20](https://forum.makerdao.com/t/mip20-target-price-adjustment-module-vox/3196), called Target Price Adjustment Module, you may have heard of this described in one phrase as "negative interest rates." It's proposed in the wake of the issues with the peg and the limitations of monetary policy around the zero rates lower band that we are currently subjected to.
- I would like to highlight some things about this MIP before proceeding with the discussion:
  - First, this is a technical MIP that gives governance the option to adjust the par parameter, which decides how much for accounting purposes one Dai is worth in USD. Adjusting par can be used as a mechanism for, effectively, negative rates, which is currently not possible. However, there is support in the code for adjusting the USD value of a Dai in the system, which is why it's possible to make this MIP and make technical modifications without changing the core system. So this a very lightweight small component, and I'm sure that a lot of people who are familiar with smart contracts would agree with me that it's not an intrusive change.
  - Of course, you can't entirely separate technical considerations and general governance considerations in the system. I'm not claiming that because it's a technical MIP, there's nothing to discuss outside of the technical. We still need to decide whether or not this is something the governance would potentially want to use and what the ramifications of that would be. However, some things are out of scope for this MIP and should be in scope for some further non-technical MIPs that would set governance abstractions and governance expectations for actually using this functionality. Effectively, this gives you the technical tools to create negative interest rates, but how you would use negative interest rates and how that modifies our current monetary policy process is up for discussion. It is possible to implement this MIP and not make use of it, but it would be ridiculous to say that you should consider technical MIPs on technical merits only.
  - The next thing is that the changes proposed in this MIP are technically well understood because target price adjustment was part of the plan for multi-collateral Dai for a very long time. If you look in the purple paper or earlier implementations of multi-collateral Dai, they would include a module that would adjust Dai's target price. This is not a new invention; this is an implementation of something that has been in the folklore for a while.
  - Additionally, a lot of people don't know if you look in Sai, in our previous iteration single collateral Dai, that had a target price module built into it from the beginning. It was dormant, because the parameter was set to zero, and as a result, it wasn't making any target price adjustment. But it was always there, so that code was live. This is worth keeping in mind to do a sanity check of the technical implementation of the idea that this is a quite well-known thing. There's been quite a lot of discussions about it, and there have also been posts in the forum about TRFM. TRFM is the old way of thinking about a target price adjustment where the price would adjust according to some algorithm.

##### Clarity on TRFM and TPAM

- Now, I'd like to address the main difference between TRFM and what's proposed in MIP20, TPAM, and target price adjustment module instead of the target rate feedback module. The only difference is that Target price adjustment is just a simpler version of target rate adjustment. It allows governance to set a rate parameter directly, which adjusts the price of Dai at a continuous rate over time. Compared to TRFM, which is a dynamic mechanism that tries to look at the market price of Dai, feeds it back into monetary policy and tries to adjust the rate of change of the price of Dai dynamically based on that. TRFM is a vastly more complicated thing, which is a lot more challenging to study. TPAM is an elementary version of it that allows us to set a fixed price adjustment similar to how we set a stability fee today. We don't have any special algorithms for automatically adjusting the stability fee in real-time, which is say, it's going to be 2% or 4% or 0%. Similarly, this will allow you to set a fixed rate, same sort of units, say 0% you can make it positive, 2% you can make it negative, and that's the rate at which Dai's price would adjust. If you look at actual MIP, there are obviously more details in discussions on why that's effectively equivalent (or can be used) to create effective negative interest rates.
- Last comment about this MIP's motivation: the monetary policy that we enact has this zero lower bound. We are unable to decrease stability fees on a collateral type below zero, even if we can use these negative base rates. The base rate is just an abstraction that allows you to set the stability fee lower than the risk premium on a collateral type, and it isn't an _actual_ negative interest rate. Negative interest rates are tricky, a particular case, because we can't call back Dai from people who are holding it without, firstly, making changes to the core system and also really messing with how tokens work. I think that would be a terrible idea.
- Instead, we need something like TPAM, which accomplishes a negative interest rate by changing Dai's price. And I'm happy to answer questions about that. Certainly, this is the most controversial thing about this proposal because it creates a departure from the world where people think of the target price of Dai as always being $1. Instead, Dai's target price would be some value adjusting in real-time based on whatever governance has set the interest rate. If they were using it to enact negative interest rates, then it would be a negative rate, so Dai's target price would slowly be going down from $1. This setting would presumably be used as a monetary policy tool to deal with situations like what we have today. Market equilibrium for Dai is still trading above the target we'd prefer.
- Now, I'd like to invite people to ask questions here. In the forum, we had a good discussion, but since it's been in the RFC phase for about a month, we should have as many discussions as possible over the next month or two.

#### Discussion

[17:12](https://youtu.be/ZzEbuwyaZRQ?t=1032)

- Brian McMichael: Thanks, Lev! Just to second your point, technically, it shouldn't be very controversial. I think the discussion is: "do we want to change the par value of Dai?"
  - Christopher Mooney: I have a technical question about the implications for implementers of this, people that have ever made, in our code or formal verifications, any wrong assumptions on Dai always being a dollar? Rather than doing a calculation of Dai and par. I wasn't sure if there would be some rough edges on integrations, especially of immutable contracts that are already out there that may have made this wrong assumption.
  - Lev: That's a good question. When it comes to MakerDAO, to my knowledge, there is never an assumption one Dai is worth $1. Instead, this par value is always carefully used, or at least that is the intention. You shouldn't see $1 hard-coded anywhere, that would be a bug even today when we are not adjusting par. In particular, one of the places is in the Global Settlement module, and you'll see there that it carefully calls par from the spotter to make sure they were respecting the correct redemption value of Dai. I'm not aware of any other places where that needs consideration.
    - But I think your question is mainly about other integrations, for which it's impossible to say of course, because we don't know what they all are. A good thing would be to find examples of other projects relying on Dai for whom this would be a problem. Also, we have to remember that this is a monetary policy tool. The goal is to reduce the purchasing power volatility of Dai, ultimately making Dai price more predictable and less volatile. While the target price of Dai is adjusting away from $1, it's an unpredicted change that you could see as volatility. Ultimately it's done to reduce volatility. And when we are not able to do so with the conventional monetary policy available today, we're also failing in that job. These other integrations that might be affected by this are also hurt by having Dai trade to $1.01 or $1.02 like it does today. So, it's important to distinguish between integrations that rely on Dai being stable. The goal is undoubtedly for those integrations to be helped and not hindered by this. Because, ultimately, the goal of using negative interest rates is to stabilize Dai, compared to integrations that assume that the internal accounting value of Dai in MakerDAO is $1, which is the thing that we are sacrificing or changing. That's a subtle distinction. Personally, I'm not aware of other systems making assumptions about MakerDAO's internal accounting value of Dai.

##### Reversible System

[20:50](https://youtu.be/ZzEbuwyaZRQ?t=1250)

- Cyrus Younessi: Is this reversible? I have the impression that once you trigger this and Dai starts free-floating, you can't have a do-over and go back to the old system. Is that accurate or not?
  - Lev: I'm delighted you asked this because there is a feature in this MIP, which is new, that is not present in things like TRFM, which is prior to existing stuff: the ability to set a target price cap. I wanted to include this because it allows you to backpedal out of this target price adjustment later if we want to. The way that works in practice is: let's say we want to do negative interest rates, so we set the target price adjustment to be -2% per year, that's effectively a two percent negative interest rate on Dai; we can also set a target price cap of \$1, which is the current target price.
    - Later, let's say the monetary policy is in a different situation, and now we can normalize rates to be positive again. Let's say maybe the farming mania stops or we start actually generating a lot of Dai from new real-world asset platform types and so on. Then we start setting positive rates again. Then we'll be able to set a positive target price adjustment rate and combined with this $1 cap, what that will mean is, as soon as the target price of Dai comes again to $1, and this is assuming that we will actually have the positive interest rates back on for long enough that we would actually regain that lost ground. When it gets to $1, it will actually get capped at exactly $1, and then you can switch off the target price adjustment, and you'll be back where you started, and the target price of Dai would be exactly \$1. This means that if you wanted to have a target price adjustment to be positive again in the future, it allows you to walk it back and pretend that it is all a bad negative rate stream. Does that make sense?
  - Cyrus Younessi: Yes, basically, if it drifts below and then drifts back up, you can just cap it once it hits like this barrier that once it gets there, it freezes?
  - Lev: Exactly. And then, if we set a target rate adjustment at that point, it would stop doing anything. If we set it to zero, it would be like we've never done anything, it would just be in there so we would be back to the situation we are in now. This assumes that if in the future we have positive rates, we would prefer to just basically go back to \$1 and then stop doing this target price adjustment stuff rather than enacting positive rates to positive target price adjustment. That remains to be seen, but there's a strong reason to believe that that's available.
  - Charlie Noyes: You mean positive target price adjustment above \$1, right?
  - Lev: Yes, I'm saying that we probably don't want to make a positive target price adjustment above $1. Given today's status quo, we would instead go back to just using stability fees, and that's what this cap achieves. This switch is the main one of the main differences in this proposal. If we commit to implementing TRFM, we don't have a clear way to come back to $1, that's wandering off into space. This proposal is intended to address this concern by giving us a way back.

#### Governance at a Glance

[25:25](https://youtu.be/ZzEbuwyaZRQ?t=1525)

- [Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84): If you have the time to read over and vote in active threads, that would be much appreciated.

##### Discussions

- [Liquidations System 1.2 Upgrade (Timeline)](https://forum.makerdao.com/t/liquidations-system-1-2-upgrade-timeline/3592)
  - The Maker Foundation proposes upgrades to the liquidation system with the support of the Risk and Smart Contracts domain teams to limit the amount of DAI that liquidates at one time.
  - LongForWisdom: Mariano Conti has discussed this earlier. There is also a forum [thread](https://forum.makerdao.com/t/liquidations-system-1-2-upgrade-timeline/3592) about this where Charles describes what it is and how it will change the liquidation system. I encourage everyone to read that if you haven't already.
- [[Poll] Creation of a MakerDAO strategic reserves (solving the peg)](https://forum.makerdao.com/t/poll-creation-of-a-makerdao-strategic-reserves-solving-the-peg/3638)
  - SebVentures suggests MakerDAO acquires strategic reserves to aid in monetary policy and lays out some pros and cons.
- [Collateral Onboarding Call: Bi-weekly on Wednesday at 17:00 UTC // 19:00 CET // 10am PST](https://forum.makerdao.com/t/collateral-onboarding-call-bi-weekly-on-wednesday-at-17-00-utc-19-00-cet-10am-pst/3614)
  - spin and \_LS share their intention to produce regular calls in which the Maker Community can engage with collateral partners.
  - LongForWisdom: Lucas and Lea ran this call from Centrifuge. We had two collateral partners presenting who were New Silver and mrabino1. They discussed their company and proposal, which I think was super interesting. The call information is available [here.](https://forum.makerdao.com/t/agenda-discussion-collateral-onboarding-call-5-wednesday-august-12-17-00-utc/3623) I am aware that not everybody has time for two meetings every week. If you have a spare second and want to learn a bit about how we might add real estate as collateral on Maker, I would give it a watch.

##### Signal Requests

- [Add a Dai flash mint module](https://forum.makerdao.com/t/signal-request-add-a-dai-flash-mint-module/3598)
  - hexonaut opens a brief poll to gauge the support for adding flash-mint functionality to the Maker Protocol. The poll goes well, and hexonaut will be pursuing this as a Declaration of Intent under MIP13.
  - LongForWisdom: This was received reasonably well to the point that we stopped the signal request and moved it to a MIP13 Declaration of Intent, which is currently on the forum. I encourage people to read over this and discuss the merits and potential downsides of flash-minting, which is very exciting.
- [Should we change the RPs for various collateral types?](https://forum.makerdao.com/t/signal-request-should-we-change-the-rps-for-various-collateral-types/3484)
  - befitsandpiper asks whether we should take the opportunity to adjust risk premiums for collateral assets when we can take advantage of the negative base rate to prevent peg impact.
- [Increase System Surplus Threshold](https://forum.makerdao.com/t/signal-request-increase-system-surplus-threshold/3316)
  - Aaron_Bartsch asks whether it is the right time to increase the system surplus threshold.
- [Increasing the 'dust' amount](https://forum.makerdao.com/t/signal-request-increasing-the-dust-amount/3445)
  - Jiecut asks if the 'dust' parameter should be increased considering the sustained elevation in gas prices over the last few months.
- [Adjust the BAT Risk Premium and Debt Ceiling](https://forum.makerdao.com/t/signal-request-adjust-the-bat-risk-premium-and-debt-ceiling/3334)
  - Jiecut asks if the BAT-A risk premium and debt ceiling should be adjusted. Note that the BAT-A debt ceiling was changed in the most recent executive vote.

## MIPs

### Charles St. Louis

#### Weekly MIPs Update

[28:43](https://youtu.be/ZzEbuwyaZRQ?t=1723)

![MIPs update](https://i.imgur.com/Wn9ZD8T.png)

- So this week is a shorter update, due to time constraints.

![8/10 - 8-14 Activity](https://i.imgur.com/Wgqshw8.png)

![Next Week](https://i.imgur.com/c6hhn2d.png)

![Collaterral Onboarding](https://i.imgur.com/xdFyNs9.png)

![Le Fin](https://i.imgur.com/DfZf8gt.png)

#### Discussion

- Cyrus Younessi: LRC was rejected because of the vote of one holder, making it difficult to add a comment. I don't want to speculate, I'm not sure if there was a particular part of the valuation that was not well received, but it would be nice to have some mechanism to solicit feedback from voters.
  - LongForWisdom: This is a problem we've seen before: it is hard for MKR holders to give feedback anonymously. For LRC specifically, I think I agree I don't want to speculate, but it points to the importance of voting in the inclusion polls. Especially if you feel strongly about the assets in question. It's possible that the rest of the MKR voters felt less passion for LRC and didn't vote, especially since voting is a bit of a pain, and gas is high.

## Vault Compensation

### Monet_Supply

#### Vault Compensation Update

[35:11](https://youtu.be/ZzEbuwyaZRQ?t=2111)

![Cover Slide](https://i.imgur.com/9yWp4JY.png)

- I'll repost the presentation as well for reading later.
- [Forum post here](https://forum.makerdao.com/t/vault-compensation-plan-v2/3584).

![Background](https://i.imgur.com/cSffD3a.png)

- Compensating in Dai: It's going to impact liquidity when we have a credit crunch on Dai.
- I would like to see 100k plus MKR voting like the first vote back in April.

![Changes](https://i.imgur.com/7gUifxo.png)

- This approach is about eliminating as many steps as possible to reduce Governance overhead.

![Revised changes missing](https://i.imgur.com/6KYhCkA.png)

![Phase 0](https://i.imgur.com/77zdjgW.png)

- This is where we are currently getting feedback, and figuring out the operating costs are to put this into action

![Phase 1](https://i.imgur.com/ZiUlfxe.png)

- In the previous Vault compensation plan, there were many parameters that MKR voters had to choose. The other difference is it consolidates the approval for the plan itself with the compensation.
- I wanted to do it this way because it's tough to understand whether the last two bullet points were most relevant. If it was about not compensating at all or whether it was problems with the execution of the plan.

![Example](https://i.imgur.com/EEEHbn5.png)

![Phase 2](https://i.imgur.com/9O7OZfE.png)

![Phase 3](https://i.imgur.com/GM4ISGw.png)

- After 90 days, governance can self destruct the potential contract, take Dai back that wasn't used for Op-Ex, and burn any unclaimed MKR.

#### Discussion

##### Next Steps

[42:11](https://youtu.be/ZzEbuwyaZRQ?t=2531)

- ChrisP: If you guys lose the next vote, then do you keep submitting votes to governance, or at what point do we say this isn't what we want to do. What's the breakdown there?
- Monetsupply: If we get a decent turnout and the post for "I don't want vault compensation" goes through, I think we are done. Mainly if it's more than 60K that voted for vault compensation back in April, if it gets to the last bullet point where it's supported in principle, that's where it gets tougher and if that gets more than 50% support. Whoever is in support should probably get in touch and propose a plan of their own.

##### Final Votes Summary

[44:00](https://youtu.be/ZzEbuwyaZRQ?t=2640)

- MakerMan: The first point, we need a strong signal one way or the other. We've worked on this as a group, and we don't have that clarity to settle one way or another. The second point, we changed the method to be this MKR method, and when you look at the numbers in percent, no vaults are going to get that actual percent in collateral compensation even with MKR<->DAI numbers at \$250. Even when you see like 6%, no vault will get that, just how we altered compensation. If you wanted to give them 6% back, you'd vote for 12. We are doing this as a difference between what they got back, and what we want to give them is that if they got ETH back, they've already got the ride up, with some returns. If they've got nothing, then the question is, how much do they get? These numbers don't reflect that; they reflect an attempt by picking a number to distribute the compensation equitably across all the people who didn't get that percentage back. I'll be voting my tiny amount of MKR because I would like to see and executive level of MKR participation on this, thank you, everyone!
- LFW: Thank you, Makerman and MonetSupply, to reiterate we're getting to the point where this is dragging on. We need to know clearly if this is something people still want or have realized it isn't worth the trouble. We just need that clarity; otherwise, this issue won't go away. There is no real justification to just drop it entirely without a vote that says so because of the initial vote in favor. So we need a signal that helps us with a clear direction going forward. Thank you all for keeping that in mind.

##### The Choice of Dai

- MakerMan: Forgot to articulate my last point: we chose MKR as the thing to compensate in is partially a suggestion on the forums but because it is easiest for governance to fund. When you look at the effective dilution, depending on the choice, it's low, like a percent or lower. It seemed easier to hand vaults MKR and let them exchange instead of drop-kicking the Dai markets.

##### Double-compensating Users

- Frank Cruz: You think there is a possibility that other folks don't want to be involved due to the ongoing litigation? Do we consider these people to be double-dipping compensated by the community and the courts?
- Monetsupply: The compensation plan has a UI where, as part of claiming, you sign a disclaimer that you don't sue MakerDAO or the Foundation. Legally they probably still could or maybe not.

## Analysis

[52:00](https://youtu.be/ZzEbuwyaZRQ?t=3117)

### Vishesh Choudry

![Dai Supply](https://i.imgur.com/3xnn2xA.png)

- At a high level, the Dai Supply is over 300 million Dai from ETH-A. About 2.7 million from BAT. ~50 Million from USDC and ~67 million from WBTC.

![ETH-A Supply](https://i.imgur.com/NY5aHBJ.png)

- As far as ETH-A supply goes, this has continued to grow. You can track spikes and plateaus in the growth rate, which correlates to different yield farming opportunities.
  - We saw a continued base linear trend until early July 2020, where we saw a bit of a spike when the first yield farming opportunities cropped up.
  - Then we saw a massive acceleration due to the YFI type opportunities (Early August), which have slowed in the past week.
  - No recent project announcements in the last week have been too crazy in terms of Dai farming, at least compared to say 3-4 weeks ago. We will continue to watch as more of these opportunities continue to crop up.

![USDC Supply](https://i.imgur.com/nBGlMWH.png)

- The USDC<->Dai supply since mid-July has been fluctuating a bit day-to-day. It is heavily used by large individual users making potentially short-term transactions. The long-term supply has stayed around 50 million. Trending upward, but very spikey - will continue to watch.

![WBTC Supply](https://i.imgur.com/9MSKslc.png)

- WBTC is not entirely capped out. There is still about 13 million room in the DC there. There are these step-wise usage trends due to large users making transactions and capping it out. The amount minted is still sitting at around 66 million but has not been capped out. It is unclear if that is the amount of demand for minting Dai from WBTC that has already been met, or if there will be an increase as it has only been a couple of days.

![BAT Supply](https://i.imgur.com/z0EkhNy.png)

- BAT usage has varied with close to 3M Dai minted from BAT.

![Recent Bat Use](https://i.imgur.com/OMBTZnA.png)

- Zooming in more recently, it seems that a decent percent wise of that DC is utilized, and is, seemingly, well managed.

![ETH collateral Portfolios](https://i.imgur.com/HVvbWtK.png)

- Collateral portfolios: we have seen that the ETH collateral portfolio has gotten a bit less risky but also ETH price has gone up. In nominal terms, users have not done much with their collateral there, but naturally, the collateralizations have been pushed up.

![ETH Liquidation Walls](https://i.imgur.com/HahmRKu.png)

- If you look at the ETH price around \$240, you'd be liquidating 132 million Dai, and this is the largest wall. Probably the most significant thing to keep in mind and manage.
- Smaller walls are around $285 and $330 is not worth mentioning. You want to be decently concerned around an ETH price of \$285. Even given a 400+ million Dai supply, a 33 Million liquidation is probably still significant for the amount of market liquidity out there.

![Dai Price](https://i.imgur.com/6wZ7kWk.png)

- Another thing to keep in mind, the Dai price needs a perception adjustment. There were some crazy slippage events on August 10th on Uniswap and Oasis. Overall, in the last few days, there has been a lot more a sustained $1.01 price rising into the $1.02 range. This condition is a steady-state situation that we have been talking about prior; we've seen price rises to $1.03 or $1.04, even \$1.06 during crazy events such as yield farming opportunities arrive. The presupposition is that we would resume normal levels when the yields come back down a bit, and that's basically where we are at.

![Trading Volume](https://i.imgur.com/DslppLx.png)

- We've seen relatively large trading volumes in the last seven days between Dai<->ETH and DAI<->USDC. I don't want to belabor too much; we've gone over the broad strokes and can double click on the things that we need to.

![DSR Locked](https://i.imgur.com/dO6J3Yw.png)

- Of the 400 Million Dai, roughly 247 million is locked into the DSR by supplying to protocols and then being locked back up.

![Dai on Compound](https://i.imgur.com/oJD945n.png)

- If you look at Compound, this is still a lion's share chunk, with 250 million. Dai in Compound is dominating what is currently going on with the Dai supply.

### Discussion/General QA

##### GUSD Networking

[1:00:35](https://youtu.be/ZzEbuwyaZRQ)

- Monet supply: I've been emailing back and forth with someone from Gemini about gUSD, so if anyone has any questions that they would like me to pose to them, please let me know or reach out to me in the forum or what have you.

##### LRC Discussion

[1:01:32](https://youtu.be/ZzEbuwyaZRQ?t=3692)

- Aaron: What are the next steps for LRC now that it has failed?
  - LFW: Good question. The first is attempting to find out why it failed in the first place. There is always a chance that whoever voted it down will say something. Other than that, by the MIPs process, you can resubmit the same proposal or subproposal up to three times, without significant changes. If we wanted to, we need to process it again in the next cycle we could. I wouldn't suggest doing so until we have some idea of why it was voted down or another person professing to be a large MKR holder wants to see it again as an emergency.
  - If there are meaningful changes in liquidity or other things that can affect the risk parameters, it can trigger a re-evaluation. I don't think this will happen immediately, though.

##### Voter Participation

[1:04:20](https://youtu.be/ZzEbuwyaZRQ?t=3865)

- Frank Cruz - How do we have any idea how to encourage more voter participation? (Hopefully, when there is no yam 2.0)
  - Chris p: I've seen people complain about the cost of people voting. And I've seen this is a governance project to combat this hurdle of small MKR token holder engagement.
  - LFW: Good point. Gas prices are going to prevent most small MKR holders from voting, I would think. Derek from the foundation is working on a new version of the governance dashboard, which I believe may include batch voting to allow for votes toward multiple things in one transaction. I think that may help, at least.
  - I think there have been a couple of posts on this topic in the forums. For instance, El pro posted about voters being reimbursed transaction fees incurred when voting. I'm not sure how it would work in practice, but it is worth discussing.

##### Loopring and Voter Participation

[1:06:25](https://youtu.be/ZzEbuwyaZRQ?t=3979)

- FC: I think that Loopring was a big disappointment. Specifically, because people put in some time and work into it, I think it was six individuals, and one individual with 17,000 MKR decided, as Cyrus said earlier. I won't give my opinion, but I think we need to encourage more people to participate in the polls and somehow encourage them whether there are high gas fees or if we moved to L2, just to get them up there to vote. Or even post their opinion on the forum - the reason why they didn't vote or the reason why they voted.
  - LFW: I think these are all excellent suggestions. It's the sort of thing that I think, or I hope, that significant vote motion like this happening can help large Maker holders that if they don't vote for things like collateral onboarding, then there is a good chance that something doesn't happen. I kind of agree that it is disappointing since the LRC failed AFTER the work finished even though it passed the greenlight poll initially. But there is always a chance like this happens; the smart contract/risk/Oracle evaluations can change opinions. That is always that possibility.

##### Signed Transactions in Governance Calls

[1:08:39](https://youtu.be/ZzEbuwyaZRQ?t=4113)

- (chat from Aaron): "What is wrong with doing signed transactions in gov calls?
  - LFW: I don't know, I haven't thought about it. Would defer to someone else.
  - Josh Levine: It's something we explored and something that we thought we would do the first time. The only thing that you lose is censorship resistance; whoever is aggregating the signatures can censor something. But what we are exploring now is the case where you do that as the happy path where you signed messages, and if someone suspects any censorship, then they go to on-chain as a fall-back.
  - LFW: That sounds potentially great. I think we'll call it there and thanks to everyone for joining. Hope to see everyone next week

### Links from Chat

- [The poll on liquidations 1.2 passed](https://vote.makerdao.com/polling-proposal/qmzaapfn5wxrqpk8pej9bepw1gxufmmndw96kgeufomjvd)

#### Relevant Links

[MCD System Stats](http://daistats.com)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)
[Maker Vault Stats](http://makervaults.descipher.io/)

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

## Credits

- Artem Gordon produced this summary.
- Juan Guillen produced this summary.
- Gala Guillen produced this summary.
- Tim Black produced this summary.
- Anatta produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
