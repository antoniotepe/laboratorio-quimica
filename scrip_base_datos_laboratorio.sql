USE db_a6478c_laborat;


CREATE TABLE IF NOT EXISTS LAB_USUARIOS (
    id INT PRIMARY KEY AUTO_INCREMENT,
    no_dpi VARCHAR(255) UNIQUE NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    clave VARCHAR(255) NOT NULL,
    tipo VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE EMPRESAS (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL UNIQUE,
    st BOOLEAN DEFAULT TRUE
);


CREATE TABLE PACIENTES (
    id INT AUTO_INCREMENT PRIMARY KEY,
    no_dpi VARCHAR(255) NOT NULL UNIQUE,
    nombre VARCHAR(255),
    fecha_nacimiento DATE,
    empresa_id INT, 
    FOREIGN KEY (empresa_id) REFERENCES EMPRESAS(id)
);

CREATE TABLE EXAMENES (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_examen VARCHAR(255) NOT NULL,
    paciente_id INT NOT NULL,
    importe FLOAT NOT NULL,
    medico_tratante VARCHAR(255) NOT NULL,
    fecha DATE NOT NULL,
    anio INT NOT NULL,
    mes INT NOT NULL,
    
    st BOOLEAN DEFAULT TRUE,
    
    copro_macroscopio_color VARCHAR(200),
    copro_macroscopio_restos_alimenticios VARCHAR(200),
    copro_macroscopio_sangre VARCHAR(200),
    copro_macroscopio_consistencia VARCHAR(200),
    copro_macroscopio_Moco VARCHAR(200),
    copro_macroscopio_PH VARCHAR(200),

    copro_quimico_leucocitos VARCHAR(200),
    copro_quimico_celulas_vegetales VARCHAR(200),
    copro_quimico_almidones VARCHAR(200),
    copro_quimico_levaduras VARCHAR(200),
    copro_quimico_huevo VARCHAR(200),
    copro_quimico_quistes VARCHAR(200),
   
    copro_microscopio_eritrocitos VARCHAR(200),
    copro_microscopio_grasas VARCHAR(200),
    copro_microscopio_jabon VARCHAR(200),
    copro_microscopio_bacterias VARCHAR(200),
    
	uro_macro_color VARCHAR(200),
    uro_macro_aspecto VARCHAR(200),
    uro_macro_densidad VARCHAR(200),
    uro_macro_ph VARCHAR(200),
    
    uro_quimico_leucocitos VARCHAR(200),
    uro_quimico_glucosa VARCHAR(200),
    uro_quimico_proteinas VARCHAR(200),
    uro_quimico_cetonas VARCHAR(200),
    uro_quimico_hemoglobina VARCHAR(200),
    uro_quimico_urobilinogeno VARCHAR(200),
    uro_quimico_nitritos VARCHAR(200),
    uro_quimico_acido_ascorbico VARCHAR(200),
    uro_quimico_bilirrubina VARCHAR(200),
    
    uro_micro_leucocitos VARCHAR(200),
    uro_micro_eritocitos VARCHAR(200),
    uro_micro_c_epiteliales VARCHAR(200),
    uro_micro_bacterias VARCHAR(200),
    uro_micro_cristales VARCHAR(200),
    uro_micro_cilindros VARCHAR(200),
    uro_micro_otros VARCHAR(200),
    
    enfermedades_infecciosas_analisis VARCHAR(200),
    enfermedades_infecciosas_resultados VARCHAR(200),
    enfermedades_infecciosas_valor_referencia VARCHAR(200),
    
    examenes_bacteriologicos_analisis VARCHAR(200),
    examenes_bacteriologicos_resultado VARCHAR(200),
    examenes_bacteriologicos_valor_de_referencia VARCHAR(200),
    
    hemoglobina_inmunologia_examen VARCHAR(200),
    hemoglobina_inmunologia_resultado VARCHAR(200),
    hemoglobina_inmunologia_valor_normal VARCHAR(200),
    hemoglobina_inmunologia_prueba_de_hba1c VARCHAR(200),
    hemoglobina_inmunologia_promedio_de_glicemia VARCHAR(200),
    hemoglobina_inmunologia_calificacion VARCHAR(200),
    
    pruebas_especiales_examen_resultado VARCHAR(200),
    pruebas_especiales_resultado VARCHAR(200),
    pruebas_especiales_valor_de_referencia VARCHAR(200),
    
    hcg_cuantitativa_analisis VARCHAR(200),
    hcg_cuantitativa_resultado VARCHAR(200),
    hcg_cuantitativa_valores_de_referencia VARCHAR(200),
    
    quimica_sanguinea_examen VARCHAR(200),
    quimica_sanguinea_resultado VARCHAR(200),
    quimica_sanguinea_valor_normal VARCHAR(200),
    
    resultados_varios_examen VARCHAR(200),
    resultados_varios_resultado VARCHAR(200),
    resultados_varios_valor_normal VARCHAR(200),
    resultados_varios_grupo_sanguineo_analisis VARCHAR(200),
    resultados_varios_grupo_sanguineo_rh VARCHAR(200),
    resultados_varios_inmunoserologia_examen_widal VARCHAR(200),
    resultados_varios_inmunoserologia_resultado VARCHAR(200),
    resultados_varios_inmunoserologia_valor_normal VARCHAR(200),
    resultados_varios_dengue_analisis VARCHAR(200),
    resultados_varios_dengue_resultado VARCHAR(200),
    resultados_varios_dengue_valor_normal VARCHAR(200),
    
    
    
    
    FOREIGN KEY (paciente_id) REFERENCES PACIENTES(id)  
);