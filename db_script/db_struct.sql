--step1_ creatin data base
create database CRUD
go
use CRUD

--step2_ creatin table modelos
create table modelos(
	id int primary key not null identity,
	carnet varchar(15),
	facultad varchar(25),
	ciclo varchar(5),
	evento varchar(30),
	categoria varchar(30),

);
go

SELECT * FROM modelos