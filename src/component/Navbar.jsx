const Navbar = () => {

  const signIn = (e)=>{
    e.preventDefault();
    alert("Lütfen Giriş yapınız!")
  }

    const signUp = (e)=>{
    e.preventDefault();
    alert("Lütfen Kayıt yapınız!")
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo1.png" alt="Logo" />
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#support">Support</a></li>
      </ul>

      <div className="buttons">
        <a href="#" className="giris" onClick={signIn}>Sign In</a>
        <a href="#" className="kayit" onClick={signUp}>Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;