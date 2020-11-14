# Episode 110: September the 17th, 2020

## Agenda

- [00:00](https://youtu.be/nkRh4oiNJJA): Introduction
- [03:13](https://youtu.be/nkRh4oiNJJA?t=193): Governance at a Glance
- [06:47](https://youtu.be/nkRh4oiNJJA?t=407): Smart Contracts Team Update
- [07:47](https://youtu.be/nkRh4oiNJJA?t=464): Oracles Team Update
- [10:16](https://youtu.be/nkRh4oiNJJA?t=616): Risk Team Update
- [12:13](https://youtu.be/nkRh4oiNJJA?t=732): MIPs Update
- [17:39](https://youtu.be/nkRh4oiNJJA?t=1059): September MIPs Discussion
- [22:07](https://youtu.be/nkRh4oiNJJA?t=1327): Introduction to Community Development
- [34:22](https://youtu.be/nkRh4oiNJJA?t=2061): Vault Compensation Update
- [1:02:53](https://youtu.be/nkRh4oiNJJA?t=3773): State of the Peg
- [1:12:02](https://youtu.be/nkRh4oiNJJA?t=4322): Open Discussion

## Video

<https://youtu.be/nkRh4oiNJJA>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/nkRh4oiNJJA)

- Hello, everyone. Welcome to MakerDAO scientific Governance and Risk meeting number 110, taking place on Thursday, September the 17th, at 16:00 UTC. My name is LongForWisdom, the Governance Facilitator for MakerDAO. I am joined by a bunch of people from Maker and things related. If anybody wants to speak, feel free to interrupt at any time.
- Deeper discussions happen in the [Forum.](https://forum.makerdao.com/)

#### PEG Management Emergency

[01:46](https://youtu.be/nkRh4oiNJJA?t=108)

- We had an unscheduled executive on Monday in response to the peg deviation and emergency signal requests from the previous week. We saw a significant change in direction where we moved the LR down to 103% on USDC and PAX, which was executed shortly afterward.
- We had more discussions on an on-chain poll, which closed on Thursday, to reduce the LR even further. It has succeeded at 101%. This is a more extreme version compared to the 103% we had on Monday.

## Updates

### LongForWisdom

#### Governance at a Glance

[03:13](https://youtu.be/nkRh4oiNJJA?t=193)

[Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)

- If you have the time to read over and vote in the active threads, that would be much appreciated.
- I want to let everyone know that I am not sure how useful Governance at a Glance has been. If you are continuing to find it useful, please let me know because I might stop doing it.

##### Discussions

- [The Smart Contracts Team and Domain Work](https://forum.makerdao.com/t/the-smart-contracts-team-and-domain-work/4173)
  - Kurt_Barry from the Maker Foundation Smart Contracts team starts a discussion about the balancing of responsibilities and prioritization that the team needs to consider.
- [How much DAI is needed to get the peg back to 1:1](https://forum.makerdao.com/t/how-much-dai-is-needed-to-get-the-peg-back-to-1-1/4122)
  - Mrabino1 posts an informal poll asking how much DAI is needed to restore the peg, which leads to a spirited discussion.
- [Working Group: RWA Onboarding](https://forum.makerdao.com/t/working-group-rwa-onboarding/4167)
  - SebVentures starts a new working group to address the onboarding of real world assets with some interested community members and representatives from Centrifuge and 6s. If you want to join the working group, check out the forum thread above, and leave a comment.

##### Ongoing Initiatives

- [Collateral Calls - Calling all Projects!](https://forum.makerdao.com/t/collateral-calls-calling-all-projects/3715)
  - Juanjuan sets up a signup thread for projects wishing to present on the bi-weekly collateral call. Know any potential collateral partners that want to present? Refer them here.
  - Juan: We had an exciting collateral meeting yesterday regarding real-world assets. We had both Matthew from 6S Capital and Lucas from Centrifuge presenting. Next Wednesday, on September the 23rd at 5:00 UTC, we will have Aave presenting their token and Gemini presenting GUSD.
- [Help Wanted! Scientific Governance and Risk Call Summaries](https://forum.makerdao.com/t/wanted-join-the-summary-team/4318)
  - Davidutro is looking for additional people who would be interested to participate in the call summaries team who regularly produce high-quality summaries and shorter snippets of public MakerDAO calls.

##### Signal Requests

- [Should Urgent Action be Taken to modify the proposed TUSD Risk Parameters?](https://forum.makerdao.com/t/signal-request-should-urgent-action-be-taken-to-modify-the-proposed-tusd-risk-parameters/4145)
  - Jiecut presents a signal to adjust the TUSD risk parameters to reflect the recent move towards low LR stablecoin vaults.
- [Increase USDC-A Debt Ceiling](https://forum.makerdao.com/t/urgent-signal-request-increase-usdc-a-debt-ceiling/4186)
  - Aaron_Bartsch presents a signal to adjust the USDC-A debt ceiling to reflect the potential decrease to 101% LR on Friday.

### Lucas Manuel

#### Smart Contracts Team Update

[06:47](https://youtu.be/nkRh4oiNJJA?t=407)

- We have continued to work on Liquidations 2.0. We also found out that the Kovan test-net will be deprecated soon. We are considering how to adjust our tooling to factor that in. In terms of collateral, the TUSD implementation has been upgraded. Therefore, we are going to whitelist that implementation in this Friday's executive.
- We should also note that the "office-hours" modifier will not be included in this week's executive.

### Nik Kunkel

#### Oracle Team Update

[07:44](https://youtu.be/nkRh4oiNJJA?t=464)

- We have many proposals that are coming up for polling votes on Monday, September the 21st.
- We have whitelisting open on the ETH-USD medianizer, whitelisting DDEX on the BTC-USD medianizer, whitelisting yEARN finance on the BTC Oracle Security Module. I will talk more about that one in a second, it is a little bit special. We have whitelisting Kyber on the ETH-USD Oracle medianizer. Lastly, we have an update to the ETH-USD Data Model regarding which sources do we use for ETH-USD.
- To quickly touch on the yEARN finance proposal, they are trying to create a yBTC type of vault. This is very similar to the yETH that we spoke about a couple of calls ago. Essentially, it allows users to lock up their BTC, and it will try to generate the maximum yield possible. The maximum yield possible is calculated by locking up BTC and taking out a Dai loan and, after that, generating a yield using that Dai. The proceeds from that will then go toward buying more BTC. If we have room in the DC, it should generate another healthy chunk of Dai.
- I have also submitted proposals last night for PAXG. I submitted the Oracle assessment for that and YFI, so do check out those if you get a chance.

### Primoz Kordez

#### Risk Team Update

[10:16](https://youtu.be/nkRh4oiNJJA?t=616)

- We started working on collateral evaluations for the October cycle. Currently working on Balancer, YFI, PAXG, and LEND. The good news is that we have community volunteers to make collateral evaluations, which will help speed up the process. We also made progress regarding our approach towards adding new rates. Hopefully, I will share more technical information within the week and get some feedback before the implementation of the new rates.
- I also published a [post](https://forum.makerdao.com/t/wanted-risk-domain-monitoring-tools/4168) on "Help Wanted." This is in addition to getting more collateral evaluators. We want to have more regularized domain members who can cover different things apart from collateral evaluations.
- Also, we will soon publish some discussion points and proposed parameters regarding ETH-B vaults.

### Charles St. Louis

#### Weekly MIPs Update

[12:13](https://youtu.be/nkRh4oiNJJA?t=732)

![This Week's Activity (September 14-18)](https://i.imgur.com/VShHuMh.png)

- All inclusion polls have passed. Today, LongForWisdom will do an inclusion poll review to confirm that these proposals can continue to the governance poll on Monday, September the 21st.

![Next Week's Activity (September 21-25)](https://i.imgur.com/eqSOgXr.png)

![Collateral Onboarding Updates](https://i.imgur.com/33qgt05.png)

- COMP, LINK, and LRC will proceed through the rest of the governance cycle.
- It is uncertain whether ETH-B will be proposed this month but we will get more information from the Domain team in the future.
- 15 (25 is a typographical error) collateral types will go out for Greenlight Poll on Monday, September the 21st.
- [Collateral Status Index](https://forum.makerdao.com/t/collateral-status-index/2231)

![Proposals in the RFC Phase](https://i.imgur.com/S4p6x3W.png)

- A lot of these have the potential to be proposed for next month's governance cycle.
- Jon Athmann and LongForWisdom are working on MIP14.
- DC Adjustment proposal is still in progress.
- MIP 20 will probably go into next month's governance cycle.
- Two RWA proposals and a new proposal about Domain Structure and Roles.
- Two sub-proposals related to RWA and Declaration of Intent will be ready for the following governance cycle.

![Pre-MIP Discussions](https://i.imgur.com/bYwpNVW.png)

![Topics to look out for](https://i.imgur.com/m6r2GZc.png)

- The Collateral Prioritization Framework is to be more transparent regarding why the team does things a certain way.

#### Discussion 1

[17:39](https://youtu.be/nkRh4oiNJJA?t=1059)

- Christopher Mooney: For the automatical DC adjustment module, I know that last time we proposed the MIP, it got shut down. I think it was more complicated than we thought; it included some additional functionality. It would be extremely time-saving for governance, users, and peg management if we all heavily considered that module. As long as it is configured well, it will automatically raise the DC within a predefined value. Please, everyone, check that out.
  - Charles St. Louis: From my understanding, this MIP got rejected due to recent uncertainty concerning the increase in the DC, and the solution for it was not completely fleshed out. The instant access module a lot of sense. Please, check out the [discussion](https://forum.makerdao.com/t/debt-ceiling-instant-access-module-pre-mip-discussion/3924/9).
  - LongForWisdom: The first version of the MIP was not planned to be completely automated as well. It was up for the facilitators to work the appropriate increases. If the new version defines the instant access module, that would be awesome.
- Derek: My aim during the next steps is to write a formal MIP with feedback that people have to help rework some of the parameters around the DC and buffer, and incorporate that into the formal MIP. Correct me if I am wrong, but I can present this to the community within the next several weeks so that it meets the deadline, correct?
  - LongForWisdom: Yes, the next deadline is October the 7th regarding the feedback requirements.
- Brian McMichael: There are two things to configure, which are the amount (or percentage) that the line gets increased or decreased, and the ultimate ceiling, which will require another executive in order to raise if we hit. However, you can set that high enough to avoid having three executives a week for the DC requirements.

## Segments

### Amy Jung

#### Introduction to Community Development

[22:07](https://youtu.be/nkRh4oiNJJA?t=1327)

![Cover Slide](https://i.imgur.com/zM1K90t.png)

- Hello, I'm Amy. If we haven't met yet, I used to be the program and operations lead in Community Development and have been passed the baton from Rich to be the new Head of Community Development. I'm here to support this community in the next phase for Maker. This is going to be two years of work fit into one presentation. I apologize in advance if I will be moving quickly.

![Bootstrapping the community](https://i.imgur.com/Omabtro.png)

- Two years ago, Rich was looking to bootstrap the community around MakerDAO.

![Ghosty](https://i.imgur.com/50aPgaD.png)

![Structure of Community](https://i.imgur.com/0KQ7ZnQ.png)

- One framework to think about is what I call these rings and various segments being shown on the slide. We have different teams, and as the foundation dissolves, we will have new teams representing these mechanisms.
- The larger ecosystem community user group may not be necessarily in the day-to-day weeds of the government community, but they are invested in the Maker system at large.

![Comm Dev](https://i.imgur.com/mEnkzS7.png)

- Community development helps with the growth and onboarding of the users and unitiated potential users into the Maker community.

![Community Team](https://i.imgur.com/lUYiKHa.png)

- We are a very unique team made up of both the community and the foundation.

![Mandade](https://i.imgur.com/aLvDHab.png)

![Mission](https://i.imgur.com/AMM5ckb.png)

![Comm-Dev Pillars](https://i.imgur.com/9225fZ4.png)

- We have not been very vocal regarding the programs and things we have been doing because we have been in the background focusing on developing them.

![Components of Incubation](https://i.imgur.com/9frFM4E.png)

![Educate](https://i.imgur.com/Z1FwC8j.png)

- Education is probably the biggest part. We are creating a lot of public goods that deliver a lot of information to the community.
- I have a teaser - we are launching a new portal where anybody can get all their information about Maker.

![Identify](https://i.imgur.com/HZj911D.png)

- We have many teams working on various projects that we have been able to fund.

![Onboard](https://i.imgur.com/AoOe6FZ.png)

- Onboarding is how we bring forward engaged contributors. It allows us to support them in introducing and developing their ideas.
- On average, members stay with us for six months and work on several projects.
- We have a variety of skillsets and ideas that we will continue to cultivate to uphold this diversity within Maker.

![Incentivize](https://i.imgur.com/3z6Xmqt.png)

- We will be launching collateral onboarding grants (our largest grants to date) to help teams within the Maker ecosystem bootstrap their projects.
- We had much success with bringing people together through meetups.
- We have been experimenting with CDIPs, which is a simplified version of MIPs that allow anyone in the community to propose a project for funding under five-thousand Dai.
- Another teaser is the badges, which we will update next week.

![What's next?](https://i.imgur.com/bEdZMvx.png)

![Bootstrapping Community](https://i.imgur.com/8YDZXFS.png)

- We will begin to see a stronger clarification between these two missions: how to support Domain teams and how to support Dai ecosystem adoption.
- You can always join the community development channel or ping me @Amy.Jung on RocketChat.
- LongForWisdom: That was an awesome presentation. I think we have seen in the past that there has been somewhat of a separation between comm-dev and governance. We are looking to try to bring these two groups together. This will become very important as we move towards a more decentralized DAO.

### Monet_Supply

#### Vault Compensation Update

[34:22](https://youtu.be/nkRh4oiNJJA?t=2061)

- The Vault Compensation Plan Poll is live and ends on Tuesday, September 22nd.
- Currently, it is kind of a hung vote.
  - 45% support for 15% compensation.
  - 43% support for 0% compensation.
  - 11% support for 12% compensation.
- If there's a hung vote, the default result is to scrap the current compensation plan, but still leave the possibility of another working group possibly forming or other community members leading this and choosing a different direction. That would be the result that happens if the poll was to end today.
- It's ranked-choice, so for those voting 12%, consider voting for 15% or vice versa. Not trying to swing anyone's vote, but I am just bringing awareness for the options in ranked-choice voting.
- If anyone has any questions, message me on Rocket Chat.
- I would love one of the options to get more than 50% support.

#### Discussion 2

- Christopher Mooney: Because it is a ranked-choice, it could not end in a hung vote, right? The algorithm would iterate until one of those options takes 51%.
  - Monet Supply: No, because people do not have to choose additional options. If someone bullet votes for 12%, for example, and did not choose 15% as their secondary option, the 15% vote would stay at 44%. This vote breakdown is what the results would look like if the poll were to end today.
  - Christopher Mooney: I did not realize that a ranked vote could have a dead end. I guess you are right.
  - Monet Supply: It usually would not. Due to the nature of this subject, I am assuming people have really strong opinions.
- LongForWisdom: If we set it up where everyone needs to rank all options, it would work.
  - Andrew Burban: I did not realize that it was ranked-choice. I might go and change my vote.
- Christopher Mooney: I will try to republicize it as much as I can. People may be more open to compromise as the deadline gets nearer. If no option gets 50%, the poll will default to oppose the vault compensation plan.
- LongForWisdom: We require a majority vote because any option that succeeds here will have to go through multiple executive votes. I am not comfortable with having a non-majority vote go through executive due to the risk of it not passing.
  - Monet Supply: Yes, it is going to be frustrating for vault owners. Likely, it will not go through if it does not get the majority vote.
  - LongForWisdom: There is no way to eliminate the risk because there is a chance that people who have not voted in this poll will vote down on the executive. There is only so much we can do.

### LongForWisdom

#### This Week's Executive Vote

[39:07](https://youtu.be/nkRh4oiNJJA?t=2347)

- Last week, we had to quickly get a consensus to discuss various numbers that could go into the next vote. I apologize for having reacted strongly about the TUSD poll without realizing the updated implementation was not yet on-chain.
- Primoz will give a brief overview of the options.
- Primoz Kordez: Tomorrow, we might get an executive for a 101% LR for USDC and PAX. If we look at markets, the price is currently mostly 1.01 for most of the larger vendors. This is mostly on Uniswap but also on Curve. The price is already there and adapted due to public expectations. Our favor is that the yield farming has cooled down, and arbitrage is impossible, and Dai is being withdrawn, which has a direct positive impact on the price. So those USDC vaults that just unwinded directly impact the peg and predict that we are lowering the liquidation ratio.
- If we measure how much more Dai is needed to push it below 101%, I think it is 50 million. However, imagine there is more Dai demand if some other farm gets released. Due to there being many other stable coins, there may not much as much demand on Dai. Nonetheless, if another farm comes, we need to have another 200 million DC increase at a minimum if we see more farms popping up to prevent a jump in Dai price and if there is another ETH crash to promote liquidity of Dai. It is up to governance if it is 200 million or more. If we increase that DC by 200 million or 300 million, is it really that much riskier? The USDC bump is already there, so increasing the DC will not change much.
- Another thing that we need to discuss is, can we possibly diversify between these stable coins? We can limit USDC exposure by increasing the DC just a small amount such as 50 or 100 million, and force people to mint other stable coins by proposing a higher DC on those other coins as we slightly diversify the portfolio. This is something that we need to discuss. We have a bit of a problem because there is issues with TUSD smart contracts, which our Smart Contracts team will comment on. Then there is PAX, where there is no demand or utilization, and PAX is not used in DeFi. We cannot rely on PAX when you have some liquidations being triggered. You do not know if the keepers or vaults unwinding are going to be able to get a hold of PAX.
- Another alternative is we could consider is raising the DC of USDC. In another week, when the peg cools down, we could decrease the DC on USDC, and then raising it on another stable coin like TUSD or PAX. You could rebalance your stable coin exposure based on demand volatility and which farm is getting hot. I am saying that there is a way to reallocate and diversify stable coin exposure when increasing the USDC DC.

#### Discussion 3

- LongForWisdom: I will comment on the governance aspect of this. The Smart Contracts team is recommending one thing, Risk another, and Community another thing. It is hard to reconcile these things. The Smart Contracts team is recommending 10 million to start; correct me if I'm wrong. Community resolved in 50 million, and Primoz discussed various strategies.
  - Brian McMichael: I do not think that the Smart Contracts team has a personal position. As far as technicals, it is no different than USDC or PAX.
  - LongForWisdom: Maybe that's something that we want to talk about more.
- Brian McMichael: There is a [forum](https://forum.makerdao.com/t/signal-request-approve-new-tusd-implementation/3982/4) post about the implementation to TUSD, which we reviewed. We don't have any major technical concerns besides one regarding compatibility with the V1 token, which would affect the users but not Maker and vaults.
  - Lucas Manuel: I agree with Brian. The contracts are technically sound. I'm personally not a risk expert, so I can't speak to this in an educated way. The contract was made yesterday and has been in use for less than twenty-four hours. My personal recommendation on the forums is to start with ten million and raise that over time to meet demand. TUSD probably has the most transparent accounting out of all the stable coins. If their contracts are technically sound, I am happy to start with ten million, allowing the contracts to have some time under deployment and allow people to use it for a week.
- Sébastian Derivaux: Can someone elaborate on what will happen if tomorrow USDC will change their implementation?
  - Brian McMichael: Essentially, everything would keep operating as it is right now. However, This could be a problem if the TUSD contract got updated to something that could perform a re-entrance and attack us. We face the risk with smart contracts, and interacting with these proxy upgrade tokens is one of them. Assuming it is a standard upgrade on their part and not manipulation of balances, it should not cause any problems as long as they stick with the ERC standard.
  - Sébastian Derivaux: Is there a USD stable coin that doesn't have non-degradable contracts?
  - Christopher Mooney: Dai. Does anybody want to say Dai?
  - Brian McMichael: Dai is not upgradable.
- LongForWisdom: If anyone else wants to weight in on the DC? Given that the Smart Contracts team is split on the TUSD DC can we follow the community and go to 15 million?
  - Brian McMichael: This question should be forwarded to the Risk team.
  - Primoz: It's not a standard choice. It's related to smart contracts. It's not a financial risk. I propose to solve the peg, increase USDC-A on Friday, and then focus on relocating stable coins next week. If we decrease USDC-A DC and then increase other ones, there will be an arbitrage at 101%, which will result in the same outcome.
- MakerMan: Looking at which stable coins we can capture, USDT is a big dog; the rest are 3B in total. We are cranking up USDT. The concern I have is that the Dai demand might be growing exponentially, and at some point, we will run out of collateral to liquidize Dai with one-to-one backing. I look at it from the risk perspective against Maker. MakerDAO market capitalization is floating at around 500 million, and our total outstanding is 600 million. 1-2% is not horrible, but what is the risk to the MKR holders, as well as the entire system? I'm pointing out a warning that we might get ourselves into a liquidity trap that we cannot solve because there is no collateral to back up new Dai. I have concerns about taking more than 50% of these total markets unless we are looking at USDT.
  - Primoz: I don't think that is a worry if you hold a certain percentage of stable coin. If there's a demand for it as collateral, the supply will go up. But if you charge only 1% SF on such large exposure, you're possibly not properly compensating risk of a one in a hundred-year possibility that this will fail.
  - MakerMan: If you have to back it with TUSD, I get it. The question is if these assets are going to grow in a way to provide Dai liquidity, which is a maybe. I'm just pointing out my concern that we'll get to a point where we don't have enough collateral to mint Dai.
  - Primoz: That's more of a systemic risk related to stable coins.
  - Brian McMichael: As long as the CR is 101% and there's space available in the DC, those assets will find their way to the Maker Protocol as long as there's an arbitrage available.
  - MakerMan: As they make their way into Maker collateral, you eat these things up, they're not going to be available unless more USD comes in to back it.
  - Christopher Mooney: You mean if we exhaust the capacity of all the stable coins on Ethereum in the medium term. In that case, we need to start RWA.
  - Brian McMichael: Right now, we are trying to balance out the curve pools, which we need to get to just to drive down the pressure of the price going up.
  - MakerMan: I am looking three months out instead of a week or two, and I just see demand growing so fast, I don't see RWA onboarding fast enough. I see Dai demand growing exponentially. It just doubled in the previous month, and I think it will double again next month.
  - Matthew Rabinowits: Challenge accepted.
  - Jon: And we still have Bitcoin. TBTC is coming out in the next several months. WBTC is growing exponentially. REN is doing very well. Furthermore, yETH is going to put on a Y token of that as well. I think in weeks or near months, there won't be a problem with more collateral.
  - MakerMan: I'm seeing us eat up a lot of markets.
  - Christopher Moony: It's a hop skip and a jump to get BCH, zCash, and others as well.
  - MakerMan: We have a good problem. We need to be on our A-game, and the MKR value is currently not appreciating.
- Sam MacPherson: Do we want to lower ETH-A DC?
  - Christopher Mooney: Isn't there an ETH-B alternative plan that will lower the DC?
  - Sam Macpherson: No, It's at 540 Million, and we're currently using approximately 66% of it.
  - Davidutro: I think that is good this way, personally.
  - Matthew Rabinowitz: The intent was to keep it low in case of yETH kicked up to have enough space. If they don't spin that strategy back up again, it will be wise to pull it back in.
  - Sam MacPherson: Are they planning?
  - Davidutro: They're waiting for Curve Governance changes. However, nothing has changed in terms of using MKR vaults underneath.
  - Sam MacPherson: Okay, let's wait then.
  - Primoz Kordez: They changed the parameter, which would increase the price on the curve that used to be artificially lower, and I think they want to proceed with the old strategy. That vote just recently passed.

### Vishesh Choudry

#### The State of the Peg

[1:02:53](https://youtu.be/nkRh4oiNJJA?t=3773)

[MCD System Stats](http://daistats.com)
[MCD System Stats Alternative](https://catflip.co/)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)
[Maker Vault Stats](http://makervaults.descipher.io/)

![dai.descipher.io](https://i.imgur.com/udQwA6C.png)

- As everyone is aware, a week ago, ETH price fell and the Dai price was fluctuating but holding between $1.02 and $1.03 which coincided with an ETH rally four to five days ago. Dai's price also ran up, hitting $1.03 $1.04. It came down for a moment and then shot back up. Hitting $1.05 or $1.06 between the 13th to 15th. It has come back down since then.

![VWAP](https://i.imgur.com/mVs6rZU.png)

- There are stupid amount of trades made on Uniswap for the DAI-ETH pair.

![DAI<->USDC](https://i.imgur.com/l2xS89B.png)

- DAI<->USDC: since the 9th or so, volume has split a little to where Curve was dominating and now with Swerve there has been a shakeup. That change-up will be an ongoing conversation.

![DAI<->USD](https://i.imgur.com/qlWKjdB.png)

- The DAI-USD pair has been a little more flat, with individual trades sliding in different directions.

![DAI<->USDT](https://i.imgur.com/qlWKjdB.png)

- DAI-USDT is echoing DAI-USDC

![Dai Supply](https://i.imgur.com/EWp33ro.png)

- Supply is at almost 620 million.
- 350 million is from ETH, 3.3 million from BAT, 200 million from USDC, and 56 million from WBTC.
- There are smaller amounts in other vault types.
- 1.2 million from PAX

![Compound Supply](https://i.imgur.com/nu2sspT.png)

- 150 million in DSR. Much of that comes from Compound.

![Balancer Pools](https://i.imgur.com/73AxS1H.png)

- Looking at where that supply is going, there's about 60 million in the Balancer pool for Dai-ETH.
- About 24 million DAI-SAFE.
- 15 million DAI-YFI.
- Altogether, that's 60-70 million in Balancer pools.
- Dai SAFE was at 160 million and 120 million a few days ago. A fair amount of liquidity drying up in the 13th to 15th date range, corresponding to the accelerated price run-up, which coincides with why that spike occurred.
- This is the Dai roller-coaster we're on right now. Liquidity dries up for short term yields, then price spikes, then those yields end or expire. Upon expiry, there is a resurgence in liquidity, the price stabilizes, and the yield goes down.
- It's repetitive spikes on those opportunities that crop up. It seems like, long term, we have this 1.01% floor that Dai doesn't go below for very long.
- From there, it will jump based on attractive yields.

![DAI USDC](https://i.imgur.com/5htOrTQ.png)

- Dai from USDC supply has been a huge driver in growth. 110 million on the 15th, and in 2 days, 100 million more Dai minted from USDC. That is a significant number.

![ETH Supply](https://i.imgur.com/ooks2T1.png)

- ETH has been flat for a while.

![WBTC Supply](https://i.imgur.com/XJcoTGn.png)

- WBTC had was some reduction in mints.

![ETH Large Vaults](https://i.imgur.com/7n2dyZf.png)

- For ETH, the same three or four vaults account for a large chunk of the ETH-DAI supply. A majority of that supply minted in the top of the distribution comes from the top ten vaults.

![Liquidation Walls](https://i.imgur.com/FZ2WS6a.png)

- In terms of liquidation prices, there is a big wall at \$280 ETH. That price drop would be a third of the DAI-ETH supply, which is the biggest wall to watch for. Of the largest vaults, ETH is also the highest priced volatile coin in terms of market risk.
- There is a smaller wall at about \$300 ETH.

![Top USDC vaults](https://i.imgur.com/OBRUNje.png)

- Top two USDC vault users account for 42 and 36 million, respectively. With a few vaults in the teens trailing off from there in size. We've seen historically the same; a few large users make large movements in that Dai supply.

## Open Discussion

#### Continued Peg Deviation

[1:12:02](https://youtu.be/nkRh4oiNJJA?t=4322)

- Vishesh: Literally, as we were talking about 6.4 million is minted from USDC-B.

#### Real-World Assets

- Matthew Rabinowitz: To close off RWA: there is a [forum post about prioritization](https://forum.makerdao.com/t/signal-request-should-real-world-asset-collateral-onboarding-be-prioritised-in-the-short-term/4075) that Lev put up. If we do believe that's critical, please, leave a comment. It will go for a vote soon, and if it doesn't pass, we'd like to know how to add considerations before we pay for legal fees.

#### Vault Compensation Plan

- MakerMan: We need this thing to rectify, a call for whales to vote, please.

#### Links from Chat

- [Comm Dev Presentation with Amy](https://www.figma.com/proto/V4MNwShC1bvVPXRih5jXok/MakerDAO-All-Hands-Comm-Dev?node-id=30%3A153&viewport=406%2C997%2C0.04463879019021988&scaling=scale-down)
- [Debt Ceiling Instant Access Module: Pre-MIP Discussion:](https://forum.makerdao.com/t/debt-ceiling-instant-access-module-pre-mip-discussion/3924/9)
- [Collateral Status Index](https://forum.makerdao.com/t/collateral-status-index/2231)
- [Wanted: Risk Domain Monitoring Tools](https://forum.makerdao.com/t/wanted-risk-domain-monitoring-tools/4168)

## Common Abbreviated Terms

`MCD`: The Multi-Collateral Dai system

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`EV`: Executive Vote

`GF`: Governance Facilitator

`GP`: Governance Poll

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

`OSM`: Oracle Security Module

`LR`: Liquidation Ratio

`RP`: Risk Premium

`RWA`: Real-World Asset

## Credits

- David Utrobin produced this summary.
- Anatta produced this summary.
- Artem Gordon produced this summary.
- Tim Black produced this summary.
- Anna Alexa K produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
