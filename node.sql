
INSERT INTO `postagens` (`title`, `autor`,`texto`, `createdAt`,`updatedAt`) VALUES
('Express', 'marcelo goncalves','expressjs esta sendo usado ','2023-02-13 11:22:50','2023-02-13 11:22:50'),
('Javascript', 'ana alves','expressjs esta sendo usado ','2023-02-13 11:22:50','2023-02-13 11:22:50'),
('java', 'marcelo goncalves','expressjs esta sendo usado ','2023-02-13 11:22:50','2023-02-13 11:22:50');

INSERT INTO `comentarios` (`id`, `nome`, `email`,`mensagem`,`postagens`) VALUES
(1, 'ana', 'ana@gm.com','post legal',1),
(2, 'julia', ' julia@gm.com','legal o post',2);
-- Estrutura da tabela 
--
CREATE TABLE postagens (
id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
title varchar(120),
autor varchar(120),
texto text(12000),
createdAt date,
updatedAt date);

CREATE TABLE comentarios (
  id integer PRIMARY KEY,
  nome varchar(120),
  email varchar(120),
  mensagem text(300),
  postagens integer not null,
  constraint fk_postagens foreign key(postagens) references postagens(id)
);