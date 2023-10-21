// function myfun(){
//     let username="goli beta"
//     function masti() {
//         console.log(username+' masti nahi')
//     }
//     masti()
// }
// myfun()
// -------closure-----whenever we return function ,that function never return alone---it always return with the lexiacl environment 
function myfun(){
    let username="goli beta"
    function masti() {
        console.log(username+' masti nahi')
    }
    return masti;
}
// let use as script in scope;
let returnfunc=myfun()
returnfunc();

//why------- emulate private methods (before ES6 use it as class syntax)






















