class timetraveler{
    constructor(inheritedMoney, lastYear){
        this.money = inheritedMoney;
        this.lastYear = lastYear;
        this.age = 18;

    }
    calculateExpenses (year){
        if (year %2 === 0){
            return 12000;
        }else{
            return 12000 + 50 * this.age;
        }
        
    }
    travel(){
        let year = 1800;
        while (year <=this.lastYear){
            let expenses = this.calculateExpenses(year);
            if(this.money < expenses){
                return `He will need ${expenses - this.money} dollars to survive.`;
            }
            this.money-=expenses;
            this.age+=1;
            year+=1;
        }
        return `Yes, He will live a carefree life and will have ${this.money.toFixed(2)} dollars left.`;
    }

}
let traveler = new timetraveler(500000, 1850);
console.log(traveler.travel());

