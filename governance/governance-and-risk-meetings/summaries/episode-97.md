# Episode 97: June 18, 2020

## Agenda

- [00:00](https://www.youtube.com/watch?v=cIqyJ8-3MMs): Intro and Governance at a Glance with LongForWisdom
- [22:32](https://youtu.be/cIqyJ8-3MMs?t=1352): Removing SAI from MCD and Smart Contracts with Mariano Conti
- [25:20](https://youtu.be/cIqyJ8-3MMs?t=1520): SourceCred Update with Seth Benton
- [38:40](https://youtu.be/cIqyJ8-3MMs?t=2320): Weekly MIPs Update with Charles St. Louis
- [46:18](https://youtu.be/cIqyJ8-3MMs?t=2778): Governance Poll Review with Governance Facilitators
- [49:03](https://youtu.be/cIqyJ8-3MMs?t=2943): State of the Peg with Vishesh Choudry
- [56:33](https://youtu.be/cIqyJ8-3MMs?t=3393): Open Ended Discussion

## Video

<https://www.youtube.com/watch?v=cIqyJ8-3MMs>

## Introduction

### Long For Wisdom

#### Agenda Summary

- Welcome to the 97th Governance and Risk meeting for MakerDAO. My name is LongforWisdom; I'm one of the Governance Facilitators.
- We have a fairly short Agenda. Governance at a Glance from me, Sourcecred trial update with Seth, Mariano from Smart contracts will talk about removing the last of Sai from MCD, Charles St. Louis will give us a MIPs update, we'll have the governance facilitators doing the governance poll review, then we have Vishesh with the State of the Peg, and finally we'll finish off with a general Q&A session as we usually do.
- As always, discussions happen in the [Forum.](https://forum.makerdao.com/)

#### Governance at a Glance

It's been moderately quiet this week on the forums. Not too many active discussions. Lots of engagement in the liquidation system redesign thread. Fairly recent threads include:

- [Bounties & Grants to improve governance and MKR protocol](https://forum.makerdao.com/t/bounties-grants-to-improve-governance-and-mkr-protocol/2857)
  - Freiza talks about bounties and grants and some suggestions of how it can look like for MakerDAO.
- [Soft Locks and Future Guidance: A Pre-MIP Discussion](https://forum.makerdao.com/t/soft-locks-and-future-guidance-a-pre-mip-discussion/2875)
  - Akiva posts a pre-mip discussion soft committing to keeping risk premiums and parameters static (absent of specific conditions changing), which I thought was an interesting discussion to consider.
- [A Liquidation System Redesign: A Pre-MIP Discussion](https://forum.makerdao.com/t/a-liquidation-system-redesign-a-pre-mip-discussion/2790)
  - I encourage anyone with ideas and insights on the redesigns to participate here.

##### Seeking Signal

- [Adjust the WBTC Debt Ceiling and Risk Premium](https://forum.makerdao.com/t/signal-request-adjust-the-wbtc-debt-ceiling-and-risk-premium/2824/)
  - The WBTC signal poll attracted a lot of attention and votes, which is fantastic. I would generally say, please do vote. If you haven't voted, please vote for the leading option if you find it acceptable. We want as much consensus as possible on the risk parameter changes too. Currently, 20 million debt ceiling is leading the vote with 52%.
  - For the Risk Premium: 2% is leading with 47%. The 2nd leading option is "letting the risk team decide," which is interesting. Let's take a brief moment to discuss this for a moment. We can spend 5 or 10 minutes.

#### Discussion 1

[4:14](https://youtu.be/cIqyJ8-3MMs?t=254)

- Cyrus: I think there's a complex situation with the debt ceiling. I know it's a little difficult to quantify risk around Bitcoin. I know there isn't a good framework evaluating custodial centralization risk. It's potentially not doable or at least requires legal opinions. We've seen a few legal analysis by community members but generally doesn't seem like anybody is willing or capable of taking a strong stand. We can say what the effects would be if things go very wrong. The edge case here is that some asset's entire debt ceiling could be absorbed as bad debt into the system. We saw bad debt absorbed into the system as a result of Black Thursday with five or so million Dai paid back. So, this is an issue we have with WBTC, USDC, and any other future centralized collateral types we are putting into the system. That's why there is hesitation on my part to raise the debt ceiling. Additionally, what are the incentives and benefits of raising it? We are in a low rate environment. Stability fees are at 0-1%. Lots of carry trades(borrow cheap, lend elsewhere) going on in the DeFi ecosystem. It essentially amounts to a subsidy of sorts from MakerDAO to the community in hopes of continuing to keep the Dai peg close to $1. It is interesting to see what the wrapped bitcoin demand would be. I don't know when that's going to happen or when we will get there. I think this needs a careful balancing of trade-offs. Pros of increasing debt the ceiling are an increased dai supply and peg improvement. Despite the peg being close to $1 it still needs a lot of supply to come in to push it below that \$1. Regarding adoption and growth, I think market makers would love to see the debt ceiling increase to allow them to make various trades in the DeFi ecosystem. But here are downsides; In the absence of anyone from the community to come in and make a strong argument as to why we should raise the debt ceiling from a perspective of centralization risk, I don't know that it's such an automatic decision. With ETH, if we hit cap, there's leeway of raising it because risks are constrained to the price risks rather than the additional credit risk to worry about. My minimum ask is to be cognizant that the risks of WBTC are different than ETH. If the community still wants to raise it, that's' totally fine. There are interesting ways to do it in a safer way.
- Cyrus: One idea is to add a second WBTC vault with a higher liquidation ratio of 175 or 200% and add another 10 million DC there. The second option is to increase the current DC but also start to aggressively increase the stability fee, almost like a utilization rate penalty. So if we increase the DC from say 10 to 20 million and increase the stability fee a few percent and so on. This doesn't really have the intended effect we want, which is worst-case loss protection. But, on average, it does provide additional compensation to the protocol. I would love to hear from other people.
  - Joe: We got to get this moving. Having KNC and ZRX Vaults will help out, but other people are taking bigger risks than us. Tether being the big thing at Compound. For us to increase by 10M with 4% SF on WBTC...I think we can increase to 5-7% and people will still use that. The chances of default are very small.

[11:20](https://youtu.be/cIqyJ8-3MMs?t=680)

- Cmooney: A big change for me was that [WBTC.cafe](https://wbtc.cafe/) went live. It is a very easy way to flip between WBTC to RENBTC and go back to the ren bridge. This mitigates some of the concern I had around liquidation and the available market depth to handle that. It's not perfect. There isn't enough RENBTC in the bridge to handle what we have in WBTC, but it certainly lessens the concerns at least from a liquidation perspective.
  - CY: Here's a question; If this is pure BTC with no trustless bridge, If ETH debt ceiling is 100 million, then the Bitcoin DC can be significantly higher than that, does that mean the community is okay with having 150 million of WBTC? I agree that the risk is small, but it's not zero. That would be a better signal request in my mind. Specifically that risk, rather than what we think the debt ceiling should be.
  - Cmooney: Any BTC we get on Ethereum is not going to be as risk-free as ETH. So were going to have that calculation in there. The decentralized bridges may get so good and baked in to trust it more and more over time, but I think you are right to call out the centralization risk and that it's hard to quantify.
  - JoeQ: Do we charge for that risk? If we take the risk and put say 30M, the default should have interest rates at about 7-8% because the overall market is around 9-10% right now.
  - CY: Compensation for risk through the stability fee doesn't compensate for the exposure risk. It's not like we can have an uncapped debt ceiling so long as we increase the stability fee because then MakerDAO as a whole becomes susceptible to the risks of a single collateral type. If there's a plan to get dozens or hundreds of collateral types into the system, they are all likely to have smaller debt ceilings. We can consider increasing the few we have now with the plan to bring them back down into proportion once other Vaults are added to prevent a balloon and exposure risk scenario. My concern is that even if we charge something high, having that single point of risk can take down the whole system.
  - Cmooney: Risk premium off WBTC will help build the surplus buffer. If the entire thing evaporated, we take a surplus buffer hit, but over time we have an insulating layer. March 12 blew our surplus buffer; therefore, we need to build it up again. It's not an ideal situation. While increasing the stability fee doesn't remove the risk of collateral disappearing, but over time it can help mitigate that risk. But this is a tricky situation.

[16:38](https://youtu.be/cIqyJ8-3MMs?t=998)

- Greg: Do we know if WBTC is covered by BitGo's insurance policy? Is the hundred million in insurance coverage for individual asset holders?
  - Kairash: Yes, it's 100M per wallet and insurance up to 100M. If over that, we distribute multiple wallets. But if there becomes any other reason to use a single wallet, we can cheaply increase that 100M limit.
  - Greg: Are vaults covered under insurance for theft?
  - Kiarash: Yes, for the BTC in WBTC but no for anything outside.
  - Greg: Cyrus, so isn't this the risk we're trying to compensate for?
  - Cyrus: There's other non-theft counterparty risk. Let me reiterate. My stance is that if this is the will of the community and goes through governance, it's workable. It gives me pause when thinking about whether a debt ceiling increase is something automatic like the ETH ones. I just want to highlight that there's an additional class of risk here that is difficult to reason about and that we should be conscious of the fact that being compensated by an additional 5% stability fee doesn't compensate for when we have to absorb the entire 20M DC through debt auctions. If we can agree to that and be aware, then okay.
  - Cyrus: One other aspect of WBTC: MakerDAO is housing 2700 out of total 4100 WBTC in existence, 66%. This is quite high, and the redemption risk during market chaos becomes a concern, as well as it could impact keeper liquidity.

[19:22](https://youtu.be/cIqyJ8-3MMs?t=1163)

- Elijah: Question about the quoted 10% figure for centralized BTC borrowing. Is it for uncollateralized debt?
  - Cyrus: That 10% number is random. Somebody posted it in chat, but it's not a hard rule.
  - Elijah: That would be a steep stability fee because collateralized debt is around 3-5%, but I just question the 7% figure.
  - Joe: He is correct. 3-5% would be correct for collateralized debt.

## Smart Contracts

### Mariano Conti

#### SCD Shutdown

[22:32](https://youtu.be/cIqyJ8-3MMs?t=1352)

- Starting last month, after SCD shutdown, we still need to do a little bit of housekeeping, just a bit of smart contracts work to zero out some states in the smart contracts. We've made this public at github.com/makerdao/spells
- We've discussed this [in the forums](https://forum.makerdao.com/t/removing-sai-from-mcd-completely/2638), and everybody is ok with it, so my idea is to put it up for a vote tomorrow along with whatever else needs to happen with the executive. If I understand correctly, there's nothing else to do, but I would still like to get the go-ahead to do this.
  - LongForWisdom: Yes, I think it's fine. We have discussed this in the forums, and no one seems to object strongly. If, for any reason, MKR holders oppose it, they can vote it down, so this is mainly informing people that it would be in the next executive, so they're not surprised.

#### Relevant Links

[Forum Thread: Removing Sai from MCD completely](https://forum.makerdao.com/t/removing-sai-from-mcd-completely/2638)

## Community

### Seth Benton

#### Sourcecred Trial Update

[25:20](https://youtu.be/cIqyJ8-3MMs?t=1520)

![](https://i.imgur.com/LWrULWh.png)

- What you see right now is an instance of SourceCred, which is an open-source protocol for valuing, measuring, and rewarding open source contributions.
- SourceCred is doing a trial with MakerDAO, where we are scoring contributions on the Maker Forum. The Foundation is distributing right now 5 thousand dollars worth of Dai, according to Cred scores. So \$ 1,250 a week now.

![](https://i.imgur.com/72gBYxo.png)

- Every Monday, we are posting the Cred scores for the week and distributions. Here we can see some scores, if anyone has any ideas or questions on how this data is presented, please let me know, and that is something that we can evolve.

![](https://i.imgur.com/LWrULWh.png)

- And to go back to the instance here, I will do a quick tour through the UI. I also want to let you know that SourceCred is undergoing a redesign of the UI right now. There is going to be something much better here in the next week or two, so I won't spend too much time on this now.
- Here you can see the Cred Scores over time. The default is by users, but you can also sort it by topic or posts. You can also look at the post that got the most Cred for a given week. Since my screen is going slowly, I won't go into that too much. You can go in and change the default weights of the system. I can link to some documentation on how to do that as well.

![](https://i.imgur.com/aV0BfJb.png)

- LongForWisdom: I find that messing with the weights of the algorithm is pretty interesting. To see how it affects Cred scores generally. There are different sliders to control how much Cred flows from different nodes. How much Cred flows from a topic to the person who made the topic, from people who liked things to the thing they liked, that sort of stuff. It is quite interesting to look at the default weights that have been used, fiddle with them, and potentially see if you can figure out a better configuration of the weights that leads to a cred distribution that you think better matches people's contributions.
- Seth: Absolutely! We have put a considerable amount of thought into the default weights, and we think it works well out of the box, but there are certainly better configurations for Makers. I encourage everyone to put up the weights, and if you can find a better configuration that gives a better reflection of reality, let us know. We are totally open to tweaking them to optimize them.

![](https://i.imgur.com/Otq4J1m.png)

- So here are some observations from the trial. Here there is a chart of the cred distribution overtime for the whole lifetime of the forum.
- As you can see, this week, it is dropping off. This is not surprising because the peak here is basically Black Thursday and all the activity around that. I am expecting this to bottom out and then form a baseline that we can use to select a more accurate measure of the effects of SourceCred. The main metric we are looking to optimize for is the engagement on the forums: getting more people to engage.

![](https://i.imgur.com/5ekjHAh.png)

- Some observations from the first two and a half weeks since the trial has been going. First of all, no overt gaming, which was great to see. Not terribly surprising because the Maker community is relatively small and high trust. We will definitely be digitally monitoring for gaming, but none so far.
- We have 13 opt-ins. Also, a reminder that you do need to opt-in to the trial. I will post a link with instructions on how to opt-in. Basically, you just need to e-mail me with the Ethereum address to send Dai to.
- We are seeing a few interesting edge cases that we didn't see internally at SourceCred. For instance, some scores are artificially high because there is a quirk where if the contributor comes in and contributes a lot of value and then disappears without liking or engaging with other content, then Cred gets trapped in that person's node, and they have an artificially high score. We don't see that as terribly problematic because there is not too much money being diverted from that, and we also have a refactor of the algorithm in progress which is going to fix that problem, which I will talk about in a minute.

![](https://i.imgur.com/05Gu6Ga.png)

- I will finish with a brief roadmap of what SourceCred is up to. As I mentioned, we have a new UI in progress, which should be a lot better than what we have right now. It will, for instance, allow you to drill down into any contribution and see where that contribution got its Cred from. It works similarly with users. That should allow us to better understand Cred flows and also to debug and detect gaming if that is going on.
- SourceCred is complicated! We know that, and we are working on better documentation so that people can better understand how SourceCred works. If anyone has any questions, please don't hesitate to ask me on the forums. I am happy to answer questions and point people in the right direction.
- We are working on some data visualization analysis, which will take the form of tools that we can provide to the Maker community. I am also planning to start doing a little bit of analyses and posting results in the forum. If anyone has any kind of data analysis or data visualization ideas, I am all ears.
- And then, as I mentioned before, we are doing a refactor of the algorithm, which is called CredRank. This won't actually change the basic scores or anything. It is more of an optimization that will give us more flexibility. We will get rid of our little problem with Cred sinks and allow us to do more data analysis and make it work faster, etc. Of course, there is a lot more going on in SourceCred, but I don't want to spend everyone's time going into it here.
- Also, Maker customizations. One thing that I have been talking to LongForWisdom about doing is potentially minting Cred based on trust levels in discourse, which would allow us to prevent certain types of gaming and give us a little bit more civil resistance. It could also prevent people from getting Cred, for instance, for showing up just to submit their coin to get accepted to MakerDAO. Even if it doesn't get accepted, they get Cred for that, and we want to avoid that. We are also looking at the possibility of minting Cred based on categories or tags. Which would give us a lot of flexibility to incentivize specific things. For instance, the activity category would potentially incentivize certain governance actions. It's pretty exciting, and we are looking to experiment with that in the coming weeks.

![34:34](https://i.imgur.com/1WwVv4F.png)

- Finally, engaging SourceCred. Feel free to ask me questions in the forum; I'm here anytime. Here is [a link to our discord](https://sourcecred.io/discord), and we have actually created a MakerDAO chat channel just with Maker specific stuff. If you want to dig deeper or ask questions directly to the team, there is the website. We also have a community call every Thursday at 11 am PT on our Discord, and that is a great place for anyone to drop in and just learn more about SourceCred or asking questions. And that is all I have. LongForWisdom, is there any time for questions?

#### Discussion 3

[35:41](https://youtu.be/cIqyJ8-3MMs?t=2134)

- LongForWisdom: Yes, we can spend a few minutes of some questions now. We have a couple on the side chat. Andrew Dawson asked, "Is there a plot of the distribution of the weekly disbursements?"
  - Seth: I think I know what he means. All we are doing right now is publishing an observable notebook, which just lists the scores. But I can definitely create a little chart of the Dai distributions of scores over time. And if you are just looking to look at the scores that are in the current UI, you can see that.

[36:21](https://youtu.be/cIqyJ8-3MMs?t=2181)

- LongForWisdom: Another question was: "Who is responsible for determining the incentivization structure for the forum engagement via SourceCred, e.g., texts, actions, contents." The question is for me because the answer is essentially me and Rich and the SourceCred team. In the trial stage, we are interested in trying out different things and figuring out what could potentially be viable in terms of what we would want to incentivize long-term through giving more weight to specific tags and other configurations. That is something that would need to be decided by whoever the funds from incentivization came from, which ultimately if everything goes well, should be the Protocol. So ideally, it should be the community deciding what specific things are incentivized. Whether that is discussion around MIPs or engagements with risks reports from Cyrus's team, smart contracts things, or anything really.
  - Rich: To follow up a bit, the first month is prototyping, testing, and looking for red flags. But at least my personal hope is that the community engages with SourceCred and the team directly to determine for themselves what activities they think are beneficial for the ecosystem. Part of why I find this experiment so compelling is that we will be able to directly interact with the community to figure out what kinds of activities the community wants to incentivize as well. That is why we are extremely interested in having anybody who has some thoughts to engage with us in the forum and help us shape the experiment.

#### Relevant Links

[MakerDAO SourceCred Instance](https://observablehq.com/@sourcecred/makerdao-sourcecred-trial-week-2)
[Sourcecred Forum](https://discourse.sourcecred.io/)
[Sourcecred Discord](https://sourcecred.io/discord)

## MIPs

### Charles St. Louis

#### Weekly Update

[38:40](https://youtu.be/cIqyJ8-3MMs?t=2320)

##### This week's activity

- The monthly MIPs governance poll was submitted for the six proposals that passed the inclusion poll stage. This includes
  - [MIP4c2-SP1: MIP6 Amendments](https://forum.makerdao.com/t/mip4c2-sp1-mip6-amendments/2663)
  - [MIP4c2-SP2: MIP8 Amendments](https://forum.makerdao.com/t/mip4c2-sp2-mip8-amendments/2664)
  - [MIP4c2-SP3: MIP9 Amendments](https://forum.makerdao.com/t/mip4c2-sp3-mip9-amendments/2665)
  - [MIP4c2-SP4: MIP12 Amendments](https://forum.makerdao.com/t/mip4c2-sp4-mip12-amendments/2666)
  - [MIP7c3-SP2: Subproposal Adding a Risk Domain Team Onboarding](https://forum.makerdao.com/t/mip7c3-sp2-subproposal-adding-a-risk-domain-team-onboarding/2702)
  - [MIP13: Declarations of Intent](https://forum.makerdao.com/t/mip13-declarations-of-intent/2461)
- There were four polls that went out for whitelisting oracles:
  - [DeFi Saver on ETHUSD Oracle](https://vote.makerdao.com/polling-proposal/qmscvakatc3gwhtn7ouhags7een8vynez9eazdringlyqs)
  - [DeFi Saver on BATUSD Oracle](https://vote.makerdao.com/polling-proposal/qmnjvvw9h23l48yxew1ehqwfeso4kafwilrfhycoxhgc14)
  - [DeFi Saver on WBTCUSD Oracle](https://vote.makerdao.com/polling-proposal/qmry7yogtnipce9kywjr4vmixk68aluefpuoqqmx7wzbcn)
  - [MCDEX on ETH/USD Oracle](https://vote.makerdao.com/polling-proposal/qmuajcxpbqahsx32xsakpmswgedaw6muvpjguycdqkcylv)
- There were eight polls that went out for pointing and proposing new light feeds; More specifically for Kyber, Infura, EtherScan, and Gitcoin. If Nik is here, he might want to add some details about what these polls entail and what the next steps are for these are if they all pass the governance polls.
  - Nik Kunkel: Sure. The next steps are for the whitelist. They will get bundled into an executive vote. We need to make a change in the whitelist to add them in. For the light feeds, it's a little bit of a long process because we now need to have all the projects that got voted in to have them set up and configure their feed. That process will probably take under two weeks. We will probably get started with that this weekend, and then they too will get bundled into an executive vote, which will be held on June 26th, I believe.
- Today we will do the Governance Facilitator Review of the polls that passed.
- The MIPs Governance Poll passed, so the Executive Vote will proceed if the Governance Facilitators confirm yes on the outcome. That vote will go out this coming Monday, June 21st. I do want to note that the executive votes for MIPs do have an expiration of 4 days, after which they will have no effect, so the proposals would move to the accepted status if the executive vote is included and passed within that 4-day limit. If the executive fails to pass within that limit, the proposals would have been officially rejected.

##### Next week's activity

- Next Thursday, the Governance Facilitators will perform the Governance Cycle Review as part of this meeting, and summarize and discuss the results of the past governance cycle with everyone on the call. The meeting is also an opportunity to discuss the upcoming governance cycle and any potential submissions for July's governance cycle.
- Just a note about the July cycle. Even if it is a couple of weeks away, I want to note that the formal submission period does end on July 8th. So if you have any proposal's in progress, submitting them for review sooner rather than later is definitely a good idea.

##### Collateral Onboarding

- The two governance polls to onboard [KNC](https://vote.makerdao.com/polling-proposal/qmranqqaxjrhet8xorhkqtgki5mzxa1mizudoylcsrfapt) and [ZRX](https://vote.makerdao.com/polling-proposal/qmtq2u4vfakyk8mqkcdvclo6dqihims6smx1fvkru8m7sz) have successfully passed. They will proceed to an Executive vote at the end of the week, on Friday, June 26, along with the other polls that Nik mentioned.

##### Community Greenlight Polls

- Community Greenlight Polls will go out next Monday on June 22nd in the final week of this governance cycle. If the amendment MIPs pass this month, the community greenlight polls will start on the third week of the governance cycle, ending at the end of the governance cycle instead of carrying over to the following month, like currently.
- This month's Community Greenlight Polls are for:
  - [LEND](https://forum.makerdao.com/t/lend-mip6-collateral-onboarding-aave/2529/4)
  - [MATIC](https://forum.makerdao.com/t/matic-mcd-application-matic-network/2570/3)
  - [PAXG](https://forum.makerdao.com/t/paxg-pax-gold-mip6-collateral-application/2584/10)
  - [LINK](https://forum.makerdao.com/t/link-collateral-onboarding-application/2586/5)
  - [ENJ](https://forum.makerdao.com/t/enj-mip6-mcd-application-enjin/2639/3)
  - [WKT](https://forum.makerdao.com/t/wkt-mip6-mcd-application-wizkey-token-insured-tokenized-invoices/2643/3)

##### New Activities in the Forum, MIPs subcategories

- The [Proposal Idea](https://forum.makerdao.com/c/MIPs/proposal-ideas/21) category was created last week. This is a place where you can propose your ideas for improving the Maker Protocol, technical, governance-related, or whatever. The first post in there was the [pre-MIP discussion for the redesign of the Maker protocol liquidation system](https://forum.makerdao.com/t/a-liquidation-system-redesign-a-pre-mip-discussion/2790). The discussion is still going very strong. I do encourage everyone to take a look when they have the time.
- There are three other posts in the Proposals category, which is awesome to see:
  - [Soft locks and future guidance](https://forum.makerdao.com/t/soft-locks-and-future-guidance-a-pre-mip-discussion/2875)
    - Akiva Dubrofsky: This pre-MIP discussion can go alongside some of the rate hedging mechanisms to provide more predictable financing agreements with MakerDAO, and that may help escalate the Dai supply. That's the motivation behind it.
  - [Bounties & Grants to improve governance and MKR protocol](https://forum.makerdao.com/t/bounties-grants-to-improve-governance-and-mkr-protocol/2857)
  - [Decentralized Maker broker](https://forum.makerdao.com/t/decentralized-makerbroker/2691)

##### Polls and Votes Category

- I've created a read-only category for [polls and votes](https://forum.makerdao.com/c/MIPs/polls-and-votes/22), dedicated to providing more awareness and notifications of what's going on during the governance cycle, in terms of voting. It will be the go-to place to see the active inclusion polls, governance polls, or executive votes related to MIPs. Right now, it has the governance polls, and as of Monday, I will update it with the executive vote. That concludes the update today.

##### Break Week

- LongForWisdom: I wanted to highlight that June's governance cycle finishes on the 28th. There's then one week when we don't do any MIP governance cycle things. We have like a week's break where we don't need to do MIPy things.

#### Relevant Links

[June's Monthly MIPs Governance Poll Results](https://vote.makerdao.com/polling-proposal/qmtxpw9xlsg1ozyymqxujdfdemn1vd7iacbrykqp9miakq)

## Governance

### LongForWisdom

#### Governance Facilitator Poll Review

[46:18](https://youtu.be/cIqyJ8-3MMs?t=2778)

- I'm looking at the governance poll for the MIPs monthly cycle. This included:
  - MIP13, Declaration of Intent
  - Four amendments, amending MIPs 6, 8, 9, and 12
  - A sub proposal to ratify the Foundation risk team as an official risk team.
- The poll passed, with 3,700 MKR, with 12 unique voters. I'm not sure if this is less than what we had last week, but there was no MKR vote against it, so I don't see any reason to prevent this from proceeding to the executive.
- The executive that Charles mentioned will be live this Monday, June 21st.

#### Discussion 4

[47:42](https://youtu.be/cIqyJ8-3MMs?t=2862)

- Cyrus Younessi: Did I hear correctly that there were only 3,700 MKR voting?
  - LongForWisdom: Yes, with 12 voters. I assume that the turnout was low because the prices are high, and the monthly cycle requires you to vote on the same thing three times, and this is the middle vote. So I'm not terribly surprised that this is not attracting a huge amount of participation. I want to encourage people to vote, nevertheless.

## Analysis

### The State of the Peg

#### Relevant Links

[MCD system stats](http://daistats.com)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)

#### Vishesh Choudry

[49:03](https://youtu.be/cIqyJ8-3MMs?t=2943)

![](https://i.imgur.com/x9li1Xe.png)

- In general, Dai supply is pretty stagnant from last week. $106 Million from ETH, $525 K from BAT, $1.7 million USDC. WBTC still just near capped out, top of it's DC, at $ 9.99 million.

![](https://i.imgur.com/e1iCXKg.png)

- Here is the Dai price over the past week.
- Bit of dip and fluctuation in ETH price, though not large margins or swings. Dai price did rise as ETH fell. That rise against ETH is a pretty consistent trend. Especially in the past month, Dai snapped back into that tight negative correlation.
- ETH<->DAI trades spike rapidly above a dollar initially as ETH price fell. Pretty consistent, as I mentioned. ETH price recovered from the dip and Dai price stabilized, coming down again. These are tight fluctuations, although the last few weeks have had more ETH volatility. With ETH price cheaper than a week ago, Dai price is still a little elevated. ETH being cheaper now produces hesitancy in Dai holders to increase leverage, which is also a historically consistent trend.
- If people are unsure about what ETH will do, then they are unsure about how to lever up.

![](https://i.imgur.com/kfaF0F8.png)

- Looking at an order book perspective for DAI<->USDC trading. The trading price has leveled at \$1.008, which is a small buffer above a dollar. Slightly less than what ETH<->DAI trading had indicated. Presumably, because there is a larger spread on ETH<->DAI vs. DAI<->USDC.

![](https://i.imgur.com/vtpbRvv.png)

- USDC Dai is flat at this low ~\$1.7-1.9 million supply level.

![](https://i.imgur.com/C5pp5XA.png)

- BAT Dai is maintaining that half a million level, significantly down since March, yet stable.

![](https://i.imgur.com/0WliN4S.png)

- WBTC Dai still at its DC cap, and I know we're discussing it in a few threads, so that's all I'll say.

![](https://i.imgur.com/7wvc8MZ.png)

- One Dai from ETH, after that quick $10 million supply and burn, there was a dip going to $102 million, then recovering. Essentially, Eth-Dai has a general growth trend over time with little contrary data. There is no indicator that anything has fundamentally changed with Eth-Dai.
- All-in-all is pretty quiet.

#### Discussion 5

[54:43](https://youtu.be/cIqyJ8-3MMs?t=3283)

- LongForWisdom: No questions, but Jiecut from chat asked: "Compound effectively has negative rates because people can lever up on ETH to get COMP." So potentially people are choosing to lever up there compared to Maker because the rates are Zero.
  - Vishesh: There is a whole other thread about secondary markets. Essentially what we tend to see with secondary lending markets is a tight relationship with the relative spread between rates and what people refinance to and from. I do think that what's happening with COMP distribution lately can befuddle some of the numbers.

## Open Ended Discussion

#### Discussion 6

[56:33](https://youtu.be/cIqyJ8-3MMs?t=3393)

- Andy: Last week, Nik mentioned pushing through Oracle things in the weekly Governance Cycle, is that the reason these Oracle polls are down now or is it because we wanted the more traditional MIPs process?
  - Nik: The poll this week was to fix inconsistencies in MIP10 that we needed to fix. In the interim, while we refactor those, we wanted to use the short cycle.
  - Andy: Cool, really awesome to see those come through. There are some fantastic proposals coming through.
  - Nik: If you like that, there's more on the way. More light feed onboarding is a big priority for me personally, and it should be for the community. It further decentralizes the oracles, makes them more robust, and makes them more attractive for third parties. We'll see a lot more whitelisting proposals too.
  - Andy: On that point, I think that it's well worth it to read [Rune's response about liquidation process](https://forum.makerdao.com/t/a-liquidation-system-redesign-a-pre-mip-discussion/2790/44?u=davidutro). He's consistently pointing people to MIP1 and problem spaces. He continuously discusses edge cases like OSM failures, for example. If we have OSM failures, then we likely have bigger problems with our liquidation system. Understanding a failure and what we'd have to focus on as a Governance community. It would lead to more interesting conversations on this call.
  - Nik: Couldn't agree more.
  - LongForWisdom: If you haven't reviewed [MIP1](https://forum.makerdao.com/t/mip1-maker-governance-paradigms/1903), I encourage people to look at it. It's the closest thing we have to a roadmap, at this stage, of what to complete before the foundation dissolves.

[59:56](https://youtu.be/cIqyJ8-3MMs?t=3596)

- Charles St. Louis: Akiva asks, "Is there a list of light feed oracles on GitHub or the forums?"
  - Nik: Github [MIPS repo](https://github.com/makerdao/mips), [specifically component 17](https://github.com/makerdao/mips/blob/master/MIP10/MIP10c17-List-of-Feeds.md) is the best place to look. I would have to update this to include this week's polls. Currently, we should be at 24 total.

[01:00:49](https://youtu.be/cIqyJ8-3MMs?t=3650)

- SamM: Currently, as we add more collateral and adding more oracles, it seems like it may be like a quadratically increasing function of those two components. I'm curious about how to scale up to that massive number in the near future.
  - Nik: You'd have to describe which part of scalability? Feeds, oracles, customers, performance, which aspect are you interested in.
  - Sam: Feeds. The number of oracle providers and collateral that need feeds since both numbers are going up that looks to be a quadratically scaling number, which concerns me.
  - Nik: OK. So in terms of the number of feeds, there are diminishing returns. They give better security in theory, but we pay feeds 1,000 Dai a month to cover their expenses, dev hours, maintenance, and monitoring. I think we're aiming to have in the short to medium term about 30 feeds.
    - An equal number of dark and light feeds seems attractive, even if all the dark feeds are civil, for instance, they wouldn't be able to reach consensus on any price. Same if there was a social media campaign, turn off sentiment against Maker, and all the light feeds came to a consensus to screw over Maker, they couldn't change the price either. It seems like an attractive position to be in. That's what I'm trying to push at the moment. We shouldn't be adding just anyone or add low-quality partners. We should aim for the biggest players in the ecosystem. We need to be patient, so we can evaluate those trade-offs.
    - In terms of oracles themselves, actual customers, with governance in place, everything goes much quicker. Now that we have specific dates to make things happen doing things in parallel can be rapid. It's only when you have to do them one-by-one you incur the largest time penalty. It's no more effort to whitelist eight versus one. I'm encouraged by governance going smoothly until now and think we'll hit a good rhythm the more we do this.
  - Sam: So you want 30 dark 30 light and leave it there? Not increase it ad infinitum.
  - Nik: We're at 15 dark feeds right now.
  - Sam: So there is a cap a secure enough number, you don't want to keep going up? Due to cost?
  - Nik: I don't presume that the number is 30; the community needs to weigh in on that. It seems like a good start considering we have 15 dark feeds. Matching with light feeds and doing 30 seems like a good point to hit and stop. We can evaluate from there if we want to add more light feeds or do we want to stop. Adding dark feeds is something a little complicated since they're anonymous. How do you evaluate the credentials of someone if they're anonymous?
  - One of the details in MIP10 is what those requirements could be. If you're a large scale miner on a large blockchain, for example, you could sign a transaction on-chain. Verifying good standing for whatever blockchain securing, however much hundreds of millions or billions in value. We may want to explore other metrics, as well.

## Abbreviated Terms

`MCD`: The Multi-Collateral Dai system

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`GP`: Governance Poll

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`OSM`: Oracle Security Module

`MIP`: Maker Improvement Proposal

## Credits

- Artem Gordon produced this summary.
- Tim Black produced this summary.
- David Utrobin produced this summary.
- Gala Guillen produced this summary.
- Juan Guillen produced this summary.
- Everyone who spoke and presented on the call (listed in the headers.)
