## Criando o banco de dados

Abrir o MySQL
senha: root

````
CREATE DATABASE IF NOT EXISTS petshop_api;

USE petshop_api;

CREATE TABLE IF NOT EXISTS pets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(80) NOT NULL,
    especie ENUM('cachorro', 'gato', 'outro') NOT NULL,
    idade INT NOT NULL,
    tutor VARCHAR(120) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

````

<img width="1283" height="700" alt="image" src="https://github.com/user-attachments/assets/fbb6594e-b20f-4368-8afc-d0c3474d1803" />


---
