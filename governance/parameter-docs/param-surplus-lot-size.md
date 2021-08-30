# Surplus Lot Size

```
Alias: Surplus Lot Size
Parameter Name: bump
Containing contract: Vow
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/vow-detailed-documentation
```

## Description
Through the Surplus Lot Size parameter Maker Governance controls the amount of DAI auctioned for MKR when the system is in surplus.

The Surplus Lot Size fixes the lot sizes of surplus DAI auctions. If `DAI inside the System Surplus buffer - System Surplus Buffer (hump)` is less than the Surplus Lot Size, then an auction cannot begin.

## Purpose

The Surplus Lot Size ensures that surplus auctions are a constant size which makes the system more predictable. It also allows for the number of auctions to be limited by preventing multiple small auctions from occurring simultaneously, which will allow for more efficient prices and reduce gas fees for keepers.

## Trade-offs

Increasing the Surplus Lot Size will result in fewer auctions - meaning more competition between keepers in each auction and increased gas efficiency. However, a larger Surplus Lot Size may mean that the MKR cost is prohibitive for some keepers, reducing the number of individuals that are able to bid. In this scenario, auction prices may be below the market rates and reduce the profits of the Maker Protocol.

Reducing the Surplus Lot Size will mean a greater number of auctions will occur. These auctions will require lower amounts of MKR to participate, allowing more keepers to take part. However, a higher number of auctions may lead to gas inefficiency for participating keepers, potentially leading to decreased participation. If auctions are not competitive, then the price obtained for the auctioned DAI may be below market rates.

## Changes

Adjusting the Surplus Lot Size parameter is a manual process that requires an executive vote. Changes to the Surplus Lot Size are subject to the GSM Pause Delay.

**Why increase Surplus Lot Size?**

The main reason for Maker Governance to increase the Surplus Lot Size is to reduce the overall number of surplus auctions. Fewer auctions may be desirable when The Maker Protocol has a lot of surplus income to allow for more competitive auctions and to reduce gas costs for keepers.
 
**Why decrease Surplus Lot Size?**
 
The main reason for Maker Governance to decrease the Surplus Lot Size would be to reduce the entry requirements for keepers to participate in auctions. It will allow keepers with less MKR to participate in surplus auctions. More keepers may be required if too few keepers are participating in auctions, as this may result in less efficient auctions and sub-optimal MKR prices.
 
 ## Considerations
 
The Surplus Lot Size cannot be less than or equal to 0 DAI.
