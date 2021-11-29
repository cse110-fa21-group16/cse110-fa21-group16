# CI/CD Pipeline - Phase 1

## New: 11/28/2021
## Workflows that we are currently using (Updated)

- Eslint (linting): 
  - Runs on pull requests.
  - We are currently using eslint to check for the general coding style and errors. We think this is a good one to have since it catches some obvious errors that were glossed over during development. However, we also think that this has very strict rules in how the coding style should be and thus we cannot resolve every single changes that it suggests. With that in mind, we always try to minimize the number of errors.

- Codacy (code quality analysis): 
  - Runs on pushes, pull requests.
  - We think this is another good action to implement because it detects not only the general styling but also the level of risk each line of code has. We were able to catch many medium-level-threat-errors but have yet to understand the high-level threat ones. In general, this adds another layer of checking and reviewing to our code.

- Jest-github-action (Puppeteer testing and code coverage): 
  - Runs on pull requests.
  - This is an important step in making sure that our front-end components are working as expected. We currently only have puppeteer testing for front-end interaction, so there is not much coverage to each individual unit of code.

- JSDoc Action (Documentation):
  - Runs on merges (pushes to master branch).
  - This action helps us organize our process by automatically generates documentation of our JavaScript files and deploys them to Github Pages in a separate repo. We keep our documentation in a separate repo to make the main one less clunky.
  
- Pull request: 
  - Pull request is an essential part of our development pipeline. This process is where everything from checking to reviewing starts. Once a person made a pull request, the linting, code analysis, and jest testing actions start to run on that request and will provide a general report on errors. The person can then request a review from other team members, and the request can only be merged after getting approved by every reviewers.

- Project board: 
  - This is where we organize our tasks and keep track of what is done, in-progress, etc.. Once a person created an issue, it it automatically moved to the to-do list. Once a pull request is made and linked to that issue, it is automatically moved to the in-progress list. When the task is done and the issue is closed, it will  automatically be moved to the done list on the board.

- Our current pipeline that involves the above workflows:

![Workflow Diagram](https://raw.githubusercontent.com/cse110-fa21-group16/cse110-fa21-group16/master/admin/cipipeline/phase1-checkpoint2.drawio.png)
- Here, we can manually link an open issue when creating a pull request. After submitting the newly created pull request, all of the above github actions (except JSDoc) will run and provide a report on errors. After that, we can request for review from other members. If changes are rejected, we would need to go back and push further changes to our working branch which will automatically re-run all of those actions again. After changes are approved, we can merge them into our master branch and JSDoc Action will run to generate and deploy documentation. Merging will also automatically close a linked issue. 

## Workflows that we are planning to add
- Unit testing: In order to make sure that the back-end functions and API calls are working correctly, we need some form of unit testing to check each individual functions. We are still in the process of exploring this option.

## Old: 11/14/2021
## Workflows that we are currently using

- Eslint (linting): we are currently using eslint to check for the general coding style and errors. We think this is a good one to have since it catches some obvious errors that were glossed over during development. However, we also think that this has very strict rules in how the coding style should be and thus we cannot resolve every single changes that it suggests. With that in mind, we always try to minimize the number of errors.

- Codacy (code quality analysis): We think this is another good action to implement because it detects not only the general styling but also the level of risk each line of code has. We were able to catch many medium-level-threat-errors but have yet to understand the high-level threat ones. In general, this adds another layer of checking and reviewing to our code.

- Pull request: Pull request is an essential part of our development pipeline. This process is where everything from checking to reviewing starts. Once a person made a pull request, the linting and code analysis actions start to run on that request and will provide a general report on errors. The person can then request a review from other team members, and the request can only be merged after getting approved by every reviewers.

- Project board: This is where we organize our tasks and keep track of what is done, in-progress, etc.. Once a person created an issue, it it automatically moved to the to-do list. Once a pull request is made and linked to that issue, it is automatically moved to the in-progress list. When the task is done and the issue is closed, it will  automatically be moved to the done list on the board.

- Our current pipeline that involves the above workflows:

![Workflow Diagram](https://raw.githubusercontent.com/cse110-fa21-group16/cse110-fa21-group16/master/admin/cipipeline/phase1.drawio.png)
- In general, when an issue is created, it will be moved to the to-do list. The assigned person will then create a separate branch and push changes to that branch. They will then make a pull request, which will automatically be moved to the in-progress list, and request for reviews from other members. The implemented Github Actions will run and provide a report on errors from those changes. After a request for review is approved by other members, the changes will be merged with the master branch and the request itself will be moved to the done list on the project board. If the reviewers request for some changes, the PR will stay in the review-in-progress list until it is approved.

## Workflows that we are planning to add

- UI testing: Since we are in the process of polishing our application, we want to make sure that everything is working as intended. In order to automate this process and make it more efficient, we are planning to add a workflow that will automatically run a set of UI tests that we write. The tests themselves can be similar to what we did in Lab 8.

- Unit testing: In order to make sure that the back-end functions and API calls are working correctly, we need some form of unit testing to check each individual functions. We are still in the process of exploring this option.

- JS Documentation: We are also planning to add some type of documentation generating workflow in the future. This would help make our project's documentation much clearer, which is essential in every stage of the development process.
