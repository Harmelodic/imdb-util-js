# imdb-util-js

A tool for pulling JSON data from the IMDb datasets - written in JavaScript.

## Setup

- Download the IMDb datasets from [https://datasets.imdbws.com/](https://datasets.imdbws.com/)
- Extract them
- Put the resulting `.tsv` files in the `datasets` directory.
- Install MySQL server (5.7+ required) and start it up.
- Create a new database/schema called `imdb`:

```
CREATE SCHEMA imdb;
```

- Run the `src/setup/schema.sql` on the `imdb` database - `npm run schema`
- Run the `src/setup/import.js` script - `npm run import`

## Usage

Interact with the data by running the `src/search/mini_title.js` script:

```
node src/search/mini_title.js
```

Or if you trade in time for more details, then you can use the `src/search/title.js` script:

```
node src/search/title.js
```

## Teardown

Rather than clearing out tables individually with the inefficient DML SQL command `DELETE`, I've written a little script using the DDL SQL command `TRUNCATE`.

To clear the DB, run this script: `src/teardown/clearDb.js` - `npm run teardown`.

To get rid of the `imdb` database:

```
DROP SCHEMA imdb
```

## Fucking...goddammit, IMDb!

- Why does Independent Lens (`tt0486531`) have 426 directors?!
- Why does Lux Video Theatre (`tt0042123`) have 415 writers?!
- Why does Teatr telewizji (`tt0441074`) have 760 writers?!
- Why does Tatort (`tt0806910`) have 574 writers?!
- Why does ITV Play of the Week (`tt0914702`) have 438 writers?!
- Why does BBC Sunday-Night Theatre (`tt0989125`) have 435 writers?!