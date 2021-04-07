---
title: Graph Database
---

## Introduction

Graph databases are designed for data whose relations are well represented as a graph consisting of elements connected by a finite number of relations. Examples of data include social relations, public transport links, road maps, network topologies, etc.

We should think about a graph database as a document database, with a special type of documents, relations. Relations in a graph database are more than just a pointer. A relation can be unidirectional or bidirectional, but more importantly, a relation is typed, I may be associated to you in several ways, you may be a client, family or my alter ego. Graph database has additional quality that makes them very useful - they allow us to perform graph operations (i.e. graph traversal).

To summarize graph databases consist of three elements: vertices, edges and properties. **Vertices** are objects, such as people or artifacts. **Edges** define the relationships between nodes. Vertices, edges and properties can have properties. The **properties** for all elements are an important element of storing and querying information from a property graph.

## When to use a graph database

Graph databases are commonly used to solve network problems. Because graph databases are intentionally designed to make sure that graph traversal is cheap, they also provide other operations that tend to be very expensive without it. For example, Shortest Path between two nodes. That turn out to be frequently useful when you want to do things like: Who can recommend me to this company’s CTO so they would hire me.

<div class="text--center">

![Graph database with seven nodes and eight relationships](./graph-database.jpeg "Graph databases are commonly used to solve network problems.")

</div>

One problem with scaling graph databases is that it is very hard to find an independent sub graph, which means that it is very hard to shard graph databases.

### Resources

- RavenDB Mythology Documentation, book by Oren Eini
