import React from "react";
import { FaPhone, FaAt, FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="support" className="lastPage">
      {/* Sol Kısım: Logo ve Açıklama */}
      <div className="solKisim" style={{ padding: '50px', maxWidth: '400px' }}>
        <img src="/images/logo1.png" alt="Logo" style={{ width: '180px' }} />
        <br /><br />
        <p style={{ color: '#706e6e', fontSize: '16px', lineHeight: '1.6' }}>
          The most accurate and simplest time tracking for all of you. 
          and we have been serving for more than 4 years and have made you happy
        </p>
      </div>

      {/* Sağ Kısım: Tablo Yapısı */}
      <div className="sagKisim" style={{flex: 1, padding: '50px'}}>
        <table className="tablo1" style={{width: '100%', textAlign: 'left', 
          borderCollapse: 'collapse', backgroundColor: 'transparent'}}>
            <tr>
              <th style={{paddingBottom: '20px', fontSize: '18px'}}>About Us</th>
              <th style={{paddingBottom: '20px', fontSize: '18px' }}>Product</th>
              <th style={{paddingBottom: '20px', fontSize: '18px'}}>Contact Us</th>
            </tr>
            <tr>
              <td style={{padding: '8px 0', color: '#706e6e'}}>Our people</td>
              <td style={{padding: '8px 0', color: '#706e6e'}}>Task Management</td>
              <td style={{padding: '8px 0', color: '#706e6e'}}>
                <FaPhone style={{marginRight: '7px', color: '#FF7E67'}} /> (021) 3258 4930
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0', color: '#706e6e' }}>Our categories</td>
              <td style={{ padding: '8px 0', color: '#706e6e' }}>Service</td>
              <td style={{ padding: '8px 0', color: '#706e6e' }}>
                <FaAt style={{ marginRight: '7px', color: '#FF7E67' }} /> Pokan@Hola.com
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0', color: '#706e6e' }}>Contact us</td>
              <td style={{ padding: '8px 0', color: '#706e6e' }}>Task Schedule</td>
              <td style={{ padding: '8px 0', color: '#706e6e' }}>
                <FaLocationArrow style={{ marginRight: '7px', color: '#FF7E67' }} /> 
                Sukabumi, Jawa Barat Indonesia, IDN
              </td>
            </tr>
            <tr>
              <td style={{ padding: '8px 0', color: '#706e6e' }}>Testimonial</td>
            </tr>
        </table>
      </div>
    </div>
  );
};

export default Contact;