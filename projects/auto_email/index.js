let error = document.getElementById("error");
let extractBtn = document.getElementById("extractBtn");
function Applicant(name,position,date,company,title){
    this.name = name;
    this.position = position;
    this.date = date;
    this.company = company;
    this.title = title;
}
function Validate(){
    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;
    let inp3 = document.getElementById("inp3").value;
    let inp4 = document.getElementById("inp4").value;
    let inp5 = document.getElementById("inp5").value;
    if(inp1 == ""||inp2== ""||inp3 == ""||inp4 == ""||inp5 == ""){
        error.innerHTML = "<strong>Please fill the empty fields</strong>"
        return false;
    }else{
        extract();
    }
}


function extract(){
    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;
    let inp3 = document.getElementById("inp3").value;
    let inp4 = document.getElementById("inp4").value;
    let inp5 = document.getElementById("inp5").value;
    var applicant = new Applicant(inp1,inp2,inp3,inp4,inp5);
    
    let email = document.getElementById("demo");
    let div = document.getElementById("output");
    div.className = "output"
    email.innerHTML = `Hello <b>${applicant.name}</b> <br><br>
    Thanks for taking the time to apply for the <b>${applicant.position}</b> position. We will begin taking interviews 
    in the next couple weeks. If you are selected to continue in our interview process, our human 
    resources department will be in contact with you by <b>${applicant.date}</b>.<br><br><br> <b>${applicant.company}<br> ${applicant.title}</b>`

};

