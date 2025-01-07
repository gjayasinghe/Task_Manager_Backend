# Task_Manager_Backend
1.Create a database in MySQL

2.Create a table using the follwing command or Create table similar to the following command.

CREATE TABLE `tasks` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(250) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

3.Change the database credentials according ot the environment. it's available at ".env" file inside the "task-manager-backend" folder

4.Run the command "npm install" to install the node modules and other dependancies inside the both backend and frontend folders.

5.Use "npx nodemon app.js" to start both back-end server.
