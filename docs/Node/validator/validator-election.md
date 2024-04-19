---
sidebar_label: Validator Election
hide_table_of_contents: false
sidebar_position: 2
---


Validator Election
Overview
Validators are a crucial part of the Core network. In addition to the fact that they handle transaction validation and block production, the validator election process is where both the DPoW and DPoS parts of Satoshi Plus consensus come together.

There are two steps involved in validator election. First, hybrid scores are calculated for all validators in the network with the following equation. Before we added bitcoin staking, we calculated hybrid score for each validator with the following equation:

S
=
r
H
p
t
H
p
∗
m
+
r
S
p
t
S
p
∗
(
1
−
m
)
S= 
tHp
rHp
​
 ∗m+ 
tSp
rSp
​
 ∗(1−m)
​
 
Where:

rHp is the Bitcoin hash power delegated to a validator, measured as the total number of Bitcoin blocks with that validator’s information written into their coinbase transactions;

tHp is the total hash power on Core Chain;

rSp is the amount of CORE tokens delegated by CORE holders to that validator;

tSp is the total stake on Core Chain;

m is a dynamic weighting that adjusts over time to ensure a smooth transition during ramp up;

With the implementation of staking, the new hybrid score is calculated with this equation:


Where:

rHp is the Bitcoin hash power delegated to a validator, measured as the total number of Bitcoin blocks with that validator’s information written into their coinbase transactions;

tHp is the total hash power on Core Chain;

rSp is the amount of CORE tokens delegated by CORE token holders to that validator;

tSp is the total amount of CORE tokens stake on Core Chain;

rBp is the amount of BTC tokens delegated by BTC holders to that validator;

tBp is the total amount of BTC staked on Core Chain;

m is a dynamic factor that controls the overall weights of hash power `(0<m<1)`;

n is a dynamic factor that controls the voting power of each BTC vs. each CORE token.

Second, at the end of each round validators are ranked in order of their hybrid score, and the 21 validators with the highest hybrid scores are selected for the validator set in the next round.

Leaving aside the mathematical details, this is essentially a weighted, bicameral voting procedure. Bitcoin miners can vote for validators through their PoW (by writing validator information into the coinbase transaction on blocks they’ve already mined),  CORE token holders can vote for a validator with their PoS (by delegating their tokens to it), and non-custodial bitcoin stakers can vote for a validator through the same mechanism. This delegated PoW and delegated PoS are weighted to determine the hybrid score.

This is the “core” of the Core blockchain, the mechanism by which the network leverages the security and decentralization of the Bitcoin network and the scalability and composability of Ethereum. Letting Bitcoin miners and bitcoin stakers vote on validators allows Core Chain to avail itself of Bitcoin’s legendary robustness; and because Core Chain is EVM compatible, it’s possible to build smart contracts, dApps, and other applications on Core Chain that couldn’t be done without changes to the underlying Bitcoin protocol.

Block Production
After election, all validators are sorted roughly in order of their hybrid score [5], and they take turns producing blocks in a round-robin manner before the process starts over again from the beginning. By initially limiting the number of validators to 21, Satoshi Plus offers a higher transaction rate and increased scalability, but the number of validators is expected to increase over time as the network grows. What’s more, this mechanism provides additional security through improved efficiency and a tolerance for a large number of Byzantine players. [6]

Validator Regulation
Slashing and jailing are the two basic mechanisms Core Chain uses to disincentivize validator misbehavior, and understanding how they work will go a long way towards making the incentive structure in Core Chain more comprehensible.

First, “slashing” refers to cutting either the rewards a validator would have received in exchange for mining blocks, or to slashing the deposit of CORE tokens that a node makes in order to become a validator in the first place. The severity of the slashing punishment is scaled up in proportion to the validator’s misbehavior.

Slashing penalties are generally incurred because a node fails to successfully produce a block during its designated turn in the round-robin block-mining procedure described above. If a validator node fails to mine 50 blocks in a row, the CORE token rewards the validator has accrued so far are slashed completely [7]. Think of this as being equivalent to a misdemeanor. If a validator fails to mine 150 blocks in a row, they surrender their share of the daily CORE token rewards, they lose 10% of the deposit made to become a validator, and they are jailed for three days, which means they aren’t eligible to be elected to the validator set. Think of this as being equivalent to a felony. [8]

Verifiers are responsible for reporting malicious behaviors on the network through slash suggestions. Slash suggestions can be submitted by anyone, and are designed to punish malicious actors. The submission requires evidence of wrongdoing, but if the allegations prove true, the rewards earned greatly exceed the costs.

There is a way for a validator to be permanently banned from the network, and that’s by “double signing”, i.e. signing two different blocks at an equal block height. Whereas unavailability could plausibly be the result of a bad network connection, double signing is strong evidence of willful malfeasance [9]. Validators caught double signing surrender all rewards, 100% of their validator deposit, and are thereafter barred from participating in mining blocks.

As with slash suggestions, verifiers are charged with reporting double signing, and also have to submit evidence of this activity. If their allegations are borne out, they are rewarded for keeping the network safe.

While producing blocks, the existing Core validators periodically check whether any current validator has been jailed. If so, they will update the validator set after an epoch (i.e. after 10 minutes). Jailing is designed to exclude misbehaving validators from consensus activities in order to enhance network security and keep TPS stable.

[5] Core Chain uses an algorithm to sort the validators, but those details are omitted in this whitepaper.

[6] Core Chain is secure so long as no more than one third of the validators are malicious. See Appendix A for a mathematical proof of this claim.

[7] This means it matters when a validator fails to mine 50 consecutive blocks. If they fail on the first 50 blocks of a round they surrender only a small amount of accumulated rewards, but if they fail on the last 50 blocks of the round, they surrender everything they’ve earned. 

[8] In the U.S. justice system, a misdemeanor is a relatively minor offense (like shoplifting) and a felony is an egregious offense (like executing a large-scale bank robbery).

[9] Theoretically, it is possible for benign double signing to occur, if a validator upgrades the version of the network they’re running and forgets to update their address. Make sure you’re diligent when performing network updates!