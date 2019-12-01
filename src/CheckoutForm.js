import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import CardSection from './CardSection';
import api from "./api";

class CheckoutForm extends React.Component {
  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Use Elements to get a reference to the Card Element mounted somewhere
    // in your <Elements> tree. Elements will know how to find your Card Element
    // becase only one is allowed.
    const cardElement = this.props.elements.getElement('card');

    //create PaymentIntent, create PaymentMethod and confirm PaymentIntent
    api.createPaymentIntent()
    .then(clientsecret=>{
      console.log(clientsecret);
      this.props.stripe.confirmCardPayment(clientsecret, {
        payment_method: {
          card: cardElement,
        },
      });
    })
  };

  //render the checkout form
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>SGD 10.99</h3>
        <h4>Order a blue llama now!</h4>
        <img src="http://bluebison.net/sketchbook/2009/1109/llama-blue-small.png" alt="bluellama"></img>
        <CardSection />
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);