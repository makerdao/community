# Vote Type Descriptors

## $BinaryVoteDescriptor

**This is a binary vote. In a binary vote, you may vote for a single option. You should vote for the option which you prefer. Alternatively, if you would accept either of the two options and have no preference between them, you should vote 'Abstain'.**

## $PluralityVoteDescriptor

**This is a plurality vote. In a plurality vote, you may vote for a single option. You should vote for the option that you prefer. Alternatively, if you would accept any of the listed options and have no preference, you should vote 'Abstain'.**

## $Instant-RunoffVoteDescriptor

**This is an instant-runoff vote. In an instant-runoff vote, you may rank any number of options in the order of preference. As a general rule, you should rank every option you would be willing to vote for if it was included in an executive vote. By failing to rank an option you signal that you are not willing to vote for it in an executive vote. Alternatively, if you would accept any of the listed options and have no preference as to which, you should vote 'Abstain' as your first choice and rank no other choices.**

# Vote Outcomes

## $BinaryVoteOutcomes

**If the votes for the 'Yes' option exceed the votes for the 'No' option then the following actions will be taken:**
* outcome1
* outcome2

**If the votes for the 'No' option equal or exceed the votes for the 'Yes' option then no further action will be taken at this time.**

## $PluralityVoteOutcomes

**The non-'Abstain' option with the most votes is deemed the winner and the following actions will be taken:**

**If the '$A' option recieves the most votes (excluding 'Abstain') then the following actions will be taken:**
* outcome1
* outcome2

**If the '$B' option recieves the most votes (excluding 'Abstain') then the following actions will be taken:**
* outcome1
* outcome2

**If the '$C' option recieves the most votes (excluding 'Abstain') then the following actions will be taken:**
* outcome1
* outcome2

**If the '$D' option recieves the most votes (excluding 'Abstain') then the following actions will be taken:**
* outcome1
* outcome2

## $Instant-RunoffVoteOutcomes

**If a non-'Abstain' option recieves more votes than each other option (excluding 'Abstain') and the support for that option exceeds 50% of the total votes cast then the following actions will be taken:**
* outcome1
* outcome2

**Otherwise, no further actions will be taken at this time.**