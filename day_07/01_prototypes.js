let Powers={
    thor:"hammer",
    superman:"spiky",
    supermanPower:function(){
        console.log(`The superman has a function spiky`)
    }
}

let means={
    thor:"hammer",
    superman:"spiky",
    supermanPower:function(){
        console.log(`The superman has a function spiky`)
    }
}

Object.prototype.yogesh=function(){
    console.log(`Yogesh has a super power`);
    
}
Powers.thorpower=function(){
    console.log("thor also have the super power");
    
}

means.yogesh()