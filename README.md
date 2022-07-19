Gear Garage App: React/Rails API

Gear Garage is an app that allows users to keep track of their adventure and outdoor gear, creating and storing packing lists for trips to support more organized exploration.

in this app, a user logs in to their profile and from their profile, is able to navigate to either the trip page or the gear page. As a user:

Within the Trip page, I can:
- View all trips that I have taken and the gear I took with me for each one (GET /trips)
- Add new upcoming trips I am excited about (POST /trip)

Within the Gear page, I can:
- View a library of my personal gear items (GET /items)
- Add newly purchased gear to my library (POST /items)
- Change the condition of gear as it wears over time (PATCH /items)
- Delete Items that have been damaged or lost (DELETE /items)
- Assign gear to a trip (POST /Packing_list)

## BACKEND Structure

The Rails API is structured around 4 models: User, Trip, Item, Packing_list

A USER has many TRIPS (One-to-Many)
A USER has many ITEMS (One-to-Many)
A USER has many PACKING LISTS (One-to-Many)
ITEMS belong to many TRIPS and TRIPS have many ITEMS (Many-to-many)

## FRONTEND Structure

The React Frontend 