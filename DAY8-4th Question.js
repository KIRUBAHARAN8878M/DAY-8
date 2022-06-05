//**********************************************************************
//class uber
//**********************************************************************
class Uber
{
    constructor(basefare,costpermile,costperminute,timeofride,ridedistance,bookingfee,surgemultiplier){
        {
            this.basefare=basefare;
            this.costpermile=costpermile;
            this.costperminute=costperminute;
            this.timeofride=timeofride;
            this.ridedistance=ridedistance;
            this.bookingfee=bookingfee;
            this.surgemultiplier=surgemultiplier;;
        }
    }

getfare()
{
    console.log(`The fare is : ${this.basefare+((this.costperminute*this.timeofride)+(this.costpermile*this.ridedistance)*this.surgemultiplier)+this.bookingfee}`);
}
}

let firstride= new Uber(50,7,3,10,50,3,5);
firstride.getfare();