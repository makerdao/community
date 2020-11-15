# Episode 106: August 20, 2020

## Agenda

- [00:00](https://youtu.be/fPpCmrSkWPY): Intro with LongForWisdom
- [01:50](https://youtu.be/fPpCmrSkWPY?t=110): Governance at a Glance with LongForWisdom
- [05:55](https://youtu.be/fPpCmrSkWPY?t=355): Smart Contracts Update with Brian McMichael, including postmortem on WBTC bug
- [10:57](https://youtu.be/fPpCmrSkWPY?t=657): Oracles Update with Nik Kunkel
- [13:03](https://youtu.be/fPpCmrSkWPY?t=783): Risk Update by Cyrus Younessi
- [15:23](https://youtu.be/fPpCmrSkWPY?t=923): Weekly MIPs Update with Charles St. Louis
- [21:30](https://youtu.be/fPpCmrSkWPY?t=1290): Governance Polls Review with LongForWisdom
- [22:52](https://youtu.be/fPpCmrSkWPY?t=1372): Presentation on MIP15: Dark Spell Mechanism with Wil Barnes
- [31:51](https://youtu.be/fPpCmrSkWPY?t=1911): Presentation on Liquidations 1.2 with Christopher Mooney
- [55:15](https://youtu.be/fPpCmrSkWPY?t=3315): State of the Peg with Vishesh Choudry
- [1:05:31](https://youtu.be/fPpCmrSkWPY?t=3933): Short-Term Real World Asset Liquidations with Lucas Vogelsang

## Video

<https://www.youtube.com/watch?v=fPpCmrSkWPY>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/fPpCmrSkWPY)

- Hello, everyone, welcome to 106th MakerDAO Scientific Governance and Risk meeting. Today is Thursday, August 20th. My name is LongForWisdom. I am one of the MakerDAO Governance Facilitators. I am joined by 35 people at the moment. I will briefly review the agenda, and then we'll start at the top. Anybody is free to interrupt and ask questions during any point of this call.
- Longer-form discussions happen in the [Forum.](https://forum.makerdao.com/)

## Forum Recap

### LongForWisdom

#### Governance at a Glance

[01:50](https://youtu.be/fPpCmrSkWPY?t=110)

- [Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84): If you have the time to read over and vote in active threads, that would be much appreciated.

##### Discussions

- [cDAI/aDAI/yDAI collaterals as a peg enabler tool](https://forum.makerdao.com/t/discussion-cdai-adai-ydai-collaterals-as-a-peg-enabler-tool/3470)
  - SebVentures speaks to the benefits of using cDai/aDai/yDai as collateral, which prompts some renewed discussion this week.
- [Real World Assets - CTL Document Roadmap - Getting started v1](https://forum.makerdao.com/t/real-world-assets-ctl-document-roadmap-getting-started-v1/3716)
  - Mrabino1 continues his series of posts on his real-world asset proposal. This post focuses on the roadmap and next steps, laying a roadmap to get the steps to where we need to get real-world assets live on the Maker Protocol.
- [Vault Liquidation Mechanism for Centrifuge Trade Finance Assets: A Pre-MIP Discussion](https://forum.makerdao.com/t/vault-liquidation-mechanism-for-centrifuge-trade-finance-assets-a-pre-mip-discussion/3737)
  - Spin, or Lucas, from Centrifuge, describes a vault liquidation mechanism that can be used for a subset of the proposed Centrifuge assets, especially the trade finance one.
  - LongForWisdom: We're going to see more focus over the next few weeks and months on real-world assets, as we get to a point where we consider finally onboarding them. This is exciting for me and hopefully for some of you as well.
- [Collateral Calls - Calling all Projects!](https://forum.makerdao.com/t/collateral-calls-calling-all-projects/3715/)
  - Juan has posted a thread in which collateral partners can register their interest in presenting in the new collateral call.
  - LongForWisdom: I encourage anyone who is a collateral partner, or knows a collateral partner, that wants to present, to point them in the direction of that thread.

##### Signal Requests

- [Increase WBTC Debt Ceiling](https://forum.makerdao.com/t/signal-request-increase-wbtc-debt-ceiling/3731)
  - Aaron_Bartsch proposes increasing the wBTC debt ceiling again to accommodate the increased usage.
  - LongForWisdom: We are approaching the current cap of 80 million. If you are strongly feeling toward increasing that, make your feelings known.
- [Should we change the RPs for various collateral types?](https://forum.makerdao.com/t/signal-request-should-we-change-the-rps-for-various-collateral-types/3484)
  - Befitsandpiper asks whether we should take the opportunity to adjust risk premiums for collateral assets at a time where we can take advantage of the negative base rate to prevent peg impact.
- [Increase System Surplus Threshold](https://forum.makerdao.com/t/signal-request-increase-system-surplus-threshold/3316)
  - Aaron_Bartsch also asks whether it is the right time to increase the system surplus threshold.
  - This passed last week.
- [Increasing the 'dust' amount](https://forum.makerdao.com/t/signal-request-increasing-the-dust-amount/3445)
  - Jiecut asks if the ‘dust’ parameter should be increased considering the sustained elevation in gas prices over the last few months.
  - This passed last week.
- [[Signal Request] Adjust the BAT Risk Premium and Debt Ceiling](https://forum.makerdao.com/t/signal-request-adjust-the-bat-risk-premium-and-debt-ceiling/3334)
  - Jiecut also asks if the BAT-A risk premium and debt ceiling should be adjusted. Note that the BAT-A debt ceiling was changed in the most recent executive vote.
  - This passed last week.
- [Signal Request: Resubmit Inclusion Poll for MIP12c2-SP4 - LRC Collateral Onboarding](https://forum.makerdao.com/t/signal-request-resubmit-inclusion-poll-for-mip12c2-sp4-lrc-collateral-onboarding/3692)
  - Aaron_Bartsch asks whether we should resubmit LRC in the September governance cycle.
  - LongForWisdom points out that the subproposal in question would be up to the author (@NikKunkel) to resubmit.

#### Discussion 1

[05:05](https://youtu.be/fPpCmrSkWPY?t=306)

##### wBTC Signal Request

- Akiva: Is the one to raise the wBTC risk premium on poll or by an executive vote?
  - LongForWisdom: That is currently a signal request, which will then go through the usual steps. No one has presented it as an emergency change yet, so absence of that happening will follow the usual process.

##### Collateral Calls

- LongForWisdom: Lucas is saying in the chat that the next collateral call is next Wednesday, 26th. Look out for that.
- Collateral Calls and other community events can be found in the [MakerDAO Community Events Google Calendar](https://calendar.google.com/calendar?cid=bWFrZXJkYW8uY29tXzNlZmhtMmdoaXBrc2VnbDAwOWt0bmlvbWRrQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20)

## Smart Contracts

### Brian McMichael

#### Smart Contracts Update

[05:55](https://youtu.be/fPpCmrSkWPY?t=355)

##### Liquidations 1.2

- The team has been working pretty hard on Liquidations 1.2 for last week, and we'll have some updates later in the call about that.

##### Parameters Changes

- Last week's spell passed. We raised the `dust` values from 20 to 100 Dai on all collateral types. The base rate was reduced by 2%, meaning we reduced the stability fee of MANA-A from 8% to 6% percent. We reduced the stability fee on USDC-B from 46% to 44%. And we also increased the system surplus from 500,000 Dai to 2,000,000 Dai. We also had an emergency executive vote earlier this week to raise the ETH-A collateral debt ceiling from 340 million to 420 million Dai, and that succeeded.

##### WBTC Postmortem

- We also have been doing some updates to our spell process. I did post a postmortem for the WBTC bug that Mariano mentioned last week on the call.
- It's not the smart contracts team's finest moment, but it did reveal a lot of opportunities for us in our process. We all knew that something like this could happen, and it was a matter of when and not if. This is because we usually prepare them and test them ourselves. We will get a head start in the evening after this call and, frankly, the stakes are high. In this case, we changed the WBTC line from 40 million, which should have been `RAD`, but we changed it to a `WAD`, and that effectively changed the cap to zero.

##### Improving the Process and Tools

- In the short term, what we've done was we've refactored our test suites to be able to quickly spot an error like this in our audits. We've also added unit testing around all of our modifiable variables that will check for precision ranges, so if anything slips in that's out of a precision range, we'll catch that right away in our tests.
- The Foundation has some internal tools right now that are still under construction, but they will be made public for visualizing on-chain changes. So, even if you don't read the code, we've got some tools that will let you quickly look and see what these spells are going to do to these various values within the system. We added those to the checklist that we use when preparing for the weekly spells.

##### Improvements to the Spell Casting Process

- We had this process where we used the previous week's Executive and moved forward from there, and every week we'd add a little bit more to it. So, it would get a little bit better, and it was an incremental process. If things changed that weren't in last week's Executive, we wouldn't have to go back, and that's where this error happened. So, we're going to be creating a full-scale template that isn't a copy-code thing that we'll be using for our weekly executives going forward. In the longer term, this is something that we can automate. We're doing line changes, stability fees changes, debt ceiling changes every week so, I think this is a solution that we can automate ourselves out of rather than relying on this manual spell crafting process that we currently have. In a way, it's good that this happened because it does put a spotlight and renewed priority on how important this spell crafting process is. We're a little bit focused on new features, and it's a reminder to all of us that the spell crafting process needs just as much attention. We are on the right track, we've already made some big improvements, and there's more to come.
- If anyone has any questions, we can do it now or later in the meeting.

## Oracles

### Nik Kunkel

#### Oracles Update

[10:57](https://youtu.be/fPpCmrSkWPY?t=657)

- We have been working ahead implementing oracles, the back-end details at least, for a bunch of potential collateral types. We've already gotten done pretty much anything that the smart contracts and risk teams want to tackle in the next two months. We are in a good position now to take a look at some of the more difficult ones that have popped up over the past couple of months.
- I think some of you may have heard me mention in the forum with respect to certain collateral types that maybe our stack doesn't really support right now. Implementing this would be quite difficult; we were looking for more low-hanging fruit to be able to onboard quickly. But, now that we have built up this lead, it's probably the right time to start looking at some of those. This can include stuff like the Uniswap liquidity tokens, stuff like Compound Dai, the aDAI, and yDAI type of tokens, looking at the security tokens and how we want to handle the architecture for those. So we're in a good spot right now, but it might be a while before you see the fruits of this labor before it actually makes it into production.

## Risk

### Cyrus Younessi

#### Risk Teams Update

[13:03](https://youtu.be/fPpCmrSkWPY?t=783)

- Recently, we have been working on Liquidations 1.2, trying to put together some parameters for it, as well as some operational procedures between Liquidations 1.2 and the old circuit breaker, which is still around.
- We also finally posted the Tether and PAXUSD MIP12 submissions into the forums. Please, take a look at those, which should be going up for a vote soon.
- We are also wrapping up our ETH-A and ETH-B risk evaluations. We should be posting those next week as well.
- There is also a Chainlink evaluation coming up hopefully next week, if not then early the following. I'm trying to squeeze that one into the next cycle as well.
- We've been spending some time exploring the cTokens as potential collateral types, cDAI, and whatnot, seeing if it makes sense to onboard those for governance.
- Then, for next month, we've begun preliminary research on the COMP token and PAXGold as well.
- I think that's it for updates, but if anybody has any questions, I'll be happy to answer offline.

## MIPs

### Charles St. Louis

#### Weekly MIPs Update

[15:23](https://youtu.be/fPpCmrSkWPY?t=923)

![Cover Page](https://i.imgur.com/dI8K4Vw.png)

![This Week](https://i.imgur.com/bR22HBd.png)

![Next Week](https://i.imgur.com/ozmGUAR.png)

- The gap week allows for whoever has proposals and progress to submit them for requests and comments and overall allow the whole community to gather themselves after this month's governance cycle.

![Collateral Onboarding Updates](https://i.imgur.com/fI6y0z5.png)

![Proposals in RFC](https://i.imgur.com/LlKIonR.png)

- I left out the LRC MIP12, which will potentially be resubmitted for next month.
- The MIP20 Target Price Adjustment Module has a [recording link](https://youtu.be/ZzEbuwyaZRQ?t=511) for this specific segment from last week's MIP updates.
- For MIP17 Weekly Actual Debt Ceiling Adjustments, Planet_X and I have iterating towards creating a reworked version of the MIP17, which previously also included risk premium adjustments. We're still figuring out the mechanism and whether it should be applied to just crypto assets for the short term or if we should add some functionality for the future of potential real assets. These are some considerations we have in mind. **If anybody within the community wants to join our working group, please message myself or Planet_X.** Additional help will speed up the process of getting this resubmitted.
- Wil will be speaking towards The MIP15 Dark Spell Mechanism's proposal and giving everybody a recap.
- Lastly, the MIP14 Protocol Dai Transfer is still in request for comments. It was rejected sometime last month or the month before this governance cycle. LongForWisdom is the original author and is looking for someone within the community who wants to focus on this proposal and champion it going forward. **If you are interested, message LongForWisdom or join the MIPs channel and make a comment there.** I'll facilitate the transition of the authorship.

![Pre-MIP Discussions](https://i.imgur.com/eWg3ILY.png)

- We had a new pre-MIP discussion posted on the forums last night on the [Vault Liquidation Mechanism for Centrifuge Trade Finance Assets](https://forum.makerdao.com/t/vault-liquidation-mechanism-for-centrifuge-trade-finance-assets-a-pre-mip-discussion/3737). It was proposed by Lucas.
- I want to remind everyone that there are still active discussions still happening with respect to a [Governance Chief Contract Redesign](https://forum.makerdao.com/t/governance-chief-contract-redesign-a-pre-mip-discussion/3080), the [Liquidation System Redesign](https://forum.makerdao.com/t/a-liquidation-system-redesign-a-pre-mip-discussion/2790), as well as [adding a poll to prioritize collateral applications](https://forum.makerdao.com/t/adding-a-poll-to-prioritize-collateral-applications/2936)
- There are other ones, but these are the most active ones.

### LongForWisdom (Governance Facilitator)

#### Governance Poll Review

[21:30](https://youtu.be/fPpCmrSkWPY?t=1290)

- The two things included in the bundle governance poll are the Declaration of Intent, Forward Guidance by Akiva, and the subproposal to off-board Richard Brown. The bundle has passed, and I don't see any reason for them not to move to Executive on August 24th.

### Wil Barnes

#### Presenation on MIP15 Dark Spell Ratification

[22:52](https://youtu.be/fPpCmrSkWPY?t=1372)

![Cover Slide](https://i.imgur.com/kwDJoNA.png)

- The MIP15 is eligible for ratification in September. I am quite excited to finally work through that process, so I put together this presentation to walk us through a little bit about how we got here, what the Dark Spell is to people who are new as well as some action items.

![Things to cover](https://i.imgur.com/cKJQR8t.png)

![Brief Explainer](https://i.imgur.com/dBL73wd.png)

- A brief explainer is that we had this issue back at the beginning of the year. We intentionally had a governance delay of 0 as we had a brand new deployment. We wanted to be able to patch bugs as they just showed up. That was the intention, although we didn't really need to patch any bugs. However, we had the opportunity to be diligent, too, if we needed to be. It also opened us up to a governance attack where someone could easily use various options that involve acquiring MKR and launching a governance attack against MCD. We were in a situation where if we did find a critical bug when we had a governance delay, we would probably have needed to perform an emergency shutdown. With the Dark Spell, now we don't have to. It fits into the existing governance processes as well as conceals the bytecode. Nothing goes on-chain. Nobody can reverse engineer it. It checks all the boxes for what we need to do. It's the best solution we have for our circumstances.

![Timeline from MCD Launch to Now](https://i.imgur.com/NtBOMvc.png)

- To understand why we have this as a MIP and how we got here, it's important to understand a little history. We're approaching a year of MCD being live. Everybody probably remembers that during the launch there was some initial debate around December regarding a potential governance attack. I wouldn't say it was contentious, but both sides had explained why we had a zero delay and why we needed it; however, we never really landed on a solution at the time. Then we didn't discuss things for several months until February, where there was a series of flash-loan exploits that brought the discussion back into the forefront. We immediately proposed the Dark Spell. We were working on it before, but this just accelerated the proposal. Then we proposed the Dark Spell around mid-February, and on February 21st, we moved to set the governance delay to 24 hours. We moved pretty quickly after the February flash-loan exploits to secure the system and have the Dark Spell fixed; however, then we stumbled upon a bug. Everyone was probably painfully aware when on Black Thursday we reversed the delay back down to four hours and stuck on that for a couple of months until April 20th when we increased it to 12 hours, which is the current delay time right now.

![Action Items for September](https://i.imgur.com/ccTNlML.png)

- This is going to be light on technical details. If you're interested in Dark Spell, there's plenty of literature and previous presentations on it.
- I really want to call out a few dates here. The formal submission will be between September 7th and 9th. The inclusion poll is between September 14th and 16th. The big MIPs executive is on September 28th.
- I am targeting that we ratify MIP15 in September, which would set the stage for further action in December for us to continue improving upon it. Please, review the MIP again and provide feedback. There is still time until September 7th to provide feedback. Here is the [link to the forum discussion thread](https://forum.makerdao.com/t/mip15-dark-spell-mechanism/2578). LongForWisdom is the only one who has made comments on the MIP so far. It would be great if others can take a look at it.

![Upon Ratification...](https://i.imgur.com/PeMScKO.png)

- Lastly, upon ratification in September, which I am hopeful for and think is a good possibility, we will have an initial set of guidelines for dealing with a critical vulnerability. Right now, we just have a common agreement with the SC domain team internally on how we would handle this, but this does formalize the process and creates a process where we can onboard a community appointed trusted third-party in the future and then start adding incremental improvements. It's the first step, and what I would like to highlight is that once it's ratified, discussion about who to trust the community appointed trusted third-party or parties will be and how we will set up a working arrangement with them.

![Additional Information](https://i.imgur.com/M55JNrd.png)

- I would direct all commenting and review to the forum [thread](https://forum.makerdao.com/t/mip15-dark-spell-mechanism/2578) where we can continue and make changes to the MIP if anyone desires.

## Smart Contracts

### Christopher Mooney

#### Liquidations 1.2

[31:51](https://youtu.be/fPpCmrSkWPY?t=1911)

- [Liquidations 1.2 - Forum Thread](https://forum.makerdao.com/t/liquidations-system-1-2-upgrade-timeline/3592)
- We are going to talk about liquidation 1.2 today. I'm Chris Mooney from the smart contracts team.

![What is LIQ-1.2](https://i.imgur.com/9VPnDqh.png)

- So, what is liquidations 1.2? It's a feature where we are going to limit the amount of Dai that is out for liquidation. Why is that? In recent months, we've seen a huge growth in MCD, maybe brought on by yield farming or just organic growth. But because of that growth, which is probably around 1.5 billion of collateral assets and around 420 million Dai, we believe that the keepers' capital reserves are insignificant to handle large pullbacks in the price of some of those collateral assets.
- This was a feature we've been working on in LIQ-2.0, and we thought it was complete enough, in that we could back pull it into this and limit some of what we believe is a mounting and growing risk in the entire DeFi space today.
- And we also get a bonus for this, because it gives us a little bit more resilience against oracle attacks that set the prices for oracle assets down to one way or something. In that case, you can imagine an attack would come in maybe through the fees or some mechanism, the price for all of these collateral assets would get set down to near zero, which would mean that in the next oracle price update effectively we would liquidate that entire 1.5 billion of collateral assets to reclaim all that 420 million Dai. That's really scary, and it's a situation Governance has about one hour to act to try and mitigate that and with this feature, even if we weren't able to act within that hour, the limit of our exposure would be to this new system variable that would prevent the amount of Dai for liquidation. So, rather than trying to reclaim 420 million Dai, we would reclaim whatever Governance sets this new parameter to.

![What to expect](https://i.imgur.com/Qyet54m.png)

- A new governance parameter box has been added to the `cat`, which has caused us to colloquially call this the litter box. This new variable has to be set by risk teams and governance. A few of the numbers I've heard toss around are maybe 10 to 20 million of outstanding Dai. So that's what the box might be set at. I defer to Cyrus's team and other people to come up with a good value. That team has to balance the risk of this new variable against it being too large. If it's too large, we are in a similar situation to what we're in today, and if it's too small, liquidations don't operate as efficiently as they could.
- We also have a new `cat` variable, the `litter`. So the `litter` fills the `box`, and this exists to represent the amount of Dai that's currently out for liquidation.
- We also remove `lump`, which is a `ray` that's denominated in collateral units. So this is the size of an auction lot that can go up right now, and because it's denominated in collateral units, while we were developing this, we found that we had a 500 ETH `lump` and with the rise of the ETH price recently, that meant that the calculation to build the `tab` for what would go out for liquidation could have actually overflowed and caused a revert. Not overflowed in a bad way that would change system accounting, but overflowed in such a way that it would prevent us from liquidating really large vaults that were up for liquidation.
- So, the problem is there's a lot of cognitive overhead to try and track this `lump` value because we have to always track the collateral price. So we've changed that by adding a new value per `ilk` or per collateral type called `dunk`, which is now a `rad` and denominated in Dai units because that's where we store Dai units as in the core accounting system. So, for anyone of our collateral types, we can now say, when a liquidation happens, the `dunk` size is going to be around 40 or 50 thousand for that. This is nice because it gives us a very predictable amount that we might be asking for at any given moment. Governance can set it once and forget it unless some major macro situation changes. And we also get to add a `file` check. `file` is the mechanism we use to set these values. That will prevent `dunk` from causing an overflow. So we still get to get the precision, but the overflow risk still exists. However, now we'll prevent Governance from ever being able to really set it close to that overflow.

![Graph - time 0](https://i.imgur.com/jvETbVi.png)

- You'll recognize this graph from Vishesh's weekly presentation.
- This is basically the amount of Dai that would be liquidated at any given ETH price, and I'm going to use this as an example to illustrate how this "litter box" is going to work.
- Up here we have "time zero", I chose six hours here because our liquidation `ttl`(duration) is six hours and the ETH price right now we'll assume is about 420 Dai per ETH.

![Graph - time 0 2](https://i.imgur.com/04gSJdm.png)

- As time goes on, we'll see an oracle price fall to let's say 325. So, this area of Dai that needs to be liquidated is going to get accumulated in the litter box. It's represented by this brown line.

![Graph - time 1](https://i.imgur.com/hv06f0u.png)

- As time goes forward, we are now one hour in, the price continues to fall, and we're at about 275, so now all of this Dai needs to be liquidated, and we've added that to the litter box.

![Graph - time 2](https://i.imgur.com/liMLYyJ.png)

- Times continues to go on, we hit the two-hour mark of this awful price crash, and all of us are freaking out. We hit the 250 mark, and this entire chunk gets liquidated and accumulates in the litter box. And you can see how the litter box is now over half full of the Dai that we have out for liquidation.

![Graph - time 3](https://i.imgur.com/pjH1gCS.png)

- So the next price tick happens, and now we are down to 200 ETH price now, so there's a huge chunk of Dai that are going to try and reclaim in this area. And, we had a little bit of space left in the litter box, and so we liquidated out of that chunk, keepers liquidated the amount that they could, before the litter box was full. The rest of this Dai in this particular time slice cannot be liquidated because there's no longer room in the litter box. So, this entire red area represents Dai that can't be liquidated. In fact, it actually gives these vault holders a little bit of a respite so that they can attempt to protect their positions.

![Graph - time 4](https://i.imgur.com/hD5eYI2.png)

- But in this fictitious scenario, the price is continuing to fall, so we are now down to 175, and there's a whole new chunk of Dai that is now out for liquidation. We're four hours into the auctions, but none of this has been liquidated, that means none of this is throwing pressure on the Dai price to go up, rather than maybe these vault holders attempting to close their positions. And we believe it's this scenario right here that on Black Thursday, for instance, would have had very sub-optimal pricing. We would find that it would be hard to collect at a fair market price in this level of liquidation. I mean, just the volume of Dai that we would need to collect far exceeds the amount of liquidity available to the keepers.

![Graph - time 5](https://i.imgur.com/1RJWsHw.png)

- So also in our fictitious scenario, we get down to 150. We're now at the fifth hour of liquidations, and our `ttl` for the first batch of auctions is six hours. And what's nice is that this is a very common behavior that we see whenever we get these rapid price crashes.

![Graph - time 0raph - time 0raph - time 0](https://i.imgur.com/EEbuFQ4.png)

- In the next time quantum, the price springs back a little bit and not only does it spring back a little bit but we are at the six-hour mark, and we've now dealt a bunch of this first round of auctions which has freed us up a little bit of space in the litter box. What can happen now is keepers can buy the next chunk of vaults, that need to be liquidated and they continue to add it to the litter box.
- I hope this gives a general idea of how the litter box fills, of what it looks like, and maybe some of you are already thinking what are the risks here, what are we looking at.

![Risks](https://i.imgur.com/1fDuXK6.png)

- Vaults may be withheld from liquidation while prices continue to drop:
  - I think it is the contention of most of the people in this space that this scenario is still far better than one-way bids like we saw on Black Thursday. That the price that we collect from this collateral liquidations would be far better than the price that we would have seen without this feature.
- Some vaults could avoid liquidation (...):
  - That's maybe arguable that it's also possibly a feature because the box should be set at what we believe what governance believes how much liquidity is available in that keeper ecosystem.
- If the box is set too low (...):
  - This would be extra bad if there was that available liquidity on the market, and we couldn't just take advantage of it because we'd set the box far too low.
- If the box is too high (...):
  - It's probably still strictly better than what we have today if it sets too high because you get that oracle defense mechanism as well. But it's basically the same problem which is that we could put so much Dai into liquidation that it would radically affect the peg and far exceed the amount of liquidity that keepers currently have.
- Litter may accumulate in the box (...):
  - This is just an artifact of how the code works, but you'd think that there was a strong enough incentive to deal auctions that you've won, but we've actually seen keepers in the past not deal their auctions. What's nice is that the deal function is not authorized so anyone can call the deal function so this actually creates an additional incentive for keepers to call the deal function on other people's auctions if they want to free up that litter accumulated to make more space in the box.
- The `cat` may leave behind some dusty Vaults:
  - Today, that's because of that `lump` size, and we may also leave behind possibly dusty Vaults because, if you imagine a Vault to get partially liquidated and you still have a little bit leftover, something under our dust amount, that's still subject to liquidation, but it might be below that dust amount. But that's no different than the current risks we have today.

![](https://i.imgur.com/q79P6CJ.png)

#### Discussion 2

##### Dynamic Litter Box

[46:13](https://youtu.be/fPpCmrSkWPY?t=2773)

- Aaron: Is it possible to make the litter box dynamic/automatic, so governance could just set it to being 10% of total DAI supply or something? I don’t want to have to keep changing it as supply grows and contracts, no?
  - Christopher Mooney: Yes. So I think right now the way to think about the litter box is that it's for us to hope that our ecosystem can get a reasonable idea of the amount of liquidity that keepers have available to them, and this is never going to be perfect. The short answer is "yes." If we wanted to, we could create an instant access module that you could hit, and anyone could call this function on it, and it would adjust the size of the litter box based on the size of the outstanding Dai supply. So that's certainly a thing that we could add in the future if we thought that would be a useful metric or a useful way to set this. Right now, if keepers have enough liquidity, if they could handle one billion of liquidations, there's no reason we shouldn't set the litter box at one billion, right?

##### Supply versus Liquidity

[47:29](https://youtu.be/fPpCmrSkWPY?t=2849)

- LongForWisdom: Yes, I think what you are saying is not directly related to Dai supply, it's more related to liquidity, right?
  - Christopher Mooney: More related to what we think the market can handle. In liquidations 2.0, that will be basically Dai liquidity in all of DeFi, right? Because it'll be a Dutch auction system, so we'll be able to use single block composability and go out to any source of Dai in the entire ecosystem and handle liquidations. So, we can be more liberal probably with the litter box, or we can get better numbers by looking at how much liquidity is up there. But for now, the keepers actually have to have that Dai liquidity or be able to at least cycle it from somewhere else within that six hours to make these bids. So, I think we need a variable to limit this, so we don't get sub-optimal liquidations.

##### Lot Size Defined in Dai

[48:21](https://youtu.be/fPpCmrSkWPY?t=2901)

- LongForWisdom: So you talked about changing the `dump` parameter to - I've already forgotten the name - the `lump` parameter to something else. Is that what is called?
  - Christopher Mooney: Yes! `lump` to `dunk` (Debt-Chunk)
  - LongForWisdom: So, my question is whether there any side effects or potentially negative side effects of defining the lot size in terms of Dai rather than collateral? Because presumably, that means that the lower the collateral price, the bigger the lot size gets in terms of the amount of collateral, right?
  - Christopher Mooney: I've actually have been thinking about this change as almost fully better but to highlight an example to your point, let's say we have a liquidation for a particular `ilk` that's going to ask for 40 thousand Dai for that `ilk`, maybe it would be hard to cycle out the amount of collateral that you would get from that at market rates or something.
  - Kurt: The interesting thing that matters is not the actual number of tokens of collateral; what matters is the dollar value of that collateral. Is it economical to move chunks of collateral of that size around? Any risk people who are on the call can correct me on this, but my understanding of how we set `lump` today, which is the collateral denominated value, is we set it in an attempt to target a certain dollar value per liquidation. But, we have the problem then that collaterals change in value, and so over time, we potentially have very different amounts of dollar or Dai value of collateral pro liquidation. So, what we are achieving by switching from `lump` to this new `dunk` - which is just the quantity of Dai per liquidation - it's just basically giving Governance what they want to have in the first place which is a fixed value in each liquidation.

##### Oracle Price and How Calculations of Collateral are made

[50:38](https://youtu.be/fPpCmrSkWPY?t=3038)

- LongForWisdom: I guess my concern is, we get the collateral price based on the oracles, right?
  - Kurt: That price is only used to determine if the vault is safe or not. It doesn't go into the calculation of `dunk.
  - LongForWisdom: How do you calculate how much collateral to liquidate based on the `dunk` parameter?
  - Kurt: You take it proportionally. Let's give a numerical example to make it simple. Let's say your `dunk` parameter is 50 thousand, your vault has 100 thousand units of debt, so then in your liquidation, you take 50 thousand units of debt, and because it's half of 100 thousand, you take half of the collateral.
  - LongForWisdom: Right. I was wondering how it would work if the oracle price was like zero, would that then liquidate all the collateral?
  - Kurt: If the oracle price goes to zero, all Vaults can be liquidated for that collateral type, but we're putting it in a measure where in fact, you wouldn't be able to liquidate all the Vaults, you'd just be able to liquidate up to the box. But that oracle price wouldn't affect the ratio of collateral to debt in each auction because that's just determined by the actual amount of debt and the actual amount of collateral in the vault at the time of liquidation.
  - LongForWisdom: I think I just misunderstood how you were trying to translate that. I assumed you were doing it based on oracle price rather than the percentage of a share of debt if that makes sense. But this makes a lot more sense.
  - Kurt: Right. It's percentage-wise, which is actually how it already works today only in reverse. You take a fixed `lump` of collateral, and you take a portion of the debt, in proportion to the ratio of that `lump` of collateral to the total collateral. So this is just turning that around. You take a fixed amount of debt, and you take collateral according to the percentage of the debt you're taking.

##### Interaction with Auctions

[52:58](https://youtu.be/fPpCmrSkWPY?t=3178)

- Akash: Do all the auctions still take six hours? I was confused by the part where you're saying anyone can call `deal`.
  - Kurt: The auctions will take however long they're configured to take, which is six hours. You can't call deal before the auction concludes, but once an auction has concluded, anyone can call deal for that auction, to clear the auction off the books, send the collateral to the winner, etc. And that's already how it works today, so the comment was if for some reason the keeper wins an auction and decides not to deal their own auction, maybe they also have like a CDP that they're trying to prevent from being liquidated by keeping the box full, someone else can come along, call deal, and unblock the system.
  - Christopher Mooney: That's not a change from today, the `box` component of it is, but anyone can call deal today on another person's auction, once the auction is finished.
  - Kurt: It's maybe slightly more important that anyone can call `deal` once we go to the Liquidations 1.2 because it has a little bit more of an effect in terms of unblocking more liquidations if the `box` is full.

## Risk

### Vishesh Choudry

#### Relevant Links

[MCD System Stats](http://daistats.com)
[MCD System Stats Alt](https://catflip.co/)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)
[Maker Vault Stats](http://makervaults.descipher.io/)

#### The State of the Peg

[55:15](https://youtu.be/fPpCmrSkWPY?t=3315)

![](https://i.imgur.com/WQyu8C9.png)

- Just, at a glance, we have ~430 million Dai outstanding.
- 330 million from ETH
- 2.7 million from BAT
- 11.1 million from USDC
- 77 million from WBTC
- Slight change in USDC-B
- Small amounts from KNC, ZRX, MANA.

![](https://i.imgur.com/w4Nr2Ri.png)

- WBTC supply has grown significantly after the DC moved. The excess space in the DC for WBTC over last week has shrunk. There is a moderately high utilization and is at a high percentage of current debt ceilings utilization.

![](https://i.imgur.com/DA2cHob.png)

- USDC dropped 38 million this week and is sitting at 10-11 million.

![](https://i.imgur.com/MpQOwmM.png)

- ETH has grown from 284 to 334 million. That is a significant 50 million increase. This bucket continues to grow.

![Balancer Pool](https://i.imgur.com/kjYUwZc.png)

- If we look at where this Dai lives, there is a small amount on Balancer.

![](https://i.imgur.com/pRgEhwz.png)

- There's a bit on Curve.

![](https://i.imgur.com/BcRZcy8.png)

- Compound market has about 212 million or so that's living in DSR, a good chunk coming from the excess supply in Compound chasing yield.

![](https://i.imgur.com/1qvBlxI.png)

![](https://i.imgur.com/bAaef18.png)

- About 212 million in DSR.

![](https://i.imgur.com/IDxHsgu.png)

- More or less, the peg has been closer to 1, in terms of ETH<->DAI trades. Hovering at 1.08~9. There has been a fair amount of slippage on Uniswap from traders in both directions. That bidirectional slippage moves the price needle a bit.

![](https://i.imgur.com/IDxHsgu.png)

![](https://i.imgur.com/zniBlae.png)

- USDC trades on Curve, dominating a lot of the USDC<->DAI volume. Those trades dropped about a cent. Sitting at an even smaller margin from peg 1.004~5.

![](https://i.imgur.com/LGdpCVw.png)

- DAI<->USD pairs have a similar pattern. In the last two or three days, the gap is tightening \$1.005~7 despite a surprising amount of slippage, even on sources like Coinbase.
- Interesting to note the differences in the Dai pairs profile trading. But the general consensus is that the peg has come down. A slight pricing gap exists where peg stands in which venue with an overall blended price at 1.005.
- This bodes well for the peg in terms of the collateral portfolio.

![](https://i.imgur.com/iiR54Pi.png)

- Watching ETH price rise and fall recently, generally, in the past, we see decreased bullishness on ETH. Where users would buy Dai, and the price goes up. But given our current state, that it's not a simple cycle of minting Dai and selling for ETH to resupply for leverage.
- Now we have diff structures dominating how Dai is used. It's more a cycle of minting directly and supplying directly for yield—a bit of a detachment for what's happening with ETH and Dai price. In the last month, we've seen less of the old narrative where ETH bullies Dai. Normally, that's a positive indicator for the Dai ecosystem, where there are now multiple external drivers on the Dai price. Primarily it's still those yield farming opportunities, and there are forks popping up, but in large part the past week, the crazy yields have calmed down.
- It's all relative since there is a couple hundred million Dai in protocols like Compound. It will be interesting to watch how the gap tightens on the peg or whether another yield farming cycle pushes it back up. It's really about people chasing the opportunities and putting their capital in Dai or in other assets. If the yield farming gets more diverse in its assets, then that potentially stresses the Dai peg less when it comes to yield farming.

## End Discussion

### Lucas Vogelsang

#### Short-Term Real World Asset Liquidations

[1:05:31](https://youtu.be/fPpCmrSkWPY?t=3933)

- Lucas Vogelsang: I missed the prompt by Charles to talk about the liquidations proposal for short term assets. Like ours, that we're proposing. We've come up with a neat solution for real-world assets with keepers that are short term assets. A quick introduction, and I'd love for Lev or anyone else to comment. For real-world assets that are short term in nature, portfolio of invoices, for example, has a 65-day life cycle. Generally, they would be paid back by day 65. That means if you're trying to liquidate a portfolio of invoices like this, an auction or distressed loan buyer is not the best. Just waiting and sitting on loans as they mature is a better strategy. For short-lived assets, it's harder to discover price and go through liquidations. We're suggesting that we don't use the Flipper but build a mechanism where the vaults can force liquidation, continually mature, and get paid Dai back as invoices are paid back. Any questions about that?
  - Lev: First, I wanted to say that I agree with the direction this is taking. With real-world assets, we were running up with reconciling the current paradigm with collateral liquidations with whatever works, especially for this type of asset. There are two extremes: one is the margin trading paradigm. Like trading on Bitmex, where huge leverage positions hit a liquidation engine that sells your position as a market order to the book. But then in the real world, there are long-term loans, like real estate, that are highly non-fungible. The underlying collateral is not as liquid and doesn't have continuous price discovery. The underlying loans, on the other hand, are higher quality, and you don't expect them to blow up. In those extremes, you have collateral managed in a different way. Coming from the world of liquid crypto assets that you want off the books when unsafe. This doesn't work in the opposite paradigm, less liquid but high-quality assets. Where you can't find a buyer, and there isn't the same price discovery. In general, the lending that MakerDAO is doing is more ad-hoc. The asset might have been created to specifically take advantage of a Maker Vault. I like your proposal of handling liquidations internally to the vehicle, forcing the manager of the pool to not issue loans and wait for short term loans to hit fruition is wise. My question: Are there similar ideas for longer maturity assets? For example, winding down funds for trade assets that are two months in maturity. And, similar structures with longer maturity assets. Can we handle this concept on the granular asset internally rather than liquidate pool shares on-chain?
  - Lucas: We spent some thinking on short-term, and I can expand if needed. But invoices, like bridge loans or trade finance, these have a fixed maturity where the final borrower is required to repay. It's not a line of credit that I can keep open for an unlimited amount of time. If I, as a small business, borrow money from this asset originator that then takes that loan and places it in a pool and uses it as collateral in Maker. I have a contract that says I'm borrowing \$100 from this Asset Originator and have payback in 60 days. Normally the mechanism is: you're delinquent if you don't payback. The SPV funding this pool of loans has a regular legal recourse. Like suing for payment. With longer-term assets, say a 10-year mortgage. You can't ask them to pay it back since the loan is due much later. You would need to find another buyer, but that wouldn't be required to happen on-chain. If you can require the asset originator to liquidate the vault in a reasonable amount of time, we won't have the option to wait for maturity. In that instance, we can have this process defined, like a distressed real estate fund, that has a mechanism in place. Where, if Maker needs money to be repaid and they can't find another investor to take on the share of the pool of Drop tokens. Then the Asset Originator would have to liquidate, which means selling loans to some hedge fund or broker. You could still give these drop tokens the ability to liquidate quickly potentially at a loss with a distressed loan company trying to provide liquidity for a premium. Now it's not waiting for maturity but that the Asset Originator would have to have an off-chain process in place to liquidate its portfolio outside of it. As this liquidation occurs, the fiat that is being raised is converted to Dai and repaid to investors of the pool, including the maker vault.

##### Longer-Term Underlying Assets

[1:15:15](https://youtu.be/fPpCmrSkWPY?t=4515)

- Lev: Am I saying this correctly? For longer maturity underlying assets, we could use this as a first line of defense and then have on-chain liquidation as a back-stop? Potentially if these are multi-year mortgages, you could force the Asset Originator to liquidate the underlying portfolio.
  - Lucas: I think that's what we want to get to, there we start running into what is an auction of securities on-chain. Which is legally possible; we have done some research, and Centrifuge is not the only member looking into that, but there is still some determination about the safest way to do that legally. Now you're auctioning this security on-chain, which needs compliance with security regulations. You may need a broker-dealer ensuring keepers can purchase it.
  - Akiva Dubrofsky: If the vote for advocacy goes through, we're trying to set up a call for sell-side advocacy for real-world assets and bring securities lawyers into the call to add questions.

##### Stability Fee on Real-World Assets

[1:17:58](https://youtu.be/fPpCmrSkWPY?t=4678)

- Akash: What is the expected SF that this collateral would be OK with? If it's a low rate, how would that battle against a high DSR?
  - Lucas: We've done 2 million in originations in the last month since we launched in May. Our average rate was 8.5% APR which is competitive, even with a high DSR environment.

## Outro

### LongForWisdom

#### Closing Remarks

- I think that is a good place to stop. Thanks, everyone, and Lucas for describing this and see you all next week. Everyone enjoy your week!

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

## Credits

- David Utrobin produced this summary.
- Artem Gordon produced this summary.
- Gala Guillen produced this summary.
- Juan Guillen produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
