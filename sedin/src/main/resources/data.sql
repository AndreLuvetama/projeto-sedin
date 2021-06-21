INSERT INTO tb_cadastro(CPF,DATA_CADASTRO, DATA_NASC, EMAIL, NOME_COMPLETO, NOME_USUARIO, SENHA, TIPO_CADASTRO) 
VALUES('25508916946','2021-06-16', '1982-04-07', 'arthurandersonmendes@rgsa.com.br', 'Arthur Anderson Mendes', 'ArthuR', 'teste', 2);

INSERT INTO tb_cadastro(CPF,DATA_CADASTRO, DATA_NASC, EMAIL, NOME_COMPLETO, NOME_USUARIO, SENHA, TIPO_CADASTRO) 
VALUES('29008916182','2021-06-16T10:30:07Z', '1982-04-07', 'arthurandersonmendes@rgsa.com.br', 'Silvinho da Silva', 'Silva', 'teste', 2);
INSERT INTO tb_cadastro(CPF,DATA_CADASTRO, DATA_NASC, EMAIL, NOME_COMPLETO, NOME_USUARIO, SENHA, TIPO_CADASTRO) 
VALUES('21118916180','2021-04-19T11:30:07Z', '2000-03-01', 'silvinho@rgsa.com.br', 'Bartolemeu da Silva', 'bartolomeu', 'teste', 2);

INSERT INTO tb_cadastro(CPF,DATA_CADASTRO, DATA_NASC, EMAIL, NOME_COMPLETO, NOME_USUARIO, SENHA, TIPO_CADASTRO) 
VALUES('39398321403','2021-05-23T11:30:07Z', '1990-02-01', 'barbaracruz@hotmail.com.br', 'Bárbara da Cruz', 'barbara', 'teste', 2);

INSERT INTO tb_cadastro(CPF,DATA_CADASTRO, DATA_NASC, EMAIL, NOME_COMPLETO, NOME_USUARIO, SENHA, TIPO_CADASTRO) 
VALUES('39398165406','2021-02-13T11:30:07Z', '1985-09-01', 'sleta@gmail.com.br', 'Stella Carolina', 'mario', 'teste', 2);



INSERT INTO tb_curso(DATA_CURSO, NOME_CURSO, QTDE_HORAS, URL_CURSO)
values('2021-06-03','Logistica Maritima', 23, 'https://github.com/AndreLuvetama/projeto-sds2');
INSERT INTO tb_curso(DATA_CURSO, NOME_CURSO, QTDE_HORAS, URL_CURSO)
values('2020-05-03','MATEMATICA', 13, 'https://github.com/AndreLuvetama/projeto-sds2');
INSERT INTO tb_curso(DATA_CURSO, NOME_CURSO, QTDE_HORAS, URL_CURSO)
values('2021-09-03','Ciência e Politica', 16, 'https://github.com/AndreLuvetama/projeto-sds2');
INSERT INTO tb_curso(DATA_CURSO, NOME_CURSO, QTDE_HORAS, URL_CURSO)
values('2021-10-03','Educação Religionsa', 13, 'https://github.com/AndreLuvetama/projeto-sds2');

INSERT INTO tb_Presenca(DATA_PRESENCA, ID_CADASTRO, ID_CURSO)
values('2021-03-08T11:12:07Z', 1,3);
INSERT INTO tb_Presenca(DATA_PRESENCA, ID_CADASTRO, ID_CURSO)
values('2021-04-19T10:00:07Z', 2,3);
INSERT INTO tb_Presenca(DATA_PRESENCA, ID_CADASTRO, ID_CURSO)
values('2021-05-20T09:30:07Z', 3,1);
INSERT INTO tb_Presenca(DATA_PRESENCA, ID_CADASTRO, ID_CURSO)
values('2021-03-11T20:40:07Z', 3,2);

INSERT INTO tb_certificado(DATA_CERTIFICADO, ID_CADASTRO,ID_CURSO,ID_PRESENCA)
values('2021-03-11', 1, 3,1);
INSERT INTO tb_certificado(DATA_CERTIFICADO, ID_CADASTRO,ID_CURSO,ID_PRESENCA)
values('2021-02-21', 3, 1,3);
INSERT INTO tb_certificado(DATA_CERTIFICADO, ID_CADASTRO,ID_CURSO,ID_PRESENCA)
values('2021-05-23', 3, 2,4);






