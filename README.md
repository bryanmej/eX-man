# eX-man 
### (expense manager)
This is a simple app that will help you keep track of what you spend your money, 
once you have signed up you can access your profile where you can add expenses and
the app will calculate how much you have spent. You also have the option of adding
a reminder in case you need to remember something important

This app was built on a **MERN** stack in other words we used:

- Mongo 
- Express 
- React 
- Node.js

for authentication I used *passport.js* local strategy, all user passwords are encrypted by *bcrypt* 
to allow cross origin access we added *cors* middleware  for handling http request *axios* was used to help with 
styling I added *bootstrap*

To use the app is very simple

1. Sign up
2. Login
3. Once in the profile click "add expense" and/or "add reminder" to begin adding to the list
