---
title: GraphQL API
---

## Introduction

A GraphQL server provides a client with a predefined schema – a model of the data that can be requested from the server. The schema serves as a middle ground between the client and the server while defining how to access the data.

Written down in Schema Definition Language (SDL), basic components of a GraphQL schema – types – describe kinds of object that can be queried on that server and the fields they have. The schema defines what queries are allowed to be made, what types of data can be fetched, and the relationships between these types.

Having the schema before querying, a client can validate their query against it to make sure the server will be able to respond to the query. While the shape of a GraphQL query closely matches the result, you can predict what will be returned.

Once a GraphQL operation reaches the backend application, it’s interpreted against the entire schema there, and resolved with data for the frontend application.

Based on the graph data modeling with the schema at its core, GraphQL has three primary operations:

1. Query for reading data
2. Mutation for writing data
3. Subscription for receiving real-time data over time.

## Benefits of GraphQL

GraphQL is a good fit for **complex systems and microservices**. By integrating multiple systems behind its API, GraphQL unifies them and hides their complexity. The GraphQL server is then responsible for fetching the data from the existing systems and packaging it up in the GraphQL response format.

This is particularly relevant for legacy infrastructures or third-party APIs that have expanded over the years and now present a maintenance burden.

The main difference between GraphQL and REST is that the latter is centered around individual endpoints, so to collect all needed data, a developer has to combine multiple endpoints. Whereas GraphQL focuses on the task itself, in this case, a developer can **request the needed data with just one API call**.

With GraphQL there is **no problem of over- or under-fetching resources** by fetching the exact data in a single request. GraphQL API enables developers to tailor the request to get the information they need.

## Architectural Constraints

GraphQL and REST both retrieve resources by sending queries, can return JSON data in the request, and be operated over HTTP. Also, REST endpoints are similar to GraphQL fields, as they are entry points into the data that call functions on the server.

However, notable differences start with the conceptual models: While REST is made up of files, GraphQL is constructed of graphs. Further, we’ll talk about how GraphQL differs from REST, and how it changes the developer experience of building and consuming an API.

### Typically served via single endpoint

GraphQL is typically served over HTTP via a single endpoint which expresses the full set of capabilities of the service. While GraphQL could be used alongside a suite of resource URLs, this can make it harder to use with tools like GraphiQL.

### Avoids versioning

While there's nothing that prevents a GraphQL service from being versioned just like any other REST API, GraphQL takes a strong opinion on avoiding versioning by providing the tools for the continuous evolution of a GraphQL schema.

### Nullable by default

In a GraphQL type system, every field is nullable by default. This is because there are many things that can go awry. Beyond system failures, authorization can often be granular, where individual fields within a request can have different authorization rules.

By defaulting every field to nullable, any of these reasons may result in just that field returned "null" rather than having a complete failure for the request. Instead, GraphQL provides non-null variants of types which make a guarantee to clients that if requested, the field will never return "null". Instead, if an error occurs, the previous parent field will be "null" instead.

### Caching

GraphQL doesn’t follow the HTTP specification for caching and instead uses a single endpoint. It is then up to the developer to ensure caching is implemented correctly for non-mutable queries that can be cached. The correct key has to be used for the cache which may include inspecting the body contents. While we can use tools that understands GraphQL semantics, they still doesn’t cover things like browser and mobile caching.

### Exposed for arbitrary requests

Main benefit of GraphQL is to enable clients to query for just the data they need, this can also be problematic especially for open APIs where an organization cannot control 3rd party client query behavior. As the API is then exposed, great care has to be taken to ensure GraphQL queries don’t result in expensive join queries that can bring down server performance or even DDoS the server.

### Diminishes shared nothing architecture

Unlike [RESTful APIs](REST-API) that complement shared nothing architecture, GraphQL diminishes shared nothing architecture. In example you could have two REST endpoints that look alike connecting to two different REST resources. Internally though, they could point to two different services on isolated compute clusters. One service could be written in Java and the other in NodeJS. The complexity in routing HTTP requests via host or URL is much lower than inspecting a GraphQL query and performing multiple joins.

### Rigid GraphQL queries

Rigid GraphQL queries remove the ability for custom domain specific language query or side effect operations on top of an API. For example, the Elasticsearch API is RESTful, but also has a very powerful Elasticsearch DSL to perform advanced aggregations and metric calculations. Such aggregation queries may be harder to model within the GraphQL language.

### Resources

- [GraphQL Best Practices](https://graphql.org/learn/best-practices/)
- [GraphQL: Core Features, Architecture, Pros and Cons](https://www.altexsoft.com/blog/engineering/graphql-core-features-architecture-pros-and-cons/)
- [Shopify/graphql-design-tutorial](https://github.com/Shopify/graphql-design-tutorial/blob/master/TUTORIAL.md)
