import classes from "./Checkout.module.css"
import { useRef } from "react";

const Checkout = (props) => {


    const nameInputRef = useRef();
    const surnameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const emailInputRef = useRef();

    const formSubmit = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredSurname = surnameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredEmail = emailInputRef.current.value

        const enteredInfo = {
            name: enteredName,
            surname: enteredSurname,
            street: enteredStreet,
            postal: enteredPostal,
            email: enteredEmail,
        }

        props.onSubmit(enteredInfo)

    }

    return (
        <form onSubmit={formSubmit} className={classes.form}>
            <div className={classes.control}>
                <label htmlFor="name">Name</label>
                <input required name="name" ref={nameInputRef} type="text" />
            </div>
            <div className={classes.control}>
                <label htmlFor="surname">Surname</label>
                <input required name="surname" ref={surnameInputRef} type="text" />
            </div>
            <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input required name="email" ref={emailInputRef} type="email" />
            </div>
            <div className={classes.control}>
                <label htmlFor="street">Street</label>
                <input required name="street" ref={streetInputRef} type="text" />
            </div>
            <div className={classes.control}>
                <label htmlFor="postal-code">Postal code (5 digits)</label>
                <input required name="zip" ref={postalInputRef} type="text" pattern="[0-9]{5}" />
            </div>
            <div className={classes.control}>
                <p>Total amount: </p>
            </div>
            <div className={classes.actions}>
                <button type="submit" className={classes.submit}>Confirm order</button>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>

            </div>
            <div>
                <img className={classes.payment} alt="payment methods" src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </div>
        </form>
    )
}

export default Checkout