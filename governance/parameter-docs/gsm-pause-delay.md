# GSM Pause Delay

```
Alias: GSM, Pause
Parameter Name: Pause_delay
Containing Contract: Pause
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/governance-module/pause-detailed-documentation
```

## Description

The GSM (Governance Security Module) Pause Delay parameter sets the minimum amount of time after an executive vote has passed that changes will come into effect in the Maker Protocol. Once an executive spell passes, the GSM Pause Delay must pass before the changes within that executive spell can affect the Maker Protocol. The Maker Protocol only has one GSM Pause Delay, and all parameter changes are subject to it.

It is possible to move functionality outside of the GSM Pause Delay, however, this requires additional engineering work. In the past, this has been used for functionality that allowed Maker Governance to freeze or unfreeze the oracle prices, and freeze or unfreeze liquidations without waiting for the delay to elapse. However, those modules were deauthorized, and at the current time, no functionality exists outside the GSM Pause Delay.

The GSM Pause Delay is usually expressed in terms of hours.

## Purpose

This parameter primarily exists to protect users of the Maker Protocol from a governance attack by malicious MKR Holders. In the event of a malicious proposal passing through governance, DAI Holders and Vault users would have a chance to sell their DAI or close their Vaults before the changes become active in the Maker Protocol. Additionally, this gives a minority of MKR a chance to cancel the malicious change or gracefully shutdown the Maker Protocol using the Emergency Shutdown Module.

It also gives users a chance to opt-out of the protocol in the event of non-malicious but disagreeable changes.

## Trade-offs

A longer GSM Pause Delay gives non-malicious MKR Holders and users of the protocol more time to become aware of and react to a governance attack on the Maker Protocol. It also gives users additional time to opt-out in the event of non-malicious but disagreeable changes to the protocol, such as an increase in Liquidation Ratios that might cause the liquidation of a user's Vault.

However, having a longer GSM also enforces a slower reaction time on Maker Governance as a whole, which creates risk in the event of time-critical issues:
* Extreme market volatility.
* Technical issues in the Maker Protocol.
* Attack on the Oracles.
* Extreme network congestion.

Any of the above situations may require swift action from governance, however, the swiftest response still requires the GSM Pause Delay to pass before the changes go live in the Maker Protocol.

## Changes
Adjusting the GSM Pause Delay parameter is a manual process that requires an executive vote. Changes to the GSM Pause Delay are subject to the pre-change GSM Pause Delay.

**Why increase this parameter?**
An increase to the GSM Pause Delay parameter should be considered if the risk of governance attack is considered especially high for whatever reason. In the past, the GSM Pause Delay has been increased due to the risk from flash loans combined with increasing liquidity of the MKR token on the open market.

**Why decrease this parameter?**
A decrease should be considered if time-critical governance actions are projected to be needed in the near future. For example, if extreme market volatility is expected, it may be beneficial to reduce the GSM Pause Delay temporarily to allow Governance to better react to the changing conditions.

A decrease could also be considered if the risk of governance attack has been shown to be minimal. 

It is probably not advisable to reduce the GSM Pause Delay to zero permanently because it leaves the Maker Protocol vulnerable to Governance attacks.

## Considerations

The main consideration when setting this parameter is how much time is required to rally a sufficient amount of MKR to cancel a malicious governance proposal in the event of a governance attack.

In the event of a critical technical vulnerability being discovered and responsibly disclosed to the MakerDAO Smart Contracts Domain Team, the dark-spell mechanism may be employed to fix the exploit. The dark spell mechanism was introduced to help mitigate the risk of technical fixes being made to the protocol while subject to the GSM Pause Delay. If a technical fix to a critical vulnerability does not become active immediately, the vulnerability can be exploited before the fix goes live. 

The GSM Pause Delay does not apply to the Emergency Shutdown Module, which can be triggered at any time by a minority of MKR currently set to 50,000.

The GSM Pause Delay does not apply to 'cancel' spells (executive spells that cancel an existing executive vote that has passed but is awaiting the expiry of the GSM Pause Delay before it becomes active.)



