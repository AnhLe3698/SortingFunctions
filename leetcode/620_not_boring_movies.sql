CREATE TABLE cinema {
  id INTEGER PRIMARY KEY NOT NULL,
  movie VARCHAR(255),
  description VARCHAR(255),
  rating float(2),
}


SELECT * FROM cinema
WHERE MOD(id, 2) = 1 AND description <> "boring"
ORDER BY rating DESC;