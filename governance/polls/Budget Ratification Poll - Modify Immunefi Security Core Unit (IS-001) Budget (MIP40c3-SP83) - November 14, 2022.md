---
title: Budget Ratification Poll for Modify Immunefi Security (IS-001) Budget (MIP40c3-SP83) - November 14, 2022
summary: Renew the DAI budget for Core Unit Immunefi Security (IS-001).
discussion_link: https://forum.makerdao.com/t/mip40c3-sp83-modify-immunefi-security-core-unit-budget-is-001/18209
parameters:
  input_format:
    type: rank-free
    abstain: [0]
  victory_conditions:
    - {
        type: 'and',
        conditions: [
          { type : instant-runoff },
          { type : comparison, comparator : '>=', value: 10000 }
        ]
      }
    - { type : default, value : 3 }
  result_display: instant-runoff-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Approve existing budget only - Business as usual
   2: Approve reduced budget - BearMarket 
   3: Reject budget

start_date: 2022-11-14T16:00:00
end_date: 2022-11-28T16:00:00
---
# Budget Ratification Poll for Modify Immunefi Security (IS-001) Budget (MIP40c3-SP83) - November 14, 2022

The Governance Facilitators have placed a budget ratification poll into the [voting system](https://vote.makerdao.com/polling) as part of the responsibilities defined in [MIP51](https://mips.makerdao.com/mips/details/MIP51). This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for fourteen days beginning on Monday, November 14 at 16:00 UTC.

**This is an instant-runoff vote.**
- **You may rank any number of options that you would support in an executive vote.**
- **Unranked options signal that you would not support the option(s) in an executive vote.**
- **If you have no preference to any of the listed options, you should vote 'Abstain' as your first and only choice.**

## Review

The community may vote in this poll to express support or opposition to MIP40c3-SP83 being accepted and implemented in the Maker Protocol by ranking their support of the following options:
* **Option 0:** Abstain.
* **Option 1:** Approve existing budget (Business as usual): 786,830 DAI.
* **Option 2:** Approve reduced budget (BearMarket): 427,790 DAI.
* **Option 3:** Reject budget.

A brief summary of this proposal has been provided by the MIP Author and is shown below:

*"The Immunefi Security Core Unit (ISCU) requests a 786,830 DAI budget to sustain minimal operations for another year starting 01 Dec 2022 (option Status Quo). Due to market conditions, we propose an alternative (option Bear Market) with a reduction of 0.2 FTEs, which will slow response time and increase the likelihood of using the [MIP64c5](https://mips.makerdao.com/mips/details/MIP64#mip64c5-payment-process-and-budget-request) process. Option Bear Market requests a 12-month budget of 427,790 DAI (approx 359k DAI less)."*

Please review the links below to inform your position on this proposal before voting.
* [Canonical Proposal Version](https://github.com/makerdao/mips/blob/247f11f556ad5b2be78525c7fa6c9966da76ecec/MIP40/MIP40c3-Subproposals/MIP40c3-SP83.md)
* [Latest Proposal Version](https://mips.makerdao.com/mips/details/MIP40c3SP83)
* [Proposal Discussion Thread](https://forum.makerdao.com/t/mip40c3-sp83-modify-immunefi-security-core-unit-budget-is-001/18209)

## Outcomes

This poll implements a **Minimum Positive Participation** value. The Minimum Positive Participation is currently set to **10,000 MKR**.

**If the votes for Option 1 or Option 2 achieve a plurality AND the votes for the winning option exceed 10,000 MKR, then the following actions will be taken:**
* The MIP Editors will mark the proposal **Accepted** and the Governance Facilitators will confirm its passage on the Governance and Risk call on Thursday, December 1.
* The resulting budget stream will be implemented via an executive vote, as the [Protocol Engineering Core Unit](https://mips.makerdao.com/mips/details/MIP39c2SP7)'s schedule allows.

**Otherwise, this proposal will be marked as rejected per [MIP51](https://mips.makerdao.com/mips/details/MIP51#mip51c2-ratification-poll).**

---

## Resources

[MIP51: Monthly Governance Cycle](https://mips.makerdao.com/mips/details/MIP51) describes this type of poll and its position and significance within the rest of the governance cycle.

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
