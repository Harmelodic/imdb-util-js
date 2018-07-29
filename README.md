# imdb

A program for interacting with the IMDb datasets in a more sensible way.

## Setup

- Install a SQL server (e.g. MySQL)
- Create a new database/schema called `imdb`

```
CREATE SCHEMA imdb;
```

- Run the `schema.sql` on the `imdb` database.
- Download the IMDb datasets from [https://datasets.imdbws.com/](https://datasets.imdbws.com/)
- Extract them
- Put the resulting `.tsv` files in the `datasets` directory.
- Run the `import.js` script

## Usage

Interact with the data by running the `search.js` script:

```
node search.js
```
