const Support = () => {
  // müşteri yorumlarını bir veri listesinde topladım.
  const Yorumlar = [
    {
      id: 1,
      name: "Tasha Wijayanti",
      konum: "Curug",
      comment: "This Bucheen is so cool, I found the partner I wanted. and it's very easy to use and steady for bcheen. cheers and hopefully many other people can find their partner here",
      rating: "★★★★★"
    },
    {
      id: 2,
      name: "Sizuka engkol",
      konum: "Indonesia",
      comment: "Very interesting services are provided to customers, access is very fast and we can also see the development of our partners. and the information provided is accurate and genuine.",
      rating: "★★★★★"
    },
    {
      id: 3,
      name: "Gundam gandin",
      konum: "Bulgarian",
      comment: "It's crazy that this application can make me find my soul mate very easily and quickly. the information contained in this buceen is very accurate and really real, not a hoax",
      rating: "★★★★★"
    }
  ];

  return (
    <div id="support" className="page5">
      <div className="yaziAlani">
        <h1 style={{ 
            fontSize: '45px', 
            fontWeight: '600', 
            textAlign: 'center', 
            fontFamily: 'Poppins, sans-serif',
            display: 'block',
            width: '100%',
            margin: '0 auto'
        }}>What Our Customers Have To Say</h1>

        <p style={{ 
          color: 'rgb(112, 110, 110)', 
          textAlign: 'center', 
          marginTop: '20px', 
          fontSize: '20px', 
          fontFamily: 'Poppins, sans-serif' 
        }}>
          Here's what our customers say with Bucheen
        </p>

        <div className="container4">
          {/* 2. Map fonksiyonu ile kartları dinamik olarak bastım */}
          {Yorumlar.map((item) => (
            <div className="cards" key={item.id}>
              <div className="card-ust-kisim">
                <div className="pp"></div>
                <div style={{ marginLeft: '10px' }} className="nameInfo">
                  <h3>{item.name}</h3>
                  <p>{item.konum}</p>
                </div>
              </div>
              <div className="aciklama">
                <p>{item.comment}</p>
                <p style={{ color: 'orange', fontSize: '25px' }} className="yildizlar">
                  {item.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;