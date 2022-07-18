CREATE TABLE users (
    id  SERIAL PRIMARY KEY,
    email TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL, 
    username TEXT NOT NULL UNIQUE,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE nutrition (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    category TEXT NOT NULL, 
    calories INTEGER NOT NULL, 
    image_url TEXT NOT NULL, 
    createdAt TEXT NOT NULL UNIQUE,
    user_id INTEGER NOT NULL, 
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE exercise (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    category TEXT NOT NULL, 
    duration INTEGER NOT NULL, 
    intensity TEXT NOT NULL, 
    createdAt TEXT NOT NULL UNIQUE,
    user_id INTEGER NOT NULL, 
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
