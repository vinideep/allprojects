let demo = document.getElementById("demo");
class Phone{
    constructor(brand,year){
        this.brand = brand;
        this.year = year;
    }
    version(){
        if(this.year == "2020"){
            return "android 10";
        }else{
            return "android 9";
        }
    }
}
let find = document.getElementById("find");
find.addEventListener("click",()=>{
    let model = new Phone("redmi",2020);
    demo.innerHTML = `${model.brand} manufactured in the year ${model.year} is runs on ${model.version()}`
});