CREATE DATABASE usuarios;


CREATE TABLE usuarios(
    id SERIAL,
      nome VARCHAR NOT NULL,
      idade SMALLINT,
      email VARCHAR(80),
      senha VARCHAR(8)
);
 
 INSERT INTO usuarios (nome, idade, email, senha) VALUES ('Aretha Montgomery',30,'augue.id.ante@odioAliquam.com','a0B13O3L');
 INSERT INTO usuarios (nome, idade, email, senha) VALUES ('Camden H. Bartlett',15,'turpis.vitae.purus@risusDuisa.ca','p3P96F3Q');
 INSERT INTO usuarios (nome, idade, email, senha) VALUES ('Raja W. Coffey',30,'raja.feugiat@nonummy.com','s5F51T7L');
 INSERT INTO usuarios (nome, idade, email, senha) VALUES ('Elton D. Olsen',29,'aauctor@duiFuscediam.edu','k5X25B0R');                                                         
 INSERT INTO usuarios (nome, idade, email, senha) VALUES ('Shelley E. Frederick',20,'raja.feugiat@nonummy.com','u2D18F6E');                                                        
  
  
UPDATE usuarios SET nome = 'Raja W. Coffey Thomas' WHERE email = 'raja.feugiat@nonummy.com';

DELETE FROM usuarios WHERE email = 'raja.feugiat@nonummy.com';


ALTER TABLE usuarios ADD CONSTRAINT unique_email UNIQUE(email);

INSERT INTO usuarios (nome, idade, email, senha) VALUES ('Jermaine G. Sellers',16,'ligula.Nullam@tortordictum.co.uk.com','o2P56U9U');
INSERT INTO usuarios (nome, idade, email, senha) VALUES ('James D. Kennedy',23,'amet@Nulladignissim.com','q6B78V3V');
INSERT INTO usuarios (nome, idade, email, senha) VALUES ('Amelia S. Harris',29,'nec.metus.facilisis@vitaealiquet.edu','l4S64Y3A');
INSERT INTO usuarios (nome, idade, email, senha) VALUES ('Joel M. Hartman',18,'montes.nascetur@odiotristique.co.uk','c4Q27D7O');                                                         
INSERT INTO usuarios (nome, idade, email, senha) VALUES ('Elmo K. Greer',18,'risus.Duis@eget.ca','e3P92I7R');                                                        

ALTER TABLE usuarios ADD COLUMN situacao BOOLEAN DEFAULT TRUE;

UPDATE usuarios SET situacao = false WHERE email = 'montes.nascetur@odiotristique.co.uk'; 

UPDATE usuarios SET senha = 'k9P31H1O' WHERE email = 'risus.Duis@eget.ca';

ALTER TABLE usuarios DROP COLUMN idade;\

ALTER TABLE usuarios ADD COLUMN  data_nascimento DATE;

UPDATE usuarios SET data_nascimento = '1991-09-29' WHERE email = 'aauctor@duiFuscediam.edu';


UPDATE usuarios SET data_nascimento = '1988-11-02' WHERE email = 'nec.metus.facilisis@vitaealiquet.edu'; 

DELETE FROM usuarios WHERE data_nascimento  IS NULL;

ALTER TABLE usuarios ALTER COLUMN data_nascimento SET NOT NULL;

INSERT INTO usuarios (nome, data_nascimento, email, senha) VALUES ('Tate I. Dean','1989-05-01','Nunc@etmagnis.edu','d3V25D6Y');
INSERT INTO usuarios (nome, data_nascimento, email, senha) VALUES ('Arsenio K. Harmon','1985-10-23','adipiscing.elit@turpis.com','m3T58S0C');

DROP TABLE usuarios;