-- 1. Create database 
CREATE DATABASE pharmacokinetics;

-- 2. Using database 
USE pharmacokinetics;

-- 3. Creating drugs table 
CREATE TABLE drugs 
(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    absorption_rate FLOAT NOT NULL,
    distribution_volume FLOAT NOT NULL,
    clearance_rate FLOAT NOT NULL,
    half_life FLOAT NOT NULL  
);

-- 4. Some drugs   
-- Sélectionner précautionneusement les familles de médicaments ou les médicaments 
INSERT INTO drugs (name, absorption_rate, distribution_volume, clearance_rate, half_life) VALUES  
('Médicament A', 0.5, 15, 0.1, 12),
('Médicament B', 0.7, 20, 0.05, 8),
('Médicament C', 0.6, 10, 0.15, 10),
('Médicament D', 0.4, 25, 0.2, 6);

-- 5. Add drugs  
INSERT INTO drugs (name, absorption_rate, distribution_volume, clearance_rate, half_life) VALUES  
('Médicament E', 0.65, 18, 0.12, 9);
