var WhatDoYouDo = function(job,name){
   switch (job){
        case 'developer':
            return `${name} you develops cool apps`
        case 'designer':
            return `${name} you designs awesome apps`
        default:
            return `${name} does something else.`
   }

}

console.log(WhatDoYouDo('developer','Guillermo'));
console.log(WhatDoYouDo('designer','Guillermo'));
console.log(WhatDoYouDo('diseñador','Guillermo'));