-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema new_schema1
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema technolife
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema technolife
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `technolife` DEFAULT CHARACTER SET utf8mb3 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `technolife`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `technolife`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `technolife`.`marcas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `technolife`.`marcas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `technolife`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `technolife`.`productos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `stock` INT NOT NULL,
  `precio` INT NOT NULL,
  `descuento` INT NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  `categorias_id` INT NOT NULL,
  `marcas_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_productos_categorias1_idx` (`categorias_id` ASC) VISIBLE,
  INDEX `fk_productos_marcas1_idx` (`marcas_id` ASC) VISIBLE,
  CONSTRAINT `fk_productos_categorias1`
    FOREIGN KEY (`categorias_id`)
    REFERENCES `technolife`.`categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_marcas1`
    FOREIGN KEY (`marcas_id`)
    REFERENCES `technolife`.`marcas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `technolife`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `technolife`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `genero` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `ciudad` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(45) NOT NULL,
  `rol` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`carritos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`carritos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `productos_id` INT NOT NULL,
  `usuarios_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_carritos_productos_idx` (`productos_id` ASC) VISIBLE,
  INDEX `fk_carritos_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_carritos_productos`
    FOREIGN KEY (`productos_id`)
    REFERENCES `technolife`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_carritos_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `technolife`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`ordenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ordenes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `carritos_id` INT NOT NULL,
  `usuarios_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ordenes_carritos1_idx` (`carritos_id` ASC) VISIBLE,
  INDEX `fk_ordenes_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_ordenes_carritos1`
    FOREIGN KEY (`carritos_id`)
    REFERENCES `mydb`.`carritos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ordenes_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `technolife`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `technolife` ;

-- -----------------------------------------------------
-- Table `technolife`.`aside`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `technolife`.`aside` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(45) NOT NULL,
  `usuarios_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_aside_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_aside_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `technolife`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `technolife`.`historiales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `technolife`.`historiales` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `stock` INT NOT NULL,
  `precio` INT NOT NULL,
  `descuento` INT NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  `marcas_id` INT NOT NULL,
  `categorias_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_historiales_marcas1_idx` (`marcas_id` ASC) VISIBLE,
  INDEX `fk_historiales_categorias1_idx` (`categorias_id` ASC) VISIBLE,
  CONSTRAINT `fk_historiales_marcas1`
    FOREIGN KEY (`marcas_id`)
    REFERENCES `technolife`.`marcas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_historiales_categorias1`
    FOREIGN KEY (`categorias_id`)
    REFERENCES `technolife`.`categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `technolife`.`imagenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `technolife`.`imagenes` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `productos_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_imagenes_productos_idx` (`productos_id` ASC) VISIBLE,
  CONSTRAINT `fk_imagenes_productos`
    FOREIGN KEY (`productos_id`)
    REFERENCES `technolife`.`productos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `technolife`.`imagenes_historiales`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `technolife`.`imagenes_historiales` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `historiales_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_imagenes_historiales_historiales1_idx` (`historiales_id` ASC) VISIBLE,
  CONSTRAINT `fk_imagenes_historiales_historiales1`
    FOREIGN KEY (`historiales_id`)
    REFERENCES `technolife`.`historiales` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `technolife`.`table1`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `technolife`.`table1` (
)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
