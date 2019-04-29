SELECT id, username, profile_pic
FROM helo_users
WHERE username = ${username} AND password = ${password};