import axios from "axios";

export const getCoinData= (id)=>{
<<<<<<< HEAD
    const myData= axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((response)=>{
       return response.data;
})
    .catch((err)=>console.log(err));
     return  myData;
}
=======
 const myData=  axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then((response)=>{
                 return response.data;
        })
            .catch((err)=>{
                console.log(err.response.data); 
        })

        return myData;
}
>>>>>>> f7ae463853dfa20d4fbdaabe82b3f929be1382fa
