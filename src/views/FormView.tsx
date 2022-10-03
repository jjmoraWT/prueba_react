import axios from "axios";
import {useContext} from 'react'
import {Context} from '../App'
import React from "react";

interface Car {
    image:any | null;
    company:String| null;
    model:String| null;
}
const FormView: React.FC = (
   
) =>{

    const [image, setImage] = React.useState('');

    const cars:any  =useContext(Context)


    const getData =async () => {
        const imagenGato:any = await axios.get("https://api.thecatapi.com/v1/images/search?limit=1")

        setImage(imagenGato.data[0].url)
    }
    React.useEffect( () => {
        getData()
    
      }, [])


    const saveCar =()=>{

        let newImage:any = document.querySelector("#image")
        newImage = newImage.value
        let newCompany:any = document.querySelector("#company")
        newCompany = newCompany.value
        let newModel:any = document.querySelector("#model")
        newModel = newModel.value

    
       const newCar: Car = {
           image:image,
           company:newCompany,
           model:newModel

       }

       cars.push(newCar)

    }


    return(
        <form>
            <label htmlFor='company' >Company:</label>
            <input id='company'></input>
            <label htmlFor='model'>Model:</label>
            <input id='model'></input>
            <label htmlFor='image'>Select a pic:</label>
            <input id="image"></input>
            <button type="button" onClick={saveCar}>Enviar</button>
        </form>
    )
}

export default FormView
