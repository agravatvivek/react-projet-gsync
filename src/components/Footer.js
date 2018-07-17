import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
  <div>
    <div className="footer">
      <div className="container">
      <table className="table-footer">
      <tbody>
        <tr>
          <td className="tableRow-footer">
            <tr>
              <h3 className="footer__title">
                Gsync
               </h3>
            </tr>
            <tr>
              <h3 className="footer__subtitle">Gsync is Mini project dedicated to google services.This application integrates most of the applications that the client is using for a daily basis. Instead of switch from one application to another all the time, this web application could provide the frequent functions on one page. Application is developed by students of Otago Polytechnic
              </h3>
            </tr>
          </td>
          <td className="tableRow-footer__last">
            <tr>
              <h3 className="footer__title">
                Dr.Foad Marzoughi
              </h3>
            </tr>
            <tr>
              <h3 className="footer__subtitle__developers">
                (Project supervisor)
              </h3>
            </tr>
            <tr/>
            <tr>
              <h3 className="footer__subtitle__developers__title">
                Dedicated Developers
              </h3>
            </tr>
            <tr>
              <h3 className="footer__subtitle__developers">
                Divyang Pansuriya
              </h3>
            </tr>
            <tr>
              <h3 className="footer__subtitle__developers">
                Eugene Marikhin
              </h3>
            </tr>
            <tr>
              <h3 className="footer__subtitle__developers">
                Gao Liang
              </h3>
            </tr>
            <tr>
              <h3 className="footer__subtitle__developers">
                Sagar Patel
              </h3>
            </tr>
            <tr>
              <h3 className="footer__subtitle__developers">
                Vivek Agravat
              </h3>
            </tr>
          </td> 
          <td>
            <tr>
              <h3 className="footer__title">
              <img src="https://www.spabeauty.co.nz/ic/685810074/photo%20300x300%20.jpg" height="132" width="132" alt="Cheetah!" />
              </h3>
            </tr>
          </td> 
        </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
);

export default Footer;
