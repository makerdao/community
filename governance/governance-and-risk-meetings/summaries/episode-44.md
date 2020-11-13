# Episode 44: July 18, 2019

## Agenda

- [00:00](https://youtu.be/0wScyBRdLwE?t=5): Intro from Rich Brown
- [07:43](https://youtu.be/0wScyBRdLwE?t=464): Alex Evans MakerDAO Risk Model
- [38:54](https://youtu.be/0wScyBRdLwE?t=2334): Analysis from Vishesh

## Summary & Introduction

### Rich: [00:00](https://youtu.be/0wScyBRdLwE?t=5)

- MCD launch is a two stage process.
  - The Foundation builds and facilitates all the pieces.
  - The Governance community matures in its body and process in order to handle MCD Governance
- Check out the new [forum](https://forum.makerdao.com), all the heavy discussion happens there.
- This is not the first time a decentralized group of people came together to do work over the internet. We are working to self organize and create processes and standards around Governance.
  - We should internalize the idea of Open-Source Governance. The same way that developers can work together on versions of software, we as a community can do the same with workflows, standards, contributions, etc.
  - We may be looking at a system where there are MIPs(Maker Improvement Proposals).
  - Each of the venues we use to communicate serves a specific purpose.
- Add your questions in the [discussion thread for this call](https://forum.makerdao.com/t/scientific-governance-and-risk-w-special-guest-alex-evans-thursday-july-18-9am-pst-4-00-pm-utc/141)

## Risk

### Alex Evans Discussing, "A Ratings-Based Model for Credit Events in MakerDAO" [07:43](https://youtu.be/0wScyBRdLwE?t=464)

- As part of their involvement with the Maker network, they put together a Risk Model.
- Will be describing some of the thinking that went into the model and also explain some of the core mechanics and assumptions.

![Context & Motivation](https://i.imgur.com/Jx2xNPu.jpg)

- Is pretty obvious, we've covered it many times before. As Maker holders we recognize the importance of risk. We need to think systematically and rigorously about Risk and how to manage it.
- We went for this approach because of 3 reasons:
  - It works well with smart contracts, since the world is defined in "states". These models incorporate the idea of "state".
  - Model work well with State-dependent payoffs.
  - These models are very adaptable and modular. You can play with it very easily.

![The Model's Key Assumptions](https://i.imgur.com/hj3I1DP.jpg)

- The way this model thinks about Maker is it thinks about Maker as a collection of loans. The way we describe the global behavior of Maker is by looking at the emergent properties of that pool of loans.
- First we define what a loan is: an individual draw transaction
- Each loan can be in 1 of 4 states: Safe, Unsafe, Wiped, Bitten.
  - If the loan is wiped or bitten it cannot return to the safe/unsafe state again.
- There is a map for how states can transition into each-other.
- The amount of time a loan spends in a given state is an important data point.

![What can the model tell us?](https://i.imgur.com/THtUZX2.jpg)

- If you have the 5 rates/assumptions shown in the matrix you can calculate every one of the formulas in this slide.
- Good for both individual loan parameters, and Global parameters

![Estimated Model Parameters](https://i.imgur.com/NmsbE2V.jpg)

- Safe+unsafe is defined generally as "open" (reducing state types to 3: open, wiped, and bitten)
- Here we estimate two transition rates and everything flows from those.
- The covariant `(c(t))` is for the Collateralization Ratio. It is a factor variable that is coded `0 if CR>280%`, `1 if 250%<CR<280%`, `2 if CR<250%`. The assumption being that as the CR increases the rate at which loans are bitten also increases.
- Similarly we do the same for the open->wipe rate. The assumption being that as the SF goes up, more people are likely to wipe their CDPs.
- 95% confidence intervals

![Risk Management Example: Conditional Losses](https://i.imgur.com/56Jl8Ec.jpg)

- This is called scenario stress testing.
- We're looking for probability of losses against various Collateralization Ratio levels.
- Defined as a bitten CDPs.

### Questions & Comments for Alex

- There is a typo in the unsafe->bitten state change (should be `qub` instead of `qwb`)
- [17:47](https://youtu.be/0wScyBRdLwE?t=1069): Are you dealing with Safe->bitten at all?
  - It should be 0 in the matrix, but the reason I keep it there with a value `qsb` is because if you look at larger time intervals there may be some data that shows up here that shows a safe->bitten state change.
- [26:19](https://youtu.be/0wScyBRdLwE?t=1579): Are you defining ‘loss’ as bite? or liquidation below 100%?
  - It's defined as bite.
  - To get the actual "loss" you need to have an additional assumption about how many CDPs are bitten below the 100% level. It would be a distribution that tells us the recovery rate.
- [27:06](https://youtu.be/0wScyBRdLwE?t=1626): Have you done any research on how one would go about calculating those transition probabilities and if so can you talk about the challenges associated with that?
  - 1: We shared a GitHub page with both the code to run for all of these.
  - 2: The data the Vishesh provided is a good place to start.
  - 3: You can try to project based on the distribution we get from current data, but it's probably an exercise in conjecture due to lack of historic data.
  - Cyrus: All risk models right now are in a state where they lack long history of data to back-test by.
- [31:02](https://youtu.be/0wScyBRdLwE?t=1862): Do you think transition probabilities would be similar across collateral types?
  - The rates depend on the price path of the collateral, and the borrower behavior associated with borrowing that collateral. Do you behave differently when you borrow against `ETH` versus a `House`?
- [32:50](https://youtu.be/0wScyBRdLwE?t=1970): To what extent is the relative rate between different states determined by user behavior vs asset volatility?
  - Should we be thinking about relative transitions from one state vs another or should be using the overall aggregate amount of liquidation you would expect?
  - Aggregate amount of liquidation would be more standardized to human behavior across assets than the others.
- [34:44](https://youtu.be/0wScyBRdLwE?t=2084): How can this be applied to MKR valuation?
  - There is a brief note at the end of the paper talking about this.
  - This model is actually very good at estimating value of derivatives with state dependent payoffs (which sounds like MKR)

## Analysis

### Vishesh: Analytics of Dai Behavior [38:54](https://youtu.be/0wScyBRdLwE?t=2334)

- [Graphs about Maker](http://makerdao.descipher.io/)
- [Graphs about DeFi Loans](http://loans.descipher.io/)
- [DAI 24hr VWAP Graph](http://dai.descipher.io/)

#### Dai Price: [38:54](https://youtu.be/0wScyBRdLwE?t=2334)

- We are seeing 5.6m+ Volume over the last few days.
- The spread has been between 98 and 99 cents for the past few days.
- Things are going alright, but it was expected to go better because of the SF increase.
- The 16.5% decrease increased the sensitivity of Dai price to what happens with ETH price.
- I caution against double reactions. We should allow for rate changes to have time to take effect.
- The stability fee does not inherently fix the Dai price. It just improves the sensitivity in regards to what's happening with leverage.

#### Dai Supply: [49:50](https://youtu.be/0wScyBRdLwE?t=2995)

- Dai supply grew to the 96MM level. Once the SF was changed to 20.5% we saw a large supply drop off down to 85MM.
- A lot of the transient demand went away through Refinancing, closing of positions, etc.

#### Age of Debt: [53:04](https://youtu.be/0wScyBRdLwE?t=3181)

- As the SF changes we see a large impact on the circulation of debt.
- Age of open debt has fallen because of preference of borrowing from SLPs.
- What's interesting is that these two lines(`open_dai_days` & `closed_dai_days`) have converged.

#### Collateralization Ratio: [56:00](https://youtu.be/0wScyBRdLwE?t=3365)

- As the ETH price had fallen we saw a decrease in CR.
- We saw a fair amount of collateral being added during and after the dip, bringing up the CR.
- The liquidation percentage is affected by the overall CR.

#### Secondary Lending Platforms (SLPs): [01:00:24](https://youtu.be/0wScyBRdLwE?t=3624)

- The borrow on SLPs has shot up with the ETH price volatility. Partly due to the SF, the InstaDapp compound bridge, etc.
- Excess supply has consistently gone down for the last few weeks.
- Utilization on Dai has shot up on compound, which makes sense since its a cheaper place to borrow Dai in Maker.
- At high utilization we can be confident about estimated Dai demand and equilibrium supply.

#### Questions to Vishesh

- [45:02](https://youtu.be/0wScyBRdLwE?t=2704): Is MKR governance forced to take directional bets on ETH price then?
  - If you think the system does not have enough transaction volume, sticky demand, amount of oversupply, then you should be weary of having a lower stability fee.
  - You need to be mindful how much your opening up the system to be affected by ETH price.
  - If you have a lot of Dai that's been drawn out on transient demand based on leverage, this can be considered oversupply. In this scenario a lower SF would exacerbate the problem.
  - If your oversupply is low, and you have high tx volumes, not as much leverage happening, then you can be a little more confident with a lower fee.
- [57:16](https://youtu.be/0wScyBRdLwE?t=3436): How is the tx volume of Dai versus the trading volume? (double check)
  - We saw trading volume in 7MM-10MM per day on average
  - Tx volume on chain has been around 60MM on average
- [01:12:11](https://youtu.be/0wScyBRdLwE?t=4331): I am concerned that the new 22.5% is going to put on even more delayed pressure and we are going to find ourselves in a supply crunch.
  - If this happens and the Dai price goes up we can always lower the SF again. But it is agreed that moving the SF so quickly is not as effective as a slower approach.

#### Links from the Chat

- [Graphs about Maker](http://makerdao.descipher.io/)
- [Graphs about DeFi Loans](http://loans.descipher.io/)
- [DAI 24hr VWAP Graph](http://dai.descipher.io/)
- [Discussion thread for this call](https://forum.makerdao.com/t/scientific-governance-and-risk-w-special-guest-alex-evans-thursday-july-18-9am-pst-4-00-pm-utc/141)
- [Discussion thread for Alex Evan's MakerDAO Risk Model](https://forum.makerdao.com/t/a-ratings-based-model-for-credit-events-in-makerdao/112)
- [Governance at a Glance](https://forum.makerdao.com/t/governance-at-a-glance/84)
