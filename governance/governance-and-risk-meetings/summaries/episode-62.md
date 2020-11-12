# Episode 62: November 21, 2019

## Agenda

- [00:00](https://youtu.be/W6AeAC7mmDk): Intro with Rich Brown
- [12:10](https://youtu.be/W6AeAC7mmDk?t=730): Patches with Wouter Kampmann and Mariano Conti
- [36:37](https://youtu.be/W6AeAC7mmDk?t=2197): Risk with Cyrus
- [54:56](https://youtu.be/W6AeAC7mmDk?t=3296): Recap of Forum Topics with LongForWisdom
- [56:57](https://youtu.be/W6AeAC7mmDk?t=3417): Sai Market Analysis with Vishesh
- [1:07:00](https://youtu.be/W6AeAC7mmDk?t=4050): Q&A

## Video

https://youtu.be/W6AeAC7mmDk

## Abbreviated Terms

`SCD`: The Single-Collateral Dai system

`MCD`: The Multi-Collateral Dai system

`ES`: Emergency Shutdown

`SF`: Stability Fee

`SLP`: Secondary Lending Platform

`DSR`: Dai Savings Rate

`CDP`: SCD CDP

`UR`: Utilization Rate

`Vault`: MCD CDP

## Introduction & Governance

### Rich

#### Summary & Introduction

[00:00](https://youtu.be/W6AeAC7mmDk)

- We have technical team representatives joining us today. System architects, Wouter and Mariano, are here to give us insights into recent events and the [steps going forward](https://forum.makerdao.com/t/mkr-token-authority-transfer/836). Risk teams will be here to review parameters in the brave new world we've entered. Also, Vishesh is going to discuss the "State of the Pegs."
- MCD has launched, and now we have two universes to manage.
- When new launches come in, it's vital to avoid coordination errors. Specifically, grandfathering old processes into the new world.
  - In SCD we had the Stability Fee as our primary lever and came to understand its effects.
  - Now that MCD is live, we have the DSR, DAI and SAI pegs, Debt Ceiling management, incentivizing the migration process, and a lot more in the scope of governance.
- We have the stage set for a new level of complexity. People need the time and opportunity to adjust and learn how to manage the protocol.
- I am concerned that our cadence for governance actions has no basis in data. I'll open a new initiative thinking about our previous structure (weekly cadence, incremental rate stepping, a poll Monday, a vote Friday) and how it can improve moving forward.
  - We'll have to be prudent with how we approach the new process. I'll put up a post on the forums to evaluate our past performance, aggregate the ideas we've heard so far.
  - Potentially this can involve a working group with the community, foundation employees, and other stakeholders.
- This week, 950MKR effectively set the upcoming Executive Proposal we are voting on this Friday. This is ultimately fine as the real changes happen in the Executive Votes, but it brings up the potential problems we will face in the future.
  - The problem is primarily around MKR being ineffectively used to safeguard the system. For example, if we have a few weak Executive Votes, then it might spread MKR apart on many unpassed proposals, enough that one person with 20k MKR might be able to influence the system very easily with a new proposal.
- Give us feedback about the call.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

## MCD Next Steps

### Wouter

[12:10](https://youtu.be/W6AeAC7mmDk?t=730)

#### MKR Authority Transfer

![](https://i.imgur.com/Mqg2HRp.png)

- These next steps that need to be done will finalize the setup that we currently have with MCD.
- We discussed the authority transfer on the [community call](https://www.youtube.com/watch?v=P-X1tNOKRZc) this week too. This will be done in two parts that we will get into shortly.
- Clarifying: the `Flopper` is the Debt Auction.

![](https://i.imgur.com/hoBMzfe.png)

- MKR authority is currently a multisig of the Maker foundation. This authority worked for Single-Collateral Dai, since it used PETH instead of MKR. But now MKR minting through the Debt Auction needs to be enabled for the system to work properly.
- Part 2 of this will be about actually deauthorizing the Foundation multisig completely from the MKR token contract. This is the big leap towards more decentralization. This will be discussed more next week.

![](https://i.imgur.com/cavuDwt.png)

![](https://i.imgur.com/7GC2e6G.png)

![](https://i.imgur.com/YKfhLWh.png)

- We'll be putting both of these into the forums and sharing the code too. The Executive Vote only needs these: the flopper patch and the MKR oracle update. We're not changing anything, just giving authority to the system to do something.

#### Questions and Discussion

[26:46](https://youtu.be/W6AeAC7mmDk?t=1606)

- Matthew R: Is there an "undo" capability? Allowing for the authority to be transferred back to the Foundation's multisig?
  - Wouter: The authority function allows the multisig address to call private functions. That authority then transfers to the system. The DS-Chief architecture enables you to call any function in the system. E.G., you could transfer MKR to another party. That change would also require an Executive Vote.

[27:45](https://youtu.be/W6AeAC7mmDk?t=1665)

- Matt Lucas: Curious why we didn't catch the Flopper bug earlier?
  - Mariano: Formal verification is only as good as the specs we write. This patch is for a weird edge case. It wasn't found with formal verification, but rather with good old manual testing. We caught it via Kovan testnet, and, despite its size, we still caught it.
  - Mariano: Runtime verification is helping us model the whole system. This modeling allows us to simulate running Maker over hours or months. Which helps find more bugs and test updates. Also, we'll publish a post mortem of this particular bug.

[30:55](https://youtu.be/W6AeAC7mmDk?t=1856)

- Mitote: Do we still need an OSM for MCD?
  - Nik: OSM is there to stop an Oracle attack. It has a delay by design, as a protective mechanism. In SCD, moving the OSM doesn't increase the attack surface, since affecting the MKR price isn't as effective as moving the ETH price. In MCD this is different since fees are paid in DAI and not MKR; MCD doesn't use an MKR Oracle. Although MKR no longer needs an Oracle, Collateral assets still do and benefit from the delay that the OSM provides.

[33:11](https://youtu.be/W6AeAC7mmDk?t=1991)

- Jernej: Is there any plan to have issues and bugs be transparent?
  - Wouter: We're a little different than traditional software development. We can only add or replace modules and set system parameters. We're thinking of a Maker Improvement Proposal(MIP) process with a formal flow. Much like EIPs on ETH. Issues have numbers, are recorded, tied to the forum, ushered into the implementation phase, then pushed to an Executive Vote. If we need a patch, then we'd use the same system, but the process will differ. That formal process is another element ushering MCD to a more decentralized and transparent future.

## Risk

### Cyrus

#### Governance Over the Coming Weeks

[36:37](https://youtu.be/W6AeAC7mmDk?t=2197)

![](https://i.imgur.com/SAgRXUG.png)

- DAI Savings Rate is being utilized a little less than expected; what's most exciting is that the SAI and DAI prices have been stable. Hovering at a dollar for both.

![](https://i.imgur.com/GeiMgZe.png)

- As you can see, there is a significant increase in complexity for governance because of a number of new parameters. Let's keep discussions in Rocketchat and the forums going.
- The following are options for how we can move forward. See this [forum thread](https://forum.makerdao.com/t/signal-request-poll-how-should-we-structure-monetary-policy-polls-in-mcd/854/7) for the continued discussion.
- We have a process for gathering input from the community about how to structure and do Governance Polls. These are a few options we could use moving forward.
- We'll separate out Debt Ceilings for now since they don't need to be changed weekly. We experimented with a conditional rule which we may use in the future if the community decides.

![](https://i.imgur.com/YdNwsnP.png)

- This option allows for polling on each of these four main parameters. The result would be bundled into a single Executive Vote.

![](https://i.imgur.com/wUMvo07.png)

- This allows us to only have 3 Polls by keeping the SFs on ETH and BAT the same on MCD. Making them different at this stage provides very small marginal benefit when it comes to risk, given the small amount of Dai generated from BAT.

![](https://i.imgur.com/Bf1PUKf.png)

- An even more condensed option: We can vote on a single SF package which would determine the SFs across both SCD and MCD. The underlying rule would be the keep the rate differential of 1% constant.

![](https://i.imgur.com/VYmDLga.png)

- In the future, we could do a single Poll for a "Monetary Policy Package."
- If we can set the Risk Premiums separately and assume they remain constant, then the spread between the SF and the DSR would remain constant as well. We would just be changing the overall level of rates across the system.

![](https://i.imgur.com/Op5pqbk.png)

- Since migration is moving slowly, we don't have to focus on this for the next poll. We could put out a poll to start lowering the SCD Debt Ceiling.

![](https://i.imgur.com/PEsNzf8.png)

![](https://i.imgur.com/Eji4Cke.png)

- We need to be more proactive since we have important new tools to help us achieve our goals. Let's add clarity to our goals and intentions.

![](https://i.imgur.com/PaVZXMr.png)

- We should start to define some of our goals for migration and post-migration.
- These are my opinions, but we should be incentivizing people to switch over reasonably. It is giving data scientists and our organization enough time to upgrade metrics infrastructure. We should wait for exchanges and secondaries to migrate over and see how that affects the market. These are in a similar spirit to before: be conservative and move slowly.

![](https://i.imgur.com/CwHxxYU.png)

- In contrast, in the future, our goals may be more growth-oriented.

![](https://i.imgur.com/Q1Z5ugv.png)

- Next week we can review the rationale behind risk premiums, DSR, and the SF; more importantly, how to set those parameters properly.

#### Questions and Discussion

[41:03](https://youtu.be/W6AeAC7mmDk?t=2463)

- Rich: Are we combining the SF for ETH and BAT because they're highly correlated or because of BAT's volume?
- Cyrus: Mainly based on DAI generated from BAT is negligible. The Debt Ceiling is the primary risk control over BAT, and it's set very low.

[50:59](https://youtu.be/W6AeAC7mmDk?t=3059)

- Rich: Loops back to the earlier points at the top of the call: With a new system, and with Cyrus' options, we can look at the medium and short term work ahead. How do we poll for a new system? What does empirical data look like for informed decisions? How can we bundle operational overhead? How do we manage without creating weak executives? I'll post in the forums.
- Cyrus: How to structure the polls through consensus? Will the first poll be on Monday?
- Rich: I assume that we'll continue with the same process: Collate ideas in one forum post, set a Poll, and then move on from there. If everyone rapidly aligns, then we push the results forward.

### LongForWisdom

#### Forum Activity Recap

[54:56](https://youtu.be/W6AeAC7mmDk?t=3296)

- Surprisingly, not much activity on MCD in the forums.
- Cyrus came in to talk about [migration and system parameters.](https://forum.makerdao.com/t/discussion-system-parameters-derivations/793/14)
- [Debt Ceiling mechanics](https://forum.makerdao.com/t/debt-ceiling-mechanics/785/2) suggesting an improvement where individual DC's relate to the market caps of their assets.
- [Will Maker abide by AML and KYC laws](https://forum.makerdao.com/t/will-makerdao-have-to-abide-by-know-your-customer-and-anti-money-laundering-laws/819) from FINCEN guidance.
- LongForWisdom updated the index, making it a little easier to find your way around the forums.
- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)

## Sai and Dai Analysis

### Vishesh

[56:57](https://youtu.be/W6AeAC7mmDk?t=3417)

#### Relevant links

[Santiment Maker Data](https://graphs.santiment.net/makerdao)
[Graphs about Maker](http://makerdao.descipher.io/)
[Graphs about DeFi Loans](http://loans.descipher.io/)
[DAI 24hr VWAP Graph](http://dai.descipher.io/)

#### Insights

![](https://i.imgur.com/RA2b0P4.png)

- For Sai, over the last 24 hours, the peg was stable, a few moments above and below a dollar.
- I added a graph for the new DAI token as well.

![](https://i.imgur.com/Hs9LjTk.png)

- 24 hour SAI chart quite stable

![](https://i.imgur.com/Oe581xO.png)

- DAI volume picked up in the past 24 hours.

![](https://i.imgur.com/X63d66O.png)

- DAI peg showing a window that includes larger trades below a dollar. That's another tangent we could address.

![](https://i.imgur.com/cLj9CRo.png)

- Slight nuance with timing methodology on some of these trades. Additionally, the granularity in pricing relies on Coinbase and other exchanges, which can account for some differences.

![](https://i.imgur.com/NVs69XJ.png)

- This is the Dai peg. Some bumpiness from the switchover.

![](https://i.imgur.com/7AasAlV.png)

- DAI VWAP, slightly below a dollar. Trading volume has picked up in the last few hours. Much more than 48 hours ago.

![](https://i.imgur.com/RrIaffY.png)

- The run-up in supply, leading to migration that indicates supporting behavior. Just after the switch, we saw a $3-4MM wiped, $2MM wiped, $2MM generated, and then finally $3MM getting wiped again. After migration, Sai supply went from $102MM to $96MM.

![](https://i.imgur.com/EuvdOUS.png)

- In the last few hours, SAI dropped further to 92MM.

![](https://i.imgur.com/WTBRYjt.png)

- Net $1.8MM wiped. Coincided with a drop in ETH price, to just below $160, which lead to liquidations and more complexity. It will be interesting to see how liquidations impact Dai vs. Sai in the migration time frame.

![](https://i.imgur.com/emPnYle.png)

- 12.8 million Dai Supply, with 760k in the DSR. Curious to see how attractive this rate is in the market. Maybe a higher rate will speed up migrations.

![](https://i.imgur.com/GC7GVRH.png)

- We've seen 150K Dai transaction volume in the last three days (via Etherscan). We can reflect on the transaction volume between Sai and Dai in the future when there is better data infrastructure.

#### Secondary Lending Platforms

![](https://i.imgur.com/tsXovRF.png)

- The Compound Sai supply rate is higher than the SF still for SCD. This might slow migration since the rate that you get for supplying assets to Compound is higher than the cost of having that Sai. Theoretically, it's still more attractive than the DSR at 2%.

![](https://i.imgur.com/czRxVy6.png)

- Before migration started, we saw Compound borrow volumes for Sai drop, and they've stayed flat.

![](https://i.imgur.com/WKvnEk5.png)

- Sai Supply volumes have also held flat. You'd expect more of a dip in both borrow and supply post-migration. Since it's staying sticky, maybe this lack of motion contributes to the slow migration.

![](https://i.imgur.com/89FntT7.png)

- Compound utilization came up a little bit, but net change is about the same before migration began.

#### Questions to Vishesh

[1:06:45](https://youtu.be/W6AeAC7mmDk?t=4005)

- Matthew: Compound migration is when?
  - Cyrus: It's in the rocket chat. Robert came and shared that it's coming. [Link to their blog](https://medium.com/compound-finance/support-for-multi-collateral-dai-c8691d0ef794)

## Further Discussion and Questions

[1:07:00](https://youtu.be/W6AeAC7mmDk?t=4050)

- Cyrus: Right now, the SAI and DAI prices are stable, technically everything is fine, and migration is progressing. Eventually, that will slow down, and the natural response is to raise the DSR, incentivizing SAI holders to migrate.
  - This might make the DAI price more than a dollar. Offsetting this effect of the DSR requires expanding supply by lowering the Stability Fees.
  - The SF being lower would converge the spread between DSR and the SF. This process basically amounts to a subsidy. Since the system earns less in SFs and pays more in the DSR.
  - We need to be aware of these complex dynamics. Does anyone want to contribute to this topic?
- LongForWisdom: Is it only "subsidizing" if it's 100% usage of the DSR?
  - Cyrus: If the system is earning less than it should, that's subsidization. We should be earning the real spread between SFs and DSR adjusted for Utilization Rate(UR).
  - If we were to change DSR this week, it would be accompanied by some other offsetting change.. Tying this into the poll structure, It makes sense to combine specific changes as proposed packages.
  - The UR is also tricky. If you change DSR, then the UR goes up, and we have no idea how to think about this.

[01:12:13](https://youtu.be/W6AeAC7mmDk?t=4331)

- LongForWisdom: Those patches that Wouter and Mariano presented will need to go into an Executive Vote?
  - Nik: Everything but the MKR authority part.
  - LongForWisdom: Bundling technical and rate changes seem like a problem. If the rate changes pass with 970MKR, then how many significant changes will happen with less engagement?
  - Rich: In the singular world, this was easier. We can view our governance with two perspectives. One being Economic, the second being technological. Conceptualizing the protocol as an app. In the app model, we can't vote on every update or emergency deploy. Mixing and matching in one weekly vote might be problematic.
- LongForWisdom: Clarifying, so for technical fixes and upgrades to occur, we need to vote?
  - Rich: Correct. Some of these you need to vote-in, while others like the MKR authority, can be done without voting since it's something external to the system.
- LongForWisdom: Can we not bundle monetary policy changes with technical changes?
  - Rich: We could say that, but I'm not sure we have the authority or capacity to say that yet.
- Nik: We've mentioned before how we want Polls to be the decision-making venue while having the Executives be a roll-out of changes.
  - Rich: The problem is that we say a Poll is a signal, now we're saying it's a decision? At the end of the week, we still have a yes or no in the form of an Executive vote.
  - Nik: We can transition away from Poll being a signal, to a Poll being the vote.
  - LongForWisdom: You can't separate them, it has to be two votes, and you need the Polls. Say one wins 100%, and the other gets less. If the losing side doesn't want it, they'll continue to vote that way on the executive too.
  - Rich: I agree, and it increases operational overhead. 950MKR altered the SF because of another Poll and vote that was distracting. What happens when we have 3-4 votes a week?
  - Nik: Maybe the problem is narrative? When you say the polling is just signal, people don't care enough because they don't think the stakes are high.
  - Cyrus: They shouldn't be high because if we have too many Executives, then MKR gets split, decreasing security.
  - Nik: We're talking about reducing executives correct?
  - Cyrus: Ah, yes, you're right.
  - LongForWisdom: Polls don't have stakes, the Executive ultimately controls the system. They can register disapproval at that stage.
  - Cyrus: Technical Executives should be few and far between. It shouldn't bundle. E.G., including something technical or something you don't want. Otherwise, bugs would persist.
  - LongForWisdom: That was the point I was making.
  - Cyrus: Maybe we can focus on bundling without technical changes included.
- Rich: Let's formalize this thing, address these situations, record the solutions in the forums, and implement them if the community is in agreement. Generally speaking, we need to make some iterations and improve the system, especially our tooling and conceptual frameworks.
- Cyrus: Can we delay the Executive Vote?
- Rich: Perhaps, but I'd like to see the community communicate its signal.

[1:24:24](https://youtu.be/W6AeAC7mmDk?t=5064)

- Aaron Bartsch: "Why not create a mandate/precedent for this type of situation before they happen?"
  - Cyrus: We'd love too. But, we keep coming up on new edge cases.
  - Rich: Correct, the branching complexity is significant. Especially the time to handle technical issues and discovery as it comes. The community could come together and start thinking of the edge cases in advance. I know the forums aren't satisfying or sophisticated for handling these. As we grow, we will have to operate in a more organized manner. Ultimately we are managing a software platform, and there are tools and methods in place for managing software effectively.

[1:27:40](https://youtu.be/W6AeAC7mmDk?t=5260)

- Cyrus: Does anyone have strong opinions about DSR? Stay the same? Go up or down?
  - LongForWisdom: I don't think we can raise it high enough?
  - Rich: We just launched two days ago; there isn't enough empirical evidence to make changes.
  - Matthew: DSR is a monetary policy tool; the question is the peg. I don't see it off right now.
  - David: There is a camp thinking about raising the DSR to increase migration speed.
  - Vishesh: I don't believe the DSR is going to affect the monetary policy given the small MCD supply. It's more about does it speed it up migration? It's likely too early to say.
  - Rich: Well, it's not a long term strategy.
- Cyrus: So, what if the community chose to raise the DSR in a more extended timeframe? Could you quantify the cost of a slower migration? Calculating this might help us think whether it's worth it to increase the DSR. It's that subsidy I mentioned earlier.
  - Vishesh: If the DSR is not going to be permanently higher that nobody will take advantage of it. E.G., Sai suppliers on Compound right now are looking to get the best rate. Inevitably as migration proceeds, borrow volumes will decrease, furthering the migration. It's more of a sequencing question. It's not about a permanent change in rates; it's more about the concern of the migration's pace.
- Rich: We still don't know what the DSR is and how it will affect different use cases. Exchanges? Large holders? Apps? Retail? Maybe a conservative approach is best.
  - Vishesh: I agree with you that moving forward, we don't have a clear eye on what the use case for the DSR is. Though there is a system that exists right now. At the moment, it's a proxy for existing use cases. E.G., individual users who purchase DAI and get a relatively risk-free yield. We don't know what happens in the future.
  - Matthew: Everyone loves free alpha; there is no stopping recycling. If we drop SAI DC to 0, then increase the DSR. That's how you would force one side or the other.
  - Rich: Correct. That's the aggressive approach.

[1:32:56](https://youtu.be/W6AeAC7mmDk?t=5576)

- Taylor: DSR can financially incentivize certain people. There are other things we can do to increase migration speed, which would have a more significant effect than DSR. If we're going to chat about DSR, do we have data? Is there a financial downside to a slow migration? Is there research on past changes that are similar? E.G., if a slow migration costs Maker $1 million, we could spend $900K to increase the speed.
  - Cyrus: Rich and I are the fear-mongers of the slow migration. We don't know how to quantify the cost there. Behind the scenes for managing Maker's on-chain governance, we have this internal 40-step process for one week's worth of polling, requiring a lot of cross-functional overhead to get everything executed correctly.
  - Rich: The operational overhead is one part of the cost, but Taylor bought up some other interesting points. Attempting to quantify the cost of a slow migration is an interesting question.
  - Vishesh: The most significant risk or cost comes from managing two systems.
  - Rich: The internal cost is an interesting question.
  - Cyrus: We don't have data yet.
  - David: Agree, the original point still stands, "it's been three days."
  - Rich: Order of the day is due diligence, caution, sane defaults, and responsiveness. Over time we can add in additional governance pieces. Let's avoid grandfathering in old processes to the new system.

[1:37:16](https://youtu.be/W6AeAC7mmDk?t=5836)

- Vishesh: Taking it back to scientific governance, seeing the DSR change often will be an essential topic. Which variables do we want to change, when, and how do we choose which ones?
  - Cyrus: I want to keep the spread between SF and DSR relatively constant. Making sure the peg stays. It makes drawing signal out of our current data more difficult.
  - Vishesh: That's supposing that the spread is what you want to keep constant.
  - Cyrus: It's open for discussion; the quality of the collateral shouldn't change on a week-to-week basis. We could hopefully change this spread infrequently, once a month or quarter.
  - Vishesh: When something goes wrong, how do you determine the root cause and the right lever to adjust? Since information right now is scarce, we should change one thing at a time.

[1:40:34](https://youtu.be/W6AeAC7mmDk?t=6034)

![](https://i.imgur.com/YEsuETw.png)

- Taylor: [This(above)](https://etherscan.io/token/0xbb9bc244d798123fde783fcc1c72d3bb8c189413?a=0xbf4ed7b27f1d666546e30d74d50d173d20bca754#tokenAnalytics) is the original DAO withdrawal contract balance over time. As you can see, the financial incentive was ridiculous, and the primary migration happened in less than two months. There wasn't a sense of urgency since your DAO-tokens have no value, but one could use them to get ETH back. This incentive fueled a two-month migration from July to September, which perhaps gives us an idea of that minimum, how long the bulk of movement might take.
  - Cyrus: How much is still in there?
  - Taylor: Balance of withdrawal contract is \$$1.142 $ billion vs. supply of \$1.152 billion
  - Cyrus: But how much of original was withdrawn?
  - Taylor: No idea. I'm just making a point to track this migration graph against the SAI<->DAI migration graph.
  - Matthew: Exchanges were less robust at the time.
  - Taylor: True! Today is more diverse, both positive and negative. The DAO communication was also centralized on slack and Reddit. Today the community is much more varied: retail vs. sophisticated. I would assume a slower migration is just the way it works today. Reaching all the different audiences and convincing them to migrate.
  - Rich: Depends on how you measure. People will rush the exit despite being slower at the beginning. It won't end without an Emergency Shutdown.
  - Taylor: A vast bulk of the DAO's motion happened within the first five days. Partially because ETC showed up, and every whale had to move. We could compare to our current charts and reach conclusions that way.

[1:45:48](https://youtu.be/W6AeAC7mmDk?t=6348)

- Cyrus: Doing some quick math if we increase the DSR to 10% and drop the SF to 0 on MCD it will cost us less than \$900K a month. That gives us a rough boundary on both costs and timeline.
  - Rich: A saunter towards the exit is my hope. I think incentivizing speed might create more headaches.
  - Matthew: Hypothetically, if you make the DSR high but don't reduce the DC, then what keeps people from returning?
  - Cyrus: Reversing back is constrained by liquidity; it's not as simple to migrate back and forth(DAI<->SAI).
  - Rich: We don't want cold wars with all the secondary lending platforms.
  - Cyrus: We have to start making business-oriented decisions and helping the community usher in business decisions. Harder when it's an apathetic but good use of delegation.
  - Rich: Another good point, since it is the community's job to determine what to do, maybe a recap or having a business analyst pointing out effects and trade-offs and providing suggestions is an excellent option.
