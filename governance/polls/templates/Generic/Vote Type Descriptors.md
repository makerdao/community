# Vote Type Descriptors

## $BinaryVoteDescriptor

**This is a binary vote.**
- **You may vote for a single option.**
- **You should vote for the option which you prefer.**
- **If you would accept either option, you should vote 'Abstain'.**

## $PluralityVoteDescriptor

**This is a plurality vote.**
- **You may vote for a single option.**
- **You should vote for the option that you prefer.**
- **If you would accept any of the options you should vote 'Abstain'.**

## $Instant-RunoffVoteDescriptor

**This is an instant-runoff vote.**
- **You may rank any number of options that you would support in an executive vote.**
- **Unranked options signal that you would not support the option(s) in an executive vote.**
- **If you have no preference to any of the listed options, you should vote 'Abstain' as your first and only choice.**

## $ApprovalVoteDescriptor

**This is an approval vote.**
- **You may vote for multiple options.**
- **You should select all the options that you would support in an executive vote.**
- **Unselected options signal that you do not approve of those options and would not support the option(s) in an executive vote.**
- **If you wish to abstain, that should be your one and only choice.**

# Vote Outcomes

## $BinaryVoteOutcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* outcome1
* outcome2

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

## $PluralityVoteOutcomes

**The non-'Abstain' option with the most votes is deemed the winner and the following actions will be taken:**

**If the '$A' option receives the most votes (excluding 'Abstain') then the following actions will be taken:**
* outcome1
* outcome2

**If the '$B' option receives the most votes (excluding 'Abstain') then the following actions will be taken:**
* outcome1
* outcome2

**If the '$C' option receives the most votes (excluding 'Abstain') then the following actions will be taken:**
* outcome1
* outcome2

**If the '$D' option receives the most votes (excluding 'Abstain') then the following actions will be taken:**
* outcome1
* outcome2

## $Instant-RunoffVoteOutcomes

**If a non-'Abstain' option receives more votes than each other option (excluding 'Abstain') and the support for that option exceeds 50% of the total votes cast then the following actions will be taken:**
* outcome1
* outcome2

**Otherwise, no further actions will be taken at this time.**

## $ApprovalVoteOutcomes

### $SingleWinnerWithoutMajorityRequirement

**The non-'Abstain' option with the most votes is deemed the winner and the following actions will be taken:**
* outcome1
* outcome2

### $SingleWinnerWithMajorityRequirement

**The winner of this vote requires an overall majority of votes to support it. The non-`Abstain` option with the most votes AND the support of a majority of votes is deemed the winner and the following actions will be taken:**
* outcome1
* outcome2

