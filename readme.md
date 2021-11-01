# Project 2
#### By Jeffery Li

## Project Summary

I will create an app that will allow users to create an account to post pictures
and details about their pet. The main page after users log-in will show all the pictures of said pet. If a user decides to click a picture, it will direct them to a more detailed view of the pet. Some details would include a name, an age, breed/species, and what they like to do in their time. 

Also when you are on an individual pet's page, there will be a slideshow that will let you view other pictures that the user has posted.

## Models
MVC

## Route table

List your routes in a table

| url | method | action |
|-----|--------|--------|
| /dogs | get | get all pets (index)|
| /dogs/:id | get | get a particular pet (show)|
| /dogs/new | get | show form to make new pet (new)|
| /dogs | get | post| add a new pet to database ( create)|
| /dogs/:id/edit | get | show edit form for one pet (edit)|
| /dogs/:id | put | update a pet's info. (update)|
| /dogs/:id | delete | delete a pet (destroy)|


## User Stories
- Users should be able to create an account 
- Users should be able to log in with an existing account
- Users should be able to see pictures of pets
- Users should be able to post their own pictures of pets and their details
- Users should be able to delete and edit their pet profiles
- Users should be able to use a carousel to switch between pictures of their pets



## Challenges
The biggest challenge I had was to create a carousel. I tried bootstrap but it was interfering 
with my original CSS. I ended up using the CSS + Javascript combo I found on W3schools ("https://www.w3schools.com/howto/howto_js_slideshow.asp") and had to do some minor tweaks to position the "next" and "prev" buttons into a favorable position.

I also had some issues regarding pictures not showing up, especially when posting urls from imgur. Not really sure if its something on my end
or imgur. I planned on using pictures of my dog for most of the "seed" data but ended up using some random pictures on google to help fill it up.

I did not use any CSS libraries since I wanted to practice more, using the knowledge I learned so far in this course. 

## List of Technologies
- express
- mongoose
- html/css
- javascript
- liquid
- methodoverride
- morgan
- dotenv
- javaScript
- mongoDB
- Heroku

