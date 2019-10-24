# Movie List with React-Redux and Sagas

This is a small full stack app that retrieves a list of movies from its database, allows a user to click on a movie poster, see the details, and edit those details.

Here is a deployed app: https://mighty-fortress-03181.herokuapp.com/

## Built With

JavaScript, Node.js, Express.js, React, Redux, Redux-saga, Material UI, SQL

## Getting Started

Clone or download the zip from Github. Then see the install section for next steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- Some sort of local SQL database (Postico is what I used)


### Installing

Steps to get the development environment running.

1. Download this project.
2. Create a database named `saga_movies_weekend`
3. Run the queries to setup the 3 tables in the database.sql file
4. Run `npm install` to install all dependancies.
5. `npm run server`
6. `npm run client`

## Screen Shot

(Coming soon.)


### Completed Features

- [x] Home page displays all movies in our database.
- [x] Details page shows details of movie clicked on.
- [x] Ability to go in and edit the title and description of a movie.
- [x] Added a fair amount of Material UI.

### Next Steps

Features that you would like to add at some point in the future.

- [ ] Ability to add/remove genres to movies.
- [ ] Make snackbars appear more and be relevant to actions done (cancel, at least).
- [ ] Move sagas/reducers into their own files.
- [ ] Route change animations.

## Deployment

Add additional notes about how to deploy this on a live system

## Authors

* Dustin Fedie


## Acknowledgments

* Joel, Mike, Crow, Tom Servo, Gypsy, and Cambot. Oh, and all of the staff and students at Prime Digital Academy.



