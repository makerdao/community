<StatusBanner sticky>

These are legacy guides and will not be maintened. You may be looking for the page on <Button  secondary inline to="/learn/governance/mkr-token/">MKR</Button>

</StatusBanner>

# MKR Token

## What is MKR?

MKR is an ERC-20 token that is native to the Maker Protocol.

## What is the MKR token used for?

MKR is the governance token and recapitalization source of the Maker Protocol.

### MKR as a governance token

As a governance token, MKR is used by its holders to vote on a number of different things. Voting is used to execute changes to parameters inside of the Maker Protocol like Stability Fees, the DSR, Debt Ceilings, and many others. Voting is also used to make decisions on the non-technical aspects of the protocol like asset priority lists, governance processes, role mandates, and even electing individuals to fill specific roles. To learn more about governance in the Maker Protocol visit the [Governance section](/learn/governance/).

### MKR as a recapitalization source

The token also acts as a source of recapitalization when the Maker Protocol runs at a deficit. The possibility of MKR token supply Dilution gives holders a strong incentive to govern the system well. Inversely, the destruction of MKR through the auctioning of Dai from the system’s excess surplus further incentivizes holders to govern the system well.

## How are MKR tokens created or destroyed?

MakerDAO launched with 1,000,000 MKR tokens at its inception. The tokens are created and destroyed under different circumstances. MKR is destroyed when the Maker Protocol’s system surplus exceeds a minimum threshold, resulting in excess Dai being auctioned for MKR that is then destroyed. Inversely, when the Maker Protocol is running a deficit and the system debt exceeds a maximum threshold, MKR is created and auctioned for Dai in order to recapitalize the system.

## What responsibilities do MKR holders have?

The primary responsibility of MKR holders is to ensure the stability of the Dai Peg and the overall health of the Maker Protocol. It is also in MKR holders’ interest to focus on improving and growing the Maker Protocol by building out the governance processes and infrastructure that enable the effective management of the system. This includes, but is not limited to, establishing risk assessment standards for onboarding new Collateral and Vault types, ratifying role mandates and electing appropriate parties, establishing standards around vote types, and much more.

Another important responsibility for MKR holders is to communicate publicly about their views on the various issues that Maker governance is addressing at any given time. Participating seriously in forum discussions and voicing opinions, and the reasoning behind them, is important because of the public and decentralized nature of the protocol and its governance.

## What voting rights do MKR holders have?

MKR holders have the ability to enact technical changes to the Maker Protocol itself and also to ratify decisions on-chain about non-technical matters. Whether that be a change to the system parameters, or a decision to accept a new governing philosophy, MKR voters have ultimate control. To learn more about governance in the Maker Protocol visit the [Governance FAQ](/learn/governance/).

MKR holders who are interested in actively participating in the management of the Maker Protocol can visit the [Voter Onboarding Guide](/learn/governance/voting-setup/) for an overview of how to get started.

## What addresses hold the most MKR?

The addresses that hold the most MKR can be viewed in the [Holders tab](https://etherscan.io/token/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2#balances) on [Etherscan's MKR token address page.](https://etherscan.io/token/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2) Some of these are not individual holders, but are smart contracts that pool together MKR. Two examples are explained below, other examples include exchange wallets and liquidity pools.

[0x8ee7d9235e01e6b42345120b5d270bdb763624c7](https://etherscan.io/token/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2?a=0x8ee7d9235e01e6b42345120b5d270bdb763624c7) is the MakerDAO Multisig that holds undistributed MKR and is owned by the foundation. It is also referred to as the Development Fund.

[0x642AE78FAfBB8032Da552D619aD43F1D81E4DD7C](https://etherscan.io/token/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2?a=0x642AE78FAfBB8032Da552D619aD43F1D81E4DD7C) is the Redeemer contract which is temporarily holding NEWMKR for owners who haven't redeemed their OLDMKR yet.

[0x9eF05f7F6deB616fd37aC3c959a2dDD25A54E4F5](https://etherscan.io/token/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2?a=0x9eF05f7F6deB616fd37aC3c959a2dDD25A54E4F5) is the DS-Chief voting contract that holds MKR deposits from multiple individuals, which are then used for governance. This contract has authority over all the Maker Protocol contracts and is used to make changes to the state of the system, which refers to all of the things MKR holders can vote on, including Risk Parameters.

## Can MKR be used as a collateral type?

Although MKR could technically be implemented as a collateral type, there are reasons why it would be inadvisable to do so.

MKR is designed to function as a recapitalization source for the protocol. This means that MKR acts as a Collateral of last resort to absorb losses beyond the expected losses from Collateral locked in Vaults. If MKR is being used as a Collateral of first resort i.e. as a collateral type locked in Vaults, then it would take away from its effectiveness as a Collateral of last resort.

A negative feedback loop would occur in a scenario when a falling MKR price would trigger the liquidation of MKR-collateralized Vaults, further causing downward pressure on MKR price. While downward price pressure in a liquidation is a risk applicable to any collateral type, the systemic risk with MKR is potentially greater because falling MKR price directly reduces the amount of value available to recapitalize all collateral types across the Maker Protocol. Downward spirals in MKR price also make the Maker Protocol more vulnerable to governance attacks, wherein the cost of buying enough MKR to vote for changes favorable to an attacker becomes more affordable. Furthermore, if both systemic bad debt and MKR-Vault liquidations were to happen at the same time, then they would become self-reinforcing, increasing the risk of a severe collapse of the value of MKR and reducing its effectiveness as a Collateral of last resort.

Finally, there is the argument about circular financing. It stands to reason that the value of MKR may be correlated to the total amount of Dai in circulation. Additional Dai generated from MKR-Vaults would create a positive feedback loop for the price of MKR, allowing even more Dai to be generated from those Vaults. This behavior adds systemic risk.

## Will MKR token Dilution be able to cover all Dai if the value of their backing Collateral goes to zero?

The event of a Collateral asset losing all value is considered a Black Swan, which is defined as unprecedented, unexpected, and catastrophic. This makes it very difficult to predict the likelihood and severity of existential threats to the system. There is no guarantee that MKR Dilution will always be sufficient.

MKR Dilution can recapitalize the system to a certain limit. The severity of the situation is important to consider. If the severity of the situation is high enough, then it may be viable for MKR holders to execute an Emergency Shutdown which would result in Dai being a pro-rata claim on the Maker Protocols Collateral portfolio.

## How do I redeem old MKR?

[Makerdao.com/redeem](https://makerdao.com/redeem/) is the only official page for upgrading MKR tokens.

**Important note:** Do NOT send tokens directly to the redeemer contract. Doing so will cause all the tokens you send to become permanently lost! ONLY follow the official steps on Makerdao.com/redeem to redeem MKR.

There is no time limit on when redemption needs to be done. It is important that all community members beware of phishing attacks happening in relation to this upgrade process. Never link to any “new official communication” regarding ways to redeem MKR, as these could likely be phishing scams.

## What happens to MKR in the event of an Emergency Shutdown?

In the case of an [Emergency Shutdown](/learn/governance/emergency-shutdown/) the system would need to be redeployed. The redeployed version of the Maker Protocol still requires MKR for voting the same as it did before.

Emergency Shutdown is not necessarily indicative of an MKR Dilution event. MKR Dilution occurs when the system is running a deficit and needs to be recapitalized. If the system is going through Emergency Shutdown, the price feeds and state of the system will be frozen at a particular moment in time. MKR Dilution might occur in the moments preceding that if the Emergency Shutdown is due to a severe market failure that would cause many Vaults to default.

There are no guarantees whatsoever relating to the future value of MKR, in particular, if Emergency Shutdown happens. Additionally, MKR holders are not responsible if Dai holders take a haircut during Emergency Shutdown.

## How much MKR is there?

There were a total of 1,000,000 MKR at the inception of the Maker Protocol. To find out how much MKR currently exists, see the [MKR Token Contract on Etherscan](https://etherscan.io/token/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2).

The total number of MKR in existence can fluctuate based on how the system runs. For instance, the total supply of MKR can increase if the system is running a deficit and needs to dilute MKR as a recapitalization source. If the system is governed well, the total amount of MKR will decrease as MKR is destroyed in exchange for excess Dai from the system’s surplus.
