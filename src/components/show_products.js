import React, {useState} from 'react';
import '../App.css';
import ShoppingCart from '../components/shopcart';


const Product = ({products, addCart, ShoppingCart}) => {

    const buttonstyle = { margin: "8px" }
    const [amount, setAmount] = useState(0)
    
    const [infoText,setInfoText]= useState("");
    
    const infoTest = () =>{
        setInfoText("Tuote lisätty ostoskoriin")
        setInterval(() => {
        setInfoText("");
        },3500)
        } 
        const amountSet = (addition) => {
        if (addition < 0 && amount > 0) {
        setAmount(amount + addition)
    
        } else if (addition >= 0) {
        setAmount(amount + addition)
        console.log(amount)
        } else if (addition === 0) {
        setAmount(0)
        }
    }

    console.log(amount)
    console.log(products)

    return (
    <div>
        <table>
            <tr>
            <td width="350px"></td>
            <td width="180px">Nimi</td>
            <td>Hinta</td>
            <td>Määrä</td>
            </tr>
            
            <tr>
            <td><img src={products.pic}/></td>
            <td>{products.title}</td>
            <td>{products.price} €</td>
            <td>{amount} <br></br>


            <button style={buttonstyle} onClick={() => amountSet(-1)}>-</button>
            <button style={buttonstyle} onClick={() => amountSet(+1)}>+</button>

            <br/>

            {/* <section className="Content" id= "Cart" onClick={this.releaseScroll}>
            <div className="TranspBackground"></div>
            <ShoppingCart items={this.state.cart} lockScroll = {this.lockScroll} notMobile = {this.state.notMobile} checkout= {this.checkout}/> 
            </section> */}

            <button onClick={()=> addCart(amount, products.id)}> Lisää ostoskoriin</button>
            
            </td>
            
            </tr>
        </table>
    </div>
    )
}

const Products1 = ({products, setProds}) => {

    const addCart = (amount, id) => {
        const tempCart = products.map(product => {
            if(product.id === id){
                product = {...product, amount: (amount)};
            }
            return product;
        })
        setProds(tempCart);
    }

    return (
    
        <div className="konsoli">
          {products.map(c => <Product products={c} key={c.id} addCart={addCart}/> )}
        </div>
    )

}

export default Products1;