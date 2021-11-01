# Decision on which storage method to use for our app.

* Status: {proposed | rejected | accepted | deprecated } <!-- optional -->
* Deciders: {list everyone involved in the decision} <!-- optional -->
* Date: 2021-10-31 <!-- optional -->

## Context and Problem Statement

{Describe the context and problem statement, e.g., in free form using two to three sentences. You may want to articulate the problem in form of a question.}

## Decision Drivers <!-- optional -->

* {driver 1, e.g., a force, facing concern, …}
* {driver 2, e.g., a force, facing concern, …}
* … <!-- numbers of drivers can vary -->

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

### {option 1}

{example | description | pointer to more information | …} <!-- optional -->

* Good, because {argument a}
* Good, because {argument b}
* Bad, because {argument c}
* … <!-- numbers of pros and cons can vary -->

### {option 2}

{example | description | pointer to more information | …} <!-- optional -->

* Good, because {argument a}
* Good, because {argument b}
* Bad, because {argument c}
* … <!-- numbers of pros and cons can vary -->

### {option 3}

{example | description | pointer to more information | …} <!-- optional -->

* Good, because {argument a}
* Good, because {argument b}
* Bad, because {argument c}
* … <!-- numbers of pros and cons can vary -->

## Links <!-- optional -->

* {Link type} {Link to ADR} <!-- example: Refined by [ADR-0005](0005-example.md) -->
* … <!-- numbers of links can vary -->