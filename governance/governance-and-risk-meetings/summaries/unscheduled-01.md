# Unscheduled Peg Management Governance Call: July 29, 2020

## Agenda

- [00:00](https://youtu.be/N1XknVAAY4M): Introduction with LongForWisdom
- [00:45](https://youtu.be/N1XknVAAY4M?t=45): Context and Debt Ceiling Parameters with Cyrus Younessi
- [5:08](https://youtu.be/N1XknVAAY4M?t=308): Open Discussion with Cyrus Younessi and LongForWisdom
- [43:33](https://youtu.be/N1XknVAAY4M?t=2613): Proposed Solution with Cyrus Younessi
- [44:14](https://youtu.be/N1XknVAAY4M?t=2654): Closing Remarks with LongForWisdom

## Video

<https://youtu.be/N1XknVAAY4M>

## Introduction

### LongForWisdom

#### Short Intro and Agenda

[00:00](https://youtu.be/N1XknVAAY4M)

- LongForWisdom: Hello and welcome to the MakerDAO unscheduled meeting to discuss recent peg issues.

## Context and Debt Ceiling Parameters

### Cyrus Younessi

#### Overview and Context

[00:45](https://youtu.be/N1XknVAAY4M?t=45)

- I'll do a brief overview of the situation, set some context, maybe throw out some of the options Governance could consider, starting a discussion on the direction the community would like to go forward.

##### The State of the Peg

[1:10](https://youtu.be/N1XknVAAY4M?t=70)

- The Dai peg has been showing additional strength in the last few days. Trading up around 1.03-1.04. Last week we saw significant upward pressure due to the introduction of YFI farming. This pressure has been there all week, and over the weekend, it unwound quite drastically, bringing the peg back down to 1.005. That unwinding was very short-lived, though. The past few days we've seen the introduction of new farming opportunities, Dai deposited in Compound, and thus, their rates hit all-time highs. Then there was a new YFI fork too. That fork has astonishingly sucked in about 35 million Dai. It's starting to become a bit of whack-a-mole with the different farming opportunities.

##### Debt Ceiling Increases

[2:45](https://youtu.be/N1XknVAAY4M?t=165)

- Over the past few weeks, we've seen a series of DC increases, each one slightly more significant in magnitude than the previous one. A few days ago, we had a vote that increased the DC by an additional 80 million, and it got swallowed up in less than 48 hours. In the past month or so, this community has discussed a lot about the commitment to the peg, and defending it through DC increases. We may have reached a point where we may want to consider significantly more aggressive DC increases.
  1. To lower friction on governance with a vote every two-three days.
  2. Also, for creating as much liquidity as quickly as possible, given the general chaos in the crypto-markets these days.

##### Amount of Debt Ceiling

[4:01](https://youtu.be/N1XknVAAY4M?t=241)

- One topic of discussion needs input; Should we consider quite large DC increases for ETH, USDC-A, USDC-B, and WBTC? DC increases north of 50 million? I think that's the context of this call that this requires higher levels of community input.

##### Alternative Solutions

- We could also discuss alternative solutions. For instance, adding tokens like cDAI or Curve tokens. Or considering the range of solutions from Rocket Chat over the last few weeks.

## Discussion

#### Getting on the Same Page

[5:08](https://youtu.be/N1XknVAAY4M?t=308)

- Cyrus Younessi: I would suggest before going into the discussion, we could get some questions on the facts and the context of the situation, so we're all on the same page. It's a very complex and esoteric subject; farming with COMP, YFI, etc.

#### Sizing the Demand

- Lev: I think we're familiar with Compound and how COMP works. Does anyone have information with how much Dai deposited on the other farming schemes? Or what type of yields people are getting there? Is there a good source for this?
  - Cyrus Younessi: The YFI fork has two pools right now. The first one is the yCRV pool, so it's not absorbing significant amounts of Dai. Pool two is a replica of 98%-2% Dai pool, which has sucked in ~35 million Dai as of a moment ago. The yields on that one are quite high: certainly north of 1000% APY. That's dependent on a very illiquid and volatile YFII price. My personal, very hypothetical and speculative, position is that this is a fork not unlike other crypto forks that we've seen—an initial wave of hype that softens as the tension evaporates. But anything can happen. I'm not trying to speculate on whether it's temporary or not.

#### YFII Admin Keys

- Akash: For YFII, to be clear, are the Admin keys in somebody's hands?
  - Cyrus Younessi: No, they were burned.
  - Akash: So it's safe in that sense.
  - Cyrus: One or two solidity developers I spoke to, said the contracts were identical. That's a very unofficial remark, but generally, there's a sense that this fork is not a honey trap.
  - Akash: But to be clear, YFI and YFII are unaudited contracts, and there might be bugs that we don't know about.
  - Cyrus Younessi: Of course.

#### Is Compound the Most Dai-demanding Source?

- Lev: Based on Dai deposited into these contracts, is it reasonable to think Compound is the most important consideration since it has five times as much Dai in it? Or does anyone believe that's not the case?
  - Akash: What you're saying sounds reasonable, it has the most value, but people will venture out with capital onto other projects. So there will always be an additional demand.
  - LongForWisdom: It feels like the genie is out of the bottle with liquidity farming, so people will try to replicate that success.

#### MKR Risk Compensation

[9:45](https://youtu.be/N1XknVAAY4M?t=585)

- Akash: My personal opinion, but are MKR token holders compensated for all this additional risk that's piled on?
  - Sam MacPherson: I made this argument a couple of times. We shouldn't be prioritizing compensation for collateral risk, as the protocol as a whole is a much more significant risk. Ensuring that the peg staying at a dollar is the core product. We should defend that at all costs, and not worrying about recouping some 4% on collateral risk, especially at this stage.
  - Matthew Rabinowitz: I agree. That's a good point.

#### Base Rate Fee Clarifications

[11:10](https://youtu.be/N1XknVAAY4M?t=670)

- Sam MacPherson: I put up a thread up on [lowering the base rate](https://forum.makerdao.com/t/we-should-be-lowering-the-base-rate/3439). Hopefully, that could spur on some Dai supply growth and, additionally, get those SF's down for USDC-A and maybe even the Kyber network one. We need as much supply as possible.
  - Lev: What would the effective ETH-A rate be?
  - Sam MacPherson: I'm proposing a negative base rate, which is not a negative SF. The stability fee has a lower bound of zero for all collateral types. Going to -4% base rate would mean that ETH-A would remain at zero, but USDC-A would go to zero.
  - Lev: it's worth spelling that out every time.
  - LongForWisdom: We've seen evidence of people misunderstanding that and how it works.
  - Lev: With DSR spread, there is equal confusion because it also floors a rate of zero, whereas now we have a positive spread.

#### BAT Debt Ceiling

[12:57](https://youtu.be/N1XknVAAY4M?t=777)

- befitsandpiper: Was there consensus that we're not interested in raising the BAT DC?
  - LongForWisdom: No decisions, one way or another to be honest. It's a good question.
  - Akash: Sorry. The BAT debt ceiling is that a forum poll or a voting poll?
  - Befits: There is a poll right now, but since we're talking about raising the other debt ceilings, that topic is up for discussion. Last I checked the majority of people wanted to raise it on the forum poll.
  - LongForWisdom: I think Cyrus came in at the top of the call, suggesting that the focus of the action is ETH-A, USDC-A, USDC-B, and WBTC. Focusing on that.
  - Akash: Why wouldn't you just include all the other collaterals?
  - Cyrus Younessi: Certainly, we can, but we're focusing on significant numbers for the main collateral types. Adding 2 million for the BAT DC is inconsequential. We're not discussing raising the DC by 50 Million or something for BAT. It's a little bit more reasonable to discuss the increase of ETH and USDC DCs.
  - Akash: The only argument I can come up with right now is that there area lot of token whales out there, and if they want to defend the peg, let them in.

#### USDC Collateralization Ratio

[15:42](https://youtu.be/N1XknVAAY4M?t=942)

- Matthew Rabinowitz: By increasing DC to the numbers we're contemplating, the system is taking on USDC risk. Knowing that there are some players, not a vast number of players, wouldn't it also make sense to contemplate lowering the CR on USDC? Setting those parameters and making room for market makers to move USDC and leverage themselves significantly to move from one position to the other. Based on the numbers we're considering, there won't be 5,000 market makers who would take advantage of it. There will be 10 or 20. But we should give them as much leverage as possible to do that type of trade.
  - Cyrus; You don't think 110% is low enough? Basically, 10x? With five market makers at 1 million each that would generate a significant amount. Do you believe it should be more aggressive?
  - Matthew Rabinowitz: If we pick, hypothetically, a billion dollars for USDC, how do we get to that number. It depends on the severity of this issue. 110% or 105%, the lower that number, the fewer market makers we need to have a more substantial impact.

#### Low Collateralization Ratio Risk

[17:34](https://youtu.be/N1XknVAAY4M?t=1054)

- Nik Kunkel: As you hit lower CRs, liquidations become a considerable risk.
  - Matthew Rabinowitz: The interesting part is that for USDC, the risk is systemic because it's hard pegged to one. I understand your point for every other collateral that has an oracle feed. But if it's all pegged to one, we're talking about the same underlying collateral risk regardless.
  - Nik: That's the issue. You don't' want to have collateral type locked at one forever. You don't want to keep liquidations turned off. To open room to turn on liquidations later, you can't have the liquidation ratio be too low.
  - befitsandpiper: Unless we have a 0% stability fee.
  - Nik Kunkel: Right, but that's even more risk for the system. That's the tradeoff. As you go super low CR, you need to turn stability fees to zero or risk not turning on liquidations again.
  - Mattew Rabinowitz: My comments are just evaluating severity and options. If we find ourselves having to use it as a solution today, in the future, say two or six months when we come up with other collateral and the market comes down, we just simply lower the DC back down where it forces the positions to unwind. Or we just launch another USDC type and lower the DC of the original one and force it to be retired organically.

#### Collateralization Ratio versus Debt Ceiling

[19:29](https://youtu.be/N1XknVAAY4M?t=1169)

- befitsandpiper: Do we have any indication that the current CR is a bottleneck? It seems like the real bottleneck is the DC.
  - Matthew Rabinowitz: We haven't hit the debt ceiling today. Let's just humor the scenario that you made CR 1.0001% or just some crazy number that allows for 1 million leverage. Anyone here could put up \$1 and get 1 million leverage, and it's the new farming; forget all the transaction fees to cause the peg to break down. The issue is that you can't do too much or too little.
  - Cyrus Younessi: The main counterpoint is that we just saw an instant \$40 million USDC DC fill up from two days ago. So, the drop on the CR happened on Monday from 120 to 110. And Dai supply was plateaued for a week or so, and upon moving the CR, it instantly got filled up. For now, that lowered CR is having its intended effect.

#### Limited Options

[21:15](https://youtu.be/N1XknVAAY4M?t=1275)

- Cyrus Younessi: I think the community recognizes that more substantial DCs are necessary in the absence of any alternative solutions. Ideas surrounding the demand side got essentially side barred for now. Things such as [TRFM](https://forum.makerdao.com/t/target-rate-feedback-mechanism-trfm-not-easy-to-understand/1872) and special Protocol vault types also got temporarily side barred. As far as I can tell, the range of available options is quite limited to increases in DCs.

#### Significant Debt Ceiling Raises Risks

[22:03](https://youtu.be/N1XknVAAY4M?t=1323)

- Cyrus Youness: The community is starting to realize that the numbers that we need to consider are significantly higher than we had hoped. Perhaps it's a good thing in a roundabout way. To minimize governance friction and put a more aggressive stance, I think we can discuss significantly larger debt ceilings. I'd like to hear some input on that, on potential numbers, potential tail risks. These raises create an enormous amount of tail risk for MakerDAO with huge ETH and USDC collateral in the system. We're all familiar that ETH creates liquidation issues in a market crash, and USDC has some centralization concern.
- In some regards, in my personal opinion, we've passed a threshold for conservatism. I think we need to revisit the operational side of the circuit breakers should we need it. We need a sober discussion on tail risk, and should we start to drive forward to defend the peg or start aggressively searching for alternative solutions?

#### The Protocol Is Not Directly Exposed to Speculation

[24:07](https://youtu.be/N1XknVAAY4M?t=1447)

- Lev: Typically, I'm a DC hawk, so I'm concerned about increasing it because if we need preparation for the collateral risk, as it can be a catastrophic existential risk for the system. Things like Black Thursday showed how much Dai was needed for liquidations. Now it would be even more of a problem because of outstanding Dai. But to make a point in favor of increasing those debt ceilings right now, that Dai demand doesn't appear to come from speculative bubbles created in the collateral assets were using.
- Lev: If ETH was bullish and people were selling a lot Dai, the risk there would be a speculative bubble, and then when it bursts we would have cascading liquidations, and probably take a loss there. We don't seem to be in that situation right now. The collateral assets don't seem to be in a speculative bubble that's driven by Dai issuance. So Dai issuance is not being used to purchase the collateral assets that we're exposed to. Is doesn't seem like people are selling Dai to buy ETH. They're using it to farm, which means that the vaults aren't exposed to price risk. If their positions were to become risky, it's more likely that they'll be able to withdraw from farms. Those should be liquid, and then they would be able to unwind positions if they're at risk for liquidations, unlike something similar to what happened on Black Thursday where they would have less liquidity. I think the speculative bubble that we see now is in assets like COMP, YFI, and YFII, which we're, thankfully, not exposed to. If they fail, we're not on the hook for it. As long as those yield farms positions are liquid, the chances of people getting liquidated are lower than in a typical bull market, where everyone borrows to buy more. I don't think there isn't a liquidation risk, it's just this situation has a unique flavor, which is a point in favor of increasing the debt ceiling beyond where we'd be usually comfortable.
  - Vishesh: One clarification, it's not a speculative bubble for levering up on those collateral assets. Is facilitating massive amounts of minting to dump into farming opportunities not a different kind of bubble? That depends on whether you can bank on lasting demand for those farming opportunities and have that remain relatively steady. If tomorrow all those farming opportunities went away, you would see a massive flood of the supply back to the market. It's a question to be had, whether you think this is a stable continuing trend.

#### The Crunch Risk

[28:06](https://youtu.be/N1XknVAAY4M?t=1686)

- Lev: I agree. My point is that it's not a speculative bubble in the collateral assets, so increasing debt ceilings is not increasing our risk in those assets as much as possible if we were financing a speculative bubble. These tail risk scenarios that Cyrus was referring to is what happens if all this yield farming stops tomorrow. The good news is that it would be a flood of supply going, so the peg would go in the opposite direction to what we're having now. Hopefully, we would be able to unwind it instead of a speculative bubble on collateral assets, which would create upward pressure, making it worse.
  - Vishesh: It's a different risk. It's exacerbating the liquidity crunch but instead considering what happens in the outcome that you have an overshoot in the other direction.
  - Lev: I think we should think about that scenario. What if it all ends tomorrow.
  - Vishesh: Just to put in context, the YFI pools ending coincided with the 3 cent downswing on Dai's price. If everything else ended tomorrow, who knows how big would that be?

#### Smart Contract Risk

[29:15](https://youtu.be/N1XknVAAY4M?t=1755)

- Lev: Another scary scenario to consider is what if one of these janky yield farming contracts breaks and traps all the Dai? Like the Parity bug. What would happen to Dai then?

#### Oracle Security Module Risk

[30:32](https://youtu.be/N1XknVAAY4M?t=1832)

- befitsandpiper: When we're talking about increasing the debt ceiling by a large amount for, say, Ethereum, do we mean raising it so much that we are subject to price volatility risk, where if Ethereum falls by 30% people can just mint free Dai and abandon their vaults?
  - Cyrus Younessi: This isn't so much the OSM risk as it is just the inability to liquidate hundreds of millions of ETH successfully with the currently available infrastructure.

#### Liquidation Risk

[31:29](https://youtu.be/N1XknVAAY4M?t=1889)

- Lev: I was wondering if anyone has a view on this Dai minting that comes from yield farming, how precarious does it seem to be? Are people being responsible? What CR are they using? What are the risks of liquidations?
  - Vishesh: When we looked at the CR last week, we saw an increased amount of debt at the very lowest possible CR. There's also an increase of debt at higher collateral ratios, but outpaced by the amount of riskier positions being taken. And then the ETH price surged. That's a thing that we always need to keep in mind. We look at CR, which is dependent on the ETH price. If we look at the nominal amount of ETH that was in there, that's comparatively pretty risky. You've got to be worried about if things stay the same or risk profiles get riskier, and ETH price comes back down. There's a potential of vast amounts of Dai being liquidated if that happens. There were two big "walls" I remember tweeting about earlier this week, and those walls added up to 77 million Dai at around \$180 ETH. Obviously, that's a moving target, but in the event of ETH coming back down again, you indeed run the risk of a massive amount of liquidations. That's an important point to consider. The debt minted from ETH in particular, that has exploded in the last couple of weeks. Is that constant demand or a temporary trend that could come back down? I think that's the most critical question.

#### Dai for Yield Farming

[35:35](https://youtu.be/N1XknVAAY4M?t=2135)

- Akash: Have you done any analysis on the type of users? The ETH people minting Dai, are they mostly using it for yield farming compared to a WBTC minter of Dai? Do you have any sense of that?
  - Vishesh: It's a little bit hard to track where that Dai is going with all the new stuff going on lately. Generally, the USDC and ETH Dai is going to yield farming opportunities. By the pigeonhole principle, you can look at the amounts minting, and the amounts sunk into those platforms. It is very likely going from A to B.

#### Magnitude of Debt Ceiling Changes

[36:26](https://youtu.be/N1XknVAAY4M?t=2186)

##### ETH and USDC-A

- LongForWisdom: Nik is asking if we can talk about the magnitude of the debt ceiling changes.
  - Cyrus Younessi: The last round that we did on Monday it was, I believe:
    - 40 million Dai increase for ETH
    - 40 million Dai increase for USDC
  - That lasted less than 40 hours.
  - LongForWisdom: Well, USDC was before that.
  - Cyrus Younessi: Right. But then there was also the change in the collateralization ratio for USDC-A.
  - LongForWisdom: I think that was Friday.
- Cyrus Younessi: It's evident that the 40 million is getting taken quite fast. So every executive vote has been more significant than the last. I believe that the ETH increase should be somewhere in the range of 80-100 million, and USDC could also be another 50 million. That order of magnitude.

##### USDC-B and WBTC

- LongForWisdom: What about WBTC and USDC-B?
  - Cyrus Younessi: USCD-B could also use an increase in case of emergency liquidity for keepers. WBTC got approved on forum to have an increase, so we could pull that forward a little bit, and increase it and round it up to an even 20 million.

#### The Process for Reaching Consensus

[38:26](https://youtu.be/N1XknVAAY4M?t=2306)

- Cyrus Younessi: Planet_X says, "100 million total across the board and we're going to have this meeting again in another two days? We should double that." That's an interesting viewpoint, and I don't necessarily disagree. The tricky part is to know whether the community wants to go that high today without running it through forums and polls and saying, "if MKR holders voted in an executive vote that's sufficient." Or are there some thresholds of debt ceilings where we want to take a step back and say "it will take a few days longer but we can get some formal consensus on the magnitude of the increase."
  - LongForWisdom: I would say it's hard to argue with a successful executive vote it's basically impossible. So I guess that if it does pass, it's okay. We run the risk of raising it too much, and MKR holders don't approve it and leave us in the situation where we are right now, or worse, because we have had no increases. Going forward, I feel like we should try and aim for something where we could do these changes as a part of the regular Governance Cycle, if possible, instead of doing these unscheduled actions.
  - Sam MacPherson: I think that MIP17 is supposed to do that, right?
  - LongForWisdom: Yes. Unless we break the MIP cycle that's not coming for another month or so.

#### Reducing Governance Overhead

[40:23](https://youtu.be/N1XknVAAY4M?t=2423)

- Cyrus Younessi: How do we feel about the overhead on voting for governance? We could do an 80-100 million increase and then put up another executive vote immediately, without having to result to another expedited governance call and polls. Break it up into chunks with an additional executive vote. That's kind of in line with previous cycles that we've had in the past year, where we allowed governance to keep putting up expedited executives. We wouldn't have to do an extraordinary increase all in one go.
  - LongForWisdom: We've done that previously. I think that's probably fine. If the first substantial increase passes, then it's a tacit approval that the approach is valid.

#### Policy Going Forward and Potential Solutions

[41:47](https://youtu.be/N1XknVAAY4M?t=2507)

- Cyrus: We could do increasingly larger ones too. Put up the one I suggested, and if it gets swallowed immediately, we can do progressively larger chunks.
  - LongForWisdom: We need to figure out a policy going forward. Ideally going through the regular weekly governance cycle.
    - Do we want to try to vote on something that's one step removed from direct changes?
    - Do we want to vote on changes that double each time if a precise threshold passes?
    - Or do we want to say that we want to do more extensive changes? Like 50-100 million.
    - Or do what we've been doing so far.
- Cyrus: It would be more comfortable if we had some guidance on which approach MKR holders would like to take in general. And we can use that to justify executives that follow that general plan.
  - Cyrus: That makes sense to me, but it's too early to come up with various strategies that could change in the next few days. So a strategy that might be valid today is no longer applicable next week, by the time we get governance polls going. I would prefer it if we could maintain a little bit more agile approach.

## Proposed Solution

### Cyrus Younessi

[43:33](https://youtu.be/N1XknVAAY4M?t=2613)

- Cyrus Younessi: How about we propose a good chunk in an executive today and we'll re-evaluate based on how quickly it gets taken up. We're monitoring this very carefully, so it shouldn't be too difficult. In a lot of ways, the purpose of this call was to sync up and get the community on the same page. I don't think there's much divergence of opinion on the proposed methodology, and the level of debt ceiling increases and the paces at which they need to happen.

## Outro

### LongForWisdom

#### Closing Remarks

[44:14](https://youtu.be/N1XknVAAY4M?t=2654)

- LongForWisdom: It's always important to remember that this group does not necessarily represent the wider community. I think meetings like this are necessary when there's a change in strategy, like proposing we're changing the strategy of consistent \$20 million increases to something more significant. If the situation changes to a point where the strategy is no longer valid, then maybe we could do one of these calls, or as part as the regular calls, and discuss how the changing conditions should change the strategy.
  - Tbone (`chat`): If percentage changes are used instead of specific amounts, that will scale appropriately as the DCs grow?
  - Cyrus Younessi: Certainly possible. I tend to think that we don't need to overcomplicate that type of thing right now, but conceptually it's the same as what I suggested. Let's continue discussing this in the Governance and Risk Meeting tomorrow.

## Common Abbreviated Terms

`MCD`: The Multi-Collateral Dai system

`CR`: Collateralization Ratio

`LR`: Liquidation Ratio

`DC`: Debt Ceiling

`ES`: Emergency Shutdown

`EV`: Executive Vote

`GF`: Governance Facilitator

`GP`: Governance Poll

`SF`: Stability Fee

`DSR`: Dai Savings Rate

`MIP`: Maker Improvement Proposal

`OSM`: Oracle Security Module

## Credits

- Juan Guillen produced this summary.
- Tim Black produced this summary.
- David Utrobin produced this summary.
- Everyone who spoke and presented on the call, listed in the headers.
