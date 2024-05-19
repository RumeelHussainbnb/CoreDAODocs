---
sidebar_label: Archive Node Configuration
hide_table_of_contents: false
sidebar_position: 2
---

# Archive Node Configuration
---

Archive nodes in the Core network play a crucial role in maintaining the complete historical state of the network. These nodes are specialized versions of full nodes with enhanced capabilities tailored to storing and providing access to the entire history of all transactions and states since the inception of the Core Chain.  

## System Requirements

There are several system requirements, both software and hardware, for setting up a Archive node on the Core network.

### Software

* Currently, a Core archive node can only run on **Mac OS X** or on the **Linux** operating systems.

### Hardware

Core nodes perform several resource-intensive tasks, which can include storing blockchain data, verifying blocks or transactions, communicating with peer nodes, and answering network requests, depending on their configuration. Each type of Core node has specific hardware requirements based on their expected needs.

#### Testnet Archive Node Hardware Specifications

For Archive Nodes on **Core testnet**, we recommend the following minimal hardware specs:

| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| Storage        | Solid State Drive (SSD) with a minimum capacity of 4TB                                                  |
| CPU            | 8 Core CPU                                                                                              |
| RAM            | 32 Gigabytes                                                                                            |
| Internet Speed | A broadband Internet connection with upload/download speeds of 5Mbps                                    |


#### Mainnet Archive Node Hardware Specifications

For Archive Nodes on **Core mainnet**, we recommend the following minimal hardware specs:


| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| Storage        | Solid State Drive (SSD) with a minimum capacity of 4TB                                                  |
| CPU            | 8 Core CPU                                                                                              |
| RAM            | 32 Gigabytes                                                                                            |
| Internet Speed | A broadband Internet connection with upload/download speeds of 5Mbps                                    |


## Running Core Archive Node
1\. We recommend using the [core-chain](https://github.com/coredao-org/core-chain) GitHub repository to directly build and run your full node, running your full node directly from our blockchain codebase. Instructions for building the source code can be found in the repository's [README](https://github.com/coredao-org/core-chain#building-the-source).

2\. Download the node binary from the [Snapshot Repository](https://github.com/coredao-org/core-snapshots?tab=readme-ov-file#archive-full) for the Archive Node. The node binary includes the relevant mainnet and testnet configuration files. 

3\. Write the genesis state locally by executing the following command from your project directory:

```bash
geth --datadir node init genesis.json
```

You should see the following output:

```bash
INFO [07-18|14:57:20.715] Maximum peer count                       ETH=25 LES=0 total=25
INFO [07-18|14:57:20.721] Allocated cache and file handles         database=/Users/jackcrypto/go/core-chain/node/geth/chaindata cache=16 handles=16
INFO [07-18|14:57:20.724] Writing custom genesis block 
INFO [07-18|14:57:20.725] Persisted trie from memory database      nodes=25 size=87.18kB time=226.129µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [07-18|14:57:20.725] Successfully wrote genesis state         database=chaindata                             hash=d90508…5c034a
INFO [07-18|14:57:20.725] Allocated cache and file handles         database=/Users/jackcrypto/go/core-chain/node/geth/lightchaindata cache=16 handles=16
INFO [07-18|14:57:20.729] Writing custom genesis block 
INFO [07-18|14:57:20.729] Persisted trie from memory database      nodes=25 size=87.18kB time=178.332µs gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
INFO [07-18|14:57:20.730] Successfully wrote genesis state         database=lightchaindata                             hash=d90508…5c034a
```

4\. Our full node is ready, let's start running it! You can just run the following `geth` command directly:

```bash
## start a full node
geth --config ./config.toml --datadir ./node  --cache 8000
```

5\. As our full/archive node runs, we can monitor its logs to make sure that everything is operating correctly. The log file is located at `/node/logs/core.log` by default, but can be changed to another location if desired.
