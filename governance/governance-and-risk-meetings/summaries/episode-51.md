# Episode 51: September 05, 2019

## Agenda

- [00:00](https://youtu.be/7jKNv8DMxmQ?t=2): Intro from Rich Brown
- [07:05](https://youtu.be/7jKNv8DMxmQ?t=425): Recap of Forum Topics from LongForWisdom
- [15:04](https://youtu.be/7jKNv8DMxmQ?t=904): Oracle Governance Proposals from Nik Kunkel
- [01:06:08](https://youtu.be/7jKNv8DMxmQ?t=3968): Analysis from Vishesh

### Rich

#### Summary & Introduction [00:00](https://youtu.be/7jKNv8DMxmQ?t=2)

- Today we have a spin on the Agenda, which may be a sign of things to come. These calls will begin to have more variety than they have had in the past.
- The three emerging segments for today are Governance, Risk, and Oracles.
- We are enormously interested in what the community has to say. Don't feel shy about participating in the calls via chat or video.
- Give us feedback about the call.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

#### Governance

- Last week Maker holders decreased the SF by another 2% to 16.5%, showing that Maker holders are willing to aggressively adjust downward in the interest of the Dai peg.
- The SF poll that ended right before this call successfully polled for another 2% decrease. On Friday, September 6th, an Executive proposal will be put up for this decrease.
- We've gone over and covered two important mandates this month, the Risk Team and Interim Governance Facilitator Mandates. Now we will begin to examine Oracles, their management, and the responsibilities of Maker Governance in regards to them.
- If you're interested in any of the mandates, read through the forum posts below:
  - [Mandate: Risk Teams](https://forum.makerdao.com/t/mandate-risk-teams/282)
  - [Mandate: Interim Governance Facilitators](https://forum.makerdao.com/t/mandate-interim-governance-facilitators/264)
- There are Governance Polls currently active to ratify each of these two mandates.
  - Currently, an overwhelming majority of the community are voting yes to these mandates.
- The Oracle proposals that are covered in this call will be published and made available for discussion in the [forum](https://forum.makerdao.com) in the coming days.
- I am hoping in the coming months, specifically the months directly following the launch of MCD, that we would find a couple of candidates in the community for the Governance Facilitator role.

### LongForWisdom

#### Forum Activity Recap [07:05](https://youtu.be/7jKNv8DMxmQ?t=425)

- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance-updated-thread/374)
- New 3 point summary section, to better capture a quick snapshot of what's happening in governance
  ![](https://i.imgur.com/bszWBSk.png)
- Most active topics of conversation are around MKR vote delegation and the implications of MKR lending on Compound.
- [MKR as Compound collateral](https://forum.makerdao.com/t/mkr-as-compound-collateral/338/)
  - Mixed conversation. It seems that some people are very worried, while others are not.
  - This is an important conversation to be had.
  - It's our responsibility to figure out how to deal with these things, because MKR lending is inevitable. It's up to us to figure out how to get ahead of it or how to mitigate against the risks of this behavior.
- [Vote delegation is not something we should be striving for](https://forum.makerdao.com/t/vote-delegation-is-not-something-we-should-be-striving-for/336)
  - Discussions around vote delegation. How much time and responsibility should we expect from MKR Token holders? Would delegation be a net positive or net negative?
- [Is our goal more individual voters, or more MKR locked?](https://forum.makerdao.com/t/is-our-goal-more-individual-voters-or-more-mkr-locked/366)
  - Our overarching goal is to bring people in to be more confident about the consensus we are gathering. Though it seems that there are two diverging tactics. One to attract whales, the other to attract signal from high-quality people.
  - Seeing divergence in voting behavior between small and large holders when it arises is an interesting metric.
  - Agreeing about the importance seems to be the most reasonable view.
- [Signal Request: Should we move to exponential rate stepping for stability fee polls?](https://forum.makerdao.com/t/signal-request-should-we-move-to-exponential-rate-stepping-for-stability-fee-polls/40)
  - We are currently running a final poll to determine what the on-chain poll should look like.

## Oracles

### Nik Kunkel

- Nik is the Head of Backend Services at the Maker Foundation.
- Has been with the Maker Foundation for about 3 years.
- Has worked on OasisDex, Proxy contracts, OasisAPI, and Oracles.
- This segment is regarding the recent [Oracles V2 & DeFi Feeds blog post](https://blog.makerdao.com/introducing-oracles-v2-and-defi-feeds/).

#### Oracles and Maker Governance [15:04](https://youtu.be/7jKNv8DMxmQ?t=904)

- There is a lot to cover in terms of volume. This is just an introduction to Oracles in MCD, their management, and the fundamental pivot in strategy around them.
- Next week I can post the actual proposals to the forum, the community can dive deeper into details then.
- Oracles take off-chain data and make it available to be used on-chain. In MakerDAO Oracles mainly provide the prices of collateral assets.
- As Maker governance has successfully managed the peg, it's coming time to give over Oracles to Maker Governance. This presentation is to make you aware of what the responsibilities would be and how Maker Governance manages Oracles. I've structured this into a set of four proposals.
  ![](https://i.imgur.com/nSU0WpH.png)
- Part of making Oracles decentralized is giving the decision making power to MKR holders who participate in governance.
- [19:54](https://youtu.be/7jKNv8DMxmQ?t=1194): **Proposal 1: The Oracle Governance Framework**
  ![](https://i.imgur.com/rL4aU9t.png) - This is similar to the general Governance Framework in that it defines the processes by which governance should be run. - It is a blueprint of the responsibilities and processes with regards to Oracles. - This is a living document. The proposal can and will be changed. This is supposed to be a starting point.
- One of the main jobs for governance in respect to Oracles is voting in `Feeds` and `Oracles`
  - `Feed`: an individual who is running a bot that is pushing price updates for an asset.
  - `Oracle`: a smart contract, on-chain, that other smart contracts can query for a price.
  - `Oracles` receive inputs from the `Feeds` and publishes the median value.
- Governance will have to define criteria for Feeds and Oracles
  - What makes a good feed? Who would be a good feed?
  - What makes a good Oracle? What Oracles do we want to run?
  - We will need to define the rulesets for each Oracle we run. For ex: if we were launching an Oracle for REP, we would need to answer questions like, "what exchanges are we querying? What asset pairs from those exchanges are we querying? How do we filter this data? etc."
  - This also includes the governance processes for voting in feeds and Oracles, and voting them out.
  - Defining performance standards for Feeds.
  - Defining who deploys the new Oracles.
  - Oracles themselves have several parameters that need to be configured (ie: sensitivity parameter, expiration, delay, quorum, etc.)
- [27:40](https://youtu.be/7jKNv8DMxmQ?t=1660): **Proposal 2: The Oracle Team Mandate** - Don't worry MKR holders, you are not alone. You will be able to manage Oracles by delegating responsibilities to professionals. - This proposal is a way to formalize the role of the engineers and team members who are responsible for Oracles. - The idea is to have multiple teams, as the responsibilities can be split up however MKR Governance decides.
  ![](https://i.imgur.com/pc877Y1.png)
- Administration:
  - feeds crash, updates to the bots that feeds rune, notification about issues to feed providers, software updates, etc.
- Technical development:
  - All of these tools need to be programmed.
  - Ex: What if we added REP? In the tools you will need to specify REP pairs, Exchanges, Filtering/modeling mechanism to arrive at final price, etc.
- The Oracle Team itself does not have special privileges to enact any changes. It is not an executive of governance. - Any special privileges will be doled out through governance if necessary. - The base layer is the Oracle Team mandate. There is a minimum level of executive privileges given to those Oracle Teams, then for specific Oracle teams, further special privileges can be granted. - I want to make sure the mandate doesn't come out of the box with some broad executive privileges.
  ![](https://i.imgur.com/wcx0Vsn.png)
- The Oracle Team's job is to both to make proposals and to give context and guidance about those proposals.
  - Governance votes on these proposals.
  - The Oracle Teams act as governance liaisons.
- Oracle Teams are responsible for publishing a roadmap of what they are interested in doing. This roadmap needs to be ratified by Maker governance.
- [52:46](https://youtu.be/7jKNv8DMxmQ?t=3166): **Proposal 3: DeFi Partner Feeds**
  ![](https://i.imgur.com/TmuVtqF.png)
- The first wave of Feed candidates are dYdX, 0x, Set protocol, and Gnosis. They have been working with us closely over the past few months. They are all already very integrated into our Oracles. Set was one of the first beta users of Oracles V2, using our BTC price feed. dYdX has been using Oracles V1 since day one. 0x has been using us as well for internal stuff they've been working on. Gnosis has been using us for their DutchX protocol.
  - This is very much about bringing in the stakeholders who already use our Oracles to become Feed providers.
  - If you can have an organization be both a user as well as a feed, where launching an Oracle attack will actually harm their own system, the more you lower the overall risk of a Feed attack.
- [55:09](https://youtu.be/7jKNv8DMxmQ?t=3309): **Proposal 4: Oracle Incentives Restructuring**
  ![](https://i.imgur.com/3Kcmj8h.png)
- Repositioning Oracles as a business model in order to self-sustain their operations and in the process, increase their level of decentralization.
  ![](https://i.imgur.com/NUyuAnq.png)
- In Oracles V2 our Oracles will have a whitelist that regulates who can read the prices from that Oracle. If you want to use an Oracle, you will need to be on any given Oracle's whitelist.
- This is a tool for Maker governance to monetize the Oracle infrastructure effectively. When we launch MCD, start growing Oracles, and as the Maker Foundation steps back from covering costs, it will become apparent that the costs are pretty high. Having this tool to recoup costs is beneficial.
- The whitelist can also be used for business development as well. For example a DEX out there needs Oracle prices for some margin product that they are creating. MakerDAO can say, "We will give you feeds in exchange for listing all your token pairs against Dai". There are ways to extract value from this that is not necessarily money.
  ![](https://i.imgur.com/ZizAsVY.png)
  ![](https://i.imgur.com/fxRflsR.png)
- Whitelists create an incentive for MakerDAO to provide Oracles for non-collateral assets, which could provide a service to the greater ecosystem as a whole while creating value for MKR token holders.
- The payments would work similarly to how the buy and burn currently works for Stability Fee revenue. Data consumers would be burning MKR; that's how MKR holders see a benefit.
- [01:01:13](https://youtu.be/7jKNv8DMxmQ?t=3673): **Proposal 4.5: Make whitelist access free for one year**
  ![](https://i.imgur.com/sjPrzGl.png)
- Giving free access for free for one year will ensure that we don't pull the rug out from any projects that use our oracles as infrastructure for their systems.
- Giving it away for free is also a great way to bootstrap the customer ecosystem, as it is friendly to new potential clients. This acts as an entry point for them to come into our ecosystem. Setting up a cost-barrier from the start is not the way to do that.

#### Questions

- [32:55](https://youtu.be/7jKNv8DMxmQ?t=1975): Have any details been released about how new Feeds can be added to an Oracle?
  - We have not published anything as of yet. We will publish some stuff next week. There will be a section in the Oracle Governance Framework that covers what it takes to be a Feed and how one might be voted in as a Feed, same for Oracles.
- [39:20](https://youtu.be/7jKNv8DMxmQ?t=2361): Does this new model require that we trust the Feed partners?
  - Pseudonymous individuals and Organizations have different game-theoretic properties. Trusting Feeds is inevitable, however, there is a way to minimize the risk of a Feed becoming bad.
  - Currently feeds are pseudonymous individuals. In MCD the plan is to have both public organizations and pseudonymous individuals
  - Public orgs are much harder to coerce, extort, and bribe because of their public reputation.
    ![](https://i.imgur.com/igjM7tn.png)
    ![](https://i.imgur.com/pgi5yXu.png)
- [46:30](https://youtu.be/7jKNv8DMxmQ?t=2790): For the inclusion of organizations as Feeds, will these arrangements span into the legal domain? Will contracts be signed? How official will this be on the legal front?
  - Organizations have more surface area in the legal world than individuals.
  - There is more flexibility with organizations that allow for the minimization of risk, legal surface area is one example.
- [49:07](https://youtu.be/7jKNv8DMxmQ?t=2947): Are there guidelines provided to the organizations on how to prevent individuals within the organization from controlling the feed?
  - Yes, we will provide guidelines and requirements. One piece of guidance being the control of feeds through the use of multi-signatory keys.
- [50:17](https://youtu.be/7jKNv8DMxmQ?t=3017): In the new world, public orgs will know who each other are. Is there a risk or concern around organizational collusion?
  - We think this is a valid concern.
  - One of the things you can look at is: what is the quorum for a piece of being information published? Is it 51% of the feeds being active? 75%? 20%? And what is the proportion of public organizational Feeds versus pseudonymous individual feeds?

## Risk

### Vishesh

#### Dai Analytics [01:06:08](https://youtu.be/7jKNv8DMxmQ?t=3968)

#### Relevant links

[Santiment Maker Data](https://graphs.santiment.net/makerdao)
[Graphs about Maker](http://makerdao.descipher.io/)
[Graphs about DeFi Loans](http://loans.descipher.io/)
[DAI 24hr VWAP Graph](http://dai.descipher.io/)

##### Insights on Secondary Lending Platforms (SLPs): [01:06:08](https://youtu.be/7jKNv8DMxmQ?t=3968)

- With the two relatively rapid drops in the stability fee, the borrow rates on Compound and dYdX have come down in parallel. Borrow rates on SLPs respond accordingly to SF changes to maintain a 1-2% discount for borrowers.
  ![](https://i.imgur.com/Qego5CN.png)
- Borrow volume in the last week or two has risen slightly. dYdX more so than Compound. Part of this has to do with the fact that dYdX has a different use case than Compound.
  ![](https://i.imgur.com/VMEuUqQ.png)
- Supply volumes have been consistently rising over the past couple of months.
  ![](https://i.imgur.com/ZwzQN7i.png)
- Excess supply went hand-in-hand with increased supply levels.
  ![](https://i.imgur.com/mj8U6uP.png)
- Utilization rate for compound is consistently between 70 and 80%.
  ![](https://i.imgur.com/5kldOLl.png)

##### Dai Supply: [01:10:22](https://youtu.be/7jKNv8DMxmQ?t=4226)

- Dai supply has been comparatively steady for a while now.
- There was a larger dip on August 28th. We saw large wipes, but no corresponding increase in supply on SLPs. It is likely that these draws were users capitulating on their leveraged positions. This happened at the same time as the ETH price drop below \$170.
  ![](https://i.imgur.com/6uRmCKu.png)
- The supply dropped as people capitulated, but then we saw a small rise in the Dai supply, likely taking advantage of the lower SF and desire to leverage.
  - It seems like the two things cancelled each other out.
  - Most recently more Dai has been drawn than wiped.
  - So why is Dai price still up despite the SF being lowered? It's because we didn't see any substantial increase in Dai supply.
- Collateral value has been steadily decreasing, measured in dollars.
  ![](https://i.imgur.com/qBTkb75.png)
- Collateral amount in terms of ETH has been counteractive to ETH price. Most recently amount of ETH in the system has gone up.
  ![](https://i.imgur.com/Yiane4d.png)
- No significant amount of liquidations recently.
- Trading volume is comparatively low. In the last 24 hours, 1.6MM of volume. Similarly, transactional volume is down as well. Probably due to less trading activity.
  ![](https://i.imgur.com/Yten9Wg.png)
- The price has been hovering in the 1-1.02 range for the last 7 days. With 13.4MM in trading volume, which is lower than previous weeks.
  ![](https://i.imgur.com/R3fumVb.png)

#### Questions to Vishesh

- [01:16:24](https://youtu.be/7jKNv8DMxmQ?t=4584): Are we giving people enough time to react to SF changes? Is there any way to see the delay of the Stability Fee on the actual effect on Dai?
  - There is no way to determine specifically when and how much the SF affects the Dai price. You can see it as a sort of inertia that shifts the boat.
  - Vishesh had covered this in the past, even in the last call. Generally, it's hard to isolate variables because we live in the real world, which is a landscape of dynamic variables. There was also the point that the SF is like a sensitivity parameter to Dai price, where the main effecting variable might actually be the movement of ETH price.
  - Slowing the cadence for SF adjustments is something that the community will soon more aggressively to gather sentiment on.

#### Links from the Chat

- [Santiment Maker Data](https://graphs.santiment.net/makerdao)
- [Graphs about Maker](http://makerdao.descipher.io/)
- [Graphs about DeFi Loans](http://loans.descipher.io/)
- [DAI 24hr VWAP Graph](http://dai.descipher.io/)
