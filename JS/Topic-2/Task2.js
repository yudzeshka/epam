// Write a sum() function which will work properly when invoked using syntax below:
// sum(2,3); // Outputs 5
// sum(2)(3); // Outputs 5
// sum(1)(2)(3)(4); // Outputs 10




const sum=(...n)=>{
    const vsum=(a,c)=>a+c;
    n=n.reduce(vsum,0);
    const fn=(...x)=>sum(n+x.reduce(vsum,0));
    fn.toString=()=>n; 
    return fn;
   }
   

console.log (sum(2)(3));
