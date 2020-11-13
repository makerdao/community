# Episode 68: January 09, 2019

## Agenda

- [00:00](): Intro with Rich Brown
- [14:48](): Discussion/Presentation?
- [26:55](): Migration Risk with Primoz
- [58:46](): State of the Pegs with Vishesh
- [1:12:00](): Recap of Forum Topics with LongForWisdom

## Video

<https://www.youtube.com/watch?v=QFFmPWYLh3Y>

## Abbreviated Terms

`SCD`: The Single-Collateral Dai system

`MCD`: The Multi-Collateral Dai system

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`SF`: Stability Fee

`SLP`: Secondary Lending Platform

`DSR`: Dai Savings Rate

`CDP`: SCD CDP

`Vault`: MCD CDP

## Introduction & Governance

### Rich

#### Summary & Introduction

[00:00](https://www.youtube.com/watch?v=QFFmPWYLh3Y)

- Recap; MCD launched, and the past month has been a lot of reflection, auditing, and thinking about the protocol. One thing we know is that Governance is critical to the future of the protocol and ecosystem. The Foundation sees this need and will be contributing significantly more resources towards Governance.
  - That means more foundation members on this call, and we get to introduce them here and explore ways to improve all our processes.
- Internally, sophisticated tooling and procedures are currently in place. We're continuing on the mission of gradual decentralization. As we create this ecosystem for the commons, we want to cultivate a community of folks with a healthy culture who are capable and interested in taking control of the Maker Protocol.
- We need to become the reference implementation of 'Governance in the Crypto space.' I would say we're halfway there to having governance that can bring us into the next few generations of what the protocol will evolve into.
  - We started with: How do we do Governance? When do we talk? How do we communicate? We've continuously iterated, and now here we are with proposals, forums, chats, portals, votes, and the reality of crypto media coverage. Governance has been bootstrapped; it's here. A part of that auditing phase that I mentioned earlier is to take Governance to the next level. Making it an efficient decentralized machine that engages people in the best way it can.
- There are two new faces on the call.
  - Derek Flossman, Product Manager(PM) at the Foundation. He's our Governance PM. Making sure the community requirements and foundation response to those is a tight feedback loop.
  - Charles St. Louis, a technical consultant at Maker Foundation. He does deep thinking around processes and is going to be bringing dedicated resources to that discussion.
- Give us feedback about the call.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

## Intro and Current Governance Development Backlog

[6:08](https://youtu.be/QFFmPWYLh3Y?t=368)

### Derek and Charles

We're going to briefly introduce ourselves and get into the Emergency Shutdown Module progress to date.

![](https://i.imgur.com/lBn86sn.png)

![](https://i.imgur.com/kvVUuaN.png)

![](https://i.imgur.com/8KqeSxW.png)

- Derek: My role is to be the glue between the different groups involved in developing and designing these products and tools.
- This is not an all-encompassing review, but I felt it was enough to get you to understand a bit about what product management involves and who we work with in the Foundation.
- To give you a further visual, let's walk through the ESM.

![](https://i.imgur.com/chgDdMW.png)

![](https://i.imgur.com/lBGsQOv.png)

- We all know ESM at a high level. It's a crucial security feature that allows the system to shut down by staking and burning 50K MKR. Currently, this tool exists in the CLI, and the goal is to make an interface in the Modules dropdown.

![](https://i.imgur.com/M76Jh4n.png)

- Soon this interface will look like the above. Clear to the user, especially the severity of the impact on the system as a whole.
- We've put an emphasis on making the severity of the actions a user takes on this page very clear through the language and messaging in the UI.

![](https://i.imgur.com/HIMskpA.png)

![](https://i.imgur.com/2tM1sQ8.png)

![](https://i.imgur.com/8KVqHtK.png)

- Explicit confirmation with the phrase, "Burn your MKR in the ESM." Just to really make clear that the user will lose their MKR.

![](https://i.imgur.com/hwBJ8rG.png)

- The above example includes a 1K MKR burn with only one user in the system, as seen in the deposit history on the page.

![](https://i.imgur.com/USGVLlo.png)

- At the 50K MKR threshold, you can see the button above; anyone can trigger ES. Anyone can see the page regardless of whether they hold MKR or not. At this point, anyone with a crypto wallet could initiate the shutdown.

![](https://i.imgur.com/qOEpOn0.png)

![](https://i.imgur.com/FDEVHzN.png)

- These are the steps to initiate ES. Note the banner at the top where Governance will post calls for meeting on the next steps. I'm just illustrating the steps to initiate the shutdown.

![](https://i.imgur.com/PBs9mTF.png)

- Above are the next steps that the devs are currently working on. Referencing a lot of the feedback from the past few weeks. There is some excellent feedback about what different edge cases look like that we can build into the experience. I also have the MIPs process here, and we'll be engaging the community around that framework. I've included delegation voting since I think that will fit in with recent discussions.

![](https://i.imgur.com/IQ8K19M.png)

- Links from above slide:
  - [Community Emergency Shutdown Q&A](https://github.com/makerdao/community/blob/master/faqs/emergency-shutdown.md)
  - [Emergency Shutdown Module at Docs.Makerdao](https://github.com/makerdao/community/blob/master/faqs/emergency-shutdown.md)
  - [Maker Protocol Shutdown](https://docs.makerdao.com/smart-contract-modules/shutdown)
  - [ES Command Line Interface](https://docs.makerdao.com/clis/emergency-shutdown-es-cli)

#### Questions and Discussion

[15:40](https://youtu.be/QFFmPWYLh3Y?t=940)

- Rich: Is the ESM UI for MCD, SCD, Both? Does this work for SCD?
  - Derek: This is for MCD. To shutdown Sai, an Executive Vote would be needed.
  - Ben: So it's going to cost MKR holders to shut down MCD. But to shut down SCD, it's just a regular vote without burning MKR.
  - Derek: Correct
  - David: Am I correct that you could shut down MCD through an Executive Vote to bypass the 50K MKR burning?
  - Nik: Correct. The ESM is a module designed to sidestep the need for an Executive Vote.

[17:36](https://youtu.be/QFFmPWYLh3Y?t=1056)

- Rich: There's a significant infrastructure need, is there an idea when the ESM UI goes live?
  - Derek: The functionality that you've seen is on the current sprint, so expect it to be ready sometime next month. I'm currently working, in parallel, on collateral redemption. So in the event of an Emergency Shutdown, both for SCD and MCD, what does that process look like? We'll have the wireframes and the breakdown for the procedure. Mostly to address the questions I've seen for individual users. E.G., "I'm a Dai holder, I need to claim collateral, what do I do?"

## Risk

### Primoz Kordez

#### Analysis

[20:48](https://youtu.be/QFFmPWYLh3Y?t=1248)

![](https://i.imgur.com/rGIq9VX.png)

- Migration pace has been picked up over this last week. ~9.3 million more Dai, ~4.6 million less Sai. Net total supply of Sai+Dai increased by 5 million in the last week.
  - The increase may correspond to Eth price increase and leverage the behavior of CDP borrowers.

![](https://i.imgur.com/m0HMruj.png)

- There are some users still minting Sai. These may be market makers speculating and trying to capture the premium due to a lower Sai supply. There is also an arbitrage due to the 1% difference on the spread - This week, there was a change in rates to 5% Stability Fee in SCD and a DSR of 6% in MCD.
  - As the amount of Sai decreases, it will get tougher to get out of SCD up until there is a Shutdown(ES).

![](https://i.imgur.com/1lYVgKJ.png)

- ~14.5 million Sai minted last month. I'm surprised to see so much Sai borrowed with these younger CDP's; most likely speculators.

![](https://i.imgur.com/PvbsTH8.png)

- Sai liquidity is pretty low. In Uniswap, the only venue that's liquid now, there are only 600,000 Sai there. This is only 2% of the total Sai supply. What's worrying is that there are really no other venues.

![](https://i.imgur.com/OHqtiIT.png)

- Oasis used to be the prime venue for the old ETH to DAI(SAI) market. Now, if you want to buy SAI with W-ETH on Oasis, you will encounter a large spread, almost 10%.
  - High slippage on Sai trading is good for Dai since it makes it more attractive to migrate. It's not so good for remaining Sai holders.

![](https://i.imgur.com/l42MHmJ.png)

- The above screenshot is for the SCD system only.
- The combined amount of Eth locked as collateral for both MCD and SCD is roughly 2.4 million ETH. This is an all-time high.
  - The MCD CR is up to 294% percent due to the ETH price increase. The SCD CR is now at 266%. This is much safer than before, as there was a time in December when the collateralization was only around 200%.

![](https://i.imgur.com/sYyq8Bh.png)

- Dai in DSR is up to an all-time high of 44%. This was mainly because of Compound integrating DSR for its unutilized Dai. In Compound, unutilized Dai sits at about 10 million; this Dai is now in DSR.

![](https://i.imgur.com/eXkPBmc.png)

- Looking at Compound's SAI markets, there are still 5 million Sai left. I was hoping to see this figure go down faster. Though there wasn't a large incentive for this number to go down this week because the spread between Sai and Dai lending is 3%, up from 1%.
- I'm assuming that some of this Sai supply should switch to Dai through migration contracts unless these users are speculators trying to catch a premium if there's a Sai liquidity crunch.

![](https://i.imgur.com/PZgq7Wx.png)

- Lastly, I did some analysis of remaining Sai holders and borrowers.
- Remaining Sai in top 100 wallets have 27 million of Sai, roughly 77% of Sai in existence. These include the Uniswap Pool and Compound cSai.
- Currently, about 200-300 users still hold the majority of Sai, 80-90%.
- 6.9 million Sai, 20% of current supply, is sitting in wallets that have been inactive for at least 365 days. Some percentage of this Sai is likely lost.
- On the borrower's side, the 100 top Sai CDPs hold almost 90% of all debt.
- The number 1 largest CDP has had no interaction with the system for about six months and has accrued about 800,00 in fees. This represents roughly 1/3rd of all current outstanding fees.
- Next, we look at the last activity type for these top 100 CDPs.
  - Migration was likely bound by liquidity and by the Sai available in the migration contract.
    - Both the Wipe(paying Dai back) and Free(unlocking collateral) wallet activities are limited by liquidity in the migration contract.
  - Many users were adding additional ETH as collateral because the ETH price dropped mid-December, and they wanted to protect their CDPs.
  - May CDP's are still drawing Sai, some of which were opened during migration. We need to keep an eye on how many of the old borrowers migrated so far. It is misleading to consider old users as not migrating when there is considerable drawing activity by newer CDPs.
  - 40 of these top 100 wallets have not interacted with their CDPs since MCD launch/migration.
    - This represents 15 million in debt, which is about almost half of the debt of these 100 CDPs.

![](https://i.imgur.com/hcNgTNM.png)

- Some pick up in fees being paid yesterday, mostly in MKR for payment.

#### Questions and Discussion

[31:49](https://youtu.be/QFFmPWYLh3Y?t=1907)

![](https://i.imgur.com/PZgq7Wx.png)

- David: What is the time period for this top 100 SCD/CDPs activity structure?
  - Primoz: This is a snapshot of the wallet's last activity. As the table shows only their last activity type, it's difficult to draw conclusions about overall behavior.
  - David: So Each CDP gets one input in this data?
  - Primoz: Correct.

[33:42](https://youtu.be/QFFmPWYLh3Y?t=2022)

- Rich: You talked about how Uniswap is the last useful liquidity provider. What happens when that gets down to the dregs? What are the indicators that we can use to determine whether SCD is no longer healthy?
  - Primoz: The Peg is the best indicator. When you see some big trades over \$1 when Sai is trading above the peg.
  - Rich: it'll be interesting to see what the last rush to the exit will look like.
  - JoeQ: The Foundation keeps some Sai in reserves in case things get out of line.

### Vishesh

#### State of the Peg

[35:45](https://youtu.be/QFFmPWYLh3Y?t=2145)

#### Relevant links

[Dai Peg Graphs](https://dai.stablecoin.science/)
[MCD system stats](http://daistats.com)
[SCD system stats](http://saistats.com/)
[DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)

#### Insights

![](https://i.imgur.com/khsJcoB.png)

![](https://i.imgur.com/gu2Uu8U.png)

- Solid 24 hr trading volumes for Dai, 3.2 million over the last day. Currently, the peg is centered around $1. In the last week, there was a dip, but it has recovered to around $1.
  - Oasis captured most of this volume, sitting at the center of that spread.
  - dYdx picking up in volume.
  - Coinbase sees more of a spread, which means worse slippage on their market. Unclear why that is happening, usually they sit in the middle of the price graph.

![](https://i.imgur.com/cFvKKX6.png)

- Tiny trading volumes on the Sai markets, 150k over the last day.
- Sai is holding steady in regards to the peg.
- Uniswap is dominating on whatever is left of Sai volume.
- The total amount of Sai is emptying out; the remaining volume is likely due to market makers looking to make last-minute trades.

![](https://i.imgur.com/g8Robep.png)

- On MCD, top vaults reflect no major changes. CRs have not moved in any significant way.
- Migration is proceeding, the total amount of MCD has increased, while the total amount of SCD has decreased as Primoz mentioned earlier already.

![](https://i.imgur.com/kX4yEy8.png)

- Collateralization Ratios are still relatively low (for ETH Vaults) in MCD.
  - That said, this may have more to do with ETH price than it does with changes in people's risk tolerance of MCD vs. SCD.
    - It is likely that the migration from SCD to MCD refreshed the amount of collateral the overall pool wants to have compared to the overall amount of debt.

#### Questions to Vishesh

[41:52](https://youtu.be/QFFmPWYLh3Y?t=2512)

- Makerman: Shouldn't we proceed with aligning SCD-SF to MCD-SF to eliminate the 1% spread?
  - Vishesh: I think that's something for people to discuss. I'm not sure that that is a huge driver of user behavior at this point. Theoretically, doable, and I don't necessarily see a problem with keeping this small spread for now, but I don't think it will make a huge difference.

### LongForWisdom

#### Forum Activity Recap

[44:07](https://youtu.be/QFFmPWYLh3Y?t=2647)

- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
- [A Governance Model for Maker](https://forum.makerdao.com/t/a-governance-model-for-maker/1056)
  - Hexonaut/Sam had done his presentation last week, and the discussion has continued about it in this forum thread.
- [Questions on Emergency Shutdown](https://forum.makerdao.com/t/questions-discussion-on-the-emergency-shutdown/930)
  - I would love to have Derek and Charles' feedback on this if they have any to put some minds at rest.
- [MKR - from voting to staking - part 1](https://forum.makerdao.com/t/mkr-from-voting-to-staking-part-1/1052)
  - Series of posts from PlanetX suggesting we use staking rather than direct MKR voting. He's done some modeling of what it could look like, taking earlier discussions one step further.
- [Discussion around DSR and SFs](https://forum.makerdao.com/t/why-is-4-4-dsr-sf-better-than-3-3/1036)
- [MakerMan: Proposal interest rate adjustment by debt facility utilization](https://forum.makerdao.com/t/proposal-interest-rate-adjustment-by-debt-facility-utilization/1068)
  - Dynamic rates for varying CR levels of individual Vaults.
- Signal requests:
  - [Signal Request: Should we replace the weekly DSR governance poll with a DSR Spread governance poll?](https://forum.makerdao.com/t/signal-request-should-we-replace-the-weekly-dsr-rate-governance-poll-with-a-dsr-spread-governance-poll/969)
  - Signal requests relating to the SCD shutdown have two threads.
    - [SCD by Date](https://forum.makerdao.com/t/signal-request-parameters-for-scd-shutdown-date/1044). Currently, votes are at six-months' time for sustaining SCD.
    - [SCD by supply](https://forum.makerdao.com/t/signal-request-parameters-for-scd-shutdown-supply/1067). Where the winning votes are \$10 Million.
  - [Signal Request: How do we handle executive bundling in relation to technical changes?](https://forum.makerdao.com/t/signal-request-how-do-we-handle-executive-bundling-in-relation-to-technical-changes/965)

#### General Discussion

[43:22](https://youtu.be/QFFmPWYLh3Y?t=2602)

- Rich: We have a signal request [here](https://forum.makerdao.com/t/signal-request-should-we-replace-the-weekly-dsr-governance-poll-with-a-dsr-spread-governance-poll/969) in the forums about whether to replace the weekly DSR polls with a question about spread instead.

[47:08](https://youtu.be/QFFmPWYLh3Y?t=2828)

- David: The topic of [bundling votes](https://forum.makerdao.com/t/signal-request-how-do-we-handle-executive-bundling-in-relation-to-technical-changes/965) relates closely to one of the main concepts in Sam's presentation: one vote one function. I just wanted to point out the conceptual connection there.

[49:37](https://youtu.be/QFFmPWYLh3Y?t=2975)

- Rich: I'd like to dig into the concept of failed votes. Particularly in regards to what happened with the GSM vote.
  - To recap: a blog post went out that made a significant amount of noise with regards to the lack of a governance delay. It argued that MKR voters needed to secure the system against a governance attack by implementing a delay sooner rather than later. The attack, in a nutshell, was a realization that with skin in the game, if you have a ridiculous amount of money, you can buy votes and do whatever you want.
  - After the flurry of activity in the community, an opportunity to vote for a delay through the GSM occurred. At the same time, several large holders moved their MKR into the voting system to secure the current status quo, which made voting in the delay that much more difficult. As a result, the GSM delay wasn't ratified. It couldn't gather enough MKR in support to exceed the previous vote.
  - What do we do now? Do we say "we should have voted in the GSM, the world was wrong" or "GSM didn't ratify, the community didn't want it, so move on." In this situation, what do we want to do? Should we resurface the GSM every week until it happens? And, what is the process for a re-vote?

[54:06](https://youtu.be/QFFmPWYLh3Y?t=3246)

- Matthew: I would assume that a non-passed vote gets cycled through again. We should have a cadence for the different types of Executive Votes, perhaps bifurcated. Every other week is Monetary policy, and the other week would be for administrative items like Risk teams or GSM-style updates. If something fails to pass, then we wait on forum consensus and another Executive Vote.
  - Rich: That still assumes some group of people that say one group is wrong, and one group has to get it right.
  - Matthew: Not necessarily, only if there is consensus in the forums.
  - David: Mariano explained last week that eventually, we do need the delay not to be zero. It would make sense to cycle this specific one.
  - Rich: True, it's been on the roadmap for 3+ years. It's in the white paper. We explained the need for a short delay on launch. It was supposed to bundle with Instant Action Modules and other guard rails like the OSM etc. The Foundation doesn't want to let this go; we just have to decide how to resurface issues. Also, the more significant question of who owns it and brings this back into question.
  - Matthew: I would view it much like the bureaucracy to get a bill passed or of any democratic campaigning. In this case, the social consensus of a forum then polling. It just slows down and adds inertia to the process of voting for all of us in probably a positive way. A possibility where monetary policy gets spread out unless an emergency pops up. If the GSM has enough community consensus, then it will find itself back on a poll.
  - Rich: Ideally, that's correct. We need campaigns, lobbyists maybe. It's human nature, but crypto itself has this bad habit of a big honking EMERGENCY every three months, and the ecosystem rears its head in response. Even within MakerDAO Governance, there is a microcosm of this. We make a little fix, the clouds pass, and then it's sunny again until the next "urgent" issue comes.

[58:55](https://youtu.be/QFFmPWYLh3Y?t=3535)

- David: Does it make sense to bucket out and expand the cadence schedule of the Executive Votes? Something closer to a bi-weekly cadence on a monthly cycle would make sense. Different types of votes could be handled on their designated weeks. If an emergency arises, then we could supersede non-emergency votes, resolve the issue, and move back to the scheduled cadence.
  - Rich: Good point, cadence is a big issue. I think I made an 80 point list of the governance challenges. That diverted into Monetary Policy as a weekly cadence or not. Also not grandfathering in cultural norms from SCD. Now that we have more resources, we can evolve this.

[1:01:25](https://youtu.be/QFFmPWYLh3Y?t=3685)

- David: Rich, can you expand on the Governance Poll going out ~~tomorrow~~ on Monday, relevant to Sam's thread.
  - Rich: To clarify, Sam's thing goes out on Monday as a poll. Sam is the exception to the rule: He came up with an idea, made a plan, spent effort in the threads, fostered the idea, created a proposal, made a slide deck, etc. That's a significant amount of work and dedication. Is that what it takes to make things happen in this ecosystem? If so, is that a reasonable expectation for governance participants at large?
  - David: I think it comes down establishing a community-understood bucketing and cadence system.
  - Rich: I was bucketing already (Polling Policy, Monetary Policy, and the increasing need for Technical Votes). Determining which buckets votes fall into and which ones require consensus or changes to the system, Sam's is a poll that fits under Polling Policy.

[1:04:14](https://youtu.be/QFFmPWYLh3Y?t=3854)

- JoeQ: We have to get moving on new collateral types, so we can increase the decentralization of the underlying collateral portfolio, and we have the income from the other collateral types. Hopefully, a goal would be 500 \$Million by the EOY, but we need new collateral types.
  - Rich: That ties nicely to the extra resources we're being given to evolve Governance. Onboarding collateral types require efficient onboarding.
  - David: Is the next step another asset priority poll?
  - Rich: We still have the previous list. Risk teams in the next few weeks will have additional insight into what's next. A significant amount of docs, tools, and presentations to share over the coming months. Once those are out of the way, we can kick off a more regular governance cycle, as we've been mentioning.
  - A quick refresher: We're in limbo right now with MCD, SCD, and the migration period, all inter-related. During the migration period, Monetary Policy helps us navigate the risks and complexity but is handled differently than when SCD is eventually deprecated. Now that we have more resources, post-MCD, we can spin off and focus more on regulating our processes, which includes collateral onboarding.

[1:07:47](https://youtu.be/QFFmPWYLh3Y?t=4067)

- Xenofon: "If governance is that important to the system, the Foundation should hire people to make high-quality proposals."
  - Rich: I can speak to that. The Foundation is here to bootstrap the core protocol, smart contracts, and then provide reference implementations for the governance process and other processes necessary to run the protocol. We encourage the ecosystem to use these implementations, iterate on them, and eventually take control from the Foundation.
    - I'm an example of a reference implementation as an [Interim Governance Facilitator](https://forum.makerdao.com/t/mandate-interim-governance-facilitators/264). Ideally, I step away, and a new person is elected to take this position.
    - Similarly, we used only to have the CDP portal, now we have Instadapp, Zerion, MyEtherWallet, and multiple third-party access points. We hope to provide the governance community with the tools it needs to be self-sustaining.
  - The idea is: yes, we need work, campaign, and think about the system. That requires time and energy that requires incentives. We've been discussing guardians for a long time. As MCD is chugging along, it collects fees. As the buffer fills with fees, that can go towards paying the ecosystem to do things. People who can contribute in a structured and transparent way will be compensated. Until that mechanism is in place, the Foundation foots the bill. The primary source of quality proposals is through stakeholders themselves.
  - David: TL;DR: we agree that we need people to do high-quality work, they're compensated, and we are building towards doing that sustainably as a DAO.
  - Rich: Right, that's the future of the protocol and ecosystem. Identify actors in the ecosystem, empower them to make things happen, and make sure they get fed. Identifiable actors. Where X needs to happen, and Y is the best candidate to achieve the goal.
  - David: The chat-comments are crystallizing around a reward system, incentivizing high quality.
  - Rich: Something I've been interested in for a long time. How do we reward people when it's not as simple as "I want to do X," in that case you just pay them and that's how business works. If you put a crypto spin on it, how do we reward people for being right? Staking, rewards, and discussion on those ideas I'd love to hear. Something along the lines of "risk team X presented this to happen in the next six months," we can slash or reward based on the report.

[1:16:03](https://youtu.be/QFFmPWYLh3Y?t=4563)

- Vishesh: It is a scary world where we turn this into some strange kind of betting market. Incentivizing based on predictive accuracy or something. Anyway, I was thinking about how a tech company would approach this in the traditional world. Imagine this whole system becomes an AI program that's job is managing the system well and managing it efficiently.
  - You would define goals.
  - You would make a fitness function, definitively saying this is 'good' or 'bad.' Maybe that's based on maximizing revenues or based on risk indices. Or even public sentiment.
  - You could think about how to score the system based on a set of values. Manage the system to optimize for those values, tell it to judge itself on that set of values/benchmark/rule-book. Manage the system to optimize for those values, maximizing efficiency, reducing variance, and the least amount of overall costs.
  - You decide those negative values as well. Value is essentially "output for cost." You figure out how to measure and then optimize costs.
  - It's oversimplified Governance, but the goal is to find out a system to maximize value differently. Maybe some pieces are optimized towards practical outputs, perhaps Rich or a Governance coordinator. Possibly other parts are minimizing the denominator. The point of risk is about costs.
  - Again, approaching this like a tech company in a risk-driven business: how would they organize to solve these problems? They would hire a set of analysts to make sure there is a mechanism in place that is well equipped to solve a problem. Like a business unit who has skin in the game, accomplishing a goal. They produce a reliable output on a predictable and dependable cadence.
  - Usually, there is buy-in with this like salaries, stock, etc., that business unit has skin in the game and supplies the analytical, data science, or technical resource typically. The performance of that resource is determined by the satisfaction of those business units with the resources they have on hand. E.G., "Head of the BD dept goes to the CEO and says I'm satisfied or not." Satisfaction with the performance of that resource is how that resource is judged. Instead of reinventing the wheel all the time, we can draw from how things work in the traditional world. Avoiding reinvention and over-complication.

[1:20:51](https://youtu.be/QFFmPWYLh3Y?t=4851)

- Rich: I agree completely; It's not oversimplifying; it just adds a necessary level of complexity to the system. We began at: "Launch and don't break " then "launch and stabilize peg." Essentially moving beyond technical requirements into business ones. Making "number stay the same, as opposed to up and down" is our current place. Who is going to own that transition and lead the charge to implement more traditional business practices here?
  - Derek: Going to echo Vishesh, focusing on the outcomes here that aren't just for completing epics or paths. It ties back to the Foundation and community. Bottom-up and top-down. Using OKR's and making sure they're measurable. That concept is a step in the right direction.
  - Vishesh: Right, with OKRs, functions have owners.
  - Rich: That's key.
  - Vishesh: At the end of the day, the system crawls towards results in line with your values. That's the tightest corollary to a business unit. I assume that there would be a unit that drives good governance outcomes. Defining, in conjunction with the community, what good outcomes are.
  - Rich: You hit the nail on the head. Identifying and empowering actors, defining, and incentivizing them. Then we have an environment of responsibility. Right now, it's an amorphous group of people casting votes through a web portal.
  - Vishesh: This conversation might end up crashing against delegated voting.
  - Rich: Decentralization in general.
  - LongForWisdom: Decentralized doesn't mean no structure at all; we can have structure.
  - JoeQ: Exactly, Rich has done well, keeping everything structured. We've gotten this far. We just have to figure out a proper structure moving forward.
  - Rich: I lead nothing! I will facilitate, though. Hopefully, leaders emerge, which means less work for me.

[1:26:43](https://youtu.be/QFFmPWYLh3Y?t=5203)

- Rich: We do need to begin to talk about the ramp-up. These topics have come up internally and externally and have gone through iterations. First, it was a community, then guardians, now "DAO teams" are the newest terminology. We need to create those reference implementations, those models, and incentives aligned for the system.
- An example is, finding other governance facilitators in different geographic areas. Bringing them online, making a committee, working together for a bit, then I can step back. Risk teams need to expand, and the model is evolving. Maybe Vishesh will lead the business team paying him on the outcomes.
  - Vishesh: I pre-empted you. That's an excellent wrong example right there. We need a layer that exists outside of risk teams, not one person, that makes a call on "what resource to use when" "what resource to use," "what answer is wrong." You need a layer with skin in the game to identify which answers are "right" or "wrong."
  - Rich: I wasn't suggesting that risk teams would make calls like that, apologies for my facetiousness, I'll clarify. These "DAO teams" come up with tooling, methodologies, frameworks, and set the stage for decision making. Just like interim Governance facilitators aren't here to say "do this" or "do that." It's the community's job to source empowered actors.
  - Rich: "Risk makes the sharp tool, and someone else has to wield them."

[1:31:51](https://youtu.be/QFFmPWYLh3Y?t=5501)

- David: Is there development around an active governance calendar? Something lightweight that anyone can add?
  - Rich: Can you clarify maintenance?
  - David: Like a governance calendar with expected votes coming up. A central reference point for the community.
  - Rich: This is where we run into discoverability. If you click on the dates, it should open a google calendar. That's an excellent comm_dev discoverability thing. Added [link](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles) to the sidebar.

Thanks, everyone!

#### Links from the Chat

- [MakerDAO Community Events](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk@group.calendar.google.com&ctz=America/Los_Angeles)

## Credits

- David Utrobin produced this summary
- Tim Black produced this summary
- Igor Teslya produced this summary
- Everyone who spoke and presented on the call (listed in the headers)
