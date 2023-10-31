import Scene1 from "../Scene/Scene";
import "./ProductInfo.css";

const ProductInfo = () => {
  return (
    <div className="product-info">
      <div className="info-container">
        <div className="title">
          <h1>Design Toscano Rocaille Carved Victorian Sofa</h1>
        </div>

        <div className="info-wrapper">
          <h4>Decription</h4>
          <p className="info">
            Antique Victorian 2 Seater Sofa, featuring beautifully carved floral detail and
            a non buttoned back.
            <br />
            Upholstered in splendid grey velvet material.
            <br />
            A classic piece that would be a welcome addition to any living room.
          </p>
        </div>

        <div className="specifics-price">
          <h4>Dimensions (mm)</h4>
          <p>Length: 1450</p>
          <p>Width: 830</p>
          <p>Height: 880</p>

          <div className="price-button">
            <p className="price">Price: <span>R15 000</span></p>
            <button>Add to cart</button>
          </div>
        </div>
      </div>

      <div className="scene">
        <Scene1 />
      </div>

    </div>
  )
}

export default ProductInfo