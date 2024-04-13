CREATE TABLE userS
(
    id SERIAL PRIMARY KEY,
    loginUser VARCHAR(255) NOT NULL UNIQUE,
    descriptionUser VARCHAR(255),
    passwordUser VARCHAR(255),
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    avatarUser VARCHAR(255)
);

CREATE TABLE product
(
    id SERIAL PRIMARY KEY,
    shop_id INTEGER,
    price INTEGER,
    count INTEGER,
    descriptionProduct VARCHAR(255),
    avatarProduct VARCHAR(255),
    title VARCHAR(255),
    FOREIGN KEY (shop_id) REFERENCES shop (id)
);

CREATE TABLE shop
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    title VARCHAR(255) NOT NULL UNIQUE,
    descriptionShop VARCHAR(255),
    avatarShop VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES userS (id)
);

CREATE TABLE reviewProduct
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    photo VARCHAR(255),
    author_id INTEGER,
    product_id INTEGER,
    FOREIGN KEY (author_id) REFERENCES userS (id),
    FOREIGN KEY (product_id) REFERENCES product (id)
);