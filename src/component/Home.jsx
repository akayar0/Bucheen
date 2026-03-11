const Home = () => {

  const findNow = (e)=>{
    e.preventDefault(); 
    alert("Lütfen cinsiyetiniz seçiniz!")
  }

  return (
    <div id="home" className="container1">
      <div className="solKisim1">
        <div className="yazilar1">
          <h1>
            Find <span style={{ color: "#FF7E67", fontWeight: "600" }}>Match Now</span> <br /> 
            and Grow Your <br /> Feelings
          </h1>
          <p>
            There are so many platforms from this Pokan to make a task <br />manager manage all your time,
            the data needed is very useful. <br />and we have it all to get to be successful
          </p>
          <br /><br />
          <table style={{ 
            marginLeft: "250px",
            backgroundColor:"white"
            }}>
              <tr>
                <td>
                  <select>
                    <option value="Male">Male</option>
                  </select>
                </td>
                <td>
                  <select>
                    <option value="Female">Female</option>
                  </select>
                </td>
                <td>
                  <a href="#" className="kayit" onClick={findNow}>Find Now</a>
                </td>
              </tr>
          </table>
        </div>
      </div>
      <div className="sagKisim1" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <img 
          style={{ width: "800px", height: "640px", marginRight: "50px" }} 
          src="/images/p1.png" 
          alt="görsel1" 
        />
      </div>
    </div>
  );
};

export default Home;