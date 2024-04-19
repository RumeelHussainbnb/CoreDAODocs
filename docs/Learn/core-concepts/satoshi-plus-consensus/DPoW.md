---
sidebar_label: Delegated Proof of Work
hide_table_of_contents: false
sidebar_position: 2
---


validators are chosen on the basis of a hybrid score, and the hybrid score is calculated from both Delegated Proof of Work (DPoW) and Delegated Proof of Stake (DPoS). This section covers the DPoW side of the equation.

Bitcoin miners generate hash power to secure the Bitcoin network, validate transactions, and earn BTC rewards. In order to even their rewards out over time, Bitcoin miners often contribute their hash power to mining pools, which use the aggregated hash power to increase the pool’s overall chances of mining a Bitcoin block and receiving BTC in return.

When a Bitcoin miner wishes to delegate PoW to the Core network, they add data to the op return field in the coinbase transaction specifying which Core validator they want to delegate to and where they want their CORE rewards to go. This is done as a Bitcoin block is being mined, so the miners don’t face an alternative between securing the Bitcoin network and securing the Core network.

The Bitcoin block headers make their way to Core Chain through Core Chain’s relayers. Each relayer runs an on-chain light client (or utilizes a similar, existing service) which syncs the blocks mined by the Bitcoin mining pool with the Core network. During a 1-day round, the Core network calculates the DPoW for each validator by counting the number of blocks the miners delegated to each validator one week prior. If the round occurs on a Thursday, for example, Core will tabulate the hash power delegated to each validator by counting blocks from last Thursday.

The architecture for this cross-chain communication is illustrated in the diagram below.