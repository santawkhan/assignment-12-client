import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import Gateway from "./Gateway";
import useSelecetedClass from "../../hooks/useSelecetedClass";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);
const Payment = () => {

    const [Items] = useSelecetedClass();
    const total = Items.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2));
    const id = Items.map(item => item._id)
    const ClassName = Items.map(item => item.ClassName)

    return (
        <div>
            <h3>money</h3>
            <Elements stripe={stripePromise}>
                <Gateway Items={Items} ClassName={ClassName} id={id} price={price} ></Gateway>
            </Elements>

        </div>
    );
};

export default Payment;