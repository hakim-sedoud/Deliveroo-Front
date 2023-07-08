import { useState, useEffect } from 'react'

function Restaurent() {
    const [restaurant, setRestaurant] = useState({});
    const [isLoading, setIsLoading] = useState(true);

  
    useEffect(() => {
      // Effectuez ici votre requête GET pour récupérer les données du restaurant
      // et mettez à jour l'état "restaurant" avec les données reçues
  
      // Exemple :
      const fetchData = async () => {
        try {
        const response = await fetch('https://site--deliveroo--8bd4m7bpgzgn.code.run');
        const data = await response.json();
        setRestaurant(data);
        setTimeout(() => {
            setRestaurant(response);
          }, 1000);
        setIsLoading(false);
        console.log(data.restaurant.name);
      }catch (error) {
        console.log("catch>>", error);
      }} 
  
      fetchData();
    }, []);
    return (
        isLoading ? (
            <p>Loading....</p>
          ) :
        <div>
            <div className="RestaurantInfos">
                <div className="restaurantText">
                    <h1>{restaurant.name}</h1>
                    <p>{restaurant.description}</p>
                </div>

                <img className="restaurantImage" src="../src/assets/images/logo-teal.svg" alt="image" />
            </div>
        </div>
        )
  }
  
  export default Restaurent