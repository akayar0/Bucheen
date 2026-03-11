import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faAddressBook } from '@fortawesome/free-regular-svg-icons';

const About = () => {
  //veriyi bir listede topla.
  const adimlar = [
    {
      id: 1,
      icon: faMagnifyingGlass,
      text: "Find your dating relationship in app and waiting until you get a notification. have a good relationship its started"
    },
    {
      id: 2,
      icon: faHeart,
      text: "Dating with benefits and you redefine the expectations of a perfect relationship with your partner"
    },
    {
      id: 3,
      icon: faAddressBook,
      text: "Ideal relationship makes your online dating relationship run more smoothly using this app"
    }
  ];

  return (
    <div id="about" className="page3">
      <h1 style={{ maxWidth: '500px' }}>
        How It Works To Find Your Relationship</h1>

      <div className="icerik-alani">
        {adimlar.map((item) => (
          <div className="satir" key={item.id}>
            <div style={{ backgroundColor: "#fff5f3" }} 
            className="daire">
              <FontAwesomeIcon icon={item.icon} style={{ color: '#ff4d4d', fontSize: '20px' }} />
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;