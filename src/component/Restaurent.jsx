import { useState, useEffect } from 'react'

function Restaurant() {
    const [restaurant, setRestaurant] = useState({});
    const [isLoading, setIsLoading] = useState(true);

  
    useEffect(() => {

      const fetchData = async () => {
        try {
        const response = await fetch('https://site--deliveroo--8bd4m7bpgzgn.code.run');
        const data = await response.json();
        setRestaurant(data);
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
        <div>
            <div className="RestaurantInfos">
                <div className="restaurantText">
                    <h1>{restaurant.restaurant.name}</h1>
                    <p>{restaurant.restaurant.description}</p>
                </div>
                <img className="restaurantImage" src={restaurant.restaurant.picture} alt="image" />
            </div>
        </div>
        )
  }
  
  export default Restaurant