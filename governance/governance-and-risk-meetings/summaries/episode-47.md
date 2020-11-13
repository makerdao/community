# Episode 47: August 08, 2019

## Agenda

- [00:00](https://youtu.be/OuEtRG9rWIo?t=4): Intro from Rich Brown
- [14:16](https://youtu.be/OuEtRG9rWIo?t=857): Asset Priority List Recap from Cyrus
- [30:00](https://youtu.be/OuEtRG9rWIo?t=1808): Governance Portal Upgrade Recap from Chris B
- [42:00](https://youtu.be/OuEtRG9rWIo?t=2520): Recap of Forum Topics from David Utrobin
- [45:16](https://youtu.be/OuEtRG9rWIo?t=2719): State of the Peg from Vishesh

### Rich

#### Summary & Introduction [00:00](https://youtu.be/OuEtRG9rWIo?t=4)

- Give us feedback about the call.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

#### Governance [02:31](https://youtu.be/OuEtRG9rWIo?t=151)

- We've been iterating on what the Governance process looks like. Happily the process is improving all the time. So long as we keep iterating and improving, we are doing a great job in my opinion. Improvement by iteration is the only way forward.
- We've been talking about the Asset Priority Poll for a couple of weeks now. Through the [Governance Thread discussion and polls](https://forum.makerdao.com/t/the-asset-priority-poll-august-12-at-4pm-utc/217) we've come to an agreement on how to conduct the poll for August 12th(or early-to-mid next week).
  - 19%: Option 1, One poll for all the assets
  - **43%: Option 2, Yes/No Poll for each Asset <-- Winner!**
  - 38%: Option 3, Weighting poll for each asset
- The low voter turnout (21 voters) is worth noting. This brings up questions about whether we want to move in the direction of minimum participation necessary for things to count, etc. These are things the community needs to start thinking about.
- The philosophy of this process is worth highlighting. The Foundation provided some options, and the community gave a clear signal.
- The Foundation is dedicated to radical transparency. We want to give the community information as it comes. The problem is that there are a lot of moving pieces and because of that making predictions about release dates and other time-specific information is hard. We can do our best, but the expectations need to be set accordingly. We will soon be posting some dates about things that will need to happen pre-MCD launch, and it is important to understand that this information is subject to change: dates will be moved, things may be removed or added, etc.

### Cyrus

#### Asset Priority List [14:16](https://youtu.be/OuEtRG9rWIo?t=857)

It's important to have this list for two reasons, both concern scalability:

- _The Risk side_: There is an enormous amount of work that goes into collateral evaluations. Risk teams need to be told what they should focus on.
  - People don't realize how much work goes into collateral assessment. There is qualitative assessment and quantitative modeling involved for each individual assets. Additionally, because we are doing this in a decentralized fashion while trying to uphold the ideal of scientific governance, this adds a lot of overhead. All of this data and analysis will need to be released publicly, discussed, and voted on by Maker Governance.
  - There are currently seven collateral types in the initial potential set, but in the pipeline there are dozens of other collateral assets ready to be added as well.
  - Until we can scale out risk teams to handle more throughput for evaluations. For now it will take time to go through each asset one by one.
  - The main question this poll addresses is, "How does a risk team decide on which asset to evaluate first?"
  - Our goal in the internal risk team is to hit as many of these 7 assets before MCD launch. The process will be to go through them one by one. We would rather put out 3 high quality reports rather than putting out 7 mediocre reports.
- _The MakerDAO side_: Governance at MakerDAO has limitations for how much it can deal with at any one time. A one-by-one approach is necessary to produce high quality results.
  - It might be dangerous to add too many collateral types at once. If something goes wrong it may be difficult to concentrate and precisely figure out how to remedy issues. I recommend a slow and steady approach to adding collateral.
  - In voting on this poll, you want to think about which asset will bring MKR the most value. Value is brought by including collateral that is most likely to result in a healthy source of Dai supply.
- Asset Priority Polls will happen in the future as well with more options.

#### Questions for Cyrus

- [21:28](https://youtu.be/OuEtRG9rWIo?t=1288): What's the average time it will take to evaluate one single asset?
  - It's difficult to say because it depends on the size of the team. Currently the team is Vishesh, Primoz, and Myself. We are collaborating on the ETH risk evaluation.
  - Additionally, the way Risk models are designed to be submitted adds additional overhead. A lot of documentation needs to exist around frameworks, ideas, and academic research as well. This might be a one-time fixed cost on our side, nevertheless this is being created currently. Each additional collateral asset may move faster. Though in the future, with new asset types that require different nuances in their evaluations will have to produce documentation to make those differences public.
  - At a good level of efficiency it should take several weeks for a single asset.
  - At the same time, we don't know how long it will take the community to evaluate the evaluations. So there's some complexity that needs to be thought about.
- [25:21](https://youtu.be/OuEtRG9rWIo?t=1524): Will the different types of collateral assets be allocated by risk-weighted asset theory? And will each asset have a multiple tier structure for different CDP types?
  - If the questions is whether we are doing it like traditional asset types, then not exactly. However, there are some similarities. The model itself has some differences since crypto assets have different characteristics than other asset types.

### Chris B

#### Governance Portal Upgrade Recap [30:00](https://youtu.be/OuEtRG9rWIo?t=1808)

[Governance Portal Upgrade Blog Post](https://blog.makerdao.com/an-update-to-maker-governance-polling/)

- The first big thing we've done is moving all the polls into their own proposal pages. That way the front page can contain multiple Governance Polls comfortably. Votes happen inside of each proposal's page.
- We've added a full vote breakdown in each of these proposal pages.
- The way polling is done now: It used to use DS-Chief, which would lock up MKR restrictively in an empty `slate`. That is no longer the case. When you vote now you simply emit an event to the [Polling Emitter Contract](https://etherscan.io/address/0xF9be8F0945acDdeeDaA64DFCA5Fe9629D0CF8E5D#code). The wallet can only emit an event if it holds MKR or is linked to a wallet that holds MKR through the voting proxy contract.
- Polling stats now stay after the poll is finished. You have a full vote breakdown and history visible on each proposal page.
- Polling details are now verifiable in a decentralized fashion. All the content for given proposals is now hosted outside of Maker, on GitHub. Additionally, the Event Emitter Contract takes a hash of the URL and content of the poll each time a vote occurs. This allows anyone to verify the details of any given poll any time in the future. See [example](<https://github.com/makerdao/community/blob/master/governance/polls/Stability%20Fee%20Adjustment%20(August%205%202019).md>)
- This upgrade was for Governance Polling, the team is actively working to improve the Executive voting as well.

#### Questions for Chris

- [38:04](https://youtu.be/OuEtRG9rWIo?t=2284): We've been having a discussion about how to deal with MKR left in old proposals. Is that issue addressed in this upgrade?
  - This is not dealt with in the current upgrade. We are looking at this issue as part of an upgrade on Executive voting, post-MCD launch.

### David

#### Forum Activity Recap [42:00](https://youtu.be/OuEtRG9rWIo?t=2520)

[Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)

- [Signalling Guidelines](https://forum.makerdao.com/t/signalling-guidelines/223)
  - In this thread LongforWisdom summarizes the older [Meta-Governance thread](https://forum.makerdao.com/t/meta-governance-signal-requests/55) in a Guidelines format. Seeking consensus on a canonical set of guidelines around signaling on this forum. Are these good guidelines? What else should we include?
- [The Asset Priority Poll, August 12 at 4pm UTC](https://forum.makerdao.com/t/the-asset-priority-poll-august-12-at-4pm-utc/217)
  - Seeking consensus on the form of the coming on-chain poll for prioritization of collateral assets. Which of these suggested options do we like, what pitfalls do we need to be aware of?
  - This is simply establishing the order of work to be done leading up to MCD launch. No commitments.
  - Option #2: Yes/No poll for each asset is winning. This allows voters to express their interest for each asset. The total MKR staked for NO would cancel out MKR staked for YES for each token. If a large MKR holder votes No to all of them we would order by least negative votes.
- [Twitter account @mkrgov to keep MKR holders updated and involved in regards to governance](https://forum.makerdao.com/t/twitter-account-mkrgov-to-keep-mkr-holders-updated-and-involved-in-regards-to-governance/174)
  - There are resources from the Foundation available for anyone willing to build this for the community! Contact [Rich](https://twitter.com/richatmakerdao) if you are interested.
  - Vishesh's team is also looking into this.

### Vishesh

#### Dai Analytics [45:16](https://youtu.be/OuEtRG9rWIo?t=2719)

##### Relevant links

[Graphs about Maker](http://makerdao.descipher.io/)
[Graphs about DeFi Loans](http://loans.descipher.io/)
[DAI 24hr VWAP Graph](http://dai.descipher.io/)

##### Dai Price: [46:12](https://youtu.be/OuEtRG9rWIo?t=2773)

- **Dai price has been stable at \$1, with light trading low volumes over the last couple of weeks.**
- 14MM in trading volume over the last 7 days. Most of that trading happened almost exactly at 1\$, or very slightly below. Average 2MM volume per day.
- Eth price has been consistently low. What we've probably encountered is some fatigue from leveraged positions. The amount of debt wiped over the last couple of weeks has ticked up, though the amount of debt that has been issued has been relatively steady. This means the supply has come down fairly significantly.

##### Dai Supply: [47:54](https://youtu.be/OuEtRG9rWIo?t=2881)

- The supply drop to 77MM, down from 96MM, can be explained by both refinancing as well as a lowering of overall Dai demand.
- It's more than likely that that demand loss, given the way the collateralization has moved, is just a reflection of lower demand for leverage.
- Transaction volumes have been steady over the past month or so.
- It's important to consider what causes Dai demand, because we've entered a bit of a period of stagnation.

##### Collateralization Ratio: [48:45](https://youtu.be/OuEtRG9rWIo?t=2928)

- The amount of ETH locked has come down a bit, in lockstep with overall supply dropping. We are now holding steady at a ~360% overall Collateralization Ratio.
- Not a lot of movement in collateralization, generally. The downward movement of supply and overall demand seems like a reduction of leverage behavior.

##### Secondary Lending Platforms: [50:32](https://youtu.be/OuEtRG9rWIo?t=3032)

- What we had seen in mid-July was the weights and the utilization shooting up significantly, partly as a function of refinancing ease through InstaDapp.
- Beforehand people were not taking as much advantage because of UX friction, knowledge, etc.
- The utilization has leveled out a bit, so the only explanation for the drop in utilization along with supply means there must have been some reduction in demand for leverage positions.
- When you see disproportionate changes between dYdC and Compound, it's important to understand dYdX's market fit. It is used for different reasons than compound generally. dYdX is a platform for users who are specifically looking for tools that provide them with leverage. Many of these users are looking for short-term plays and are willing to pay higher borrowing costs.
- Compound has been a de-facto cheaper version of Maker where people can source excess Dai for cheaper than MakerDAO.

##### Circulation & Age of Debt: [56:25](https://youtu.be/OuEtRG9rWIo?t=3387)

- Since mid to late July unpaid fees have increased compared to paid fees. Though there seems to be a step function for paid fees, as ETH is more volatile we will see more churn/circulation in debt which results in more paid fees. Eth being stable has resulted in flat behavior.

#### Questions to Vishesh

- [57:53](https://youtu.be/OuEtRG9rWIo?t=3475): Do you have a theory for why more people aren't refinancing from Maker to Compound, now that the rate for borrowing is significantly lower?
  - The market moves a bit slow, and I think it takes some time before people look at consistency in rates and decide to refinance. I think we will see more refinancing over the coming days if the rate stays lower for borrowing.

#### Links from the Chat

- [Graphs about Maker](http://makerdao.descipher.io/)
- [Graphs about DeFi Loans](http://loans.descipher.io/)
- [DAI 24hr VWAP Graph](http://dai.descipher.io/)
- [An update on MakerDAO Governance Polling](https://blog.makerdao.com/an-update-to-maker-governance-polling/)
- [Signalling Guidelines](https://forum.makerdao.com/t/signalling-guidelines/223)
- [The Asset Priority Poll, August 12 at 4pm UTC](https://forum.makerdao.com/t/the-asset-priority-poll-august-12-at-4pm-utc/217)
- [Twitterbot Thread](https://forum.makerdao.com/t/twitter-account-mkrgov-to-keep-mkr-holders-updated-and-involved-in-regards-to-governance/174)
- [Polling Emitter Contract](https://etherscan.io/address/0xF9be8F0945acDdeeDaA64DFCA5Fe9629D0CF8E5D#code)
