// code your solution here

function saturdayFun(activity){
    // This functio returns a string with the activity that is passed into the function
    
    if (typeof activity != "undefined"){
        return `This Saturday, I want to ${activity}!`;
    } else {
        return `This Saturday, I want to roller-skate!`;
    }
}

const mondayWork = function(activity){
    if (typeof activity != "undefined"){
        return `This Monday, I will ${activity}.`;
    } else {
        return `This Monday, I will go to the office.`;
    }
}

function wrapAdjective(special){
     return function(flair){
        if (typeof special != "undefined"){
            return `You are ${special}${flair}${special}!`;
        } else {
            special = "*";
            return `You are ${special}${flair}${special}!`;
        }
    }
}
