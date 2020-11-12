# Episode 52: September 12, 2019

## Agenda

- [00:00](https://youtu.be/gqVnwOL42hQ?t=4): Intro with Rich Brown
- [05:40](https://youtu.be/gqVnwOL42hQ?t=339): Recap of Forum Topics with LongForWisdom
- [21:00](https://youtu.be/gqVnwOL42hQ?t=1270): Oracles recap with Nik
- [33:39](https://youtu.be/gqVnwOL42hQ?t=2019): DSR discussion with Cyrus
- [42:50](https://youtu.be/gqVnwOL42hQ?t=2569): Dai Market Analysis with Vishesh
- [01:00:01](https://youtu.be/gqVnwOL42hQ?t=3605): Post-call discussion with Cyrus

### Terms

`SF`: Stability Fee
`SLP`: Secondary Lending Platform
`DSR`: Dai Savings Rate

## Introduction and Governance

### Rich

#### Summary & Introduction [00:00](https://youtu.be/gqVnwOL42hQ?t=4)

- As our governance ecosystem becomes more sophisticated, we will be diversifying this call and expanding the scope of the things we talk about.
- Today we have governance, a recap of the Forum activity, Oracles, and Risk.
- Give us feedback about the call.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

#### Governance

- Good news, the Governance Facilitator role passed with a 99.9% approval rating, while the Risk Team mandate passed with a 100% approval rating.
- We've had movement forward on questions about [cadence of SF adjustments](https://forum.makerdao.com/t/should-we-change-the-stability-fee-poll-cadence/395) and also about the [rate stepping levels in the SF adjustment votes](https://forum.makerdao.com/t/signal-request-should-we-move-to-exponential-rate-stepping-for-stability-fee-polls/40/20?u=davidutro).
- MKR holders have continued to lower the SF. This shows their interest in managing monetary policy effectively, rather than keeping rates high because of greed, which was a recurring criticism when the rates began to rise over the course of this year.
- The Governance Poll for SF passed with another 2% decrease to 12.5%

### LongForWisdom

#### Forum Activity Recap [05:40](https://youtu.be/gqVnwOL42hQ?t=339)

- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
- [Cyrus recently posted about DSR Initial values](https://forum.makerdao.com/t/an-update-on-dsr-and-initial-values/433)
  - This thread is open for feedback and discussion.
- [Current Signaling Process: regarding issues and the forum polls](https://forum.makerdao.com/t/current-signaling-process/396)
  - This thread outlines the current signaling process as LFW sees its. Agree? Disagree? Share your thoughts here.
  - Suggestion to split the process into three stages which are outlined in the thread.
- [TUSD - Adding as collateral to MCD](https://forum.makerdao.com/t/tusd-adding-as-collateral-to-mcd/435)
  - The team behind TUSD has completed our first collateral on-boarding request form. Do we want TUSD as collateral for MCD? What are the pros and cons?
- [Signal Request: Should we move to exponential rate stepping for stability fee polls?](https://forum.makerdao.com/t/signal-request-should-we-move-to-exponential-rate-stepping-for-stability-fee-polls/40)
  - A significant amount of people voted to have this put on-chain as a Governance Poll
  - Conversations are ongoing of what the standard is for getting the Foundation to put the poll up. Rich hopes that once consensus has been established that a timer starts and perhaps the next week the poll would go up.
  - Rich: I want the community to consider that even if there isn't overwhelming support in the forum, there still might be value in putting something up to a Governance Poll for MKR holders to vote on.

## Oracles

### Nik

#### Recap [21:00](https://youtu.be/gqVnwOL42hQ?t=1270)

- Last week we talked about the Oracle ecosystem within the Maker protocol, the different facets, and about four different proposals for the community to consider.
  - I am on track to publish some of these proposals on the forum by today or tomorrow.
  - They will be located in both the Governance and Oracle section of the forum.
- I want to touch on a few questions regarding why we're doing this, and why now:
  - The oracles were always meant to be handed over to governance as a part of the gradual decentralization commitment from the Foundation
  - In particular, I think the most confusing proposal was the one talking about incentives (see diagram below).

![](https://i.imgur.com/fxRflsR.png)

- [24:42](https://youtu.be/gqVnwOL42hQ?t=1483): In regards to this diagram, which is part of the Oracle Incentives Restructuring proposal (**Proposal 4**):
  - Definitions:
    - `Feed`: an individual who is running a bot that is pushing price updates for an asset.
    - `Oracle`: a smart contract, on-chain, that other smart contracts can query for a price.
    - `Whitelist`: a list of smart-contract addresses that governance controls that can read prices from Oracles.
    - `Oracles` receive inputs from the `Feeds` and publishes the median value.
  - Bottom left to the top are the MKR holders who pay feeds.
  - Top to the bottom right illustrates the relationship of data consumers using data provided by the feeds, ultimately through the Oracle for a given asset.
  - Bottom right to bottom left illustrates the idea that data consumers will compensate MKR token holders for providing the data for them through their Oracles.
  - The proposal is that Oracles are private and can only provide data to whitelisted consumers of the data.
  - Why did we set it up that way? The main two reasons are sustainability and decentralization.
    - Currently, the Devfund is paying feeds for their service. Eventually, MKR holders will take on that cost using the Stability Fees. If MKR holders are spending money on feeds, they need to be able to monetize it to recoup their costs.
    - Governance controls the whitelist, and in doing so can monetize Oracles.
- There are non-monetary ways to extract value out of whitelisted Oracle access.
  - For example, a DEX out there needs Oracle prices for some margin products that they are creating. MakerDAO can say, "We will give you feeds in exchange for listing all your token pairs against Dai."
- One of the proposals, **Proposal 4.5**, was to offer Oracles free for the first year.
  - This is to give room for projects that are currently dependent on our oracles.
  - The whitelist doesn't have to be used right away; it is a tool for MKR holders to use down the road.
- The acceptance of the whitelisting proposal does not mean that it will happen from day 1. It is an explicit approval that this is the model we are moving towards.

#### Questions

- Do they have a requirement to own MKR, or to have any other reasonable motivation to provide valid price data--besides integrity?
  - Feeds get paid
  - From a technical point of view, we can aide in risk-mitigating here. Should they stake MKR? Nik believes that yes, they should stake MKR. There are a few things we can do here.

## Risk

### Cyrus

#### Dai Savings Rate [33:39](https://youtu.be/gqVnwOL42hQ?t=2019)

- We will go more in-depth next week after this material has been given some time to be exposed to the community.
- Skipping the mechanics portion of it, I will focus mainly on the governance and risk portions.
- The first major educational topic is where the DSR even comes from and how it's created.
  - The DSR has the functionality to print Dai and give it to you regardless of any exogenous factors. At first glance, this seems concerning, but in reality, the amount of DSR that is created is counted against the collected Stability Fees such that if there wasn't enough collected SFs to pay the DSR, the DSR gets recorded as bad debt and would trigger MKR dilution to cover the loss. In the end, the DSR is technically paid for by MKR holders out of SFs.
- The question posed to the community is, "what to do about that cost?" Should MKR holders absorb it? Should they pass on this cost to CDP users? Should it be a hybrid?
  - If we rely on CDP owners across the board to cover the cost, it may result in pricing out certain collateral types that would command a low-interest rate, since the market would beat our rates too easily.
  - To what extent do we allow the subsidization of the DSR by various CDP types?
  - Other questions are, how do we go about calculating and evaluating these phenomena? Will we even be able to assess whether certain collateral types have more or less of an effect on Dai price.

#### Questions

- [40:43](https://youtu.be/gqVnwOL42hQ?t=2450): Why not just start the DSR at zero and then increase it?
  - One answer to that is, under the current one-month Governance cycle we are proposing, we're not sure at what cadence the DSR adjustments would come in at.
  - If we will have frequent cadence adjustments, perhaps we can start at 0, yes.
- [01:11:17](https://youtu.be/gqVnwOL42hQ?t=4282): Do the feeds have any requirements to own MKR or any reasonable incentive to provide valid data?
  - The current incentive for them to provide valid data is that they get paid. If they fail at their job, then they can be removed from being a feed.
  - From a technology point of view, we can aide in risk-mitigating here by potentially requiring MKR staking. Partly because the more, they have to lose, and the more their integrity will be guaranteed. Then we get to the question of what the right amount of MKR is needed for them to stake, and so on.

### Vishesh

#### Dai Analytics [42:50](https://youtu.be/gqVnwOL42hQ?t=2569)

#### Relevant links

[Santiment Maker Data](https://graphs.santiment.net/makerdao)
[Graphs about Maker](http://makerdao.descipher.io/)
[Graphs about DeFi Loans](http://loans.descipher.io/)
[DAI 24hr VWAP Graph](http://dai.descipher.io/)

#### Insights

- Context: Eth price has been relatively flat for the last week or so.
  ![](https://i.imgur.com/PQuo8p6.png)
- This has been reflected in what's been going on with collateral. Collateral levels have remained fairly stable and quiet. Not much added or removed since the end of August.
  ![](https://i.imgur.com/d0QjVOW.png)
- We saw a few drops to the Stability Fee over the last few weeks. During these first few drops, we still saw a dropping Dai supply. On the most recent drops, we saw the Dai supply rising slightly. We're up a couple million in the last few days.
  ![](https://i.imgur.com/YZKshL4.png)
- Long term activity: in collateral terms, at the beginning of the year, people collateralized a lot to manage their risk. As the year has gone on, we see slowing down of locked collateral. Overall collateralization has gone down, which is seen as the spread between the red and blue lines in the graph below. However, since August, the amount being removed(blue line) had slowed down significantly, and the amount locked began to increase again.
  ![](https://i.imgur.com/4saXdWd.png)
- The amount of debt being drawn(cumulative draw) slowed down beginning in mid-July.
  ![](https://i.imgur.com/JWx9ktm.png)
- The relationship between ETH price and collateral has an inverse relationship, a phenomenon that is well known at this point(in this community). When ETH goes down, locked collateral tends to go up. When ETH goes up, locked collateral tends to go down.
  ![](https://i.imgur.com/2Q48y8R.png)
- The relationship between debt and ETH price is not straightforward. No clear correlation.
  ![](https://i.imgur.com/JGKEVEa.png)
- The Dai peg itself has been trading at 1-1.02 in the last 24 hours. 24hr Volume Weighted Average Price is 1.011 - Only about a million in trading volume, half of what we usually see on quiet days.
  ![](https://i.imgur.com/0K5EqRd.png)
- On the seven-day time scale, we see a bimodal distribution. This is because the price traded differently for a couple of days at some point during the week. - Overall, Dai price has been trading in a very narrow band with low variability.
  ![](https://i.imgur.com/QYbZYzY.png)

#### Secondary Lending Platforms: [50:47](https://youtu.be/gqVnwOL42hQ?t=3052)

- With the changes in the Stability Fees and an overall lower Dai supply, it is easier for some of these platforms to run into a crunch. SLP rates tend to respond to SF changes, though the most recent decrease did not trigger too much responsiveness.
  ![](https://i.imgur.com/xKMn5Xs.png)
- Regarding borrow volumes: - For dydx, borrow volumes rose 20-30% in the last three weeks. From 6MM to 9.5MM. - For Compound, we saw a slight loss in borrow volumes. Borrow volume for Dai has been steadily at 26-27MM for the last couple of months. - Total borrow volume has slightly increased, though comparatively pretty level.
  ![](https://i.imgur.com/tGXhE1b.png)
- Regarding supply volumes: - The total supply at the end of July was around 35MM and now is up to about 48MM. This is a significant increase that corresponds with the dropping SF as well. - Supply volumes have continued to increase steadily.
  ![](https://i.imgur.com/9l7uz5i.png)
- Excess Dai in reserves of these SLPs has been increasing while Utilization rates have been decreasing. - Utilization rates tend to stay around 70-75% - This is an interesting time we are in right now as there is a lower SF, there is more excess supply on lending platforms(Which we've discussed that it can be interpreted generally as excess supply), and given that the total Dai supply has been pretty steady the increasing excess can be interpreted as a drop in overall demand for Dai.
  ![](https://i.imgur.com/bw2HPPV.png)
  ![](https://i.imgur.com/JFhcFzi.png)
- My advice is to keep an eye on how much we're dropping the SF because though the Dai price is doing well right now if we see a sudden bull market that would be a pretty fluid situation where you would see SLP rates for Dai respond quickly. It would be interesting to see what happens in this situation and how resilient Dai would be.

#### Questions to Vishesh

- [49:30](https://youtu.be/gqVnwOL42hQ?t=2973): Why is the distribution not following the normal bell-curve distribution lately?
  - Lower volume will do that. When there are lower volumes, it's easier to be a victim of slippage and have price impact with larger trades.
  - On low volume days, it's interesting to observe the microstructure patterns of different exchanges. Kyber, for example, is on the low and high end of these prices. Coinbase is usually dead center. Oasis is generally dead center, with a broader spread. Uniswap is pretty flat throughout and gets pushed up to a higher or lower end.
- Is the data on the VWAP graph from Kyber double-counted, since Kyber sources liquidity from Oasis?
  - The data is provided by Lev's group, and from what I understand, there is filtering for that going on.
- [58:56](https://youtu.be/gqVnwOL42hQ?t=3536): Does it make sense to add USDC-DAI pair to the VWAP chart?
  - I don't think there is a reason not to do it, though right now all the data is DEX ETH-DAI trades. I think it's just an operation thing where we haven't gotten around to adding it.

## Post-Call Discussion [01:00:01](https://youtu.be/gqVnwOL42hQ?t=3605)

### DSR

- [01:01:00](https://youtu.be/gqVnwOL42hQ?t=3660): After DSR, when making changes to DSR/SF, will both be moved at the same time, or will the DSR be preferred over the SF?
  - We don't know the answer right now. We will have to see how things work on. Essentially, it depends on the type of behavior you want to incentivize.
  - If we wanted to create more demand for Dai, we could raise the DSR without necessarily touching the SF. The question this raises is, do you also raise the SF to compensate for that extra DSR? And I guess if you did both, they would have separate effects on Dai.
  - We will have to learn through the governance community how we want to use these tools.
  - One potential idea is that SFs could all be evaluated on a monthly cadence, while the DSR itself can be changed separately on a weekly cadence.
  - In terms of preference, I think there will be one. It will probably require more sophisticated statistical models on the supply and demand of Dai and their reactions to each policy tool.
- [01:04:20](https://youtu.be/gqVnwOL42hQ?t=3860): Any thoughts around a pooled model for DAI locked in DSR with an underlying token that has a claim on the asset pool? (Similar to Compound)
  - Tokenized DSR is an interesting idea. It's certainly technically possible, and I don't doubt it will happen regardless.
- [01:05:06](https://youtu.be/gqVnwOL42hQ?t=3909): On the cadence of SF adjustments:
  - Personally, I don't think you can set a standard cadence. Once per month might be a standard, but I imagine there might be times when you need to make a mid-month adjustment.
- [01:06:11](https://youtu.be/gqVnwOL42hQ?t=3975): Will DSR/SF be used to keep the Dai supply growing at a slow pace?
  - The pace for keeping Dai stable, and debt ceilings reasonable is what is the goal. The real question to ask is at what rate should the global debt ceiling be grown.
- [01:07:02](https://youtu.be/gqVnwOL42hQ?t=4025): You mentioned we could potentially increase the DSR without increasing Stability Fees, does that affect the risk of the system?
  - Yes, in a roundabout way. If MKR dilution potential is lowered, because MKR holders are now essentially paying for DSR, then there is less MKR dilution potential for the rest of the system. I don't think it's a huge deal on a small scale. But surely in certain situations, it can create a huge problem for sure.
  - It has to be within limits. Something MKR holders are comfortable with.
- [01:15:03](https://youtu.be/gqVnwOL42hQ?t=4501): REPv1 versus REPv2 for MCD
  - I think their community themselves are suggesting that we hold off and wait for REPv2. I'm on board with that as well, especially considering the overhead for pushing a collateral type through. It might not make sense to include collateral that is not going to live too long.
  - If a collateral application gets filled out, and MKR holders want it, they will get it.
  - This brings up the question of how often we should repoll the Asset Priority List.
  - When a token upgrades it also calls into question the procedure around what the Oracles should do regarding that asset.

#### Links from the Chat

- [Santiment Maker Data](https://graphs.santiment.net/makerdao)
- [Graphs about Maker](http://makerdao.descipher.io/)
- [Graphs about DeFi Loans](http://loans.descipher.io/)
- [DAI 24hr VWAP Graph](http://dai.descipher.io/)
