# real-estate-listing-app
Real Estate Listing Database

The Real Estate Listing Database is a full-stack application for a local real estate company. The app is designed to allow users to input data for current rent or sale properties. Users can see the full list of those properties via the corresponding navigation link on the Home page: "Rental Properties" or "For Sale". Finally, users are able to delete properties from the database via the interface using the "Delete" button that populates with each property card. 

## Built With:
Angular, Node, Express, and SQL (SEAN Stack)

## To Do: 
- [x] Write README
- [x] Setup project folders and files
  - [x] Script files:
    - [x] client.js
    - [x] rental.controller.js
    - [x] sale.controller.js
    - [x] source rental and sale 
  - [x] Image folder
   - [x] Image files
    controllers into index.html

- [x] Install express
- [x] Spin up server
- [x] Create .gitignore 
- [x] Bring Angular file into project
- [x] Set Angular app up via index.html and client.js
- [x] Source files into index.html
  - [x] CSS
  - [x] Angular-route
  - [x] Angular.min
  - [x] client.js

#### Database 
- [x] Create a database called 'real_estate' 
  - [x] Create a table called 'listings'
  - [x] Import existing data file (listings.sql) into database via listings table
  - [x] Add the CREATE TABLE query to database.sql file inserted into project

  
#### Client-side HOME page
  - [x] Route
  - [x] Controller
  - [x] View
  - [x] Allow a user to add a property to the database via input fields
    - [x] Drop-down list to specify: 'For Sale' or 'For Rent'
    - [x] Drop-down list for user to choose which image to display with property listing
    
  

 #### Client-side RENTAL PROPERTY page
  - [x] Route
  - [x] Controller
  - [x] View
  - [x] Display only the properties that are for RENT
      - [x] These listings should be displayed via "card" elements
      - [x] Delete button should populate with each card, and delete upon click
  
  
 #### Client-side SALE PROPERTY page
  - [x] Route
  - [x] Controller
  - [x] View
  - [x] Display only the properties that are for SALE
      - [x] These listings should be displayed via "card" elements
      - [x] Delete button should populate with each card, and delete upon click
  
#### HTML
   Views:
   - [x] home.html
   - [x] rental.html
   - [x] sale.html
   - [x] 404.html
   
   index.HTML:
   - [x] NAVIGATION
       - [x] Home
       - [x] Rental
       - [x] Sale
    - [x] Section Container
       - [x] ng-view
          

#### Server Logic
- [x] Home router
- [x] Rental router
- [x] Sale router





 

