# Project Title

## Description

This web application called Note-Taker can be used to write and save notes. his application will use an Express.js back end and will save and retrieve note data from a JSON file.

## Links

To see the full Deployed Heroku link <a href='https://drive.google.com/file/d/1wB6xwaIL2Ra1J6YIZxavdqfMgsExmtCN/view?usp=sharing'>click here </a>

## Video :

To see how the application works <a href='https://drive.google.com/file/d/1wB6xwaIL2Ra1J6YIZxavdqfMgsExmtCN/view?usp=sharing'>click here </a>

## User Stories

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Tools/Technologies

- node.js
- express Js
- uuid
- nodemon
- JavaScript
- JQuery
- HTML
- CSS

## Endpoints

### /api

- GET /notes => This will return an array of notes

- POST /notes => This will create and add a new note object to the array of notes

- GET /notes/:id => This delete a specific note object from the note list using the id

### See sample response:

#### GET request return:

```json
[
  {
    "id": "4d2ca0f3-597d-488a-80c7-a8aad04c9b91",
    "title": "Test Title",
    "text": "Test text"
  },
  {
    "id": "26d33b16-7277-45f1-b8ec-8acdd5b6fec7",
    "title": "Test Title",
    "text": "Test text"
  }
]
```

#### POST body:

```json
{
  "title": "your title",
  "text": "your text"
}
```

## Screenshots
