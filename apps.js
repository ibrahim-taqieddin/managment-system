function Emploee(id,name,department,level,imgURL) {
    this.id=id;
    this.fullname=name;
    this.department=department;
    this.level=level;
    this.salary=calc(level);

  function calc(level) {
    switch(level) {
     case "junior":
     return console.log(math.round(math.random()*500+500));
     break;
    
     case "mid-senior":
     return console.log(math.round(math.random()*500+1000));
     break;

     case "senior":
     return console.log(math.round(math.random()*500+1500));
     break;
    }

    
      this.info = function() {
        return `i am ${this.fullname} my salary is ${this.salary}`;
    }
 }

}

let emploees = [
    new Emploee(1000,"Ghazi samer","admenstration", "senior" ),
    new Emploee(1001,"lara ali","finance", "senior"),
    new Emploee(1002,"tamara ayoub","marketing", "senior"),
    new Emploee(1003,"safi waleed","admenstration", "mid-senior"),
    new Emploee(1004,"omar zaid","development", "senior"),
    new Emploee(1005,"rana saleh","development", "junior"),
    new Emploee(1006,"hadi ahmad","finance", "mid-senior")
];

for(let i=0; i<emploees.length ;i++){
    console.log(emploees[i].info());
}