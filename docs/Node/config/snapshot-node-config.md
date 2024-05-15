---
sidebar_label: Snapshot Node Configuration
hide_table_of_contents: false
sidebar_position: 2
---

# Snapshot Node Configuration
---
Snapshots are important for a network to ensure nodes are able to sync up to the latest state of the network as quickly as possible. Before nodes can be used, they must sync up to the current state of the network, by starting from a recent snapshot these nodes can fast-track a majority of the syncing.

## System Requirements

There are several system requirements, both software and hardware, for setting up a snapshot node on the Core network.

### Software

* Currently, a Core Snapshot Node can only run on **Mac OS X** or on the **Linux** operating systems.

### Hardware

Core nodes perform several resource-intensive tasks, which can include storing blockchain data, verifying blocks or transactions, communicating with peer nodes, and answering network requests, depending on their configuration. Each type of Core node has specific hardware requirements based on their expected needs.

#### Testnet Snapshot Node Hardware Specifications

For Snapshot Nodes on **Core testnet**, we recommend the following minimal hardware specs:

| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| Storage        | Solid State Drive (SSD) with a minimum capacity of 1TB                                                  |
| CPU            | 4 CPU cores                                                                                             |
| RAM            | 16 Gigabytes                                                                                            |
| Internet Speed | A broadband Internet connection with upload/download speeds of 5Mbps                                    |


#### Mainnet Snapshot Node Hardware Specifications

For Sanpshot Nodes on **Core mainnet**, we recommend the following minimal hardware specs:

| Requirements   | Details                                                                                                 |  
|----------------|---------------------------------------------------------------------------------------------------------|
| Storage        | Solid State Drive (SSD) with a minimum capacity of 1TB                                                  |
| CPU            | 4 CPU cores                                                                                             |
| RAM            | 16 Gigabytes                                                                                            |
| Internet Speed | A broadband Internet connection with upload/download speeds of 5Mbps                                    |


## Snapshot

You can get the latest snapshots from [here](https://github.com/coredao-org/core-snapshots).