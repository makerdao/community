# Episode 53: September 19, 2019

## Agenda

- [00:00](https://youtu.be/aLoqcivNvV0?t=2): Intro with Rich Brown
- [03:17](https://youtu.be/aLoqcivNvV0?t=200): Dai Market Analysis with Vishesh
- [11:20](https://youtu.be/aLoqcivNvV0?t=681): Fluidity TAP mechanism with Fluidity Team
- [01:08:06](https://youtu.be/aLoqcivNvV0?t=4086): Recap of Forum Topics with LongForWisdom

### Video

https://youtu.be/aLoqcivNvV0

### Terms

`SF`: Stability Fee
`SLP`: Secondary Lending Platform
`DSR`: Dai Savings Rate
`ES`: Emergency Shutdown

## Introduction

### Rich

#### Summary & Introduction [00:00](https://youtu.be/aLoqcivNvV0?t=2)

- Today we have guests: The Fluidity Team, who recently put out a [whitepaper](https://tap.fluidity.io/#/) and documentation about their Tokenized Asset Portfolio(TAP) solution for getting assets on-chain and compatible with MCD.
- We are intensely interested in dealing with governance and process issues; don't hesitate to participate in the call and post-call discussion.
- Give us feedback about the call.
- DISCUSSION HAPPENS IN THE [FORUM](https://forum.makerdao.com/)

## Risk

### Vishesh

#### Dai Analytics [03:17](https://youtu.be/aLoqcivNvV0?t=200)

#### Relevant links

[Santiment Maker Data](https://graphs.santiment.net/makerdao)
[Graphs about Maker](http://makerdao.descipher.io/)
[Graphs about DeFi Loans](http://loans.descipher.io/)
[DAI 24hr VWAP Graph](http://dai.descipher.io/)

##### Insights

- Dai is up a significant amount. On September 15th we saw 4.5MM Dai minted. - The increase in Dai happened as a result of refinancing from Compound, as well as an uptick in leveraging activity.
  ![](https://i.imgur.com/QgUHVsN.png)
- Collateral levels are up as well. On September 15th around 63,000 ETH was added as collateral.
  ![](https://i.imgur.com/qf4ITZf.png)
- Dai price has come closer to the \$1 target. - Volume over 24 hours has been relatively low. The newly minted Dai was not immediately dumped on the market. It's been a pleasant surprise to see that all the newly minted Dai has not caused the Dai price to fall as much as expected. This new Dai may be sold over the coming days, so I would still pay attention to the markets.
  ![](https://i.imgur.com/rylARNG.png)
- The seven-day VWAP has moved closer to \$1 - 17MM volume over the last seven days, which is average volume.
  ![](https://i.imgur.com/9wgoGeJ.png)

##### Secondary Lending Platforms

- When the 12.5% SF adjustment occurred, for a few days there wasn't much change in activity on SLPs. For a while, the Maker rate was cheaper than Compound.
  ![](https://i.imgur.com/QitLDIL.png)
- The borrow volume dipped on the 15th, as refinance of a couple of large borrowers from Compound to Maker occurred.

#### Questions for Vishesh

- [07:14](https://youtu.be/aLoqcivNvV0?t=434): On Sep 15th, was it only one significant position that refinanced from Compound to MakerDAO that causes this large blip in the data?
  - Yes, it was primarily one or two large positions, but what is interesting is that it wasn't just a refinancing since these positions being reopened on Maker resulted in new Dai entering circulation.

## Collateral Discussion

### Fluidity Team members: Mark Fernandes, Britton Overall, and Jeff Amico

#### Presentation: [11:20](https://youtu.be/aLoqcivNvV0?t=681)

- The goal is to present and think through this idea, which we think would be a great inclusion into the MakerDAO system.
  ![](https://i.imgur.com/zH0841C.png)
  ![](https://i.imgur.com/Ec5980T.png)
- Doing our part to make Dai grow, we released Tokenized Asset Portfolios earlier this year, intending to use TAP to be able to use synthetic assets in MCD.
  ![](https://i.imgur.com/WIstyH0.png)
- The TAP introduces one single framework for the legal, technical, and operational needs that makes sure the liquidation process happens seamlessly.
  ![](https://i.imgur.com/00Xie7L.png)
  ![](https://i.imgur.com/RoFrbs0.png)
- We used this structure in July, in a pilot we did with US Treasuries. We went through a process of mimicking how this would work end-to-end.
- The treasuries were bought and then held by a custodian. Tokens were issued against these Treasuries. We pledged that token as collateral in Kovan MCD and drew some test-Dai. We created an Oracle to monitor the price of Treasuries for the next few days. We then went through the process of returning the test-Dai and closing the CDP. The whitepaper contains more granular detail about this entire process.
  ![](https://i.imgur.com/ngJFcMD.png)
- We received a lot of feedback from the Ethereum, Defi, and Maker communities that we are in the process of implementing some of that feedback.
  ![](https://i.imgur.com/qZjGxbK.png)
  ![](https://i.imgur.com/r9kbNqR.png)
  ![](https://i.imgur.com/M3H4l62.png)
- [Proposed Additions to the Collateral Onboarding App for Synthetic Assets](https://forum.makerdao.com/t/proposed-additions-to-the-collateral-onboarding-app-for-synthetic-assets/508) - Open to feedback, comment in the thread. - These are their recommendations for questions around synthetic assets.
  ![](https://i.imgur.com/MZJm3HR.png)
  ![](https://i.imgur.com/UzezKWg.png)
- Ultimately our goal is to introduce US Treasuries under the TAP system into MCD as collateral. For Dai to scale, it requires users to be confident in its backing collateral. Because US Treasuries are very stable and liquid, the likelihood of liquidation is very low.
  ![](https://i.imgur.com/YFIHO3z.png)
- Over the next several months, we will be working with the community to better this mechanism, and move it forward to enhance MCD.

#### Questions to the Fluidity Team

- [22:27](https://youtu.be/aLoqcivNvV0?t=1347): How is transparency & trust managed with the use of these additional entities? Is it regulatory? Are there Oracles that can prove certain things?
  - First, you have an Oracle that would connect to the Trust's custody account at all times, such that the MCD system would know that the securities are held there and have not been transferred to a different brokerage account.
  - In the event of a liquidation, some of the feedback we received is, how do you deal with the Sponsor filing bankruptcy and filing a stay on the assets? How does a Keeper know they will be made whole during a liquidation? To address that, we designate the keepers as the legal beneficiaries of the Trust account. Therefore that entity will have a legal obligation to the Keepers. The combination of the on-chain mechanism and legal mechanism helps safeguard this framework.
  - The trust is an independent third party whose existence ensures the recourse process.
- [26:24](https://youtu.be/aLoqcivNvV0?t=1584): I want to make sure I understand the redemption process and its permissionless property of being a Keeper. Is it the case here that the redemption/recourse flow is open to anybody? Or are there restrictions on which types of persons or legal entities can participate in this process?
  - The way we envision it, there will be a way for keepers to redeem post-auction collateral for Dai through Fluidity. Assuming that Fluidity is in the picture and solvent, we would return Dai for every token deposited. The trust mechanism I describe is a last resort. It assumes Fluidity is not in the picture and acts as a safeguard to make sure Keepers get value back for the tokens that they purchased. Because it's a regulated trust entity, there will need to be regular KYC on the participants who are bringing the token back. Any transaction there would need to be legally compliant. Though we don't envision materially restricting the type of people who could bring a token back for redemption, so long as they are not sanctioned or on some explicitly restricted list, Fluidity should be able to handle those redemptions.
- [29:00](https://youtu.be/aLoqcivNvV0?t=1742): Is there a difference in cost between participating as a US compliant entity or a pseudonymous entity?
  - There would be no difference in cost.
- [29:38](https://youtu.be/aLoqcivNvV0?t=1778): What is the anticipated duration of any given liquidation event? i.e., how long does it take for a Keeper to get paid? - One of the reasons we chose US Treasuries as the first pilot asset to try this framework is because US Treasuries are a huge and liquid market. The liquidation process would involve the keeper bringing the token to Fluidity/the Trust, which would then we able to provide them with DAI/USD in exchange for that token. This presumes that the underlying assets were liquidated effectively. We think US Treasuries are perfect as a test case because of the liquidity in their markets. We think this can all happen on the same day.
  ![](https://i.imgur.com/ljquk10.png)
- [32:00](https://youtu.be/aLoqcivNvV0?t=1923): It looks like there are a lot of middle-men in this model. Doesn't this eat into the profit margins of the end-users? Is there a way to get rid of these middle-men?
  - It's ultimately a balance between reducing intermediaries and using a robust system that can maintain the integrity of the Dai system in the event of a liquidation.
  - We think these middle-men may ultimately be necessary to give the system assurance that in the event of liquidation that the Keepers would be made whole. The introduction of these intermediaries attempts to lower the counterparty risk.
- [36:35](https://youtu.be/aLoqcivNvV0?t=2196): What is the primary reason for all the additional proposed questions for synthetic assets? Is it that synthetic has so many real-world interactions compared to pure crypto assets?
- Yes, exactly. Interacting with additional third parties warrants further questioning. Also, considering that off-chain data will be needed to facilitate the collateral, it's essential to ask questions to define better the context for how that data is handled.
- [42:03](https://youtu.be/aLoqcivNvV0?t=2523): You make the point that US Treasuries have a fixed rate of return, which makes it very easy to see when the rate of return exceeds or is less than the Stability Fee. Would that not result in the entire collateral pool for Treasuries disappearing and reappearing as a result of this threshold?
  - We believe people will hold their positions that they will not be able to get out of immediately. So there won't be an immediate action to close CDPs. Based on how users have used Dai to get returns elsewhere, we see that there may be cases where users decide to keep their CDPs open even if the SF is high.
- [44:12](https://youtu.be/aLoqcivNvV0?t=2652): More on the philosophical side, let's say the Maker community adopts the TAP framework. Let's say some significant portion of collateral is in this framework. What then do you think differentiates the Maker system, for creating Dai, from something like Tether or USDC. In so far as much of the recourse mechanisms start to look similar in this model. Why is Maker a better, trust-minimizing alternative to systems in that world?
  - Users are still given the option to open CDPs in a fully permissionless way; even if Treasuries make up a substantial portion of the collateral pool, it doesn't restrict users from opening CDPs using ETH or other permissionless assets.
  - Additionally, the mechanisms by which the risk of the assets is monitored and controlled remain the same. There is over-collateralization required, a Stability Fee that is determined by Maker Governance, and ultimately has decentralized governance managing this collateral type in the system. The decision making around this asset type is in the hands of the people monitoring and controlling for the risk in a public fashion.
- [46:23](https://youtu.be/aLoqcivNvV0?t=2783): Continued: Let's say the majority of Dai is issued from a regulated, off-chain asset. How would a 3rd party view Dai itself as an asset, from a risk perspective? Does it begin to look more similar to something like USDC?
  - Another distinction is the option to obtain leverage in Dai, which is not available in the USDC/Tether infrastructure. This continues to distinguish Dai, fundamentally.
  - There's always some degree of regulatory shutdown/backdoor risk. While it may not be as explicit with MCD, there will still be regulatory chokepoints that can be exploited to hurt Maker regardless. Relatedly, there is a balance and a tradeoff that is present here. We think the value for scaling Dai outweighs the increased backdoor risk synthetics and off-chain asset carry.
- [52:24](https://youtu.be/aLoqcivNvV0?t=3144): What are the use cases for US Treasury TAPs? Can they be used for exposure to US Treasuries outside of their use as collateral for CDPs?
  - No, we are designing these specifically for CDP collateral. These are purely a receipt whose sole purpose is to sit inside of a CDP and to reflect the value of the underlying treasuries.
- [53:34](https://youtu.be/aLoqcivNvV0?t=3214): How much of this has been built? How far are you from the launch?
  - We're far along in conversation with Trust partners who understand the structure we are talking about, who think they can handle liquidation, the redemption of tokens, and things like that.
  - The overall structure, from a legal standpoint, works.
  - We've built out the contracts, the tokens, the accessory scripts that would interact with MCD, and we've built Oracles off of one of the custodians we are working within the Pilot. We will need to upgrade various things as MCD officially rolls out, in addition to building more resilient Oracles once Maker's risk team decides on the standards for them.
- [56:34](https://youtu.be/aLoqcivNvV0?t=3394): I believe you said that Keepers wouldn't be required to KYC to participate in collateral auctions, is that correct?
  - Yes, Keepers would be able to interact with Fluidity rather than the trust directly to redeem those tokens for Dai.
- Question continued: An extension to that, then, is in the event of an Emergency Shutdown/Global Settlement would Fluidity be able to facilitate the redemption of all the collateral tokens?
  - I don't see why not. Anyone who has a TAP token would be able to redeem it for Dai, but in the case of ES, we would have to pay out TAP token holders in USD.
  - TAP tokens would be fungible with no transfer restrictions, so users would be able to offload their TAP tokens without needing to KYC themselves.
- [01:02:08](https://youtu.be/aLoqcivNvV0?t=3728): What are your thoughts on bringing in a 3rd party legal "risk-team," to help evaluate some of the questions around this framework?
  - In parallel to community feedback about the legal mechanisms of this framework, we've been working with external counsel in structuring this and getting assurance that it complies with all applicable regulations. Of course, we welcome further feedback from the community, whether it's informal or through a 3rd party risk-team.
- Continued: My(Cyrus) impression is that there is a lot of regulatory uncertainty in the crypto-world as a whole. I think many crypto-lawyers are just waiting for more guidance. To what extent should that risk be mitigated by waiting for more clarity? What counsel is able to make the necessary useful guidance at this point?
  - I think an agency like the SEC plays it close to the vest. They do provide some guidance. We think that this instrument complies with their frameworks. We've also examined this framework under other regulatory regimes.
  - With any new tech, there will be regulatory grey areas. The best thing we can do is to structure this framework along what we see in the current regulatory environment.

## Governance

### LongForWisdom

#### Forum Activity Recap [01:08:06](https://youtu.be/aLoqcivNvV0?t=4086)

- Not too much new forum activity this week. Discussion has been happening around Stablecoins as collateral, and the DSR discussion.
- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
- [What's the point of adding stable coins as collateral?](https://forum.makerdao.com/t/whats-the-point-of-adding-stablecoins-as-collateral/453)
  - Rune shares some thoughts on the value of stable-coins as collateral. Benefits and downsides discussed within.
- [Cyrus recently posted about DSR Initial values](https://forum.makerdao.com/t/an-update-on-dsr-and-initial-values/433)
  - This thread is open for feedback and discussion.
- [Signal Request: Should we move to exponential rate stepping for stability fee polls?](https://forum.makerdao.com/t/signal-request-should-we-move-to-exponential-rate-stepping-for-stability-fee-polls/40)
  - This seems to have come to an end and will be moving on-chain soon.
  - Rich: I posted a summary in that thread about the journey we went on to introduce exponential rate-stepping to the SF adjustments. The main takeaway is getting a sense of what we think is an adequate consensus. **On Monday MKR token holders will have the opportunity to vote on the change from linear to exponential rate-stepping.**
- [Should we change the stability fee poll cadence?](https://forum.makerdao.com/t/should-we-change-the-stability-fee-poll-cadence/395)
  - The community is having a similar discussion about the frequency of SF adjustment polls. Some are arguing for a two-week cadence.
  - Currently(09/22/10) a poll up to determine whether there is consensus to change the cadence. It seems that it's 60/40 against changing the cadence, with 19 voters.
  - More participation is needed to see if this is something the greater community wants.

#### Links from the Chat

- [Santiment Maker Data](https://graphs.santiment.net/makerdao)
- [Graphs about Maker](http://makerdao.descipher.io/)
- [Graphs about DeFi Loans](http://loans.descipher.io/)
- [DAI 24hr VWAP Graph](http://dai.descipher.io/)
- [TAP Whitepaper](https://tap.fluidity.io/#/)
- [Proposed Additions to the Collateral Onboarding App for Synthetic Assets-Fluidity](https://forum.makerdao.com/t/proposed-additions-to-the-collateral-onboarding-app-for-synthetic-assets/508)
