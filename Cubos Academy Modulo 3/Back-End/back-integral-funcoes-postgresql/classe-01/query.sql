1 - select count(medicamento) as quantidade from farmacia;
2 - select min(idade) as novo from usuarios;
3 - select max(idade) as velho from usuarios;
4 - select round(avg(idade)) as media from usuarios where idade >=18;
5 - select categoria, count(*)
as quatidade, sum(estoque) as estoque from farmacia 
where categoria = 'blue' or categoria = 'black' group by categoria;
6 - select categoria,sum(estoque) 
as SomaEstoque from farmacia where categoria is not null group by categoria;
7 - select categoria,sum(estoque) 
as SomaEstoque from farmacia where categoria is null group by categoria;
8 - select count(medicamento) from farmacia where categoria is null;
9 - select concat(medicamento , '(',categoria,')' ) from farmacia;
10 - select concat(id, ' - ',medicamento , '(', coalesce(categoria,'sem categoria'),')' ) from farmacia;
11 - select nome,idade, cast(cadastro as date) from usuarios where cast(cadastro as date) >= '2020-01-01' 
and cast(cadastro as date) < '2021-01-01';
12 - select nome, idade, email, age(cast(cadastro as timestamp)) from usuarios where idade < 18;
13 - select nome, idade, email, age(cast(cadastro as date)) from usuarios where idade >= 60;
14 - select categoria,count(medicamento) as quantidade from farmacia where categoria is not null group by categoria;
15 - select idade, count(idade) as quantidade from usuarios where idade >=18 group by idade;
16 - select categoria, sum(estoque) as soma from farmacia group by categoria limit 3;




