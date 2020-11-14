# Episode 61: November 14, 2019

## Agenda

- [00:00](https://youtu.be/DD7g2t29D1E?t=1) Intro with Rich Brown
- [22:33](https://youtu.be/DD7g2t29D1E?t=1353) MCD: The next few weeks for Risk with Cyrus
- [54:27](https://youtu.be/DD7g2t29D1E?t=3267) Governance at a Glance with LongForWisdom
- [55:25](https://youtu.be/DD7g2t29D1E?t=3325) State of the Peg with Vishesh
- [1:00:00](https://youtu.be/DD7g2t29D1E?t=3600) Discussion

## Video

https://youtu.be/DD7g2t29D1E?t=1

## Terms

`ES`: Emergency Shutdown

`SF`: Stability Fee

`SLP`: Secondary Lending Platform

`DSR`: Dai Savings Rate

`Sai`: SCD Dai

`Dai`: MCD Dai

`sCDP`: SCD CDP

`mCDP`: MCD CDP

`DC`: Debt Ceiling

## Introduction & Governance

### Rich

#### Summary & Introduction

[00:00](https://youtu.be/DD7g2t29D1E?t=1)

- The launch is imminent; we want to talk about the upcoming future: the post MCD world. Assuming, of course, the community ratifies the vote for launching MCD.
- Cyrus will chat about bots and the risk pool.
- We're enormously interested in hearing back from the community as we get closer to MCD, use your microphone, or write in the chat if you have a question. We always stay for an extra 30 mins at the end of the hour for general Q&A.
- The executive vote for the launch of MCD is at 5 pm UTC tomorrow. It's significant for the DeFi ecosystem but also because, for the first time, there is a delay mechanism built into the contract. It allows us to have an executive vote, will enable the community to deliver it, giving the MKR governors time to decide on the launch. Until the vote ratifies, it's held in a queue until it goes live.
- The complexity behind Maker touches many industries; it's the API for DeFi, and anyone who has managed an API before, knows how complicated that can get. Additionally, we have tooling, websites, and numerous third-party apps built on top (Analytics, DeFi insurance, etc.) Coordinating a launch like this is enormously complex, and we can't operate without a somewhat definitive date. This is a middle ground that offers a preferable launch window. We might use this in the future, too, which is exciting.
  - Chris: Slight clarification: holding the hat for 16:00 UTC on Monday. So _if_ this spell is ratified, we have to make sure it has the `hat` at 16:00 UTC on Monday.
- Since we're venturing into the unknown, we're going to ask the community to evaluate precisely how governance works. I'll post some threads into the forums. More complexity is on its' way: SAI Stability Fee, DAI Stability Fee, Debt Ceilings, Auction Parameters, etc. We need to accurately evaluate if a weekly cadence works for us or if we need to adjust. We also need to adapt our activities to the results. It's an excellent opportunity to do some analytics on our effectiveness. E.G., this is how much we moved the SF this week, this is the impact on the peg the week after, drawing correlations. We can also address the Debt Ceiling, a solution from the SAI world, and if that fits in the DAI world. Debt Ceilings won't be as arbitrary as they have been, maybe just raising DCs as we get close is not going to be sustainable long term.
- Also, we'll want to do a significant overhaul of tooling. To track votes and see the effect(s). The system has served us well, but as we go forward, we need to have flexibility from the community. Requirements, polling, continuous approval voting when a lot is happening at once. This will be a wake-up call, and we'll be in an evaluative spotlight.
- We need to think about effective communication too. How do we explain what Maker is about to the broader world that reduces cognitive dissonance and onboarding friction? Helping crypto twitter threads stay on track and calm. Providing enough information to the public that allows stakeholders to engage with the system, with less friction.
- Another topic: Apathy. We occupy a tech-centered space. Technologists are highly critical of anything that moves. I'm not convinced apathy happens often, and it would be nice to measure this. Incentivization is worth examining too. We've had several conversations about incentives, and they fall into the following buckets:
  - Pay people to vote.
  - Skin in the game: Do we reward or punish people for their decision making?
  - Delegation: Is it a thing? Is it reasonable? Will people engage? How do we design it? Will others develop it?
- Ending the preamble with inspiration: the community has self-organized, interacted with the Foundation, and has shown quite a bit of initiative. That's our model, and it's enormously exciting. Makers' interim roles bootstrap the prototypes of positions that the community will take over for us. I'm going to start a thread in the forum to hopefully get a working group going. I want to build direct bridges with the community for initiatives.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

#### Questions and Discussion

[17:08](https://youtu.be/DD7g2t29D1E?t=1028)

- When it matters people will vote
  - Correct. In the absence of empirical data, I think people don't vote enough happens because voting is boring. Basis points on a SF can get boring. When the peg deviates, we get interaction just like when we have substantial votes, we gain more interaction. I think there will be less apathy as governance gets spicier in the coming months.
- Tbone: Who will step up and put out their address so someone wanting to delegate can copy their voting actions?
  - Rich: Meaning lead by example? We could reverse engineer that, but it's risky. Let's assume we copy someone else; Do we assume they are thinking about stuff correctly? I don't believe this needs to be baked into the core protocol, though this is why Maker has a Grants program so that teams could experiment and set examples for voting and governance.

## Risk

### Cyrus

#### General Discussion about Risk

[19:32](https://youtu.be/DD7g2t29D1E?t=1172)

- Last week we reviewed a dozen parameters, and this week we'll look at a dozen more. Many of the parameters will not need to be changed weekly, though many of them will need to be reconsidered and evaluated over time.
- We have a lot of exciting research to share coming up. Not only will there be additional overhead and difficulty governing in this new style, but it's going to take a bit for the community to absorb it, and we're going to do our best to engage the community. We're not going to force anything on governance. Although, we need to evaluate if we need another call to track all the parameters and align voters. These are unsolved problems at this point, but we'll see!

[22:33](https://youtu.be/DD7g2t29D1E?t=1353)
![](https://i.imgur.com/jdyILa8.png)

- The `Global Stability Fee` parameter is separate from the other `Stability Fee` parameters that are applied to individual Vault types. The global parameter can be useful to increase every collateral's Stability Fee up or down.
- The `Global Debt Ceiling` is a similar concept. It is a parameter separate from the other `Debt Ceiling` parameters that are applied to individual Collateral types.
  - We're going to approach the `Global Debt Ceiling` slowly since it will get complex with too many collateral types.
- The `Surplus Buffer` defines the buffer of surplus Dai in the system, above which Surplus Auctions occur.
  - There is a confusing game theory issue with the Emergency Shutdown and the `Surplus Buffer`. It's not safe to have it enormously high. But a couple 100K to absorb smaller losses and then scale out to make it useful. It should be at 500K for now. It will be helpful as we start accruing more fees. It's a multi-purpose tool.
- The `Debt Auction Delay` ensures that a debt auction is triggered after a liquidated Vault's collateral auction had enough time to conclude and post a real deficit. This delay to 3 days might not make sense because we imagine that it will almost never take an auction 3 days to complete. To reduce community friction, we dropped this to 2 days.
- `Dust` is the minimum amount that can be drawn from a Vault. We set it at 20 DAI to protect against an edge case of a malicious actor trying to create spam CDPs. I can already imagine UX issues we'll need to clarify that restriction early and often. I suggest reducing this to something more reasonable in a few weeks. This was set high specifically for the launch.

![](https://i.imgur.com/yWqoUwQ.png)

- The `Governance Security Module Delay` is 0 at launch to be flexible, but there is already a conversation about increasing the delay. Amounts suggested so far are a few hours and up to a month. As the system ossifies, it might rise.
- The `Emergency Shutdown Module Delay` is the amount of time after which users may claim collateral with their Dai. It is logical to allow any outstanding auctions to finish first, and so, therefore, we have selected 73 hours (3 days plus 1 hour) for the ESM delay.
- The `Emergency Shutdown Module Threshold` is the minimum amount of MKR needed to trigger Emergency Shutdown. 50,000 has been selected as a number that is attainable in a short period of time. However, as the distribution of MKR changes over time, this number may change. In general, we leave the game-theoretic discussions surrounding this threshold for another time.
- Nick is the head or Oracles and can take over for the `Oracle Security Module Delay` and the `Oracle Feed Quorum`.

### Nik

#### Oracle Risk Parameters

[42:20](https://youtu.be/DD7g2t29D1E?t=2540)

![](https://i.imgur.com/49FIpLT.png)

- There are two parameters that we need to focus on for launch, the `Oracle Security Module Delay` and the `Oracle Feed Quorum`. For context, the Oracle component of Maker has two primary smart contracts. The first being the "Medianizer" that takes the median from the price feeds and sets the reference price. The second is the Oracle Security Module(OSM). The Medianizer feeds a price value into the OSM that is queued. There is a delay period before the protocol uses the queued price. It's a defense mechanism in case someone attacks the Oracles. The delay is added latency to the process of Vaults being Liquidated. We want to strike a balance of reducing the attack surface and not disrupting liquidations etc.
  - The `Oracle Security Module Delay` is being set to 1 hour at launch.
- The `Oracle Feed Quorum` is how many Feeds you need to come to a consensus on the price. If you can affect the median price in that quorum set, you can attack the price. There are two threats: price attacks and censorship attacks.
  - We are thinking of having an `Oracle Feed Quorum` of 13 at launch.
  - We have 20 feeds. 15 original, plus 5 DeFi projects voted in. The Quorum value we're thinking of is 13. If you have 7 oracles, you can attack the price. In a censorship attack, where you try to censor the Feeds, you would need to compromise 7 as well. Whatever price the oracle reports, that's where the protocol will be stuck at.
  - Attackers would be opportunistic, relying on certain conditions to make their attack easier. E.G., one feed goes down; now, you don't need eight malicious feeds. You need seven. Until we see empirical data that all feeds are rock solid, we're staying conservative. We also considered 15 as quorum, but that means a censorship attack only needs six. One goes offline, and then you only need five, it escalates quickly. There is a cost to every attack; we struck a balance with that quorum number.

### Questions and Discussion

[33:56](https://youtu.be/DD7g2t29D1E?t=2036)

- Chaser:" How is surplus buffer financed?" - Cyrus: Through Stability Fees. - Chaser: OK, so if 500k DAI builds into the fees, then MKR burns after that? - Correct.
  [39:17](https://youtu.be/DD7g2t29D1E?t=2357)
- Chaser: If someone triggers ES, can other MKR holders vote against them?
  - Cyrus: No. Anyone can trigger this at the threshold, but there is no way to counter it. It's like a running tally.
  - David: If someone accidentally deposits MKR there over time, like ten years, and it gets close to the threshold, we could always raise that threshold, right?
  - Cyrus: Exactly, it's a tunable parameter(incorrect).
  - Chris Smith: Well, it's not tunable in the ES module. It has to be deauthorized _before_ it gets fired and then relaunched with a new threshold. If someone wants to make an ES deposit legitimately, they need to make sure they can reach the limit before the governance delay allows them to change the authorization. Otherwise, you're burning your MKR.

[48:38](https://youtu.be/DD7g2t29D1E?t=2918)

- Frank Cruz: "Question for Nik: With the volatility of ETH and future MCD approved assets like BAT, what's the response to the argument that the 1-hour Oracle Security Delay lag time may not be appropriate—comparable to Single-Collateral Dai Oracles that update every time the price of ETH fluctuates by +/-1.0%."
  - Nik: Different risks here. One risk is "I know the current OSM value, and I know the cued up value is." People can see they're going to be liquidated in an hour and close their positions. In that way, it mitigates risk, since we don't have to worry about getting enough capital to pay off the principal. The other danger is that we don't liquidate in time. Adding an extra hour shouldn't impact this. There is a healthy buffer from the collateralization ratio. We baked delay into the risk parameters that we assigned.
- David R: "for the emergency shutdown threshold, shouldn't it be a percentage of outstanding MKR?"
  - Cyrus: I'm not sure what the right metric is; we're trying to keep it small enough so that as the supply is more distributed, it's harder to reach that threshold. We don't want a situation far in the future that it's impossible to raise 5% of the supply in the time needed.
- Lawson: Where can I see the proposed Debt Ceilings by asset?
  - Launch Parameters are at the bottom of this post <https://forum.makerdao.com/t/proposal-migration-risk-construct/724>

## Forum Activity

### LongForWisdom

#### Recap

[54:27](https://youtu.be/DD7g2t29D1E?t=3267)

- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
- We have an official [welcome thread](https://forum.makerdao.com/t/the-official-welcome-thread/771/4) now.
- Scottrepreneur has been working on a [new forum theme](https://forum.makerdao.com/t/updated-forum-theme-and-seeking-feedback/765).
- Cyrus gave a written version of the [auction parameters](https://forum.makerdao.com/t/auction-parameter-derivations/781/3). The feedback was excellent. He expects the same for the written thread covering the presentation from today's call. These are just starting points, and we'll continue to refine based on feedback.

## Sai Analysis

### Vishesh

[55:06](https://youtu.be/DD7g2t29D1E?t=3306)

#### Relevant links

[Santiment Maker Data](https://graphs.santiment.net/makerdao)
[Graphs about Maker](http://makerdao.descipher.io/)
[Graphs about DeFi Loans](http://loans.descipher.io/)
[DAI 24hr VWAP Graph](http://dai.descipher.io/)

#### Insights

![](https://i.imgur.com/M97Snm2.png)

- The `Debt Ceiling` was raised to 120 million
- 102 million in supply. Just a few draws and wipes, not a supply explosion. That would have implied a hoarding behavior, potentially damaging the peg; it's good that it didn't happen.

![](https://i.imgur.com/C9BajnF.png)

- Small trading volumes the past 24 hours. Peg has been on the dollar. Not much DAI was moving around on the decentralized exchanges despite the surge in supply two weeks ago.

![](https://i.imgur.com/OMhVtcf.png)

- With a 5% SF, the Compound supply rate came down a bit. The borrowing rate hit just below 10%. Not an insignificant drop from last week. dYdX has held steady. Compound borrow volume has come down since a 5% drop. Supply volumes have also gone down. Though total supply has risen, there has been some refinancing of positions back over to Maker.
- Additionally, it seems that the borrowing volume on Compound has dropped significantly. On Nov 4, we had 21 million on Compound, and now it sits at 13.4 million. With the excess on Compound net going up, the Utilization dipped below 40%, which is pretty low leading up to that drop in rates. As Maker migration continues, the rate differential between SF, DSR, and the borrowing & supply rates on secondary lending platforms should be, theoretically, impactful. At least in how that migration occurs.

## Questions and Discussion

[1:00:39](https://youtu.be/DD7g2t29D1E?t=3639)

- Chris Blec: A big part of the apathy problem is around which decisions the Foundation makes on its own vs. which decisions finally go to a vote.
  - Rich: Tying into the pile of questions from the calls start: as this community shepherds the next steps on the protocol. "Which levers get exposed to the community, and how, and when" is essentially what this is all about. From the Foundation's principles. Ultimately, as we evaluate how this functions, we will find additional levers. It could be that exposing 50 different parameters to the ecosystem for a vote is not the best approach. Looking forward to opening that discussion.
- Randohash: Can you explain how the delayed price oracle could destabilize the system?
  - Cyrus: If the collateral price crashes and you know your collateral is useless anyways, then you are incentivized to continue to draw more DAI before the price hits. That's the trade-off of having the OSM. The solution is to keep a tight `Debt Ceiling` on the collateral type. Increase as needed using access modules. E.G., 50 million empty buffer in the `Debt Ceiling` is an unnecessary risk to the protocol.
  - Rich: Hadn't thought about mitigating the liquidity risk. Maybe that's why having a temporary governance actor is not the best solution?
  - Cyrus: We wouldn't hardcode the limit into the protocol. Say 200 million for ETH. Because users would withdraw the max.
  - David: So, a maximum and minimum buffer is the better solution?
  - Cyrus: Correct.
- Vishesh: Wouldn't those use cases only make sense when your buffer is only above your max collateralization? E.G., if ETH drops 50% and you have CDP's with 200% collateralization ratio.
  - Cyrus: Yes, good point. A severe drop is bad enough already since you may lose all the Dai associated with that collateral. You don't want to make it worse and lose all the undrawn Dai from that collateral.
  - Rich: How often do you think the community will have to vote on Debt Ceilings post-MCD?
  - Cyrus: Before or after instant access modules?
  - Rich: After.
  - Cyrus: We haven't discussed those modules on the call yet. Presumably, they will allow you to make changes in a small band of parameters quickly. Nothing extreme. E.G., we could change the SF by 1% if we want.
  - David: Info on the Instant Access Module idea can be found in the [Maker Protocol 101](https://docs.makerdao.com/maker-protocol-101) slide deck.
  - Rich: If we set up a sandbox for these models to react quickly to these conditions, it can certainly be interesting. Have we talked about those modules yet? Is there a timeline for their launch?
  - Cyrus: Defer to engineering. It wasn't in scope for launch. I believe the testing and finalizing is all the is left, and they are finished. Since it makes DSR more stable, they have it as a priority. Before we have those modules, I think it will be part of the regular vote.
  - Rich: Right, this is where I struggle, how much tweaking and how often?
  - Cyrus: During migration might be more or less. Post-migration might be less, and we'll have to see.
- Chris Mooney: Instant Access Modules aren't on our radar until post-launch. One thing to add: we're making a good spell-book. So governance can see it all on-chain. We're thinking about how to bundle a bunch of spells into one lump. There's possibly governance risk as we bundle, as it might change the cadence or the levers. We have to flesh out the best approach to bundling changes. - Rich: This might be one of that primary "what governance is post launch" flashpoints. Various parameters increase complexity. We might want to wait until MCD establishes itself a bit more before we add to its complexity. People will start to develop mental models that don't work with Continuous Approval Voting. More things for us to control increases the complexity of governance exponentially. - Chris Mooney: We don't want to split governance on a bunch of different votes. It will weaken collecting what we need for selecting the strongest hat. - Rich: This is why I don't predict the future. How to build out the Maker Protocols features will become evident as it becomes needed.
  [1:13:06](https://youtu.be/DD7g2t29D1E?t=4386)
- Chaser: About executive vote tomorrow. Is there a good source of the parameters? How much MKR to participate, and for how long? - Rich: Parameters are in the two polls in the voting portal right now. [System parameter poll](https://vote.makerdao.com/polling-proposal/qmba2hpv3kcbjgzvlnv7xsogs3jenqdiqo3ffnktgqtepn) and the [amendments poll](https://vote.makerdao.com/polling-proposal/qmzws83rd8gfwzhnjnfiduve6bcm826cyqemgp7nmzv6p4). One was incorrect, one to be modified. It just needs to exceed whatever the current hat is. 60K MKR to ratify. - Chaser: So it's the same number of MKR that has to be overcome for SF changes? - Cyrus & Rich: Correct! - Chris Mooney: Currently, I am building the spell with the finalized system parameters and will put it in the #general room in Rocketchat once it's on-chain. - David: There is also the caveat, MKR moving from the standing proposal. As it moves out of that one, the threshold is lower. If 20K MKR moves, then you would only need 40K for the other. It's like a sliding scale as it moves from one proposal to another.
  [1:15:40](https://youtu.be/DD7g2t29D1E?t=4540)
- Akiva: Wondering if there is any discussion with insurance companies to ensure a bridge between BTC and ETH to get a collateral type with a high DC?
  - Rich: WBTC or any BTC?
  - Akiva: Any
  - Rich: What is the counterparty risk here?
  - Akiva: The wrapping or the bridge breaks?
  - Rich: Is the risk technical or custodial? The main challenge, AFAIK, is that no one knows a decentralized custodian.
  - Chris: Not sure about the WBTC mechanism, but I know there is a counterparty approach. TBTC figured out the decentralized bridge, but they need a 150% collateralization on the ETH side. So that creates a collusion problem on the BTC side. Whatever we have as collateral would essentially boil down to more Ethereum. Both W and T BTC need a decentralized guarantee on actual Bitcoin at the end of the day.
  - Rich: Not sure if insurance would mitigate that. Fantastic use case and Nexus is doing that. I'm not sure what the recourse for 3p custodied collateral is.
- David: Could we talk about the `max auction duration` parameter again? Why three days and not one etc.
  - Cyrus: We never expected to reach that amount because of the bid duration. The edge case of it being: auction goes too long, and the collateral keeps rising, then you would see more bids, ending the auction. You don't want them arbitrarily long or short. Other collateral assets might benefit from the max duration. It depends on the asset. We have this expectation for bots bidding under secondary spot price for profit. But other illiquid assets, less frequent bids, sophisticated investors need a day or so to price an asset and make a move.
  - David: That would only run if there is no initial bid, right?
  - Cyrus: Right. But if it's an illiquid asset, you could set the bid duration to something much longer.
  - David: Profiting out of auctions form network congestion was the angle I was trying to understand.
  - Cyrus: That _is_ a consideration too! Surely extra time helps if the network goes down.
- Rich: Tomorrow is a significant vote. Everyone come out to vote! Show your grandkids your Etherscan, pull out your keys, and join us in the forum to vote. Thanks, everyone!

### Links from the Chat

- [DeFi Feeds Proposal](https://blog.makerdao.com/introducing-oracles-v2-and-defi-feeds/)
