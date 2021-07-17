# Surplus Lot Size

```
Alias: Surplus Lot Size
Parameter Name: bump
Containing contract: Vow
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/vow-detailed-documentation
```

## Description
The Surplus Lot Size parameter controls the amount of DAI auctioned for MKR when the system is in surplus. Surplus DAI from stability fees accrues in the System Surplus Buffer.

Once the amount of DAI within the System Surplus Buffer exceeds `System Surplus Buffer (hump) + Surplus Lot Size (bump)`, users may trigger a surplus auction where excess DAI is
auctioned for MKR which is subsequently burned. Therefore, for surplus auctions to occur, the System Surplus Buffer must be full.

The Surplus Lot Size fixes the lot sizes of these auctions. Therefore, if `DAI inside the System Surplus buffer - System Surplus Buffer (hump)` is less than the Surplus Lot Size,
then an auction cannot begin. However, if it is more than the Surplus Lot Size, then a single auction, or multiple auctions, of DAI amounts equal to the Surplus Lot Size may
commence.

## Purpose

The Surplus Lot Size ensures that surplus auctions are a constant size which makes the system more predictable. It also allows for the number of auctions to be limited by
preventing multiple small auctions from occurring simultaneously, which will allow for more efficient prices and save gas fees for keepers.

## Trade-offs

Increasing the Surplus Lot Size will result in fewer auctions - meaning more competition between keepers in each auction and increased efficiency in terms of gas. However, 
a larger Surplus Lot Size may mean that the MKR cost is too high for some participants, reducing the number of individuals that may bid on a surplus auction. In this scenario,
auction prices obtained may be sub-optimal and mean that less MKR will be burned.

Reducing the Surplus Lot Size will mean a greater number of auctions will occur. These auctions will require lower amounts of MKR to participate, allowing more keepers to take
part. However, a higher number of auctions may lead to inefficiency in terms of gas fees for participating keepers, potentially leading to decreased participation.

## Changes

Adjusting the Surplus Lot Size parameter is a manual process that requires an executive vote. Changes to the Surplus Lot Size are subject to the GSM Pause Delay.

 **Why increase Surplus Lot Size?**
 The main reason to increase the Surplus Lot Size is to reduce the overall number of surplus auctions. Fewer auctions may be desirable when The Maker Protocol has a lot of 
 income to allow for more competitive auctions and to reduce gas costs for keepers.
 
 **Why decrease Surplus Lot Size?**
 
The main reason to decrease the Surplus Lot Size would be to allow keepers with less MKR to participate in surplus auctions. More keepers may be required if too few 
keepers are participating in auctions, as this may result in less efficient auctions and sub-optimal MKR prices.
 
 ## Considerations
 
 The Surplus Lot Size cannot be less than or equal to 0 DAI.
 
 
