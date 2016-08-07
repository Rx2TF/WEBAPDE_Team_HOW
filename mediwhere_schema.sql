DROP SCHEMA mediwhere;
CREATE SCHEMA mediwhere;

CREATE TABLE `mediwhere`.`users` (
  `userid` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`userid`));

CREATE TABLE `mediwhere`.`doctors` (
  `doctorid` INT NOT NULL AUTO_INCREMENT,
  `hospitalid` INT NOT NULL,
  `last name` VARCHAR(45) NOT NULL,
  `first name` VARCHAR(45) NOT NULL,
  `specialization` VARCHAR(45) NOT NULL,
  `contact number` VARCHAR(45) NULL,
  PRIMARY KEY (`doctorid`));

CREATE TABLE `mediwhere`.`hospital` (
  `hospitalid` INT NOT NULL AUTO_INCREMENT,
  `serviceid` INT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `hotline` VARCHAR(15) NULL,
  `access` DOUBLE NOT NULL,
  `afford` DOUBLE NOT NULL,
  `ambiance` DOUBLE NOT NULL,
  PRIMARY KEY (`hospitalid`));

CREATE TABLE `mediwhere`.`services` (
  `serviceid` INT NOT NULL AUTO_INCREMENT,
  `anasthesia` BIT NOT NULL,
  `bar` BIT NOT NULL,
  `cardio` BIT NOT NULL,
  `ctscan` BIT NOT NULL,
  `derma` BIT NOT NULL,
  `dentmed` BIT NOT NULL,
  `diabetes` BIT NOT NULL,
  `endo` BIT NOT NULL,
  `ent` BIT NOT NULL,
  `gastro` BIT NOT NULL,
  `gensurgery` BIT NOT NULL,
  `hema` BIT NOT NULL,
  `hepasurgery` BIT NOT NULL,
  `infdisease` BIT NOT NULL,
  `intcare` BIT NOT NULL,
  `neon` BIT NOT NULL,
  `neuro` BIT NOT NULL,
  `nephro` BIT NOT NULL,
  `nutridiet` BIT NOT NULL,
  `obgyne` BIT NOT NULL,
  `onco` BIT NOT NULL,
  `opthal` BIT NOT NULL,
  `ortho` BIT NOT NULL,
  `pedia` BIT NOT NULL,
  `plasurgery` BIT NOT NULL,
  `psych` BIT NOT NULL,
  `pulmo` BIT NOT NULL,
  `rheuma` BIT NOT NULL,
  `thoracic` BIT NOT NULL,
  `uro` BIT NOT NULL,
  `vitreo` BIT NOT NULL,
  PRIMARY KEY (`serviceid`));

CREATE TABLE `mediwhere`.`admins` (
  `adminid` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`adminid`));

CREATE TABLE `mediwhere`.`comments` (
  `commentid` BIGINT NOT NULL AUTO_INCREMENT,
  `hospitalid` INT NOT NULL,
  `userid` INT NOT NULL,
  `comment` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`commentid`));


ALTER TABLE `mediwhere`.`hospital` 
ADD INDEX `serviceid_idx` (`serviceid` ASC);
ALTER TABLE `mediwhere`.`hospital` 
ADD CONSTRAINT `serviceid`
  FOREIGN KEY (`serviceid`)
  REFERENCES `mediwhere`.`services` (`serviceid`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `mediwhere`.`doctors`
ADD INDEX `hospitalid_idx` (`hospitalid` ASC);
ALTER TABLE `mediwhere`.`doctors` 
ADD CONSTRAINT `hospitalid`
  FOREIGN KEY (`hospitalid`)
  REFERENCES `mediwhere`.`hospital` (`hospitalid`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `mediwhere`.`comments` 
ADD INDEX `userid_idx` (`userid` ASC);
ALTER TABLE `mediwhere`.`comments` 
ADD CONSTRAINT `userid`
  FOREIGN KEY (`userid`)
  REFERENCES `mediwhere`.`users` (`userid`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
