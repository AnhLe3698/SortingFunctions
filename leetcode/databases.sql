-- elephantsql.com cloud database system
-- sql values must be in single quotes
-- double quotes are reserved for entity referencing
-- DATES: CURRENT_DATE this only grabs date up to a day, NOW() this grabs hours, minutes and seconds on top of the normal date
-- offset skips the amount indicated 
-- ex LIMIT 20 OFFSET 10 -- 11 - 31 result


SELECT
FROM
JOIN
on
WHERE 
GROUP
HAving
ORDER BY
LIMIT

1. FROM JOINS   -- fires first
2. WHERE
3. GROUP BY -- aggragation function specific
4. HAVING  -- Aggragation function specific
5. SELECT
6. DISTINCT -- KEEPS unique rows, does not filter columns, but rather removes diplicate rows
7. ORDER BY
8. Limit

SELECT j.num, j.company, j.name, k.num, k.company FROM
(SELECT c.num as num, c.company as company, e.name as name
FROM (SELECT a.num AS num, a.company AS company
FROM route a
JOIN stops a_stop ON a.stop = a_stop.id
WHERE a_stop.name = 'Craiglockhart') As c
JOIN (SELECT b.num as num, b.stop as id, b_stop.name as name, b.company as company
FROM route b
JOIN stops b_stop ON b.stop = b_stop.id) as e
ON e.num = c.num WHERE e.company=c.company) AS J
JOIN
(SELECT c.num as num, c.company as company, e.name as name
FROM (SELECT a.num AS num, a.company AS company
FROM route a
JOIN stops a_stop ON a.stop = a_stop.id
WHERE a_stop.name = 'Lochend') As c
JOIN (SELECT b.num as num, b.stop as id, b_stop.name as name, b.company as company
FROM route b
JOIN stops b_stop ON b.stop = b_stop.id) as e
ON e.num = c.num WHERE e.company=c.company) as K
ON J.name = k.name;
