## Limio

Welcome to the Limio coding interview.

## Our tech stack

The Limio tech stack is always evolving as we continue to seek out the best tools for the job. Our main tech stack is:

- React with Redux (front-end of our main app & Limio Shop)
- Gatsby (Limio Shop)
- AWS Lambda with Serverless for our backend API
- Node.js for the above & our product catalog backend
- AWS DynamoDB for our main database
- Git for our product catalog storage
- AWS Cognito for our user management
- We build with Webpack
- Jest for testing
- Other AWS services for serving builds/files such as S3, Cloudfront, amongst others

And we are currently working towards introducing the following:

- React testing library to replace some of component tests
- Refactoring to use React hooks across our codebase where possible

We will continue to discuss & add new tech where we feel it would improve our products.

### Instructions

Please answer the question below (just write the answers in the spaces provided). Once the coding examples are done, please zip up your files and send them via http://wetransfer.com (GMail blocks ZIP attachments).

We can then discuss the changes that you have made.

### Overview

The directories contain 3 sample apps. They are based on the the tic-tac-toe react tutorial, which you can find at [https://reactjs.org/tutorial/tutorial.html].

The directories are:

| Directory      | Contents                                                                                                                                        |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| app-original   | The original app from the tutorial                                                                                                              |
| app-standalone | The same app, but re-written slightly (this has been updated to move away from class components and use functional components with React hooks) |
| app-redux      | The same app, using redux                                                                                                                       |

### Questions

Please answer the following questions:

1. Comparing the app-original and app-standalone code bases. The app-standalone code base has put each component in a separate file and directory structure.

   Why do you think that was done, what are the advantages / disadvantages?

   a. Keeping each component in a separate file makes the code look clean and is scalable. It is also easier to track the code.

2. Thinking about a production ready app, what do you think is missing from all the examples? _Hint: the square component in the standalone app has one_
   a. Test cases are missing so mew changes can break any existing functionality
   b. External config or env file is missing. For example we can put PORT_NO in the config file to avoid Port collision if another application is also running on same server.
3. Are you familiar with Redux? If so what is the basic idea behind it and what would be a good case for using it?
   No.

4. _If you are interested in the full-stack role_ Please take a look at the partial implementation of an express routes in backend/router.js.
   - Thinking of a production application, what issues do you see with this code? _List as many as you like_
     a. Authetication is missing from the API which makes them vulnerable to DDoS.
     b. MongoDB connection should be handled in a separate class so that all the routes can reuse the same code. In The current code if we create another route file we would have to copy MongoDB client connection logic there.
     c. Logger should be used instead of console.log so that we can preserve the logs and check them later for issues.
     d. No error handling for MongoDB client connection.
     e. No handling for document not found case, if we try fetch a doc which dosen't exist in Mongo the server will hang.
     f. We are not fetching any particular key from the request query. If the caller passes 100 key value pairs in the requeswt then we would pass all of them to the MongoDB document fetch call.

### Coding Challenges

With either the app-standalone or app-redux (**not both** - whichever you are comfortable with), please complete the following changes:

1. Update the app so that is highlights the winning move.
2. Update the app so that it allows for a named player X and Y, and it keeps a league table of who won each game.
3. If you get time, implement something that you think that the app could do and is cool. What other things would you change.

### Expectations

- We don't want you to spend too long on this exercise, just the necessary amount of time to show your front-end and back-end skills. We expect it to take 1.5 hours if you have React experience, longer if you have no React experience.
  - If you don't answer all questions, that is fine. We prefer depth on a few questions rather than superficial answers.
- Some testing, but not extensive. Have at least one test case, so that we know you can do it.
  - You'll notice the example code doesn't have much testing. It should.
- Clean, concise code. Comments are appreciated.
- Knowledge of up to date React features e.g. Hooks.
