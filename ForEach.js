let num=[1,2,3];
num.forEach(nums=>{
    console.log(nums*2);
})       

let person={
    name:"cyril",
    age:47,
    isStudent:true};
    console.log(person.name);
    person.city="New york";
    console.log(person.city);
    delete person.isStudent;
    console.log(person.isStudent);
    for(let key in person)
    {
        console.log(key+":"+person[key]);
    }
    let user={
        name:"Alice";
        greet:function() {
            console.log("hii iam alice")
        }
    };
