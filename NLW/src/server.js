//parte abaixo agora em fake_data.js
// const proffys = [ //dados professores
//     {
//         name: "Diego Fernandes",
//         avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
//         whatsapp: "88999999999",
//         bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos assumenda rerum beatae reprehenderit corrupti eveniet labore quibusdam! Illum reiciendis tempora illo, culpa labore velit dicta impedit, quidem itaque, aperiam in.",
//         subject: "Química",
//         cost: "20,00", 
//         weekday: [0], 
//         time_from: [720], 
//         time_to: [1220]
//     },
//     {
//         name: "Evânia Evanelista",
//         avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
//         whatsapp: "88999999999",
//         bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos assumenda rerum beatae reprehenderit corrupti eveniet labore quibusdam! Illum reiciendis tempora illo, culpa labore velit dicta impedit, quidem itaque, aperiam in.",
//         subject: "Química",
//         cost: "20,00", 
//         weekday: [0], 
//         time_from: [720], 
//         time_to: [1220]
//     }
// ];

//agora em /utils/format.js
// const subjects = [  //dados matéris
//     "Artes",
//     "Biologia",
//     "Ciências",
//     "Educação física",
//     "Física",
//     "Geografia",
//     "História",
//     "Matemática",
//     "Português",
//     "Química"
// ];

// const weekdays = [  //dados dias da semana
//     "Domingo",
//     "Segunda-feira",
//     "Terça-feira",
//     "Quarta-feira",
//     "Quinta-feira",
//     "Sexta-feira",
//     "Sábado"
// ];


// function getSubject(subjectNumber) {
//     const position = +subjectNumber -1;
//     return subjects[position];
// }

//linha abaixo foi criada após as de cima mudarem de arquivo

// const {subjects,weekdays,getSubject} = require('./utils/format');
// //apresentação pag inicial
// function pageLanding (req/*info backend da url dos form ao filtrar*/, res) {
//     return res.render("index.html");
// }
// //apresentação pag estudos
// function pageStudy(req, res) {
//     const filters = req.query;   //mostra informações de backend da url do form
//     return res.render("study.html",{proffys, filters, subjects, weekdays});
// }

// function pageGiveClasses(req, res) {
//     const data = req.query;
    
//     //name, avatar, bio
//     const isNotEmpty = Object.keys(data).length > 0;
    
//     //se tiver data adiciona
//     if (isNotEmpty) {

//         data.subject = getSubject(data.subject);
//         //adicionar data a lista proffys
//         proffys.push(data);

//         return res.redirect("/study");
//     }
    
//     //se não, não adiciona
//     return res.render("give-classes.html", {subjects, weekdays});
// } agora em pages.js


//sevidor
const express = require('express');
const server = express();

const {pageLanding,pageStudy,pageGiveClasses, saveClasses} = require('./pages');

//configurar nonjucks que possibilita enviar a lista para a página study
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});

//inicio e config do servidor
server
//receber os dados do req.body
.use(express.urlencoded({extended: true}))
// configurar arquivos estáticos
.use(express.static("public"))    //tudo que é .use é uma config do servidor //pasta public agora é a raiz
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500);

//express é um função //require pega uma depêndecia do projeto, nesse caso me retorna o express, o () sozinho diz que irá ser executada

//() => {} é uma arrow function, uma function simplificada









// function express(){
//     return {
//         name: "jesus",
//         age: 33
//     }
// }

// express()       // . pra acessar seus objetos retornados