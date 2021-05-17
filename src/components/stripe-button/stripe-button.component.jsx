import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({
    price
}) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IsAqJCdsyvt9GYO8oDGNNRM85TvGsVN5Ywc8FacohDhdT3z6wraNeN2TGtOC41bgvmtOe0NqX6HSRBFH18PFAcR00pRppgwl6';
    const onToken = token => {
        console.log((token));
        //youd normally pass it o backend
        alert('Payment successful');
    }
    return ( <
        StripeCheckout label = 'Pay Now'
        name = 'CRWN clothing ltd.'
        billingAddress 
        shippingAddress 
        // currency 
        image = 'https://svgshare.com/i/CUz.svg'
        description = {
            `Your total is $${price}`
        }
        amount = {
            priceForStripe
        }
        panelLabel = 'Pay Now'
        //our onsucces callback for token
        token = {
            onToken
        }
        stripeKey = {
            publishableKey
        }
        / >
    )
};
export default StripeCheckoutButton;