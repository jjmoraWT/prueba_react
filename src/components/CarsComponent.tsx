


interface CarsComponentProps {
    image:string;
    company:String;
    model:String;
}

const CarsComponent: React.FC<CarsComponentProps> = ({
    image,
    company,
    model
}) =>{

    interface CarsComponent {
        image:string;
        company:String;
        model:String;
    }

    var carsInSale: string | null |CarsComponent = localStorage.getItem('cars')

    if(carsInSale){
        carsInSale = JSON.parse(carsInSale)
        console.log(carsInSale)
    }


    return(
    <>
        <link rel="stylesheet" href='css/CarsComponent.css'></link>  

    <div>
        <img src={image}></img>

        <a>
            <h2>
                X
            </h2>
        </a>

        <p>{company}</p>
        <p>{model}</p>
        
    </div>
    </>
)
}
export default CarsComponent;
