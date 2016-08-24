DROP SCHEMA mediwhere;
CREATE SCHEMA mediwhere;

CREATE TABLE `mediwhere`.`users` (
  `userid` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `pword` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `admin` INT NOT NULL,
  PRIMARY KEY (`userid`));

CREATE TABLE `mediwhere`.`doctors` (
  `doctorid` INT NOT NULL AUTO_INCREMENT,
  `hospitalid` INT NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `special` VARCHAR(45) NOT NULL,
  `contact` VARCHAR(45) NULL,
  `picurl` VARCHAR(1000) NULL,
  PRIMARY KEY (`doctorid`));

CREATE TABLE `mediwhere`.`hospital` (
  `hospitalid` INT NOT NULL AUTO_INCREMENT,
  `serviceid` INT NOT NULL,
  `user` INT NOT NULL,
  `hospital_name` VARCHAR(100) NOT NULL,
  `address` VARCHAR(500) NOT NULL,
  `lat` FLOAT NOT NULL,
  `longh` FLOAT NOT NULL,
  `hotline` VARCHAR(15) NULL,
  `access` DOUBLE NOT NULL,
  `afford` DOUBLE NOT NULL,
  `ambiance` DOUBLE NOT NULL,
  `picurl` VARCHAR(1000) NULL,
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

CREATE TABLE `mediwhere`.`comments` (
  `commentid` BIGINT NOT NULL AUTO_INCREMENT,
  `hospital` INT NOT NULL,
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

ALTER TABLE `mediwhere`.`hospital` 
ADD INDEX `user_idx` (`user` ASC);
ALTER TABLE `mediwhere`.`hospital` 
ADD CONSTRAINT `user`
  FOREIGN KEY (`user`)
  REFERENCES `mediwhere`.`users` (`userid`)
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

ALTER TABLE `mediwhere`.`comments` 
ADD CONSTRAINT `hospital`
  FOREIGN KEY (`hospital`)
  REFERENCES `mediwhere`.`hospital` (`hospitalid`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

INSERT INTO `mediwhere`.`services`(anasthesia,bar,cardio,ctscan,derma,dentmed,diabetes,endo,ent,gastro,gensurgery,hema,hepasurgery,infdisease,intcare,neon,neuro,nephro,nutridiet,obgyne,onco,opthal,ortho,pedia,plasurgery,psych,pulmo,rheuma,thoracic,uro,vitreo)
VALUES(1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0),
      (1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1),
	  (1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1);

INSERT INTO `mediwhere`.`hospital`(serviceid, user, hospital_name , address, lat,longh,hotline,access,afford,ambiance)
VALUES(1, 2, "San Juan Medical Center", "N Domingo St, San Juan, Metro Manila, Philippines", 14.606804, 121.023479, "(02) 724 3266", 5, 4.5, 4),
      (2, 2, "St. Martin De Porres Charity Hospital", "70 A. Bonifacio St., San Juan, Metro Manila, Philippines", 14.59911613, 121.03168309, "(072) 307 4143", 3.5, 3, 2.5),
      (3, 2, "Cardinal Santos Medical Center", "10 Wilson St. Greenhills West, San Juan City, Metro Manila, Philippines", 14.597604, 121.045845, "(02) 727 0001", 2, 1.5, 1);

INSERT INTO `mediwhere`.`doctors`(hospitalid, last_name, first_name, special, contact, picurl)
VALUES(1, "Sabayton", "Rodolfo", "OB Gynecology", "09694834069", "http://i.imgur.com/JCTUA5k.jpg?1"),
	  (3, "Agbayani", "Benigno Jr.", "Orthopedic", "7108292", "http://cardinalsantos.com.ph/wp-content/uploads/AGBAYANI-BENIGNO-JR.-A.-100x100.jpg"),
	  (3, "Agdamag", "Aaron", "General Surgery", "7261810", "http://cardinalsantos.com.ph/wp-content/uploads/AGDAMAG-AARON-Q.-100x100.jpg");

INSERT INTO `mediwhere`.`users`(email, pword, first_name, last_name, admin)
VALUES("rofisantos@outlook.com", "1234", "Rofi", "Santos", 2),
	  ("rickng17@gmail.com", "1234", "Maverick", "Ng", 0),
	  ("dawnvalor.rs@gmail.com", "1234", "Rofi", "Santos", 1);