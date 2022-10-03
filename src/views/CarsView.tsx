import CarsComponent from '../components/CarsComponent'

import {useContext} from 'react'
import {Context} from '../App'
interface Car {
    image:string;
    company:String;
    model:String;
}

const CarsView: React.FC = (
  
) =>{

    const cars:any  =useContext(Context)



    return(

        cars.length<0 ? 

        <h1>Nothing to Sold</h1>

        :

        cars.map((item:Car)=>{
            return(
            <CarsComponent 
            image={item.image}
            company={item.company}
            model={item.model} 
            ></CarsComponent>)
        })
    )

}
export default CarsView;