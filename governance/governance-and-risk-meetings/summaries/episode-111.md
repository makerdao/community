# Episode 111: September 24, 2020

## Agenda

- [00:00](https://youtu.be/POnNdDSwGx4?t=001): Introduction
- [01:43](https://youtu.be/POnNdDSwGx4?t=103): Governance at a Glance
- [07:15](https://youtu.be/POnNdDSwGx4?t=435): Smart Contracts Team Update
- [11:35](https://youtu.be/POnNdDSwGx4?t=695): Oracles Team Update
- [15:55](https://youtu.be/POnNdDSwGx4?t=955): Risk Team Update
- [18:11](https://youtu.be/POnNdDSwGx4?t=1091): MIPs Update
- [33:40](https://youtu.be/POnNdDSwGx4?t=2017): September MIPs Submission Review
- [47:15](https://youtu.be/POnNdDSwGx4?t=2831): State of the Peg with Vishesh Choudry
- [1:00:15](https://youtu.be/POnNdDSwGx4?t=3610): Open Discussion on Stablecoins, Dai Supply, Liquidations, and Risk

## Video

<https://youtu.be/POnNdDSwGx4>

## Introduction

### LongForWisdom

#### Agenda and Preamble

[00:00](https://www.youtube.com/watch?v=POnNdDSwGx4&feature=youtu.be)

- Hello everyone, welcome to the MakerDAO Governance and Risk meeting number 111, taking place on Thursday, September 24th, at 16:00 UTC. We have got a bit of a light agenda today, we will go through what we can. My name is Long For Wisdom, and I am the MakerDAO Governance Facilitator.
- This meeting is open; feel free to interrupt if anyone has a comment.
- Deeper discussions happen in the [Forum.](https://forum.makerdao.com/)

## Governance

### LongForWisdom

#### Governance at a Glance

[1:43](https://youtu.be/POnNdDSwGx4?t=103)

- [Governance at a Glance - Forum Thread](https://forum.makerdao.com/t/governance-at-a-glance/84): If you have the time to read over and vote in the active threads, that would be much appreciated.
- Governance wise, no huge news. Mostly focused on keeping things going and address the fact that the forum is becoming busier. Trying to make things more readable and accessible by tweaking settings and categories - any suggestions are welcome!

##### Discussions

- [Why are people so afraid of unbacked Dai?](https://forum.makerdao.com/t/discussion-why-are-people-so-afraid-of-unbacked-dai/4110)
  - Latetot asks why people are so afraid of unbacked DAI, which prompts some passionate responses. If you have an opinion, please leave a response on the forums.
- [Poll: What should we do with the system surplus?](https://forum.makerdao.com/t/poll-what-should-we-do-with-the-system-surplus/4261)
  - Aaron_Bartsch makes an informal poll to ask what Maker Governance should do with the growing system surplus. Lots of interesting comments along with the poll results.
- [MakerDAO Foundation Funding: Call for Financial Transparency](https://forum.makerdao.com/t/makerdao-foundation-funding-call-for-financial-transparency/4282)
  - latetot calls for more transparency from the Maker Foundation around the cost of operating the domain teams required to keep the Maker Protocol growing. No official Foundation response at this time.
- [Unwinding Stablecoin Exposure](https://forum.makerdao.com/t/discussion-unwinding-stablecoin-exposure/4364)
  - Primoz speaks about some of the options available to start unwinding direct stablecoin exposure, especially regarding Dai's newly minted supply backed by stablecoins. Please check it out!

##### Signal Requests

- [Should we take a more flexible and transparent approach to onboarding collateral?](https://forum.makerdao.com/t/signal-request-should-we-take-a-more-flexible-and-transparent-approach-to-onboarding-collateral/4380)
  - LongForWisdom posts a signal request on behalf of all the mandated and soon-to-be mandated actors, asking about a more flexible and transparent approach to the collateral onboarding process. Charles made some posts talking about this last week. Encourage people to vote on that.
- [Should we print 100M DAI to buy ETH?](https://forum.makerdao.com/t/should-we-print-100m-dai-to-buy-eth/4164)
  - bit asks whether DAI should be minted in order to buy ETH, which could then be used to partially back said DAI. bit has been around for a little while and seems to propose stuff that is counter to the general community consensus and sentiment. I want to call out that it is good for people to this, as it helps avoid groupthink as the status quo.
- [MakerDAO Standard Governance Processes](https://forum.makerdao.com/t/makerdao-standard-governance-processes/4298)
  - I wrote a brief overview of the Maker communities current operating governance processes, including signal requests, declaration of intent, and MIPs and why there are three processes of govern things and the benefits of each one.
- [Help Wanted! Scientific Governance and Risk Call Summaries](https://forum.makerdao.com/t/wanted-join-the-summary-team/4318)
  - Finally, Davidutro is looking for people to help with the governance call summaries.
- [Help Wanted! Work with Primoz on the Risk Team](https://forum.makerdao.com/t/wanted-risk-domain-monitoring-tools/4168)
  - Primoz is also looking for a person who is interested in building Risk Monitoring Tools and working with the Risk Domain Team.

## Weekly Updates

### Cristopher Mooney

#### Smart Contracts Team Update

[07:15](https://youtu.be/POnNdDSwGx4?t=435)

- Last week, we crafted that final spell, and we increased the global debt ceiling to 1.1 billion; that is pretty noteworthy.
- The USCDA collateral type changed to 400 million, with a 101% collateralization ratio. We did that for TUSD, PAX, and USDA, so all of them are at 101% collateralization ratios. TUSD also had a 50 million debt ceiling, which effectively creates this Peg on rails. So it would be anomalous unless we hit the debt ceiling that DAI would break above Peg at this point. I would imagine it would only be the debt ceiling, or we would limit or exhaust the supply of those stablecoin assets before that happened.
- The base rate was still at zero. We updated the TUSDA adapter's implementation, and I think they were up like 43 million last time I checked, so that is impressive. We replaced the Gitcoin feed address for MANA-USD so that they can update that price.
- We worked on a collateral priority framework. The governance group, Sam M, and I put a little bit of effort into that. Sam is now part of the grants program, so he works with the smart contracts domain team on our technical roadmap. We put a little bit of work on the collateral priority framework, but I think other people have ideas, so we are meshing that up, and we will present that to the Community at some point.
- Sam also finished working on the flash mint module, so we had a couple of comments on that, then he updated those, and we will deal with that next week.
- Next week, we will probably end up code-reviewing that module. I want to review the MIP21, which is a technical MIP for Real-World Assets, and maybe see if we can flesh that a little bit. I think that Lev and Matt Rabinowitz have been working on that. It looks like it is pretty far along, and I am reasonably excited about what they have done so far, so we will see if we can get that forward.
- I do not know if this is in the [forums](https://forum.makerdao.com/t/mip21-real-world-assets-off-chain-asset-backed-lender/3917) yet, but it will be at some point today. The TUSD people need to upgrade their implementation again to fix a problem with their legacy TUSD ERC20 token, and that will probably end up having to go through emergency. Next week, we will review that code, and we will need an emergency MIP to update that implementation because otherwise, around 43 million TUSD will be locked in that adapter.
  - LongForWisdom: Is there any chance of getting them to update at a time that helps us in terms of executives?
  - Christopher Mooney: Yes. They are very much willing to work with us on that. So much of their users are now in that collateral adapter that both they and we are interested in not disrupting that.

### Nik Kunkel

#### Oracle Team Update

[11:35](https://youtu.be/POnNdDSwGx4?t=695)

- In last week's executive, we had WBTC get whitelisted in the LBTC oracle just in time for their launch. Good for them that they managed to launch successfully.
- This week, we had a bunch of polling votes. One of them was to change the ETH-USD data model. To reiterate, the data model is how we source the prices and how we process them to reach our canonical oracle price. The volume landscape has changed over time, and we just wanted our new model to reflect that. That passed.
- We had a bunch of whitelisting proposals—one from DDEX for the BTC-USD oracle. One from Open Networks, which is like an options platform using the V1 oracles that we shut down, they were caught out, but they had not let us know what they were even using it. What we did for their whitelisting proposals was wire up the medianizer V1 into the current medianizer V2. What that means is that we whitelisted oracle's V1 and oracle's V2, and now Open can continue querying the V1 oracle. Otherwise, they are completely screwed because they have many options expiring in like a year from now that are hardcoded to use the V1 oracle. That passed.
- yEarn Finance wanted to get whitelisted on the BTC-USD oracle for their new YBTC Vault, so essentially, anyone can lock up BTC or some kind of wrapped BTC in their Vaults. It would go and open up a Vault in Maker, lock up that BTC, borrow Dai, and then use that Dai to earn yield. Furthermore, the yield they earn is then converted back into BTC, and this way, their users can earn a BTC yield on their BTC.
- The last proposal was from Kyber. They have some promo token that they used as a pseudo stablecoin during their hackathons, and they need their ETH-USD oracle for pricing that. So they made a whitelisting proposal as well, and it looks like that one passed.
- From the domain team side, in terms of collateral onboarding, last week, I submitted the onboarding assessments for PAX G and YFI. Those are up. If we get the other domain teams to submit their onboarding assessments, we should do these two pretty soon.

### Primoz Kordez

#### Risk Team Update

[15:55](https://youtu.be/POnNdDSwGx4?t=955)

- There is still ongoing work on collateral evaluations on our side. The bad news is that our emergency version 2 will not be released until October, which might be a little bit late for us to make a proper collateral evaluation in due time. Instead, we might do another asset.
- We made a poll this week to increase the debt ceiling on stablecoins and vote, which gets the 200 million increase, so this is going straight into tomorrow's executive.
- We also published three posts.
  - One was on ETH-B Vault. There is still a discussion for it, but I suspect Aaron will soon make a poll to vote on the actual parameters within the upcoming days to potentially implement ETH-B Vault in the executive in about two weeks.
  - There is another post made by myself that LongForWisdom mentioned regarding onboarding Farm-related tokens. The idea is to unwind stablecoin exposure and charge much higher fees than we are charging now for something like USDC.
- Finally, I am very close to finalizing the new rates setting approach, which will probably be posted on forums in a few days, so stay tuned!

### Charles St. Louis

#### MIPs Update

[18:11](https://youtu.be/POnNdDSwGx4?t=1091)

![](https://i.imgur.com/WHBM8z6.png)

![](https://i.imgur.com/wQf9rn3.png)

![](https://i.imgur.com/RFdih11.png)

![](https://i.imgur.com/q6CYSqE.png)

![](https://i.imgur.com/E568h6K.png)

![](https://i.imgur.com/Czwa2Rf.png)

![](https://i.imgur.com/CHaaR6e.png)

![](https://i.imgur.com/TgRRLSN.png)

![](https://i.imgur.com/jIpDP4s.png)

##### Discussion

[27:45](https://youtu.be/POnNdDSwGx4?t=1665)

- Matthew Rabinowitz: One quick question - is that change in the process something that's permanent, or is it scheduled with a set expiration and then getting re-implemented?
  - Charles St-Louis: It is not a permanent change; it can change over time. The current process is optimized for a long-term state of collateral onboarding, which takes a lot longer for review. Moreover, when the system is ultimately healthy and running, well, nothing is permanent. We can change based on the needs of MKR holders and how the mandators feel concerning collateral onboarding, much like MIPs. Things are iteratively improving, as I mentioned. That is a long way to say it is not permanent.
  - LongForWisdom: I can maybe speak to this a little bit as well. In the long-term, we are probably going to want to move back to a monthly cycle. However, for the time being, it is causing too many problems or too much frustration.
- Frank Cruz: Is the public priority a poll, an on-chain poll, or just a forum poll? Furthermore, are the domain teams all right with having to rush this a little bit? Are they not going to be overwhelmed?
  - Charles St-Louis: We are still finding out the details on where the prioritization framework will be hosted and maintained, but you can think of it as a public spreadsheet with all the collateral greenlight assets with scores next to them based on the different metrics, which will also be there to see. That is how it will look, and I think it is a question of maintenance, on how much time it will take the domain teams to do that, but those details are still being figured out.
  - Christopher Mooney: I can speak to the second part of that question. At least for the smart contracts domain, we will not do anything unsafe for the Protocol. We would enjoy the agility to ramp up and get more collaterals added week by week. There is also a weird flow. I do not know if you have ever done any engineering, but to prepare something and work on it and then finish and then get randomized onto something else for the next weeks and then have to come back at the end of the cycle. It is tough to get all of that state back in your head. This should make things more continuous; it should reduce the number of risks and bugs. So I think the smart contracts team is happy with this change.
- Jon: I can speak a minute about the emergency response MIP. The purpose of that was to standardize or have a framework to - dog barks - Sorry, I might have to skip this. (_leaves_).
- Juan: I can comment on the Collateral Call. Yesterday we had Stani and Marc from AAVE present their token. Their application is on the forum within the MIP6 application section. We also had Tyler and Cameron Winklevoss with the rest of the team from Gemini, Eric, and Marshall, if I remember correctly. It was an exciting call. You can check the video; it's already on the [forum](https://forum.makerdao.com/t/agenda-discussion-collateral-onboarding-call-9-wednesday-september-23-17-00-utc/4227), and Gala works on the notes. Next week, on September 30th, we are going to have the Real-World Assets working group meeting. So if you guys can meet Sebastien and Lucas and Matthew Rabinowitz, please feel free. There is already a working group in the [forum](https://forum.makerdao.com/t/working-group-rwa-onboarding/4167). If you want to get involved with that, please go ahead. And then, the week after that, October 7th, we are going to have Brian from CACHE Gold and Matt Luongo from the Keep Network presenting TBTC. The agenda is already on the [forum](https://forum.makerdao.com/t/agenda-discussion-collateral-onboarding-call-10-wednesday-october-7-17-00-utc/4368). Going back to the collateral and the forums, I think Amy just posted the [link](https://forum.makerdao.com/t/collateral-onboarding-grants/4252) on the chat about the exciting positions with the target, so ideally, everyone can help reach these goals. Furthermore, the forum [post](https://forum.makerdao.com/t/mip21-real-world-assets-off-chain-asset-backed-lender/3917) from Charles explains all the modifications that he just summarized; they are quite interesting. Also, please vote for the signal request [posted](https://forum.makerdao.com/t/signal-request-should-we-take-a-more-flexible-and-transparent-approach-to-onboarding-collateral/4380) by LongForWisdom, and signed by all the domain teams.
  - LongForWisdom: Thanks for continuing to run the calls. They have been beneficial.

## Procedural

### LongForWisdom

#### MIPs Governance Poll Review

[33:40](https://youtu.be/POnNdDSwGx4?t=2017)

- As mentioned by Charles, the MIP poll passed with a healthy amount of Maker. No reason for it not to continue to the executive next week, on Monday to be specific. Expect that on Monday.
- I wanted to take this segment to discuss the Collateral Onboarding changes in more detail.

#### Discussion 2

##### Collateral Onboarding Changes

[34:22](https://youtu.be/POnNdDSwGx4?t=2062)

- Nik Kunkel: Oracles are a bit unique in how the work scales. The biggest thing with the Oracles is not the implementation of code for each unique asset. It is not insignificant work but its not the majority of the work. The majority is compiling that into a package for the new Oracle infrastructure, testing that extensively, and then the actual deployment. We want to be comfortable rolling it out. We have 26 feeds, each need to update individually, and for some of them, they need more time than others. They need head-sup, they need help troubleshooting, and there is a huge time penalty going through that process multiples time over. The best way to do that is to batch multiple into the same cycle, with multiple assets incurring the testing penalty once.
  - Switching to this more weekly ad-hoc cycle for collateral onboarding will change things in some ways. On the one hand, it makes it for the risk and smart contract teams to be more effective by not limiting them to get something done on some early date within the month to get into the monthly cycle. From the oracle perspective, it does not help that much - we still do not have the flexibility to work on the assets we want every week. The changes do not give us flexibility since the testing and deployment cycle are three weeks.
  - Given that we do not have the arbitrary dates anymore for deciding to do XYZ, it should be possible for the Oracle team to do 6 or 7 assets at once, incur that testing and deployment penalty, and then in terms of the rollout during the week, the Oracle team can operate in massive bursts and work ahead of the backlog with the rest of the teams catching up. When the other teams catch-up, we can also do another big burst of about 5-10. That is how I see this impacting my team's ability to deliver
- Christopher Mooney: Once that work is happening with Oracles, risks and smart contracts can continue working on things like the FE collateral type because we already have the Oracles for that. That frees up our ability to work on things. If we know this process blocks Oracles, we can prioritize different OC types with slightly different parameters in that window of time. As long as we already have Oracles for them.
- Primoz Kordez: On the risk side, it is less related to testing and deployment, but more or less related to the number of people working on collateral evaluations. Before, Marco and I worked on them, and now a few more volunteers are working on collateral evals. I do not think weekly cycles should be a problem for us since we have 4-5 analysts working and can finish it analysis in one week if one person works on this full-time
- Frank Cruz: Simple explanation/example: I put together a MIP 6 application for Pickles and another one for Coinbase token. The application goes on the forum; who determines the rating of the asset? How would Coinbase token go through the process and be a collateral type within, say, two weeks? Can someone give me the ELI5 on that?
  - Nik Kunkel: We are saying that it cannot be for two weeks. To have an Oracle in production for this would need at least three weeks if I started today. In terms of agility, if a new token comes out today, we cannot be more productive in onboarding that. The time benefits that we are getting are that there is no arbitrary date at the beginning of the month by which we have all of the work done and have it in the MIP cycle by the end of the month. The current system requires everything to be in by, say, the 5th, in order to be able to be ready for on-chain changes by the end of the month. If you were to miss the deadline, even by one day, you would have to wait two months instead of that one month. That time is not being gained by productivity, but rather by the deadline set-up.
    - Juan: To add to that, Charles mentioned that the collateral onboarding framework would allow for a transparent system for demonstrating how the teams are working and how recourses are allocated. This will show a clear path in terms of saying how the energy/bandwidth is being focused. Circling back to Amy's post, every domain team is looking for more people to help and augment the bandwidth.
    - Niklas Kunkel: If you want more collateral types, we need to onboard more domain teams. With this new grant funding system, the best way forward is to find those quality people who can come on and work. At first, there will be a trial period to make sure people are doing quality work, but if we need more collateral onboarded, we need to onboard more people.
    - Frank Cruz: This is also a great way to progress toward decentralization
    - Charles St-Louis: Juan has demonstrated interest in this, but it would be great to have more recourses - guides, tutorials, walk-throughs, videos, regarding how collateral is onboarded and the thinking behind why we have these categories for assessing them. Explaining this on camera to demonstrate this visually will help give people an idea of getting started when applying for a collateral onboarding grant. This content can let people learn initially without having a one-on-one with the domain teams, which will get more people involved in collateral onboarding and speed up the Dao's decentralization.
- LongForWisdom: The actual prioritization of the asset classes (AAA, C, whatever) is the domain teams working to figure out the potential impact of all options. It is also figuring gout how difficult that collateral type will be to onboard, how much Dai it is expected to generate, and some other high-level metrics to figure out how worth it is to prioritize it. This would be part of this prioritization framework and would feed into the ranking to determine the best bang for-the-time buck for the domain teams.

## Segments

### Vishesh Choudry

#### The State of the Peg

[MCD System Stats](http://daistats.com)
[MCD System Stats Alt](https://catflip.co/)
[DAI 24hr VWAP Graphs](http://dai.descipher.io/)
[Maker Vault Stats](http://makervaults.descipher.io/)

[47:15](https://youtu.be/POnNdDSwGx4?t=2831)

![](https://i.imgur.com/fmydXK2.png)

- Total DC availability of about 1.2 million is right now for Dai, sitting around nine hundred million Dai, a massive issuance.
  - The state of this for ETH is around 340 Million Dai issued.
  - BAT is about 3.5 million Dai.
  - USDC-A is at 385 Million.

![](https://i.imgur.com/uVAj8Ez.png)

- 82 million Dai from WBTC.

![](https://i.imgur.com/Mx0jLfq.png)

- Back down to 5,000 from USDC-B.
- 50 million Dai from TUSDC.
- Smaller amounts from KNC, ZRX, and Mana.

![](https://i.imgur.com/TPCg9u7.png)

- 30 million Dai from PAX-A.
- Small amount from USDT.
- SFs for these are still sitting for 0% for ETH, 4% percent for TUSDC and BZRX, 4 percent for BAT, USDC, WBTC. Another USDC vault is at 50%, with 4% for TUSD, KNC, ZRX. 12% for Mana, 4\$ for Pax, 8% for USDT.
- Tremendous amount of issuance from stablecoins. People are still willing to pay 4% fees, and for the short-term, there were instances of people willing to pay 50% for USDC-B, though that is more of a short-term usage. Even smaller amounts were issued from Mana at 12%. For stablecoin usage, it does not seem to make a significant impact on what the SF sees; at 50%, the calculus changes quite a bit, but from 4 - 12%, it does not seem to be a substantial deterring factor, and we have seen many issuances late.

![](https://i.imgur.com/o9y3Age.png)

- Peg wise, we have seen a comparatively flat Peg around 1\$. There are moments of movement with ETH price relatively flat or falling a bit during the past week. Not a lot of movement both in terms of collateral and in terms of yield farming opportunities. There were no considerable changes in the available yields and even show some reductions in some of these platforms' positions.

![](https://i.imgur.com/D0WAzx9.png)

- If we look at the USDC pairs, the DAI-USDC demonstrates decreased variability in some of those prices and smaller volumes. The 15th and 19th show large volumes traded on Swerve (DAI-USDC) partly associated with yield farming opportunities driving that value. Afterward, they resumed trading heavily on Curve and sitting at around \$1.01.

![](https://i.imgur.com/qIWq7JZ.png)

- DAI-USD echoes with more price variability, sitting at \$1.01 but with crazy spikes in those pairs on Coinbase and Kraken.

![](https://i.imgur.com/JZ2S4x3.png)

- DAI-USDT shows similar curves to DAI-USDC.

![](https://i.imgur.com/zy0UxPz.png)

- Dai supply, overall (and this does not include PAX and some of those newer collateral types), demonstrates a jump in the amount of issuance from USDC and a flat or small reduction in ETH, and then WBTC is sitting around 82 million, which is a smaller utilization percentage than the total amount issued than prior. That is just because that goal post was moved, and there was slightly more issuance there.

![](https://i.imgur.com/MlQ6aL4.png)

- If you look at where some of this capital is, a massive amount of Dai issued is still being used for farming. I wanted to revisit a slightly older stat, which is the amount supplied on Compound. When this all kicked off, it was a massive share of what is going on. That has risen in nominal amounts. However, in terms of the percentage of the supply listed on Compound, it a smaller percentage. Roughly 280 million excess Dai is sitting on Compound, but now that there is 900 million total Dai minted, Compound accounts for a smaller amount where Dai is sitting with more supplied to the yield farming pools Balancer, etc.

![](https://i.imgur.com/6hcsfRA.png)

- In terms of the vaults, for ETH, we have those few largest vaults accounting for a considerable percentage of the overall Dai supply. If you look at the top 3 vaults, one for 40 million, one for 31 million, and one for 13 million, on a collateralization basis, these largest vaults were at a lower CR than the previous week. We saw the collateral rebalancing against the ETH price; those CRs did improve, although a couple of them were unchanged.
- Overall, what we saw was the total collateral pool getting riskier because even though it was more leveled out between 150%, 200%, 250% prior, there was a smaller bucket that was 150-200% collateralized.

![](https://i.imgur.com/ogsSz6B.png)

- Basically, there are more risky positions, but some of the largest vaults are just as risky or less risky than prior, with overall increased risks.

![](https://i.imgur.com/mjBfVOP.png)

- Looking at the liquidation walls, at an ETH price of $280, you would expect 80 million Dai to be liquidated, which corresponds to a few of the largest vaults. At $230, that is where some of these smaller vaults come in. One hundred fifty million Dai liquidated at \$230.

![](https://i.imgur.com/gmyhEjv.png)

![](https://i.imgur.com/IuL7Djw.png)

- WBTC vault, obviously a tremendous amount, is 150-200% collateralized. They are 170% collateralized for the largest few positions, which accounts for a massive chunk of the total percentage supply because you have 3, 4, 5 large vaults accounting for a massive chunk of the WBTC Dai issuance, and for \$8,900, you would see 60 million of that liquidated. That is one large wall. USDC is similar—one large wall.
- If there is a move in USDC price, there will be a whole collateral pool liquidated. Since we have 385 million Dai sitting in the USDC vault and 30 million in the Pax vault, that liquidation position is a binary risk. We have had this conversation before, and are seeing it again, with 30 million Dai from the PAX vaults.
- The Dai supply has been, in large part, monopolized by stablecoins. This is something to be aware of and means that the Community should be discussing what level of binary risk we are comfortable underwriting.
  - LongForWisdom: It is worth noting that liquidations are turned off for all stablecoins except for Tether.
    - Vishesh: With liquidations turned off; there is an interesting mechanical process to resolve. In the event of a disruption in, say, PAX or USDC, there can be a discount on the market for those assets. You basically have a massive amount of under collateralization all at once, even though the liquidations are not actively being undertaken. I am not sure if the Community has quite figured out the mechanical plan for resolving the liquidations if they are halted.

## Open Discussion

##### Stablecoins, Dai Supply, Liquidations, and Risk.

[1:00:15](https://youtu.be/POnNdDSwGx4?t=3610)

- JoeQ: Question, what is a good way to measure risk as we increase SF on all of these stablecoins. How much should we increase the SF on these yield farming stablecoins, and how do we determine the risk?
  - Vishesh: This is an old topic in a sense, as it has been heavily discussed in the scientific governance process. We had a strategy of setting parameters of discovering demand/supply curves for Dai in the past. You can engage in a similar analysis to determine the impact on the demand for stablecoin vaults, especially considering that the supply issued from those vaults is pretty steady.
    - For example, if you raised the USDC-A SF, you would theoretically see very soon/clearly whether it impacted demand. By and large, my sense is when someone is chasing a 700 or 1000 percent yield, they are not sitting there thinking: do I pay 2, 4, or 6% a year? I would not expect SF's to impact the amounts issued in stablecoin vaults significantly. There are stupid amounts of supply chasing stupid percentage yields. I think a 4% fee is negligible in that sense.
    - If you want to try to raise that as a method, I do not expect a specific impact. The question is, how much risk are you underwriting on a binary failure case for a 400 million Dai pool? The answer is that the SF is likely a lot higher than what the costs are right now if you are Even if you look at ETH at 0%, everyone can see that the risk is not 0%. I cannot tell you the exact percentage to reduce the issuance amount, but increasing git would unlikely to impact the stablecoin issuances.
  - LongForWisdom: Considering LR is set to 101%, the most fees we can get for those vaults are 1%. It would be best if it were to happen at some time and not immediately. At 4%, we take that entire 1% in like three months.
  - Vishesh: Let us say you have a 10% fee and a large vault that accrued fees that drove its collateral ratio below the line; how would you want to resolve? There is an entirely non-theoretical scenario where we have to resolve those vaults' liquidations while the liquidations are turned off.
  - LongForWisdom: I think we have to hope for Liquidations 2.0 before we have liquidations.
  - Chris Mooney: I think we will discover a reasonable price now, with the box. We may have to turn liquidations on, put 15 million into liquidations, and then turn them off again. I think there is a significant paradigm shift, as it does not make sense to discuss SF's with the CR this low. People will walk away from these vaults. They will get their 1% and abandon it. This will come down to MakerDAO deciding on turning on liquidations when we go below Peg. I would argue we do not want SF because fee accrual will push them under Liquidation faster. I do not think it even makes sense to put a fee on that because that gives us more control in the future.
  - Kurt: Those fees can be a little misleading since the fees will accrue into a surplus. On paper, it could look like a large surplus, but no one will cover those fees, and it will turn into bad debt upon liquidation. This will make accounting a little bit confusing.
- JoeQ: But, even on liquidations, people will know that they buy USDC at a 13% discount, then people will do that nonstop.
  - Kurt: Well, the liquidation penalty does not affect anything here. It just is about the amount of Dai that the system targets in the liquidation. It does not affect the amount collected, which is determined by the market price.
  - Vishesh: In terms of market price, if the auction occurs on stablecoins, they would occur for a discount. We can also talk about what that discount will be, but nobody will be on an auction if it were not discounted.
  - Kurt: Well, all the discounts someone is likely to get on an auction like that is whatever the required percentage decrease is between bids. The parameter is called the `Beg`. The liquidation penalty does not affect what you get.
  - Chris Mooney: Yeah, and the discount is probably going to be R when it finally happens. I do agree that liquidations 2.0 will be better at this.
- Akash: If liquidations were to happen for these stablecoins, let us think from the Market Maker perspective; they would buy USDC, convert it to USD, and if liquidations are going on in USDC, how do they convert that back to Dai? Does anybody have the answer to that?
  - Christopher Mooney: They would have to buy Dai in the market.
  - Kurt: Do you mean convert USDC to Dai or USD to Dai?
- Akash: I am just trying to close the loop. I think there is an additional problem if USDC were to go into liquidation. The nice thing about having that USDC-A Vault is that it is a way for if an ETH auction happens, you buy the ETH, theoretically you sell it on Coinbase for USD, you take that USD, and you convert it to USDC-A, and now you can mint more Dai. My issue is, people should think about that whole circle of if you are trying to liquidate USDC-A, the Market Maker at the end has to convert that back to Dai in some sense. That is where I am having a little trouble understanding what the implications of that are.
  - Kurt: Let us try to think it through. You are a Market Maker, and you buy in an auction some USDC by giving Dai. So now you have got USDC, and what are your options? You can sell it on the market for Dai or put it back into a USDC Vault and generate some Dai under the assumption that you will be able to unwind that position over the coming days or weeks. Are there any other options?
    Akash: I am trying to warn you that you can sell the USDC for anything you want. I guess that is easier to sell for Dai than USDC.
- LongForWisdom: I think the point is that it is not great to liquidate them when the Dai price is still above Peg, right? That is the takeaway.
  - Primoz Kordez: Yes, that is the idea. I mean, you would not be liquidating those Vaults and doing this recycle because you would be just having the same USDC exposure, so you should be doing this when Dai price falls and demands trends a bit. And then, once you acquire it, you see it is easier for you to buy Dai because there is no push anymore on the demand side. As Long said, you would be doing this, and liquidations would be triggered once you can achieve lower demand on Dai, once you achieve a lower price. Furthermore, this is how keepers can buy back into Dai once they acquire USDC.
  - Nik Kunkel: Once we have liquidations 2.0, it should help quite a bit because you can effectively do like a rollover where, as long as you have debt ceiling and you have liquidations 2.0 enabled, you can borrow USDC or PAX or TUSD, borrow some Dai, liquidate one of the Vaults, instant-buy the thing because there is a Dutch auction, dump what you were purchasing on the market and pay back the flash loan, all in a single atomic transaction. And all of what you have essentially done is just slightly clip the Vault's losses and created new Vault, which will probably have the same problem, you know, X amount of time down the road when the stability fees catch up.
- Akash: How many USDC Vaults or how much notional is there that could theoretically become bad debt because of fee accruals? Does anybody have a sense of how much that is in terms of the number of Vaults?
  - Christopher Mooney: My intuition of this is that it is all of it. At this point, I do not see why you would maintain a USDC-A Vault at all. I would take the maximum amount of USDC; I'd take the max amount of Dai against it, and, with a 4% accrual in the very next block, it would take itself under collateralized and ready for liquidation. Right now, I do not see the value in holding it, so I think it is fair for us to assume that all of the USDC-A Vault debt ceiling is ready for liquidation. That is, in reality, not the case, but that can be the conclusion.
  - Primoz Kordez: I think the number is 200 million.
  - Nik Kunkel: That makes the most sense because it is completely profitable to take the maximum amount of leverage possible, right? As long as Dai is above the $1.01 Peg. The USDC debt ceiling keeps growing by X amount of millions per day because as soon as we tick over $1.01, someone does this flash loan transaction to knock it back down. To make a profit, it abandons the Vault, and on top of that, they keep the put option, where if Dai ever does drop below \$1.01, they have the option to pay back the Vault and make even more profit.
  - Vishesh: I am just looking down the Vaults list because I can sort by collateralization ascending. There is this stupid amount of USDC-A Vaults that are below 101%, so it would be a huge chunk of Dai liquidated if that was enabled.
  - Christopher Mooney: Instantly, we would ingest up to the box limit. So we would fill the box at 15 million, and then if we had to, we would turn liquidations off on it again.
  - Vishesh: It also confirms the hypothesis that these are not being maintained, and it makes total sense because there are no incentives to maintain them.
- Christopher Mooney: I am glad we have this discussion because it is a pretty significant paradigm shift from what we are used to, so I am hoping everybody understands it.
- JoeQ: I think that Gregory Di Prisco has a point, in the chat, that we cannot wait too long on this or else it will end up being a bigger problem.
  - Christopher Mooney: Yes, I like the idea that if we are under collateralized in USDC-B, that we can test the liquidation there. We do not have to turn on liquidations and see what happens with 15 million; we can craft a spell that does the liquidation and do a few to see how it would look like in the auctions.
- LongForWisdom: I think Chris is right; this has been a positive discussion.
- Primoz Kordez: I want to mention one thing: it is not entirely true that all of those Vaults are going to be unwinded. Just imagine there is 15 million DAI made tomorrow from some pool asset. I cannot say which one, but let us imagine, the price would go below \$1.01, and the Vault owners who supposedly abandoned their Vault would, of course, buy it, so they would close their Vault because they would get some additional money back. So, it is not sure that these Vaults are going to be abandoned. If it can reach the price to fall, which is due to an oversupply, those Vaults would unwind because there is arbitrage again. However, speculating on 50 or 100 million Dai from other sources, it is a bit harder in the short-term. Maybe through some farm assets.
  - LongForWisdom: Thank you, Primoz. I think we will leave that discussion there, for the time being, because we are about 20 minutes past. Any final comments or reminders?
- Matthew Rabinowitz: Yes, I extended a Q&A on Real-World Assets that are going to start probably in a three-minute break after this call. I will put it in the [link](https://forum.makerdao.com/t/doi-off-chain-asset-backed-lender-to-onboard-real-world-assets-extended-q-a/4296) in the chat. Please join if you can or watch the video afterward.

#### Links from Chat

- [MIP21](https://forum.makerdao.com/t/mip21-real-world-assets-off-chain-asset-backed-lender/3917)
- [Collateral Onboarding Grants](https://forum.makerdao.com/t/collateral-onboarding-grants/4252)
- [Differences Between Current and Proposed COB Process](https://forum.makerdao.com/t/improvements-to-the-collateral-onboarding-framework/4250)
- [Extended Q&A for the Declaration of Intent](https://forum.makerdao.com/t/doi-off-chain-asset-backed-lender-to-onboard-real-world-assets-extended-q-a/4296)

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
- Gala Guillen produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
