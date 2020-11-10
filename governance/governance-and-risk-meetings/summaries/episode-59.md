# Episode 59: October 31, 2019

## Agenda

- [00:00](https://youtu.be/KrutexQ0Cs4?t=4): Intro with Rich Brown
- [14:48](https://youtu.be/KrutexQ0Cs4?t=888): Discussion
- [26:55](https://youtu.be/KrutexQ0Cs4?t=1615): Migration Risk with Cyrus
- [58:46](https://youtu.be/KrutexQ0Cs4?t=3526): Sai Market Analysis with Vishesh
- [1:12:00](https://youtu.be/KrutexQ0Cs4?t=4320): Recap of Forum Topics with LongForWisdom

## Video

https://youtu.be/KrutexQ0Cs4

## Terms

`ES`: Emergency Shutdown

`SF`: Stability Fee

`SLP`: Secondary Lending Platform

`DSR`: Dai Savings Rate

`Sai`: SCD Dai

`Dai`: MCD Dai

`sCDP`: SCD CDP

`mCDP`: MCD CDP

## Introduction & Governance

### Rich

#### Summary & Introduction

[00:00](https://youtu.be/KrutexQ0Cs4?t=4)

- Welcome to the Spooky edition of the Governance and Risk call. Spooky because we're going to hear from Cyrus again about the migration plan. We're going to talk about the governance ecosystem at first. We want to hear from everyone here, lots of strong opinions, and deep insight to share. As always, any questions or comments, please type them into the side, or speak up if you have access to a microphone.
- The Debt ceiling [discussion and forum vote](https://forum.makerdao.com/t/signal-request-should-we-increase-the-scd-debt-ceiling/506), largely shepherded by LongForWisdom, resulted in a Governance Poll. Stating that if the amount of circulating DAI came within 10 Million of the ceiling, then the plan is to add another 10 Million to the Debt ceiling and set the next vote.
  - This is the first time we've seen a Poll that allows for an Executive Vote to be created without moving through a polling stage first. That needs to be internalized. It's a very cool but potentially risky.
- Similarly, we are creating prototypical roles for that are imbued with special authority to do things. Cyrus for the Risk Teams and Nick for the Interim Oracles Team are examples.
  - The reason we created these roles is to establish a baseline that allows the community to eventually take over. So, in short to mid-term, the community joins us in these positions and helps us craft them. And then, in the long term, replaces us in these positions as the foundation winds down or focuses on different initiatives. Join the discussions in the forums where we hammer out some of the philosophical aspects of what on-chain governance looks like.
- As governance becomes more sophisticated, we have a sort of race condition for the improvement of the governance portal. We're determining the requirements of what we need of the system, and as the system becomes busier and more complex, we're finding more flaws in the current Governance Portal.
  - For example, in order to push a poll to the system, there is a significant amount of administration that needs to be done. Content needs to be written, light math needs to be performed, markdown files need to be posted, a poll gets cued up and sits in a tool, and then when a timer goes off that poll shows up on-chain.
- We have two mechanisms:
  - Polls; Which are time-bound.
  - Executives; Which are open-ended.
- One problem is that sometimes Executive Proposals will come along that determine the contents of a Poll; For example, last weekend, somebody came in between the time of SF adjustment Poll posting and the ratified SF adjustment Executive Vote, then staked a large amount of MKR. That makes it so this week we have a poll reflecting a range of numbers to an Executive Proposal that was actually stale. That's why the minimum Stability Fee for this week is 5.5%, as well as the Executive Proposal being 5.5%.
  - There are some complexities there we need to understand and some solutions we should figure out. Let's continue that discussion in the forums to find these solutions. My assumption is that it will be technical and social, so let's find out where those two meet; I think the tools need to be augmented a bit.
- There has been some discussion recently about what 'plutocracies' mean. As Maker gets more well known and gains more attention, we keep getting more quick/hot takes relating to plutocracy in our Governance system. One of these is: "whales are controlling the MakerDAO ecosystem." So to respond to that, here is what we need to internalize: **MakerDAO is a plutocracy**.
  - It was intentionally designed that way by the system architects. We have the MKR token that is used for voting and as the recapitalization source in the event of system deficits. It is _the_ backstop for this ecosystem. We have these stakeholders with the most skin in the game who have the biggest incentive to pay attention to how the system works and to manage it to preserve their holdings effectively. Yet we see some cognitive dissonance where people come into crypto for the first time, see a voting system, and naturally assume it's representative democracy rather than skin-in-the game voting.
  - MakerDao hasn't invented anything new, we've just assembled some of the best game-theoretic mechanisms for voting and system management and put them on-chain. One of the things we need to do a better job of is explaining to the public that we are managed by our largest holders. It's our responsibility, the forums and governance community, to lay the groundwork, set the memes, provide direction, and give these larger holders a way to come in and cast votes that benefit everyone involved. Happily, we've seen that in all the votes, though I am willing to be corrected if there has been a hostile or antagonistic vote.
  - The primary issue isn't whales; it's that we don't have enough of them.
  - We have whales and then krill; there are mechanisms and tools that the krill can use to self-organize and influence votes. As a voter, if you think that your vote doesn't matter, it doesn't. The system will be managed by those who take action with the conviction that their votes and influence matter.
  - An example of why every vote matters: **We just changed the SF from 9.5 -> 5.5 through a stake of ~1500 MKR.**
    - This is a ridiculously small stake in moving basically the entire DeFi ecosystem and a teaching moment. If you don't vote, somebody is. The person who does will control the ecosystem. There are many mid-level holders, and it doesn't take a lot to move the system. So, to sum this up, let's change this 'dirty plutocracy' narrative to show the benefits of our governance system as designed.
- Give us feedback about the call.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

#### Questions and Discussion

[14:48](https://youtu.be/KrutexQ0Cs4?t=888)

- PatrickD: Been listening for a month and spot on Rich, the problem is not a plutocracy, and we saw that one account was able to change so much. Is there a way to hold MKR holders responsible and reward us more for keeping the peg and punish us if we move the value of DAI?
  - Rich: There probably is. How to properly reward and punish MKR token holders is an ongoing conversation. There are two primary suggestions for that:
    1. An effective system that generates some sort of reward for participating in the ecosystem. My opinion is that no one has figured out how to create a participatory voting system that hasn't been immediately exploited for gain.
    2. How do we reward/punish specific holders for their governance quality. Their is room for that concept, that can be managed, that can be quantified and tracked, the problem with that system is designing it effectively and mitigating the additional friction imposed from eliminating any benefit. Right now, we have an ecosystem driven by MKR holders and the friction we introduced is essentially 'click two buttons.' So for more complex systems like bonding curves, vesting schedules, etc, we haven't seen any rock-solid proposals that seem effective.

[19:03](https://youtu.be/KrutexQ0Cs4?t=1143)

- PatrickD: So we have this 5MM in fees that is there to be burned. If we put that at stake if Dai goes too much above or below one dollar and if it stays at 1, we could put more money in there, these are just examples. I think we should incentivize for keeping the peg, not just if things go to hell.
  - Rich: Ok, lets' go to the forums and start a conversation about incentivizing governance. Do we reward risk teams for making a good call? Do we reward the holders? Do we pay someone to vote? A thread would be the beginning of the process of figuring out all the ideas, debates, and thus proposal at the end. Can we count on you Patrick to start the conversation and have a long tail behind it? Then we could get some movement behind better documenting the ideas and why they might or might not work.

[21:35](https://youtu.be/KrutexQ0Cs4?t=1295)

- Cyrus: "Can you also talk about why polls can't be edited after they go live."
  - Rich: The Voting mechanism is a contract deployment. The polling mechanism is emitting events on a contract that just show what events have been called in relation to the most recent poll. In order to avoid any foolish behavior, the wording of these polls is on-chain, tied back to a hash that attaches to a vote. If there is something wrong with the poll, then we have to introduce and additional poll immediately. There are no ninja edits where we rewrite history. This keeps the audit path clean.

[24:00](https://youtu.be/KrutexQ0Cs4?t=1441)

- LFW: Could there be an option for invalidating a poll? So you could signal that you don't think the poll is still valid.
  - Rich: That's a good idea. Every question introduces more questions. For example: what about day 4 of a 5-day poll and people find that their vote is not valid when they return? Loads more questions there to explore.

## Risk

### Cyrus

#### Migration Risk Construct Review

[24:43](https://youtu.be/KrutexQ0Cs4?t=1483)

Quick highlight: The Foundation put out a blog today that explains the renaming of CDPs to 'Maker Vaults.' TLDR: Better accessibility, and allows us to be more user-friendly as we work on scaling the protocol.

![](https://i.imgur.com/nyXra2l.png)
[26:55](https://youtu.be/KrutexQ0Cs4?t=1615)

- One benefit of the migration contract is that it happens outside the public market and exchanges, so users don't have to incur slippage moving back and forth buying DAI and settling. Eight risks that we've highlighted here in the presentation as follows.

![](https://i.imgur.com/h9pzSUs.png)
[28:59](https://youtu.be/KrutexQ0Cs4?t=1738)

- **Risk 1: Migration occurs too slowly**
- We know that crypto users move slowly(Friction, slow to do things, don't follow daily news, digging out private keys is difficult.) The plan is to select the most safety conscious risk parameters.

![](https://i.imgur.com/xz3BAFT.png)
[31:12](https://youtu.be/KrutexQ0Cs4?t=1877)

- **Risk 2: Migration occurs too quickly**
- An example is if we start the DSR at 10%, that could be a problem for a number of reasons. There is a level of uncertainty when launching a new protocol. Rectifying any changes that have to be made just becomes more difficult if there is a massive migration going on at the same time. It's better if SAI holders migrate faster than CDP owners.

![](https://i.imgur.com/ot3USWe.png)
[32:59](https://youtu.be/KrutexQ0Cs4?t=1979)

- **Risk 3: Secondary lenders might not utilize the migration contract**
- Need to make sure the debt ceiling can sum up both secondary lending platforms outstanding Sai(about 30 Million) because the migration needs to facilitate SAI holders moving positions back to MakerDAO. Without the migration contract, it would entail that these users would need to be buying Sai on the open market. If this happens, market-makers need to be able to facilitate the manual migration of CDPs.

![](https://i.imgur.com/VDFdaBp.png)
[40:15](https://youtu.be/KrutexQ0Cs4?t=2415)

- **Risk 4: Not enough Sai liquidity in the migration contract**
- We want Sai holders to migrate over faster than CDP owners.

![](https://i.imgur.com/VmwG5OQ.png)
[42:32](https://youtu.be/KrutexQ0Cs4?t=2552)

- **Risk 5: No Sai liquidity on public markets**
- Hoarding attacks where a malicious attacker tries to buy up as much as possible and then circumvent everyone trying to sell at a premium for people trying to close their CDP/vault.
- To deal with that, Maker governance can help market makers by letting them mint SAI cheaply.
- The only defense of this attack is a Emergency Shutdown, which would be a relative emergency. There is no solution for everyone to migrate if there is SAI that is permanently out of circulation. Ideally, market makers would participate in the assumption that DAI will stabilize back to the peg again.

![](https://i.imgur.com/tXTT1mI.png)
[48:00](https://youtu.be/KrutexQ0Cs4?t=2880)

- **Risk 6: MCD ETH debt ceiling adds risk**

![](https://i.imgur.com/fJBSagZ.png)
[49:17](https://youtu.be/KrutexQ0Cs4?t=2957)

- **Risk 7: SAI/DAI price below/above \$1**

![](https://i.imgur.com/3mY75du.png)
[51:31](https://youtu.be/KrutexQ0Cs4?t=3095)

- **Risk 8: DSR may cause MKR dilution event**
- DSR is recorded as an accounting cost, similar to debt. There is a chance that we trigger a debt auction early on if too much Dai is placed in DSR.
- Cyrus: An increase of the surplus auction threshold to 50K would probably provide plenty of leeway to stop an early MKR debt auction.
- David: This only happens if DSR that needs to be paid out is larger than the continuous new fees for new CDP's

![](https://i.imgur.com/zkZbPyZ.png)
[54:49](https://youtu.be/KrutexQ0Cs4?t=3289)

- This is the general plan, same default parameters, 2% DSR, 50 Million Debt Ceiling, gradually reduce SCD Debt Ceiling, maintain a 10-20 Million debt ceiling buffer in SCD for market makers.

![](https://i.imgur.com/yhmURbJ.png)
[56:06](https://youtu.be/KrutexQ0Cs4?t=3366)

- Won't get into this deeply for the sake of time
- Everything presented here will be in a more detailed document that will be going out in the next couple of days.

#### Questions and Discussion

[35:44](https://youtu.be/KrutexQ0Cs4?t=2144)

- Rich: Can you give us an example of what it would look like for the Debt Ceiling to respond to these pressures?
  - Cyrus: It's not preemptively raised, just want to make sure there is always a buffer maintained. If the Sai price were to increase due to secondary lenders closing their outstanding positions, we would need to expand the SAI supply.
  - Cyrus: The overall debt ceiling can be going down, but there should be a buffer present to accommodate for the migration between the current supply and the debt ceiling.
  - An example is that 30 Million outstanding, so 15-20 Million room would be enough.
  - JoeQ: Actively working with secondary lenders to make sure this goes smoothly. Compound, DyDx, etc.
  - David: Also, we don't need a governance poll for this, we have a ratified Governance Poll we can act on to maintain a 10 Million buffer so we can respond quickly if needed.
  - Rich: Precise wording of that poll "only in effect until MCD launches."
  - LFW: My bad!
  - Cyrus: As mentioned, yes, we're talking with secondary lenders to make sure it's smooth. As time goes on this will get easier over the coming weeks and months.
  - LFW: Instadapp made the Compound bridge, presuming they will do V2 as well?
  - Cyrus: Yes, they just released a blog about that this morning. Assume the Instadapp architecture is slightly different, and it may not be generalizable for all Compound users. But could be wrong there, haven't had a chance to read the blog this morning.

[46:23](https://youtu.be/KrutexQ0Cs4?t=2783)

- David: Does that mean there is a race-condition for CDP owners migrating?

  - Cyrus: The total amount of loss size is no more than 1%. When it comes to exchange liquidity, Uniswap will always be around and where people will try to find SAI. Technically yes, but in perspective, we want people to migrate as soon as they can, but global settlement is unavoidable.
  - David: so when the very last CDP's are there, they don't take haircut b/c they just close the CDP and get their balance of ETH back.
  - Cyrus: Correct.

- LFW: Do we want to come out with a process to handle increased cadence of governance calls?
  - Rich: No way to see what this will look like, so we don't know how to be agile with which groups. As Cyrus pointed out, we need to figure out a mechanism for that.

[1:07:45](https://youtu.be/KrutexQ0Cs4?t=4065)

- LFW: 2 more weeks before MCD, if we vote to reduce the fee again or the SF is at like 2%, then what?
  - Vishesh: We should continually lower the SF to chase the peg above a dollar. I would discourage continually chasing the .01 % on the peg is not the best plan. The system should weigh those costs when it can bear it, and right now, it can bear it.
  - Cyrus: The overall goal of the migration plan is to minimize the amount of engineering on the community end, so there is less pulling on strings. We've designed it for all the stakeholders in the system. So is the question is, what happens if people don't migrate for an extended period of time. We could increase the SF for one option, but there are more of these options, and it brings up global settlement as a discussion.
  - Rich: Seeing the way the ecosystem moves and responding in kind as a result.

## Sai Analysis

### Vishesh

[58:46](https://youtu.be/KrutexQ0Cs4?t=3526)

#### Relevant links

[Santiment Maker Data](https://graphs.santiment.net/makerdao)
[Graphs about Maker](http://makerdao.descipher.io/)
[Graphs about DeFi Loans](http://loans.descipher.io/)
[DAI 24hr VWAP Graph](http://dai.descipher.io/)

#### Insights

![](https://i.imgur.com/H110PhG.png)
[58:46](https://youtu.be/KrutexQ0Cs4?t=3526)

- Supply shot up to nearly 90MM after the recent decrease of the SF. We saw a few large draws a couple of days ago.

![](https://i.imgur.com/qhx7vgr.png)
[59:47](https://youtu.be/KrutexQ0Cs4?t=3587)

- Moderate-low amounts of collateral have been added, which is usual when Sai supply increases.

![](https://i.imgur.com/WWhSdlM.png)
[1:00:11](https://youtu.be/KrutexQ0Cs4?t=3611)

- 24Hr VWAP shows Sai price has been sitting slightly above a dollar where it likes to sit nowadays. Should assist in pressure to migrate.

![](https://i.imgur.com/TyjpDOE.png)
[1:00:49](https://youtu.be/KrutexQ0Cs4?t=3649)

- The 7-day VWAP is showing the same curve, with a similar long-tail as expected. The amount of volume on exchanges is most on Oasis then Coinbas, then Kyber, then Uniswap.

#### Secondary Lending Platforms

![](https://i.imgur.com/x8qNbvo.png)
[1:01:43](https://youtu.be/KrutexQ0Cs4?t=3703)

- With stability fee dropiing 14% -> 12% -> 10% -> 5%. We saw the borrow rate moving slightly and then creating a huge buffer between regular borrow rates.

![](https://i.imgur.com/XOIud5L.png)
[1:02:49](https://youtu.be/KrutexQ0Cs4?t=3769)

- Borrow volumes haven't moved at all. Despite the change in supply and the SF. I expected a big dip since I thought Compound borrowers would refinance back to MakerDAO. Fascinatingly quiet.

![](https://i.imgur.com/xH5jWMf.png)
[1:04:00](https://youtu.be/KrutexQ0Cs4?t=3840)

- No large change in supply volumes.

![](https://i.imgur.com/TdJA9kK.png)
[1:04:32](https://youtu.be/KrutexQ0Cs4?t=3872)

- Utilization rate had a slight uptick, but it's at an all-time low. Dydx is still in the 70's range.

#### Questions to Vishesh

[1:04:57](https://youtu.be/KrutexQ0Cs4?t=3897)

- David: Do you think people aren't refinancing back because there isn't an easy tool?
  - Could be a number of reasons. One important thing is the UI and the bridges for refinancing. It's important to consider the potential that the DAI being borrowed on Compound might be borrowed at either different risk profiles or using different assets as collateral and so the question is how many points in an annual interest rate are borrowers willing to eat in opportunity cost. Versus exchanging assets that they're using as collateral, unwinding their positions, switching to ETH as collateral, and then refinancing to Maker. In the event that they're collateralizing with say, USDC, then it may not be worth it to switch around.
  - Traders that are lazy and may be blocked by UI.
  - Another potential case, is if there is an expectation of rates changing, or traders are more comfortable on Compound vs. Maker. We can agree that these behaviors are counter to the economic incentives.
  - Maybe people are higher levered and interested in the lower collateral requirement, so a few interest points per year really don't make a difference to them. The other side is that they're using a different collateral asset. In which case closing positions to unwind versus where things stand is not worth the hassle with MCD imminent.
  - [Post-call twitter poll on why people aren't refinancing, 301 votes & many interesting replies](https://twitter.com/Davidutro/status/1189953395223871491?s=20)

### LongForWisdom

#### Forum Activity Recap

[1:12:00](https://youtu.be/KrutexQ0Cs4?t=4320)

- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
- [PurityDai](https://forum.makerdao.com/t/puritydai-a-potential-solution-to-the-real-world-collateral-controversy/526)
  - Purity DAI threads are most interesting. Why we can't leave SCD open indefinitely versus keeping a specific unwinding date.
  - A couple of good points, especially increasing the scope of governance.
  - Cyrus: SCD isn't as safe as MCD, especially with the new security modules we're adding. The MKR community could coordinate to prolong GS, but they'd have to be aware of the risk.
  - Rich: Obviously, a camp that would love to see DAI ride the ETH coattails to live and die on that. But I'm convinced that the community will likely initiate GS faster than we think. Mostly because of the tail risks of low liquidity, poorly supported version of DAI hanging around. This is the world we'll be in for a bit, two ecosystems, how long would we want to shoulder that additional work and confusion?
  - LFW: Yeah, I agree it looks like the majority of the community is there too.
  - Rich: Part of that cognitive dissonance adjustment period. So learning about what we've been up to over the past four years doesn't fit their mental model. New users are acclimating themselves through hot takes, twitter threads, and learning.

#### Links from the Chat

- [Oct 28, 2019: Debt Ceiling Governance Poll](https://vote.makerdao.com/polling-proposal/qmvzzpmzh5lu1sd3kwhc1aytzavsoblub43fe7xobhzf9g)
