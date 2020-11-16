---
title: Emergency Shutdown
order: 7
hideLanguageSelector: true
keywords: "shutdown, emergency, ESM"
description: "A description of the Maker Protocol's Emergency Shutdown Module."
---

# Emergency Shutdown

Emergency Shutdown is intended to be triggered in the case of a system upgrade or serious emergencies, such as long-term market irrationality, a hack, or a security breach.

## Purpose

When triggered, Emergency Shutdown stops and shuts down the Maker Protocol while ensuring that all users, both Dai holders, and Vault users, receive the net value of assets they are entitled to under the Protocol’s smart contract logic.

However, the value of Collateral that Dai holders can redeem may vary, depending on the system surplus or deficit at the time of Emergency Shutdown. It is, therefore, possible that Dai holders will receive less or more than 1 USD worth of Collateral for 1 Dai.

### Prioritizing Vault Owners

The Maker Protocol currently prioritizes Vault Owners over Dai Holders because:

- Overcollateralized Vaults do not subsidize the Maker Protocol for undercollateralized Vaults during the current operation of the system, so it's consistent for Emergency Shutdown to have the same behavior. The main difference is that a potential haircut is transferred from MKR holders to DAI holders, as no assumptions can be made about the value of MKR after a shutdown.

- Giving priority to Vault owners to recover their excess Collateral (if their Vault is not undercollateralized) incentivizes them to maintain overcollateralization. This is important because the incentive remains even if an Emergency Shutdown seems likely, which ultimately makes the Protocol more resilient.

- Stability fees accrued pre-Emergency Shutdown are not waived by Emergency Shutdown. Vault owners may accept higher fees if they know they are protected from the collateralization levels of others, potentially resulting in a higher surplus during Emergency Shutdown scenarios as well as allowing for a higher Dai Savings Rate during normal operation.

## Initiating Shutdown

The process of initiating Emergency Shutdown is decentralized and controlled by MKR voters, who can trigger it by depositing MKR into the Emergency Shutdown Module.

50,000 MKR must be deposited into the Emergency Shutdown Module to trigger an Emergency Shutdown. Once users deposit MKR into the Emergency Shutdown Module, it is immediately burned.

Emergency Shutdown may or may not be initiated with a Redeployment Scenario to allow users to open new Vaults and have a new Dai token while claiming Collateral from the old system.

## Emergency Shutdown Module

The Emergency Shutdown Module (ESM) is a contract with the ability to call `End.cage()` to trigger the Shutdown of the Maker Protocol.

Emergency Shutdown stops and settles the Maker Protocol while ensuring that Dai holders and Vault users receive the net value of assets they are entitled to.

![](https://lh6.googleusercontent.com/tHGq8IsHybndRILRSF_pkAObTOPrcylSnBdN4DC7LDudq2EeH0K8Q9qEZgrQG-ozBtjwCWZtWPBbp-_tSnlP75nXRWcSMb4FzZsjCZvZBAPavGkJcsaoYDwIehDqE_6tlqp8KH3Y)

## Shutdown Conditions

- Dai no-race condition: Every Dai holder will be able to redeem the same relative quantity of collateral proportional to their Dai holdings, regardless of when they interact with the contract.

- Vault Parity: Vault Owners are prioritized, allowing them to withdraw their excess Collateral before Dai holders are able to access Collateral.

  - At the time of Emergency Shutdown, individual Vaults, entire collateral types, or the Maker Protocol can be undercollateralized, which is when the value of debt exceeds the value of the Collateral ("negative equity"). Thus, the value of Collateral that Dai holders can redeem may vary, depending on the system surplus or deficit at the time of Emergency Shutdown. It is, therefore, possible that Dai holders will receive less or more than 1 USD worth of Collateral for 1 Dai.

- Immediate Vault redemption: After Emergency Shutdown is initiated, Vault owners are allowed to free their Collateral immediately, provided that they execute all contract calls atomically.

- No off-chain calculations: The system does not require the cage authority to supply any off-chain calculated values (i.e., it can rely entirely on the last OSM feed prices).

- Vow Buffer Assistance: After Emergency Shutdown is initiated, any surplus or bad debt in the buffer acts as a reward or penalty distributed pro-rata to all Dai holders. For example, if 10% of total system debt is in the form of net surplus in the Vow, then Dai holders receive 10% more Collateral.

## Collateral Distribution

### Auction Settlement

The Emergency Shutdown Module includes a time delay to be determined by governance. The delay must expire before any exchange of Dai for Collateral can take place.

The general guidance is that the delay should be long enough to ensure all auctions either finish or get skipped but there is no guarantee of this in the code.

### For Vault Owners

Vault owners can retrieve excess collateral from their Vaults immediately after the initialization of Emergency Shutdown.

This can be achieved using Vault front ends like [Oasis Borrow](https://oasis.app/borrow) that have Emergency Shutdown support implemented, in addition to command-line tools.

### For Dai Holders

Dai holders can, after a waiting period determined by MKR voters, swap their Dai for a relative share of all types of collateral in the system. The Maker Foundation will initially offer a web page for this specific use case.

To claim Dai:

- If your wallet has the viable interface to claim collateral or migrate your Dai, or it has a Dapp browser built into it, you may use the [migration portal](https://migrate.makerdao.com/) to claim collateral and/or migrate.

- If your wallet does not support the above functionality, you must transfer your Dai to a new wallet that enables the functionality before proceeding to use the migration portal.

Dai holders always receive the same relative amount of collateral from the system, whether they are among the first or last people to process their claims.

Dai holders may also sell their Dai to Keepers (if available) to avoid self-management of the different collateral types in the system.

## Redeployment

Since the Maker Protocol is open source and decentralized, anyone can redeploy the system and decide with what configuration. Ideally, the parameters of redeployment should depend on the reason for the Emergency Shutdown, and should not be altered unilaterally and arbitrarily. What will likely happen is that the Maker governance community will come to decide on the most appropriate redeployment, or to launch a redeployment themselves with the appropriate configuration. Here is a rough example of a framework for protocol changes on redeployment:

| Reason                          | Solution                                                                                                                                                                                                                            |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Governance attack               | Fork out malicious MKR holders and reimburse MKR placed in the ESM in new redistribution, redeploy system with everything else as-is.                                                                                               |
| Oracle attack                   | Fork out Oracle module for a new one with a vulnerability fix, reimburse MKR placed in the ESM, redeploy system with everything else as-is.                                                                                         |
| Black Swan event in the Markets | Allow MKR voters to decide how best to address this event through new or improved system mechanics that can be added into the new deployment. Redeploy with the new improvements if necessary, reimburse the MKR placed in the ESM. |
| Unwarranted Emergency Shutdown  | Fork out malicious MKR holders that triggered the ES, redeploy system with everything else as-is.                                                                                                                                   |

## More Information

For technical information about the Shutdown of the Maker Protocol, please see the [Emergency Shutdown Module Documentation](/learn/vaults/vaults-tutorial#emergency-shutdown-module/).

- Contract Name: `esm.sol`

- [Associated MCD System Diagram](/learn/vaults/vaults-tutorial#emergency-shutdown-module/)

- [Contract Source](https://github.com/makerdao/esm/blob/master/src/ESM.sol)

- [Etherscan](https://etherscan.io/address/0x0581a0abe32aae9b5f0f68defab77c6759100085)
