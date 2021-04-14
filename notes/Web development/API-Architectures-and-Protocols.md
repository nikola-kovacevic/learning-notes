---
title: API Architectures and Protocols
---

## Introduction

An API protocol defines the rules for API calls: it specifies accepted data types and commands. Different API architectures specify different protocol constraints.

## SOAP

SOAP (simple object access protocol) is intended to be extensible, neutral (able to operate over a range of communication protocols, including HTTP, SMTP, TCP and more), and independent

The SOAP specification includes:

- **The processing model**: how to process a SOAP message.
- **Extensibility model**: SOAP features and modules.
- **Protocol binding rules**: how to use SOAP with an underlying protocol, such as HTTP.
- **Message construct**: how to structure a SOAP message.

## REST

REST (representational state transfer) is a very popular web API architecture. REST API must adhere to following architectural constraints/principles:

- **Client-server architecture**: the interface is separated from the backend and data storage. This allows for flexibility, and for different components to evolve independent of each other.
- **Statelessness**: no client context is stored on the server between requests.
- **Cacheability**: clients can cache responses, so a REST API response must explicitly state whether it can be cached or not.
- **Layered system**: the API will work whether it is communicating directly with a server, or through an intermediary such as a load balancer.

## RPC

An RPC is a remote procedural call protocol. XML-RPC uses XML to encode its calls, while JSON-RPC uses JSON for the encoding. Both protocols are simple. A call can contain multiple parameters, and expects one result. They have a couple of key features, which require a different architecture to REST:

- **Designed to call methods**, whereas REST protocols involve the transfer of documents (resource representations). Or, to put it another way, REST works with resources, whereas RPC is about actions.
- The **URI identifies the server**, but contains no information in its parameters, whereas in REST the URI contains details such as query parameters.

## GraphQL

GraphQL is the modern way to create flexible, robust, and strictly-typed APIs. It allows clients to define the structure of the data required, and the same structure of the data is returned from the server, therefore preventing excessively large amounts of data from being returned, but this has implications for how effective web caching of query results can be.

GraphQL architecture consists of:

- **type system**, **query language** and **execution semantics**, **static validation**, and **type introspection**.
- GraphQL supports reading, writing (mutating), and subscribing to changes to data (most commonly implemented using Websockets).
