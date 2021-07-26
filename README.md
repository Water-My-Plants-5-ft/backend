# Water My Plants API

Hosted Backend URL: https://water-my-plantz.herokuapp.com

Endpoints that require an authorization token:

Headers:
| Key | Value |
| :-- | :-- |
| Authorization | AUTH_TOKEN |

## Authentication

| Method | Endpoint       | Requirements              |                       |
| ------ | -------------- | ------------------------- | --------------------- |
| POST   | /auth/register | username, password, phone | Creates a new user ✅ |
| POST   | /auth/login    | username, password        | Logs in users         |

## Users

| Method | Endpoint              | Requirements              |                                  |
| ------ | --------------------- | ------------------------- | -------------------------------- |
| GET    | /api/users            |                           | Returns all users                |
| GET    | /api/users/:id        |                           | Returns user object by id        |
| GET    | /api/users/:id/plants |                           | Returns user's plants by user id |
| PUT    | /api/users/:id        | username, password, phone | Updates the user info by user id |
| DELETE | /api/users/:id        |                           | Deletes the user by user id      |

## Plants

| Method | Endpoint              | Requirements                              |                               |
| ------ | --------------------- | ----------------------------------------- | ----------------------------- |
| GET    | /api/plants           |                                           | Returns all plants            |
| GET    | /api/plants/:id       |                                           | Get plant info by plant id    |
| PUT    | /api/plants/:id       | nickname, species, h20_frequency, user_id | Update plant info by plant id |
| POST   | /api/users/:id/plants | nickname, species, h20_frequency, user_id | Add plant by user id          |
| DELETE | /api/plants/:id       |                                           | Deletes the user by user id   |
