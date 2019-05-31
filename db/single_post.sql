SELECT title, img, content, username, profile_pic
FROM helo_posts 
JOIN helo_users
ON  author_id;
