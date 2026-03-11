const Service = () => {

const handleAlert = (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini veya yukarı kaymasını engeller
    alert("Service sayfasındasınız!");
  };

  return (
    <div id="service" className="container2">
      <div style={{ display: 'flex', justifyContent: 'flex-start' }} className="solKisim2">
        <img 
          style={{ width: '650px', display: 'flex', marginLeft: '-10px' }} 
          src="/images/p2.png" 
          alt="görsel2" 
        />
      </div>
      <div className="sagKisim2">
        <h1>
          Find Match Now and <br />Develop Your Feelings
        </h1>
        <br /><br />
        <p style={{ color: 'rgb(112, 110, 110)', fontSize: '20px' }}>
          There are so many platforms from this Pokan to make a task <br /> manager manage all your time,
          the data needed is very useful. <br />and we have it all to get you to be successful
        </p> 
        <br /><br /><br />
        <a href="#" className="kayit" onClick={handleAlert}>Read More</a>
      </div>
    </div>
  );
};

export default Service;