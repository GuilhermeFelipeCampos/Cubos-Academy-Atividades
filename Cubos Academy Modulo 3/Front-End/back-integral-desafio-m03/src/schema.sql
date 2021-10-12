drop database if exists market_cubos;
create database market_cubos;


drop table if exists usuarios;
 create table usuarios (
 	
   id serial not null primary key,
   nome varchar(50) not null,
   nome_loja varchar(150) not null,
   email varchar(50) not null unique,
   senha text not null
   
 );
  drop table if exists produtos;
  create table produtos (
 
 	id serial not null primary key,
    usuario_id integer not null,
    nome varchar(100) not null,
    quantidade integer not null,
    categoria text,
    preco bigint not null,
    descricao text not null,
    imagem text,
   foreign key (usuario_id) references usuarios(id)
   
 );