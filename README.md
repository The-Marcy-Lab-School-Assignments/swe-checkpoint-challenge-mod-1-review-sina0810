# Mod 2.5 Assessment: Functions, Scope, Objects, and Iterators

- [Assessment Overview](#assessment-overview)
- [Setup](#setup)
- [Short Response Questions](#short-response-questions)
- [Coding Problems](#coding-problems)
  - [1 - createSlug](#1---createslug)
  - [2 - User Profile CRUD Operations](#2---user-profile-crud-operations)
    - [Create](#create)
    - [Update](#update)
    - [Delete](#delete)
    - [Read](#read)
    - [Copy (BONUS)](#copy-bonus)
  - [3 - Movie Analysis](#3---movie-analysis)

## Assessment Overview

This assessment is designed to be completed in approximately **2 hours**:
- **Short Response:** ~1 hour (3 prompts, ~20 minutes each)
- **Coding Problems:** ~1 hour (3 problems, ~20 minutes each)

You will be assessed on your understanding of:
- Functions and scope
- String and array manipulation
- Objects and reference types
- Higher-order array methods

## Setup

For guidance on setting up and submitting this assessment, refer to the Marcy Lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/how-tos/working-with-assignments#how-to-work-on-assignments).

Here are some useful commands to remember.

```sh
git checkout -b draft   # switch to the draft branch before starting

git add -A              # add a changed file to the staging area
git commit -m 'message' # create a commit with the changes
git push                # push the new commit to the remote repo
```

When you are finished, create a pull request and tag your instructor for review.

## Short Response Questions

Short response questions can be found in the `src/short-response.md` file. Write your responses directly in that file! Do not forget to complete this part of the assessment.

## Coding Problems

Run `npm install` to install dependencies, then run `npm test` to check your solutions against the test cases.

### 1 - createSlug

A "slug" is a URL-friendly version of a string, typically used for blog posts or articles. For example, a blog titled "JavaScript for Newbies" might have a slug created for the URL that looks like `"javascript-for-newbies"`.

In the `1-create-slug.js` file, write a function called `createSlug(title)` that creates a URL-friendly "slug" from a title.

The "slug" should:
- Be converted to all lowercase
- Have hyphens (`-`) instead of spaces
- Return `null` if the title includes any banned characters: `"!"`, `"#"`, `"?"`

Example Usage:
```js
console.log(createSlug("Hello World")); // "hello-world"
console.log(createSlug("My First Blog Post")); // "my-first-blog-post"
console.log(createSlug("JavaScript Is AWESOME")); // "javascript-is-awesome"
console.log(createSlug("JavaScript Is #AWESOME!?")); // null
```

### 2 - User Profile CRUD Operations

In the `2-user-profile.js` file, you will write functions to perform the core CRUD (Create, Read, Update, Delete) operations on user profile objects plus one bonus function.

#### Create

Write a function `createUser(username, email)` that returns a new user object with:
- The provided `username` and `email`
- `isActive` set to `true`
- `loginCount` set to `0`

Example Usage:
```js
const user1 = createUser("coder123", "coder@example.com");
console.log(user1);
// { username: 'coder123', email: 'coder@example.com', isActive: true, loginCount: 0 }
```

#### Update 

Write a function `incrementLogin(user)` that:
- Increases the user's `loginCount` by 1

Example Usage:

```js
incrementLogin(user1);
incrementLogin(user1);
console.log(user1.loginCount); // 2
```

#### Delete 

Write a function `deactivateUser(user)` that:
- Sets `isActive` to `false`
- Deletes the `email` property
- Returns the updated user object

Example Usage:

```js
deactivateUser(user1);
console.log(user1.isActive); // false
console.log(user1.email); // undefined
```

#### Read 

Write a function `printUserInfo(user)` that prints each property and its value in this format:
```
username: coder123
email: coder@example.com
isActive: true
loginCount: 0
```

Example Usage:

```js
printUserInfo(user1);
// username: coder123
// email: coder@example.com
// isActive: true
// loginCount: 0
```

#### Copy (BONUS)

Write a function `cloneUser(user)` that:
- Returns a TRUE COPY of the user object (not a reference)
- Modifying the clone should NOT affect the original

Example Usage:
```js
const user2 = createUser("newuser", "new@example.com");
const user2Copy = cloneUser(user2);
user2Copy.username = "changedname";
console.log(user2.username); // "newuser" (original unchanged)
console.log(user2Copy.username); // "changedname"
```

### 3 - Movie Analysis

In the `3-movie-analysis.js` file, you are given an array of movie objects. Use the higher-order array methods to complete each task.

```js
const movies = [
  { title: "Black Panther", year: 2018, rating: 7.3, genre: "Action", boxOffice: 1347 },
  { title: "Get Out", year: 2017, rating: 7.7, genre: "Horror", boxOffice: 255 },
  { title: "Spider-Man: Into the Spider-Verse", year: 2018, rating: 8.4, genre: "Animation", boxOffice: 384 },
  { title: "Moonlight", year: 2016, rating: 7.4, genre: "Drama", boxOffice: 65 },
  { title: "Us", year: 2019, rating: 6.8, genre: "Horror", boxOffice: 255 },
  { title: "Creed", year: 2015, rating: 7.6, genre: "Drama", boxOffice: 173 }
];
```

**Part A:** Create a function called `getBlockbusters` that returns an array containing only movies with box office earnings over $300 million.

**Part B:** Create a function called `getMovieTitles` that returns an array containing just the titles of all movies.

**Part C:** Create a function called `getTotalBoxOffice` that returns the total box office earnings across all movies.

**Part D:** Create a function called `getRecentMovieTitles` that returns an array of the titles of all movies made in 2018 or later.
