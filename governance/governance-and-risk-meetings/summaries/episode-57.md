# Episode 57: October 17, 2019

## Agenda

- [00:00](https://youtu.be/eRCnit2NLHI?t=5): Intro with Rich Brown
- [14:26](https://youtu.be/eRCnit2NLHI?t=866): Migration and Risk Discussion with Cyrus
- [48:02](https://youtu.be/eRCnit2NLHI?t=2882): Dai Market Analysis with Vishesh
- [01:00:34](https://youtu.be/eRCnit2NLHI?t=3634)0: Recap of Forum Topics with LongForWisdom

### Video

https://youtu.be/eRCnit2NLHI

### Terms

`ES`: Emergency Shutdown

`SF`: Stability Fee

`SLP`: Secondary Lending Platform

`DSR`: Dai Savings Rate

`Sai`: SCD Dai

`Dai`: MCD Dai

`sCDP`: SCD CDP

`mCDP`: MCD CDP

## Introduction & Governance

### Rich

#### Summary & Introduction [00:00](https://youtu.be/eRCnit2NLHI?t=5)

- We'll be talking today about migration.
- We announced the impending launch date of MCD, Nov 18th. We have 5 G&R calls until then, so we have some work to do.
- What is MCD all about?
  - It's a big deal for everyone, for many reasons.
  - MCD symbolizes the fact that MakerDAO is now open for business. Up until this point, SCD has been a proof-of-concept. This protocol has huge aspirations, and MCD is the beginning of the real road to fulfilling these aspirations.
  - On a global stage, SCD is tiny at 80MM Dai. MCD opens the door to scaling Dai to far larger numbers. It allows the big partners to begin to engage with the system as well.
  - Besides new collateral, other new important mechanisms will be in place as well. The SF, for example, will be accrued on a continuous basis instead of the discrete way SFs are collected today in SCD.
  - MCD will be building a portfolio of underlying assets, for the benefit of diversification to de-risk the system as a whole.
  - The DSR is another wonderfully important feature. We're altering the base-layer of DeFi. We'll see a currency that has earning built into it. This will be a significant paradigm shift. It is a decentralized savings account for anyone, including dapps.
  - The integration team is hard at work, getting everyone on the same page about the coming migration.
  - New security modules will be present in MCD: the Governance Security Module, Emergency Security Module, and the Oracle Security Module.
- Up until this point, we've been managing a single universe. Managing the Dai peg through SF adjustments and working to improve the governance process in general.
- In the next four weeks, we will begin to have two universes. The SCD universe, and the MCD universe. So we will need to start answering some questions very rapidly.
  - How long is the Governance ecosystem willing to support both universes?
  - How much overhead can we handle as a governing community?
  - How do we ensure the stability of these two universes?
  - How do we remain agile and responsive enough to handle these challenges?
  - How do we establish processes on managing the other new variables in MCD?
- You can consider the CDP engine and the Dai token itself as part of the core functioning of the DeFi space. Therefore we need to handle these with utmost care.
- Give us feedback about the call.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

### Cyrus

#### Risk & Migration [14:26](https://youtu.be/eRCnit2NLHI?t=866)

- From a newcomer perspective, it's relatively straightforward. New users in the DeFi system will likely start out with MCD Dai. Though there is this big question on current Sai users and CDP users as well.
- From the start, we will cover what the lifecycle of SCD is, and what are the details around Global Settlement.
  - These are decisions for the community to think about. Ultimately, MKR holders are responsible for the safeguarding of the userbase. Our goal should be to manage the users in a way that would avoid forcing anyone's hand, which would reduce friction and risk as much as possible.
  - The job of the risk team is to consider all the proposals for how to handle these questions.
- If the community wants to keep SCD alive, that is their right. Though there are ways to keep a version of SCD, called PurityDai, housed under the MCD technology stack.
- Migration can't be forced upon anybody.
- We should come to a plan on what to do sooner rather than later.
- Migration
  - Two primary stakeholders: Sai holders & CDP owners.
  - From this point going forward we will be referring to SCD Dai as `Sai`, and MCD Dai as `Dai`.
  - The goal is to migrate both to the new system seamlessly.
  - There are some risks involved. There are three or four things to be aware of and plan for.
  - The community needs to be on the same page on this.
  - Migration is a business-centric decision rather than a risk one.
  - Essentially, we have roughly 85MM Sai. If we want to migrate all that over to MCD that will be a massive supply shock. One of the great things about Sai is that it's been around for two years, there's great liquidity and many integration partners. Dai will not have that same level at launch, though it will have a lot due to the efforts of our integrations team and partners. Because of that, there are ways that this can go less than ideal. For example, a naive way of doing the migration is telling Sai holders to sell Sai on the open market to buy Dai. This would cause a lot of slippage and volatility.
  - Depending on how quickly everyone would want to migrate over, it's a risk that we might see some market chaos if not appropriately planned for. Thankfully our engineers have been thinking about this for a long time, and they have created a "Migration Contract."
  - We haven't gotten much feedback about this, so I assume most people just haven't read through it. Read about it [here](https://github.com/makerdao/developerguides/blob/master/mcd/upgrading-to-multi-collateral-dai/upgrading-to-multi-collateral-dai.md)
  - Essentially the migration contract will be a special CDP that takes Sai as collateral and issues Dai. Alongside a mechanic for converting a sCDP to an mCDP using the collateral Sai in the Migration CDP.
    - There needs to be Sai in the deposit contract for CDPs to migrate.
    - There is also the issue of the SF that needs to be paid off first for CDP owners.
    - The migration contract checks your wallet for sufficient MKR to close out your CDPs SF fee.
    - The integrations team is also open-sourcing an arbitrage bot that can run of DEXs for MKR to help with liquidity.
    - Our Prop Trading Desk will be adding MKR liquidity to facilitate the influx of MKR demand for SF payments.
- We will need to worry about monetary policy for both Sai and Dai pegs. We should be prepared to be agile. An important question is the level of delegation to the risk team that the governance community is comfortable with.
- There are so many positive aspects of upgrading, so our expectation is that the default case will run smoothly.
- We should discuss and define edge cases in order to establish contingency plans.
- The last thing I want to talk about is how the migration governance cycle plays into the more standard risk framework we've been building out for MCD collateral onboarding.
  - Given the immense supply shock of the migration, any concept of risk premiums takes a back-seat. Ensuring the stability of the peg is the primary concern. In this case, it doesn't matter if the asset is something super safe or risky. The fact that we are bringing in a potentially large amount of Dai at inception will bring a certain amount of necessary care to Governance.
  - My expectation is that starting in the new year, we will start to work on more proper risk and governance cycles.
- What the migration risk parameters might be is still an open question that we will revisit next week. There are multiple ways to do this. It becomes an operational question of what we are trying to optimize for. My guess is that we will put out a proposal that optimizes for minimal disruption. I am certainly interested to hear if people think there are other considerations we should be factoring in.

#### Questions

- [19:37](https://youtu.be/eRCnit2NLHI?t=1177): How does passing a Global Settlement work in terms of voting?
  - The general idea is that the community would trigger GS by passing a Governance poll and then an Executive vote.
- [32:44](https://youtu.be/eRCnit2NLHI?t=1964): You mentioned that there needs to be Sai in the contract for CDPs to be able to migrate. So there is a dependency on Sai holders to migrate for CDP owners to migrate, Correct?
  - To be clear, people don't need to use the migration contract. They can migrate over manually if they choose. That being said, Yes, that dependency exists. We have a few large Sai holding partners that have pledged to migrate initially in order to provide the liquidity necessary for CDP owners to migrate to MCD.
- [34:55](https://youtu.be/eRCnit2NLHI?t=2096): Do you imagine any amount of Sai price disruption?
  - Essentially the risk is that we need to build consensus in the community on how we want to do it. Though one idea is to have the DSR positioned in a way that would ensure Sai liquidity to be there prior to CDP owners wanting to move over. I don't anticipate liquidity issues there.
  - There will be Sai to Dai conversion as well as Dai to Sai, so this will help with the peg-to-peg price difference.
- [01:09:34](https://youtu.be/eRCnit2NLHI?t=4176): Why are any active measures necessary to push people to MCD? Shouldn't the market eventually converge to MCD if it's better than SCD?
  - Cyrus: The answer has to do with MKR holders, and their prerogative to manage the entire MakerDAO ecosystem in a way that they think is best for all stakeholders, both from a risk perspective and a growth perspective.
  - Rich: What does converge actually mean? I think the community needs to come to a conclusion about what is the way to define a completed lifecycle of SCD.
  - Cyrus: What's interesting is that this question is a re-phrasing of "Why MCD?" anyway. It brings us back to the general benefits of MCD and why it is better than SCD and why people should migrate over anyway.
- [01:13:15](https://youtu.be/eRCnit2NLHI?t=4397): What are the things we will be covering in the coming G&R calls?
  - Next week: discuss potential hard parameter estimates for MCD. Risk parameters not only for ETH but for the special Sai CDP, as well as the BAT token CDP. Next week we might put out a plan for good risk parameters with the objective of a safe migration.
  - The week after that: Parameters around the auction parameters for the 3 auction types.
  - The week after that: Governance Security Module parameters
  - Final call before launch: Final wrap-up stuff.
  - Rich: in the midst of all these, we will be having polls and discussions that will lead up to the launch.
- [01:16:40](https://youtu.be/eRCnit2NLHI?t=4601): When will the MCD whitepaper be ready?
  - It will likely be an updated version of the current whitepaper. Rune has been working on it. When it will be ready, I am not sure.
  - Noone in the foundation is really waiting for it. We have a lot of specific technical documentation out about various specifics of the system.
  - Cyrus: Is this more than a nice-to-have? How strongly does the community feel about the whitepaper? (Given that we have a ton of specific and granular documentation.)
- [01:20:27](https://youtu.be/eRCnit2NLHI?t=4827): Can the MCD code change after audit reports publication?
  - The whitepaper wouldn't imply code-freeze, but rather functionality freeze. As we are progressing through the security roadmap, processing the results of the audits we've done, we are still changing minor details as we are moving closer to launch. There might be small detail changes that will be added or improved.
  - You can always see what we've done in recent releases here: [Changes to MCD code](https://changelog.makerdao.com/)
  - The changes are minimal and specific to the last improvements before launching the system. They wouldn't require a full re-audit of the code due to how minimal and specific they are.
- [01:23:13](https://youtu.be/eRCnit2NLHI?t=4992): Formal verification status update?
  - Core contracts are formally verified.
  - Outside of that, particularly the CDP manager contract is something we are working to formally verify. The ones that aren't formally verified are typically dependent on larger codebases that aren't formally verified themselves. DS-Chief is an example of this. For DS-Chief to be formally verified, all of the SCD code would need to be formally verified first, which is not feasible.
  - Security Roadmap is an ongoing effort; The bug bounty has no end-date. As we add new modules into the system, unless they are optional, we will be running them through our high standards for code security. It will be up to the community to enforce the standards.
- [01:26:55](https://youtu.be/eRCnit2NLHI?t=5213): DS-chief status for both systems. Will it be one to connect governance for both systems?
  - To start, it will be the same Ds-chief used between both systems. We hope in the future to introduce a formally verified DS-Chief in the future. This implies a complete rewrite of this contract.
  - MKR holders will be able to use one voting contract to vote on both SCD & MCD. Voters will continue to use a single dashboard.

### Vishesh

#### Dai Analytics [48:02](https://youtu.be/eRCnit2NLHI?t=2882)

#### Relevant links

[Santiment Maker Data](https://graphs.santiment.net/makerdao)
[Graphs about Maker](http://makerdao.descipher.io/)
[Graphs about DeFi Loans](http://loans.descipher.io/)
[DAI 24hr VWAP Graph](http://dai.descipher.io/)

##### Insights

- Sai's price has been pretty stable at slightly above a dollar. We've seen a consistent 10-16% of Sai volume being above \$1.
  ![](https://i.imgur.com/eq4Jq7I.png)
- The trading volume has been a little low lately, daily around 2MM. Weekly, 14MM volume. A huge portion of that volume has been Oasis lately, more than usual for Oasis.
  ![](https://i.imgur.com/ovQQFuG.png)
- When we spoke last week, we touched on the recent spike in the amount of Sai drawn out. We were curious to see what would happen with the supply from there. It's actually sustained since then, with only a very small decrease in supply since last week.
  ![](https://i.imgur.com/KQH01OV.png)
- Collateral netted out a slight increase. Basically more or less level week over week.
  ![](https://i.imgur.com/4GKImJM.png)
- All-in-all pretty quiet activity.
- Longer-term, the amount of collateral locked has been growing consistently. Sai drawn had slowed down in August and has maintained a narrow supply range 75MM-85MM.
  ![](https://i.imgur.com/wO4wCyQ.png)
- ETH price and liquidations have maintained a relationship. ETH volatility predicts liquidations.
  ![](https://i.imgur.com/qCrLnlu.png)
- The Sai supply with ETH price has continued to lack any clear correlation. Though we've seen more responsiveness of Sai supply to ETH price movement.
  ![](https://i.imgur.com/scHo8uI.png)

##### Secondary Lending Platforms

- Borrow volumes have been flat over the last week between DyDx and Compound. This contributes to the flat rates.
  ![](https://i.imgur.com/7zw32TM.png)
- Supply volume has increased very slightly over the past week.
  ![](https://i.imgur.com/0WxRwMD.png)
- Utilization rates have been relatively quiet as well.
  ![](https://i.imgur.com/P4CKcU1.png)

#### Questions to Vishesh

- Any guidance on rate adjustment?
  - Given the quietness in the metrics, I don't have a clear recommendation.
- We see the VWAP graphs that Sai is trading slightly above \$1. I don't understand what the motivation is to optimize for a very exact peg. Are people naturally trying to create symmetry around the Dai target price?
  - As simple as we want to make these things, they are more complex than we think. If Sai trades consistently above a dollar, groups like Market Makers are actually encouraged by this kind of trading activity. It should improve the willingness of OTC players to take bets on Sai when it is below a dollar.

## General

### LongForWisdom

#### Forum Activity Recap [01:00:34](https://youtu.be/eRCnit2NLHI?t=3634)

- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
- Generally, the forums have been relatively quiet. There have been some discussions around the collateral applications.
- The main thing I want to bring up is the [Signal Request thread on increasing the SCD debt ceiling](https://forum.makerdao.com/t/signal-request-should-we-increase-the-scd-debt-ceiling/506). The poll finished last week.
  - It's interesting since there is a divergence in the options. The winning option being a commitment to do maintenance around the debt ceiling instead of a single unilateral decision to raise the Debt Ceiling.
  - Rich: Is this something we still feel strongly about in light of the coming migration? Cyrus has already made the point a few times that we don't know how long these two systems will coexist. However, presumably, the Sai supply should be dropping overtime after the migration.
  - Cyrus: This is why we want some signal and consensus from the community. If our goals are aligned, it might be worth incrementally decreasing the debt ceiling for the sake of a safer migration strategy.
  - LFW: The wording of the poll was specific to pre-MCD. We would need to repoll post MCD launch.

#### Links from the Chat

- [PurityDai Thread](https://forum.makerdao.com/t/puritydai-a-potential-solution-to-the-real-world-collateral-controversy/526)
- [Upgrading to Multi-Collateral Dai Guide](https://github.com/makerdao/developerguides/blob/master/mcd/upgrading-to-multi-collateral-dai/upgrading-to-multi-collateral-dai.md)
