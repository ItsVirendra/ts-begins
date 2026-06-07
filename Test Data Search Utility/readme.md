# Task: Test Data Search Utility

1. Objective

Build a small TypeScript utility that stores test users and allows searching for users by email.

You will implement a function that returns a user if found, otherwise returns undefined.

1. Real-world relevance

In automation projects, you often need to:

Find test accounts
Retrieve environment-specific users
Fetch test data before running a test

This task mimics a very common helper utility used in Playwright frameworks.

1. Task requirements

Create a user dataset containing at least 5 users.

Each user must have:

id
name
email
role

Create a function:

findUserByEmail(email: string): User | undefined

Requirements:

A. Exact Match Search

Search the array and return:

User

when email exists.

Otherwise return:

undefined
B. Role Filter

Create another function:

getUsersByRole(role: string): User[]

Return all matching users.

Example:

getUsersByRole("admin")

should return every admin user.

C. User Summary

Create a function:

printUserSummary(): void

Output something similar to:

Total users: 5

John - admin
Sarah - tester
Mike - admin
...

Use a loop.

D. Test the Functions

Call all functions and log results.

Example:

findUserByEmail("<john@test.com>")
findUserByEmail("<missing@test.com>")

getUsersByRole("admin")

printUserSummary()
4. Suggested folder/file structure
src/

├─ types/
│  └─ user.types.ts

├─ data/
│  └─ users.ts

├─ managers/
│  └─ userManager.ts

└─ index.ts
5. Expected TypeScript concepts

Already practiced:

Interfaces
Typed arrays
Import/export
Functions
Loops
Union return types

New concepts introduced:

1. Array.find()

Example:

users.find(...)
2. Array.filter()

Example:

users.filter(...)

These are used constantly in Playwright utilities and test-data helpers.

1. One small extension challenge

After the main task works:

Create:

countUsersByRole(role: string): number

Example:

countUsersByRole("admin")

returns:

2

Do not use filter().length.

Use a loop and count manually.

1. Estimated completion time

45–60 minutes

Important constraint

Do not Google solutions for find() and filter() immediately.

Read the TypeScript autocomplete/tooltips, try an implementation, run it, observe errors, and iterate.

That struggle is where the learning happens.
