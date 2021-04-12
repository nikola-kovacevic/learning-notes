---
title: Enhance Git usage
---

## Introduction

Git is a very powerful and flexible change management tool. By design you get a tool that will let you do virtually anything you want. Git will accommodate any variety of workflows, branching strategies, naming conventions and even hooks.

## Enhance Git usage

There’s no right way to use Git, but there are a lot of ways to use Git inefficiently. Below are some core practices that should enhance our Git usage:

- **Commit early, commit often** - basic idea behind this is to commit as soon as we have a small incremental change to the codebase ready.
- **Meaningful commit messages using a semantic style** - Commit message should talk about WHAT changed, and WHY. Not HOW – how is the diff, and you don’t need to repeat it. By following a rigid commit message format you’ll never again be tempted to include a bug fix and a feature in the same commit. Idea is to have a git log that is an easy-to-skim changelog. Read this for a semantic guide - [Semantic commit messages](https://sparkbox.com/foundry/semantic_commit_messages).
- **Changes should be atomic** - Changes being committed should be as minimal as possible, and they should also be related. The idea behind this is so that if you need to roll back to a previous commit, you are rolling back incrementally and not in huge swaths of changes and hours of work.
- **Push your code to a remote** - Pushing your work to a remote repository prevents you from losing your work. It also promotes the transparency in your work, and opens you for early feedback.
- **Never rewrite shared history** - Since Git already gives you the ability to checkout any previous commit, it makes sense to not alter any of your past commits so you can use any of them as a point of reference in the future.

## How to structure pull requests?

Pull requests lets us tell others about changes we've pushed to a branch in a repository. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.

Reviewer has a responsibility to make sure that the code is correct and of high quality before it gets merged into the main branch. Reviewers achieve this by looking at a diff and list of files changed. They have to understand what the pull request is trying to achieve, what approach is being taken, what’s going on, and how all these files fit together.

Making **smaller pull requests** is the best way to speed up the review time. Because the PR is small, it’s easier for the reviewers to understand the context and reason with the logic.

Having a **[PR template](Pull-Request-Template) and writing a useful description** in the details section of the pull request can almost be as effective as making a smaller pull request. The idea is to guide the reviewer through the code as much as possible, highlighting related files and grouping them into concepts or problems that are being solved.

**Screenshots** simply make the job for the reviewer much easier. It’s easier to reason about front-end changes when you can visually see what’s been changed in the pull request. You could go as far as adding a GIF or video of you using the feature to add some extra validation for your UI changes.

### Resources

- [Medium - Check Out These 5 Git Tips Before Your Next Commit](https://medium.com/walmartglobaltech/check-out-these-5-git-tips-before-your-next-commit-c1c7a5ae34d1)
- [The (written) unwritten guide to pull requests](https://www.atlassian.com/blog/git/written-unwritten-guide-pull-requests)
- [Open source PR template generator](https://www.talater.com/open-source-templates/#/page/77)
- [Personal PR template](Pull-Request-Template)
