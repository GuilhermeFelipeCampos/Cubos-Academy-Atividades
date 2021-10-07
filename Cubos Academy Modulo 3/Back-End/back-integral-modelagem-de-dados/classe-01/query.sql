create database ecommerce;

create table clientes (
	cpf char(11) primary key not null,
  	nome varchar(150) not null

);

create table vendedores (
	cpf char(11) primary key not null,
  	nome varchar(150) not null

);

create table pedidos (
	id serial not null primary key,
    valor integer not null,
  cliente_cpf char(11) not null references clientes(cpf),
  vendedor_cpf char(11) not null references vendedores(cpf)

);

create table categorias (
	id serial not null primary key,
    nome varchar(50)

);

create table produtos (
	id serial not null primary key,
   nome varchar(100) not null,
  descricao text,
  preco integer not null,
  quantidade_em_estoque integer not null,
  categoria_id integer not null references categorias(id)

);

create table itens_do_pedido (
	id serial not null primary key,
    pedido_id integer not null references pedidos(id),
    quantidade integer not null,
  produto_id integer not null references produtos(id)
  
  

);

insert into categorias (nome) values ('frutas')
insert into categorias (nome) values ('verduras')
insert into categorias (nome) values ('massas')
insert into categorias (nome) values ('bebidas')
insert into categorias (nome) values ('utilidades')


insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Mamão','Rico em vitamina A, potássio e vitamina C',300,123,1);
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Maça','Fonte de potássio e fibras.',90,34,1);
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Cebola','Rico em quercetina, antocianinas, vitaminas do complexo B, C.',50,76,2);
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Abacate','NÃO CONTÉM GLÚTEN.',150,64,1);
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Tomate','Rico em vitaminas A, B e C.',125,88,2);
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Acelga','NÃO CONTÉM GLÚTEN.',235,13,2);
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Macarrão parafuso','Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais',690,5,3);
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Massa para lasanha','Uma reunião de família precisa ter comida boa e muita alegria.',875,19,3);
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Refrigerante coca cola lata','Sabor original',350,189,4);
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Refrigerante Pepsi 2l','NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.',700,12,4);
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Cerveja Heineken 600ml','Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado',1200,500,4);
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Agua mineral sem gás','Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.',130,478,4);
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Vassoura','Pigmento, matéria sintética e metal.',2350,30,5);
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Saco para lixo','Reforçado para garantir mais segurança',1340,90,5);
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Escova dental','Faça uma limpeza profunda com a tecnologia inovadora',1000,44,5);
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Balde para lixo 50l','Possui tampa e fabricado com material reciclado',2290,55,5);
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Manga','Rico em Vitamina A, potássio e vitamina C',198,176,1);
insert into produtos (nome,descricao,preco,quantidade_em_estoque,categoria_id)values 
('Uva','NÃO CONTÉM GLÚTEN.',420,90,1);



insert into clientes (cpf,nome) values ('80371350042','José Augusto Silva');
insert into clientes (cpf,nome) values ('67642869061','Antonio Oliveira');
insert into clientes (cpf,nome) values ('63193310034','Ana Rodrigues');
insert into clientes (cpf,nome) values ('75670505018','Maria da Conceição');


insert into vendedores (cpf,nome) values ('82539841031','Rodrigo Sampaio');
insert into vendedores (cpf,nome) values ('23262546003','Beatriz Souza Santos');
insert into vendedores (cpf,nome) values ('28007155023','Carlos Eduardo');


insert into pedidos (valor,cliente_cpf,vendedor_cpf) values (9650,'80371350042','28007155023');
insert into pedidos (valor,cliente_cpf,vendedor_cpf) values (6480,'63193310034','23262546003');
insert into pedidos (valor,cliente_cpf,vendedor_cpf) values (4420,'75670505018','23262546003');
insert into pedidos (valor,cliente_cpf,vendedor_cpf) values (7635,'75670505018','82539841031');
insert into pedidos (valor,cliente_cpf,vendedor_cpf) values (8229,'67642869061','82539841031');




insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (1,1,1);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (1,1,10);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (1,6,11);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (1,1,15);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (1,5,2);

insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (2,10,17);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (2,3,18);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (2,5,1);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (2,10,5);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (2,2,6);

insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (3,1,13);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (3,6,12);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (3,5,17);

insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (4,1,16);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (4,6,18);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (4,1,7);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (4,3,1);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (4,20,5);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (4,2,6);

insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (5,8,18);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (5,1,8);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (5,3,17);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (5,8,5);
insert into itens_do_pedido (pedido_id,quantidade,produto_id) values (5,2,11);


select produtos.nome,descricao,preco,quantidade_em_estoque, categorias.nome from 
produtos join categorias on produtos.categoria_id = categorias.id;


select id,valor,cliente_cpf,vendedor_cpf,clientes.nome as cliente,vendedores.nome as vendedor from pedidos 
join vendedores on pedidos.vendedor_cpf = vendedores.cpf
join clientes on pedidos.cliente_cpf = clientes.cpf;

select categorias.nome,sum(produtos.quantidade_em_estoque) as estoque from produtos
join categorias on categorias.id = produtos.categoria_id group by categorias.nome;

select produtos.nome, sum(itens_do_pedido.quantidade)
from produtos
join itens_do_pedido on produtos.id = itens_do_pedido.produto_id
group by produtos.nome;