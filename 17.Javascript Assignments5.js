class volumn4Decimal{
    constructor (height,radius){
        this.height=height;
        this.radius=radius;
        
    }
    getVolumn(){
        return Math.PI*this.radius*this.radius*this.height
    }
}
volumn4Decimal1=new volumn4Decimal(5,7)
console.log(volumn4Decimal1.getVolumn().toFixed(4))
