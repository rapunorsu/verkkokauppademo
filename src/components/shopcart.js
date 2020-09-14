import React, {useState} from 'react';
import '../App.css';

const Products = ({prod}) => {
    return (
    <tr>
        <td> <img src={prod.pic}/></td>
        <td> {prod.title}</td>
        <td> {prod.price} eur</td>
        <td> {prod.amount}</td>
        <td> {prod.amount * prod.price} eur</td>
    </tr>
    )
}

const ShoppingCart = ({prod}) => {
    const amounts = prod.map(products=> products.amount * products.price);
    const total = amounts.reduce((a, b) => a + b, 0);
    const result = prod.filter(products => products.amount > 0)

    console.log(prod)

    return (
        <section className="konsoli">
        <h1>Ostoskori</h1>
        <table>
            <tr>
            <td width="350px"></td>
            <td width="180px">Nimi</td>
            <td>Hinta</td>
            <td>Määrä</td>
            <td>Hinta yhteensä</td>
            </tr>
            
          
            {result.map(c => <Products prod={c} key={c.id}/> )}
               
        </table>
        <h1>Total amount:</h1> {total} eur
        </section>
    )
}
    

export default ShoppingCart;