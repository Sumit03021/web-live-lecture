//1. foreach use on every items.----accepts cb functions
//worldcup.forEcach ---HOF

let worldcup=['india','australia','pakistan']
worldcup.forEach(function(item,index){
    console.log(index +'='+item)
})
//2. map()---accepts cb function,only array ,creates new array returns,no fo elements are same in new array.
let newArray=worldcup.map(function(item){
    return item.toUpperCase()
})
console.log(newArray)

//3. filter()---accepts cb function, retrun new array ,only on array,
let number=[10,20,30,40,50]
let filterArray=number.filter(function(item){//boolean
    if(item>=60){
        return true
    }
})
console.log(filterArray)
//4.reduce methods-----use mdn





















