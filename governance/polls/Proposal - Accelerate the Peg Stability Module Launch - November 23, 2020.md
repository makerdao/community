---
title: Accelerate the Peg Stability Module Launch - November 23, 2020
summary: Signal your support or opposition accelerating the PSM launch.
discussion_link: https://forum.makerdao.com/t/signal-request-accelerate-the-psm-launch/5094
vote_type: Plurality Voting
options:
  0: Abstain
  1: Yes
  2: No
---
# Poll: Accelerate the Peg Stability Module Launch - November 23, 2020

The MakerDAO Governance Facilitator has placed a governance poll into the [voting system](https://vote.makerdao.com/polling) on behalf of the Maker Governance community which gives Maker Governance the chance to signal their support or opposition accelerating the PSM launch.

This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for 3 days beginning on Monday, November 23 at 16:00 UTC.

## Review

The Peg Stability Module can be used to replace the 101% Collateralization Ratio stablecoin vaults which will reach 100% Collateralization by December 18th. Currently the plan is to replace these stablecoin vaults with duplicates around December 18th as per the [Stablecoin Action Plan](https://vote.makerdao.com/polling/QmY1vJPs?network=mainnet#vote-breakdown) vote from 2 weeks ago. Part way through the vote a new option became available - the PSM, and so I am running this vote to see if MKR holders prefer the PSM instead.

The PSM provides many benefits over the status quo:

 * Restore the peg. Dai will be forced to trade between 0.999-1.001.
 * Fee collection is up front and exact instead of having to time roll overs at 100% CR.
 * No longer have to worry about liquidations as the PSM will self-unwind when Dai drops below $0.999.
 * Additional profit on the unwinding stage which would previously have gone to vault holders.
 * We enable very large holders to go between Dai and Stablecoins without slippage.

The proposed initial parameters for the PSM are `tin` of 0.1% and a `tout` of 0.1%. To maximize fee collection the `tin` parameter will be initialized at 1% and lowered continuously to 0.1% over the course of a week.

Please review the discussion [thread](https://forum.makerdao.com/t/signal-request-accelerate-the-psm-launch/5094) to further inform your position on this issue before voting.

## Next Steps

If the winning result is yes, then the Domain Teams will prioritize the PSM and aim for a tentative launch date of Friday, December 18th, 2020. This launch will be contingent on the Smart Contracts Domain Facilitator signalling that the contract is safe to deploy. This action overrides the current Stablecoin Action Plan - Option 3 plan.

If the winning result is no, then we will proceed with Stablecoin Action Plan - Option 3 and run an additional poll to determine the switch date. The PSM can still be added later through the regular monthly MIPs cycle.

---

# Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 16:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).

