---
title: BASE model
---

## Introduction

The rise of NoSQL databases provided a flexible and fluid way to manipulate data. As a result, a new database model was designed, reflecting these properties.

BASE provides less assurance than [ACID](./ACID.md), but it scales very well and reacts well to rapid data changes. BASE construction has three properties:

BASE stands for:

- **Basically Available** – Rather than enforcing immediate consistency, BASE-modelled NoSQL databases will ensure availability of data by spreading and replicating it across the nodes of the database cluster. This means that the system is guaranteed to be available in event of failure.

- **Soft State** – Due to the lack of immediate consistency, data values may change over time. The BASE model breaks off with the concept of a database which enforces its own consistency, delegating that responsibility to developers.

- **Eventually Consistent** – The fact that BASE does not enforce immediate consistency does not mean that it never achieves it. However, until it does, data reads are still possible (even though they might not reflect the reality).
  - In any system where we have more than one machine processing read requests, and while processing a read request the machine can’t contact other machines – the best we can hope for is eventual consistency. If high scale and very low latency are both critical, we have to build our system so that it handles eventual consistency properly.
