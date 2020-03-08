export class stackclass
{
    
    constructor(maxsize)
    {
       this.maxsize=maxsize;
       this.arr=[];
       
    }

    //last in first out
    push(val)
    {
    if (this.arr.length<this.maxsize)
    {
   this.arr.push(val);
   return 0;
    }
    else{
        return -1;
    }
    }

    pop()
    {
        if (this.arr.length==0)
        {
            //console.log("no element present in stack for deletion!")
            return -1;
        }
        else{
           // console.log("element popped successfully");
            return this.arr.pop();
        }

    }

    peek()
    {
        console.log(this.arr);
    }
}

class queueclass
{
    //fifo
    constructor(maxsize)
    {
       this.maxsize=maxsize;
       this.arr=[];
       
    }

    enqueue(val)
    {
    if (this.arr.length<this.maxsize)
    {
   this.arr.push(val);
   return 0;
    }
    else{
        return -1;
    }
    }

    dequeue()
    {
        if (this.arr.length==0)
        {
          //  console.log("no element present in stack for deletion!")
          return -1;
        }
        else{
         //   console.log("element popped successfully");
            return this.arr.shift();
        }

    }

    peek()
    {
        console.log(this.arr);
    }
}

// let stk=new stackclass(3);

// // for (let a=0;a<=10;a++)
// // {
// //     let c1=stk.push(a+1);
// //     console.log(c1);
// // }

//     let c1=stk.push(1);
//     console.log(c1);
//     let c2=stk.push(2);
//     console.log(c1);

//     let c3=stk.push(3);
//     console.log(c1);
//     let c4=stk.push(4);
//     console.log(c1);


// stk.peek();
// // for (let a=0;a<=10;a++)
// // {
// //     console.log(stk.pop());
// // }

// console.log(stk.pop());

// stk.peek();


let que=new queueclass(2);

// for (let a=0;a<=10;a++)
// {
//     let c1=que.enqueue(a+1);
//     console.log(c1);
// }
let c1=que.enqueue(1);
    console.log(c1);
    let c2=que.enqueue(2);
    console.log(c1);

que.peek();
for (let a=0;a<=10;a++)
{
    console.log(que.dequeue());
}

que.peek();