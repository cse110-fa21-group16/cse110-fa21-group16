# Decision on which storage method to use for our app.

* Status: accepted <!-- optional -->
* Deciders: All team members and TA <!-- optional -->
* Date: 2021-10-31 <!-- optional -->

## Context and Problem Statement

We were unsure about whether or not we would need a server-side or local database for this application.

## Decision Drivers <!-- optional -->

* A server-side database can will allow users to always be updated and interact with each other
* A local storage will speed up development process with its simplicity

## Considered Options

* Local storage
* IndexedDb
* PostgreSQL
* Firebase

## Decision Outcome

Chosen option: Local Storage to avoid complications in hosting a database server.

### Positive Consequences <!-- optional -->

* Simplicity

### Negative Consequences <!-- optional -->

* Scaling?
* Does not support connection between users

## Pros and Cons of the Options <!-- optional -->

### Server side database

* Good, because multi-users support
* Bad, because more complicated to set up given the time constraint

### Local storage

* Good, because easy to use and quick to set up
* Bad, because doesn't have multi-users support (interaction done locally)
