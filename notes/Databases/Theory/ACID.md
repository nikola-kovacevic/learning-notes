---
title: ACID
---

### ACID and transactions

In computer science, ACID (atomicity, consistency, isolation, durability) is a set of properties of database transactions intended to guarantee data validity despite errors, power failures, and other mishaps. In the context of databases, a sequence of database operations that satisfies the ACID properties (which can be perceived as a single logical operation on the data) is called a transaction. For example, a transfer of funds from one bank account to another, even involving multiple changes such as debiting one account and crediting another, is a single transaction.

### Characteristics of ACID

ACID stands for:

- **Atomicity** – each transaction either succeeds completely or is fully rolled back.
- **Consistency** – data written to a database must be valid according to all defined rules.
- **Isolation** – When transactions are run concurrently, they do not contend with each other, and act as if they were being run sequentially.
- **Durability** – Once a transaction has been committed to the database, it is considered permanent, even in the event of a system failure.

ACID compliance protects the integrity of your data by defining exactly what a transaction is and how it interacts with your database. It avoids database tables from becoming out-of-sync, which is super important for financial transactions. ACID compliance guarantees validity of transactions even in the face of errors, technology failures, disastrous events, and more.
