---
title: How it Works
order: 1
hideLanguageSelector: true
keywords: "oracle, security, setzer, medianizer"
description: "How oracles are used in the Maker Protocol."
---

# How it Works

---

In the Maker Protocol, each collateral type has a corresponding oracle that publishes a reference price that the system uses. Each oracle consists of an [Oracle Security Module](https://docs.makerdao.com/smart-contract-modules/oracle-module/oracle-security-module-osm-detailed-documentation) and a [Medianizer.](https://docs.makerdao.com/smart-contract-modules/oracle-module/median-detailed-documentation) The Medianizer is sent data through a system of Feeds and relayers.

Each Feed uses a tool called [Setzer](https://github.com/makerdao/setzer-mcd), which pulls the median price from a set of exchanges and then pushes it to a [Secure Scuttlebutt Network](https://scuttlebot.io/more/protocols/secure-scuttlebutt.html) that has relayers reading from it. Relayers aggregate the price data and send a transaction to the Medianizer.

The Medianizer then takes the median of the multiple reported medians and publishes it as a queued reference price. This price is then delayed by the Oracle Security Module before it is finally used by the system.

Feeds may configure Setzer to pull from any exchanges of their choosing. Relayers are able to configure parameters around when to push price data to the Medianizer. Only MKR governance can configure or change the Medianizer and Oracle Security Module.

## FAQs

<Indent pad={2}>


---

### Why are oracles an attack target for malicious actors?

<Indent pad={3}>


In the Maker Protocol, if the reference price for an asset was determined by a single party, then they could fraudulently report an incorrect price and cause severe issues.

For instance, if the price of ETH was reported to be fraudulently low, say \$0.01, then every single ETH [Vault](/learn/vaults/) in the system would be [Liquidated.](https://community-development.makerdao.com/makerdao-mcd-faqs/faqs/liquidation)

On the other hand, if the price of ETH was reported to be artificially high, say \$1,000,000.00, then any ETH Vault owner would be able to issue an excessive amount of Dai since the system thinks there is more Collateral value than there actually is.

Oracle attacks can be very profitable for a successful attacker and can be very disruptive to MakerDAO and its users.

</Indent>


### How is privacy handled?

<Indent pad={3}>


From their onset, the individuals running feeds have been pseudonymous out of necessity, to protect the individuals from the risk of extortion and blackmail.

Pseudonymous Feeds also have the benefit of making it harder to coordinate an Oracle attack since the Feeds don’t know who the others are. Organizations running Feeds, however, are different.

Organizations are much more resilient against coercion, have the resources to combat malicious actors, and have their reputations at stake. This makes them much better equipped to be Feeds with public identities. A hybrid model is optimal, one that incorporates the benefits of both individual and organizational Feeds.

</Indent>


### Is the oracle system Sybil-resistant?

<Indent pad={3}>


Yes, the oracle system is resistant to Sybil attacks. The system uses a whitelist for feeds and becoming a feed requires approval by MKR governance. Therefore, an attacker cannot gain a majority influence by creating many pseudo-feeds.

"In a Sybil attack, the attacker subverts the reputation system of a peer-to-peer network by creating a large number of pseudonymous identities, using them to gain a disproportionately large influence. A reputation system's vulnerability to a Sybil attack depends on how cheaply identities can be generated, the degree to which the reputation system accepts inputs from entities that do not have a chain of trust linking them to a trusted entity, and whether the reputation system treats all entities identically." - [Wikipedia](https://en.wikipedia.org/wiki/Sybil_attack)

</Indent>


### What happens if an exchange experiences a flash crash?

<Indent pad={3}>


The reference price published by the Oracles is a median of the median prices reported by at least 20 different Feeds, outliers are automatically filtered out.

In practice, this means if a single exchange experiences a flash crash the set of prices will look something like this:

`[0.70, 104.80, 104.82, **104.88**, 104.90, 105.02, 105.04]`

The median of this set still reflects the real market price of the asset. Flash crashes on single exchanges do not affect the published reference price.

</Indent>


### Can MakerDAO governance change the time of the Oracle Security Module’s delay?

<Indent pad={3}>


Yes. This parameter is called the `Oracle Security Module Delay` and can be adjusted by MKR token holders.

</Indent>


</Indent>

