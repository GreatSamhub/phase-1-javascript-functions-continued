
function saturdayFun(activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun()


const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork()


function wrapAdjective(Adjective,activity){ 
    const emphatic = function(msg){
        return `${msg} ${Adjective}${activity}${Adjective}`
    }
    return emphatic("You are")
}
console.log(wrapAdjective("||", "a dedicated programmer!"))

      
    