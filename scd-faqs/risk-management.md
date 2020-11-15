# Risk Management FAQ

> Notice: You are reading the Single-Collateral Dai version of this FAQ. An up-to-date version of this FAQ will be released soon and will be found [here.](/faqs/risk-management.md)

## What is Risk Management?

Risk Management, in the context of MakerDAO, is the process of identification, analysis, and mitigation of the risks of the system.

## What is Decentralized Risk Management?

Decentralized Risk Management is the cooperative and competitive interaction between Maker Token Holders and all Risk Teams to fulfill the goal of quantifying, analyzing, and mitigating risks to the MakerDAO System. The decentralization of Risk Management helps remove bias from MKR voter decision-making and helps Maker Governance agree on what is best for the system.

## What are Risk Teams?

Risk Teams are independent people or groups of people who create Risk Constructs which are used as a scientific basis for decision-making by Maker Governance. Risk Teams are voted in and given a weighting when they submit a Risk Construct to the MakerDAO Governance community.

## What is a Risk Construct?

A Risk Construct is a Risk Team's collection of data, risk models, and outputs. These act as a framework by which a Risk Team can outline the weightings, relationships, and details of how they measure risk in the MakerDAO system. There is one Risk Construct per Risk Team.

## What is a Risk Model?

A Risk Model should incorporate data-driven analysis and could make use of financial models tailored to the specifics of the MakerDAO protocol. The more comprehensive it is, the more confidence Maker Token Holders will have when assigning it a weighting.

Each component of the model must contain accompanying documentation that explains its methodology, where and how the data was sourced, as well as an analysis of the results.

## Do Risk Models change?

A Risk Model should be continuously updated as data disproves or reinforces its assumptions. Because of the evolving nature of the MakerDAO ecosystem and the economy that is forming around it, competing Risk Constructs will emerge to try to most accurately capture the dynamics of the risks of the system.

## Are there different types of Risk teams?

Yes, due to the varied types of risk, it is unlikely that a single risk team can reliably cover the entire protocol. There may be Risk Teams dedicated to different classes of risk in the system, like Monetary Policy or the Dai Savings Rate. Conversely, there may be Risk Teams who focus on a broader range of areas, such as assessment of particular collateral types, which may require specialty in multiple subjects such as Legal Risk and Operational Assessment. There will be different classifications of Risk Teams, as well as parties who perform independent research but may not submit a Risk Construct themselves.

## Who are the Risk Teams?

Anyone who can create and share a transparent Risk Construct may be voted-in by MKR token holders as a Risk Team.

## What is the process for becoming a Risk Team?

Independent research teams who would like to contribute to the decentralized risk function should create their Risk Construct and apply to be voted in by Maker Token Holders. Details for this process are forthcoming.

## What is the Maker Foundation Interim Risk Team?

The Maker Foundation Interim Risk Team is the first Risk Team whose role is to help bootstrap the Decentralized Risk Management function by providing an initial Risk Construct, as well as documentation, templates, and resources other Risk Teams can use.

## How are Weightings for Risk Teams/Risk Constructs Determined?

Weightings are determined by a number of factors, primarily the transparency of each team's Risk Construct, the accuracy of the work, rigorousness of the Risk Model and the general quality of the work as determined by MKR Token Holders. Higher transparency commands a higher weighting because it promotes more detailed and thorough audits.

## Who chooses which Risk Constructs should be used as a basis for decision-making?

Ultimately, MKR Holders decide on the quality of different Risk Constructs, and how they want to factor those Risk Constructs into their decision-making.

When a risk team submits a new Risk Construct, MKR Holders must assess it and decide whether to vote-in the new Risk Team and with what weighting. The weighting for each Risk Team will be based on the overall quality and transparency of the submitted Risk Constructs.

## What is the connection between a Risk Construct and voting in new collateral?

Proposed new collateral will go through a due-diligence process, including a qualitative and quantitative assessment. Since every asset has differences, it is important to evaluate each of them individually according to a well-defined collateral assessment process. MKR Holders' weightings of these assessments will depend on which Risk Construct is used.

## What is Qualitative Risk Analysis, and how should one approach it?

Qualitative Risk Analysis uses a relative or descriptive scale to measure risks based on their probability of occurring and the impact on the asset should they occur. To evaluate an asset for its risks, one needs to understand and assess the organization behind the asset, the characteristics of the token, and other relevant details. This is called a Qualitative assessment. The process of compiling the information has three parts:

- The Initial Collateral Onboarding Process: this covers the trade support structure, distribution of token holdings and available data series.
- The Operational Assessment Process: this covers the organization itself, the organization's operational risks, regulatory risks, the quality of the community, etc.
- The Technological Assessment Process: this covers the robustness and security of the underlying technology.

Due diligence related to each of these three parts will give one information that can be compiled into distinct features and assigned ratings. These features are:

- **Team**: Core team and advisors
- **Community**: Sentiment analysis
- **Technology** :  Security and completeness review
- **Market and Competitiveness**:  SWOT analysis
- **Business Models** : Structural and legal analysis

An overall score, formed as a result of the individual ratings, will serve as the mathematical input for the Risk Model. The score, judged against other assets in the portfolio, will be the adjustment factor to the risk parameters of that token.

## What is Exposure Risk?

Exposure Risk refers to the exposure one has to particular collateral and generally whether one has too much.  Exposure Risk is relative to the available supply of the asset and its liquidity and quality rating. For a CDP, if a significant portion of an asset's supply was locked as collateral, its subsequent liquidation could result in significant price impact on the market. The risk to the MakerDAO system is that a price drop of that collateral type may result in the liquidation of increasingly more of the underlying asset in CDPs than the market can handle.

Exposure Risk also takes into account the Free Float of the token and its relationship to the token's liquidity. Free Float is the readily traded portion of the available supply. Liquidity in the market is a result of the free float.

The level of collateral Exposure Risk has a direct relationship to the Debt Ceiling, which is one of the Risk Parameters for collateral types. After approximating the maximum exposure level, and given the Liquidation Ratio, we can calculate the Dai exposure level as the Debt Ceiling, which is the maximum amount of Dai that should be generated by CDPs holding this collateral type.

## What is Liquidity Risk?

Liquidity risk, or Asset Liquidity Risk, evaluates the current liquidity of the market for the given token. A liquidity adjustment must be factored into the Liquidation Ratio value in order to compensate for a particular asset's liquidity risk.

## What is Volatility Risk?

Volatility Risk assesses the price risk of the given token. The level of liquidity in a market impacts an asset's price volatility due to the increased or decreased price impact of trades. Volatility Risk is used to help calculate the initial amount of Overcollateralization required for each asset, which is reflected in the Liquidation Ratio.

## What is Correlation Risk?

Correlation Risk is having too much exposure to a group of assets whose values are highly correlated to one another. As a portfolio grows to include more uncorrelated assets, the correlation risk decreases.  A generally accepted principle is that a combination of diverse assets will lower the risk of any individual holding. The diversification benefit is maximized with the addition of uncorrelated assets. Correlation risk is defined as the volatility of the diversification benefit.

## What is Price Feed Risk?

Price feed Risk is the risk of a token's pricing information becoming unavailable, inaccurate, or corrupt. This risk is present at two levels, at the source of the price information, and at the Oracles.

Oracles help mitigate Price Feed Risk by pulling data from multiple sources and taking the median as a reference price. By doing so, they are eliminating outliers that may be inaccurate, maliciously so or not. The Oracle Security Module also provides protection by delaying the price feed in order to allow stakeholders the time to identify mispricings and potential attacks. The risk from the Oracles is a universal risk as they make pricing data available to all assets in the system. An oracle's use of a number of redundant price fee sources to publish reference prices decreases the risk of feeds failing at their source.

## What is Economic Capital in the Context of MakerDAO?

Economic Capital, also known as Risk Capital, is the amount of capital an entity is willing to allocate to remain solvent; It is a fundamental input for the management of the collateral portfolio.

The MakerDAO system is designed to cover CDP liquidations when a CDP fails to raise the amount of Dai it originally generated. The system does so by using MKR as a recapitalization source through its minting and sale. Each collateral's parameters are set such that the probability of this happening is very low. Economic Capital is deployed when highly unlikely events cause CDP shortfalls. In MakerDAO, this represents a risk premium that is built into the Stability Fee.

The Economic Capital calculation is used to calculate the Stability Fee for each collateral type.
To learn more, read the Economic Capital and the Stability Fee section in this [blog post](https://blog.makerdao.com/makerdao-governance-risk-framework-part-2/).
