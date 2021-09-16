# Global Debt Ceiling

```
Alias: Global Debt Ceiling
Parameter Name: line
Containing contract: Vat
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/core-module/vat-detailed-documentation
```

## Description

The `Global Debt Ceiling`, or `line`, parameter allows Maker Governance to set a maximum amount of DAI that can be minted by users of the Maker Protocol, regardless of individual collateral debt ceilings. If the total DAI outstanding exceeds the `Global Debt Ceiling`, users will be unable to mint DAI.

Currently, the `Global Debt Ceiling` updates automatically when changes are made to the debt ceilings of individual collateral types. However, it is possible for Maker Governance to alter the `Global Debt Ceiling` independently.

## Purpose

The main purpose of the `Global Debt Ceiling` is to act as an upper bound on the amount of DAI in circulation. By doing this, the risk level of the system can be controlled by Maker Governance.

## Trade-offs

If the `Global Debt Ceiling` is set too low, it will prevent DAI from being minted to meet market demand and may cause upwards pressure on the Peg.

If the `Global Debt Ceiling` is set too high and the amount of DAI in circulation is allowed to grow unchecked, then the ability of keepers to safeguard the system may be impaired, placing the system at risk.

Other documents cover the rationale for individual collateral types having individual debt ceilings.

## Changes

Adjusting the `Global Debt Ceiling` parameter can be done through a manual process that requires an executive vote. Changes to the `Global Debt Ceiling` are subject to the GSM Pause Delay.

The Debt Ceiling Instant Access Module allows the Debt Ceiling of a given Vault type to be adjusted instantly according to certain hard-coded rules and parameters. When this occurs, the `Global Debt Ceiling` will change by the same amount. For details, see the appropriate documentation.

**Why increase the Global Debt Ceiling?**

The primary reason for increasing the `Global Debt Ceiling` is to allow Vault owners or PSM users to mint more DAI.

Maker Governance should consider increasing the `Global Debt Ceiling` whenever Governance increases the debt ceiling of a collateral type. If the `Global Debt Ceiling` is not raised, Vault owners will not utilise the newly increased debt ceilings. This process should occur automatically.

**Why decrease the Global Debt Ceiling?**

If the amount of overall DAI supply increases to a point where keepers cannot safeguard the Maker Protocol, then it may be necessary to decrease the `Global Debt Ceiling` to reduce the system's risk profile.

## Considerations

In an Emergency Shutdown, DAI cannot be minted regardless of the `Global Debt Ceiling`.

The `Global Debt Ceiling` will not prevent DAI accruing in the system surplus buffer from stability fees. Therefore, the overall DAI supply can still increase despite the `Global Debt Ceiling` being reached.

Maker Governance should exercise caution when reducing the debt ceiling of collateral types; this may lead to an unintended situation where the `Global Debt Ceiling` is below the overall DAI supply, thus preventing further DAI from being minted.
