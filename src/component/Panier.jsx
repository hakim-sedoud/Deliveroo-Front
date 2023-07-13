import { useState, useEffect } from 'react'


function Panier({ panier, itemInclud }) {
    const [box, setBox] = useState([]);

    const addToPanier = (item) => {
        const itemIndex = box.findIndex((elem) => elem.id === item.id);
      
        if (itemIndex !== -1) {
          const updatedPanier = [...box];
          updatedPanier[itemIndex].quantity += 1;
          setBox(updatedPanier);
        } else {
          const newItem = {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1,
          };
          setBox((prevPanier) => [...prevPanier, newItem]);
        }
      };
      

  const removeFromPanier = (itemId) => {
    const updatedPanier = box.map((item) => {
      if (item.id === itemId) {
        // Décrémenter la quantité si elle est supérieure à 1
        if (item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
      }
      return item;
    });
    setBox(updatedPanier);
  };

    const prixTotal = panier.reduce((total, item) => total + Number(item.price), 0);
    const prixTotalFormatte = prixTotal.toFixed(2);
    const prixTotalFdp = panier.reduce((total, item) => total + Number(item.price), 2.5);
    const prixTotalFormatteFdp = prixTotalFdp.toFixed(2);
    return (
        !itemInclud ? 
        <div className='panierV'>
            <button className='panierVide'> Validez le Panier</button>
            <div className='divPanierVide'>
                Votre panier est vide
                </div>
        </div> 
        :

    <div className='panierP'>
        <button className='PanierPlein'> Validez le Panier</button>
        <div className='counter'>
        {panier.map((item , index) => (
            <div key={`${item.id}-${index}`} className='panierItem'>
              <div className='panierItemInfos'>
                <p>{item.title}</p>
                <p>{item.price} €</p>
              </div>
              <div className='panierItemCounter'>
              <button onClick={() => removeFromPanier(item.id)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => addToPanier(item)}>+</button>
              </div>
            </div>
          ))}        
          </div>
        <div className='divPanierPlein'>
        <p><span>Sous-total</span><span>{prixTotalFormatte} €</span></p>
        <p><span>Frais de livraison</span><span> 2.50 €</span></p>
        </div>
        <p><span>Total</span><span>{prixTotalFormatteFdp} €</span></p>
    </div>

        )
  }
  
  export default Panier