import axios from 'axios';
import { useEffect, useState } from 'react';

function Perfumes(){
    const[perfume, setPerfume] = useState(0);
    const [loading, setLoading] = useState(true);
    const[error,setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try{
                const res = await axios.get("https://www.scento.com/api/perfume/v1/perfumes/creed+aventus")
                setPerfume(res.data);
                setLoading(false);
            }catch (error) {
                setLoading(false)                      
                setError(true)                          
                console.log("Error: ", error)
            }
        }
         getData()
    }, [])

    if(loading){
    
      return(
            <div>Carregando</div>
      )
      if(error){
        <div>error</div>
      }
     }   
     return (
        <div>
            <h1>{perfume.detail.name}</h1>
            <img src={} alt={perfume.detail.name} />
        </div>
     )   
}

export default Perfumes