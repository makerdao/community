# Stability Fee

```
Alias: N/A
Parameter Name: duty
Containing Contract: Jug
Scope: Ilk
Technical Docs: https://docs.makerdao.com/smart-contract-modules/rates-module/jug-detailed-documentation
```

## Description

The Stability Fee parameter is an annual percentage fee charged on the DAI generated on vaults. It is expressed as an annual percentage yield but it is charged on a per-block basis in DAI. The DAI from this fee is minted, added to the DAI debt for the vault, and then transferred into the Surplus Buffer which is under the control of Maker Governance.

Each vault type has its own Stability Fee that can be adjusted by Maker Governance. Note that the Stability Fee applies collectively to all vaults created using a specific vault type.

As an example, a vault with 100 DAI of debt using a vault-type with a Stability Fee of 4% would be expected to owe 104 DAI after one year has passed (assuming the Stability Fee remains at 4% for the year).

## Purpose
The primary purpose of the Stability Fee parameter is to compensate the Maker Protocol for the risk it takes being exposed to changes in the price of the collateral used to back the generated DAI. 

The Stability Fee is also the largest source of revenue for the Maker Protocol and should be expected to be used to:
* Pay for the operational expenses of running and growing the Maker Protocol.
* Pay for the operation of the Oracle feeds.
* Buy and burn MKR to remove it from the total supply, indirectly compensating Maker Governance for operating the Maker Protocol and acting as the lender of last resort.

## Trade-offs

In theory modifying the Stability Fee for a vault type will impact the number of vault users that are willing to use that vault type, with increases reducing the amount of DAI generated, and decreases increasing the amount of DAI generated. 

However, it is open to debate just how much of an effect Stability Fee modifications have on user behavior. Other, more significant factors play into a user's decision to maintain a vault, including market conditions and the competitive landscape.

In practice, large modifications to Stability Fees have had measurable effects on user behavior, while the impact of smaller changes is less clear.

Higher Stability Fees may temporarily or permanently increase the revenue from a particular vault type, depending on the level of user response to the Stability Fee change.

Likewise, lower Stability Fees may temporarily or permanently decrease the revenue from a particular vault type, depending on the level of user response to the Stability Fee change.

## Changes

Adjusting a Stability Fee parameter is a manual process that requires an executive vote. Changes to Stability Fee parameters are subject to the GSM Pause Delay.

The Rates Working Group has been empowered by Maker Governance to propose rate changes based on monetary policy, risk, and competitive landscape. The operations, membership, and historic proposals of this working group can be found on the Maker Governance Forum.

**Why increase a Stability Fee parameter?**

The primary reason to increase a Stability Fee parameter is one of monetary policy. If the price of DAI is less than $1, this indicates that the DAI supply should be reduced. The Stability Fee is usually the first parameter that Governance contemplates changing if DAI supply needs to be reduced.

Alternatively, a Stability Fee for a vault type might be increased if Maker Governance does not feel that the protocol is being adequately compensated for the risk from that particular vault type.

A Stability Fee might also be increased if Maker Governance determines that it needs additional capital to operate or grow effectively and does not expect an increased Stability Fee to negatively affect the DAI peg.

Finally, a Stability Fee might be increased if no viable competitors are offering lower rates than the Maker Protocol and Maker Governance feels that higher fees can be charged without negatively impacting the DAI peg.

**Why decrease a Stability Fee parameter?**

The primary reason to decrease a Stability Fee parameter is also one of monetary policy. If the price of DAI is greater than $1, this indicates that the DAI supply should be increased. The Stability Fee is usually the first parameter that Governance contemplates changing if DAI supply needs to be increased.

Alternatively, a Stability Fee for a vault type might be decreased if Maker Governance feels that the level of risk from that vault type has decreased.

Finally, a Stability Fee might be decreased if competitors are offering lower rates than the Maker Protocol and Maker Governance wishes to retain or increase market share.

## Considerations

The Stability Fee parameter has a lower bound of 0%, it cannot be negative.

Absent active management by a vault user, the accrual of Stability Fees can push a vault's Collateralization Ration below the Liquidation Ratio, which will allow it to be liquidated.

A Global Stability Fee parameter also exists within the Maker Protocol. In practice, this has not been used because it adds unnecessary complexity to the governance process and Stability Fee calculation.

Before the introduction of the Rates Working Group Stability Fee parameters were composited from Risk Premiums and a Base Rate voted by governance.

