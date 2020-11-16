# Episode 73: February 13, 2019

## Agenda

- [00:00](https://youtu.be/e4VTkFV3lyc): Intro with Rich Brown
- [1:54](https://youtu.be/e4VTkFV3lyc?t=114): Recap of Forum Topics with LongForWisdom
- [4:08](https://youtu.be/e4VTkFV3lyc?t=248): Forum Discussion
- [31:22](https://youtu.be/e4VTkFV3lyc): The Dark fix with Wil Barnes
- [44:25](https://youtu.be/e4VTkFV3lyc): Discussion Dark fix
- [1:06:16](https://youtu.be/e4VTkFV3lyc?t=3976): State of the Pegs with Vishesh

## Video

<https://youtu.be/e4VTkFV3lyc>

## Abbreviated Terms

`SCD`: The Single-Collateral Dai system

`MCD`: The Multi-Collateral Dai system

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`EV`: Executive Vote

`GP`: Governance Poll

`SF`: Stability Fee

`SLP`: Secondary Lending Platform

`DSR`: Dai Savings Rate

`CDP`: SCD CDP

`Vault`: MCD CDP

## Introduction & Governance

### Rich

#### Introduction

[00:00](https://youtu.be/e4VTkFV3lyc)

- Welcome to the Feb 13th Governance and risk meeting. Today there will be our usual agenda and, in addition, a presentation on the proposed solution to the GSM issue. It's an ingenuitive solution that is built on a cryptographic primitive, and it's named the dark fix. Wil Barnes from the technical team at the Maker Foundation will present for us and will [post on the forums](https://forum.makerdao.com/t/dark-fix-mechanism-a-proposal-for-handling-critical-vulnerabilities-in-the-maker-protocol/1297) in a few days.
- Give us feedback about the call.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

### LongForWisdom

#### Forum Activity Recap

[1:54](https://youtu.be/e4VTkFV3lyc?t=114)

- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
- [Who is voting 15k MKR to increase the DSR spread to 2%](https://forum.makerdao.com/t/who-is-voting-15k-mkr-to-increase-the-dsr-spread-to-2/1241)
  - In which @Joshua_Pritikin wonders why anyone would vote for a 2% DSR spread. Discussions ensue.
- [Continuous Polling](https://forum.makerdao.com/t/continuous-polling/1247)
  - A newcomer to the forum, @andytudhope, summarizes and presents the idea of Continuous polling, originally pioneered by @Adam_Skrodzki.
  - If at any point, the active polls are different from the polls in the protocol, we would create an executive proposal to reconcile that difference.
- [Suggested Improvements for State of the Peg graphs](https://forum.makerdao.com/t/suggested-improvements-for-state-of-the-peg-graphs/1239)
  - In which I attempt to get some feedback for the 'Most Wanted Improvements' for the State of the Peg section of the Governance & Risk call.

##### Signaling

- [Signal Request: What should the next ETH debt ceiling be?](https://forum.makerdao.com/t/signal-request-what-should-the-next-eth-debt-ceiling-be/1265)
  - In which @bit asks how much we should increase the MCD Debt Ceiling, or whether we should leave this parameter in the hands of the Interim Risk Team.
- [Signal Request: Should we reduce the minimum bid increase required for Surplus Auctions (FLAPs)?](https://forum.makerdao.com/t/signal-request-should-we-reduce-the-minimum-bid-increase-required-for-surplus-auctions-flaps/1219)
  - @Aaron_Bartsch asks if we should consider reducing the minimum bid for MKR surplus auctions. Hasn't reached a consensus answer yet, please consider compromise options!
- [Should we have another executive vote regarding the Governance Security Module?](https://forum.makerdao.com/t/should-we-have-another-executive-vote-regarding-the-governance-security-module/1209)
- [Signal Request: Reduce the frequency of the DSR Spread governance poll](https://forum.makerdao.com/t/signal-request-reduce-the-frequency-of-the-dsr-spread-governance-poll/1207)
- [Signal Request: How do we handle executive bundling in relation to technical changes?](https://forum.makerdao.com/t/signal-request-how-do-we-handle-executive-bundling-in-relation-to-technical-changes/965)

#### Questions and Discussion

[4:08](https://youtu.be/e4VTkFV3lyc?t=248)

- Rich: Did the person voting on the DSR spread reconsider?
  - LFW: It looks like they changed their vote because they realized they didn't have enough to win. I posted some [vote history in the thread](https://www.notion.so/twblack/2-12-00b7c12c01db479d83c2294de64722bb#4bcdcf8a519d421f9f615a171f5fc43a). 2% started winning, then a lot of MKR dropped to 0% and .5%, then the move to .5% started winning.
  - Rich: There was a signal for technical fixes vs. monetary policy, right? Can we speak about the implications of bundling of technical and fiscal changes?
  - L: It passed with 100% agreement for "no bundling." It means that some entity needs to define an 'emergency.' At the moment, I phrased this as the Foundation technical team is the authority to speak to an emergency. The interim risk team serves for monetary policy recommendations.
  - R: This creates a new dynamic that didn't exist before. Bundling increases the risk of a weak Executive Vote when the protocol needs technical fixes. For fixes to happen, groups of actors need to agree on suspending the monetary policy vote or not.

[8:43](https://youtu.be/e4VTkFV3lyc?t=523)

- Rich: We keep butting up against [continuous approval](https://en.wikipedia.org/wiki/Approval_voting) and [first past the post voting](https://en.wikipedia.org/wiki/First-past-the-post_voting). I think the topic is worth evaluating, and Andy Tudhope is a deep thinker in the space, it's important to take [his thread](https://forum.makerdao.com/t/continuous-polling/1247) seriously.
  - L: This change would make GPs more like the EVs.

[11:31](https://youtu.be/e4VTkFV3lyc?t=691)

- Rich: The risk team was empowered with extra migration responsibilities. But, at some point, we have to figure out when SCD migration is over or ending. Cyrus, do we have a critical metric we're waiting on?
  - Cyrus: To answer the [DC question](https://forum.makerdao.com/t/signal-request-what-should-the-next-eth-debt-ceiling-be/1265) of what the next ETH DC should be first, the heuristic we're using is these \$25 million increases to satiate the community appetite, until we do Governance V2 where we take a more quantitative approach to how some of these parameters might be derived.
- R: Additionally, due to the OSM risk, even if the max theoretical DC was very high, we should never set the DC that high immediately. Using incremental increases for safety's sake is critical. As long as we're not exceeding safe thresholds, there aren't significant issues.
- R: Migration is ongoing. Discussions continue about \$20 Million outstanding Sai, and it feels like we're still in that phase.
  - LFW: It's almost like we're practically finished with Sai migration or potentially in shutdown phase, whereas MCD demand is mostly new interest and not migration.
  - David: Primoz mentioned about 300 wallets are the owners of 90% of Sai debt in last week's call.
  - C: We haven't discussed an exit strategy out of the migration phase. If we want to declare ourselves "out of migration," that's possible. The current plan of small DC decreases when there is too much room in the SCD supply. We do need a long term plan at some point.

[16:26](https://youtu.be/e4VTkFV3lyc?t=986)

- Aaron: Most of these auctions only have one bidder; a good resource is [daiauctions.com](https://daiauctions.com/flap). 3% is the min bid increment. If you bid just under 3% of the current MKR price, you can be the only bidder since no one will overbid MKR price against profits. My thought was we could lower the min bid against the MKR burn spread.
  - Mariano: If you lower the bid, the fastest bid will be close to 1%. In this case, it pays to be the quickest. I've seen bids hit with \$7 in gas (101 GWEI per bid)
  - A: Keepers are capturing 3% on 10k Dai, I made the thread to see if we could capture more value for Maker holders.
  - Ed Noepel: I worry about narrow spreads limiting participation. I think even if one person is bidding, many participants are competing.
  - Aaron: Clarifying, you think that would reduce market participants?
  - E: If the profit margins are smaller, then yes, there would be less participation.
  - D: Still the problem with 1% or 3% rule. The 1% rule puts them at higher risk from MKR volatility.
  - LFW: [Aaron's Poll](https://forum.makerdao.com/t/signal-request-should-we-reduce-the-minimum-bid-increase-required-for-surplus-auctions-flaps/1219) has '35% of votes winning' for '2% bid' currently, '1% bid is 30% winning', and '13% votes for current or 3%'.
  - A: As the poll grows, maybe we'll put it on-chain.
  - Cyrus: The only way to see if the market can sustain a smaller spread is just to try it, right? Then check the data and move it back if needed.
  - Rich: Mariano, is this a high-frequency trading problem, regardless of the spread and mechanisms involved? Or just the system we have right now?
  - C: Close but not quite. Data indicates people will tolerate a lower spread. As a result, they bid higher with the Gas auction to secure that bid position and guarantee the option. E.g., if the reward is $300, how much would you pay to win that $300?
  - R: Clarifying, is this an auction or a race, there is no price discovery correct?
  - C: Multiple bidders are fighting for that position.
  - L: Because everyone knows that the bid is the 3% spread, it means that you can never bid less than 3% correlated with MKR price. If you want to win, you have to bid below the current MKR price speedily.
  - C: One issue: MKR holders are losing out on 300Dai per auction, to keep the auctions swift. The question is whether 200 Dai is better. Right now, the benefit is speed.

[24:17](https://youtu.be/e4VTkFV3lyc?t=1457)

- David: Is the min bid increase a non-issue? What's the goal here? Is it to increase participation or bids? I think it looks like it's working perfectly fine.
  - Aaron: It's working great. The question is making it better for MKR holders.
  - D: How would it help MKR holders, though? More burn compounding overtime?
  - A: Bingo.
  - Michael Newman: When we moved to this new system. 10K to participate is a push against smaller keepers. Maybe that's better for security, but it hurts smaller people like me.
  - Rich: Are smaller lots better for smaller keepers?
  - Cyrus: Assuming you're someone trying to offload MKR, secondary exchanges would be better for lower than 10k lots. Since liquidity has increased. The other problem is if lot sizes are too small, then the friction increases. You could look at it with auctions of 1000 Dai or even a retail-level of 100 Dai; auctions would be hitting all day.
  - M: Flash loans also are here now. That evens the playing field again.
  - C: Right, we didn't factor that in.
  - SamM: Flash loans don't work for this since they need to happen in one block.
  - Matthew Rabinowitz: If the spread instead of 3%, let's say it was 10% or even 20%, wouldn't that encourage more vibrant participation.
  - D: If you had a 10%-20% min bid increase, that would break auctions and give unfairly large profit margins to auction keepers.
  - MR: Possible yes, but wouldn't you encourage more people. You'd bid against if you could potentially get a \$1k reward.
  - A: But then it's a gas battle.
  - C: Miners are the only ones benefiting in that scenario.
  - D: If someone bids 9% against price with 10 min bid increment, it's kind of the same.
  - C: You could look at the price you pay to miners in gas as an indicator for altering the spread. To find the equilibrium point between gas cost and minimum bid.

## The Dark Fix

### Will Barnes

#### Governance Security Module

[Thread explaining the Dark Fix Solution.](https://forum.makerdao.com/t/dark-fix-mechanism-a-proposal-for-handling-critical-vulnerabilities-in-the-maker-protocol/1297)

[31:22](https://youtu.be/e4VTkFV3lyc?t=1876)

![](https://i.imgur.com/DPaGBf7.png)

- Currently, Maker has a GSM delay of zero, which allows us to fix bugs instantly but opens us up to a Governance attack. A non-zero delay, due to bug fixes being done on-chain, makes reverse-engineering the bug a real risk.

![](https://i.imgur.com/Vu5imIu.png)

- First, this fix is developed and tested against the deployment, on Kovan. Then, a fingerprint of the bugfix is created from the bytecode, which will now be referred to as the dark fix. This takes the bytecode, predetermines the deployed address for that byte code, and then points that spell at the deploy address, which will be sitting on-chain unaddressed.
- In this way, you can't see the bytecode, which is why we call it the dark fix. Only that unique bytecode can deploy toward that unique address. There is a lot of security in this cryptographic primitive.

![](https://i.imgur.com/mTX91ti.png)

- This solution allows a GSM delay without compromising security by avoiding having the bug fix sit open-source.

![](https://i.imgur.com/jI8CGKU.png)

- The social layer introduces complexity, but we do believe that this structure preserves MKR incentives.

![](https://i.imgur.com/AKA50M5.png)

- Software always has bugs. There are trade-offs and drawbacks. Openly signaling a vulnerability is not ideal, as we would still have to wait for the GSM delay to apply fixes toward any attacks.

![](https://i.imgur.com/dAsc0MA.png)

- We're confident that this introduces a balance between governance attack exposure and still have some amount of secrecy around the bug.
- We do have a [public repo of the fix](https://github.com/makerdao/dss-darkfix) that anyone can review.

#### Questions and Discussion

[44:25](https://youtu.be/e4VTkFV3lyc)

- Rich: Essentially, we're placing a significant level of trust in a group of the largest Maker holders. Profit motives immediately drive these people. In terms of the social layer, how can we trust Maker holders and hold them accountable toward green-lighting these dark fixes?
  - Will: I'd argue that you really can't. If they are a large MKR holder, all you can do is share the information and hope they're on board.
  - R: Do these people need identification? Or is it based on the largest MKR wallets signing yes/no? Are there non-disclosure agreements? How do you contact these MKR holders?
  - Wouter: This solution maps well on the gradual decentralization road map we have. In terms of the risk curve of critical code vulnerabilities, this will drop over time. Also, MKR distribution will get decentralized over time. In other words, it will become harder and harder to get in contact with these MKR holders as the MakerDAO project continues to grow, but the risk will also drop.
  - R: What do the actual mechanics look like? Are there thresholds in place?
  - W: Today, we'll have no issue contacting these people.

[44:25](https://youtu.be/e4VTkFV3lyc)

- Cyrus: Before, there was a significant trust component. We asked the community to trust us to remove the GSM, activate the bug fix, and re-implement the GSM. Is there an improvement in this trust requirement with this dark-fix implementation?
  - Wouter: The improvement is more bounded in execution. If you have these major MKR stakeholders vouching for the vulnerability and proposed fix, and they agree that a specific solution for a particular vulnerability must be kept a secret for the good of the ecosystem, then this solution is an improvement. Just removing the GSM delay and fixing any general vulnerability opens up the risk of doing whatever one wants when fixing.
    - W: Additionally, the GSM is never removed for the dark fix. The community has the opportunity to call ES, or if they have the majority of the MKR, they can cancel the dark fix before being approved. I think this is significantly better than removing all guard rails and just asking the community to trust us.
  - Cyrus: So, the community can see the dark fix before during the delay period?
  - Mariano: No, all they can see is that there is going to be one. But, the reassurance comes from some people verifying that they've seen the fix. We can create a hash of that signoff.
  - Rich: So, are the larger holders going to release a statement saying that they have seen it?
  - M: We can write the code to fix a bug, can hash it to this fix, and we show the fix to the five largest MKR holders. These can look at the code, vouch that it fixes what needs fixing and put that spell on the blockchain as a hash. The code only exists on the blockchain once the GSM has passed. And it does everything in one transaction. It will only be openly visible on the mempool in the queue for mining. Thus, the code will not be available for long enough to be exploitable by anyone looking for vulnerabilities.
  - M: That said, I'm looking forward to the community's input on this. The MKR holders can see this code and can vote to unschedule the hash if they deem necessary.
  - Wouter: To answer the specific question regarding how MKR holders would vouch for this and knowing that they did works like this. The most pseudonymous way to do it is to sign from an address holding a large amount of MKR. They reference the hash of the fix in the message. This makes it certain that the owner of the MKR is signing it and that they are approving the specific code that has that specific hash.
  - R: They are staking reputation on their potential vouching for this fix.
  - W: Yes, not only are they proving that they are signing, but they are also staking their reputation. So if there is a chance that the MKR holders can act nefariously, it would still be necessary to have the ES.
  - R: ES is still an essential component of this system. There is still a significant decision that the community has to make, trusting the people who have seen the code.
  - W: That's right. A trade-off where some trust is required, but it's the minimal amount of trust for precise, surgical operation in the system.
  - R: Is this trust in a small group of people or a large group of people? This model works in a model with a small group of publicly identifiable and substantial holders. If that changes, the system won't work as well.
  - W: Presumably, the more decentralized we get in the future, the lower the probability of vulnerabilities since it will be battle-tested.
  - R: Presumably, that's by no means guaranteed.
  - L: There is the chance of introducing a new series of bugs later on.
  - W: Right, there is no perfect solution. But this is the best one as far as we've reasoned it.

[55:00](https://youtu.be/e4VTkFV3lyc?t=3300)

- Cyrus: Why only the largest MKR holders? Is there a game-theory reason? Why not the developers?
  - Wouter: Fair point, you can include a mix of individuals with various amounts of stake. We can even have the community choose who looks at the code.
  - Rich: Why not get KPMG or somebody involved in this. Someone who is bonded.
  - Will Barnes: Right, an auditor from a security firm could work as a solution.
  - W: Large MKR holders are necessary because they have enough MKR to pre-approve the fix. But you can include other trusted parties.
  - L: Will you be preparing the largest MKR holders for this responsibility?
  - W: You oftentimes have some time, say a week, before the vulnerability can be exploited. This gives you enough time to discuss with the MKR holders and audit this properly. Then, a vote can take place - executing the dark fix or proceeding with ES.
  - R: There are other methods that can be explored. You can have highly visible, professional, international organizations auditing these security exploits. They can assure the large MKR holders have evaluated and signed off on this. They don't necessarily have to know the exploit, just that they trust the group that does.
  - Mariano: Keep in mind that this is probably time-sensitive. It can be a fix that we find ourselves or a white-hat finds, but in all of this, we could be racing against time.
  - LFW: We would need to confirm with these parties, as with the large Maker holders, that they are actually willing to be a part of this process and sign off.
  - Wouter: Yes, we could prepare this. The weird thing about this solution is that we don't need to change anything in the system if we implement it. We'll have a week to determine whether this is the right strategy.
  - R: There is some discussion to be had. So we'll put the proposal out and watch this over the next week or two?
  - W: Yes, our recommendation is to give this at least a week for people to process this information.
  - R: This is definitely an elegant solution. The issue of social coordination still makes me nervous.

[1:01:49](https://youtu.be/e4VTkFV3lyc?t=3709)

- C: Can we revisit this discussion regarding whether it is MKR holders or third-party people approving this fix? If we're optimizing for trust with larger holders, then aren't we creating privileged classes of holders that can see the fix vs. ones that can't?
  - Wouter: If I were a large holder, I would want to see the problems and proposed solutions.
  - Rich: If I was a large holder, and I knew gossip about other holders, I would trade my not knowing to have them not know either. There is a lot of game theory to consider here. Though it could be interesting to see large holders add their confidence in the decision-making process, and not necessarily making the decision itself.
  - LFW: Let's say there is a bug that needs to be fixed without revealing the exploit. Should there be a way to authorize money from the protocol to be taken toward paying for security audits to confirm that there is a bug as well as a verified fix?
  - W: That might be mixing two conversations.
  - Andy: With a bug, time is of the essence. It would take a long time to approve the funding, hire the third-party security team, and then fix the bug. As a dev, I would not feel comfortable letting a bug sit for that long in the wild.
  - R: Well, at least this is a good first pass on the debate for these types of fixes. Hopefully, [the forum thread](https://forum.makerdao.com/t/dark-fix-mechanism-a-proposal-for-handling-critical-vulnerabilities-in-the-maker-protocol/1297?u=davidutro) for this fix will enable more discussions. Two weeks might be optimistic for having this thing go through, but we should kick-off this process.

## Risk

### Vishesh

#### State of the Peg

##### Relevant links

[MCD system stats](http://daistats.com)
[SCD system stats](http://saistats.com/)
[DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)

#### Insights

[1:06:16](https://youtu.be/e4VTkFV3lyc?t=3976)

![](https://i.imgur.com/mkQsm3D.png)

- Trading volumes for MCD have been higher than SCD in general. MCD trading at $24.36 Million. Significant chunks of activity due to a spike in ETH prices. In the past, we've seen spikes in the $14-15 Million Sai range at certain times.
- It's interesting to compare spikes today to spikes in the past.

![](https://i.imgur.com/6FUL4n1.png)

- Dai is trading pretty close to the Peg. Starting from February 3rd/4th, there was some increase in trading activity with a greater spread above and tighter grouping below. From February 6th through the 9th, some trades slipped below—some large lower trades, and then a few higher trades above. There was some double counting as the Kyber trade was relayed through Uniswap, but that is being worked on. A lot of activity due to people scrambling to obtain ETH and lever up.

![](https://i.imgur.com/xfXOh8P.png)

- The rise in ETH price leads to a rise in collateral value. There is a huge amount of collateralization in the upper half of the graph. About 1/3 of the graph or 37 million MCD is collateralized around 300%. Some go down to about 175% collateralized. This is a bit more like the graphs we saw from SCD.
- It will be interesting to see how this changes over the next few days. As ETH price rises, people tend to pull collateral out to realize profits. We'll be looking to see whether this collateralization sticks, or whether ETH prices will continue to rise higher.

![](https://i.imgur.com/3sSTAT7.png)

- 121 million Dai. 117 Million of which is from ETH, 1.6 million coming from BAT.

![](https://i.imgur.com/B3sOZxI.png)

- 56.75% Dai in DSR. Short of inefficiencies, there is no reason why most of the MCD supply shouldn't end up in DSR.

![](https://i.imgur.com/hVhDfI3.png)

- The steady growth of the Dai + Sai supply over time in comparison to the Sai supply. Noticeable increase in the last few weeks.

![](https://i.imgur.com/fbJVdRn.png)

- Top 100 vaults continue to have 83% of the Dai supply.

#### Questions to Vishesh

[1:13:07](https://youtu.be/e4VTkFV3lyc?t=4387)

- Rich: Is there an optimum level that we should be expecting in the DSR? Shouldn't we want a portion Dai to be used, to be in motion?
  - Vishesh: Hard to say what's expected. This will probably top out at 75%. The things keeping Dai out of DSR are: trust, lack of awareness, moving it too quickly in usage, or someone supplying it elsewhere for a better ratio or using it as collateral as well.
    - Locked is a bad word. The value is not actually "locked."
    - This number does creep up slowly. It could potentially get up the 70's, but its interesting to know that the proportion has gotten up with total Dai. As people are purchasing Dai, they are ultimately putting it in the DSR.
    - If you have Dai and are holding it, there is no reason not to supply it either here or elsewhere. The interesting thing to note is the amount of Dai in DSR inclusive of where else it is provided for yield - whether that be dYdX or wherever else it is provided for collateral. If you subtract all of those stagnant pools of Dai, you can get what is left circulating freely.

#### Links from the Chat

- [DarkFix public repo](https://github.com/makerdao/dss-darkfix)

## Credits

- Tim Black produced this summary.
- David Utrobin produced this summary.
- Igor Teslya produced this summary.
- Everyone who spoke and presented on the call (listed in the headers.)
