---
title: Governance Risk Framework (Part 2)
order: 3
hideLanguageSelector: true
keywords: ""
description: "Part 2 of the section describing risk management in Maker"
---

# Governance Risk Framework (Part 2)

## Risk and Scientific Governance

The [first part](/learn/governance/gov-risk-framework.mdx) of this three-part series covered the stablecoin universe, defined decentralized risk management, and outlined the governance structure around the risk function.

In part two of the series, we'll take a more in-depth look at the risks underlying the system, describe how parameters in the MakerDAO system encapsulate those risks, and finally, outline the models that are most appropriate for measuring and managing those risks.

[Part 3](/learn/governance/gov-risk-framework3.mdx) will map out the decisions that Maker holders will need to make, the support they'll get to make those decisions, and the voting process for managing the risk function.

### Risk Factors in Minting Dai

Participants in Maker governance need to understand how to identify, measure, and manage the above-mentioned risks so that Maker token holders understand the exposures they face and the information available to make decisions.

Risk factor to consider include:

<Accordion>


#### Concentrated Exposure

MakerDAO could find itself with a concentrated position in a particular token if the majority of its owners used it as collateral. The higher the aggregate relative exposure to total supply, the more risk in trying to realize its value. Also, the higher the correlation, the less the diversification benefit.

How much exposure of one collateral type are we willing to take? When is too much? What does ‘too much’ mean?

"Too much" represents the level of exposure relative to the available supply. If the level of exposure exceeds the available supply, liquidating the collateral would negatively impact the market value of the token such that it would become impossible to liquidate enough collateral to repay lenders.

This level of collateral exposure is called the Maximum Exposure Level. Given the Liquidation Ratio, we can calculate the Dai exposure level as the maximum amount of Dai that should be lent out given this collateral type.

The maximium amount of Dai lent out in exchange for a given type of collateral is referred to as the Debt Ceiling. This level is not absolute, and it is related to the available supply.

#### Risk Management Function

Calculating the debt ceiling involves:

1. Caculating the Theoretical Debt Ceiling, the highest debt ceiling a token can have under the assumption that the token has the liquidity to support such a level.

2. Calculating the Practical Debt Ceiling by considering what the current situation of the market and collateral portfolio risk profile.

3. Considering the rate at which the current Debt Ceiling increases. If the Debt Ceiling rises too quickly, it may be due to increased speculative activity or even an aggressive attack vector.

The Debt Ceiling may rise too quickly due to increased speculative activity or an aggressive attack vector. The rapid rate of increase could be indicative of an attack vector or an abnormal rise in volatility, both of which would present problems to the system.

Using the Defensive Debt Ceiling, the rate at which the debt ceiling may increase may be calculated as:

defensive debt ceiling = current level of debt + constrained rate \* available supply

Where the ‘constrained rate’ will capture the maximum rate of increase over a given period.

The Theoretical Debt Ceiling is the maximum token based supply of Dai allowed for a particular token, the Practical Debt Ceiling is the limit that the market for that token can handle at that time, and the Defensive Debt Ceiling looks after the system as the debt level grows.

</Accordion>


<Accordion>


#### Correlation Risk

If you create a portfolio of two financial assets, the risk of that portfolio will almost always be less than the sum of the individual risks of the underlying assets because the correlation of returns between two different assets are generally never perfect.

The result is a diversification benefit for the portfolio.

The expression shows the benefit as the portfolio volatility subtracted from the sum of the individually weighted volatilities. Where the portfolio volatility includes diversification, and the sum of weighted volatilities assumes no diversification. So by subtracting we get the diversification benefit denominated in units of volatility saved.

If the correlation between the two assets stayed the same forever, we would then have a constant diversification benefit. But correlation changes, resulting in the diversification benefit changing. Creating a risk to the portfolio, specifically, the risk of correlation increasing.

The higher the correlation, the less the diversification benefit. So correlation risk is defined as the volatility of the diversification benefit.

![correlation risk calculation](https://cdn-images-1.medium.com/max/1600/1*wQlWskSbx4IJ6B7HRwdMsw.png)

The way to manage correlation risk is by adding more collateral types to the portfolio that have either nothing in common with it or act in opposition to it. With the goal that once a critical mass of unrelated collateral types are in the portfolio, the diversification benefit will stabilize.

### Risk Management Function

Understanding how to manage correlation risk requires a working definition of book-building and risk capital.

Book-building is the way you include assets in the portfolio and risk capital is the amount of actual capital that an organization wishes to risk to remain solvent to attain an expected return.

Consuming risk capital efficiently means book-building a collateral portfolio with specific goals for managing risk and return.

Each collateral type should have a stability fee representing the return component to the organization. Given the stability fee, if the risk profile of the collateral type contributes to the diversification of the portfolio, without materially affecting the overall return, it will be included. The extent to which it’s involved depends on the amount of risk capital it consumes.

Ideally, we want to build the collateral portfolio of uncorrelated tokens to maximize the benefits of diversification.

</Accordion>


<Accordion>


#### Credit Risk

Traditionally, loans are made with sufficient collateral in place to minimize the exposure at the time of default.

The question is, what makes that collateral sufficient?

Collateral is adequate when there is enough of it to cover all of a loan if ever that loan is placed into default.

The MakerDAO system is designed to cover excess outstanding loan amounts not covered by the liquidation of collateral.

How much capital must be set aside for the operation to remain solvent if the collateral is not sufficient?

#### Risk Management Function

Each loan in MakerDAO is charged a stability fee to compensate MakerDAO for operating and maintaining the stability of the system.

The stability fee is similar to an interest rate. Interest rates:

- Must compensate for purchasing power or first pay for inflation.

- Include operating costs and the policy instruments of the organization.

- Offer a premium to compensate those insuring against default on loans.

Traditionally, this would be a credit risk premium attached to the borrower’s credit quality but in this system, the credit risk is shifted entirely to the collateral. The traditional method would have a liquidity preference fee, which creates a higher compensation for more extended loans.

In the MakerDAO system, this does not apply because loans facilities are open-ended.

To summarize, the credit stability fee simplistically can be seen as the sum of the inflation rate, operational cost premium, and credit insurance premium.

![](https://cdn-images-1.medium.com/max/2400/1*SspHtnDr1sX2X705x1Nx4g.png)

The credit insurance premium component is more applicable to our context at the moment. Assume inflation and operational costs of the organization are zero. We then consider the stability fee as a premium that pays the system to provide the insurance if the collateral is not sufficient.

A way of understanding the stability fee is thinking of it as the probability that MakerDAO will use all of its risk capital. Assuming all the risk capital used, we represent expected loss as:

![](https://cdn-images-1.medium.com/max/1600/1*zaZe5Oh8SqKFbbfQh-43lQ.png)

So if we use a nominal value for risk capital — say $100, then the expected loss is $2.50 if the probability of the event is 2.5%. Clearly showing that \$2.50 or instead 2.5% is the appropriate compensation per year for taking on such risk.

Now the way the economic capital and stability fee relate to each other is through this interpretation of probability. Remember if we think of the stability fee as a probability that we would use all the risk capital then we would want the expected value of our business to be positive that is:

![](https://cdn-images-1.medium.com/max/1600/1*ygLn2cV584kKjOyWxQP3-w.png)

The above inequality represents two events. The first term is no event of default over a one year period where we earn a stability fee. The second term is the event of default within a one year period and uses all the risk capital.

Events are mutually exclusive in this exercise. Either a default occurs and we use the risk capital or it does not.

Given that stability fee or the probability of default is 2.5% per year, the risk capital inequality resolves to:

![](https://cdn-images-1.medium.com/max/1600/1*P-kQpQj4lGAfwhsq1cmSOw.png)

Risk Capital should be 97.5%/2.5% = 39x higher than the stability fee. A quick calculation (by taking the reciprocal) shows a return on risk-adjusted capital of 2.56% (2.5%/97.5%) — not a very attractive return. Still, there is a simple intuition missing here. Let’s rephrase the full inequality again with one addition:

Then our risk capital term would be defined as:

![](https://cdn-images-1.medium.com/max/1600/1*sCDWwUHzfvQ9N8j7yatSOg.png)

Risk capital represents the part of the loan that collateral does not cover. The resolved inequality (Risk Capital < 97.5%) then states that risk capital should be less than 97.5% of the outstanding loan!

This should be the case as we hope that the collateral will cover the lion’s share of the risk. We expect risk capital would represent a relatively small portion of the outstanding loan.

Conservatively, the proportion would not exceed 8–10% of the outstanding loan. Far less than the Risk Capital < 97.5% requirement. If we take the upper value of 10% and recreate the return reciprocal, the return on risk-adjusted capital would be (2.5%/10%) 25% — a more attractive yield.

The economic capital calculation is a top-down tool used to calculate the stability fee for each collateral type and can be used to assess the minimum stability fee for the portfolio as a whole.

</Accordion>


<Accordion>


#### Exogenous Risk

Exogenous risk includes issues that may arise from external sources like: "What makes a price feed sufficient? How do you assess the quality of information a source brings? How long will that source be around?"

Potential risk can be found in assessing the quality of the information at the source level, during the exchange of information, and over time.

The primary question raised by exogenous risk is how much capital must be set aside for the operation to remain solvent if the collateral is not sufficient?

#### Risk Management Function

Economic capital represents the amount of risk an organization is prepared to take, so what does it expect to get in return?

Each loan in MakerDAO attracts a stability fee to compensate MakerDAO for operating and maintaining the stability of the system. The stability fee is similar to an interest rate, and an interest rate is made up of a couple of components.

An interest rate must compensate for purchasing power, so it must first pay for inflation. The credit stability fee can be seen as the sum of the inflation rate, operational cost premium, and credit insurance premium.

#### Managing Price Feeds

Management of the risk associated with price feeds is currently handled by vetting multiple sources and taking the median of the price with a delay mechanism.

Taking a cross-section of the multiple sources and applying the median ensures unrealistic size differentials does not bias the result as it would with averaging, the following unbiased and unbiased sets show an example of the fact:

The delay mechanism allows for the comparison of the delayed price to the current price. Which allows enough time to identify an attack vector in price and do something about it, before using the delayed price.

</Accordion>


<Accordion>


#### Liquidity and Volatility

The less liquidity available in the market, the more likely the price impact will work against realizable value and the higher the volatility of the collateral value, the less likely we are to recover the full loan in the event of default.

Liquidity risk involves evaluating the liquidity of an asset in the market while volatility examines the risk associated with large swings in the market value of a token.

To evaluate the risk associated with the liquidity of a token, we need to consider the relationship between liquidity and free float. Free float is the readily traded portion of the available supply of tokens — the amount not held over the long term by founders and large institutions. Therefore, any real liquidity presented in the market is a result of the free float.

The Debt Ceiling helps mitigate the risk of creating an illiquid market. We include a predetermined maximum amount of time to liquidate the position and adjust the collateral calculation for it.

From volatility risk we can calculate the initial amount of required capital and make a liquidity adjustment to the calculation. Given the length of time to liquidate that collateral, the final change would be the time — or expected liquidation period.

#### Example

How much gold would be needed to collateralize a $100 loan? If the volatility of the price of gold is 10% per day, you would probably want something around $125. If you're conservative, you would probably want twice the volatility of the daily price incorporated into the collateral value, which is conservative as the chance of the price falling by 20% in one day is very small.

The collateral we would need would be $100/0.8 = $125, or, put another way, starting at $125: if the collateral value drops by 20% that would equal a $25 loss in value but we would still have \$100 in value which is enough to cover the outstanding loan, given nothing is paid back.

Now we include the Liquidity Risk Factor. We have assumed that $125 of gold would be sufficient to cover the $100 loan. What about a $1m loan? Well we know the amount of collateral we would need is $1.25m, but getting rid of $1.25m in gold is a more complicated problem than getting rid of $125 of gold. We have to consider the liquidity of the market yet again.

What is required is an adjustment of the collateral value to compensate for liquidity risk. If we assume the liquidity adjustment is 1.15 or an increase of 15% in value. Then the final collateral value required would be \$1.435m.

Given the volatility risk, and a uniform application of the liquidity risk adjustment, we have determined that to borrow $100 one would need to pledge $143.50 in collateral.

The outstanding issue is the duration of the loan. If the loan is for longer than a day, then more collateral needs to be posted or an adjustment to the collateral needs to be performed on a daily basis.

Considering the loans in MakerDAO are open-ended, we don't need a massive amount of collateral. Unlike a traditional loan, loans of Dai are immediately liquidated if a default occurs.

The applicable period to consider is then the length of time to liquidate the position. So we will include a predetermined maximum amount of time to liquidate the position and adjust the collateral calculation for it.

To summarize, from volatility risk we can calculate the initial amount of required capital, from liquidity risk we can make a liquidity adjustment to the calculation. Given the length of time to liquidate that collateral, the final change would be the expected liquidation period.

#### Risk Management Function

The liquidation ratio is the required amount of collateral as a proportion of the loan.

So in our example, if we consider that from volatility the necessary amount of gold as collateral was $125. Then after adjusting for liquidity, it was $143.50, then adjusting for the expected liquidation period it turned out to be $175. The liquidation ratio would then be $175/\$100 = 175%. So the liquidation ratio can be generally approximated by:

![liquidation ratio calculation](https://cdn-images-1.medium.com/max/1600/1*hr05cBlHByBkFK3_kEOv5g.png)

Where the VaR term is the value at risk at a given confidence level, an idea and calculation we will explore further in a more detailed paper focussed on the liquidation ratio.

Participants in the system liquidate the collateral if the collateral to debt ratio falls to or below this level. A level that ensures, given certain confidence, the collateral when liquidated should be sufficient to recover the loan. With any excess collateral returned to the borrower. If the collateral is insufficient, MKR token holders will be diluted to make up for any outstanding part of the loan that has not recovered.

</Accordion>


<Accordion>


#### Tokenomics and Qualitative Risk

The less stable the fundamentals of the organization, the less confident holders will be.

Evaluating new tokens requires due diligence on the value proposition of the token, its fair market value, and the organization(s) behind a project.

#### Risk Management Function

Ultimately, the risk function will be made up of many groups that collectively produce a weighted group rating for a token.

MKR token holders will use the available information, along with the collective rating to decide whether to include the token into the collateral portfolio.

A rejected token will go to the back of the queue; otherwise, collateral will be included in the portfolio or assigned to be ‘reviewed.’ On ‘review’ means no decision made because of an impasse or not enough information was available to make the decision.

</Accordion>


### Managing Risk

The responsibility of Risk Teams is to facilitate and contribute to the compilation of information to assess the qualitative features of the organization behind the token used as collateral. The process to compile data through due diligence has three parts and is conducted sequentially to use resources as efficiently as possible.

The three parts are:

- **Collateral Onboarding** covers the trade support structure, distribution of token holdings and available data series.

- **Operational Assessment** covers the functionality behind the token, from the organization itself, through to the governance mechanisms and rights of the token owner.

- **Technological Assessment** covers the robustness and security of the underlying technology.

The information compiled from the due diligence will be used to rate the features of the potential collateral token. The features of the organization to assign a rating to are:

- Team — Core team and advisers

- Community — Sentiment analysis

- Technology — Security and completeness review

- Market and Competitiveness — SWOT analysis

- Business Models — Structural and legal analysis

Assigning a rating to each feature will result in an overall rating. A score below a prerequisite value will place the token to the back of the queue, and a passing score is an adjustment factor to the risk parameters of the system.

### Maker (MKR) Token Holders

Maker (MKR) Token Holders will create a qualitative risk template and assign ratings on this template. The model and information will be made available for MTH and other teams to use for themselves. Ultimately the risk function, made up of many groups, will collectively produce a weighted group rating for the token.

Token holders must use the available information, along with the collective rating, to decide whether to include the token into the collateral portfolio.

A rejected token will go to the back of the queue; otherwise, collateral will be included in the portfolio or assigned to be ‘reviewed.’

On ‘review’ means no decision made because of an impasse, or not enough information was available to make the decision.
