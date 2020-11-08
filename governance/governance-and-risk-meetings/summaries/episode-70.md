# Episode 70: January 23, 2019

## Agenda

- [00:00](https://youtu.be/KsFYnwywJVY): Intro with Rich Brown
- [3:14](https://youtu.be/KsFYnwywJVY?t=194): Recap of Forum Topics with LongForWisdom
- [26:10](https://youtu.be/KsFYnwywJVY?t=1566): Migration Risk with Primoz
- [42:17](https://youtu.be/KsFYnwywJVY?t=2537): State of the Pegs with Vishesh
- [52:34](https://youtu.be/KsFYnwywJVY?t=3214): Open Discussion about `tax`

## Video

<https://youtu.be/KsFYnwywJVY>

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

#### Summary & Introduction

[00:00](https://www.youtube.com/watch?v=KsFYnwywJVY)

- Welcome to the Jan 23rd Governance and Risk call. We are going to talk mostly about Risk in this call. Last week we had a great call discussing much of our governance-related issues. Both governance and risk management are complex worlds that will require more depth of attention.
  - We've set up communication channels like this call, the forums, and Rocketchat. Numerous community members like Sam and LongForWisdom have stepped up to work within the framework of these channels to build out processes, guidelines, and signaling methodologies. The community has also worked within these channels to determine how we manage the levers/policy tools available to us. A perfect example of that is Sam's efforts to create [a DSR spread vote](https://vote.makerdao.com/polling-proposal/qmb8yjdhskb6zxv1fcylyk6gqpeygvargip4mspbbenxl1). There's a fantastic amount of activity happening in the forum lately. This governance call will eventually be more targeted towards addressing the various issues and proposals that show up in the forums.
  - There's a lot of work ahead of us, getting these ideas into initiatives/plans/proposals and then to on-chain votes. We need to figure out how to alternate between risk-centric issues and governance-centric issues. Our goal is making sure our governance becomes efficient.
- Give us feedback about the call.
- DISCUSSIONS HAPPEN IN THE [FORUM](https://forum.makerdao.com/)

### LongForWisdom

#### Forum Activity Recap

[3:14](https://youtu.be/KsFYnwywJVY?t=194)

- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
- [Source Cred Algorithm and how it could apply to MakerDAO](https://forum.makerdao.com/t/possible-data-source-for-determining-compensation/1155)
  - Seth Benton from SourceCred presents a description of the SourceCred algorithm and how it could apply to MakerDAO.
- [Maker Governance Overhead](https://forum.makerdao.com/t/maker-governance-overhead/1129)
  - PlanetX details some of the overheads to Maker Governance and paints a rather grim (though not inaccurate) picture of the future.
- [How does Governance Voting Actually Work](https://forum.makerdao.com/t/how-exacly-executive-vote-works/1152)
  - Adam asks some questions as to how executive votes work in practice. This once again makes it clear that the system is rather opaque to newcomers.
- [How do we handle executive bundling in relation to technical changes?](https://forum.makerdao.com/t/signal-request-how-do-we-handle-executive-bundling-in-relation-to-technical-changes/965)
  - _Moving On-Chain_ LongForWisdom combines the previous signal requests about bundling into a single request that asks for how specifically we should deal with bundled executives.
- [OLD Signal Request: Should we replace the weekly DSR governance poll with a DSR Spread governance poll?](https://forum.makerdao.com/t/signal-request-should-we-replace-the-weekly-dsr-rate-governance-poll-with-a-dsr-spread-governance-poll/969)
  - _Passed On-chain_ Hexonaut elaborates on his change to how the governance poll handles adjusting the DSR, putting the options forward to the community for signaling.
  - Congrats to Sam on passing the DSR spread poll.

##### Seeking Signal

- [Should Maker make a Treasury to manage revenue?](https://forum.makerdao.com/t/signaling-request-should-maker-make-a-treasury-to-manage-revenue/1122)
  - In addition to the discussion thread above, Mitote creates a signal thread to gather opinions.
- [SCD Shutdown](https://forum.makerdao.com/t/summary-of-parameters-for-scd-shutdown/1130)
  - Aaron presents a summary of his recent signaling polls regarding SCD shutdown. Lots of interesting thoughts here, hopefully moving on-chain soon.

#### Questions and Discussion

[5:42](https://youtu.be/KsFYnwywJVY?t=342)

- Rich: How can one game the incentives of the SourceCred model?
  - LongForWisdom: Since it creates something like a reputation system by ranking users based on their quantitative participation, you could use those rankings as an input to help determine a person's compensation.
  - R: I have this compensation mental-model, but maybe the reputation is the reward itself. This subject is complicated. We want engagement, but engagement based on people with high reputation scores becomes like a weighting system (Rich is wrapping his head around the idea of SourceCred's model.)
  - Charles St.Louis: I've done a bit of research on SourceCred. It's a toolbox for reputation through a weighted peer review system for communities or distributed teams.
    - It's a modified version of 'page rank;' that algorithm is on a contribution graph to produce cred-attribution.
    - Sourcecred members earn reputation defined by the community or its' leaders, and they get compensated for the value they bring to the system in that way. The biggest open question is measuring contributions by quantity versus quality.
  - R: This reminds me of the conversation around incentivized voting. Are the incentives aligned around securing the system and stabilizing the peg, or are they here to make someone \$.50? We have this conversation often, "is participation our primary goal?" If 1000 people are voting every week, is that voter volume one data point in a long path towards healthy governance?
    - The reputation idea makes me nervous and is fraught with peril. Much like crypto, which can be used for self-agency but can also follow a dark path where it's the greatest dystopian record-keeping system invented by man.
    - When you combine a blockchain with reputation, I get slightly nervous about the barrier to entry for newcomers. E.G., brilliant newcomers feel: "I want to come to fix problems for MakerDAO, but I don't have a badge or enough points."
  - David: Agree that the quality of contributions is an important consideration. Sourcecred is one piece of the puzzle since it only approaches it from a quantitative perspective. It could be useful to help establish some reputation for community members since we could see the person's forum activity profile and other contributions profile over time. If someone has been regularly contributing for a year or something, that could be a data point used in helping to determine compensation.
  - R: Exactly, adding it as just another data point. It's not the criteria for whether someone can or can't vote or something like that.

[10:02](https://youtu.be/KsFYnwywJVY?t=602)

- David: One thing I like about recent forum behavior is that the owners of Signal request threads create new threads that summarize the discussion and views to-date. For example, [Derek's thread](https://forum.makerdao.com/t/global-settlement-of-single-collateral-dai/1121/6) where he summarized the SCD GS conversation. That thread summarized all the relevant points from the previous posts and combined his own positional knowledge to help move the issue forward. This behavior makes it easier for people to jump into issues mid-way through.

[10:59](https://youtu.be/KsFYnwywJVY?t=659)

- Rich: (goes back to the discussion on reputational systems in MakerDAO) There are things I'm concerned about to though. On the other hand, many people don't care about reputation/online-web-points/etc., and they won't wait for this to work. It's exciting, but another thing to consider is pre-filtering and incentivization within reputation. Do we want to incentivize people that are driven by the gamification of status? Is that a quality that good Governance requires. We don't have an identity on the blockchain until then; we have status as a stopgap solution.
  - T: ETHtrader on Reddit has Donut(s). Merely a good case study to think about making reputation fun, they eventually put a token on Ethereum and made it tradeable on Uniswap.
  - C: I apologize for creating that meme. I had nothing to do with the tokenization.
  - R: Donuts are also an excellent example of how a reward system based on contributions can be fun until it ruins you.

[14:16](https://youtu.be/KsFYnwywJVY?t=856)

- Memelord `chat`: "Gasless voting?":

  - Rich: Gasless voting ties into both incentives and reducing friction. We have developers here who can talk about that friction. If I recall, leveraging relayers was a possible solution to subsidize gas costs, but not sure where we are with that conversation. Is that a significant friction, though?
  - LFW: You can vote with 1 `GWEI` which is less than a penny. It's very inexpensive to vote.

- SamM: For me, the friction is not so much the cost, but rather the waiting. I mentioned the load time for governance poll voter breakdowns and the need to load multiple pages and synchronously wait for them to load. Waiting to vote, waiting on the blockchain, etc. Any way to make that quicker?
  - Rich: That's likely a UX pain to evaluate. I suffer through this often. I heard from Chris Bradbury that there are initiatives afoot to set up a caching layer, but I'm unsure of the progress.
  - Derek: We've got it on the backlog. We need to see what else we need to prioritize in that space. There are a few UI/UX components, but that may include a redesign of the Governance app. There are several ideas we need to pull together into a roadmap. Happy to share with everyone when it's fleshed out.

[20:54](https://youtu.be/KsFYnwywJVY?t=1254)

- Rich: If the DSR-spread GP idea works, what are its implications? The idea was that now we potentially don't have to poll for it every week. How often should we vote on the spread? Sam, you have some thoughts on that?
  - Sam: I think it should run weekly for now. I figured there would be a large consensus (99%) that people would want the DSR to follow the SF. If that sentiment keeps up, then we can reduce the frequency.
  - Cyrus: Add 0% to the poll next week?
  - R: My mistake, I didn't add that, but yes, next week! Thanks for the reminder.

## Risk

### Cyrus

#### Analysis 1

[26:10](https://youtu.be/KsFYnwywJVY?t=1566)

- Sai stability fee when up to 9% last week. This week, the MCD ETH stability fee is being voted up to 8%. DSR will be 7.75% if Friday's EV passes.

## Primoz Kordez

### Analysis 2

[28:02](https://youtu.be/KsFYnwywJVY?t=1679)

![](https://i.imgur.com/PhJ7suw.png)

- Saw a high migration flow last week. We also crossed the 100 million Dai mark. About 8 million Sai migrated. Dai supply increased for about 12 million, which means an additional 4 million Dai was minted in a week.
- Also saw Sai in the migration contract start to accumulate, at one point there was about 6 million Sai deposited, after which the 2nd largest SCD CDP used this Sai to migrate.

  - From last week's call, this was the one CDP doing the most minting. I originally thought that this would be the last CDP to migrate, but this theory was destroyed. This CDP has changed its mind, likely either due to worries about `tax` implementation or limitations of Sai liquidity.

- This week I prepared some stats that are not directly related to migration, though I think they are useful for MakerDAO governance.
  - [Document can be found here.](https://docs.google.com/document/d/1vcxYax01nMwAoKK2NbR61sZHLsErGIsjoUGI31pHI1w/edit)
  - This was prepared for [Spencer Noon's newsletter](https://ournetwork.substack.com/), which I regularly contribute to.

![](https://i.imgur.com/fvk4v2K.png)

![](https://i.imgur.com/X2NWfdn.png)

![](https://i.imgur.com/wgXMMsI.png)

- Not much has changed since last week's analysis.

![](https://i.imgur.com/VKlUDu9.png)

![](https://i.imgur.com/TRuMlON.png)

![](https://i.imgur.com/QK33B1y.png)

![](https://i.imgur.com/r6yYGx3.png)

![](https://i.imgur.com/KfWcAuC.png)

### Vishesh

[42:17](https://youtu.be/KsFYnwywJVY?t=2537)

#### Relevant links

[MCD system stats](http://daistats.com)
[SCD system stats](http://saistats.com/)
[DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)

#### Insights

![](https://i.imgur.com/ayxbQz6.png)

- 24hr trading activity:
  - Dai 24 hour volume-weighted average traded very slightly below peg for a short time. Despite discussions regarding increasing SF's on Rocketchat and Twitter, we should understand that these are very small deviations. It's unclear if it's deviated enough to warrant any action.
  - Middling amount of trading volume in the last 24 hours, around 2 million.

![](https://i.imgur.com/7vTulAM.png)
![](https://i.imgur.com/eGYVV6Q.png)

- There will always be moments when there is a short run-up or run-down of price. Taking a slightly longer time-scale view can help to make better conclusions for monetary policy.
  - These short dips are oftentimes driven by trading activity more than stability fees. This is not a new discussion regarding the role of monetary policy levers and their impact on the price vs. the price having its own externally driven, market-based fluctuations.
  - Will revisit this thread in a more statistically-driven context, both on this call and on the forums.

![](https://i.imgur.com/BCgt3XQ.png)

- Sai trading volume is very low, around 240k. Shockingly, the volume-weighted average price is pretty close to peg despite the drying up of liquidity.

![Uniswap Dai Liquidity](https://i.imgur.com/V3FBG5j.png)

- Dai Liquidity is really only about \$2.8 million. Compared to the total Dai supply out there, and compared to what you may see for some other assets, this is pretty low.
  - Uniswap trading volume is on the low end compared to some of the other places where Dai trades.
  - Additionally, dYdX has picked up in the share of Dai trading volume since MCD launched.

![Uniswap Sai Liquidity](https://i.imgur.com/9wiJbjg.png)

- Interesting point, Dai and Sai are closer in trading activity in terms of liquidity on Uniswap than globally.

![Uniswap MKR Liquidity](https://i.imgur.com/N6bik0Y.png)

- MKR trading activity and liquidity is an important topic and will become more relevant when we start discussing risks in the event of auctions and the various appetites for printing MKR and selling it off, and what price impacts be vs. MKR burn, projected revenues, and stuff like that.
  - Interesting topic area to keep in mind for the future.

![7day trading on Dai](https://i.imgur.com/foURXmv.png)

- On a longer time scale, Dai trading activity has been pretty solid at 25 million.

![](https://i.imgur.com/wg6j8eH.png)

- The top graph is the amount of ETH locked as collateral in MCD vaults.
- The bottom graph is the amount of ETH Dai issued from MCD.
  - Green spikes are increases; red spikes are decreases.
  - This is a corollary to the old SCD system of Draws and Wipes.
- They both correlate closely but can be interesting to view together to track spikes and drops in collateral movements. This is helpful to understand how the amount of collateral and debt fluctuate over time.

![](https://i.imgur.com/31AZIcE.png)

- Net Dai+Sai supply has been consistently increasing. Dai supply has been steadily increasing while Sai has been steadily decreasing.
  - Dai has been increasing faster than Sai has been decreasing.
    - Translates into an increase in usage or demand of Dai.
    - Dai in DSR contracts should be taken into consideration as well.

![Compound market stats](https://i.imgur.com/FyJfNdn.png)

- On Compound, there has been a consistent drain in the amount of gross borrow of Sai. This has resulted in borrow APR first going down and then coming up a bit.
  - It has become theoretically less and less profitable to borrow and lend with Sai.
    - This should incentivize trading with Dai.
    - Migration seems to be proceeding in the right direction based on the numbers.

#### Questions to Vishesh

[52:34](https://youtu.be/KsFYnwywJVY?t=3155)

- Michael Newman: [Do you have insights on] Implications of Compound removing Sai from the interface if you are not actively borrowing it?
  - V: As we have seen many times with crypto, UI plays a huge role in the market activity of an asset.

### Discussion and Questions

[52:34](https://youtu.be/KsFYnwywJVY?t=3214)

- Cyrus: Thanks, Vishesh! Anyone have thoughts on Sai liquidity as it relates to ES? Since, as per Primoz and Vishesh, Sai liquidity has been dropping. Is there a point where it becomes impossible to migrate?
  - Primoz: It's always going to be possible; it's just a matter of price. Market makers might mint Sai and sell at a premium. If Sai SF is going to be 9%, perhaps they will charge an extra percent to help that migration to Dai.
  - C: What's a reasonable price then? SF going up limits the options in terms of liquidity.
  - Vishesh: A better question is: "what's your goal?" If the goal is protecting users from a price impact on migration, then I don't think forcing shutdown helps. Eliminating the overhead and management of the system is the only goal I can think of, In terms of forcing a shutdown. The asset is, more or less, leveling out to some bottom.
  - C: There was always an implicit context that Governance would protect users from those large price impacts. E.G., if the price jumps to \$1.05, then an emergency GS might be called. In that context, Governance would do what they could to prevent that, but if you change perspective to minimizing overhead, then what happens if the peg does deviate?
  - P: I think we need to focus on when ETH is crashing, that's when CDPs want to de-leverage, and people want to buy Sai. Now with Sai liquidity mostly drained, the spike will be higher, and we might see Sai above \$1.
  - C: In November, we saw $1.03 or $1.04. It could easily be much higher now.
  - LFW: We should have a signal poll for a liquidity-based shutdown. Rather than based on peg deviation since ideally, we would shut down before the peg deviates.
  - V: That's kind of my point. Since we're so low in liquidity now, we're setting people up for a price motivated danger.
  - L: So, you're saying that if we should shut down on low liquidity, now would be the time?
  - V: I don't think an additional 10% drop in liquidity is likely in the next few weeks. Nor will it make a big impact on price in the event of an ETH run-up or crash.

[59:35](https://youtu.be/KsFYnwywJVY?t=3575)

- SamM: Another thing about Shutdown scenarios, are we assuming we'll implement tax? Are we planning to forgive the Stability Fees in an ES situation?
  - C: So there are three decisions to make:
    1. What is the decision mechanism for the community to implement ES?
    2. What is the lag time from when the decision is made to the hard date?
    3. What is the technical implementation?
  - Presumably, the technical implementation should be figured out perfectly before we roll out the shutdown. But Sam, yes, the tax is part of what needs to be figured out.
  - L: Aaron has been going through the shutdown threads, and he noted that he'd keep the threads going in the forum.
  - C: Do we have an update on anything regarding `tax`?
  - D: I like Nik's perspective that it's a communications issue, not a technical one.
  - C: I think a written proposal would be most helpful. Something clear for the community.

[1:02:14](https://youtu.be/KsFYnwywJVY?t=3734)

- N: Derek's forum post expands on my rocketchat mini-post. I'll put something together for next week.
  - What's happening technically: there is a new fee parameter called `tax` that you can levy on CDPs. It works like the SF, but the SF doesn't accrue on the debt of a CDP, while `tax` does. We're in this situation where CDPs can be open indefinitely without being liquidated because the SF doesn't get added to their debt.
  - The other situation is that in GS, we use debt as a basis for calculating the settlements. That's why SF's are forgiven since they aren't reflected in a CDPs debt. Once you turn on `tax`, it's suboptimal to pay back your CDP since you have accrued fees _and_ tax. Game theoretically, the only two times a CDP owner would want to pay their fees is either:
    - before the implementation of tax or
    - during GS when you pay the tax instead of SF's.
  - All of that is to say; it's not a technical issue; it's a communications issue. E.g., "this is tax, and when it will happen..." Making that statement loud enough will force users into a decision. Since they will recognize the game theory of their current position and, as a result, pay their fees one way or another.

[1:04:59](https://youtu.be/KsFYnwywJVY?t=3899)

- R: Let's say I'm a large holder, with \$50K in fees, and ES is looming. Is tax designed to reach parity with what my fees would have been? What happens if someone has 10k in fees or less? Are they taxed proportionally? Or is this parameter like a big stick, do I imagine that correctly?
  - N: It is a VERY big stick. If you make sure that the tax is equivalent to SF's, then it lacks the incentive to pay SF's, which would then lack the supply crunch to close positions, where pricing would be over a \$1 to close positions.
    - To make `tax` effective, you have to hammer it down, making it more expensive than SFs.
    - Besides, the period `tax` is running after implementation is short. The `tax_period` doesn't have to be a month; it can be a few days. We could discuss that timing more.
    - You mentioned fairness, which gets tricky. CDPs were opened at different points in time. When you apply `tax` that won't be taken into account. My thought is the `tax` parameter should be set by profiling all the largest CDP's. How long they've been open, how many unpaid fees they've accrued, then set `tax` based on a profile that most of them fit.

[1:08:25](https://youtu.be/KsFYnwywJVY?t=4105)

- C: One quick technical clarification: if two CDPs are open both with \$10k Dai debt, but a year apart, they would be charged the same tax even if the age of debt is different?
  - N: Correct. That's why I keep mentioning communication problems. The community needs to decide, "GS on _this_ date." and when GS comes in, you implement `tax` as phase 0 of GS. The communication has to be loud and clear: "this is the day that it's in your best interest to pay back fees." Shortly after, we implement `tax`, and shortly after that, we implement the ES module.
  - R: Critically important for the community to have this discussion about its' goal. Is the goal fee clawbacks, incentivizing migration, lighting the fire on three big holders, and accepting collateral damage?

[1:10:15](https://youtu.be/KsFYnwywJVY?t=4215)

- N: One more thing. `Tax` paid goes to PETH holders, not MKR holders. Ironically, the largest PETH holders are the largest CDP owners. There is an amount you get back when you pay tax. When thinking about what we want the tax to accumulate to, we have to think about that reimbursement too.
  - R: This parameter implements with the understanding that MKR holders need compensation for their risks managing the system. But that's not the case; it's SCD, so it's the PETH holders.
  - C: Does it benefit MKR holders directly/indirectly?
  - N: No, as an MKR holder, your incentive is to pressure people to pay back before `tax` parameter implements. We have to toe this line between using a large stick and wielding its responsibility.
  - L: You mention the communication issue, I kind of agree. If anyone gets hit by a tax, we want anyone to close their CDP beforehand, that makes sense. Will we reach 100% of CDP holders without an outpouring of blog posts? If we can't hit 100% of people, then we shouldn't apply a non-proportional tax, in my opinion.
  - R: Primoz points out that a lot of these CDP owners are likely inactive for a very long time.

[1:13:31](https://youtu.be/KsFYnwywJVY?t=4411)

- C: When the tax hits, CDP owner gets back less collateral; does that mean Dai holders get more than \$1's worth?
  - N: Dai holders are entitled to \$1 of collateral. PETH owners benefit in a roundabout way: since PETH burns for tax collection, the PETH you keep has a redemption ratio with ETH that increases substantially.
  - L: If you get that ETH back, does that defeat avoiding the tax in the first place?
  - N: Not if you set tax high enough.
  - L: Tax goes to PETH holder, its about proportion.
  - D: No, we can see how much PETH the largest CDP owners have, understand their share of the total PETH pool, and approximately calculate how much ETH they will get reimbursed.
  - N: More of a Pareto rule here, 80/20. The amount of large CDPs with unpaid fees is quite a small group. Profiling a model around their situation is ideal.
  - L: You can assume that large CDP holders also have many assets, whereas smaller holders don't. If the large ones migrate and the small ones don't, you can assume proportionally it's more painful for the little guy.
  - N: I hate to talk in circles; it's all about the communication of the date when you set tax "this is the last day to pay back your position."
  - C: That could be bad for Sai liquidity, right? If tax is so onerous that everyone starts buying Sai.
  - N: Everyone will try to run out the door; the alternative is the current situation where large holders don't attempt to pay back their fees.
  - L: Do we care at this point?

[1:17:10](https://youtu.be/KsFYnwywJVY?t=4630)

- Sam: You can open a CDP position today then and get 0% interest if we don't plug this hole with the Stability Fees.
  - L: So should we reduce the debt ceiling to 0 then? To prevent Dai minting.
  - D: I want to explore the: debt ceiling of 0, SF of 0, and no shutdown date option.
  - N: Mint a bunch of Sai, migrate to Dai and collect DSR. It's free money.
  - L: That's why you can't keep SCD open forever because they'll just collect the DSR and not pay any fees.
  - N: Right now, there is \$2,137,405 SF's on Sai.

[1:18:05](https://youtu.be/KsFYnwywJVY?t=4685)

- Chris Smith: We could also shut down the migration contract so you can't move Sai to Dai when we do the 0s on SCD.
  - L: Sounds like an option

[1:18:24](https://youtu.be/KsFYnwywJVY?t=4704)

- S: Any thought about liquidation ratio being arbitrarily high to force liquidations?
  - N: Not an option, since liquidations forgive SFs.
  - S: I meant as a penalty instead of a tax.
  - D: Liquidation penalties would all go to PETH holders.
  - N: For the larger CDP's that have the most fees, what they owe is larger than 13%.
  - S: Is it similar to the `tax` mechanism?
  - N: Not really, but can be wielded in the same way.

[1:19:41](https://youtu.be/KsFYnwywJVY?t=4781)

- C: Let's say `tax` charges some amount to all PETH holders, does it redistribute in even amounts? To implement a penalty, is there some portion that goes somewhere else.
  - N: Good question, I need to think about it and share the math of it later.
  - S: Regarding the PETH returns, wouldn't people just pile into PETH to dilute the pool before the tax is applied.
  - L: If people can make money on PETH, they'll just do that, while we're announcing the tax loudly.
  - N: That would just help, though, since your incentivizing closing the CDP before `tax`. If their hopes are reimbursement through some proportion of PETH, and everyone piles on PETH, that makes it worse for them since they have a smaller share in the P-ETH pool.
  - L: It comes back to not communicating to 100% of holders.
  - C: Perhaps communication maybe isn't the right word, more like a business decision. What type of community do we want to have, and what type of relationship with the broader user base?
  - S: Maybe a lower bound of fees owed to forgive is the best option.
  - R: I agree with Cyrus. Is the idea to have people migrate, or does the community want those fees back? Is it because the community wants to burn MKR? Is it because the community doesn't want anyone piling into Sai? Keeping the goal in mind is important.
  - D: Maybe the goal can be summarized as "the effective winding down and depreciation of SCD." To do that, we need to ensure that people are leaving and aren't piling in. That you can't leave without paying.
  - R: No one wants to see anyone get off scot-free when everyone has been diligently paying fees. But we don't want people to game the system. We want it ensures that the system is close to the design we set for it. We need to consider what do we want to achieve and work backward from there to accomplish it.

[1:24:53](https://youtu.be/KsFYnwywJVY?t=5093)

- V: Keeping people from trying to avoid fees is a slightly different goal than shutting down SCD in a way that protects the end-user. The only reason I've heard for the forced migration switch-over is to eliminate the operational overhead associated with SCD.
  - R: I think we're on the same page. Trying to predict the impact is important. As long as we carefully examine it, move past the opinion-stage, and into the outcomes that the community looks to achieve, we should be ok. It's very important that we do this and document it well.

[1:27:15](https://youtu.be/KsFYnwywJVY?t=5235)

- Derek: To that point, Primoz shared that [CDP spreadsheet.](https://docs.google.com/spreadsheets/d/18Et6TQZnGfuc8YJXHLFZXm75UzxigGR3wcp8VaibhdI/edit#gid=1942156439) Is there an update to that? Trying to illustrate `tax` as accrued interest gets harder without an updated data set. I'd like to put something on the forum that details the model.
  - R: I'd like to expand the scope beyond the foundation; it's a community issue, so we should put out a call about this to the community if anyone thinks they can be useful in helping figure this out.
  - D: Absolutely, happy to put in a google doc. I just want to verify if a poll is necessary.
  - P: Sure thing! We will push an update to include more than just the top 100.

#### Links from the Chat

- [Insights Data](https://docs.google.com/document/d/1vcxYax01nMwAoKK2NbR61sZHLsErGIsjoUGI31pHI1w/edit) For the ["Our Network"](https://ournetwork.substack.com/) Newsletter.

## Credits

- Tim Black produced this summary
- David Utrobin produced this summary
- Igor Teslya produced this summary.
- Everyone who spoke and presented on the call (listed in the headers)
