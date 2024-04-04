CREATE TABLE userS
(
    id SERIAL PRIMARY KEY,
    loginUser VARCHAR(255),
    passwordUser VARCHAR(255),
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    avatarUser VARCHAR(255)
);

CREATE TABLE product
(
    id SERIAL PRIMARY KEY,
    shop_id INTEGER,
    descriptionProduct VARCHAR(255),
    avatarProduct VARCHAR(255),
    title VARCHAR(255),
    FOREIGN KEY (shop_id) REFERENCES shop (id)
);

CREATE TABLE shop
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    descriptionShop VARCHAR(255),
    avatarShop VARCHAR(255)
);

CREATE TABLE reviewProduct
(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    photo VARCHAR(255),
    FOREIGN KEY (author_id) REFERENCES userS (id),
    FOREIGN KEY (product_id) REFERENCES product (id)
);