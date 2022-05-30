---
title: Offboarding Parameters for UNIV2WBTCDAI-A - May 30, 2022
summary: Signal your support or opposition to the following liquidation parameters, designed to offboard UNIV2WBTCDAI-A.
discussion_link: https://forum.makerdao.com/t/signal-request-offboard-uni-univ2daieth-univ2wbtceth-univ2unieth-and-univ2wbtcdai/15160
vote_type: Plurality Voting
categories:
   - Risk Variable
   - High Impact
options:
   0: Abstain
   1: Yes
   2: No
start_date: 2022-05-30T16:00:00
end_date: 2022-06-02T16:00:00
---
# Poll: Offboarding Parameters for UNIV2WBTCDAI-A - May 30, 2022

The Governance Facilitators have placed a Governance Poll into the voting system on behalf of the MakerDAO Community. This Governance [Poll](https://community-development.makerdao.com/en/learn/governance/on-chain-gov) will be active for three days beginning on Monday, May 30 at 16:00 UTC.

**This is a binary vote.** 
- **You may vote for a single option.** 
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## Review

The community can vote in this poll to express support or opposition to the implementation of the following risk parameters for offboarding UNIV2WBTCDAI-A.

**Proposed Offboarding Parameters**

* Set [Liquidation Penalty](https://manual.makerdao.com/parameter-index/vault-risk/param-liquidation-penalty) to 0%.
* Set [Debt Ceiling](https://manual.makerdao.com/module-index/module-dciam) to 0.
* Set [Flat Kick Incentive (tip)](https://manual.makerdao.com/parameter-index/collateral-auction/param-flat-kick-incentive) to 0.
* Set duration of [Linear Interpolation Module (dss-lerp)](https://manual.makerdao.com/module-index/module-lerp) for liquidation ratio to 30 days.
* Set [end](https://manual.makerdao.com/module-index/module-lerp#end) parameter of dss-lerp for liquidation ratio for each vault type as the following; highest collateral ratio vault within each vault type multiplied with 3, rounded on hundred.

Please review the discussion [thread](https://forum.makerdao.com/t/signal-request-offboard-uni-univ2daieth-univ2wbtceth-univ2unieth-and-univ2wbtcdai/15160) to help inform your position before voting.

## Outcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* The offboarding process for this vault will begin, as defined by [MIP62 - Collateral Offboarding Process](https://mips.makerdao.com/mips/details/MIP62).
* Offboarding items will be included in the soonest eligible executive vote, as the Protocol Engineering Core Unit's schedule allows.

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

---

## Resources

If you are new to voting in the Maker Protocol, please see the [voting guide](https://community-development.makerdao.com/en/learn/governance/how-voting-works/) to learn how voting works, and this [wallet setup guide](https://community-development.makerdao.com/en/learn/governance/voting-setup/) to set up your wallet to vote.

Additional information about the Governance process can be found in the [Governance](https://community-development.makerdao.com/en/learn/governance) section of the MakerDAO community portal.

To participate in future Governance calls, please [join us](https://github.com/makerdao/community/tree/master/governance/governance-and-risk-meetings) every Thursday at 17:00 UTC.

To add current and upcoming votes to your calendar, please see the [MakerDAO Public Events Calendar](https://calendar.google.com/calendar/embed?src=makerdao.com_3efhm2ghipksegl009ktniomdk%40group.calendar.google.com&ctz=UTC&mode=week&showCalendars=0&showPrint=0).
