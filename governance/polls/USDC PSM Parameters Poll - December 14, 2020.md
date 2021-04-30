---
title: USDC Peg Stability Module Parameters - December 14, 2020
summary: Signal your support or opposition to USDC PSM Parameters
discussion_link: https://forum.makerdao.com/t/signal-request-psm-parameters/5532
vote_type: Plurality Voting
options:
   0: Abstain
   1: Yes
   2: No
---
# Poll: USDC Peg Stability Module Parameters - December 14, 2020

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the MakerDAO Risk Domain Team. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, December 14 at 16:00 UTC.

**This is a binary vote. In a binary vote, you may vote for a single option. You should vote for the option which you prefer. Alternatively, if you would accept either of the two options and have no preference between them, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the following:
* Initially, the only peg stability module to be deployed will be for USDC.
* The debt ceilings for USDC-A, TUSD-A, PAX-A, and GUSD-A will drop to zero DAI.
* The USDC PSM will be implemented with the parameters given below.

**Proposed USDC PSM Parameters**
* The `tin` parameter will be set to 1% initially and will decrease to 0.1% over 7 days. `tin` refers to the fee when trading USDC in exchange for DAI.
* The `tout` parameter will be set to 0.1%. `tout` refers to the fee when trading DAI in exchange for USDC.
* The initial debt ceiling of the USDC PSM will equal 500 million DAI.

Please review the following threads to help inform your position before voting.
* [Signal Thread](https://forum.makerdao.com/t/signal-request-psm-parameters/5532)
* [Risk Assessment](https://forum.makerdao.com/t/mip29-peg-stability-module-psm-risk-assessment/5504)
* [Road to the PSM](https://forum.makerdao.com/t/road-to-the-psm/5353)
* [Maker Foundation Statement on the PSM](https://forum.makerdao.com/t/foundation-statement-on-the-psm/5521)

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* The changes listed above will be included in the weekly Executive Vote on the Friday following the conclusion of this poll.
* If for whatever reason, some or all of these changes cannot be included in this week's executive vote, they will be instead be included in the next available executive vote.
* If the executive vote passes, then this change will become active in the Maker Protocol after the [Governance Security Module](https://forum.makerdao.com/tag/govsec-module) delay has expired.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 16:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
