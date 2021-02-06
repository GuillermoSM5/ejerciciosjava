var Group = function(){
   this.members = [];
}

Group.prototype.add=function(num) {
     
     if(!this.has(num)){
         this.members.push(num);
     } 

}

Group.prototype.has= function(num){
   var a = this.members.includes(num);
   return a;
}

Group.from = function(array){
      var group = new Group();
      array.forEach(Element => {
        group.add(Element); 
      }); 

  return group;
}

var grupo = Group.from([1,2,3,3,4,5,5]);

console.log(grupo);




