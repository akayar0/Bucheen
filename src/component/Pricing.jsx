const Pricing = () => {
  // 1. Verileri bir listede topladım. aynı html dosyasını 3 kere copy-paste yapmak yerine
  // tek bir listede oluşturup daha kullanışlı hale getirdim.
  const Users = [
    {
      id: 1,
      name: "Javar Saripun",
      img: "/images/c1.png",
      desc: "A man who is ideal for all women. Javar is very handsome and attractive with a very friendly and kind nature. Javar is also a person who excels in the field of music."
    },
    {
      id: 2,
      name: "Fausiah Fera",
      img: "/images/c2.png",
      desc: "Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman."
    },
    {
      id: 3,
      name: "Shreryl Olap",
      img: "/images/c3.png",
      desc: "Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet. He works in the field of music, which is famous in Indonesia."
    }
  ];

  return (
    <div id="pricing" className="page4" style={{ paddingTop: '80px' }}>
      <h1>Most Popular In This Week</h1>
      
      <p style={{ 
        maxWidth: '550px', 
        textAlign: 'center', 
        color: 'rgb(112, 110, 110)', 
        fontSize: '20px', 
        margin: '20px auto 40px auto'
      }}>
        There are so many platforms from this Pokan to make a task manager manage all your time,
        the data needed is very useful. and we have it all to get you to be successful
      </p>

      <div className="container3">
        {/* 2. Listeyi map ile dönerek kartları oluşturdum */}
        {Users.map((user) => (
          <div className="card" key={user.id}>
            <div className="cardUst">
              <img src={user.img} alt={user.name} />
              <div className="cardAlt">
                <h2>{user.name}</h2>
                <p>{user.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderBottom: '1px solid #eee', marginTop: '40px' }}></div>
    </div>
  );
};

export default Pricing;