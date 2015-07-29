CREATE DATABASE goodfoodhunting;

\c goodfoodhunting

CREATE TABLE dishes (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(40) NOT NULL,
  image_url VARCHAR(200)
);

INSERT INTO dishes (name,image_url)
VALUES ('triple caramel chunk','http://s3.amazonaws.com/foodspotting-ec2/reviews/3085135/thumb_600.jpg?1359764624?1437959887');

ALTER TABLE dishes ADD COLUMN dish_type VARCHAR(40);

CREATE TABLE dish_types (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(40) NOT NULL
);

ALTER TABLE dishes ADD COLUMN dish_type_id INTEGER;
ALTER TABLE dishes DROP COLUMN dish_type;

