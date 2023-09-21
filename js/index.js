





let esubmit=document.querySelector(".f");

esubmit.addEventListener('submit',async(e)=>{
    e.preventDefault();
   

    resultconn.innerHTML=`<img  width="105" src="images/loading.svg" alt="..loading" srcset="">`
    const apikey="apikey";
    const email=document.getElementById("email").value
    const url=`https://api.emailvalidation.io/v1/info?apikey=${apikey}&email=${email}`
    

    const res=await fetch(url)
    const result=await res.json()
    console.log(typeof result);
    let str=``
    for(let key of Object.keys(result)){
       
        if(result[key]!=="" & result[key]!==" ")
        str=str+`<div>${key}:${result[key]}</div>`
    }
    console.log(str);
    resultconn.innerHTML=str;
});

