# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: In order to fix this, you would need to first generate a migration for the Student model. Then you would need to do an add column in the new migration file. The column name would be cohort I believe. Then you would run a db:migrate to update the model. After that I believe you could just start adding instances into the cohort model, and then instances into the student model. A foreign key should be generated whenever you add a Student instance, which will be the primary key from the corresponding Cohort instance.

Researched answer: It appears the column name needs to actually be cohort_id, not cohort. Also you would add students to the cohort by creating a variable for cohort, as Cohort.first. Then you would run a .student.create and add in a student for the student column. Otherwise it seems like I was correct with my answer.

2. Which RESTful routes must always be passed params? Why?

Your answer: The RESTful routes which must always be passed params are update, destroy, show, and edit. Update needs an id in order to know which instance is being referenced so that it knows what to update. Destroy needs an id in order to know which instance it is deleting. Show needs an id because it is displaying only the specified instance. Edit needs an id so that it knows which post is being edited (it goes to the edit form which isn't the same as new, but as opposed to new which is creating the initial instance, edit is editing an instance which already has an id).

Researched answer: Looks like I was right. I'm not exaclty sure what I can add to this. I think my explanation is pretty fleshed out.

3. Name three rails generator commands. What is created by each?

Your answer: The three rails generator commands are generate controller, generate model, and general resource. Generate controller creates a controller folder, a helper folder, a routes folder, and a views folder. Generate model creates a model within a given database, and also creates a table which is named as the lowercase form of the model. It also creates columns. Generate resource creates a embedded code somewhere which acts as a template for the RESTful routes. This allows the user to save time by not manually creating said routes.

Researched answer: Apparently when you use the generate command, it will create boilerplate code on your behalf. Also, if you don't drop the built-in test code from Rails, creating a controller will also generate a test .rb file for the controller itself. Also, there is a fourth generate command for Scaffolds. Based on what I've read, these are essentially templates for apps which can be built upon. An example I found was for a blog app. That's basically what we made in class yesterday.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" route: /students
The controller method here would be index. It would display all of the instances of a database.

action: "POST" route: /students
The controller method here would be create. It would take the info stored in a new webpage and use it to create a new instance in the database.

action: "GET" route: /students/new
The controller method here would be new. It would create a page where a user could input info for the columns, which could then be used by a create method to create a new instance.

action: "GET" route: /students/2
The controller method here would be show. It would display the information stored in a specific instance, which is referenced using the primary key.

action: "GET" route: /students/2/edit
The controller method here would be edit. It would create a page where a user could input info for the columns for an existing instance, which could then be used by a update method to edit the info inside the instance.

action: "PATCH" route: /students/2
The controller method here would be update. It would take the info stored in an edit webpage and use it to update an existing instance in the database.

action: "DELETE" route: /students/2
The controller method here would be destroy. It would delete the specified instance from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

- As a user, I can see a homepage which allows me to navigate to other parts of the application.
- As a user, I can create an empty list by clicking on a link to the homepage.
- As a user, I can add items to this list.
- As a user, I can format how the items are displayed on the list.
- As a user, I can create priorities for items on my to do list.
- As a user, I can save my list into a database, where multiple lists are stored.
- As a user, I can retrieve my list from the database.
- As a user, I can edit individual items on my list.
- As a user, I can delete items on my list.
- As a user, I can delete the list.
