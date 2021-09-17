# Surplus Lot Size

```
Alias: Surplus Lot Size
Parameter Name: bump
Containing contract: Vow
Scope: System
Technical Docs: https://docs.makerdao.com/smart-contract-modules/system-stabilizer-module/vow-detailed-documentation
```

## Description
The `Surplus Lot Size` or '`bump`' parameter controls the amount of DAI that is auctioned off in each surplus auction.

Surplus auctions can be triggered when `Surplus DAI > System Surplus Buffer (hump) + Surplus Lot Size (bump)`. For example, if the Surplus Buffer is set to 50 million DAI, and the `Surplus Lot Size` is set to 10,000 DAI, the system surplus must exceed 50,010,000 DAI before a surplus auction can be triggered.

## Purpose

The `Surplus Lot Size` ensures that surplus auctions are a constant size which makes the system more predictable. It also allows Maker Governance to tune the frequency and accessibility of surplus auctions in order to acheive better prices.

## Trade-offs

Increasing the `Surplus Lot Size` will result in fewer auctions - meaning more competition between keepers in each auction and increased gas efficiency. However, a larger `Surplus Lot Size` may make the capital requirement prohibitive for some keepers, reducing the number of individuals that are able to bid.

Reducing the `Surplus Lot Size` will mean a greater number of auctions will occur. These auctions will require lower amounts of MKR to participate, allowing more keepers to take part. However, a higher number of auctions leads to a higher fixed cost to bid relative to the potential profit, potentially decreasing participation. If auctions are not competitive, then the price obtained for the auctioned DAI may be below-market rates.

## Changes
Adjusting the `Surplus Lot Size` parameter is a manual process that requires an executive vote. Changes to the `Surplus Lot Size` are subject to the GSM Pause Delay.

In general the goal when tweaking this parameter is to increase keeper participation in surplus auctions.

**Why increase Surplus Lot Size?**

The main reason for Maker Governance to increase the `Surplus Lot Size` is to reduce the overall number of surplus auctions. Fewer auctions reduces the gas cost for keepers relative to their potential profit, making particiation more attractive to keepers.

**Why decrease Surplus Lot Size?**

The main reason for Maker Governance to decrease the `Surplus Lot Size` is to reduce the captial requirement for auction participation, potentially increasing the number of keepers able to participate.
 
 ## Considerations
 
The `Surplus Lot Size` cannot be less than or equal to 0 DAI.

The gas cost to `kick` (trigger) a surplus auction is non-trivial. If the `Surplus Lot Size` is too low, surplus auctions may not be triggered by any keeper because they are required to accept a fixed cost for an uncertain return.
