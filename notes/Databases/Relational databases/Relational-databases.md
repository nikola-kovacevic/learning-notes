---
title: Relational databases
---

### Relational Database

A relational database refers to a database that stores data in a structured format, using rows and columns. This makes it easy to locate and access specific values within the database. It is relational because the values within each table are related to each other. Tables may also be related to other tables. The relational data structure makes it possible to run queries across multiple tables at once.

Relational Databases have the following properties:

- [ACID (Atomic, Consistent, Isolated, Durable)](../Theory/ACID)
- Relational (based on relation algebra and the work by Edgar Codd "A Relational Model of Data for Large Shared Data Banks")
- Table / Row based
- Rich querying capabilities
- Foreign keys
- Schema

### What is SQL?

SQL is a popular programming language that has been around for over 45 years, so it’s extremely mature and well-known. It efficiently executes queries and retrieves and edits data quickly. It’s very lightweight and declarative, and thus it is easy to learn. Main benefit is that the queries can be run by less technical staff like business analysts and marketers.

### When to use relational databases?

If our data is primarily structured and clearly defined, a relational database is likely the right choice.

A relational database is a great fit for transaction-oriented systems such as customer relationship management tools, accounting software, and e-commerce platforms. Each row in a SQL database is a distinct entity (e.g. a customer), and each column is an attribute that describes that entity (e.g. address, job title, item purchased, etc.).

If our data is very structured and [ACID compliance](../Theory/ACID) is a must, SQL is a great choice.

### When to move away?

The most common reason to want to move from a RDBMS (Relational Database Management System) is running into the RDBMS limitations. In short, RDBMS cannot be made to scale (scaling a database instance across a large number of machines). It is certainly possible to scale RDBMS solutions, but the typical approach is by breaking the data store to independent nodes (sharding), which means that things like cross node joins are no longer possible.

The problem is inherit into the basic requirements of the relational database system, it must be consistent, to handle things like foreign keys, maintain relations over the entire data set, etc. The problem is that trying to scale a relational database over a set of machines. At that point, we run head on into the [CAP theorem](../Theory/CAP-Theorem), which state that we can have only two of the Consistency, Availability and Partition Tolerance triad. Hence, if consistency is our absolute requirement, we need to give up on either availability or partition tolerance.

In most high scaling environments, it is not feasible to give up on either option, we have to give up on consistency. But RDBMS will not allow that so relational databases are out. This leaves two options:

- Use an RDBMS, but instead of having a single instance across multiple nodes, treat each instance as an independent data store. This approach is called sharding. The problem with this approach is that we lose a lot of the capabilities that RDBMS brings to the table (i.e. we can’t join between nodes).
- use [NoSQL solutions](../NoSQL/NoSQL)

### Resources

- RavenDB Mythology Documentation, book by Oren Eini
