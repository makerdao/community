# GSM Pause Delay

```
Alias: GSM, Pause
Parameter Name: Pause_delay
Containing Contract: Pause
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/governance-module/pause-detailed-documentation
```

## Description
* What is this parameter?
* How does it fit in with the protocol and surrounding contracts?

The GSM Pause Delay parameter sets the minimum amount of time after a executive vote has passed that changes will come into affect in the Maker Protocol.

The Maker Protocol only has one GSM Pause Delay, and all parameter changes are subject to it. However, it is possible to move functionality outside the of the GSM Pause Delay, however this requires additional engineering work to make possible. In the past this has been used for functionality that allowed Maker Governance to freeze or unfreeze the oracle prices, and freeze or unfreeze liquidations without waiting for the delay to elapse. However, those modules were deauthorized, and at the current time, no functionality exists outside the GSM Pause Delay.

## Purpose
* Why does this parameter exist?

## Trade-offs
* What dangers does this parameter represent?
* What advantages does this parameter represent?

## Changes
* How are changes to this parameter made?

**Why increase this parameter?**

**Why decrease this parameter?**

## Considerations
* Is there anything little known about this parameter?
* How does this interact with other parts of the protocol?
* Are there any Emergency Shutdown considerations to take into account?
