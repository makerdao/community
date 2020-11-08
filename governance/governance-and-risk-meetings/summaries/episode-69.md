# Episode 69: January 16, 2019

## Agenda

- [00:00](https://youtu.be/2i9QO5D0NMU): Intro with Rich Brown
- [03:44](https://youtu.be/2i9QO5D0NMU?t=226): MKR Authority Transfer with Mariano Conti
- [11:35](https://youtu.be/2i9QO5D0NMU?t=695): Recap of Forum Topics with LongForWisdom
- [31:05](https://youtu.be/2i9QO5D0NMU?t=1864): Global Settlement of Single Collateral Dai with Derek Flossman
- [46:33](https://youtu.be/2i9QO5D0NMU?t=2791): Migration Risk with Cyrus
- [51:44](https://youtu.be/2i9QO5D0NMU?t=3101): SCD CDP Analysis with Primoz K.
- [1:05:35](https://youtu.be/2i9QO5D0NMU?t=3933): State of the Pegs with Vishesh

## Video

https://youtu.be/2i9QO5D0NMU

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

[00:00](https://www.youtube.com/watch?v=2i9QO5D0NMU)

- Welcome to the January 16th edition of the Scientific Governance and Risk meeting. Now that MCD is out in the wild, and the dust settled, we're reflecting on our protocols success and planning for the future. We'll be focusing some of the discussion on how we make sure there is a gradual and efficient decentralization of the protocol.
  - We mention 'gradual decentralization' often, and it's not a catchphrase. It's a goal. We need a robust governance ecosystem to make that happen. I feel privileged and encouraged watching our achievements over the past year. The Foundation agrees that Governance is a primary focus and one of the most important parts of the Maker Protocol's success. We need to establish better processes, get deeper insights, bring domain experts in who can speak about the challenges, their possible solutions, and more.
- Speaking of bringing in domain experts, we're joined by Mariano Conti, who will talk about the MKR authority transfer. What affects circulating MKR and other mechanics.
- Cyrus will be covering Debt Ceilings and Migration Risk.
- Primoz will be presenting an analysis of Migration and SCD CDP owner behavior.
- Vishesh will be covering the state of the pegs.
- Derek Flossman will present about SCD SFs and Emergency Shutdown. Specifically, it's moving parts, how they all interact.
- LongForWisdom will be discussing activity on the forums, and we'll have a moment to discuss Abartsch's threads about SCD shutdown.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

## Tech

### Mariano Conti

#### MKR Token Authority Transfer

[03:45](https://youtu.be/2i9QO5D0NMU?t=225)

- On Dec 20th, the Maker Foundation put out a [blog post](https://blog.makerdao.com/transfer-of-mkr-token-control-a-giant-leap-toward-system-decentralization/) detailing what will happen.
- MKR token was still owned by the foundation multi-sig.
  - Foundation uses two protected methods, mint and burn. So far, the Foundation has never called those methods.
  - Maker Protocol requires being able to call these methods, particularly during Surplus and Debt auctions. In a Surplus Auction, the system needs to burn. In Debt Auction, the system needs to mint MKR.
- All the MKR gathered from SFs in SCD were stuck in the burner contract. Over 10k MKR was sitting there, technically out of circulation. However, it did not reflect on the total ERC-20 supply. So what did we do? We created a special contract called MKR Authority, which enabled a couple of interesting things:
  1.  Anyone can call burn, which means one can burn their own MKR. Be careful!
  2.  If you approve a third-party contract on your MKR, that contract can burn as well.
      - Burn was [called on the burner wallet](https://etherscan.io/tx/0xda5f9a9dfc33c73dd1582c894736cb97248255fffa59b39bda0acb65e5374f95), destroying 5 million dollars worth of MKR.
  3.  MKR governance now has control over the token. MKR holders can now choose to mint new MKR through an Executive Vote if they wanted to. We don't expect this to happen, but it's important to let MKR voters know that they have that power. The only time mint will be used is during Debt Auctions.
- The next step is to remove the multi-sig completely since now there is joint ownership of the MKR token. When that happens, governance will be the sole owner of the token.

### Questions and Discussion

[08:23](https://youtu.be/2i9QO5D0NMU?t=502)

- Rich: Mariano, are there any timelines associated with the final handoffs.
  - Mariano: Mostly a matter of coordination. Don't want to rush into it in case of latent bugs. Governance now has the ability to mint 'infinite' Maker, so its a pretty powerful feature.
  - Rich: True, but its a powerful shift into what crypto governance is about. I'm unaware of anyone else in the space who has done this. I'm surprised more people didn't notice.
  - M: I guess more people noticed that the total supply went down after the burn. But the main thing is the hand-off of authority.
  - R: It'll be one of those things that will take a while for it to sink in. I'm quite proud of us.
- Mariano: One question I've gotten is, why didn't we do this sooner?
  - For SCD, MKR is only used to pay SFs. It doesn't have the feature of participating in Debt Auctions. In SCD, to recapitalize an underwater CDP, the system would mint PETH. There was no need to call the mint function before on MKR. But now that the system may need it, it's important for it to be enabled.

### LongForWisdom

#### Forum Activity Recap

[11:35](https://youtu.be/2i9QO5D0NMU?t=695)

- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
- [Mitote's thread about a treasury for Governance](https://forum.makerdao.com/t/makerdao-needs-a-treasury-to-provide-compensation-to-its-workers-post-foundation-focus-on-workers-for-now/1091)
  - Mitote presented the reasons why we should create a treasury and why we'll need one in the future.
  - [Associated Signal Request Thread: Should Maker make a Treasury to manage revenue?](https://forum.makerdao.com/t/signaling-request-should-maker-make-a-treasury-to-manage-revenue/1122)
- [Derek, from the Maker Foundation, discussing the Global Settlement mechanics](https://forum.makerdao.com/t/global-settlement-of-single-collateral-dai/1121)
  - The post covers the mechanics, and the tax parameter(as discussed in chats.)
  - Ties into Aaron's signal request threads, [that are summarized here.](https://forum.makerdao.com/t/summary-of-parameters-for-scd-shutdown/1130)
  - Derek dives into this thread in his presentation, summarized below.
- [Why SF = DSR? Request for discussion](https://forum.makerdao.com/t/why-sf-dsr-request-for-discussion/1086)
- [Dai supply prediction poll](https://forum.makerdao.com/t/dai-supply-projection-poll/1070)
  - 300m Dai is the leading vote.
- [DSR spread thread](https://forum.makerdao.com/t/signal-request-should-we-replace-the-weekly-dsr-rate-governance-poll-with-a-dsr-spread-governance-poll/969)
  - This is moving on-chain on [Monday's Governance Poll](https://vote.makerdao.com/polling-proposal/qmayqxkr2avyqdvqqq2xudjmuiw3rr5tnsuhmpwm1jnfx4)
- [Signal Request: How do we handle executive bundling in relation to technical changes?](https://forum.makerdao.com/t/signal-request-how-do-we-handle-executive-bundling-in-relation-to-technical-changes/965)
- [Summary of parameters for SCD shutdown](https://forum.makerdao.com/t/summary-of-parameters-for-scd-shutdown/1130)
  - To start with, Aaron made a poll to ask, generally, whether shutdown needs a date, supply, or peg deviation. We narrowed these factors down a bit. We hit three polls for each option:
  - Peg deviation; the winning result was .05 away from the peg. Important to note: no timeline definition on this option.
  - A Timeline poll; winning option was six months.
  - Supply poll; winning option was \$10 MM Sai.
- [PlanetX points out Governance overhead](https://forum.makerdao.com/t/maker-governance-overhead/1129)
  - One note is the increasing length of Governance calls. Regularly, these are 90 minutes though they used to be an hour.

### Comments and Discussion

[12:08](https://youtu.be/2i9QO5D0NMU?t=728)

- Rich: I encourage everyone to take a look at [Mitote's Treasury thread.](https://forum.makerdao.com/t/makerdao-needs-a-treasury-to-provide-compensation-to-its-workers-post-foundation-focus-on-workers-for-now/1091) The post aligns with a coming shift in the governance paradigm. For the community to have autonomy, it needs a source of funds and the ability to use them for protocol expenses; forming processes and standards around fund allocation, expense tracking, auditing, accountability, and voting will be a necessary step. To enable that autonomy, the community needs to organize in a sophisticated manner around the topic.

[21:40](https://youtu.be/2i9QO5D0NMU?t=1300)

- Adam: "Will any security measures be taken against Governance attacks that mint MKR?"
  - Sam: GSM, referencing time delay on Governance actions, should protect against majority Governance attacks. It's still currently at Zero, so that's an excellent point to bring up: since it didn't pass, at what point do we recycle that vote?

[22:41](https://youtu.be/2i9QO5D0NMU?t=1361)

- Kenton: One idea is to break the Risk and Governance call into two calls. Risk earlier and Governance later in the week.
  - Rich: Interesting thought. It's come up before. Right now, this meeting is about 90 minutes. An hour of presentations and a 30 minute Q&A. If we split it into two, the call becomes two hour-long calls; the worry is that there will be twice as much with two different days. Also, if someone is interested in both Governance and Risk, now they'll need to devote twice as much time for the full picture.
  - David: I'd also like to point out the operational overhead of producing summaries as quickly as possible.
  - Rich: Right, operational overhead is painful right now, especially as the Foundation maintains two tracks. Risk teams, developers, even an ecosystem, is trying to figure out who is using Sai and Dai. It's a significant amount of time and energy just keeping all the channels aligned. Reddit, Chat, Twitter, Forum, summaries, transcripts, YouTube, Soundcloud, etc. That's just broadcasting. That doesn't include agendas, speakers; tons of work goes into just this 90-minute call. If we decide on two calls, we can assume we include twice as much effort; maybe there is an economy of scale here.

[26:41](https://youtu.be/2i9QO5D0NMU?t=1601)

- David: Bringing back Franks question and answer: What was the voter breakdown of the [Sai SF poll that just passed?](https://vote.makerdao.com/polling-proposal/qmzhc5fcvv2jhqmgbugd6zy1mh6pffapdz7o6uqebgltjt)
  - LongForWisdom: Interestingly, the 9% Sai value was set by one whale ~3 hours before the poll ended.
  - Rich: That doesn't surprise me. Here's the problem with human nature even, but specifically with our governance; people with less than 5,000 MKR look at the current set of voters that consist of two or three large voters and a ton of smaller voters and think it's not worth it for them to vote because they can't influence the system due to the size of the larger voters. However, by not voting, they are giving more influence to the large voters. It's a negative cycle of thinking, and it's human nature.
    - I don't know if MKR holders will be able to avoid this kind of thinking. Though I think they should because if people committed to voting with their smaller holdings, they could collectively hold influence that would keep the larger voters accountable.
    - This is something we need to figure out. We have things on the horizon like vote delegation, incentivization, campaigning, etc. We created a straightforward stakeholder voting system, and stakeholders aren't voting, so we need to solve that problem.

### Derek Flossman

#### Global Settlement of Single Collateral Dai

[31:05](https://youtu.be/2i9QO5D0NMU?t=1864)

[Forum Post](https://forum.makerdao.com/t/global-settlement-of-single-collateral-dai/1121)

![](https://i.imgur.com/q9cfTQh.png)

![](https://i.imgur.com/vB86H5c.png)

![](https://i.imgur.com/LJKUedX.png)

![](https://i.imgur.com/gsnyXrj.png)

![](https://i.imgur.com/4NZZF7M.png)

![](https://i.imgur.com/Ato28zU.png)

![](https://i.imgur.com/le2GXyq.png)

### Discussion about tax function

[37:20](https://youtu.be/2i9QO5D0NMU?t=2240)

![](https://i.imgur.com/eYWPJtJ.png)

- Rich: Looking at this graph(see above), we have outstanding SF debt there is no mechanism that just makes that happen correct? Trying to gauge: how arbitrary or accurate will the tax bill be at the end of the 4-day suboptimal repayment time?
  - Nik (nkunkel): You're trying to incentivize people to pay their SF's before the tax period is implemented. It's not about setting a perfect tax to the amount of SF's owed; the issue is communicating that if you don't pay your Stability Fees and close your position by this date, you will get screwed.
    - During that tax-period, it's sub-optimal for anyone to pay back their CDP's to close them since they'll have tax on top of Stability Fees owed. After implementing tax, it's finished. Whoever you incentivized to close their position did, and the person who decided is not going to. It makes more sense for them to go through Global Settlement.
    - It's 100% about being vocal about the tax versus SF difference.
  - R: We can't yet assume the tax rate. It could potentially be higher or lower than the SF's.
  - N: It has to be higher, or else there will be no incentive for anyone to close. It can't just be a little bit higher; it needs to be high enough so as to make clear that it isn't profitable to dodge your SF's.
  - Matthew Rabinowitz: There will certainly be a group, with Dai outstanding, that have the intention of waiting for Global Settlement to convert their CDP.
  - R: If the community doesn't want the expectation of a safety hatch for CDP owners to linger, we need to make clear the plan sooner rather than later.
  - Derek Flossman: I think the model in the diagram is correct, and that the discussion is moving toward that. We will have to agree on what some of those values are around the parameters to have the right incentives at play.
  - R: It's going to be murky. I'm looking forward to deeper discussions.

[42:09](https://youtu.be/2i9QO5D0NMU?t=2530)

- LongForWisdom: I think the largest SF that hasn't been paid is #3088, ~800k in SFs. In order for the tax to be effective on them, it has to be high enough to exceed that 800k. And it needs to be a short enough time window, say 1-2 weeks. Doesn't this mean that tax will need to be insanely high?
  - Matthew: Why have a short tax window?
  - Nick: Because there is no incentive for anyone to pay during the tax window.
  - Matthew: Not necessarily. Let's examine the scenario of say six months of x%. If it's going to be worse tomorrow than today, and worse the day after, no one will want to be liquidated on top of being taxed.
  - Rich: Maybe having a timer is the key.
  - Matthew: Another option is to increase the tax week over week, ratcheting up 1% per week until Global Settlement, for example. No one wants to be liquidated, so at some point, you force everyone to get liquidated.
  - LFW: I think the problem is if they get liquidated, they only pay the tax and not the SF.
  - Nik: Correct, they only pay the tax.
  - Matthew: All the more reason to have a longer tax period.
  - LFW: As soon as the tax window starts, they'll have to pay the tax and the SF. If they wait for Global Settlement, they only have to pay the SF.
  - Chris: But they also pay the liquidation penalty of 13%.
  - LongForWisdom: Ahh, correct.
  - Nick: This is an edge case on top of an edge case. Which isn't common for everyone.
  - LongForWisdom: Oh wait, I meant Global Settlement, not liquidation, my apologies. When they go through Global Settlement, they don't pay the SF just the tax.
  - Rich: There are two conversations going on right now, one in the chat and one in the recorded call. Let's try and have these conversations recorded.
    - As this call is already packed, and this is an ongoing topic, we'll continue to revisit this conversation in the future.

## Risk

### Cyrus

#### Migration Risk Construct Review

[46:33](https://youtu.be/2i9QO5D0NMU?t=2791)

- For SCD: Sai supply is around 35 million, DC is 70 million. This leaves an enormous gap of unused Debt Ceiling. From a risk perspective, we don't want to have all that unused space. I would recommend that the community lower that to something more reasonable, in line with previous SCD DC reductions.
  - Sai DC reductions aren't designed to stifle SCD. They are there for safety. DC can always be increased again for whatever reason.
- In regards to the MCD DCs, market activity led to a very strong increase in the Dai supply. Dai supply from ETH collateral is getting up there, 85/100 million.
  - Two separate considerations with ETH Debt Ceiling for Dai:
    - In the short-term, it's not wise to leave unused debt ceiling space for MCD. Due to the Oracle Security Module (i.e., 1-hour delay before price changes come into effect), there is an opportunity for Vault owners to mint unbacked Dai if there is too much space. This is obviously not good for the stability of the system, so the DC should be as small as possible.
      - In the future, we will have Instant-Access Modules(IAMs) for more fluid updates without having to go through the full governance process.
      - Even if it looks like we're going to hit the DC soon, its not a good idea to raise the Debt Ceiling too preemptively.
    - In the long-term, there is the consideration of the theoretical max. Happy to chat about it offline; we'll also be approaching those concepts in the coming weeks.
- Governance should consider some housekeeping items:
  - Dust limit, which was set 20 at launch, could be lowered in the interest of better UX and onboarding for our users.
    - Some of the devs don't think it's a huge issue to lower it. Perhaps someone could put up a Signal Request Thread in the forums about this.

### Primoz

[51:44](https://youtu.be/2i9QO5D0NMU?t=3101)

- [Primoz's Spreadsheet on SCD CDP's data](https://docs.google.com/spreadsheets/d/18Et6TQZnGfuc8YJXHLFZXm75UzxigGR3wcp8VaibhdI/edit#gid=1942156439)

#### Analysis

![](https://i.imgur.com/y5uTIdR.png)

- Total supply continues to grow; Dai is up 6.5 million in the last week. Sai supply keeping steady, even increased about 300,00 recently.

![](https://i.imgur.com/5OSEnDr.png)

- Market activity corresponds to bullish sentiment.
- The total supply of Dai+Sai increased by about 12 million.
- The main topic is the lessened interest in SCD users to migrate to MCD. The Sai in the migration contract isn't being drained at the same rate as in the past. It's been two days since more than two million Sai has been held in the migration contract, and none of the biggest borrowers have really touched it.
  - Currently, all but 2 of the remaining SCD CDP's could migrate easily by using the Sai in the migration contract.

![](https://i.imgur.com/Z17hl8C.png)

- Remaining SCD borrowers demonstrate some kind of backstop in migration.
- This table covers the actions of the top 100 CDPs (90% of Sai Debt) for the last two months.
- There is still minting going on, with one user doing a majority of the minting.

![](https://i.imgur.com/p8M93Ln.png)

- Of the top 100 remaining SCD CDP's.
  - 20 CDP's minting Sai, close to 6 million in Sai, and roughly 8 million debt represented.
    - Represent 1/4 of the remaining debt.
    - Not likely to migrate anytime soon, Sai is likely being minted for a speculative reason or some other incentive.
  - 27 CDP's working on actively repaying their debt.
    - 1/5 of remaining debt.
    - Debt repayment was likely limited by Sai liquidity.
    - The last two days have demonstrated more Sai liquidity but not as much repayment. Will continue to monitor.
  - 19 CDP's locked with additional ETH.
    - about 10% of debt or 3 million.
      - Unsure if they want to migrate or are just protecting from liquidation.
  - 2 CDP's withdrawing ETH from collateral.
  - 32 inactive CDP's - no interaction in the last two months.
    - Debt is about 12.7 million, or 41% of the total debt.
    - Most were active six months ago.
    - Likely were minting Sai because ETh price was surging, and they were leveraging.

![](https://i.imgur.com/mx68Iiv.png)

![](https://i.imgur.com/meA157U.png)

- Insights:
  - Inactive CDP's and those still drawing Sai represent 20 million or 2/3rds of CDP debt.

![](https://i.imgur.com/5QYEPaL.png)

- Additional metrics, not sure if I have time to get into them.
- I would like to get all the remaining CDPs for a more comprehensive sample.
  - Rich: This information will be crucial to determining our next actions, including the aforementioned tax.
  - We need to create a recourse for this that is updated every month or so and shared in the forums.

![](https://i.imgur.com/2NHhNy5.png)

- 11% seems to be the largest Fees/Debt ratio.

#### Questions and Discussion

[1:00:34](https://youtu.be/2i9QO5D0NMU?t=3633)

- Cyrus: If we can get everyone other than the inactive CDPs to migrate, could we put the lower bound threshold for the shutdown at about 12 million in debt?
  - P: Yes.
  - C: Is it reasonable to expect those still minting Sai (the red slice) to migrate as well? Maybe not, right?
  - P: Probably not. I checked those CDP's and am not sure of their motivations. Might be speculating on Sai liquidity crunch to get premiums.
  - C: Inactive Debt + portion of new Sai being minted going to DSR should be the lower bound/target for global settlement, yes?
  - P: Yes. That's the 20 million or 2/3rd of CDP debt that I mentioned.

## Sai Analysis

### Vishesh

[1:05:35](https://youtu.be/2i9QO5D0NMU?t=3933)

#### Relevant links

[Live Migration Data](https://sai2dai.xyz)
[MCD system stats](http://daistats.com)
[SCD system stats](http://saistats.com/)
[DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)

#### Insights

![](https://i.imgur.com/0cVmOWD.png)

- Dai very, very slightly below the peg with lighter trading volume in the last 24 hours, 2.5 million.

![](https://i.imgur.com/mFmSZHu.png)

- Sai is trading very close to \$1, with very low trading volume as expected, only 380k.

![](https://i.imgur.com/lVW2GYK.png)

- The seven-day range for Dai:
  - Decent trading volume, 24.7 million
  - dYdX dex trading volume picked up from what we've seen in the past.
  - Oasis sitting where usually expected.
  - Uniswap representing long-tail spread in trades.

![](https://i.imgur.com/DUTYqc4.png)

![](https://i.imgur.com/Zk27PKT.png)

- For Dai vs. Sai liquidity, at least in Uniswap, is only twice as much Dai liquidity in the pool vs. Sai. Still a decent amount of Sai liquidity in Uniswap and again about half the trading volume as well.
- Migration still not quite wrapped up.

![](https://i.imgur.com/b6NT8dL.png)

![](https://i.imgur.com/B1ERJuz.png)

- 44 million of outstanding Dai is created by top 20 Vaults.
  - Collateralization Ratio on average has dipped slightly, 276%, but hasn't actually changed that much.

#### Questions to Vishesh

[1:09:46](https://youtu.be/2i9QO5D0NMU?t=4185)

- Guilherme: Can we go back to that last distribution graph, how have these collateralization ratios changed from last week?
  - Vishesh: Last week, the collateralization range cutoff was at around 300%, this time it's at roughly 275%.
  - The amount of debt in the mid-to-low risk level has not really changed much if anything a slight increase. The particular cutoff of the collateralization ratio has slightly dropped.

[1:12:01](https://youtu.be/2i9QO5D0NMU?t=4321)

- Guilherme: We're not tracking that history since migration, right?
  - V: This has just been for the past few weeks.

## Further Discussion

[1:13:18](https://youtu.be/2i9QO5D0NMU?t=4398)

- Cyrus: I have one suggestion for a Governance improvement. Normally we don't discuss the results of the Governance Poll. But with Mkrgov.science, we can look at the poll breakdown. LongForWisdom [posted a link](https://mkrgov.science/poll/76) to the Sai Stability Fee Poll. Seeing it hit 9% for the Sai SF, maybe we can see that as a push for migration?
  - Rich: Is that an effective strategy? Let's say their motive was to push migration from SCD to MCD.
  - C: Previously, the approach was to keep the SF low to keep the liquidity wheels going for migration. Now though, if the migration is slowing, the remaining CDP owners aren't liquidity constrained, but they're opting out by choice than potentially this might be a reasonable strategy.
  - R: If we breakdown those cohorts, it seems like they're embedded. If one already owes a huge amount in Stability Fees, I'm not sure this strategy matters to them. It seems like that they're waiting on a "hail mary" solution for GS anyway.
  - C: Wouldn't an increased SF make the decision to stay through GS more difficult?
  - R: We can't guess at the motivations of people, especially since crypto tends to be more irrational than the traditional world.
  - David: In a Monetary Policy-based Executive Vote, what if one of the parameters gets controversially selected? Like the 9% that just got chosen. Is it a form of governance attack to vote in an undesirable setting to delay passing the rest of the parameters?
  - R: Goes back to our discussion around guessing intentions. We'll have to think about Governance attacks in the future.
  - D: Delays can be just a strategy, doesn't have to be explicitly phrased as an attack. Some cohort might be seeking to keep the rates from changing for an extra week or two.
  - R: Right, it goes back to our GSM discussion from last week. Whether there is an external group of stakeholders who determine "right" decisions. Making decisions based on the results of activities is akin to passing judgment. We'll have to discuss this in the future.

[01:19:11](https://youtu.be/2i9QO5D0NMU?t=4747)

- Rich: Cyrus, did you chat about dust?
  - C: I think we should put a thread up with smart contract developers' input. I'm sure it's not a risk, but another statement on record would help. It's set to 20 right now, but ideally, it could be a fraction of a penny.
  - R: Without a minimum, won't we get an avalanche of legacy Coinbase Earn CDP's?
  - C: Perhaps a more reasonable number like 1 or 5.

[1:20:44](https://youtu.be/2i9QO5D0NMU?t=4844)]

- David: Adam is asking about GSM in the chat, "why just not to have not expire-able pool."
  - Nik: I think what he means is that existing votes for GSM don't expire when the MKR moves to a new EV.
  - R: That's an interesting question, but it destroys the entire model of Continuous Approval Voting, which the EVs are operating on.
  - L: Is there a reason we can't just show the un-cast EVs in the portal? There is still a lump of MKR on the GSM vote.
  - D: We could show them, and there is room for redesign here. Including past spells would require input.
  - L: Those issues are still here; it's just harder to do them.
  - R: To reframe this, the analogy I keep using is that "the protocol is like a software package," and "the Executive Votes are a configuration snapshot" that we apply to that software package. As the EVs get older, the possibility of them being able to be applied to the software becomes reduced. Obviously, you don't want a six-month-old Executive Vote from SCD getting lifted and applied in our current system, that would be a disaster. There are questions about visibility and what we abandoned along the way. Possibly part of MKR is in past executives that could migrate to the current one. The trade-off here on the portal is inconvenient visibility versus exposing where MKR is hanging out.

[1:25:39](https://youtu.be/2i9QO5D0NMU?t=5139)

- Kenton: Has there been public discussion about spell expiration?
  - Rich: Back before the forums, we discussed it, maybe we should resurface those discussions. First, we should frame the problem and then the solution to MKR sitting on old votes. Some of the options have been:
    - Return the MKR to your wallet if it hasn't moved in six months.
    - MKR is only active if it's on the current EV or the EV that is actively being voted on.
    - An "MKR is now stale" mechanism that would move MKR out of any EVs.
  - Kenton: I was asking about the ability to `cast` a spell. Is there an ability to set an expiration on the 'casting' ability after it gets the hat.
    - For example, the GSM spell can be `cast` if it's given the hat. But, if before it's submitted(entered into `DS-chief`), there is a hardcoded deadline to cast the spell built-in that could provide added security. That way if the spell expires, the new Executive Vote needs a new spell, resetting the expiration date
  - Derek: What happens to the MKR when the EV expires?
  - K: It moves to the governing spell.

[1:28:51](https://youtu.be/2i9QO5D0NMU?t=5331)

- Kenton: Tangentially related; If I wanted to make a proposal, what format could I use to push the ball forward? Forums? I'm just curious about the template to use.
  - LFW: There isn't a formal template. We see a template evolving. My best suggestion is to look at what other people have done and DM me if you have any questions
  - Rich: There are two posts that I'm aware of: a [meta for signal threads post](https://forum.makerdao.com/t/meta-governance-signal-requests/553) and an [updated version of what those guidelines are](https://forum.makerdao.com/t/signaling-guidelines/223). They should help with details about formatting, how the polls should look, how the framing of the question works, and what the next steps are. Ultimately: make a forum post, facilitate the discussion, set a timeline, put a poll on it. Once enough signaling and enough interest arrive, and consensus is reached, we can work together to put a proposal in the portal.
  - Kenton: This proposal guideline would also include how to include engineering support?
  - Rich: Nope, the existing proposals are either policy or using the existing mechanisms that are already in place. We haven't pursued dev or integrations yet. We might have a MIP's process for all those steps soon from Charles and Derek.
  - Charles: MIPs framework is in development. In short, it has different procedures for different proposals from the community. Including all the Governance process from forums to implementation. We're working on it and will share it soon.
  - K: Timeline for that is when?
  - C: Still cleaning it up, can't make a timeline yet.
  - K: Reaching out offline, would we be able to use a drafted template in the interim?
  - C: We have models; let's discuss the process as it gets finalized.
  - R: Using the MIPs process, as a foundation member, is a healthy process. We can dogfood this, which is excellent. We all can alter the shape of the ecosystem by following the process. Who knew it could be so fun!

#### Links from the Chat

- [Primoz's Spreadsheet on SCD CDP's data](https://docs.google.com/spreadsheets/d/18Et6TQZnGfuc8YJXHLFZXm75UzxigGR3wcp8VaibhdI/edit#gid=1942156439)
- [Governance Data Dashboard](mkrgov.science)
- Adam Skrodzki elaborates on his Governance logic in this [forum post](https://forum.makerdao.com/t/thoughts-about-governance-security-and-logic/1080/9)
- Governance Forum Signal Guidelines:
  - [Process](https://forum.makerdao.com/t/suggested-signaling-process/396)
  - [Guidelines](https://forum.makerdao.com/t/signaling-guidelines/223)

## Credits

- David Utrobin produced this summary
- Tim Black produced this summary
- Igor Teslya produced this summary.
- Everyone who spoke and presented on the call (listed in the headers)
