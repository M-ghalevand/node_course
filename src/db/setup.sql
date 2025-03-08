CREATE TABLE IF NOT EXISTS users (
                                     id SERIAL PRIMARY KEY,
                                     name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
    );

CREATE TABLE IF NOT EXISTS products (
                                        id SERIAL PRIMARY KEY,
                                        title VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
    );