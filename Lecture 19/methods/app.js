let marks ={
    dsa:55,
    web:85,
    ml:67,
    totalmarks: function(fine){
        return this.dsa +this.web +this.ml + fine
    }
}
console.log(marks.totalmarks(50)) // 257 yes