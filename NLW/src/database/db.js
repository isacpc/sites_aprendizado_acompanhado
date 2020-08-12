const Database = require('sqlite-async');

function execute(db) {
    //criar as tabelas do banco de dados
    //id = nome da coluna  
    //INTEGER = inteiro
    //PRIMARY KEY = identificador primário
    //AUTOINCREMENT = maneira autoincremental, nunca vai se repetir
    //proffy_id = id do professor da aula, pois ele não muda, o que muda são os tipos de aula || a cada entrada de classe, ele está sempre referenciando a um professor
    //cada classe está ligada a um id, pois o mesmo professor pode ofertar aulas em mais que um dia por semana,,, class_id
    //relação = todo PROFESSOR tem AULAS, e toda aula tem DIAS DA SEMANA 
    //o return retorna vai "exportar" o banco de dados
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject INTEGER,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}

module.exports = Database.open(__dirname + "/database.sqlite").then(execute);    //then impede que antes de abrir ele execute tarefas, passa como argumento umbanco de dados