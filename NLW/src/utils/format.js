

const subjects = [  //dados matéris
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
];

const weekdays = [  //dados dias da semana
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

//funcionalidades 

function getSubject(subjectNumber) {
    const position = +subjectNumber -1;
    return subjects[position];
}

function convertHoursToMinutes(time) {
    // const hours = time.split(":")[0];
    // const minutes = time.split(":")[1];
    const [hour, minutes] = time.split(":");      // mesma coisa que usar as linhas acima
    return Number((hour * 60) + minutes);
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}