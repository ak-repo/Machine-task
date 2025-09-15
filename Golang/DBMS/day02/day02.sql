



CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

)



CREATE TABLE PRODUCTS(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL UNIQUE,
    decription TEXT ,
   
    image_url TEXT,
)


CREATE TABLE orderes(
    id SERIAL PRIMARY KEY,
    customer_id REFERENCES users(id),
    ordered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    items_COUNT INT,
    total_amount INT,
    status VARCHAR(10)

)

CREATE TABLE ordered_items(
    id SERIAL PRIMARY KEY,
    ordered_id REFERENCES users(id),
    product_id REFERENCES PRODUCTS(id),
    price INT ,
    quantity INT,

)