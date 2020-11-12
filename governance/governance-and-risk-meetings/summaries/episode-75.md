# Episode 75: February 27, 2019

## Agenda

- [00:00](https://youtu.be/6APWQZ_7y2g): Intro with Rich Brown
- [03:37](https://youtu.be/6APWQZ_7y2g?t=217): Recap of Forum Topics with LongForWisdom
- [33:26](https://youtu.be/6APWQZ_7y2g?t=2006): Oracles and Governance with Nik Kunkel
- [1:12:19](https://youtu.be/6APWQZ_7y2g?t=4338): Dai analysis with Vishesh
- [1:19:18](https://youtu.be/6APWQZ_7y2g?t=4755): Migration Analysis with Primoz

## Video

<https://youtu.be/6APWQZ_7y2g>

## Abbreviated Terms

`SCD`: The Single-Collateral Dai system

`MCD`: The Multi-Collateral Dai system

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`EV`: Executive Vote

`GP`: Governance Poll

`SF`: Stability Fee

`DSR`: Dai Savings Rate

## Introduction

### Rich

#### Summary & Introduction

[00:00](https://youtu.be/6APWQZ_7y2g)

- Welcome to the Feb 27 Governance and Risk call. We're joined by Niklas Kunkel from the foundation today. He's also in a transition role, like the interim Governance facilitator. His title is the Head of Oracles, and he is paving the way for future Oracle teams in the Maker Protocol. In these ephemeral roles/paths, we serve the community to get members on board, communicate, document process, and then hand off to the community. We'll discuss Nik's amazing presentation, jump into a forum recap, and listen to some market and risk analysis afterward.
- Often, as we act, we find that initial momentum and decision making just continues. It's worthwhile to check ourselves. For example, migration has a beginning, middle, and end. As long as we level set and pay attention to where we are and what we should be doing, we're on track.
- Give us feedback about the call.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/) this is where Governance happens, where consensus is measured, and how signal is generated. Let's start with the forum recap since Oracles will get complicated and have lots of questions.

## Governance

### LongForWisdom

#### Forum Recap

[03:37](https://youtu.be/6APWQZ_7y2g?t=217)

- [Should MKR governance get involved with Ethereum hard forks?](https://forum.makerdao.com/t/should-mkr-governance-get-involved-with-ethereum-hard-forks/1353)
- [How to audit executive contract code?](https://forum.makerdao.com/t/how-to-audit-executive-contract-code/1292)
  - _Answered!_ In which @Joshua_Pritikin asks how we are supposed to audit executive spell contract code.
  - [Answer comment form Chris Mooney](https://forum.makerdao.com/t/how-to-audit-executive-contract-code/1292/7?u=twblack88)
- [Using tranches to insure against defaults of real-world assets and providing an extremely stable asset](https://forum.makerdao.com/t/using-tranches-to-insure-against-defaults-of-real-world-assets-and-providing-an-extremely-stable-asset/1286)
  - In which @spin presents Drop as a potential token for inclusion as collateral in MCD. Explanation and QA video available on youtube.
  - [Video Link to the presentation call](https://youtu.be/aXnpEcZHJIM)

##### Seeking signal

- [Signal Request: Reduce the frequency of the DSR Spread governance poll](https://forum.makerdao.com/t/signal-request-reduce-the-frequency-of-the-dsr-spread-governance-poll/1207)
  - @hexonaut starts a signal thread regarding the voting cadence of the DSR spread vote. Most people seem to be in favor of some increase so far.
- [Signal Request: Add Ranked Choice Voting as an Option for Governance Polls](https://forum.makerdao.com/t/signal-request-add-ranked-choice-voting-as-an-option-for-governance-polls/1274)
  - @hexonaut proposes adding the option for ranked-choice voting to the on-chain governance polling system. Some good discussion so far. This thread needs more eyes!
- [Signal Request: Should we reduce the minimum bid increase required for Surplus Auctions (FLAPs)?](https://forum.makerdao.com/t/signal-request-should-we-reduce-the-minimum-bid-increase-required-for-surplus-auctions-flaps/1219)
  - The minimum was reduced with the [EV that passed on Feb 21st, 2020.](https://vote.makerdao.com/executive-proposal/activate-the-dai-debt-ceiling-adjustment-set-dai-savings-rate-spread-set-sai-stability-fee-lower-surplus-auction-bid-set-governance-delay-module)
- [Signal Request: What should the next ETH debt ceiling be?](https://forum.makerdao.com/t/signal-request-what-should-the-next-eth-debt-ceiling-be/1265)
  - In which @bit asks how much we should increase the MCD Debt Ceiling, or whether we should leave this parameter in the hands of the Interim Risk Team.

#### Questions and Discussion

[4:23](https://youtu.be/6APWQZ_7y2g?t=263)

- Cyrus: As Mariano mentioned in the chat, we should discuss ETH forks. Do we want to support one chain over another? Do we have contingency plans where the community aligns on what happens next?
  - LongForWisdom: Agree, a contentious hard fork plan would be best.
  - Rich: Depends on where the community lands on that issue; hopefully, it inspires debate. Dapps, protocols, applications, dYdX, Compound, and all the other significant players in the space are new chess pieces on the puzzle board. It used to be that devs and miners would drive much of the discussions and debate. That dynamic has changed, it's going to be interesting to watch the collateral partners, community, and stakeholders get thrown in the mix choosing which fork is preferable.
  - Cyrus: Conceivably, Maker would support both, then Rich's job gets infinitely complex. That's 2 Dais and 2 Sais. Is there a reason we can't support both?
  - R: If the collateral gets split into two systems(one good one bad), Crypto collateral gets messy. But real-world collateral doesn't get divided into two systems. From a risk perspective, wouldn't leaving one be safest?
  - C: Yes! But not obvious or automatic.
  - David: Also, during a fork, there are technical considerations too. Oracles, liquidations, everyone would have double Dai balances, etc. Plus, in the new fork Dai may not equal \$1, ETH pricing would be unclear for the first hour or two when it happens. It would be a mess.
  - R: I can't remember the last discussion, but you can't simply double the infrastructure.
  - Tim Black: You could make a framework, based on hash power to secure the chain, and stakeholders with value signaling towards one direction.
  - R: Huge can of worms, the old days of twice the collateral doesn't exist. Now we have interdependent pieces where it's much more intricate. Businesses depend on these chains and each other. No one is going to step in and fix it for us.
  - L: All the collateral stablecoins too, they'll have to pick one chain. They can't multiply their dollars by two.
  - CMooney: One thing from chat. There is a possible griefing attack. It's only going to take 50k MKR to shutdown the system **on any fork**. We could raise the threshold but then lose the game-theory mechanics of the ESM being there.

[11:34](https://youtu.be/6APWQZ_7y2g?t=694)

- Richard Lopez: Trying to get a feel from other protocols. Are they looking at Maker for guidance? We can't expect exchanges to help. Are there projects that depend on Maker? And also, if they're dependent on Maker's influence, how to account for their needs?
  - RB: Even last year is a different world. It takes a village to make DeFi work, and now it's almost impossible to find the linchpins and prime movers.
  - D: At the moment, I haven't seen much signaling at all.
  - Mariano: We're going to have to think about this deeply.
  - R: Right, the number of people that need to align around a fork is going to be critical. It's impossible to predict and dangerous to speculate. Grassroots organization is required. Some sort of agnostic group working across organizations, protocols, stakeholders, and projects coordinating together. There is no one org to manage it, and the devs can't even do it anymore.

[18:27](https://youtu.be/6APWQZ_7y2g?t=1107)

The conversation below is regarding the [DSR Spread Cadence Thread](https://forum.makerdao.com/t/signal-request-reduce-the-frequency-of-the-dsr-spread-governance-poll/1207)

- SamM: Overwhelmingly, the on-chain GP vote was no, so that's disappointing. In the forum thread, there were two votes: reducing to a month or two weeks. Those votes were stuck in a tie. Instead of multiple options, we launched the poll with the prospect that slightly won out. So now we have more questions instead of answers.
- As a result, I started [a new signal thread for ranked-choice voting](https://forum.makerdao.com/t/signal-request-add-ranked-choice-voting-as-an-option-for-governance-polls/1274). The ideal situation would have been to launch with three options and then pick your second and third. You'd still get a winner out of the vote, rather than a no.
  - R: Ranked-choice voting thread surfaced another signal which, again, Sam, is fascinating.
  - S: Hoping to hear from Governance portal engineers, I wrote an implementation I think it would work. Poll ended, and people seem to want ranked choice if it's available. It would be great to get feedback.
  - CMooney: The technical idea seems sound.
  - R: Historically, we mention cadences, rates, and thresholds. Ranked-choice will be one of the first signals that would require development. With contract changes, we have to keep in mind significant pieces of complexity.
  - Sam: This is the first yes/no question that's failed. We don't have an easy way to find out why.
  - R: In the real world, there are more hidden actions, but we know why. Whereas in crypto we can see what happens but no idea why they did it. The question is how to circle back. If the portal had a place to say why that would be helpful.
  - Sam: That's exactly what I was proposing. A simple UI that pops up of, "you're saying no, why? Please feel to explain. Feedback on your vote is helpful."
  - T: My caveat is user friction. It's not much right now, but we still get complaints. I was hoping we could incentivize that signaling. On the surface, it's simple "just tell us why" more profound than that there is a risk to doxxing yourself, etc.
  - R: I think the more significant friction is circling back at a later date to explain. While already logged in, a little pop up isn't that bad. E.G., "Would you like to explain your vote for the benefit of the ecosystem?"
  - L: Best to have for both sides.
  - R: It might be great to give people a voice, there would be utility there. Presumably, if they dissent. A comment box. Fascinating idea
  - D: That would solve the signal from MKR holders problem. An anonymous why tied to folks with skin in the game.
  - RL: One add-on, what's the takeaway in the feedback if it's a no. Is it just to know, or is it helpful to phrase the next vote.
  - S: it's precisely that. There was such a split between two weeks and a month. It's possible whales wanted two weeks.
  - L: This is a clear example of relaunching the vote. It adds to the majority consensus.
  - R: For votes like the GSM, this would have been incredibly useful.

## Oracles

### Nik Kunkel

#### Oracles and Governance

[Presentation Posted here.](https://forum.makerdao.com/t/governance-oracle/1367)

[33:26](https://youtu.be/6APWQZ_7y2g?t=2006)

![](https://i.imgur.com/8yIBXmP.png)

![](https://i.imgur.com/12JOvqd.png)

- Oracles are data suppliers. They are frequently used to assess the price of an asset. They are used to determine the price of each collateral asset, how much a user is allowed to borrow, and which open positions are undercollateralized and need to be liquidated. This is highly necessary both for the Maker Protocol and for Defi
- There are over a billion dollars in Defi, about 750 million of which is secured by our Oracles.
- One consideration is which chain our oracles will support in the case of a fork. This would affect the entire ecosystem. Some users include Compound, dYdX, Set Protocol, ENS, Nosys, Polymath, and dozens of others.

[38:30](https://youtu.be/6APWQZ_7y2g)

![](https://i.imgur.com/K0bNJqb.png)

- One of the key components of Oracles is feeds.

![](https://i.imgur.com/Wh4CbHj.png)

- Dark feeds increase the entropy of the 'coordination problem.' The coordination problem is the difficulty of coordinating an attack on multiple oracles at the same time. This becomes more difficult if they are anonymous.
- Dark feeds are not Sybil-resistant: they can all be controlled by one person, and no one would know.

![](https://i.imgur.com/vSHyVuw.png)

- Light feeds are easily targetable by government entities.
- The ideal system is a hybrid model, one where there is a preservation of the security of the Dark feed but maintains the reputation-based trust of the light feeds.

![](https://i.imgur.com/QPtI8xT.png)

![](https://i.imgur.com/RQlbiyC.png)

- Feeds collect price information from different exchanges and send that data to their own smart contract, on-chain, which triggers the Medianzer smart contract. Medianizer sorts and takes the median of all these price feeds. This is then used by the Maker protocol and third parties as a reference price.

![](https://i.imgur.com/98FBi0O.png)

- Oracles v2 was released alongside MCD. It addresses some of the problems of scalability, liability, and cost.

![](https://i.imgur.com/jpdnWo0.png)

- From a computational/operational point of view, the Oracle v1 is wasteful as every feed needs to make an on-chain transaction with every update to the Medianizer.

![](https://i.imgur.com/ST69BEv.png)

- One major difference between Oracle V2 and Oracle V1 is that a lot of the process has been moved off-chain. Asset prices are signed using Ethereum keys. A peer-to-peer gossip network (called [Scuttlebutt](https://scuttlebutt.nz/about/)) takes in this information. It works similarly to viral propagation in social media.
- Relayers are essentially keepers run by a third party. Think of them as the messenger boy. All they do is pick up a bunch of these signed messages from the Scuttlebutt network and submit them all at once to the Medianzer, as part of one transaction. This increases scalability dramatically and reduces costs dramatically while making the network more resilient.
- Rather than submitting multiple transactions, which limited Oracle updates if there weren't enough transactions, we can submit a single transaction. This helps update the Oracle prices more efficiently during heavy congestion of the Ethereum network.
- Before the Maker Protocol is affected by the Medianzer's price information, there is a one-hour delay set into the Oracle Security Module. This gives owners an hour to determine if they will be liquidated and gives an opportunity to put in more value in collateral or payback Dai to save their position.
- Customers and partners can choose between taking the transaction information from the Medianizer or the Oracle Security Module. The latter is safer and more secure against governance attacks. But some partners may choose to read from the Medianizer to avoid the latency of the Oracle Security Module.

![](https://i.imgur.com/S8fNAQ7.png)

![](https://i.imgur.com/oXXxnfP.png)

- One of the biggest differences between Oracles v1 and v2 is: V1 was open access. This led to a flourishing of the DeFi community. However, Oracle v2 will have a whitelist, which we will discuss later in the presentation.

![](https://i.imgur.com/V84sqO7.png)

![](https://i.imgur.com/m6UCB5t.png)

![](https://i.imgur.com/1YxtL7x.png)

- Oracles need to be a self-sustaining system with incentives to be run in a decentralized manner. Currently, Maker runs feeds that contribute to 75% of DeFi's value.

![](https://i.imgur.com/Yd5D5PN.png)

- Governance has a responsibility for the users of the Oracles in both V2 and V1. We shouldn't extort people with the advent of Oracles V2. Hence they will run in parallel until at least until the SCD shutdown. Afterward, any organization will be able to get access to any Oracle for free for one year as part of the [Responsible Oracle Migration](https://forum.makerdao.com/t/proposal-responsible-oracle-migration/509) proposal that was ratified before the new year.

![](https://i.imgur.com/rLR9Hnm.png)

![](https://i.imgur.com/DvfZD0X.png)

#### Oracles Questions and Comments

[46:30](https://youtu.be/6APWQZ_7y2g?t=2790)

- R: Isn't there a risk relying on an active network graph for data propagation. How can you insure or maintain the health of the Scuttlebutt network?

  - N: Define enough, feeds have to publish data; if they don't, then it is equivalent to a censorship attack. When you're making an attack that denies quorum, you would probably attempt **manipulating** the price rather than **censoring** the price. It's much more profitable from the feed, in my opinion.

- Vishesh: Who comprises the Scuttlebutt network?
  - N: All of the feeds and all of the relayers. We'll discuss relayers shortly.

[57:16](https://youtu.be/6APWQZ_7y2g?t=3436)

- Rich: Are there SLA's and monitoring? How are these feeds audited? What are the safeguards put into place for Oracle behavior?
  - N: Despite close monitoring, we should work toward a transparency system for people to audit the performance of the feeds in real-time.
  - R: Is there a dashboard or a real-time graph for this?
  - N: There's nothing externally facing. It's on the backlog of our tasks. When we finish higher priority items; that's next on the list.
  - R: There might be an opportunity for community members to step up and work on this.

#### Oracle Related Unanswered Questions

These are questions in the call's chat that were left unanswered due to the time-constraint of the call.

- But if relayers are not also feeds, they are not verifying the data, so how are they deciding what price to retweet?
- How are relayers incentivized? They also paid by the feed stipend?
- Will there eventually be an easier UI for this rather than using the current Gov poll/Exec vote structure?
- Does the defi light feed proposal set a criterion for the addition of future feeds, or will they be voted in ad hoc?

## Risk

### Vishesh

#### Relevant links

[MCD system stats](http://daistats.com)
[SCD system stats](http://saistats.com/)
[DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)

#### The State of the Pegs

[1:12:19](https://youtu.be/6APWQZ_7y2g?t=4338)

![](https://i.imgur.com/pGgYBpr.png)

- Large quantities of Dai trading in the last 24 hours, about 36 million Dai. Previously 24 hours traded at about 38 million Dai (overlapping windows). Dai trading slightly above peg. May need to redefine 'slightly' as Dai has been trading tighter to peg recently.
- A lot of this volume is Oasis and dYdX, some more recently on Coinbase as well - trending toward higher volumes.

![](https://i.imgur.com/gM6rEyo.png)

- The last 24 hours were interspersed, with a few trades running above and a few below.

![](https://i.imgur.com/TWHSJOQ.png)

- Over the 7-day timescale, pretty heavy volumes trading due to ETH craziness. Usually, the crazier ETH is, the more active DAI is. This makes sense as a lot of the use case for DAI is leveraged on ETH.

![](https://i.imgur.com/4cXAbYC.png)

- dYdX and Oasis accounting for a large share of trading volume over the last week, total Dai traded at 101.053 million Dai. Much of the trades were on-peg or slightly below. This likely corresponds to the purchasing of Dai as people try to deleverage or pay down debt.

![](https://i.imgur.com/8njy4Sd.png)

- Overall, the total Dai supply from ETH has stayed more or less steady, coming down slightly at ~114 Million Dai. The BAT amount came up a bit, now at 1.7 million Dai; this is interesting because it usually never moves.

![](https://i.imgur.com/ammeTNS.png)

- The top three positions currently account for 25% of the supply. Top 15 positions account for roughly half of the supply. Average collateralization on a weighted basis is about 330%. The top 5 positions drop down to about 280% and the top 3% drop to 275%.
- Some of these few largest positions are somewhat low in the amount of collateral. These are risks to be aware of; if these top positions get liquidated, there will be a large quantity of Dai being sold, and there will be a subsequent impact on DAI price.

![](https://i.imgur.com/WA3rqQE.png)

- DAI supply growth has ticked down a little bit, same with SAI supply decline asymptotically leveling off.

![](https://i.imgur.com/tzF57TL.png)

- With the total amount of trading activity, DAI liquidity has come up a little bit. The volume on Uniswap has come up a bit, but Uniswap hasn't been a huge participant in this effect.

![](https://i.imgur.com/NR0M7qy.png)

- MKR liquidity hasn't moved since then. MKR that was previously removed has not been placed back on Uniswap.

![](https://i.imgur.com/0DcpFG9.png)

- Fair amount of auctions in the last 24-48 hours as seen on [Daiauctions.com](https://daiauctions.com/)

#### Risk Questions and Discussion

[1:14:50](https://youtu.be/6APWQZ_7y2g?t=4490)

- R: Do we know why dYdX is represented so prominently?
  - V: Yes, there is a lot of discussion on this. A lot of people are discussing potential liquidation of riskier margin positions. Also, I think, in general, dYdX tends to be the platform of choice for higher risk, higher yield, short-term trades. We've learned that Maker is nestled into this longer-term position, where Compound is usually where people refinance when rates are better.

### Primoz

#### Migration Analysis

[1:19:18](https://youtu.be/6APWQZ_7y2g?t=4755)

![](https://i.imgur.com/sIc20PK.png)

- Increase of SAI in the migration contract in the last couple of days. SAI supply hasn't really increased, which tells us that SAI holders are migrating.

![](https://i.imgur.com/jP4l8Bm.png)

- Red bars indicate SAI supply over the last month. It dropped down to 2 Million and just a few days ago reached 5 Million SAI. This is the second-highest inventory we've seen since the migration started. In mid-January, it reached an all-time-high but was quickly drained down because of migrations. Currently, we haven't seen much drainage, which means SCD CDP's are not using that inventory or are not in such a rush to repay their debts as they were in earlier stages of the migration.

![](https://i.imgur.com/8JsMfQj.png)

- SAI to DAI has not seen much increase except for on the last day, where a larger inflow of SAI in the migration contract can be seen. In the last month, about 300,000 SAI has been migrated daily to be converted into DAI.

![](https://i.imgur.com/3KAQRtC.png)

- In the last month, about 13 Million SAI has been converted into DAI. 10 Million SAI is accounted for in migration changes. The remaining 3 Million Sai has been accumulated through a reverse migration. By this process, people are minting DAI, converting it to SAI through the migration contract, and then using it for various reasons (providing liquidity, bidding on a premium once liquidations happened, etc.).
- 6.3 Million SCD CDP's have been repaid. This is higher than the SAI supply drop because we have also had an additional 1 million SAI minting in this month.
  - 300,000 SAI came from new CDP's in that period, and around 700,00 SAI was minted from old CDP's.
- 300 CDP's did repayment, about 200 migrated directly. 457,000 in outstanding fees were collected, about 600,000 in fees, which is high in value when compared to MCD net fees adjusted for DSR. About 1.3 Million in fees are left for the period before the migration started. 20% of outstanding fees were paid in one month, which is not a low figure at all.
- Most of the repayment was made by the larger CDP's. The eight largest CDP's repaid 350,000 in this month. Most of these repayments have been made at the beginning of the month.

![](https://i.imgur.com/JgSxXqh.png)

- A small number of smaller CDP's repaid using the migration tool. Only 2-3 CDP's migrating per day.

![](https://i.imgur.com/IOj8Azd.png)

- 54.89% of SCD CDP's are still inactive, as compared to one month ago. This represents 1.3 million in fees. The active SCD CDP's still owe about 9 million in debt and about 600,000 in fees.
- SAI minting corresponds to general debt repayment in all groups in the active group except for those with `wipe` activities, which are more aggressive and clearly want to repay their debt.

![](https://i.imgur.com/aVQp5jL.png)

- Larger DAI CDP's hold most of the debt and fees. Most have been inactive for about three months.

![](https://i.imgur.com/ppOgNT2.png)

- Sai held in the migration contract represents a quarter of all supply. Not as many large Sai holders, the second largest is Compound, which holds about 1.1 million Sai. Uniswap and Karbo hold about 0.5 million in Sai.

![](https://i.imgur.com/hfF15Gr.png)

- The share of active wallets is dropping, which means the share of inactive wallets is rising. Wallets that are inactive for more than six months represent more than 12 million Sai. This is the same number that the CDP borrows owe in inactive wallets, and maybe the lower bound for debt owed.

## Insights

- Migration looked great in the last month, but this last week saw a great slow down. This should be something to monitor.

#### Migration Questions and Discussion

[1:31:14](https://youtu.be/6APWQZ_7y2g?t=5460)

- Vishesh: Do you have a comparison between Draws and Wipes in Sai compared to Dai. You can see an asymptotic curve in Sai supply, leveling off at \$20 million. Is this an actual trend, or due to exogenous price effects due to ETH? Is this a temporary slow down or leveling off.
  - Primoz: It's hard to say, but I think it's leveling off. CDP's are, in general, inactive, so I don't believe it has to do with ETH. The situation is either forgotten wallets or people waiting and hoping for a better outcome.
  - V: That's why I was benchmarking Dai vs. Sai. Dai was growing, Sai was shrinking, but both Dai growth and Sai decrease slowed down this week. I'm interested to know whether this slow down is temporary or beginning to level off. It has to level off at some point, whether this happens now at $20 million Sai or at $12 million Sai is unknown.
  - P: There isn't much leverage in SCD anymore, and they are well protected. They don't have to make numerous repayments. It's hard to say.
  - V: I'm looking a bit further than a month, back to when migration kicked off. E.g., Dai has a linear growth trend, and Sai has a shrinking growth trend. Recently, Sai's shrinking has become logarithmic, and Dai has leveled off.

### End Discussion

#### Links from the Chat

- [Augurs voter message solution](https://reporters.chat/)
- [Forum post on the Governance Oracle](https://forum.makerdao.com/t/governance-oracle/1367)
- [Nik's Oracle Presentation](https://drive.google.com/file/d/1CS7q32k_TovQuOmZTL9yIcx79MWktzOA/view?usp=sharing)

## Credits

- Tim Black produced this summary.
- David Utrobin produced this summary.
- Igor Teslya produced this summary.
- Everyone who spoke and presented on the call (listed in the headers.)
