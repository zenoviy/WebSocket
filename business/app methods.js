module.exports.multiply = (a, b) => {
    return a * b;
}
module.exports.add = (a, b) => {
    return a + b;
}
module.exports.multiplyAsync = function (a, b, callback){
    setTimeout(function(){
        callback(a * b);
    }, 1000)
}
module.exports.compare = function(originObject, compareObject){
    let answer = {
        correctAnswer: [],
        wrongAnswer: []
    };
    for(let item in  originObject){
        insertionCompare(originObject[item], compareObject, compareObject.length-1)
    }
    function insertionCompare(comparedName, compareObject, numberOfIteration){
        if(comparedName === compareObject[numberOfIteration]){
            answer.correctAnswer.push(comparedName)
            return comparedName
        }
        if(numberOfIteration>0){
            return insertionCompare(comparedName, compareObject, numberOfIteration-1)
        }else{
            answer.wrongAnswer.push(comparedName)
        }
    }
    return answer
}