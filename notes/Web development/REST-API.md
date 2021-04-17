---
title: REST API
---

## Introduction

REST APIs are one of the most common kinds of web services available today. They allow various clients including browser apps to communicate with a server via the REST API.

Therefore, it’s very important to design REST APIs properly so that we won’t run into problems down the road. We have to take into account security, performance, and ease of use for API consumers.

Otherwise, we create problems for clients that use our APIs, which isn’t pleasant and detracts people from using our API. If we don’t follow commonly accepted conventions, then we confuse the maintainers of the API and the clients that use them since it’s different from what everyone expects.

## Architectural Constraints

### Uniform interface

A resource in the system should have only one logical URI, and that should provide a way to fetch related or additional data. It’s always better to synonymize a resource with a web page.

Any single resource should not be too large and contain each and everything in its representation. Whenever relevant, a resource should contain links ([HATEOAS](https://en.wikipedia.org/wiki/HATEOAS#:~:text=Hypermedia%20as%20the%20Engine%20of,provide%20information%20dynamically%20through%20hypermedia.)) pointing to relative URIs to fetch related information.

### Client–server

Client application and server application must be able to evolve separately without any dependency on each other. A client should know only resource URIs, and that’s all. We can achieve this by versioning our APIs. Servers and clients could be replaced and developed independently, as long as the interface between them is not altered.

We should have different versions of API if we’re making any changes to them that may break clients. The versioning can be done according to semantic version (for example, 2.0.6 to indicate major version 2 and the sixth patch) like most apps do nowadays.

### Statelessness

All client-server interactions must be stateless. The server will not store anything about the latest HTTP request the client made. It will treat every request as new.

If the client application needs to be a stateful application for the end-user, where user logs in once and do other authorized operations after that, then each request from the client should contain all the information necessary to service the request – including authentication and authorization details (JWT token or a similar approach).

### Cacheable

Well-managed caching partially or completely eliminates some client-server interactions, further improving scalability and performance.

In REST, caching shall be applied to resources when applicable, and then these resources MUST declare themselves cacheable. Caching can be implemented on the server or client-side.

### Layered system

REST allows us to have a layered system architecture where we deploy the APIs on multiple servers, and store data on another. A client cannot ordinarily tell whether it is connected directly to the end server or an intermediary along the way.

## Best practices

Here are some ways that show how to design REST APIs to be easy to understand for anyone consuming them, future-proof, and secure and fast since they serve data to clients that may be confidential.

1. Accept and respond with JSON
2. Use nouns in endpoint paths (method is a verb that declares action)
3. Name collections with plural nouns
4. Nested resources endpoints should be appended on the parent resource endpoint (i.e. _/parent/:id/nested-resource_)
5. Errors must be handled gracefully and standard error codes should be returned
6. Implement and maintain good security practices (SSL/TLS, CORS, ...)
7. Cache data to improve performance
8. Version APIs

## CRUD operations

When designing API endpoints, there’s always the need to specify what http method to use for CRUD (Create, Read/Retrieve, Update, Delete) operations. Commonly, this is nailed down as:

- Create — **POST**
- Read/Retrieve — **GET**
- Update — **PUT/PATCH**
- Delete — **DELETE**

### Difference in PUT and PATCH

When we make a **PUT** request we are saying "PUT this resource in the database". That instruction searches through our database for the specified resource and fully replaces the content. If nothing is found, it will simply PUT the resource at the location. This means a PUT request always contains a full resource. This is necessary because, a necessary quality of PUT requests is idempotence — the quality of producing the same result even if the same request is made multiple times.

Responses to PUT requests are not cacheable. If a PUT request finds a response in a cache infrastructure, that response (cache entry) should be treated as stale.

A **PATCH** request on the other hand, is used to make changes to part of the resource. That is, it patches the resource — changing its properties. It is used to make minor updates to resources and it’s not required to be idempotent.

Since PATCH is not idempotent, failed requests should not be automatically re-attempted on the network. Also, if a PATCH request is made to a non-existent URL, it should simply fail without creating a new resource unlike PUT, which would create a new one using the payload.

### Resources

- [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [REST Architectural Constraints](https://restfulapi.net/rest-architectural-constraints/)
- [7 Rules for REST API URI Design](https://dzone.com/articles/7-rules-for-rest-api-uri-design-1)
