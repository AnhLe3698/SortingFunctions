UPDATE salary 
SET  sex =  CASE  
    WHEN sex = 'm' THEN 'f' 
    WHEN sex = 'f' THEN 'm' 
    END 
WHERE sex IN ('m', 'f');

-- optimal solution

UPDATE salary
SET
    sex = CASE sex
        WHEN 'm' THEN 'f'
        ELSE 'm'
    END;