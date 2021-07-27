# Water My Plants API

Hosted Backend URL: https://water-my-plantz.herokuapp.com/api

Endpoints that require an authorization token:

Headers:
| Key | Value |
| :-- | :-- |
| Authorization | AUTH_TOKEN |

## Authentication

| Method | Endpoint       | Requirements                     |                       |
| ------ | -------------- | -------------------------------- | --------------------- |
| POST   | /auth/register | username, password, phone_number | Creates a new user ✅ |
| POST   | /auth/login    | username, password               | Logs in users ✅      |

## Users

| Method | Endpoint          | Requirements                              |                                     |
| ------ | ----------------- | ----------------------------------------- | ----------------------------------- |
| GET    | /users            |                                           | Returns all users ✅                |
| GET    | /users/:id        |                                           | Returns user object by id ✅        |
| GET    | /users/:id/plants |                                           | Returns user's plants by user id ✅ |
| PUT    | /users/:id        | username, phone_number                    | Updates the user info by user id ✅ |
| POST   | /users/:id/plants | nickname, species, h20_frequency, user_id | Add plant by user id ✅             |
| DELETE | /users/:id        |                                           | Deletes the user by user id ✅      |

## Plants

| Method | Endpoint    | Requirements                              |                                  |
| ------ | ----------- | ----------------------------------------- | -------------------------------- |
| GET    | /plants     |                                           | Returns all plants ✅            |
| GET    | /plants/:id |                                           | Get plant info by plant id ✅    |
| PUT    | /plants/:id | nickname, species, h20_frequency, user_id | Update plant info by plant id ✅ |
| DELETE | /plants/:id |                                           | Deletes the user by user id ✅   |
