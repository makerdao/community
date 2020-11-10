# Episode 43: July 11, 2019

## Agenda

- [00:00](https://youtu.be/DlH0bMvqO9w?t=4): Intro from Rich Brown: Workflows and emergent process: How calls, forums, VCS, and portals complement each other
- [13:20](https://youtu.be/DlH0bMvqO9w?t=798): Cyrus's Presentation: Quantitative Modeling and the Stability Fee
- [57:28](https://youtu.be/DlH0bMvqO9w?t=3448): Dai Analysis from Vishesh

## Summary & Introduction

### Rich [00:00](https://youtu.be/DlH0bMvqO9w?t=4)

- Discussion about things in the call continue in the [forum](https://forum.makerdao.com/)
- Don't be hesitant to give us feedback, questions, comments, and concerns about these calls and conversations!
- This is not a governance committee, we don't decide things on this call. This where we debate things, talk about trends, clear up misconceptions, present analytics, and so on.
- We have a new [forum](https://forum.makerdao.com/) that was long overdue. It's turning out great, there's a ton of activity going on.
- I want to talk about emergent processes and workflows in the community:
  - Important questions to think about: How do we surface valuable information? How do we collect this information? Where does this information live?
  - Calls are good, but the conversations aren't easily referenceable and the info isn't as comprehensive as it could be in writing. Other mediums are better.
  - The chats and forums have the meat of the conversations. However, the chats are temporal while the forum has better visibility over time. The next place to make materials more canonical is importing them into the MakerDAO community GitHub. The details of that will be hashed out through a thread that will be posted soon on the forum.
- [01:01:15](https://youtu.be/DlH0bMvqO9w?t=3676): Discussion about Debt Ceiling and seeking consensus to change the Gov poll in the coming weeks for a Debt Ceiling vote.

### Cyrus: Quantitative Modeling: [13:20](https://youtu.be/DlH0bMvqO9w?t=798)

- We will finish up and recap the Stability Fee model today.

#### Review Slides

![Aside 1](https://i.imgur.com/Qx6nMqr.jpg)
![Aside 2](https://i.imgur.com/BGTlED1.jpg)
![Aside 3](https://i.imgur.com/BKRK7yP.jpg)

- The right hand side of the 3rd slide was almost never discussed. All of our decision making around the SF was based on Monetary Policy. The Risk Premium Rate was never talked about as part of the current Stability Fee, in SCD.
- In the end, borrowers only care about the total stability fee. Breaking it down into smaller components may complicate analysis.

![Subsidies/Penalties](https://i.imgur.com/kKafkXm.jpg)

- [21:35](https://youtu.be/DlH0bMvqO9w?t=1298): Alex Evans confirming a point
- [22:35](https://youtu.be/DlH0bMvqO9w?t=1351): Matthew R talking about pricing the Risk Premium Rate correctly.
- [24:00](https://youtu.be/DlH0bMvqO9w?t=1444): Vishesh advocating for setting a plan to correct mispriced RPRs.

#### Single CDP Credit Risk Model: [30:37](https://youtu.be/DlH0bMvqO9w?t=1837)

![Recap](https://i.imgur.com/teF1dUW.jpg)

![Risk Premium Rate review](https://i.imgur.com/axmNyFH.jpg)

![General Credit Risk](https://i.imgur.com/YbLAiil.jpg)

![Eth CDP Credit Risk Review](https://i.imgur.com/WdlInlr.jpg)

![Risk Rating](https://i.imgur.com/zvuaUuC.jpg)

![Eth CDP Credit Risk Review 2](https://i.imgur.com/ruO6pvP.jpg)

![Simulation](https://i.imgur.com/6SNdC5t.jpg)

![Visual representation of stochastic simulation](https://i.imgur.com/c0KhVGy.jpg)

![EL to RPR](https://i.imgur.com/0o4uj5H.jpg)

![Implicit Put Option](https://i.imgur.com/xsTOp1u.jpg)

![No Arb Argument](https://i.imgur.com/WERrzQz.jpg)

![Volatility](https://i.imgur.com/NjqKgxH.jpg)

![Trigger research](https://i.imgur.com/CBfUE9Q.jpg)

![Complexity and areas for further research](https://i.imgur.com/cjBPtpm.jpg)

![Additional Details](https://i.imgur.com/JdmKUAW.jpg)

![Next Steps and Community Outreach](https://i.imgur.com/avMcBJQ.jpg)

#### Question & Discussion points for Cyrus

- [44:09](https://youtu.be/DlH0bMvqO9w?t=2649): Alex Evans comments about put option comparison.
- [53:53](https://youtu.be/DlH0bMvqO9w?t=3236): Matthew R asks, "How much of our risk work do we outsource when it comes to known collaterals with credit ratings else ware?"

## Risk

### Vishesh: Analytics on Monetary Policy [57:28](https://youtu.be/DlH0bMvqO9w?t=3448)

- [Graphs about Maker](http://makerdao.descipher.io/)
- [Graphs about DeFi Loans](http://loans.descipher.io/)
- [DAI 24hr VWAP Graph](http://dai.descipher.io/)

#### Dai Price: [57:28](https://youtu.be/DlH0bMvqO9w?t=3448)

- There was discussion about whether Dai would recover on its own. Governance decided not to wait, increasing the SF to 18.5%.
- 24 VWAP is consistently below $1 (at $0.98 level), with increased volume generally.
- The ETH price for the majority of June was going up, and at the tail end took a hit. Dai price did almost the same, it was steady and dropped with ETH.

#### Dai Supply: [01:18:15](https://youtu.be/DlH0bMvqO9w?t=4698)

- We saw supply increase despite the increased Stability Fee.
- We leveled out around 91.3MM so far.
- More Dai is being drawn from new CDPs rather than old this month, which makes sense.
- [01:22:30](https://youtu.be/DlH0bMvqO9w?t=4950): Excess supply graph is the amount of Dai not being borrowed on secondary lending platforms. Excess supply has increased since late June.

#### Age of Debt: [01:29:28](https://youtu.be/DlH0bMvqO9w?t=4768)

- The age of open debt has consistently decreased, while closed debt has maintained steady. This means that while new debt is being created, older debt is maintaining the same average open days.

#### Collateralization Ratio: [01:20:13](https://youtu.be/DlH0bMvqO9w?t=4818)

- When we see the collateralization ratio move down with ETH it tends to cause users to top up their CDPs, this is why the move downward seems muted. Conversely, when ETH goes up users are not too quick to pull collateral out of their CDPs in anticipation of a correction.

#### Secondary Lending Platforms: [01:21:42](https://youtu.be/DlH0bMvqO9w?t=4902)

- WABR has been hovering below the Stability Fee, in a very tight spread.
- Supply volume has outpaced borrow volume.
- When SF or other policy changes happen, we need to wait some time before we see the effects.

#### Other

- We reached 360MM total loans originated to date.
- [01:23:50](https://youtu.be/DlH0bMvqO9w?t=5031): Graph of the Utilization Rate of Dai. Meant to try to see whether there is a relationship between rates on SLPs and the Stability Fee.
- Dai txs even outside of trading volume have picked up a lot. They've outpaced trading volume of Dai.
- There were some liquidations with this latest price drop, but overall they were not huge compared to past drop offs.

#### Links from the Chat

- [Graphs about Maker](http://makerdao.descipher.io/)
- [Graphs about DeFi Loans](http://loans.descipher.io/)
- [DAI 24hr VWAP Graph](http://dai.descipher.io/)
