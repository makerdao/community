---
title: Atlas Rate System Implementation Adjustments - February 19, 2024
summary: Signal your support or opposition to adjusting the Atlas Rate System implementation.
discussion_link: https://forum.makerdao.com/t/atlas-rate-system-implementation-adjustments/23686
parameters:
    input_format: single-choice
    victory_conditions:
        - { type : plurality }
    result_display: single-vote-breakdown
version: v2.0.0
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2024-02-19T16:00:00
end_date: 2024-02-22T16:00:00
---
# Poll: Atlas Rate System Implementation Adjustments - February 19, 2024

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the Stability Scope Advisory Council Member, BA Labs. This Governance [Poll](https://manual.makerdao.com/governance/governance-cycle/weekly-governance-cycle#weekly-governance-cycle-definitions-mip16c1) will be active for three days beginning on Monday, February 19 at 16:00 UTC.

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

To move forward toward automation in the [new exposure model](https://forum.makerdao.com/t/atlas-rate-system-for-stability-fee-research-introduction-to-exposure-based-model/23239), BA Labs has decided to transition from spreadsheet-based modeling to Python-based modeling. To do so, some minor adjustments have to be implemented to make the model more precise.

The adjustments include:

- Making the exposure series continuous.
- Modifying the KFb meta-parameter to be the sum of the previously calculated KFa and KFb.
- Increasing the model's sensitivity to 0.01% exposures.

To implement the aforementioned adjustments, the community is invited to vote in this poll to express support or opposition to the following changes:

- [MIP104: Stability Scope Bounded Mutable Alignment Artifact](https://mips.makerdao.com/mips/details/MIP104#0-the-stability-scope) will be edited to incorporate the following parameter changes:
  - Increase the ETH KFa factor by 5.48625% from 0.01375% to **5.5%**.
  - Increase the ETH KFb factor by 40.49125% from 0.0875% to **40.5%**.
  - Increase the WSTETH KFa factor by 3.49125% from 0.00875% to **3.5%**.
  - Increase the WSTETH KFb factor by 13.475% from 0.0250% to **13.5%**.
  - Increase the WBTC KFa factor by 3.49125% from 0.00875% to **3.5%**.
  - Increase the WBTC KFb factor by 35.42% from 0.08% to **35.5%**.
  - Increase the Spark KFa factor by 5.985% from 0.015% to **6%**.
  - Increase the Spark KFb factor by 33.93% from 0.07% to **34%**.

Please review the discussion [thread](https://forum.makerdao.com/t/atlas-rate-system-implementation-adjustments/23686) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
- [MIP104: Stability Scope Bounded Mutable Alignment Artifact](https://mips.makerdao.com/mips/details/MIP104#0-the-stability-scope) [3.2.2A](https://mips.makerdao.com/mips/details/MIP104#3-2-2a) and [14.3.1.3.1A](https://mips.makerdao.com/mips/details/MIP104#14-3-1-3-1a) will be edited to include the aforementioned parameter changes.
- The WSTETH KFb factor is also addressed in Poll ID 1078. Should both polls pass, the parameter's final value will align with the outcome of Poll ID 1078.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://manual.makerdao.com/governance/voting-in-makerdao/on-chain-governance) to learn how voting works.

Additional information about the Governance process can be found in the [Maker Operational Manual](https://manual.makerdao.com).

To add current and upcoming votes to your calendar, please see the [MakerDAO Governance Calendar](https://manual.makerdao.com/makerdao/calendars/governance-calendar).
