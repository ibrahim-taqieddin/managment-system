function Emploee(id,name,department,level,imgURL) {
    this.id=id;
    this.fullname=name;
    this.department=department;
    this.level=level;
    this.salary=calc(level);

  function calc(level) {
    switch(level) {
     case "junior":
     return (Math.round(Math.random() * 500 + 500 ));
     break;
    
     case "mid-senior":
     return (Math.round(Math.random()* 500 + 1000 ));
     break;

     case "senior":
     return (Math.round(Math.random() * 500 + 1500 ));
     break;
    }

   }  

      this.info = function(){
        return `i am ${this.fullname} my salary is ${this.salary}`;
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


// ***********************************


let main = document.querySelector("main");

const Table= document.createElement("table");
main.appendChild(Table);

const Theader = document.createElement("thead");
Table.appendChild(Theader);

const Data1 = document.createElement("th");
Theader.appendChild(Data1);
Data1.textContent=" Emploee ID"

const Data2 = document.createElement("th");
Theader.appendChild(Data2);
Data2.textContent="FullName"

const Data3 = document.createElement("th");
Theader.appendChild(Data3);
Data3.textContent="Department"

const Data4 = document.createElement("th");
Theader.appendChild(Data4);
Data4.textContent="Level"


const Data5 = document.createElement("th");
Theader.appendChild(Data5);
Data5.textContent="salary"

const arr110 = ["id","fullname","department","level", "salary"]

for (let i = 0; i < emploees.length; i++) {
    const emploeeRow = document.createElement("tr");
    Table.appendChild(emploeeRow);
   

for (let s = 0; s < emploees.length; s++) {
    // const element = array[i][arr10[s]];
     const cell = document.createElement("td")
    emploeeRow.appendChild(cell)
    cell.textContent=emploees[i][arr110[s]]
}
    
}


