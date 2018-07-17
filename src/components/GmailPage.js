import React from 'react';

export default class GmailPage extends React.Component {

  render() {
    const ContactForm = () => (
      <form method="POST">
      <table className="table-header">
        <tr>
          <td>
          <label className="footer__subtitle__developers__title">Name : </label>
          <input className="add-option__input" type="text" name="name" />
          </td>
        </tr>
        <tr>
          <td>
          <label className="footer__subtitle__developers__title" htmlFor="email">Email : </label>
          <input className="add-option__input" type="email" name="email" />
          </td>
        </tr>
        <tr>
          <td>
          <label className="footer__subtitle__developers__title" htmlFor="message">Email : </label>
          <textarea className="add-option__input" name="message" rows="3" />
          </td>
        </tr>
        <tr/>
        <tr>
        <input className="button-menu" type="submit" />
        </tr>
      </table>
      </form>
    );

    

    return (
      <div className="container">
        {ContactForm()}
      </div>
    );
  }
}
