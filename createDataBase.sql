CREATE DATABASE iclinic;

CREATE TABLE `prescription` (
	`prescription_id` INT(10) NOT NULL AUTO_INCREMENT,
	`clinic_id` INT(10) NULL DEFAULT '0',
	`clinic_name` VARCHAR(200) NULL DEFAULT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`patient_id` INT(10) NOT NULL,
	`patient_name` VARCHAR(200) NOT NULL DEFAULT '' COLLATE 'utf8mb4_0900_ai_ci',
	`patient_email` VARCHAR(200) NOT NULL DEFAULT '' COLLATE 'utf8mb4_0900_ai_ci',
	`patient_phone` VARCHAR(20) NOT NULL DEFAULT '' COLLATE 'utf8mb4_0900_ai_ci',
	`physician_id` INT(10) NOT NULL DEFAULT '0',
	`physician_crm` VARCHAR(100) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci',
	`physician_name` VARCHAR(200) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci',
	`text` VARCHAR(500) NOT NULL DEFAULT '0' COLLATE 'utf8mb4_0900_ai_ci',
	INDEX `Index 1` (`prescription_id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1;
