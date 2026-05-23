const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOU CAN FIND THE BEST SHOES FOR YOUR FEET AND YOUR STYLE. WE HAVE A
          WIDE RANGE OF SHOES FOR YOU TO CHOOSE FROM.
        </p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button className="secondary-button">Category</button>
        </div>

        <div className="shopping">
          <p>Available on</p>
           <div className="brand-icons">
             <img src="/images/amazon.png" alt="Amazon" />
          <img src="/images/flipkart.png" alt="Flipkart" />
           </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoes" />
      </div>
    </main>
  );
};
export default HeroSection;
