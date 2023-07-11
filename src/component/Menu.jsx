import { useState, useEffect } from 'react'


function Menu() {
    const [menu, setMenu] = useState([]);
    const [name, setName] = useState("");

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
          try {
          const response = await fetch('https://site--deliveroo--8bd4m7bpgzgn.code.run');
          const data = await response.json();
          setMenu(data);
          setName(data.categories[0].name);
          setIsLoading(false);
        //   console.log(data.categories);
        }catch (error) {
          console.log("catch>>", error);
        }} ;
    
        fetchData();
      }, []);
      console.log(menu);
    return (
        isLoading ? (
            <p>Loading....</p>
          ) :
          <div className='generalBloc'>
            {menu.categories?.map((category) => (
            
                <div className="menuItem" key={category.name}>
                    <div className='categoryBloc'>
                        <h2>{category.name}</h2>
                        <div className="meals">
                        {category.meals.map((meal) => (
                            <div className="meal" key={meal.id}>
                                <div className='mealCard'>
                                <h3>{meal.title}</h3>
                                <p className='mealDescription'>{meal.description}</p>
                                <p>{meal.price} €</p>
                                </div>
                             {meal.picture? <img src={meal.picture} alt="" /> : <p></p> } 
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            
      ))}
      <div className='panier'>panier</div>
        </div>
  );
}
  
  export default Menu