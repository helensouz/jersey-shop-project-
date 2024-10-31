/* eslint-disable react/prop-types */

function Item({item, selectProduct }) {
  return (
    //this is a fragment and not appears on dom
    <>
      <div onClick={()=>selectProduct(item.id)}
        /* eslint-disable react/prop-types */
        className={`product ${item.isInBag ? "selected" : ""}`}
      
      >
      <div className="photo">
          <img src={"./img/" + item.photo} />
        </div>
        <div className="description">
          <span className="name">{item.name}</span>
          <span className="price">{item.price}</span>
          {item.isInBag && ( //will return the last false value
            <div className="quantity-area">
              <button>-</button>
              <span className="quantity">{item.quantity}</span>
              <button>+</button>
            </div>
          )}
        </div>
      </div>
    </>
  );





}

export default Item;
