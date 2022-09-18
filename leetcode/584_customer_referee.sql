CREATE TABLE Customer {
  id INTEGER PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  referee_id INTEGER
};

SELECT name FROM Customer 
WHERE referee_id <> 2 OR referee_id IS NULL;