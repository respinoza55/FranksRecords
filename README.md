# Curriculum app

This app creates, updates, and searches for customers of a bowling shop.  The customer's name, phone, bowling ball information, and mesaurements will be saved.  The home page will show created records sorted by the most recently created.  In the search method after a record has been found the user can click on the customer name and will be directed to a page with notes and saved measurements with the ability to edit the notes and measurements.

## Table of Contents

1. [Running Locally](#running-locally)
2. [Tech Stack](#tech-stack)
3. [Screen Shots](#screenshots)
4. [Routes](#routes)

## Running Locally

1. Clone this repo
2. cd franks-app
3. npm run serve

## Tech Stack

1. Vue.js/Vue Router/Vuex
2. JSON

## Screenshots

![alt text](screenshots/HomePage.png "Home Page")



![alt text](screenshots/Search.png "Search Page")



![alt text](screenshots/CreateRecord.png "Create Page")

## Routes

- / --> Home page/Landing Page 
- /id --> view single customer record
- create --> Create a new customer record
- search --> Search customers by phone number or name
- search/id --> view single customer record

