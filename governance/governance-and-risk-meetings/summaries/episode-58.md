# Episode 58: October 24, 2019

## Agenda

- [00:00](https://youtu.be/rKq4J4bKndc?t=8): Intro with Rich Brown
- [02:39](https://youtu.be/rKq4J4bKndc?t=159): Pre-Launch Governance Migration Cycle with Cyrus
- [46:44](https://youtu.be/rKq4J4bKndc?t=2804): Governance Contracts and the Security Roadmap with Wouter Kampmann
- [1:15:35](https://youtu.be/rKq4J4bKndc?t=4535): DAI Market Analysis with Vishesh

## Video

<https://youtu.be/rKq4J4bKndc>

## Terms

`ES`: Emergency Shutdown

`SF`: Stability Fee

`SLP`: Secondary Lending Platform

`DSR`: Dai Savings Rate

`SAI`: SCD Dai

`DAI`: MCD DAI

`sCDP`: SCD CDP

`mCDP`: MCD CDP

## Intro

### Rich

#### Introduction & Governance

Cyrus is here to discuss the Pre-Launch Governance Migration Cycle, and Wouter, our head of engineering, is joining us too. We're continuing the momentum from Wouter's insights in the last meeting. Since our base layer operates as a technology company having a deep insight into the internal mechanics is invaluable. Especially the underlying governance contracts and security. Again, a reminder that governance is about to get more complex, and that complexity is reflected in the contracts. There is a purity in the rulesets in the contracts, but viewing the system through that lens (and by extension tooling available) is essential. So, we're thankful to have him here.

Thanks to everyone for showing up, as always, place questions in the chat or speak up.

### Cyrus

#### Pre-Launch Governance Migration Cycle [02:39](https://youtu.be/rKq4J4bKndc?t=159)

- This might be a data dump, so interrupt and ask questions as you see fit.
  ![](https://i.imgur.com/4NOIjB5.png)
- Migration risk recap
  - We have two sets of stakeholders SAI holders and CDP owners.
  - SAI holders will be able to convert into Dai using a special migration contract.
  - CDP owners can migrate their CDP's using the SAI from the migration contract to repay the debt. As long as there is Sai liquidity.
    - This requires MKR to pay the governance fee for your CDP. If you don't have any MKR, the migration contract will facilitate that purchase through DEXes in the back-end.
  - Our goal is to shepherd users over. Global Settlement/Emergency Shutdown will occur at some point, and we have time to figure out the specific mechanics of this.
    ![](https://i.imgur.com/wAINoPn.png)
- There are a number of MCD benefits that will attract users to migrate.
- DSR, lower Stability Fees, improved liquidation structure, and support for new collateral types.
- Additionally, a suite of new security features: Oracle Security Module, Governance Security Module, Emergency Shutdown Module. More discussion on those next week.
  ![](https://i.imgur.com/mFi0WTf.png)
- Considerations
  - The pace of migration: if this is too slow, it will cause issues for governance managing two Dai pegs and SF's.
  - Negative ramifications for the DeFi ecosystem. Fairly evident why we don't want this migration to be drawn out. We need to think about a sweet spot for the speed of migration.
  - There are also questions about knowing when to call the migration 'finished.' Not sure it will ever hit 90% or even 100%. Once we can agree on its completion' we can go to more standard governance cycles. Hope is that migration completes by EOY.
    ![](https://i.imgur.com/Cf5xZob.png)
- Governance
  - Obviously, the overall mandate of Maker is the stability and integrity of both SAI and DAI.
  - The risk team will publish a migration risk module. Parameters and justification for strategy. Entirely focused on safety and incentives. SAI holders, CDP holders, secondary borrowers, and lenders. Thinking about the supply shock and knowing that monetary policy is front and center. Will publish in the next few weeks and set up a governance poll for the community.
    ![](https://i.imgur.com/3CJ2bOK.png)
- [21:55](https://youtu.be/rKq4J4bKndc?t=1320): Collateral Risk Models
  - A general model is still on track for early November before launch. It gives the community time to digest and discuss. Definitely doable in a few weeks, but we aim to discuss the modules in December. We're expecting the real governance cycle to begin in January.
  - Collateral specific evaluation reports will come out in December. Discussion about them will follow as part of the governance cycle
  - I've received questions about whether this is a problem or not, proceeding to launch MCD without them. My answer is that it's not a problem. What we're proposing is to maintain the status quo, much like SAI, with a heavy emphasis on monetary policy to keep the peg healthy. The point of the general risk model is to deal with a separate but important issue in comparison to the risk premiums. Since we're dealing with a potential huge supply shock. Accurate risk premiums take a backseat in exchange for a SF that is determined for the purpose of safe migration.
    - I.E., if we came out and said ETH is a super-safe asset and only needs an SF of 3%, that would create chaos. It would affect the ability of SCD holders to refinance and destabilize the peg. The resulting monetary policy would converge those spreads. The point is that focusing on monetary policy is almost certainly the right course of action for the next few weeks.
  - Planning on launch with ETH, BAT, and SAI. BAT had 100% in the priority poll as the no. 1 selection. REP & ZRX were considered, but both are going through token-economics changes. REP might be a brand new contract token migration, ZRX is implementing new features too. It didn't seem like a good use of time to do the evaluation reports, given the imminent change in a few months.
  - Qualitative analysis of BAT is being evaluated on contract by an independent risk analyst, so that is the first foray into potential decentralized risk teams. Reached out to professional crypto research teams as well, and they're interested in evaluating other assets. The rest we can delegate to other teams.
    ![](https://i.imgur.com/3gDBtaa.png)
- [33:49](https://youtu.be/rKq4J4bKndc?t=2029): Hypothetical Migration Cycle Risk Parameters. - DSR would depend on the type of Migration we think we'll have. The higher DSR, the more incentive to switch over. The 2-5% range is being talked about. - ETH stability fee is a trickier one to pin down. We see a situation between SCD SF and the Compound rates where there is a 2.5% refinancing incentive that's lasted a few weeks without being closed. Hard to pin down CDP owner's incentives here, so we'll do additional research. We had floated other collateralization ratios, but we'll revisit that later. - For SAI, one thing we're thinking of is liquidity provisions and enough room in the debt ceiling for the migration. Especially thinking about secondary market migrations. One other option is to lower the SCD debt ceiling gradually. Keeping a lid on that growth again. - For BAT, the initial parameters are roughly a match for the order books on BAT. We'll expand in the forums on that.
  ![](https://i.imgur.com/X395p79.png)
- Governance Contingency Plans
  - We need to remain agile and nimble, not our best traits historically, but we could improve. One idea is to increase the cadence of calls, thinking of ad-hoc to hold them as we need. If the community says so, we can do twice a week.
  - 48-72 hours after launch, we'll need to convene to discuss and monitor what's happened so far. Moving forward, we'll need to be available more often for public calls.
  - Also, there is a possibility of emergency Global Settlement; we need to be prepared for the "unknown unknowns" and keep them in the back of our minds. That cadence is something we can come to a consensus on together.
    ![](https://i.imgur.com/OjiY1yG.png)
- Governance and Risk Roadmap

## Questions [11:23](https://youtu.be/rKq4J4bKndc?t=686)

- [11:22](https://youtu.be/rKq4J4bKndc?t=685): Have we considered incentivizing early migration with MKR?
  - Cyrus: We're not paying SAI holders to migrate. There are several ways to have subsidized migration.
  - Rich: Cyrus and I have been wrestling with this. We have a few sets of incentives available for us, and it's unknown right now what the appetite is for migration until it actually starts. Until the migration process starts, we don't know how much pressure needs to enter the system to ensure an orderly migration. Reasonably sure we won't have to pay people to move, but it's a possibility.
  - Cyrus: We spoke about this last week, but it is more of a business decision from the MKR community.
- [13:15](https://youtu.be/rKq4J4bKndc?t=805): Mentioned sourcing MKR's liquidity from DEX's, which ones?
  - Cyrus: Mainly Oasis but also an open-sourced arbitrage bots that will be released that sources liquidity from Uniswap and possibly other DEXs as well.
- [14:05](https://youtu.be/rKq4J4bKndc?t=842): Why not use Uniswap as the primary outlet for trading on the back-end since it's the most liquid market?
  - Going to defer to market makers, but they are planning on providing liquidity above their standard level. So there should be better liquidity provision on Oasis. Some CDP's have higher than average MKR governance fees to pay back. We considered the liquidity provision from a slippage perspective; for these instances with significant trading volume, it makes more sense to use a limit order book.
  - Rich: We'll have both open source tooling and the Oasis DEX available.
  - JoeQ: There are also concerns about front-running on Uniswap. We need to be really careful with price manipulation, so that's why we decided to use an order book with bids & offers.
  - Our recommendation (for larger CDPs) is sourcing MKR over multiple markets. Reducing slippage, and also considering migrating in chunks rather than all at once.
- [16:55](https://youtu.be/rKq4J4bKndc?t=1015): If there is 20% of SAI locked in DeFi, if the DAI stability fee crashes, I don't think incentivized migration will ever happen.
  - In general, we are looking at stability fees, and we'll get to this in a few slides.
- [17:27](https://youtu.be/rKq4J4bKndc?t=1045): Alex Evans: For MKR holders, is any formal input required at any point in this process? If there is, where would it be?
  - Cyrus: There will be governance polls to coordinate strategy and source consensus form the community about what level of input they want. In my opinion, it's better to debate incentives, picking the best outcomes from the best parameters. Best to not get mired in debating numbers.
  - AlexE: If I understand what you're saying, you want a set of strategies for the various stakeholders, you want to add that to the risk analysis and wrap it all in a governance poll.
  - Rich: We don't have empirical evidence to look back at to then generate a plan that works. The name of the game is the same defaults, minimal parameters to bootstrap the migration process. Once the process has bootstrapped, then we can figure out how to increment or decrement the relative parameters. The options for launching this are extremely limited: the SFs stay the same, and the DSR is the smallest amount we could reasonably allow. We don't have an idea of what the migration process looks like and what the necessary incentives will be to encourage people to move. We need to tweak those post-launch and see what works. Not a lot of room for experimentation when we're kicking it off, and we'll discuss the strategy a lot on these calls.
- [20:44](https://youtu.be/rKq4J4bKndc?t=1252): Any conversation with Compound to phase out SAI?
  - Compound posted a short blog about their strategy. No phasing out Sai until Global Settlement occurs. We'll need to give the DeFi system significant time to adjust when that does eventually happen.
- [28:08](https://youtu.be/rKq4J4bKndc?t=1690): Are you planning to launch BAT as Collateral in MCD or just the investigation into BAT?
  - Cyrus: We are planning to launch with a BAT CDP. However, we've contracted an independent risk analyst to do the proper assessment of BAT. We will start with some conservative initial parameters and will tune them after the publication of the assessment.
  - LFW & AlexE: We haven't had a BAT yes or no vote. So let's say we publish this general risk model; we look at collateral specific evaluation for it and realize that BAT is not a good fit.
  - Cyrus: Two points. 1. We want to test the system, so we need at least one additional collateral type. 2. Everything will have extremely conservative risk parameters for this special migration cycle and afterward. After the fact, we can manage things differently. Whether it would be awkward if that asset is evaluated negatively, we haven't really considered because our philosophy was that any asset could be included eventually, save for the fraudulent ones, but we don't expect to be in a situation where we would need to remove a collateral type. Especially since that one was voted on with 100% unanimity. That being said, what are our options: could we do a shortened analysis or speed up that evaluation to justify that?
  - ETH is in the same boat; it's not been evaluated. What if the community comes back and says, Based on the report, they don't want ETH, it could be messy either way.
- [39:28](https://youtu.be/rKq4J4bKndc?t=2368): Ben: Say I have SAI in one contract, and I move SAI into DAI through the migration contract. So now, my DAI is collateralized by SAI. What happens when SAI hits global settlement, is that SAI now un-collateralized?
  - It's certainly not uncollateralized since the SAI is a claim on ETH. So, in that case, the DAI is collateralized by more ETH. Even before global settlement occurs because ETH backs Sai.
  - Andy: SAI that is in the single SAI CDP is siphoned out as migration happens. By migrating from sCDP to mCDP, the SAI is taken from the migration CDP and used to pay down the sCDP. The DAI created from the new mCDP is used to pay back the migration CDP, so it balances out and nets 0.
  - Ben: Got it ok.
  - Cyrus: Emptying SAI in the migration contract before global settlement and lowering the debt ceiling will also help. In case there are edge cases of keeping SAI alive in the migration pool by putting SAI back into it.

### Wouter Kampmann

[Full security overview](https://security.makerdao.com/)
[MCD Security Roadmap blog post](https://blog.makerdao.com/mcd-security-roadmap-update-october-2019)
[MakerDAO Bug Bounty](https://hackerone.com/makerdao_bbp/)

#### Governance Contracts and the Security Roadmap [46:22](https://youtu.be/rKq4J4bKndc?t=2782)

![](https://i.imgur.com/0wJ2iyx.png)
![](https://i.imgur.com/ZrteVNl.png)

- Almost all of the contracts have finished formal verification. Three independent audits. Trail of Bits report is on the blog, and you can see all the issues. Nothing critical or high severity. We're working with Peckshield as well; they found one high severity issue, the details of which can be read in the report.
- "Runtime Verification" is building a high-level model of the business logic of the different contracts. Essentially, using formal verification methods to find mistakes in business logic, if there are any, making the verification more robust. That relates to the limitation of formal verification, which uses the local level, but it doesn't consider other contract interactions. That's why we're using multiple audits. Local-level wasn't found to have issues by either partner. But they did come up with some issues that are due to interaction between the contracts. With runtime verification, we hope to develop a formal verification methodology for contract interactions.
- Certora did a test run on our contracts, we didn't pay them, but they found the same issues from our other audits. They even independently reported them, which was nice.
- Bug bounty started in July. Three high severity and one critical found by a skilled hacker. We paid a 9k bounty. It's gone much better than expected. You can see disclosed bugs on HackerOne.
- Every three weeks, we have a partner integration call. Get them to look at MCD code and consider migration as soon as possible. We have a Kovan testnet for partners.
- Deployment correctness check improves every week.
- We are also refining threat monitoring.
  ![](https://i.imgur.com/y7I0ADR.png)
- In looking at the issues, we found and the overlap of discovery across the different audits and programs, we had some interesting findings. The overlap gives us confidence that we did a good job of catching most of the bugs that are in the system. For example, the critical severity bug that we caught was caught by two independent audits and the bug bounty program.
  ![](https://i.imgur.com/AADzfcT.png)
- When MCD goes live, we will be monitoring the system to make sure all the state variables maintain their expected values. The slide above shows the information that we will be monitoring.
  ![](https://i.imgur.com/oQGQehg.png)
- This is a slide from [MCD101](https://github.com/makerdao/developerguides/blob/master/mcd/mcd-101/mcd-101.md) that gives a diagram of all the smart contracts that the system is comprised of.
  ![](https://i.imgur.com/4D6TmXV.png)
  ![](https://i.imgur.com/lHipddv.png)
- There are different paths to make changes in the system. Some of the changes are risky, and should be hard to do, while others are routine that should be easier to do.
- Another aspect of the system are the delays that help protect against attacks on the system.
- Root Module & DSPause: The Root Module is very powerful, just like in SCD, you can change almost anything in the system with it. The DSPause module is a new module to react if there is a malicious governance change. So now we have limits on both attackers and ourselves to go from Executive vote -> system upgrade.
- The Rates Module can bypass the DSPause. There are minimal changes you can do here, basically small moves on SF and DSR. This is where immediate reactions can happen.
- The Oracle Security Module(OSM) imposes a one-hour delay on the publishing of reference prices by the Oracles. If there is an attack on an Oracle, then it allows us to bypass DSPause, for the freeze function, since we only have one hour delay period to stop a fraudulent reference price.
- The Emergency Shutdown Module(ESM) allows a quorum of MKR to trigger an Emergency Shutdown bypassing DSChief. ES can be triggered through the root module by a regular Executive Vote. But, the root module needs to go through both the Executive Vote, passing the previous hat, and then the DSPause. So if you don't have the time for a DSPause delay, then a minority of holders can trigger the shutdown. The threshold to trigger an emergency shutdown is 50,000 MKR. This action also burns the MKR in the process, so there is no getting it back unless a redeployment of the system grants your distribution back to you. So collusion or a bug, then the incentive for honest holders is better to burn MKR instead of the attacking MKR since the new deployment would render previous MKR's value as moot.
  ![](https://i.imgur.com/5CQ0r4G.png)

#### Questions

- [01:08:45](https://youtu.be/rKq4J4bKndc?t=4134): To clarify, does ESM burned MKR get redistributed on redeployment if it was done for a legitimate reason?
  - Wouter: On-chain shutdown happens, and then it's off-chain governance from there. So it's up to the community on how to deal with it. It could be clear that there was a malicious attack, then the MKR owners who triggered ES could be reimbursed upon redeployment.
  - Chris Smith: That would be an ad hoc governance action; there is no technical mechanism for “reimbursement” or judging whether it is “legitimate.”

### Vishesh

#### Dai Analytics [1:15:35](<(https://youtu.be/rKq4J4bKndc?t=4535)>)

#### Relevant links

[Santiment Maker Data](https://graphs.santiment.net/makerdao)
[Graphs about Maker](http://makerdao.descipher.io/)
[Graphs about DeFi Loans](http://loans.descipher.io/)
[DAI 24hr VWAP Graph](http://dai.descipher.io/)

##### Insights: [1:15:35](https://youtu.be/rKq4J4bKndc?t=4535)

![](https://i.imgur.com/jrVRQsz.png)

- DAI supply has been relatively steady at just over \$85MM.
  ![](https://i.imgur.com/zGAvFgH.png)
- There was outsized collateral added to the system despite a lack of corresponding Dai supply growth. Possible as a result of more perceived risk by CDP owners or they are gearing up and preparing to take more leveraged positions.
  ![](https://i.imgur.com/ON6afe3.png)
- Quiet on liquidations despite a noticable move in ETH price movement.
  ![](https://i.imgur.com/kaFe307.png)
- Dai is maintaining a steady trend trading above a dollar. Today the daily volume is around 4MM.
  ![](https://i.imgur.com/K2s8Fa3.png)
- DEX trading volume with DAI over seven days is a little over 2MM daily average, with a 14MM weekly volume.

##### Secondary Lending Platforms: [1:17:43](https://youtu.be/rKq4J4bKndc?t=4663)

![](https://i.imgur.com/IUskMbT.png)

- SF went down, and Compound's borrow rate is still flat at around 11%. DyDx borrow rate was more responsive and came down with the SF.
  ![](https://i.imgur.com/NyTlME1.png)
- Supply volumes have steadily increased. No drastic changes there. Interesting to see with DSR how these will compare.
  ![](https://i.imgur.com/bH8eXAG.png)
- Utilization Rate is still steady. Much better than the past few months, despite the SF drops.
- Unexpectedly quiet on the SLPs, given the dropping SF.

#### Questions to Vishesh

- Can we get the 7day VWAP posted somewhere online?
  - I will look into getting that live.

## General

### LongForWisdom

#### Forum Activity Recap [01:20:35](https://youtu.be/rKq4J4bKndc?t=4835)

- [Governance at a Glance Thread](https://forum.makerdao.com/t/governance-at-a-glance/84)
- Generally, the forums have been relatively quiet. Most of the recent activity was around [Cyrus's status update on Risks](https://forum.makerdao.com/t/status-update-on-risk-and-governance-roadmap-for-pre-and-post-mcd-launch/673).
  - Cyrus: Please come online and give us your feedback on BAT.
  - LFW: The only thing that could be bad is launching BAT with MCD and then deciding later that we don't like it, knocking the debt ceiling back to 0.
  - David and Cyrus: Not truly 'bad' more of an exciting experiment.
  - LFW: Fair. The point was if the risk assessment comes back saying: "This is terribly risky"...
  - Rich: Isn't there no set of parameters that are too conservative? So, ultimately, if an asset makes it in, then the worst characteristic is that it doesn't move the needle.
  - Cyrus: Presumably, someone has to come in and say "this is not a scam" before the launch, so that's a stop-gap solution; a mini analysis, for launch, that puts any concerns to rest. Our strategy was to space things out accordingly while, at the same time, balance the engineering and safety aspects of testing new collateral types. That's the feedback I'm soliciting.

#### Links from the Chat

- [MCD101](https://github.com/makerdao/developerguides/blob/master/mcd/mcd-101/mcd-101.md)
