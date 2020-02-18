function quizButtonEvent(allCallbacks){
    const buttons = document.querySelectorAll("#quiz-sections button");
    for(let button of buttons){
        if(button.dataset.direction == "left"){
            eventHendler(button, "click", allCallbacks.leftCallback)
        }else if(button.dataset.direction == "right"){
            eventHendler(button, "click", allCallbacks.rightCallback)
        }else{
            eventHendler(button, "click", allCallbacks.submitCallback)
        }
    }
}
function formData(form, id){
    let answer;
    for(let input of form){
        if(input.name && input.value && input.checked){
            if(!answer){
                answer = {id:id+1, answerValue: [input.value]};
            }else{
                answer.answerValue.push(input.value);
            }
        }
    }
    return (answer)? answer : false
}
function formHistory(historyInterface){
    if(historyInterface.historyArr[historyInterface.currentIndex] != historyInterface.formResult && historyInterface.formResult){
        historyInterface.historyArr[historyInterface.currentIndex] = historyInterface.formResult
    }
}
function showHistory(historyInterface){
    return historyInterface.historyArr[historyInterface.currentIndex]
}
function quizGameField(data, quizLength, history, filledFormState){
    if(!data) throw Error("No Data for Items");

    let list = '',
    inputType = data.answerType=="multy" ? "checkbox": "radio",
    formula = (data.formula)? `<pre><code>${data.formula}</code></pre>`: ``;
    for(let item of data.questionItems){
        list += `<li><label for="${item}"><input id="${item}"
            type=${inputType}
            name=${inputType === "radio" ? "answer" : item}
            ${(history && history.answerValue && history.answerValue.some(el => {return el === item}))? "checked": "A"}
            value=${item}>${item}</label></li>`
    }
    const quizObject = `<div>
        <h2>#${data.id} of ${quizLength}</h2>
        <p>${data.question}</p>
        ${formula}
        <hr>
        <ul>
            ${list}
        </ul>
        <button class="btn" data-direction="left"><=</button>
        <button class="btn"  data-direction="right">=></button>
        <button class="submit-main-btn btn" type="submit" ${filledFormState? "":"disabled"}>Result</button>
    </div>`
    return quizObject
}
function showAnswer(quizResponeData){
    if(!quizResponeData) throw Error("wrong response")
    let template = "", header = "", wrong = 0, right = 0, procentage = 0;
    for(let item of quizResponeData){
        (item.status.wrongAnswer.length>0)? wrong +=1 : right +=1;
        template += `<div class=${(item.status.wrongAnswer.length>0)? "wrong-answer":"corect-answer"}>
        <h2>#${item.id}</h2>
        <p>${item.question}</p>
        ${item.formula? item.formula : ""}
        <hr>
        <p>${item.explenation}</p>
        </div>`
    }
    procentage = Math.round((100/(wrong + right))*right);
    header = `<div class="form-answer-header">
    <h2>Congratulation you just finished the quiz</h2>
        <p>You have:
            <span class="corect">${procentage}%</span> corect
        </p>
    </div>`

    template += "<button>start new</button>";
    return header + template
}

(async function(){
    const dummyData = await quizData()
    const appState = await {
        selectors: {
            formFields: document.querySelector("#quiz-sections"),
            form: document.forms["quizForm"],
        },
        quizLength: dummyData.length,
        quizNumber: 0,
        currentQuiz: 0,
        quizHistory: Array(dummyData.length).fill(null),
        formFilled: false
    }
    async function quizData(){
        let res = await getData({url: "http://localhost:3000/api/quiz"});
        if(!res) throw Error("no server data")
        return res
    }
    quizData()
    function previusQuiz(event){
        event.preventDefault()
        let formResult = formData(appState.selectors.form, appState.quizNumber);
        formHistory({
            historyArr: appState.quizHistory,
            currentIndex: appState.quizNumber,
            formResult: formResult
        });
        appState.quizNumber = changeFormBackward(appState.quizNumber);
        reloadScript(showHistory({historyArr: appState.quizHistory,
            currentIndex: appState.quizNumber,}))
    }
    function nextQuiz(event){
        event.preventDefault()
        let formResult = formData(appState.selectors.form, appState.quizNumber);
        if(formResult){
            formHistory({
                historyArr: appState.quizHistory,
                currentIndex: appState.quizNumber,
                formResult: formResult
            });
            if(appState.quizNumber >= appState.currentQuiz){
                appState.currentQuiz = appState.currentQuiz+1;
            }
            appState.quizNumber = changeFormForward(appState.quizNumber, appState.quizLength);
            reloadScript(showHistory({historyArr: appState.quizHistory,
                currentIndex: appState.quizNumber,}))
        }
    }
    async function submitQuiz(event){
        event.preventDefault()
        let allectedData = appState.quizHistory;
        let response = await postData({
            url: "http://localhost:3000/api/quiz",
            data: allectedData
        })
        let quizAnswerArea = showAnswer(response);
        insertElements( quizAnswerArea, appState.selectors.formFields);
    }
    function reloadScript(history){
        const currentQuiz = setCurrentData(dummyData, appState.quizNumber);
        const quizArea = quizGameField(currentQuiz, appState.quizLength, history, appState.formFilled);
        insertElements( quizArea, appState.selectors.formFields);
        quizButtonEvent({
            reload: reloadScript,
            leftCallback: previusQuiz,
            rightCallback: nextQuiz,
            submitCallback: submitQuiz,
            allQuiz: appState.quizLength,
            lastQuiz: appState.currentQuiz
        })
    }
    eventHendler(appState.selectors.form, "change", function(e){
        e.preventDefault()
        if(appState.currentQuiz == appState.quizLength-1){
            nextQuiz(e)
            appState.formFilled = true;
            reloadScript(appState.quizHistory[appState.quizLength-1])
        }
    })
    reloadScript(appState.quizHistory[0])
})()