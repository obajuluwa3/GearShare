-- psql -a -f migrations.sql

CREATE DATABASE equipment_rental;

\c equipment_rental;

CREATE TABLE users (id SERIAL PRIMARY KEY,
					email VARCHAR(255),
					username VARCHAR(255), 
					password_digest VARCHAR(255),
					address VARCHAR(255),
					city VARCHAR(255),
					state CHAR(2),
					token VARCHAR(255));

CREATE TABLE equipments (id SERIAL PRIMARY KEY,
						equip_type VARCHAR(255),
						model VARCHAR(255),
						brand VARCHAR(255),
						category VARCHAR(255),
						condition VARCHAR(255),
						available BOOLEAN,
						equip_img VARCHAR(255),
						hourly_rental_price NUMERIC(9,2),
						daily_rental_price NUMERIC(9,2),
						description VARCHAR(255),
						user_id INTEGER REFERENCES users(id));

CREATE TABLE rentals (id SERIAL PRIMARY KEY,
					active BOOLEAN,
					rental_date DATE,
					cost NUMERIC(9,2),
					user_id INTEGER REFERENCES users(id),
					equipment_id INTEGER REFERENCES equipments(id));