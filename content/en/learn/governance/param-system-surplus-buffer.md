---
title: Parameter - System Surplus Buffer
keywords: "hump, system surplus buffer, surplus auction buffer"
---

# System Surplus Buffer

```
Alias: Surplus Auction Buffer
Parameter Name: hump
Containing Contract: Vow
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/vow-detailed-documentation
```

## Description

The System Surplus Buffer parameter controls the maximum amount of DAI that can accrue to the protocol from Stability Fee revenue prior to FLAP auctions being triggered. As Stability Fees come in, the total amount of DAI inside the System Surplus Buffer increases until it reaches `System Surplus Buffer (hump) + Surplus Lot Size (bump)` at that point a FLAP auction can be triggered and DAI is auctioned off for MKR. This purchased MKR is then burned.

The Maker Protocol only has one System Surplus Buffer and the stability fees from all vaults accrue to it.

The System Surplus Buffer is expressed in absolute rather than relative terms, so 1,000,000 DAI rather than 1% of the Total DAI Debt.

## Purpose

In general terms, whenever the Maker Protocol makes money in DAI, MKR is bought and burnt. Likewise, every time the system loses money (bad debt), it mints MKR, sells it, and buys DAI. The primary purpose of the System Surplus Buffer is to reduce the frequency that this occurs. This is beneficial to the protocol because each time an auction takes place (whether FLAP or FLOP), the auction is not perfectly efficient and the protocol loses some percentage of the auctioned value. 

In addition to this, the buffer provides a reserve of DAI which may be used by governance to fund the operations of domain teams and to pay for Oracle feeds without requiring the minting of MKR.

## Trade-offs

Increasing the System Surplus Buffer allows the Maker Protocol to accrue a larger reserve of DAI before burning MKR. This larger reserve provides greater security for the protocol in the event of bad debt.

However, while the buffer is not full FLAP auctions do not take place, and MKR is not burned. This means that Maker Governance is not being rewarded for their efforts during this time.

Additionally, DAI in the System Surplus Buffer is not circulating in the market. This means that holding large amounts of DAI in the System Surplus Buffer will increase upwards pressure on the DAI peg.

Maintaining too low of a System Surplus Buffer on the other hand means that FLOP auctions are more likely to take place in the event of bad debt. This makes it more likely that the supply of MKR will increase and dilute the value of current MKR Holders. 

## Changes
Adjusting the Surplus Auction Buffer parameter is a manual process that requires an executive vote. Changes to the System Surplus Buffer are subject to the GSM Pause Delay.

**Why increase this parameter?**

The primary reason for increasing the System Surplus Buffer is if it is judged that more surplus is needed to minimize the risk of MKR minting in the case of a market event leading to bad debt. In general, the larger the total DAI debt, the larger the System Surplus Buffer should be in order to balance the risk from volatile collateral.

Another reason to increase the System Surplus Buffer is if for whatever reason it is beneficial to prevent the burning of MKR for a certain time.

**Why decrease this parameter?**

The primary reason for decreasing the System Surplus Buffer when the buffer is full would be if Governance wished to use the DAI currently in the buffer to buy and burn MKR. Alternatively, if the buffer was not full, Governance may choose to decrease the buffer to restart the continuous MKR burn arising from the buffer overflowing.

Another reason to decrease the buffer might be if the risk from the collateral portfolio decreases, either due to reduced DAI debt across all vaults, or the portfolio of collateral backing DAI becoming more stable and less risky on average.

## Considerations

Care should be taken when decreasing the System Surplus Buffer parameter while the buffer is full. Decreasing the size of the buffer will trigger FLAP auctions for the amount of outstanding DAI that no longer fits within the new buffer. Large numbers of FLAP auctions at once have the potential to overwhelm auction keepers and result in buying MKR at a higher price in the auction.

If Emergency Shutdown is triggered, the DAI inside the System Surplus Buffer is destroyed and the collateral backing it is proportionally redeemable by other DAI Holders. This means that the DAI in the System Surplus Buffer can be discounted in terms of the total amount of DAI that needs to be backed by collateral.

DAI can be pulled out of the Maker Protocol by Maker Governance by using the `suck` method as part of an executive vote. DAI `suck`ed from the protocol in this way will be deducted from the System Surplus Buffer and will trigger MKR mints if more DAI is `suck`ed than exists in the System Surplus Buffer.
