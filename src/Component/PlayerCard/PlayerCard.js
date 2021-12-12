import '../../CSS/PlayerCard.css';
import pj from '../../img/pj.jpg'

function PlayerCard() {
  return (
    <div>
        <div id="container">	
            <div class="product-details">
                <h1>Pankaj Jadhav</h1>
                <h1>Category:- Open</h1>
                <div class="control">
                    <button class="btn">
                    <span class="price">$250</span>
                    <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
                    <span class="buy">Get now</span>
                </button>
        
            </div>
                
        </div>
	
        <div class="product-image">
	        <img src={pj} alt=""/>
	    </div>
        </div>
    </div>

  );
}

export default PlayerCard;
