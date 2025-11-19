CREATE DATABASE aquatech;

USE aquatech;


CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

truncate usuario;

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

create table aquario (
/* em nossa regra de negócio, um aquario tem apenas um sensor */
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */

create table medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	dht11_umidade DECIMAL,
	dht11_temperatura DECIMAL,
	luminosidade DECIMAL,
	lm35_temperatura DECIMAL,
	chave TINYINT,
	momento DATETIME,
	fk_aquario INT,
	FOREIGN KEY (fk_aquario) REFERENCES aquario(id)
);

insert into medida(dht11_umidade, dht11_temperatura, luminosidade, lm35_temperatura, chave, momento, fk_aquario) values 
(20.2, 22.2,24.4,23.3,1,'2025-11-03 15:50:00',1),
(11.2, 11.2,13.4,23.3,1,'2025-11-03 15:50:00',2),
(12.2, 12.2,11.4,23.3,1,'2025-11-03 15:50:00',1);

select * from medida;

insert into empresa (razao_social, codigo_ativacao) values ('Empresa 1', 'ED145B');
insert into empresa (razao_social, codigo_ativacao) values ('Empresa 2', 'A1B2C3');
insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);
insert into aquario (descricao, fk_empresa) values ('Aquário de Peixe-dourado', 2);


select * from usuario;

alter table usuario add column cpf varchar(15);

select * from usuario;

/*-------------------------------*/
create database HorizonteEstelar;
use HorizonteEstelar;

create table usuario(
id int primary key auto_increment,
nome varchar(50),
data_nasc date,
email varchar(50),
senha varchar(30)
);

select * from usuario;

create table registros_totais(
id_registros int primary key auto_increment,
fk_usuario int,
constraint fk_usuario_registros
foreign key (fk_usuario)
references usuario(id),
acertos_totais int,
qtd_partidas int
);

select * from registros_totais;

create table palavras(
idPalavra int primary key auto_increment,
nome varchar(50)
);

create table partida(
idPartidas int primary key auto_increment,
palavras_encontradas int,
tempo int,
fk_usuario int,
fk_registros int,
fk_palavras int,
constraint fk_usuario_partida
foreign key (fk_usuario)
references usuario(id),
constraint fk_registros_partida
foreign key (fk_registros)
references registros_totais (id_registros),
constraint fk_palavras_partida
foreign key (fk_palavras)
references palavras(idPalavra)
);


create table partidas(
idPartidas int primary key auto_increment,
palavras_encontradas int,
tempo int 
);


