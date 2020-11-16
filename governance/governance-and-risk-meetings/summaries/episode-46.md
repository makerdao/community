# Episode 46: August 01, 2019

## Agenda

- [00:00](https://youtu.be/aUvfcEgt0o4?t=1): Intro from Rich Brown
- [07:41](https://youtu.be/aUvfcEgt0o4?t=461): Recap of Forum Topics from David Utrobin
- [12:47](https://youtu.be/aUvfcEgt0o4?t=768): MakerDAO metrics platform in collaboration with Santiment from Primoz Kordez
- [44:22](https://youtu.be/aUvfcEgt0o4?t=2661): Analysis from Vishesh

### Rich: Summary & Introduction [00:00](https://youtu.be/aUvfcEgt0o4?t=1)

- One of the first major items on our roadmap is coming up: The asset priority poll is a mechanism which will allow the community to surface signal which assets they want to be focused on first.
  - [Discussion about how to do the poll](https://forum.makerdao.com/t/the-asset-priority-poll-august-12-at-4pm-utc/217)
  - We have never tried to poll for priority, so some consideration about how to do this is needed. We are seeking consensus from the community through the thread above. There is a poll that will determine how we format the poll.
  - This is an example of an emergent process that we as a group are trying to figure out.
  - The new poll will go live on August 12th. Before this happens the new version of the portal will be out. Chis will join us in the call next week to talk about the changes.
- Give us feedback about the call.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

### David: Forum Activity Recap [07:41](https://youtu.be/aUvfcEgt0o4?t=461)

I will not cover all the threads, only new ones that's have been added this week. For a recap of older threads you can look at the previous meeting or just check out the [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84) yourself.

- [An Explanation of Continuous Voting and the Peculiarities of the 7/26 Executive Stability Fee Vote](https://forum.makerdao.com/t/an-explanation-of-continuous-voting-and-the-peculiarities-of-the-7-26-executive-stability-fee-vote/193)
  - Contains a brief summary of how passing a vote actually works.
  - The most recent executive vote on 7/19 passed with ~32k MKR. The 7/19 proposal passed because it had more votes than the current hat; however, since then someone has moved an old proposal with 78k MKR to the current `hat`. Now voters need to beat 78k MKR in order to pass a vote.
  - This is an issue of UX and friction rather than a real risk. This will require more MKR to be rallied to vote if we want changes passed(which is not necessarily a bad thing).
  - The issue is that forgotten MKR voting on old proposals creates a blocker on new Executive proposals that want to get passed.
- [Twitter account @mkrgov to keep MKR holders updated and involved in regards to governance](https://forum.makerdao.com/t/twitter-account-mkrgov-to-keep-mkr-holders-updated-and-involved-in-regards-to-governance/174)
  - Idea for a bot on twitter that tweets governance updates.
  - Marc, creator of @MakerDaiBot said he was looking into it.
  - Would increase visibility of Maker Governance to the MKR holders who don't necessarily spend a lot of time on the forums or calls.
  - Gives one more location for information to propagate from.

## Analytics

### Primoz Kordez: MakerDAO metrics platform in collaboration with Santiment [12:47](https://youtu.be/aUvfcEgt0o4?t=768)

The company I run is called BlockAnalytica. We work together with Vishesh and Cyrus for some time helping to develop the risk model for MakerDAO. During this time I came across Santiment which was able to provide me with technical support for building this platform which I will present now.

#### Relevant Links

- [Santiment MakerDAO Stats](https://graphs.santiment.net/makerdao)

#### Analysis

- Network Activity Section (Dai)
  - Daily Active Addresses Graph shows increasing number of active addresses. 2k before the recent spike caused by the Coinbase promotion.
  - Network growth(daily new Dai wallets) is also on an upward trend.
  - Rising transaction volume spikes seem to correlate with upward movements in Dai price. This is likely from increased trading volume when people are buying Dai.
  - Mean transaction value approximately 3k-5k, median transaction value is around 2k.
  - Daily Token Circulation graph shows the amount of tokens that circulate every day. This figure is approximately 5% of the total supply per day. In comparison to ETH's 2% velocity, 5% is pretty high for a token. Dai is doing well as a `Medium of Exchange` token.
- CDP Stats
  - In this section we wanted to show CDP activity like `locks`, `frees`, `wipes`, `draws`, and so on. These graphs can overlay the ETH price and user behavior can be viewed in this section.
  - You can also choose to denominate the graphs in ETH or Dai value.
  - Coinbase effect shows a lot of locks recently, but as you see from the value of collateral it is not much.
  - Recently many larger CDPs freed collateral, likely connected to refinancing to Secondary Lending Platforms.
  - Before the Coinbase boom, we saw between 20 and 30 new CDPs every day.
  - There is also a graph of Collateral locked in CDPs which categorizes CDPs according to different collateral amounts. We can see through this graph that whales were the main reason for total collateral in the system to drop over the past few months.
  - There is a graph for Stability Fees paid. We recently had a record from one of the CDPs, 135k in fees paid. What's interesting is that he paid his fee in Dai, so this event might have caused MKR price to go up.
  - We have a `bites` graph as well, which is connected with the activity of recent liquidations. We can see the volume is less than last year, however the number of overall bites is higher. Most of the liquidations that happened recently affected smaller CDPs, where in the history larger CDPs were liquidated. It looks like large CDPs learned their lesson and are not taking on as much risk as in the past.
  - We have individual graphs for each action type, and it is color categorized for various CDP sizes.
- Collateral Stats
  - This section covers Dai supply, Eth locked in CDPs, Collateralization Ratio, and more.
  - We have a chart called Nominal Collateralization Ratio. It checks the amount of Ether versus Dai supply. It isolates from Ether price, which helps us see user behavior more clearly. When ETH was dropping we can see users added collateral. Once ETH began rising users freed collateral.
  - We also have Collateralization Ratio graph which includes indicators for different CDP sizes.
  - The Collateral Circulation graph is meant to try to show how much Dai issued from CDPs is converted to ETH and placed into CDPs. We try to answer the question, how much ETH locked in MakerDAO is on leverage. You can see the ratio being between 10-30%. This can be used to detect when people are bullish and taking on more leverage.
- DAI & MKR Holder Structure
  - We have balances of Dai or MKR held. This comes handy when you want to identify Dai demand. I will present Dai now.
  - Holders of Dai are differentiated by groups based on amount of Dai held.
  - Total Holders Balance graph is interesting because it shows which category of user/wallet is holding how much Dai. You can actually see that when total Dai supply falls it is usually the largest Dai holders who have corresponding drops in Dai held. This tells us that they might be market makers. It could be good proxy to measure Market Maker inventories.
  - We have a Holders Breakdown graph which classifies addresses that hold Dai into various categories like `Derivatives`, `Loan/Margin`, `Payment Providers`, `Sidechain`, `Bounties`, `Treasury`, `CEX`, `DEX` and more. We were able to categorize almost one third of all addresses that hold Dai. These categories can be opened up and broken down into their sub-parts with the tool directly below the Holders Breakdown graph.
- CDP Owner Balances
  - We want to see how much spare capital CDP owners have. You can imagine a CDP owner has an address from which they issue Dai, but he may have spare assets on the sidelines. This gives us better understanding of risk for individual CDP owners.
- Social Stats
  - This section is pure sentiment analysis from various sources on the web.
  - Reddit is best, it gives you most inputs. The algorithm takes comments and assigns them as positive or negative. We can see it is accurate because during the period of Dai trading below the peg, between Jan 2019 and June 2019, the sentiment was low as many people were complaining and posting negative comments about Dai.
  - You can play around with this by choosing the source, the project, the time period, etc.
- MKR Stats
  - We are still working on this section. It covers stats around the MKR token like Active Supply, Annual Burn Rate, Stability Fees paid, and soon more.
  - This section is underdeveloped compared to the rest for now.

#### Questions for Primoz

- What is smoothing?
  - Forming the data into a Moving Average.
- [01:11:28](https://youtu.be/aUvfcEgt0o4?t=4288) Vishesh: One of the things I've been looking at is transaction volume of Dai, which has picked up significantly, especially compared to trading volume of Dai. To me this is primarily a result of usage in smart contracts and Dai being passed back and forth through the DeFi ecosystem. However one of the metrics I've tracked is the amount of Dai held by CDP owners, and so its interesting then to complete the selling Dai for ETH cycle. You had mentioned that one of the metrics that you were tracking was the address that own CDPs that take their Dai and sell it for ETH as leveraging behavior. I've found that very low, ATH 4%, is actually held by CDP owner addresses. Can you answer how you think about how this Dai moves hands?
  - The inventory that you are taking about is very low, and I guess that the inventory gets higher when they are leveraging more. Some CDPs are very sophisticated in that they do a transaction where they do a leveraged draw in a single block. However some trade it very slowly, so they will draw Dai and incrementally sell it for ETH so as not to incur slippage losses.

### Vishesh: Dai Analytics [44:22](https://youtu.be/aUvfcEgt0o4?t=2661)

#### Relevant links

[Graphs about Maker](http://makerdao.descipher.io/)
[Graphs about DeFi Loans](http://loans.descipher.io/)
[DAI 24hr VWAP Graph](http://dai.descipher.io/)

#### Dai Price & Supply

- Spread has been evenly distributed around \$1. Over the last week we have had a net stable peg.
- The Dai supply has stopped dropping and has leveled off at around 77MM.

#### NEW THIS WEEK: CDP Risk [45:32](https://youtu.be/aUvfcEgt0o4?t=2732)

![](https://i.imgur.com/Wv2VVQX.jpg)
![](https://i.imgur.com/YQx5yLP.jpg)

- I stratified the Dai supply by Collateralization Ratio buckets. These CR buckets can be thought of as having varying levels of risk.
- It shows that the overall Collateralization Ratio doesn't tell the whole story. Risk is actually weighted more heavily on CDPs with the lower collateralization ratios.
- What we really want to be visualizing is how much debt is living in the red zone. Seeing how much Dai is sitting at below 250 or 200% can be a better metric by which to judge the risk of the system.
- With deeper investigation it's possible to see if Secondary Lending Platforms took a proportionally riskier share of the Dai debt. This theory would make sense because of lower collateral requirements, liquidation penalties, etc.
- The aggregate amount of unpaid fees has continued to grow. There was a huge spike in the amount of paid fees in Mid-July.
- The rapid increase of paid fees narrowed the spread between paid and unpaid fees.

#### Stability Fees: [49:39](https://youtu.be/aUvfcEgt0o4?t=2979)

- The aggregate amount of unpaid fees has continued to grow, but has actually dipped a bit alongside a huge spike in the amount of paid fees in mid-July. This corresponds to the mass refinancing that recently happened from Maker to Compound.
- Paid fees have shot up and re-paced themselves with the rate of accruing unpaid fees.
- An [analysis](https://chat.makerdao.com/channel/governance-and-risk?msg=zEPpk7Z8T3gLB5rkx) was done on the topic of unpaid fees versus cost of liquidation. It was shown that there are no CDPs that even come close to having the liquidation penalty be smaller than the unpaid fees on given CDPs.
- These are positive stats.

#### Secondary Lending Platforms: [51:29](https://youtu.be/aUvfcEgt0o4?t=3089)

- Rates have begun to come back down again. Utilization has lowered as well.
- The Dai supply overall has gone down as the 20.5% SF has remained so there was no clear change that would have changed things for SLPs. This change is likely a result of some deleveraging: people paying back loans on Compound while borrow volume overall has not increased to offset it.
- Excess supply on SLPs shot up without new Dai being reflected in the overall Dai supply, which signifies deleveraging.

#### Questions to Vishesh

- [01:06:09](https://youtu.be/aUvfcEgt0o4?t=3969): Does more excess Dai supply on SLPs without a corresponding rise in Dai supply mean that refinancing will be attractive and further pull Dai supply down?
  - The first thing to think about is the pathway for obtaining these assets and knowing how they end up where they do is extremely important for understanding this question. For example, if supply is actually contracting and at the end of the day the amount of Dai that lives on Maker has not significantly changed and the amount of Dai borrowed on SLPs hasn't changed, then you have to think about what did change. This points us to Primoz's graphs on leverage behavior of CDP users, CDP distribution, and ETH to Dai trade volume. In the last 7 days about 28MM Dai sold for ETH. That's not insignificant for a 7 days period, but there is very little price movement. I think the most reasonable prediction is that there was deleveraging and that is why we see rising excess supply.
  - I think we will oscillate through this cycle continuously since it brings oversupply to the front and gets rid of it through a Refi opportunity. I think it's an indicator that some oversupply does exist, and as a result of the overall Dai supply drop demand did take a hit.

### Matthew Rabinowitz: Weekly Narrative [54:44](https://youtu.be/aUvfcEgt0o4?t=3287)

- The main point is related to the voting issue that was referencing earlier in the call during the forum recap. As time goes on, the problem of latent MKR becomes larger. This is why there is appetite for some sort of time-limit for MKR to sit in old proposals, whereby after _t_ time the latent MKR would be expelled from old proposals.
- In the scenario we have right now, 78k MKR committed to an old proposal, that is something the current voters can definitely overcome. However, as time goes on this issue becomes harder and harder to deal with.
- Our bandwidth for voting is also a concern, since it takes a long time for us to decide and set votes based on a single-vote cadence. This should be solved with the Governance Portal update coming soon.
  - Rich says, "98% confidence level that the updated governance poral will be out next week."
  - With the portal we will need to dig through the forum and find the polls that we want to air officially. We will have a lot of work to do around securing soft consensus with the new robustness of the Governance Portal's polling system.

#### Links from the Chat

- [Graphs about Maker](http://makerdao.descipher.io/)
- [Graphs about DeFi Loans](http://loans.descipher.io/)
- [DAI 24hr VWAP Graph](http://dai.descipher.io/)
- [Santiment MakerDAO Stats](https://graphs.santiment.net/makerdao)
