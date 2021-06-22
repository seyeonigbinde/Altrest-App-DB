# ALTREST-APP-DB

# API

- https://altrest-app.herokuapp.com/

## Endpoints

## Login

**POST/api/auth/login**

-  {
  -   "email": "abc123@gmail.com",
 -   "password": "123456" 
 - }



## Register

**POST/api/auth/register**

-  [
-   {
-       "user_id": 2,
-       "firstName": "Seye",
-       "lastName": "Oni",
-        "email": "abc123@gmail.com",
-        "password": "123456" 
-        "role": "Tenant"
-    }
-   ]


## Users

**GET/api/users**

- [
  -  {
   -     "user_id": 1,
   -     "firstName": "Seye",
   -     "lastName": "Oni",
   -     "email": "abcd@gmail.com",
   -     "password": "$2a$08$8/VP7cPoVxjyGgMSsdqWAeG4SctnMs5Zhqbq/VbCD4TOXgeSH5Sse",
   -     "role": "Tenant"
   - }
 - ]

 **GET/api/user/:id**


  -  {
   -     "user_id": 1,
   -     "firstName": "Seye",
   -     "lastName": "Oni",
   -     "email": "abcd@gmail.com",
   -     "password": "$2a$08$8/VP7cPoVxjyGgMSsdqWAeG4SctnMs5Zhqbq/VbCD4TOXgeSH5Sse",
   -     "role": "Tenant"
   - }
 

## Maintenance

**GET/api/maintenance**

-  [
 -     {
 -       "maintenance_id": 1,
 -       "title": "Repairs of Toilet",
 -       "request": "This is very bad and terrible",
 -       "request_image": "www.#.com",
 -       "urgency": "Very Important"
 -   }
 - ]

**GET/api/maintenance/:id**


  -   {
 -       "maintenance_id": 1,
 -       "title": "Repairs of Toilet",
 -       "request": "This is very bad and terrible",
 -       "request_image": "www.#.com",
 -       "urgency": "Very Important"
 -   }
 

**POST/api/maintenance**

-   {
 -       "maintenance_id": 1,
 -       "title": "Repairs of Toilet",
 -       "request": "This is very bad and terrible",
 -       "request_image": "www.#.com",
 -       "urgency": "Very Important"
 -   }

