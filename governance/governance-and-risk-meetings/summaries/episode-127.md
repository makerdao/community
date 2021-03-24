# Episode 127: February 04, 2021

## Agenda

- [00:00](https://youtu.be/gLdCPwvYuFk): Introduction
- [03:13](https://youtu.be/gLdCPwvYuFk?t=193): Governance at a Glance
- [06:40](https://youtu.be/gLdCPwvYuFk?t=400): Smart Contracts Team Update
- [08:50](https://youtu.be/gLdCPwvYuFk?t=530): Oracles Team Update
- [09:56](https://youtu.be/gLdCPwvYuFk?t=596): Risk Team Update
- [14:23](https://youtu.be/gLdCPwvYuFk?t=863): Real World Assets Update
- [16:59](https://youtu.be/gLdCPwvYuFk?t=1019): Operational Support Update
- [23:39](https://youtu.be/gLdCPwvYuFk?t=1419): Community Development Update
- [25:38](https://youtu.be/gLdCPwvYuFk?t=1538): MIPs Update
- [34:30](https://youtu.be/gLdCPwvYuFk?t=2070): January Financial Presentation with Sebastien Derivaux
- [51:57](https://youtu.be/gLdCPwvYuFk?t=3117): Presentation Discussion
- [1:04:22](https://youtu.be/gLdCPwvYuFk?t=3862): Open Discussion

## Video

<https://youtu.be/gLdCPwvYuFk>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://youtu.be/gLdCPwvYuFk)

- Hello everybody, and welcome to the MakerDAO Scientific Governance and Risk Meeting number #127 taking place on Thursday, February 4th at 17:00 UTC as usual. My name is LongForWisdom. I am the governance facilitator at MakerDAO. As usual, we've got a bit of an agenda to go through. We've got our regular updates by the usual suspects. We've also got a segment from SebVentures talking about the financials of MakerDAO in January, which should be interesting.
- We like it when people get involved, so please feel free to interrupt and voice any opinions or comments. We would love to hear from you.

**Weekly Update**

- There haven't really been any significant governance updates for the last week. I posted a set of [Core Units proposals](https://forum.makerdao.com/t/mip39c2-spx-governance-core-unit-gov-001/6348) for the governance domain. They'll be on RFC for the next month, and then we'll go into the March cycle. Please read them over and leave comments. The RFC period is made for any objections and edits.
- We had four polls this week. Which had all passed. These polls were onboarding polls for the DAI-USDC-UNISWAP-V2-LP token and the ETH-USDT-UNISWAP-V2-LP token. They should be on Friday, but we should check with the smart contracts on a preferred date. We had an oracle poll creating multiple oracles for DYDX on Starkware, which also passed. And then, we had polls to investigate the implementation of an ETH-C vault type with a higher liquidation ratio, which also passed.
- Next week, we'll have more polls as usual; We'll have the rates proposal poll along with some onboarding polls as well. Let's look out for those on Monday.
- Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

## Weekly Updates

### Peyton Rose

#### Governance at a Glance

[03:13](https://youtu.be/gLdCPwvYuFk?t=195)

**Three-Point Summary**

- Demand surge continues with over 1.75B in DAI supply.
- Our Surplus Buffer continues to fill at a moderate rate, currently sitting just under 6M DAI at the time of writing.
- The [DAI VWAP](http://dai.descipher.io/) holds steady (currently at $1.001), despite continued volatility in ETH.

**ICYMI - Announcements**

- The [January Maker Governance](https://forum.makerdao.com/t/maker-governance-review-january-2021/6296) Review 4 is live and really something!
- The Rates Group [published new recommendations](https://forum.makerdao.com/t/rates-changes-proposal-2-feb-2021/6313) 2 that will be polled for inclusion on Monday, Feb. 8th.
- [Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance-jan-29-feb-4-2021/6362)
If you have the time to read over and vote in active threads, that would be much appreciated.

##### Discussions

- [Undercollateralized loans in Maker](https://forum.makerdao.com/t/undercollateralized-loans-in-maker/6281)
    - Hasu makes a case for a new type of loan to be brought to Maker.
- [Core Units I Wished Existed](https://forum.makerdao.com/t/core-units-i-wish-existed/6248)
    - Iammeeoh gives everyone a space to discuss Core Units they would like to see here at Maker. Check out the community ideas and leave one of your own!

##### Signal Requests

- [IAM-DC Parameters: WBTC-A, LINK-A, UNI-A, COMP-A, YFI-A, AAVE-A ](https://forum.makerdao.com/t/iam-dc-parameters-wbtc-a-link-a-uni-a-comp-a-yfi-a-aave-a/6299)
    - Signal Ending Soon! Just one more day left to give Primoz your opinion on the Debt Ceiling Instant Access Module levels for the above collateral types. Inclusion poll slated for Monday, Feb 8th.
- [Adjust ETH-A DC-IAM-line (2021-04) ](https://forum.makerdao.com/t/signal-request-adjust-eth-a-dc-iam-line-2021-04/6332)
    - Ultraschuppi signals raising the ETH-A debt ceiling for the 4th time in 2021. You might be noticing a trend at this point.
- [Raise DSR](https://forum.makerdao.com/t/signal-request-raise-dsr/6241)
    - Signal Continues @ultraschuppi signals for varying levels of increase to the Dai Savings Rate, which has been at 0% since September.
- [Adjust the Surplus Buffer](https://forum.makerdao.com/t/signal-request-adjust-the-surplus-buffer-2021-2/6250)
    - Signal Continues @ultraschuppi signals the raising of the Surplus Buffer, with options to continue MKR buyback and burn operations during the raise.

##### Ongoing Initiatives

- [:mega: Collateral Calls - Calling all Projects!](https://forum.makerdao.com/t/collateral-calls-calling-all-projects/3715)
    - Juanjuan sets up a signup thread for projects wishing to present on the bi-weekly collateral call. Know any potential collateral partners that want to present? Refer them here.
- [Collateral Status Index](https://forum.makerdao.com/t/collateral-status-index/2231)
    - Confused about the current status of the various collateral types that have been discussed recently? Check out this post to find out the status and current position of each within the onboarding process.
- [Weekly MIPs Updates](https://forum.makerdao.com/tag/mips-update)
    - Davidutro and charlesstlouis bring the latest updates in the world of MIPs.
- [MakerDAO Standard Governance Processes](https://forum.makerdao.com/t/makerdao-standard-governance-processes/4298)
    - LongForWisdom writes a brief overview of the currently operating governance processes in the Maker community. Confused between Signals, Declarations, and MIPs? Look no further.
- [The Official Welcome Thread](https://forum.makerdao.com/t/the-official-welcome-thread/771/4)
    - A welcome and introductions thread. Not strictly speaking governance, but if anyone new or old wants to introduce themselves, now is your chance!

### Christopher Mooney

#### Smart Contracts Team Update

[06:40](https://youtu.be/gLdCPwvYuFk?t=400)

- Last week, we completed the executive for the DC Instant Access Module for FA. That has successfully passed. We finished two collateral assessments for next week, which are UNI-V2-UNI-F and UNI-V2-LINK-F. Both of these are UNI LP tokens. We've done a little work on the Dss.Exec lib. We've put a lot of work in on [MIP45 for liquidations 2.0](https://forum.makerdao.com/t/mip45-liquidations-2-0-liq-2-0-liquidation-system-redesign/6352). Since MIP45 is in the RFC phase, we've got approximately two to three weeks where we could make some changes. Therefore, if anybody sees anything or wants to comment on something, now's the time to do it.
- For the coming week, MIP21 or MIP22 may not make it onto Kovan, depending on the reviews. However, we are reviewing both of those as we've got time off from liquidations 2.0.
- For this Friday's executive, we're going to have UNI-V2-UNI-F and UNI-V2-LINK-F. We still need to work on an assessment for UNI-V2-AAVE-F.

### Nik Kunkel

#### Oracle Team Update

[08:50](https://youtu.be/gLdCPwvYuFk?t=530)

- Last night, I published the oracle assessments for [UNI-ETH](https://forum.makerdao.com/t/uni-v2-uni-eth-collateral-onboarding-oracle-assessment-mip10c3-sp24/6354), [LINK-ETH](https://forum.makerdao.com/t/uni-v2-link-eth-collateral-onboarding-oracle-assessment-mip10c3-sp25/6355), and [AAVE-ETH](https://forum.makerdao.com/t/uni-v2-aave-eth-collateral-onboarding-oracle-assessment-mip10c3-sp26/6356). I still have one more coming, which is the CF drop assessment. I've also deployed the oracles for the collateral types going out this week, which are ETH-USDT and DAI-USDC. We're pumping on all cylinders!

### Primoz Kordez

#### Risk Team Update

[09:56](https://youtu.be/gLdCPwvYuFk?t=596)

- Regarding collateral evaluations, there's a focus on the UNI LP's we're publishing, which are for UNI-ETH and LINK-ETH. They have evaluations this week. We may onboard them next week. We'll be proceeding to AAVE-ETH and maybe YFI-ETH UNI LP evaluations during next week. We published the first batch mentioned debt ceiling instant access module parameters for six major vault types. I made the [signal request on the line parameter](https://forum.makerdao.com/t/iam-dc-parameters-wbtc-a-link-a-uni-a-comp-a-yfi-a-aave-a/6299), which is the maximum debt ceiling parameter with some proposed numbers. Prose mentioned that the winning quotes will go into the launching poll next week. Next week, we're planning to release the last batch of these parameters for other vault types.
- There was a discussion whether we should implement the debt ceiling instant access module for renBTC into the model executive. We might hit the debt ceiling before the end of next week. There is still 35 million unutilized debt. However, it's not growing as extreme for ETH-A. We are probably fine, but we also can't exclude it. I'm leaving this decision for LongForWisdom because this may have implications for governance.
- The rates group released the monthly rates proposal. We proposed a modest rate increase for major vault types. We included forwarding guidance where we considered the possibility to make additional rate increase before the end of this month, especially if we still see extreme debt growth on ETH-A. Please comment on proposed changes and stay tuned if we may need to propose another rate increase before the end of the month. Yesterday we released sub-proposals for the core unit mandate and the budget. Let us know if you have any recommendations on the structure we have in mind and our proposed budget.
- Finally, we began studying liquidations 2.0 assets. We are also looking into the ETH-C vault type, which has a high liquidation ratio. These vaults are supported by Maker holders this week, so we proposed some potential liquidation ratios and risk premiums for this vault type in case we might want to implement it soon. This could be beneficial if we're going to move some of this debt growth from ETH-A to ETH-C or begin considering high rates on ETH-A.
    - LongForWisdom: Great, Thank you, Primoz. I'll briefly speak about W-BTC. We mentioned increasing the line this Friday if it were needed. I don't think we're in a position where there's an apparent urgency given that W-BTC hasn't been rising as much relative to ETH. We can do it next Friday as long as the poll passes.

### Sébastien Derivaux

#### Real World Assets

[14:23](https://youtu.be/gLdCPwvYuFk?t=863)

- For Real World Assets, I have three updates:
    - We have published a real-world finance Core Unit for future Core Units, an experiment to provide transparency among the team. Check it out and give your opinions.
    - We are moving forward on People's Company. It was greenlit last week. However, we are negotiating with them on new terms because the loan to value of 18% was a bit high. If you are interested in knowing more detailed information about that, please ping me on RocketChat. I can use your feedback on the negotiation.
    - Finally, we are still working on how to scale RWAs. We are figuring out details such as using an asset manager instead of asset originators and using trust instead of SPVS managed by the asset originators themselves, which is an issue for many people. When we make a more significant investment, it will require more safety.
- Matthew Rabinowitz: Concerning any 6S updates, please stay tuned in the forums. Within the next two weeks, you'll see a lot of content in there.
    - LongForWisdom: Thank you, Seb. It's exciting to see that move forward as well.
    - Matthew Rabinowitz: Actually, I need to work with you on how we're going to publish so many documents. We'll have to figure that out.
    - LongForWisdom: Sure, get in touch with me anytime.

### Juan

#### Operational Support Update

[16:59](https://youtu.be/gLdCPwvYuFk?t=1019)

- Yesterday, we had [REINNO from RWAs](https://www.youtube.com/watch?v=8Ir31vGllm8).
- Next Wednesday, we're skipping the collateral onboarding call.
- We'll have [Know Your MIP number five](https://forum.makerdao.com/t/know-your-mip-05-term-lending-module-wednesday-february-10th-18-00-utc/6297); it talks about the integration with yield protocol.
- On the 17th, we're going to have Fortunafi from RWAs again.
- This Friday, the 5th, Prose, and Sam will be discussing the Keg regarding the Know Your MIP; That's [Know Your MIP number four](https://forum.makerdao.com/t/know-your-mip-04-keg-streaming-payments-module-friday-february-6-18-00-utc/6237).
- [This coming Wednesday, the 10th](https://forum.makerdao.com/t/know-your-mip-05-term-lending-module-wednesday-february-10th-18-00-utc/6297), we'll have MIP43 TLM, which is the term lending module. Alan and Lev are going to discuss this MIP. Please join us on Wednesday at 6 PM UTC.
- Concerning the core units update, [risk](https://forum.makerdao.com/t/mip40c2-sp2-add-core-unit-budget-risk-core-unit/6343), [real-world finance](https://forum.makerdao.com/t/mip39c2-sp1-adding-core-unit-real-world-finance/6224), and [governance](https://forum.makerdao.com/t/mip39c2-spx-governance-core-unit-gov-001/6348) have posted their proposals for comments. They are in the forums for any feedback. We've seen other proposals being drafted. Derek drafted two; one for smart contracts and another one for front-end. Apparently, he does them in his free time, so if you want yours drafted by Derek, reach out to him. We have strategy communications PR and Marketing from Caitlin or Kathleen (I don't want to butcher the name). Finally, Amy and I are drafting one for ops support. Please, contribute by giving feedback on those.
- If you're thinking about doing a core unit or joining one, you should know that we have the [Core Units I Wish Existed](https://forum.makerdao.com/t/core-units-i-wish-existed/6248/9) thread by Iammeeoh. Then there's the [TL;DR Core Unit MIPs Submission Process](https://forum.makerdao.com/t/tl-dr-core-unit-mips-submission-process/6245) from Amy. Finally, we have the channel on Rocketchat #core-units-operating- model-onboarding. If you need help or want to discuss anything, please join us there. Regarding Maker's public events, there's this [Google calendar that you can add](https://calendar.google.com/calendar/u/0?cid=bWFrZXJkYW8uY29tXzNlZmhtMmdoaXBrc2VnbDAwOWt0bmlvbWRrQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20). If you want to be in the know, you can reach us over there and see what's happening with MakerDAO, or as always in the forums.

##### Comments

- Frank Cruz: The REINNO call you had yesterday, Juan, had a tough crowd. Anybody who hasn't watched that should check it out. It's good to see the community come out and really hammer down on MIP6. It's not easy to understand, but it's a really good video. I wanted to ask real quick; do you guys think it would be a good idea to have a core unit for the Clubhouse app to give Maker a little more attention? I was hoping you could promote it. Actually, Nick, I saw you on there, maybe you or Anna could start the room?
    - Juan: I think core units, in general, should focus on providing value, regardless of the means that they use. Therefore, if the oracle's core unit thinks that they should do something on Clubhouse that provides value to the DAO or the wider community, then, by all means, this might be a great idea. However, I don't think that we should create core units around tools or mediums. Nonetheless, it's whatever the DAO and the Maker holders want. If this is something that the Maker holders agree with, go ahead and publish it.
    - Frank: Yeah, I know. I was just being sarcastic. But I really do think that it's a good tool. It's getting popular. I've been noticing many other projects going on there, such as DeFi. I'm wondering if some of us can get together and start something. I was being sarcastic about the core unit but maybe start something like a clubhouse. Juan, you'd be good at it. You can be a moderator or anybody else here you guys would want to nominate. In any case, it's getting a lot of traction. I think it'd be a good way to get the word out about DAI, Maker, and what we do as a community. It's something that's needed, in my opinion.
    - Juan: Thanks for the confidence, Frank. There are definitely core units considering different mediums. It's a good suggestion.

### Anna Kryukova

#### Community Development Team Update

[23:39](https://youtu.be/gLdCPwvYuFk?t=1419)

- On Tuesday, several community members joined the community call with David to discuss the surplus buffer. If you're interested in seeing the replay, [here it is](https://www.crowdcast.io/e/the-makerdao-community-29).
- In community development, a working group called Governance Communications is publishing the [Maker Relay](https://forum.makerdao.com/tag/maker-relay/l/latest), snippets of this call, and summaries. As Peyton was saying, we also have a monthly recap of the governance process. Beginning next month, we'll be experimenting with a new format to continue to provide more value with other updates that we already have, such as Governance at a Glance and the MIPs update.
- This month, we also had a trial experiment with an audio format; We had community members create updates in podcast form. All four episodes are out, which you can check out on [anchor](https://anchor.fm/voicesofmkr/episodes/Voices-of-MKR-Relay-Ep--30-epq9oe) and [Youtube.](https://youtube.com/playlist?list=PLLzkWCj8ywWPolnUhRn_HWeZJX35PuT53)

### David Utrobin

#### MIPs Update

[25:38](https://youtu.be/gLdCPwvYuFk?t=1538)

![](https://i.imgur.com/DFJ7Aly.png)

![](https://i.imgur.com/82LAZeq.png)

![](https://i.imgur.com/1reAZ0c.png)

![](https://i.imgur.com/iJy6QfE.png)

![](https://i.imgur.com/11Xjs8c.png)

- Ignore the 18, there are more. I didn't update the slide.

![](https://i.imgur.com/Yz3998b.png)

![](https://i.imgur.com/ZG6UeIJ.png)

![](https://i.imgur.com/dXK64ht.png)

- These are all the sub-proposals in RFC. The ones highlighted in blue are related to a core unit MIP set.

![](https://i.imgur.com/jyCgZ4M.png)

![](https://i.imgur.com/E23UAq8.png)

- LongForWisdom: I want to reiterate that March will be an enormous month for MIPs. I believe a couple of these MIPs going out are high impact. We hit the governance rewards MIP, which can make waves either in a good or bad way. Then there are all sorts of MIPs changing how the DAO is structured and will function going forwards. If there's ever going to be a month where we'll have extra time to spend reading and commenting on MIPs, this might be a good month.

## Other Presentations and Updates

### Sebastien Derivaux

#### January Financial Presentation

[34:30](https://youtu.be/gLdCPwvYuFk?t=2070)

- I took some numbers from general analytics to understand the financial results of MakerDAO. I'm quite interested in the money that the protocol is creating. I always wanted to know how much my MKR took in investment because lately, the market is not too happy with MKR tokens. They prefer projects like AAVE. I put some numbers up, so I could try to discuss them with you.

![](https://i.imgur.com/pkcKfTu.png)

- This is a monthly update. You have all the numbers for the months. in January, we have generated two and a half million DAI of net interest incomes. I use banking terms just like you would see in a banking quarterly annual presentation. We have the same wording as the rest of the banking community. If you want to share this document with an investor, they will understand the terms—at least some investors. The net income difference in a bank is the difference between the interest you get and the interest you pay to the borrowers through the lenders. Currently, our primary lenders are DAI holders. They are happy to lend their money for exactly zero percent interest while the DSI is zero percent. We have no cost on that front. Every interest we make is for us.
- You can see there has been a massive increase since December. If you compare it to the rise since January 2020, obviously, it's an insane number. The second line is a bit more challenging to understand. The trading income is when you buy and sell, and in a bank, you can buy and sell currencies. However, you can also buy and sell securities such as stocks, bonds, and etc. In that line, I also put the PSM. We buy USDC for 0.1% less than what it's worth, and we sell DAI for 0.1% more than what it's worth. For December, there is a significant number, and it's not the PSM. I put all the USDC-A vault with no liquidation on them. USDT is not inside. However, USDT is not a big deal. Trading income is all the USDC-A vault, which is relevant because we can only interest those because DAI is above one dollar. There is no reason for someone to put one dollar of collateral to get less than one dollar of a loan. Still, with the PSM, it's a bit different because it's a good reason to make money. After all, the DAI peg was great all along through January. Therefore, it's still a fair amount of money. The third line is net liquidation income. That's the difference between the money we create when we liquidate someone and the money we lose when the liquidation fails. We lose some money, so we don't have the split per vault. It's monthly; there's only one number. It's positive if it's a win, and it's negative if it's a loss. I didn't expect six of the revenues were due to liquidation income. Lastly, this is a new line, which is the workforce expenses. All the expenses you can have, and currently, there is only the Vault Compensation Working Group. You add up those numbers, and you get the net income. I insert the recurring income below because you can expect that the trading and liquidation fluctuate month over month. We hope that liquidations are not a significant number because it's not suitable for customers. Hence, recurring income is what we can expect to earn, which includes the workforce expenses.

![](https://i.imgur.com/1OpseIM.png)

- This is the same representation in a graph but since November 2019. You can see the workforce expenses, which has a tiny line. Maybe this will grow soon. You have the net interest income, which was significant in early 2020. Later it became zero because the interest was zero. After all, we had a DAI issue, and then we raised interests again. Now we're making a lot of money. Net trading income was the solution. If you take the aggregate, you would think we make the same amount of money every month since October, but that's not true. The net trading income was due to the peg issue. If you remove that, you'll see that the net interest income grows month after month. That's very good for our business. You have a net liquidation income that is positive most months. However, we had an issue here that cost us a lot of money. I hope liquidation 2.0 will solve that.

![](https://i.imgur.com/hoB8F1U.png)

- Let's go to the lending business, which is the net interest margin. The income is 2.5 million last month. We also have the average yield. You see that ETH-A is still the most significant vault type. The rest of the revenues are not marginal except for WBTC. You have the average yield we make on the loans we provide to our customers, which is rising. It will continue to increase through February because we will increase the rates.

![](https://i.imgur.com/ZKsVXbR.png)

- Trading income is all stablecoin vaults and the PSM. I expect the PSM to increase in revenues. Currently, the primary user of the PSM is 1inch, but maybe other people will soon use it as well. I put it in a specific slide because I think the trading business can become significant at a later point.

![](https://i.imgur.com/SSgoHmr.png)

![](https://i.imgur.com/l3RREDo.png)

- At some point, we will add the oracle business when we begin to get revenues from that. Something important to note is that the only reason we make a lot of money is that DAI is valuable. People are lending us money with no interest, so if the DAI demand increases, we will be able to invest all this capital into something which will create more money. However, the biggest problem is to have people who lend you money at zero percent. That's not easy to find. I focus on the stablecoin on-chain volume in billions of dollars transacted. You have an increase in all the stablecoins since the beginning. If you do a market share analysis, you'll see that we started very low. We lost a considerable amount of market share after March because people were not happy with what happened on Black Thursday. Then there was the Yield Farming Season, which grew yet again. I suggest it's due to the peg issue. Since we have sold the peg, it's gradually rising over time. We also decrease USDT, and many people from USDT are moving to USDC or BUSD. Here you have more numbers on the different evolution of the market share. The main focus for Maker should be to increase the stablecoin on-chain volume from 12% to 50%.

![](https://i.imgur.com/pypvYYN.png)

- I want to express the risk protocol phase by using the surplus buffer and comparing it to the total amount of loan assets we have. By doing the math, you can figure out the leverage ratio, which is just the surplus buffer divided by all the assets of Maker. You end up with this blue line, which, as you can see it has improved. It was relatively high before Black Thursday. After that, it improved because we increased the surplus buffer many times. Still, you can see it's decreasing during the last month because the demand for ETH loans is growing faster than the surplus buffer. I added a metric called the CET-1 ratio for common equity in the banking community. I don't remember the last symbol, but you are using the surplus buffer divided by assets. Hence, you say that not all assets are equal. The ETH-B loans are risky. I put a factor of times two, and that is this red line, which is growing because we had onboarded a lot of USDC tokens. This is a systematic or regulatory risk but not a day-to-day risk. You see toward the end that it's been dropping a lot since October. The asset size is not growing much relative to the surplus buffer. Actually, all the stablecoins are slowly disappearing, and we onboard more risky assets such as ETH loans. That maybe be something to keep in mind. To give you a little bit of context, for banks, the leverage ratio should be 3% at least, and the CET-1 ratio should be 8%. However, we are not a regular bank. We should work to see what is relevant to us.

![](https://i.imgur.com/6Gj2Z9x.png)

- The final slide is interesting for all the Maker token holders. This takes the same numbers but applies them to the MKR token. You have the recurring earnings per MKR every month. For January, for every MKR token you hold, you make 2.5 dollars of capital because the capital stays inside the MKR token, which increased the surplus buffer. However, it's still your MKR.
- the current rise is quite interesting. The orange line depicts the recurring earnings yield, which is annualized. It's the earning on an annual basis divided by the price of MKR at the average price of the month. When earnings are rising, this line is growing. Luckily in January, this line has went below the recurring earning per MKR because the MKR price had tripled. However, the earning yield stayed around 2%. Suppose you want to use the price-earnings ratio. In that case, the ratio is just the opposite of the 2%. A ratio of fifty is still good compared to Tesla and all protocols.

#### Presentation Discussion

[51:57](https://youtu.be/gLdCPwvYuFk?t=3117)

- Chris: Great presentation.
- LongForWisdom: I speak for everyone when I say that everyone is very appreciative.
    - Sebastien Derivaux: Should I continue next month? It takes half the day. I think I got the answer.
- LongForWisdom: Great, does anybody want to share comments or questions with Seb? I'll kick one-off. A lot of the increase in revenues has been correlated with the bullish sentiment in crypto. How much of this revenue and usage should we expect to stay if the bullishness decreases?
    - Sebastien Derivaux: I don't have any answer but what I want to say is that we need to work on one subject to know our own liabilities. We have over one billion DAI outstanding. We need to know how much is used to farm or on protocols and how much people use for daily purposes. I have DAI in some protocols to earn yield, but there's no need to have DAI if there's no yield. Otherwise, I would have ETH. This is important because, say, you can earn 2% on the amount of DAI outstanding. If this amount decreases to 100 million, that's a different story. The minimum is the amount of DAI used by non-farming activities.
    - LongForWisdom: One other thing I noticed about the space, in general, is if you go to the etherscan tab for DAI, all these addresses for pools and various things are illiquid. This is essentially what you're saying in terms of farming. A lot of the demand comes from liquidity pools. In the case of stablecoin liquidity pools, I'm not sure how sticky that is if there were to be a bearish sentiment, right?
    - Sebastien Derivaux: The curve of the Uniswap can be sticky because you always need to translate ETH to DAI and vice versa. However, some others like Band bridge or the algorithmic stablecoins. I'm not sure if there is still one, but there were many farming activities on those, which will disappear.
    - LongForWisdom: Yeah, it makes sense.
    - Sebastien Derivaux: That's really what we need to focus on because we could see many onboarding new collaterals and prevailing projects. In the end, what matters is to have people happy to hold some DAI because if they switch to USDC, we are dead.
    - LongForWisdom: I think the focus on the product has mainly been the default right because of the DAI peg-like issue. Up to this point, demand has been exceeding supply, which has been great, but that's not necessarily always the case, as you're saying. Does anybody want to share?
    - Matthew Rabinowitz: Hopefully, people are using DAI as a liquid medium of exchange. In that regard, if it trades at its peg, you'll never really know who's farming and who's using it in the real world. The fact that it can be farmed is a spectacular use case. Who knows what else it'll be used for. Concerning the question regarding the general valuation of MKR attributed to the crypto bullishness, I hope it's driven by earnings and multiple earnings thereof. The more assets and collateral we bring, the more earnings we'll have, which improves the valuation.
    - Sebastien Derivaux: Yeah, I see in the chat that Chris says that he has a large position he used in the real world. However, if it's in the real world, it's no longer DAI. he had to sell the DAI to the people. It's the same if we integrate real-world assets; the DAI will stay in DeFi, so we need some people who have DAI on their wallets. The most sticky reason is to transact. For example, when you want to buy a coffee, everyone has a real wallet, which needs cash. When you do a transaction, you need to monitor the money directly. That's why you want to have some reserve of liquidity. Nonetheless, we need to be the winner on the volume transacted.
- LongForWisdom: Seeing many good comments. If anybody wants to put these in the recording, that might be good. Greg or Chris?
    - Greg: If you look at DAI's structuring behind the scenes, it's not as conducive to payments as USDC. It's going to be very hard for us to beat them at that game. They have unlimited liquidity from the legacy system. In theory, we have to use USDC to get it. Therefore, it doesn't make much sense to have people onboard USDC to onboard DAI and use that as a payment currency. For savings, DAI can beat all of them. The way I think of it is to start a cycle. Hence, you need to fill all the functions of money. You need a unit of account, a medium of exchange, and a store of value. Still, you need to pick one to start with and get a sink into that vertical. Then, once that builds, you can have the others come organically. I think the one that we build to sync with is savings.
    - Akiva Dubrofsky: I think there's a significant usage for DAI and structured products, especially when the DSR comes back. That's a project I'm working on. More people will be working on it using DAI and DSR and structured products to stimulate a lot of demand.
    - Greg: Yes, it's temporary. It's going to go away at some point because it's unsustainable. You can view it as subsidizing our DSR. It's sort of like a DSR, you're getting savings to return, and it's going to eventually go away. We can replace it with the actual DSR when that happens.
    - Sebastien Derivaux: In that case, it means that the DSR is above what is the natural market rate. It's a risk-free interest rate of the market. If it's above this diminishable spread between how much we borrow and how much we lend, then I'm not sure it'll work very well.
    - Greg: But isn't our advantage that we can cherry-pick collateral with high margins. As long as we can offer a percentage point over Libor, we'll be the highest yield on the market.
    - Sebastien Derivaux: Yes, but also creating more risk. What is the difference between a competitor that can do the same? Circle is offering saving products at 10%.
    - Greg: They can do that by adjusting the risk profile of the investor. Even when you compound, you're going out on the risk curve. DSR has no liquidity constraints. I think that will be very attractive to some of the larger integrators.
    - Seb: Yeah, sure, but at this point, this will reduce net income.
    - Greg: Yes, but you get a smaller piece of a bigger pie in my perspective.
    - Matthew Rabinowitz: It's a wonderful problem to have.
- LongForWisdom: Alright, so maybe that about wraps up the discussion on that. Lewis just made a point in the sidebar mentioning how gas costs hurt everyone on Ethereum and the use case for DAI for payments and store of value. We need an L2 core unit sooner rather than later.

## Open Discussion

##### Descriptive Header

[1:04:22](https://youtu.be/gLdCPwvYuFk?t=3862)

- Frank Cruz: Seb, you mentioned you were going to bring something up.
    - Sebastien Derivaux: We can discuss that a little bit. I had a call with some AAVE investors. I tried to pitch Maker to them, and it was partially successful. They said was that it was too complicated. I replied that AAVE is a marketplace for borrowers and lenders and that Maker doesn't have lenders. We mint the DAI. They understand that DAI users are not getting fees, but their reaction was that you're done if you don't have DAI anymore. If I invest in AAVE, there is always a new token if DAI disappears. This was the first interaction. I tried to tell them they can make a slight margin on AAVE or maybe even none at the moment. This wasn't a big deal because, in their mind, AAVE is the leader in the money market. If you have a small cut on a bigger market, it's not a big deal. There's almost no risk because even if USDC disappears, AAVE will stay. I tried to tell them it doesn't exactly work like that. It's easier to duplicate AAVE than Maker because you don't have to build trust in DAI. Akiva is asking me if AAVE tokens have legal rights over the platform. That's another question we need to answer. They prefer the marketplace because it's easier to understand. They don't have the token risk. I told them that Maker creates money and burns MKR tokens while AAVE is creating AAVE tokens. This is not a very good argument in DeFi. People don't really care about burning or minting MKR. It will change at some point. The other point they made is that we should use Chainlink oracles. However, we already have some oracles, and the guy said that he doesn't know how that works. We understand that chaining is public and transparent. I told them the oracle is not an issue. We have customers and even new customers every month. If we are so bad, how is it possible to have new customers every month? One interesting thing was that one of the investors always borrowed USDT on AAVE. I thought, what's the point of using USDT? His reason was that it's a good put option because if USDT crashes as he borrowed USDT to borrow something else, there is no risk for him. If it goes down, his loan decreases in value. That was another reason for using AAVE. One of the guys was very interested because he can put some Loopring tokens. After all, we have a vault. AAVE doesn't have one, and it's only three percent. On Binance, it cost him two percent per day. That was a good selling point. If you have some questions or comments, I know we need to work a little bit more on marketing and stuff like that.
- SamM: I think a good step is to present your presentation. The numbers speak for themselves.
    - Sebastien Derivaux: I sent them the presentation before, but they didn't want to speak about it. It couldn't work because they told me that Chainlink and AAVE are making almost the same amount of money as us.
    - SamM: Chainlink? From what? Price appreciation?
    - Sebastien Derivaux: No, from something else. I never studied Chainlink.
    - Nik: They don't make anything at all.
    - Wouter: They're losing money, right?
    - Sebastien Derivaux: It's not easy to see that if you don't look in detail. Even for AAVE, there will be some origination fee of 20 bips per loan. I'm not sure if it's true or not, but it's correct that there are 20 bips per origination fee. Suppose you multiply it by the loan originated in the last quarter. In that case, it will be 20 million per year or 20 million per quarter. We are making 60 million. AAVE will probably make the same.
    - SamM: What are they making that from? The loans?
    - Sebastien Derivaux: The origination fee. I don't know the details because I haven't studied AAVE as well. For me, they aren't making anything except flash loans.
    - SamM: Flash loans will be only temporary revenue. They will go to zero as these new tokens come online.
    - Sebastien Derivaux: But what is the plan for AAVE?
    - SamM: I don't know.
- Sebastien Derivaux: We need to understand the competition to discuss it. We need some competitor analysis because I don't have too much time to see that. Still, everyone is investing and think they are making a lot of money. Someone is wrong, and I hope it's not us. I'm quite sure it's not us.
    - Chris: The entire space can't use Chainlink oracles, right? Oracles are a system risk. We need a lot of diverse competition in oracles. We don't want to put all our eggs in one basket. It's crazy that people think we can go to Chainlink oracles.
    - LongForWisdom: Out of curiosity, he's using ours with Chainlink as a fallback?
    - Chris: No, I think that was one of the YFI contracts that I looked at.
- LongForWisdom: Alright, we'll wrap up here unless anyone has any other points to make about Maker or our competitors.

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

- Artem Gordon produced this summary.
- David Utrobin produced this summary.
- Denis Mitchell produced this summary.
- Jose Ferrari produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
