const fs = require("fs");
const rootDirr = process.cwd();
module.exports.getQuiz = (request, response) => {
    fs.readFile(rootDirr +"/public/db/test1Base.json", "utf-8", (err, data)=>{
        if(err) throw err
        const quizData = JSON.parse(data),
        prepareData = quizData.map(quiz => {
            return {id:quiz.id,
                answerType: quiz.answer.length>1? "multy": "once",
                question: quiz.question,
                formula: quiz.formula,
                questionItems:quiz.questionItems}})
        if(!prepareData){
            response.send({message: "Badoperation"})
        }
        response.send(prepareData)
    })
}