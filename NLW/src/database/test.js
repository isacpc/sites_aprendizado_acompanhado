const Database = require('./db'); //importa o db  ./ = pasta do momento
const createProffy = require('./createProffy');

Database.then(async (db) => {            //precisa receber o db que o then está passando
    //inserir dados
    //olhe o db.js pra entender a oraganização dos objs abaixo
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "88999999999",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos assumenda rerum beatae reprehenderit corrupti eveniet labore quibusdam! Illum reiciendis tempora illo, culpa labore velit dicta impedit, quidem itaque, aperiam in."
    }

    classValue = {
        subject: 1,
        cost: "20,00", 
        //o proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados após cadastrarmos a class(aula)
        
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }

    ];

    //  await createProffy(db, {proffyValue, classValue, classScheduleValues});
    //entra em createProffy.js



    //consultar dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys");

    // consultar as classes de um determinado professor 
    // e trazer junto os dados do professor
    // * = tudo
    //JOIN classes ON (classes.proffy_id = proffy.id)       estamos unindo as duas
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `);

    // o horário que a pessoa trabalha é das 8h - 18h
    // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // o time_to precisa ser maior ou igual
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"


    `);

    console.log(selectClassesSchedules)
});