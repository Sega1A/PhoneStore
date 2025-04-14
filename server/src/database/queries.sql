INSERT INTO PHONE (MODEL, MARC, SPECS, REGISTER_DATE, PHOTO, STATE, PRICE)
VALUES 
('iPhone 13', 'Apple', '128GB, 5G, A15 Bionic, 6.1-inch display', '2023-11-15', NULL, 1, 999.00),
('Galaxy S23', 'Samsung', '256GB, 5G, Snapdragon 8 Gen 2, 6.1-inch AMOLED', '2023-12-01', NULL, 1, 1199.00),
('Pixel 7', 'Google', '128GB, 5G, Google Tensor, 6.3-inch OLED', '2024-01-10', NULL, 1, 799.00),
('Xperia 1 V', 'Sony', '256GB, 4K OLED, Snapdragon 8 Gen 2', '2024-02-20', NULL, 1, 1299.00),
('Moto G Stylus', 'Motorola', '128GB, Snapdragon 678, 6.8-inch display, Stylus', '2024-03-01', NULL, 1, 399.00);

INSERT INTO INVENTORY (ID_PHONE)
VALUES
(1),
(1),
(2),
(2),
(2),
(3),
(4),
(5),
(5);

INSERT INTO VOUCHER (DATE)
VALUES 
('2024-04-01'),
('2024-04-05'),
('2024-04-10');

INSERT INTO PHONE_VOUCHER (ID_PHONE, ID_VOUCHER, PHONE_QUANTITY)
VALUES
(1, 1, 2),
(2, 1, 1),
(3, 2, 1),
(5, 3, 2);
