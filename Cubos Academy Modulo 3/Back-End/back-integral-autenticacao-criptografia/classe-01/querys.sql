create database catalogo_pokemons 


create table usuarios (
	id serial not null primary key,
  	nome text not null,
  	email text unique not null,
  	senha text not null	

);

create table pokemons (
	
  id serial not null primary key,
  usuario_id integer not null,
  nome text not null ,
  habilidades text not null,
  imagem text,
  apelido text,
  foreign key (usuario_id) references usuarios (id)
  
);

