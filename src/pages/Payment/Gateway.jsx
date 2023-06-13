/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../providers/AuthProvider";
import './Gateway.css';
import Swal from "sweetalert2";



const Gateway = ({ price, ClassName, id, Items, }) => {

    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {

            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message)

        }
        else {
            setCardError('')
            // console.log('paymentMethod', paymentMethod)
        }



        setCardError(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymouse user',
                        name: user?.displayName || 'anonymouse user'

                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        console.log('paymentIntent', paymentIntent);
        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // fetch(`http://localhost:5000/users/seats/${id}`, {
            //     method: 'PATCH'
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.modifiedCount) {

            //             Swal.fire({
            //                 position: 'top-end',
            //                 icon: 'success',
            //                 title: `${user.name} is an Instructor Now`,
            //                 showConfirmButton: false,
            //                 timer: 1500
            //             })
            //         }
            //     })

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price, ClassName,
                date: new Date(),
                itemNames: Items.map(item => item.ClassName),
                cartItems: Items.map(item => item._id)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.result.insertedId) {
                        // display confirm
                    }
                })

        }
    }

    return (
        <>
            <form className="w-[400px]" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-outline" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>

            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default Gateway;