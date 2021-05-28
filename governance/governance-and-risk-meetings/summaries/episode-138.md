# Episode 138: April 22, 2021

## Agenda

- [00:00](https://youtu.be/9mjXKzL0bxU): Introduction
- [03:46](https://youtu.be/9mjXKzL0bxU?t=226): Forum at a Glance
- [05:58](https://youtu.be/9mjXKzL0bxU?t=358): Smart Contracts Team Update
- [13:47](https://youtu.be/9mjXKzL0bxU?t=827): Oracle Team Updates
- [22:13](https://youtu.be/9mjXKzL0bxU?t=1333): Risk Team Update
- [31:00](https://youtu.be/9mjXKzL0bxU?t=1860): Real World Finance Update
- [39:39](https://youtu.be/9mjXKzL0bxU?t=2379): Operational Support Update
- [43:10](https://youtu.be/9mjXKzL0bxU?t=2592): MIPs Update
- [46:17](https://youtu.be/9mjXKzL0bxU?t=2777): April Governance Cycle Review
- [48:40](https://youtu.be/9mjXKzL0bxU?t=2920): Open Discussion

## Video

<https://youtu.be/9mjXKzL0bxU>

## Introduction

### Agenda and Preamble

#### LongForWisdom

[00:00](https://youtu.be/9mjXKzL0bxU)

- Hello everyone! Welcome to the Scientific Governance and Risk meeting #138, taking place on Thursday, April 22nd at 17:00 UTC. My name is LongForWisdom. I'm the Governance Facilitator at MakerDAO.
- If you have comments or you want to ask questions, please do interrupt.
- Deeper Discussions happen in the [Forum.](https://forum.makerdao.com/)

##### Governance

- The Governance process went well. Our latest executive passed with some critical bug updates that were fixed and will be addressed soon.

##### Polls

- We have [7 green lit polls](https://forum.makerdao.com/t/weekly-mips-update-34/7668) running for the next ten days. please vote if you have not.
- Both YFI liquidations 2.0 parameters and the MIPs monthly cycle pass and will conclude before this week's call. LongForWisdom will be confirming the MIPS monthly cycle. He will also have an update on YFI.

##### Governance Alpha

- We're making good progress on the delegation front. We are looking into snapshot voting implications. We are reaching out to interested parties who wish to delegate. Likewise, there has been progress in the MIPs Portal; we're looking to get some additional functionality with filtering options.
- Quick update on SourceCred; Shout out to Matt from 6S for his forum post concerning [increasing distributions](https://forum.makerdao.com/t/6s-capital-llc-downstream-agreements/7457/13). We work with the SourceCred team on setting parameters and having some forthcoming changes. Your input on the forum is very helpful.

## Weekly Updates

### Forum at a Glance

#### Elihu

[03:46](https://youtu.be/9mjXKzL0bxU?t=226)

[Forum at a Glance - Forum Thread](https://forum.makerdao.com/t/forum-at-a-glance-april-16-22/7609)

#### Three-Point Summary

- MKR hits ATH again this week with 4878 USD
- System surplus buffer is steadily filling up and now at 26.7 million
- Total DAI supply is also growing now. It's at 3.6B

##### Announcements

- The liquidations 2.0 upgrade is now voted in. Feel free to check the [blog post](https://blog.makerdao.com/the-liquidations-2-0-upgrade-executive-vote-is-live/) to know what it means to Maker ecosystem and community.
- In [another post](https://forum.makerdao.com/t/esm-end-module-upgrades-and-disclosures/7569), Kurt and the smart contracts team go into detail about the reasons for the delay in the recent executive vote delay.

##### Discussions

- [Real-World Assets - Strategy for 2021](https://forum.makerdao.com/t/real-world-assets-strategy-for-2021/7570)
  - With the first Real-World Asset operational (New Silver), the RWA team discusses strategy for 2021.
- [Liquidations 2.0 Auction Duration Tradeoffs](https://forum.makerdao.com/t/liquidations-2-0-auction-duration-tradeoffs/7565)
  - @Primoz presents an analysis of possible scenarios resulting from different Liquidations 2.0 auction durations.
- [What If… A Powerful Intelligence Agency Attacked The Emergency Shutdown](https://forum.makerdao.com/t/risk-what-if-a-powerful-intelligence-agency-attacked-the-emergency-shutdown/7525)
  - @ElProgreso starts a discussion on various Emergency Shutdown attack vectors.

##### Signal Requests

- [PAX vault DC change](https://forum.makerdao.com/t/signal-request-pax-vault-dc-change/7540)
  - @alexis is looking to adjust the PAX stablecoin’s Debt Ceiling.
- [Adjust Liquidation Ratio for UNI-V2-DAI-USDC-A Vault Type](https://forum.makerdao.com/t/signal-request-adjust-liquidation-ratio-for-uni-v2-dai-usdc-a-vault-type/7444)
  - @monet-supply is seeking consensus on reducing the Liquidation Ratio on the UNI-V2-DAI-USDC-A Vault.

### Smart Contracts Team Update

#### Christopher Mooney

[05:58](https://youtu.be/9mjXKzL0bxU?t=358)

- Thank you to everyone who voted on the executive, which passed. We were anxious because this resulted from 12 months' worth of work to ship Liquidations 2.0. It will be on a tight cadence from Kovan to mainnet for another 4 to 6 weeks. We currently put YFI on Kovan, which is collateral number two. We're now beginning to construct the mainnet spell for it. In addition to YFI, there are other changes as well because we have a large backlog. We will see a ton of work from the Rates Group, along with some DC and instant modules changes. All of that is going into the spell.
- We can deploy all of the ETH collateral types in WBTC to Kovan On Friday and prepare for mainnet the next week.
- We passed the executive promoting 25% to the burner, and the rest accrue to the surplus buffer and target of 60 million. We're planning to use the Lerp module, which will get us there over time. This is not a perfect solution. The target of 25% may vary because edge cases can result in a different number. We set up a particular time target over that period. Also, one anomaly that's worth calling out is if we were to see massive series of liquidations, the 13% fee will be accrued to the surplus buffer, which could put us over the amount that we can set the DC to at any particular time. That will create a whole bunch of `flap` auctions. These actions are surplus and thereby possibly exceed a 25% burn.
  - Brian: Lerp has been updated to set an arbitrary start date. May 1st, 2021, is the start date. We are merely making an estimate right now and hoping our expectations will match reality.
  - Chris: We have a densely packed executive run coming up; we have the Friday executive and then the Monday executive, YFI, and rate changes. Everything needs to be voted in over the weekend if MKR holders want to see it executed because, on Monday, another executive bundle will enter the portal, which will need to execute in four and a half days. Please stay active over the weekend. We need all MKR holders to vote for these executive proposals.
  - Brian: We should put a time limiter on the spell for this Friday and make sure that the spell doesn't get executed before the other one. There should be a version check or something like that, which will prevent it from being cast to prolong past the pause delay.

### Oracle Team Update

#### Nik Kunkel

[13:47](https://youtu.be/9mjXKzL0bxU?t=827)

- We're still working with Defi Saver to get their light feed running. They released a new feature where you can compose transactions. They're dealing with some bug repairs while in production. We may have it up by early next week and hopefully include it in next week's executive.
- We should onboard another wave of light feeds. As the protocol scales, there is more DAI supply and thereby more collateral. You want to increase the number of signatories on this multi-sig. Increase the threshold for launching an oracle attack, thereby making coordination more difficult. I started reaching out to some projects. We can see applications rolling out in the next couple of weeks within the forums.
  - Andrew: I use Defi Saver for leverage and boosts. It repays you at different levels, but it's a 2 hours delay when the OSM kicks in. Can it help to execute at market price, or is that unrelated?
  - Nik: It's completely unrelated. Defi Saver would be one of the inputs into the medianizer. The medianizer is that real-time ETH price that gets fed into the OSM at the top of the hour. the OSM creates that one-hour price delay. Defi saver is an app that uses the OSM price. It doesn't affect how the user interacts with Defi saver.
- Nik: I've started testing the Uniswap LP oracle code with Sushiswap LP tokens which you presume automatically works because Sushiswap, at least the swap component, is almost a direct fork of a Uniswap; nonetheless, this is something that we should test to gear up the Sushiswap Cropjoin that Sam has been working on. Also, we have the audit from ABDK.
- Nik: We need to redeploy the LP oracle tokens for all of the Uniswap LP tokens that we've onboarded so far because they're using the smart contract specifications we launched in late December. After the audit, we have some expected changes. We're planning to have that transition within the next few weeks.
  - Frank: A few months ago, you mentioned raising the oracle sensitivity for some of the collaterals. I brought this up to pre-motion about LINK, and I know you mentioned that they raised it to 4% except for ETH and wBTC. Could you give us an update on what's going on with that? Are we saving any money?
  - Nik: I don't have a hard number in front of me, but just looking at the amount of ETH that's been funneled into the relayers, it's decreased. That validates your assumptions. We did raise the price sensitivity to 4%, which means that the price has to change by 4% before the medianizer updates. 1% sensitivity was too expensive, but it worked out well for ETH and BTC. Also, those vaults are relatively large; we want to increase the sensitivity there. It doesn't make sense to do that for vaults that have less than 100 million.
- LongForWisdom: In the forum, we lost one of the dark feeds. Is that a concern for you?
  - Nik: No, their particular circumstances are, 'I'm retiring, and I don't want to deal with crypto anymore.'
  - Frank: The OSM wasn't catching up. Remember when everything was dropping?
  - Nik: The transaction to the OSM at the top of the hour wasn't going through because of the spike in gas prices. Even though we were increasing the gas cost of the transaction, it took many hours to go through. We try to be more aggressive on gas prices. Still, it comes down as a cross-function. The frequency of updates vs. how willing you are to get precise gas costs vs. how much money you are trying to save by varying the time by a few minutes. We don't have a perfect solution, but I plan to deal with it.

### Risk Team Update

#### Primoz Kordez

[22:13](https://youtu.be/9mjXKzL0bxU?t=1333)

- Two days ago, we [published a post](https://forum.makerdao.com/t/liquidations-2-0-auction-duration-tradeoffs/7565/9) concerning the Liq 2.0 parameters related to the expected auction duration. We analyzed to show how delayed bits may impact Maker and vault owners. Even if auctions were to last up to an hour and a half or, in some cases, up to two hours, Maker would be safe with no losses. The larger concern lies in how much of the over collateral value vault owners would lose if bits were delayed. Respectfully, we showed the other side. If we were to make auctions longer, vault owners and Maker would be exposed to additional market risk. There is a trade-off. However, according to the feedback, we haven't seen any larger objections, which means we'll propose a similar set of parameters for ETH and renBTC vaults tomorrow. This was one of the primary reasons for the vote. We want to clear this out before we proceed to implement auction parameters for ETH and renBTC. I also want to note that there's another reason to propose the same set of parameters of ETH and renBTC for LINK and YFI; we may not want to create disorder between Keepers when they set up their software to bid in this initial testing phase. It is better to have all parameters unified. If we observe auctions running smoothly with high participation, we may propose adjustments. The only parameter where we said we're going to make some changes is the `ilk haul`, which is the number of pending auctions per particular collateral asset. There was a debate concerning increasing the surplus buffer with the Lerp module. We may hit it in about eight days or sooner if we have some liquidations. I suggested enabling it this week because of the issue Chris mentioned. If we have a large liquidation event in front of us, we could collect millions in fees. There are about \$400,000 from stability fees daily, and this would all go into the burner on the same day. I suggested increasing the surplus buffer tomorrow. Finally, we looked into peg stablecoin vault usage, which has increased within the last week. On-chain liquidity for peg has become so poor that people are using the vault to farm with Dai. Maker doesn't charge any stability fee on PAX.
  - LongForWisdom: Thank you Primoz, anyone has any risk-related questions? We see the DAO on main vaults increasing, especially on ETH-A. How risky is this?
  - Primoz: With Liquidations 2.0, it's much less risky. We still need to see how they perform. I'm very optimistic. Also, most of the risk is related to liquidity. Because ETH price went higher, this risk is getting lower.
  - LongForWisdom: Given that we're not guaranteed to see liquidations before the point where we vote on ETH-A and wBTC for Liq 2.0, are we going to wait until we confirm that things are working with LINK and YFI before pushing Liq 2.0 to ETH-A?
  - Brian: I would love that. We are now working on this governance schedule that is not an all-inclusive design, so maybe that's a question that we could ask the broader audience. Can we wait? I think there's a lot of concern that there will be some large market drawdown within the next month or two. I want to time the market, but it depends on whether you want Liq 2.0 in place before or after that.
- Wouter: We can easily test Liquidations 2.0 on the mainnet. It'll cost a bit of money, but we can open a vault, meet our risk, and liquidate it.
  - Brian: Anyone can do that. I won't be the one.
  - Wouter: Come on, Brian, with the current MKR price, it shouldn't be an issue, right?
  - Brian: Not happening, Wouter, sorry.
  - Seb: It will cost more to first have Liquidations 2.0 and then potentially fail, causing to delay Liquidations 2.0 and lose \$100 million.
- Derek: We've discussed doing some mainnet tests with the integrations team just to test the Keepers, the system, and the UIs that we'll have in place coming down the line. I think that's a good idea for us to do. I can work with integrations and communicate to guys regarding our plan.
  - LongForWisdom: Sounds good, thanks all.

### Real-World Finance Team Update

#### Sebastien Derivaux

[31:00](https://youtu.be/9mjXKzL0bxU?t=1860)

- Regarding NewSilver, we have our first investment in RWAs toward Dai. It worked. I want to thanks the SC and Centrifuge team.
- We had a nice piece on Coindesk. We had some PR activities, so that's always good. People can see that Maker is always innovating, so we innovated with Uniswap LPs early this year now with RWAs.
- On the other RWAs but mainly on the ones based on the trust solution, we're still waiting for Matthew to release the last pieces on the 6S collateral. We're making progress with SolarX and Renault because they work together to find the best solution. They're exploring all solutions based on collateral agents stuff like that, and thanks to Christian, who's helping us a lot.
- We're preparing for the next batch of RWAs, which will be after liquidations 2.0 and after delegation because there are very important. But we're working on one batch of collateral Centrifuge assets making more than one collateral in one executive for Centrifuge because those are just copy-pasted collaterals, and we've less visibility on trust-based collaterals SolarX and Renaults. I think 6S will be there quite soon. On these, we've one deadline for Solar Farms that should be done by the end of June because they need the financing, equity the sellers because those are the properties they buy to the farmers we can't wait for farmers to wait for years they don't have strategic passions so we're putting in place to present it may be next week.
  - LongForWisdom: I saw some of the documents from 6S posted on the forum. Any updates on those?
  - It was delayed this week, but we have a law firm called Arnold & Porter LLP. They have partners in New York who worked on a lot of asset-backed securities. All those criteria legends trust them to help us on this, so we need to have everything in place. So there is a lot to read on the legal side of things.
  - Matthew: I encourage the review, and I do encourage the community to appreciate the notion that all of the transactions come with a legal opinion to ensure enforceability because legal opinions are what the community, I, and as well as trust companies are relying on upon.
- Frank: Matt, you mentioned that the new trust company would review the transactions. Can you quickly review that? I am referring to the blockchain making sure that DAI is moving from one contract to another.
  - Matthew: The piece that they are going to monitor is the liquidation status of the given vault, the debt outstanding, and the DC to govern largely their decision making with regards to whether or not additional credit can be extended or how funds get returned or if vault needs to be liquidated. They aren't participating on whether DAI has been drawn or DAI has been returned per se. Instead, it engages in how they handle as the trustee over the trust.
  - Frank: How did they overcome that because? They might have initially hesitated.
  - Matthew: Strategic patience. In general, it is a big picture. We trust the 'trust,' and we trust the trustee; That's the notion of it. There is a credit agreement that would be executed between LendCO and the trust. Transactions that would fall within the scope of the credit agreement are things that could be lent against from the trust to LendCO; otherwise, it won't extend credit.

### Operational Support Update

#### Amy Jung

[39:39](https://youtu.be/9mjXKzL0bxU?t=2379)

- The [Know your MIP Direct Deposit module](https://forum.makerdao.com/t/know-your-mip-kym-08-mip50-direct-deposit-module-monday-april-26th-17-00-utc/7566) is coming up next week. We also have collateral onboarding; we have [MCO2](https://forum.makerdao.com/t/collateral-onboarding-call-31-mco2-token-wednesday-april-28-16-00-utc/7615), which involves carbon footprint. That'll be next Wednesday as well. Lastly, we had a few launch pod series [Governance Communications and Sustainable Ecosystem Scaling](https://www.youtube.com/watch?v=q1uDLSXRPik). I want to remind you that we have completed our first series of RWA, their team, and their work.
- We had [Bitwage](https://youtu.be/_Q8go5vGu9g) last week, which involves payroll invoicing. We also have [Request Network](https://forum.makerdao.com/t/core-unit-tools-06-through-request-april-23rd-16-00-utc/7453) tomorrow. They are eager to have core unit facilitators interested in using their products.
- Regarding intentional organization and what we can do to communicate better in the DAO; We're perpetually growing, and communication is an important and challenging aspect of any community. Please, leave some ideas [here](https://forum.makerdao.com/t/intentional-organization-what-can-we-do-to-communicate-better-in-the-dao/7588).
  - LongForWisdom: Are there updates on the SES or SCS progress?
  - Juan: Yesterday, we had a [presentation](https://www.youtube.com/watch?v=q1uDLSXRPik) with the community where we presented what we're trying to achieve and how we plan to do it. We're looking forward to your feedback. We would like to get everything set up for the next round. If you can read the [MIP](https://forum.makerdao.com/t/mip39c2-sp10-adding-sustainable-ecosystem-scaling-core-unit/7368), we would appreciate it.

[Operational Support Weekly Update: March 22- 24, 2021](https://forum.makerdao.com/t/operational-support-weekly-update-march-22-24-2021/7192)

### MIPs Update

#### Charles St. Louis

[43:10](https://youtu.be/9mjXKzL0bxU?t=2592)

![Governance poll passed](https://i.imgur.com/8gbZAqW.png)

![Final week in MIPs](https://i.imgur.com/C6QIBup.png)

![](https://i.imgur.com/QTOWU5F.png)

- 26 proposals in RFC!

## Procedural

### April Governance Cycle Review

#### LongForWisdom

[46:17](https://youtu.be/9mjXKzL0bxU?t=2777)

- The governance vote has passed. All inclusions will continue into the executive vote on Monday. This includes core units for content production, growth, critical engineering, and the Swag Shop. There's a [Declaration of Intent proposal](https://forum.makerdao.com/t/mip13c3-sp10-declaration-of-intent-eurdai/6766/17) for Euro-DAI along with several amendments to various MIPs, including [MIP4](https://forum.makerdao.com/t/mip4c2-sp7-mip4-amendments/6508), [MIP9](https://forum.makerdao.com/t/mip4c2-sp8-mip-9-amendments/6793) and [MIP0](https://forum.makerdao.com/t/mip4c2-sp13-mip0-amendments/6758).
- MIP0 amendments are minor. MIP4 amendments are a little more involved but not groundbreaking. MIP9 amendments are only setting it for green light polls twice a month rather than once a month. We'll also be doing some of the budget distributions on Monda. We will begin with Protocol Engineering and try to get to the other core units as well. However, I will need to speak to them first. Make sure to look for that on Monday.

## Open Discussion

### End Book Fixes

#### LongForWisdom

[48:40](https://youtu.be/9mjXKzL0bxU?t=2920)

- LongForWisdom: Do anyone from the Smart Contracts team want to speak about the end book fixes?
  - Kurt: There's a detailed [forum post](https://forum.makerdao.com/t/esm-end-module-upgrades-and-disclosures/7569) about this. Along with the [Liquidations 2.0 spell](https://forum.makerdao.com/t/mip45-executive-spell-technical-delay-2021-04-16-2021-04-19/7532/4) that was recently voted in were some bug fixes concerning the ESM and the end module, which is the smart contract that orchestrates the global settlement process after an emergency shutdown. In the process of scrutinizing them, we had found issues with the ESM. It didn't revoke the access of Governance to certain aspects of the system. A quick overview: the ESM is used to dump a certain amount of MKR and shut down the system. The primary intent of it is to allow an honest minority to defend against malicious majority within Governance. Another usage will be if there's were a critical bug in the system that can't be safely patched. Some minority of MKR holders could be notified and safely shut things down. It didn't work very well for the first intent of defending against a malicious majority because there was still access for governance to retain the system. The fix was to completely shut Governance out if the ESM were to get triggered. If there is a bug in the emergency shutdown process itself that Governance could intervene and repair turns out to be the exact kind of bug that we had at the end; if there was a certain amount of collateral reserved to cover Dai, and it exceeded a particular value you'd get an overflow. The end process would get stuck. Governance could have stepped into for repair, but we changed the ESM to shut Governance out completely. The fix was relatively quick. It took longer to write the forum post explaining this than it did to fix the issue.
- LongForWisdom: Risk spoke about future mitigations to pick up these sorts of bugs. Would you like to summarize those?
  - Kurt: there will be fully detailed post mortems at some point within the near future. Unfortunately, we're a little bit oversubscribed at the moment. I don't want to make false promises. The ESM bug was caught by discussing how it worked while we were looking to redeploy it. Originally, there wasn't a good enough specification for the ESM. It was around the time that the system was first being deployed. The Governance system wasn't well defined or finalized. The lesson is that we require better specifications upfront for the requirement of these things. Of course, we can add test coverage for that, which we now have. The end big was caught now because we were writing tests to perform the emergency shutdown process with the LINK-A executive applied. By performing those tests, we saw they were getting stuck, not working, and reverting.
  - Kurt: But how can we find these bugs sooner? We have a few different things we want to do. We want continuous integration tests that are running all the time or periodically against the mainnet state. We could catch the bug as soon as we have more than a certain amount of DAI from ETH-A, for example. We could have added formal verification where you say 'here are the expected magnitudes for values in the system' and then run an automated checking tool that says confirm the intermediate calculations overflow and revert if the magnitudes are in those expected ranges. That's another thing we want to do. Generally, we'd love to be spending more time on security and safety work. There's been a [big road map](https://forum.makerdao.com/t/protocol-engineering-the-road-to-defi-safety/7567) published for that that you could find on the forum as well. We could use these issues to invest more into upstream activities instead of pushing everything out at once.
- LongForWisdom: Awesome, thank you for summarizing that. I like the idea of having a sandbox running and constantly shutting down the protocol to make sure everything works.
  - Kurt: it would be running against the current state and values on the mainnet. Somebody may ask if the emergency shutdown was tested before? Well, it was tested extensively, even on the mainnet. This bug only surfaced when we had a certain amount of collateral in the system. all those tests were done with too small values to trigger the bug. That's why continuous integration tests can help discover it as soon as it happens. It's not ideal since you do have to find it on the mainnet. These solutions are not complete. We need this more intensive and frequent early checking within the dev process where you write tests or do some verification using a wide range of values to look for problems anywhere in these specified ranges.
- LongForWisdom: I think that makes a lot of sense. Any other questions?
  - Christopher Mooney: We have a full [response to the MIP45 audits](https://forum.makerdao.com/t/mip45-audit-summary/7612) posted in the forums today authored by Kurt. We took a little while to collect our thoughts. Kurt did a good job at describing each issue in the audit and how they were addressed. It's a very comprehensive response.
  - Kurt: In the audits, there were no super severe bugs that were found. There were potentially two or three that were fairly significant. These were fixed. Most of the issues were either minor, informational, or simply remarks on design aspects of the system, such as how we do authorizations or conventions. There were also good ones that were brought up concerning the risks of MEV to the Liquidations 2.0 system.
  - LongForWisdom: I'm sure I'll be able to find time to read it.
  - Kurt: Let us know whether your issue was addressed or potentially what does the issue even means. They refer to very detailed things about the system. Hopefully, this will help anyone who wants to understand the audit reports.

### Delegation

#### LongForWisdom

[1:00:45](https://youtu.be/9mjXKzL0bxU?t=3645)

- I posted a thread on the forum concerning delegation. In summary, delegation is coming fairly soon. People volunteered to be delegated. Gov Alpha and I are reaching out to interested people. We are discussing best practices and creating a collaborative set of goals.
  - Payton: A concern that sprouts within the discussion of the delegation are the potential for one person or entity to be able to retain all the voting power all while everyone else is content and thereby allowing this person to become malicious. Do we have any practical limitations in mind or anything related?
  - SamM: This person would have to maintain the voting power for two days to secure the `hat.` Delegators will be made aware of this to allow them to pull their MKR to reverse their vote. This is not a critical scenario but concerning.
- LongForWisdom: Does Dss Gov change this because it works off a snapshot system?
  - Kurt: It's unknown if Dss Gov will ship in its current form, but we spent a lot of time discussing mechanisms regarding delegation expiry time to prevent delegates from misbehaving or becoming apathetic. These mechanisms are put in but do require to be revisited and reviewed.
  - Christopher Mooney: It's a problem. We tried to address it in Dss Gov. However, the type of delegation we will have here is a minimum viable implementation of delegation. We are hacking up a voting proxy to allow for delegation.
  - SamM: We don't have any vote decay implemented at the moment because we don't need it. We are redoing the delegation when Dss Gov releases. That will be sufficient.
  - Christopher Mooney: I can imagine scenarios where it doesn't work. However, I agree that it is most likely that we move to Dss Gov and perform the best implementation. Does anybody object?
  - Frank Cruz: Is decaying similar to slashing in POS?
  - Christopher Mooney: At a certain threshold, the delegator's delegation will eventually become ineffective and require re-up through participation in the protocol. This prevents early delegates from being apathetic or monopolizing locked or lost MKR.
  - LongForWisdom: I hope that we will have an initial set that will help avoid everyone piling into a single delegate. We will be able to keep MKR distributed between delegates through the delegate's quality. Overall, we will have to experience this through practice.
  - Brian McMichael: The Protocol Engineering team has no intention of being delegates because that can be an issue of power.
- Frank Cruz: Are any core unit members will be delegates?
  - Christopher Mooney: It's permissionless. Anybody could put their name forward, but it would be a poor idea for MKR holders to delegate due to potential power concerns for the delegator.
  - Kurt: Somebody can go and mix my MKR and make it untraceable, come back with a pseudo identity, and convince MKR holders to delegate to them. This is a realistic possibility.
  - LongForWisdom: We are planning for Gov Alpha to perform delegate verification. It won't be anything forceful, but there will be communication involved between these people. Verified delegators can receive a checkmark status or something like that.
  - Kurt: That sounds like a good place to start. Delegates will evolve, and anything can happen in the future. We may have much more comprehensive investigational capabilities in the DAO or something. These are crazy ideas, but who knows.
- Peyton: I know the SES Core Unit presentation mentioned a vision involving parties as delegates. Does anybody have opinions on this?
  - Wouter: There are three models that we discussed. These are three bottlenecks for scalability. We are trying to develop a vision of what things may evolve into. We have a decentralized workforce and capital allocation. One of the issues we are addressing is that MKR holders have limited bandwidth. As the ecosystem scales, you can expect MKR holders to continue getting involved in the nitty-gritty and micromanage every little thing. On the other end, there will be much involved in understanding which work needs to be funded in the DAO based on importance. We will also check the quality of every Team's work. Finally, we are concerned with the potentially coming need to have a budget limit. Currently, our budget is like a buffet as we are adding on tasty core units, and it may look like there is no limit, but sooner or later, it will happen. Then we will need to know how to prioritize core units and the DAO budget. The idea is to have a limit set for groups who develop their vision and priorities for the DAO. We can have people who work to focus on budget allocation for these goals within the budget limit. This is a very compatible and scalable idea. However, delegation is the first step. I am excited to create more documentation discussing how these ideas can evolve in the future. Please, listen to our [launch-pod session here](https://www.youtube.com/watch?v=q1uDLSXRPik&list=PLLzkWCj8ywWPf-GwmG9kXu5ggKE1fGw2s&index=8).

## Common Abbreviated Terms

`CR`: Collateralization Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`GF`: Governance Facilitator

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

`OSM`: Oracle Security Module

`LR`: Liquidation Ratio

`RWA`: Real-World Asset

`RWF`: Real-World Finance

`SC`: Smart Contracts

## Credits

- Artem Gordon produced this summary.
- David Utrobin produced this summary.
- Dennis Mitchell produced this summary.
- Sai Teja produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
