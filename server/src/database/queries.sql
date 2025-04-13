INSERT INTO PHONE (MODEL, MARC, SPECS, REGISTER_DATE, STATE)
VALUES 
('iPhone 13', 'Apple', '128GB, 5G, A15 Bionic, 6.1-inch display', '2023-11-15', 1),
('Galaxy S23', 'Samsung', '256GB, 5G, Snapdragon 8 Gen 2, 6.1-inch AMOLED', '2023-12-01', 1),
('Pixel 7', 'Google', '128GB, 5G, Google Tensor, 6.3-inch OLED', '2024-01-10', 1),
('Xperia 1 V', 'Sony', '256GB, 4K OLED, Snapdragon 8 Gen 2', '2024-02-20', 1),
('Moto G Stylus', 'Motorola', '128GB, Snapdragon 678, 6.8-inch display, Stylus', '2024-03-01', 1);

INSERT INTO INVENTORY (ID_PHONE) VALUES
(1),
(2),
(2),
(3),
(4),
(5),
(5);

INSERT INTO VOUCHER (DATE) VALUES 
('2024-04-01'),
('2024-04-03'),
('2024-04-10');

INSERT INTO PHONE_VOUCHER (ID_PHONE, ID_VOUCHER, QUANTITY) VALUES
(1, 1, 2),
(2, 1, 1),
(3, 2, 1),
(5, 3, 2);
