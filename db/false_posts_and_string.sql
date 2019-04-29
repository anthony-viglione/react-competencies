SELECT * 
FROM helo_posts 
WHERE author_id !=${id} 
AND title 
LIKE '%${search}%';