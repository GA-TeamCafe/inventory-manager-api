# Inventory Management App

###### Project Three from General Assembly's Web Development Immersive Class - Providence

**GA-Team Cafe Members:**

Michael McGown, https://github.com/mrmcgown

Beatriz Ortiz, https://github.com/beatrizelena

Aleks Sarnicka, https://github.com/sarnickaa

| Code and Deployment Information | URLs                                                    |
| ------------------------------- | ------------------------------------------------------- |
| Deployed Site: GitHub           | https://ga-teamcafe.github.io/inventory-manager-client/ |
| API code                        | https://github.com/GA-TeamCafe/inventory-manager-api    |
| Front End Code                  | https://github.com/GA-TeamCafe/inventory-manager-client |
| Deployed Site: Heroku           | https://ga-inventory-manager.herokuapp.com/             |

###### Overview

The GA-Team Cafe created a backend API and frontend client that allows an user to create an inventory, populate it with items selected from the warehouse collection, and track:

- Quantity of product onhand
- Quantity of product needed

The tracking is done through a unique identifier that links the manufacturer's collection with the inventory management system's collection for each user.

The app is secure in that it only allows signed in users to view the manufacturer's collection. In addition, each user can only access and edit the resources she created in the inventory management collection.

###### Technologies / Project Management Methods Used

- Express and Node Js
- MongoDB and Mongoose
- JavaScript
- jQuery
- HTML5
- SCSS
- Bootstrap
- Agile: Scrum 



###### Process

The team engaged in a planning process that included [wireframing](![ims-wireframe](https://media.git.generalassemb.ly/user/11650/files/c1b11dc8-9bda-11e8-934d-e97a4a3c5865)), [user stories and ERDs](![userstories](https://media.git.generalassemb.ly/user/11650/files/ef21e7a6-9bda-11e8-8b9e-9bf08a40f89e)). We  agreed to have Aleks be the Scrum Master and to use Trello and Jira as Project Management Tools and to use Slack as a communication tool. For version control we used Git and Github and created a `dev` branch into which all our feature branches were merged. Accepting pull requests and doing merges were never done by the same team member who initiated the pull request. This process kept Git conflicts to a minimum.

Our schedule was guided by the suggestions made in the schedule.md file shared by the General Assembly instructors. It included  a day of planning and of setting up the API and client repos, both locally and on Github. We also created and deployed the Heroku app.

Troubleshooting and debugging was done with console.log statements, reading and investigating the error messages from the Chrome console and from the API server. We often resolved these problems as a team and with the help of Google searches. When we could not, we used the Issue Queue and obtained help from GA instructors.



###### Features we would like to add to the Back End

- Ability to use Passport or another package to strengthen our user authentication so only people with certain e-mails are allowed to register as users.
- Ability to attach a barcode to our items.

