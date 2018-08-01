# imdb

A program for interacting with the IMDb datasets in a more sensible way.

## Setup

- Install MySQL server (5.7+ required) and start it up.
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

## Fucking...goddammit, IMDb!

- Why does Independent Lens (`tt0486531`) have 426 directors?!
- Why does Lux Video Theatre (`tt0042123`) have 415 writers?!
- Why does Teatr telewizji (`tt0441074`) have 760 writers?!
- Why does Tatort (`tt0806910`) have 574 writers?!
- Why does ITV Play of the Week (`tt0914702`) have 438 writers?!
- Why does BBC Sunday-Night Theatre (`tt0989125`) have 435 writers?!