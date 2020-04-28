# Curriculum app

This app creates, updates, and searches for customers of a bowling shop.  The customer's name, phone, bowling ball information, and mesaurements will be saved.  The home page will show the last 10 recently created records.  In the search method after a record has been found the user can click on the customer name and will be directed to a page with notes and saved measurements with the ability to edit the notes and measurements.

## Table of Contents
```
1. Running Locally
2. Tech Stack
3. Screen Shots
4. Routes

```

### Running Locally
```
1. Clone this repo
2. cd franks-app
3. npm run serve
```
### Tech Stack
```
1. Vue.js/Vue Router/Vuex
2. JSON
```

## Screenshots

![alt text](screenshots/HomePage.png "Home Page")



![alt text](screenshots/Search.png "Search Page")



![alt text](screenshots/CreateRecord.png "Create Page")

### Routes
```
dot / --> Home page/Landing Page
dot /id --> view single customer record
dot create --> Create a new customer record
dot search --> Search custoemrs by phone number or name
dot search/id --> view single customer record
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
"# FranksRecords" 
