SELECT title, img, content, username, profile_pic
FROM helo_users 
JOIN helo_posts
ON helo_users.ID = helo_posts.author_id
WHERE helo_posts.author_id = 1;
