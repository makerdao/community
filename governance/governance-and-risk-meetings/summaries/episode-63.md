# Episode 63: November 28, 2019

## Agenda

- [00:00](https://www.youtube.com/watch?v=hAlPwTMd4Yk&t=0s) Intro with Rich Brown
- [2:18](https://youtu.be/hAlPwTMd4Yk?t=138) Recap of Forum Topics with LongForWisdom
- [08:06](https://youtu.be/hAlPwTMd4Yk?t=486) DAI & SAI state of the pegs with Primoz
- [26:59](https://youtu.be/hAlPwTMd4Yk?t=1619) Monetary Policy in MCD with Primoz
- [49:13](https://youtu.be/hAlPwTMd4Yk?t=2953) Overview of current challenges and discussion with Rich Brown.

## Video

<https://www.youtube.com/watch?v=hAlPwTMd4Yk&t=0s>

## Abbreviated Terms

`SCD`: The Single-Collateral DAI system

`MCD`: The Multi-Collateral DAI system

`ES`: Emergency Shutdown

`SF`: Stability Fee

`SLP`: Secondary Lending Platform

`DSR`: DAI Savings Rate

`CDP`: SCD CDP

`Vault`: MCD CDP

## Introduction & Governance

- We're going to shake up the order so we can keep things a little more fresh for everyone. We will do the forum recap and state of the pegs at the beginning.
  - Primoz is taking over Vishesh's spot for today in discussing the state of the pegs.
- Later in the call we will talk about Governance 2.0 at MakerDAO.
  - I want to focus on pain points and how we can source, order, and rank those issues.

### LongForWisdom

#### Forum Activity Recap

[2:18](https://youtu.be/hAlPwTMd4Yk?t=138)

- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
- [voting incentives](https://forum.makerdao.com/t/vote-delegation-is-not-something-we-should-be-striving-for/336)
  - This thread is about discussing possible incentives for encouraging voting in the Maker Protocol.
- [Negative interest rates(and their affects on MCD)](https://forum.makerdao.com/t/negative-interest-rates/842)
  - Mentions TRFM and has a good breakdown of that concept.
- [DSR and SF spread](https://forum.makerdao.com/t/the-dsr-sf-spread-should-be-as-tight-as-possible-to-maximize-growth/844).
  - A discussion on the ideal rate spread in the future prompted by Hexonaut. Lots of good conversations and evaluations of the pros and cons. A good example of gaining organizational and community alignment.
- [[Signal Request]How should we structure Monetary Policy Polls in MCD](https://forum.makerdao.com/t/signal-request-poll-how-should-we-structure-monetary-policy-polls-in-mcd/854)
  - Multiple options are offered on the thread. The three poll option is currently winning by a large margin.
  - Rich: This is a good example of needing to fine-tune the process around the additional number of levers we now manage. Please take a look at this since we are seeking a signal to know how to move forward.
- [System Parameters Derivations](https://forum.makerdao.com/t/discussion-system-parameters-derivations/793)
- [Debt Ceiling Mechanics](https://forum.makerdao.com/t/debt-ceiling-mechanics/785)

## State of the Pegs

### Primoz Kordez

[08:06](https://youtu.be/hAlPwTMd4Yk?t=486)

#### Relevant links

[Live Migration Data](https://sai2dai.xyz)
[MCD system stats](http://daistats.com)
[SCD system stats](http://saistats.com/)
[DAI & Sai 24hr VWAP Graphs](http://dai.descipher.io/)

#### Insights

![](https://i.imgur.com/G6vpk2E.png)

- Around 15%-20% of Sai has migrated

![](https://i.imgur.com/nFJygw7.png)

- \$60 million in Ether locked.
- The collateralization ratio is similar to Sai.

![](https://i.imgur.com/EXAgG2f.png)

- Only 16% of Dai is in the DSR.
- I expected more, but its possible people don't want the additional smart-contract risk.
- Understanding how to tune DSR if the utilization rate is low is an interesting question.
- [09:51](https://youtu.be/hAlPwTMd4Yk?t=591) Rich: 16% in DSR sounds fantastically high to me because it presupposes that 16% of Dai holders have nothing better to do with their Dai. Isn't Dai being used the portion that's not in DSR?
- Primoz: Possibly, but there are only 10 days of data, so I don't want to make any judgments on this.

![](https://i.imgur.com/zsQNALy.png)

- Dai is 70% of the size of the Sai liquidity pool on Uniswap.

![](https://i.imgur.com/wpXxFXi.png)

- Overall net liquidity between both Sai and Dai is up. Though a lot of the Sai liquidity pool was moved into Dai.

![](https://i.imgur.com/7ErKNuA.png)

- In regards to Sai price, we had a volatile few days. The spikes are most likely caused by the ETH price action since during these times, CDP owners are buying Sai to wind down their positions to avoid liquidation. This is not out of the ordinary.

![](https://i.imgur.com/Q0YODrd.png)

- The same goes for Dai as the Sai comments above.

![](https://i.imgur.com/0sJdBa3.png)

- 24 Hour DAI VWAP
- Sai is at 3 million in volume

![](https://i.imgur.com/vwbGpxJ.png)

- 24 SAI VWAP
- It's hard for me to say anything about what happened in such a short time-frame. Sai and Dai are both trading very close to \$1.
- Dai is at 1.8 million in volume
- These volumes don't count Coinbase, but if they did, the liquidity between both Dai and Sai would be almost the same.

![](https://i.imgur.com/V8L1cb8.png)

- Percentage of active coins. You can see activity increasing. Old coins move around due to migration. You can frame this as a value transfer.

![](https://i.imgur.com/GPH0o0q.png)

- Additionally, here is the token ag consumed chart.

![](https://i.imgur.com/IkzQHmC.png)

- Volume of `locks` and `frees`.
- Vaults couldn't make as many transfers in the past few days due to a lack of Sai liquidity in the migration contract.

![](https://i.imgur.com/GPILGjQ.png)

- Volume of `draws` and `wipes`.
- The migration contract draws SAI quickly on migration. Not a lot of SAI has been available in the last few days.

![](https://i.imgur.com/e8Lg9JZ.png)

- Wipes by the size of a vault.
- Looking into large addresses to see if whales are moving positions. They can't transfer much yet since the SAI in the contract is constantly utilized. The biggest whales still need to migrate.

![](https://i.imgur.com/iSHdRqC.png)

- Wipes by debt age.
- Younger vaults were wiping their SAI debt and moving first.

![](https://i.imgur.com/FX34BhU.png)

- The Collateralization Ratio went down a bit, then bounced back as a result of CDP owner behavior during the ETH price drop.

![](https://i.imgur.com/rR9kSRw.png)

- These are Collateralization Ratios of CDPs by bucket.

#### Secondary Lending Platforms

![](https://i.imgur.com/xaHove5.png)

- The third biggest liquidations, in value, happened on Maker, but you can see how much this impacted other platforms. Especially dYdX, where liquidations ultimately affected rates.

![](https://i.imgur.com/6K82l3i.png)

- \$5,000,000 of MKR moved to three CDP Vault owners. Likely they're just speculating on MKR. However, they paid fees with DAI and not MKR. 400K in fees paid.

![](https://i.imgur.com/veXeTWc.png)

- Rates went down, dYdX borrow and supply went down most dramatically. About 40% of the debt outstanding wiped. Since the borrow volume dropped, the rates went down, and then so did the supply amounts.

![](https://i.imgur.com/3cetwxl.png)

- SAI supply leaving other platforms. Not sure where, but some are moving to Maker. My bet is on some motion into USDC, but I can't be entirely sure where the SAI is moving.

![](https://i.imgur.com/dohUPQU.png)

- Market liquidity at Compound is low currently. If supply rates go 4% higher, then it would compete in the market. We'll see some of the SAI savers migrate to DAI. They will likely use the migration contract. The most important factor is the exchange migration next week.

#### Questions to Primoz

[09:51](https://youtu.be/hAlPwTMd4Yk?t=591)

- Rich: 16% in DSR sounds fantastically high to me because it presupposes that 16% of Dai holders have nothing better to do with their Dai. Isn't Dai being used the portion that's not in DSR?
  - Primoz: Possibly, but there are only 10 days of data, so I don't want to make any judgments on this.

## Monetary Policy in MCD

### Primoz Kordez

[26:59](https://youtu.be/hAlPwTMd4Yk?t=1619)

![](https://i.imgur.com/CyKkaPI.png)

![](https://i.imgur.com/uDCjoQr.png)

![](https://i.imgur.com/4bZoSlo.png)

- The spread is a function of risk but could affect monetary policy.

![](https://i.imgur.com/N1CHcSZ.png)

- We only have practical experience with the negative correlation here — the higher the stability fee, the lower the DAI supply. The exact slope is outside of Maker's current tooling, and it's a broad scope. Including secondary lending platforms etc.

![](https://i.imgur.com/M9fK3tq.png)

- The above is a multi-curve graph in MCD. DSR and SF on top; and simple supply/demand plots on the bottom. These graphs combined assist with a visual, leading monetary policy through a fixed spread, since we can adjust DSR to boost Dai demand. Like the previous DAI graph, this graph is a negative correlation; E.G., lower the SF, the higher the DAI supply. We advise a tight spread from a 2% risk assumption.

![](https://i.imgur.com/R1ThHbB.png)

- `Monetary Spread` is a term I came up with to equal the difference between the effective spread and the risk premium. This spread can tell us how the DSR Utilization behaves.
- Risk premium is always offset depending on the Utilization Rate of the DSR.

![](https://i.imgur.com/re9qGCv.png)

- I believe observing and measuring `Monetary Spread` and `Effective Spread` is very important for us to understand how rate adjustments might affect coverage of risk premiums since DSR utilization is constantly changing.
- When deciding monetary policy, we should have in our minds that DSR utilization will change. You can assume 100% utilization to be conservative and cover risk premiums.
- If you believe DSR Utilization will not be very high, then the spread that we set could be a bit lower than the risk premium. **Keeping the spread close to risk premium is an additional carrot to consider, making sure that we're accounting for the utilization rate.**

![](https://i.imgur.com/HQ4KKcj.png)

#### Questions and Discussion

[34:46](https://youtu.be/hAlPwTMd4Yk?t=2087)

- Rich: How do we get a sense of cause and effect, also elasticity in the system?
  - Primoz: You could look at secondary lenders to see how rates affected the supply/borrow markets. It's not easy since it's interrelated and has a lot of confounding variables.
  - Rich: Exactly. There are quite a few variables. Do we need more 3-6 month empirical studies?
  - Primoz: That would help, but you need to look at the market holistically. Especially since the Ether price is significant to the variables affecting each other. For example, borrowers on Maker are less sensitive to SF raises during bull markets.

[44:32](https://youtu.be/hAlPwTMd4Yk?t=2672)

- Rich: How do we use this to determine what we should vote on weekly? Should we bundle any factors?
  - Primoz: Is your question with regards to the migration, or classic monetary policy?
  - Rich: This is the key issue we're dealing with, balancing migration and then transitioning into classical monetary policy. I am mostly concerned about cognitive overhead, operational overhead, and organizational risk. Four or five polls per week is intense. I'm looking for a graph that states something; E.G., "change these two numbers" and ignore the rest.
  - Primoz: Specified risk premiums provide a defined spread. That's being developed. Understanding how savers and borrowers behave is essential. We've learned that savers are much more sensitive than borrowers. Knowing how bullish a market is, comparing with analysis, following the data will help indicate some directions.
  - Rich: The cadence of administration is the most important. Thanks for sharing the borrow/lending relationship. Another reminder about changing factors and how they ripple throughout the ecosystem.

### Rich

#### Summary

[49:13](https://youtu.be/hAlPwTMd4Yk?t=2953)

- We need to chat about governance version two, including a governance system audit that includes our tooling, systems, processes, and functions, which need to be improved to sustain DAI in the future.
- I'm partial to the application model since we debate issues and configure that application. We have to figure out the model of what we're going to change and the expected results.
- Our focus as a community should be project planning, specifying requirements, identifying stakeholders, data reporting, meetings, and building what we need.
- With this seismic shift in our 'application,' then we can engage an audit as a project. Collecting issues, collating, prioritizing them, creating visibility around them, and forming a working group. E.G.:
  - Identifying the wins and failures of governance.
  - Revisiting the polling cadence, if it works _and_ if it was effective.
  - Thinking about how we measure the effects of our monetary policy.
  - A communication review, how to keep the ecosystem informed, and how the protocol works.
  - Weak Executive Votes is a worry that we need to address. Our first MCD executive had to blend technical fixes and monetary policy.
  - Voting apathy.
  - Low visibility hats.
  - Cognitive overhead.
  - Scheduling and calendar difficulties. How often we need to do things and how frequently.
  - We'll need to figure out how to publish information to everyone at large, from forum poll to on-chain vote.
  - Collecting data for supporting previous assumptions.
- The point is: there is **lots** of work to do. MakerDAO has the programs to pay people, and many projects within those programs.

#### Questions and Discussion

[1:01:41](https://youtu.be/hAlPwTMd4Yk?t=3699)

- LFW: Robert, from Compound, shares plans for [cDAI via Rocket Chat,](https://chat.makerdao.com/channel/governance-and-risk?msg=zm6WvYLY5vWHTJMkR) and the [blog post he linked](https://medium.com/compound-finance/compound-multi-collateral-dai-57b803f86cc9)
  ![](https://i.imgur.com/5QgGJIK.png)

[1:03:37](https://youtu.be/hAlPwTMd4Yk?t=3817)

- Taking another opportunity to continue earlier thread: it's essential to create this formal group. By formalizing this process with issue trackers, ticketing, and version control, we'll have a broader and significant impact. Workflow options to track success and ownership is essential. Github boards and issues will probably be the most helpful for the application and product model I mentioned. Looking forward to getting this working group started!

## Credits

- Tim Black, produced this summary
- David Utrobin, produced this summary
- Everyone who spoke and presented on the call (listed in the headers)
