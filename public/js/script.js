function createElements(displayData){
    if(!displayData) throw Error("No data");
    const element = document.createElement(displayData.tag);
    element.className = displayData.styleClass? displayData.styleClass : "";
    element.innerHTML = displayData.html? displayData.html : false;
    displayData.attribute ? displayData.attribute.forEach(obj => {
         element.setAttribute(obj.name, obj.value)
    }): false
    displayData.event ? eventHendler(element, displayData.event.eventName, displayData.event.eventFunction) : false;
    return element
}
function placeObject(parrent, children){
    if(!parrent || !children) throw Error("No parrent or children");
    parrent.appendChild(children)
}
function changeForm(data){
    if(!data) throw Error("No data here");
    data.target.innerHTML = data.html;
}
function setCurrentData(data, id){
    if(!data) throw Error("No data");
    return data[id];
}
function changeFormForward(formId, quizLength){
    return (formId < quizLength-1)? formId + 1 : quizLength-1;
}
function changeFormBackward(formId){
    return (formId>0)? formId - 1 : 0;
}
function insertElements( quizArea, target){
    if( !target || !quizArea) throw Error("No data");
    const elements = createElements({
        tag: "div",
        styleClass: "quiz-wrapper",
        html: quizArea
    })
    target.innerHTML = "";
    placeObject(target, elements)
}
function eventHendler(target, eventName="click", callback=function(e){e.preventDefault()}){
    if(!target) throw Error("no Active Object")
    return target.addEventListener(eventName, callback)
}

