const fs = require("fs");
const rootDirr = process.cwd();
const businessLogic = require("../../../business/app methods")

module.exports.quizPost = (request, response) => {
    if(!request.body) return response.sendStatus(400);
    fs.readFile(rootDirr +"/public/db/test1Base.json", "utf-8", (err, data)=>{
        if(err) throw err
        const quizData = JSON.parse(data),
        answer = quizData.map((object, i) =>{
            return {id: object.id,
                question: object.question,
                explenation: object.explenation,
                formula: object.formula,
                status: businessLogic.compare(request.body[i].answerValue, object.answer) // compare answers and tasks
            }
        });
        if(quizData.length == request.body.length){
            response.setHeader('Content-Type', 'application/json');
            response.send(JSON.stringify(answer))
        }else{
            response.send(JSON.stringify([{answer: "Something go wrong"}]))
        }
    })
}