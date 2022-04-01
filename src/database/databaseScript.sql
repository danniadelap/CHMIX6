-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema databaseTutu
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema databaseTutu
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `databaseTutu` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `databaseTutu` ;

-- -----------------------------------------------------
-- Table `databaseTutu`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `databaseTutu`.`categoria` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `databaseTutu`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `databaseTutu`.`productos` (
  `idproductos` INT NOT NULL AUTO_INCREMENT,
  `nombre_prod` VARCHAR(30) NOT NULL,
  `precio` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(100) NOT NULL,
  `url_imagen` VARCHAR(50) NOT NULL,
  `talla` VARCHAR(20) NULL,
  `cantidad_dis` INT NULL,
  `categoria_idcategoria` INT NOT NULL,
  PRIMARY KEY (`idproductos`, `categoria_idcategoria`),
  INDEX `fk_productos_categoria_idx` (`categoria_idcategoria` ASC) VISIBLE,
  CONSTRAINT `fk_productos_categoria`
    FOREIGN KEY (`categoria_idcategoria`)
    REFERENCES `databaseTutu`.`categoria` (`idcategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `databaseTutu`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `databaseTutu`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nombre_usu` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `contrasenia` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `databaseTutu`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `databaseTutu`.`pedido` (
  `idpedido` INT NOT NULL AUTO_INCREMENT,
  `fecha_pedido` DATETIME NULL,
  `unidades` INT(5) NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `codigopostal` INT(7) NOT NULL,
  `municipio` VARCHAR(45) NOT NULL,
  `ciudad` VARCHAR(30) NOT NULL,
  `telefono` VARCHAR(20) NOT NULL,
  `usuario_idusuario` INT NOT NULL,
  PRIMARY KEY (`idpedido`, `usuario_idusuario`),
  INDEX `fk_pedido_usuario1_idx` (`usuario_idusuario` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_usuario1`
    FOREIGN KEY (`usuario_idusuario`)
    REFERENCES `databaseTutu`.`usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `databaseTutu`.`detalle_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `databaseTutu`.`detalle_pedido` (
  `iddetalle_pedido` INT NOT NULL AUTO_INCREMENT,
  `precio` FLOAT NOT NULL,
  `cantidad` INT NOT NULL,
  `productos_idproductos` INT NOT NULL,
  `pedido_idpedido` INT NOT NULL,
  PRIMARY KEY (`iddetalle_pedido`, `productos_idproductos`, `pedido_idpedido`),
  INDEX `fk_detalle_pedido_productos1_idx` (`productos_idproductos` ASC) VISIBLE,
  INDEX `fk_detalle_pedido_pedido1_idx` (`pedido_idpedido` ASC) VISIBLE,
  CONSTRAINT `fk_detalle_pedido_productos1`
    FOREIGN KEY (`productos_idproductos`)
    REFERENCES `databaseTutu`.`productos` (`idproductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detalle_pedido_pedido1`
    FOREIGN KEY (`pedido_idpedido`)
    REFERENCES `databaseTutu`.`pedido` (`idpedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `databaseTutu`.`administrador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `databaseTutu`.`administrador` (
  `idadministrador` INT NOT NULL,
  `nombre_admin` VARCHAR(45) NOT NULL,
  `contrasenia` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idadministrador`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
