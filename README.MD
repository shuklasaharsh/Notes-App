# Notes-App using NODEJS

```diff
! This repository is a part of a course involving NodeJS, MongoDB, ExpressJS for backend developement.
```

- To run:

```bash
node app.js --help
```

## Commands:

```
* app.js add     Add a new note
  * Options:
    * --help     Show help                                                 [boolean]
    * --version  Show version number                                       [boolean]
    * --title    The title of the note                           [string] [required]
    * --body     Body of the note                                [string] [required]
* app.js remove  Remove notes
  * Options:
    * --help     Show help                                                 [boolean]
    * --version  Show version number                                       [boolean]
    * --title    The Title of the note to be removed             [string] [required]
* app.js read    Gets all Notes
  * Options:
    * --help     Show help                                                 [boolean]
    * --version  Show version number                                       [boolean]
    * --title    The title of the note to be printed             [string] [required]
* app.js list    Lists all notes
```
