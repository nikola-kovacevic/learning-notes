---
title: Why clean code matters?
---

## Introduction

Clean code is code that other developers can easily read, understand, and add to. It’s easy to write code that just the machine will understand or code that just you understand, but that proves problematic in the long run. Write it well and you’ve got an amazing software or an app that works well and is easy to maintain. Write it poorly and you might still have a good UI design, but bugs will start popping up right and left.

Clean code principles lead to source code that's highly modular and thus easier to read and test. If you think of these practices as part of a house, clean code is the foundation.

Writing sloppy or confusing code injects technical debt into our projects. And while technical debt can be useful when carefully considered in context, excessive technical debt is depressing and drives talent away from the organization.

Writing code is relatively easy, reading and understanding is hard. This is why so many developers are tempted to rewrite rather than do the hard work of reading and comprehending existing code. Since reading code is naturally challenging, if you write code that you're barely able to follow as you write it, you'll find you're unable to comprehend it all later.

When under pressure, it's tempting to cut corners and ignore best practices. However, as Uncle Bob Martin reminds us in his book "Clean Code", we don't have time to be sloppy. Being sloppy ultimately slows us down in the long-term due to the increased frequency of bugs and the long-term costs of maintenance later. History has shown it's unlikely you'll find time to clean it up later, so why not do it right the first time?

## Core principles for writing clean code

These principles are based on Uncle Bob's book "Clean Code". I selected the ones I personally believe make the greatest difference. However, there are more rules mentioned in the book.

1. General rules
   - Follow coding conventions. They can be documented rules for teams to follow, or just be your individual coding practice.
   - Reduce complexity as much as possible. Simpler is always better.
   - When working with existing code leave the codebase cleaner than you found it.
   - Always look for and find the root cause of an issue.
2. Design rules
   - Keep configurable data at high levels.
   - Prefer polymorphism to if/else or switch/case.
   - Prevent over-configuration.
   - Use dependency injection.
   - Follow Law of Demeter (loose coupling). A class should know only its direct dependencies.
3. Understandability
   - Be consistent! If you do something a certain way, do all similar things in the same way.
   - Use explanatory variables. There is nothing worse than reading single letter variables and assuming what they do.
4. Naming
   - Choose descriptive and unambiguous names.
   - Names should be pronounceable and searchable.
   - Use named constants. Avoid using magic numbers.
   - Don't append prefixes or type information.
   - Personal rule of thumb:
     - variables should be nouns
     - methods should be verbs
     - interfaces should be adjectives (or when unable to find the adjective, they should be nouns)
5. Functions
   - Functions should be small and do one thing only. This makes them easily testable and maintainable.
   - Functions should have descriptive names
   - There should be no side effects inside functions.
   - Functions shouldn't have a lot of arguments. It is preferable to avoid flag arguments as well. We should rather split method into several independent methods that can be called without the flag.
6. Comments
   - Explain yourself in code, not in comments.
   - Comments should be added in the following situations:
     - General description of the class/method and what it does
     - Warning of consequences. Anything that is not immediately obvious from reading the code, such as obscure performance optimizations.
     - How objects and methods relate to each other, as an overall architecture.
7. Source code structure
   - Separate concepts vertically. (i.e. manage user can be separated from request a ride in Uber/Bolt/... case)
   - Related code should appear vertically dense.
   - Dependent or similar functions should be close.
   - Keep lines short.
   - Use white space to associate related things and disassociate weakly related.
   - Don't break indentation.
8. Objects and data structures
   - Hide internal structure from the client
   - Avoid hybrids structures (half object and half data).
   - Base class should know nothing about their derivatives
   - Prefer non-static methods to static methods
   - Classes/Objects, same as functions, should be small and do one thing only.
9. Tests
   - Tests should be readable, fast, independent and repeatable
   - Strive to write one assert per test
10. Code smells
    - Rigidity. The software is difficult to change. A small change causes a cascade of subsequent changes.
    - Fragility. The software breaks in many places due to a single change
    - Immobility. You cannot reuse parts of the code in other projects because of involved risks and high effort.
    - Needless Complexity.
    - Needless Repetition.
    - Opacity. The code is hard to understand.

## How to ensure the team follows the principles

All code must be peer-reviewed. [Code reviews](Git%20Usage/Enhance-Git-Usage) should be done through pull requests of feature branches. Nothing can be merged into the main branch without approval. Pull requests must pass a series of build checks as well, including the passing of all tests.

Pair programming is helpful mechanism on large implementations or when making important design decisions at a low level.

Team should share a responsibility of tracking needed improvements and technical debt, and prioritize a percentage of the work in each sprint to continue to enhance code over time. It’s important to carve out time in product development process to make code improvements an ongoing habit.

Invest and integrate various tooling in the coding and pipeline process. Tooling such as linting, git hooks, a static code analysis tool (i.e. [SonarQube](https://www.sonarqube.org/)). By utilizing these tools we can identify certain code smells and security vulnerabilities.

Nothing that is mentioned above won't work without the culture of the team. Team members should have open minds and be receptive to feedback, making it easier to collaborate.

### Resources

- [Clean Code: A Handbook of Agile Software Craftsmanship](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [Clean Code: Writing Code for Humans](https://www.pluralsight.com/courses/writing-clean-code-humans)
