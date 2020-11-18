---
title: Change the Stability Fee Structure - May 18 2020
summary: Signal your support to change the structure of the weekly Stability Fee votes.
discussion_link: https://forum.makerdao.com/t/2380
vote_type: Ranked Choice IRV
options:
   0: Abstain
   1: Yes (allow negative Base Rate)
   2: Yes (disallow negative Base Rate)
   3: No
---
# Change the Stability Fee Structure - May 18 2020

The Maker Foundation Interim Governance Facilitator has placed a Governance Poll into the [voting system](https://vote.makerdao.com/polling) which the community can use to signal their support for changing the structure of the weekly Stability Fee votes.

This Governance Poll ([FAQ](https://community-development.makerdao.com/makerdao-scd-faqs/scd-faqs/governance)) will be active for three days beginning on Monday, May 18 at 16:00 UTC.

## Review

This proposal was discussed in the [forums](https://forum.makerdao.com/t/2380). Please review to inform your position before voting.

A summary of the proposed changes:

1. Replace all weekly Stability Fee votes with a single, global `Base Rate` vote.
2. The individual `Stability Fee` parameters will be calculated by the formula `Stability Fee = max(Base Rate + Risk Premium, 0%)`.
3. The `Base Rate` will be initialized to 0%. The `Risk Premium` of each collateral will be initialized to its `Stability Fee`.
4. The `Risk Premium` of any collateral type can be adjusted by initiating a governance poll.
5. The lowest value of `Base Rate` will either be 0% or no lower bound depending on the result of this poll. The implications of this are discussed in the thread.
6. The `Dai Savings Rate Spread` calculation will use the `Base Rate` to determine the Dai Savings Rate value in the same way it is currently offset from the `Dai Stability Fee`.

## Next Steps

* If this proposal passes, the changes listed in Review will be made starting the week of May 25th, 2020.

---

## Resources

Additional information about the Governance process can be found in the [Governance Risk Framework: Governing MakerDAO](https://community-development.makerdao.com/governance/governance-risk-framework)

Demos, help and instructional material for the Governance Dashboard can be found at [Awesome MakerDAO](https://awesome.makerdao.com/#voting).

To participate in future Governance calls, please [join us](https://community-development.makerdao.com/governance/governance-and-risk-meetings) every Thursday at 16:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=America%2FLos_Angeles).
