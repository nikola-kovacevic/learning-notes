---
title: Document database
---

## Introduction

A document database is, at its core, a key/value store where the value is in a known format. A document database requires that the data will be store in a format that the database can understand. The format can be XML, JSON, Binary JSON (BSON), or just about anything, as long as the database can understand the document internal structure. In practice, most document databases uses JSON (or BSON) or XML.

Document database is schema free, we don’t have to define the schema ahead of time and adhere to that. This allows us to store arbitrarily complex data. A document database doesn’t support relations, which means that each document is independent. That makes it much easier to shard the database than it would be in a relational database, because we don’t need to either store all relations on the same shard or support distributed joins. When using a relational database, we are instructed to think in terms of Aggregates and always go through an aggregate.

## How are things handled from a developer perspective?

- **Concurrency** is only applicable on a single document, and it is usually offered as optimistic writes. For document databases that also have replication support, we have to deal with the same potential conflicts that arise when using eventual consistency [key/value store](Key-Value-Stores)
- Defining characteristic of a document-oriented database is that, beyond the simple key-to-document lookup that can be used to retrieve a document, the database offers an API or **query** language that allows the user to retrieve documents based on content (or metadata).
- Most document databases offer **transaction** support for the a single document. Some support multi document (and multi node) transactions, but even so, it isn’t recommended for common use, because of the potential for issues when using distributed transactions.
- Document databases doesn’t have a **schema** per-se, you can store any sort of document inside them. The only limitation is that the document must be in a format that the database understands.
- The common approach for **scaling** a document store is using sharding. Since each document is independent, document databases lends themselves easily to sharding. Usually sharding is combined with **replication** support to handle fail over in case of node failure, but that is about as complex as it gets.

### Resources

- RavenDB Mythology Documentation, book by Oren Eini
