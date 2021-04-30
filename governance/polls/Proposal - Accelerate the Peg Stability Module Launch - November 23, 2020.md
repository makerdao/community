---
title: Accelerate the Peg Stability Module Launch - November 23, 2020
summary: Signal your support or opposition to accelerating the PSM launch.
discussion_link: https://forum.makerdao.com/t/signal-request-accelerate-the-psm-launch/5094
vote_type: Plurality Voting
options:
  0: Abstain
  1: Yes
  2: No
---
# Poll: Accelerate the Peg Stability Module Launch - November 23, 2020

The MakerDAO Governance Facilitator has placed a governance poll into the [voting system](https://vote.makerdao.com/polling) on behalf of the Maker Governance community which gives Maker Governance the chance to signal their support or opposition to accelerating the PSM launch.

This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for 3 days beginning on Monday, November 23 at 16:00 UTC.

## Review

The Peg Stability Module (PSM) can be used to replace the 101% collateralization ratio stablecoin vaults which will reach 100% collateralization by approximately December 18th. Currently, the plan is to replace these stablecoin vaults with duplicates as per the [Stablecoin Action Plan](https://vote.makerdao.com/polling/QmY1vJPs?network=mainnet#vote-breakdown) vote from 2 weeks ago. Partway through the vote, a new option became available - the PSM, so we are running this vote to determine if MKR holders prefer the PSM instead.

The PSM provides many benefits over the status quo:

 * Restore the peg. We can move the price into a tighter spread because we no longer need to worry about liquidations.
 * Fee collection is upfront and exact instead of having to time rollovers at 100% CR.
 * No longer have to worry about liquidations as the PSM will self-unwind when Dai drops below $0.999.
 * Additional profit on the unwinding stage which would previously have gone to vault holders.
 * We enable very large traders to go between Dai and Stablecoins without slippage.

The proposed initial parameters for the PSM are `tin` of 0.1% and a `tout` of 0.1%. To maximize fee collection the `tin` parameter will be initialized at 1% and lowered continuously to 0.1% over a week. The PSM will be initially rolled out for at least USDC and (time permitting) to the other stablecoins as well. Debt ceilings will be made high enough to allow as much supply as needed to return the peg to 1.001 USDC.

Please review the discussion [thread](https://forum.makerdao.com/t/signal-request-accelerate-the-psm-launch/5094) to further inform your position on this issue before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* The Domain Teams will prioritize the PSM and aim for a tentative launch date of Friday, December 18th, 2020. 
* A forum post will be made to track the status of technical audits and risk assessment of the PSM. 
* The 'Stablecoin Action Plan - Option 3' will no longer be pursued.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then the following actions will be taken:**
* We will proceed with the 'Stablecoin Action Plan - Option 3' as previously voted.
* An additional poll will be run to determine the date on which we switch to new stablecoin vaults as detailed in the 'Stablecoin Action Plan - Option 3'
* The PSM may or may not be added later via the regular monthly MIPs cycle.

---

# Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 16:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).

