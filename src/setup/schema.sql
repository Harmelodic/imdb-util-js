use imdb;

select 'name_basics' AS '';
create table name_basics
(
  nconst             varchar(10) not null,
  primary_name       TEXT        null,
  birth_year         int         null,
  death_year         int         null,
  primary_profession TEXT        null,
  known_for_titles   TEXT        null,
  constraint name_basics_nconst_uindex
  unique (nconst)
);

alter table name_basics
  add primary key (nconst);

select 'title_akas' AS '';
create table title_akas
(
  tconst            varchar(10) not null,
  ordering          int         null,
  title             TEXT        null,
  region            TEXT        null,
  language          TEXT        null,
  types             TEXT        null,
  attributes        TEXT        null,
  is_original_title tinyint(1)  null
);

select 'title_basics' AS '';
create table title_basics
(
  tconst          varchar(10)  not null,
  title_type      TEXT         null,
  primary_title   TEXT         null,
  original_title  TEXT         null,
  is_adult        tinyint(1)   null,
  start_year      int          null,
  end_year        int          null,
  runtime_minutes int          null,
  genres          TEXT         null,
  constraint title_basics_tconst_uindex
  unique (tconst)
);

alter table title_basics
  add primary key (tconst);

select 'title_crew' AS '';
create table title_crew
(
  tconst    varchar(10) not null,
  directors TEXT        null,
  writers   TEXT        null,
  constraint title_crew_tconst_uindex
  unique (tconst)
);

alter table title_crew
  add primary key (tconst);

select 'title_episode' AS '';
create table title_episode
(
  tconst         varchar(10) not null,
  parent_tconst  TEXT        null,
  season_number  int         null,
  episode_number int         null,
  constraint title_episode_tconst_uindex
  unique (tconst)
);

alter table title_episode
  add primary key (tconst);

select 'title_principals' AS '';
create table title_principals
(
  tconst     varchar(10) not null,
  ordering   int         null,
  nconst     TEXT        null,
  category   TEXT        null,
  job        TEXT        null,
  characters TEXT        null
);

select 'title_ratings' AS '';
create table title_ratings
(
  tconst         varchar(10) not null,
  average_rating float       null,
  num_votes      int         null,
  constraint title_ratings_tconst_uindex
  unique (tconst)
);

alter table title_ratings
  add primary key (tconst);

select 'DONE!' AS '';
