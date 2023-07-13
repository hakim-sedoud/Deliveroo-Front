import { useState, useEffect } from 'react'
import Panier from './Panier';


function Menu() {
    const [menu, setMenu] = useState([]);
    const [name, setName] = useState("");
    const [panier, setPanier] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const addToPanier = (meal) => {
      setPanier([...panier, meal]);
      setitemInclud(true);
    };
    const [itemInclud, setitemInclud] = useState(false);


    useEffect(() => {

        const fetchData = async () => {
          try {
          const response = await fetch('https://site--deliveroo--8bd4m7bpgzgn.code.run');
          const data = await response.json();
          setMenu(data);
          setName(data.categories[0].name);
          setIsLoading(false);
        }catch (error) {
          console.log("catch>>", error);
        }} ;
    
        fetchData();
      }, []);
    return (
        isLoading ? (
            <p>Loading....</p>
          ) :
          <div className='generalBloc'>
            <div className='sousGeneralBloc'>
            <div className="menuItem" >
                {menu.categories?.map((category) => (

                    <div className='categoryBloc' key={category.name}>
                        <h2>{category.name}</h2>
                        <div className="meals">
                        {category.meals.map((meal) => (
                            <div className="meal" key={meal.id} onClick={() => addToPanier(meal) }>
                                <div className='mealCard'>
                                <h3>{meal.title}</h3>
                                {meal.description && <p className='mealDescription'>{meal.description}</p>}
                                <div className='price'>
                                <span>{meal.price} €</span> {meal.popular && <span className='popular'>Populaire </span>} 
                                </div>
                                </div>
                             {meal.picture? <img src={meal.picture} alt="" /> : <p></p> } 
                            </div>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
                
            <Panier panier={panier} itemInclud = {itemInclud}/>
            </div>

        </div>
  );
}
  
  export default Menu