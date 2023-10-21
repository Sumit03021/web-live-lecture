
function counter(){
    let count=0;
    return {
        getcount: function(){
            return count;
        },
        increment: function(){
            count++;
        },
        decrement:function(){
            count--;
        },
        reset:function(){
            count=0;
        }
    }
}

let counter1=counter();
 //   let counter1={
  //  getCount:function(){
  //      return count;
  //  }
 //}
console.log(counter1)// gets methods only but not count variables.
// console.log(counter1.getcount());
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1.getcount());
































