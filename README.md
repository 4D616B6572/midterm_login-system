# Discuss Room 學生線上討論平台

***1. Vision:***
- Build a solid (hopefully) online application for NTU students to have another choice to discuss in a certain private space rather than **facebook group**, which is totally annoying.
- As long as you have NTU email account, you'll be able to use this service (maybe in the future).
 
***2. Main function in this project:***
- Login and register (done!)
- **Heroku** for cloud server (done!)
- main file structure for discuss room (not yet..)
- yet to figure out the rest of the parts...

## Installation
### local install
1. install postgres (download link: https://postgresapp.com/, and follow the install steps)
> after install postgres database, use **terminal** to implement the following commands

(1) login to database
```
psql -h localhost
```
(2) create table
```
create table users (id serial primary key, first_name text, last_name text, email text, password text, created text);
```
2. normal process to start the web

(1) download the dependencies
```
npm install
```
(2) run the web server (express)
```
npm run dev
```
(3) start the react app
```
npm start
```
