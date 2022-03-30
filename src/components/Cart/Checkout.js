import React, { useRef, useState } from 'react';
import style from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;
const isElevenChars = value => value.trim().length === 11;

export default function Checkout(props) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
    phoneNumber: true,
  });
  
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const phoneNumberInputRef = useRef();


  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPhoneNumberIsValid = isElevenChars(enteredPhoneNumber);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
      phoneNumber: enteredPhoneNumberIsValid,
    });

    const formIsValid = 
      enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid && enteredPhoneNumberIsValid;

    if (formIsValid) {
      return;
    }
  };

  const nameControlClasses = `${style.control} ${formInputsValidity.name ? '' : style.invalid}`;
  const streetControlClasses = `${style.control} ${formInputsValidity.street ? '' : style.invalid}`;
  const postalCodeControlClasses = `${style.control} ${formInputsValidity.postalCode ? '' : style.invalid}`;
  const cityControlClasses = `${style.control} ${formInputsValidity.city ? '' : style.invalid}`;
  const phoneNumberControlClasses = `${style.control} ${formInputsValidity.phoneNumber ? '' : style.invalid}`;

  return (
    <>
      <form className={style.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" ref={nameInputRef} />
          {!formInputsValidity.name && <p>Please enter your name</p>}
        </div>

        <div className={streetControlClasses}>
          <label htmlFor="street">Your Address</label>
          <input type="text" id="street" ref={streetInputRef} />
          {!formInputsValidity.street && <p>Please enter your street</p>}
        </div>

        <div className={postalCodeControlClasses}>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" ref={postalCodeInputRef} />
          {!formInputsValidity.postalCode && <p>Please enter your postal code</p>}
        </div>

        <div className={cityControlClasses}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" ref={cityInputRef} />
          {!formInputsValidity.city && <p>Please enter your city</p>}
        </div>

        <div className={phoneNumberControlClasses}>
          <label htmlFor="phonenumber">Your phonenumber</label>
          <input type="number" id="phonenumber" ref={phoneNumberInputRef} />
          {!formInputsValidity.phoneNumber && <p>Please enter your Phone Number</p>}
        </div>

        <div className={style.actions}>
          <button type='button' onClick={props.onCancel}>Cancel</button>
          <button className={style.submit}>Confirm Order</button>
        </div>
      </form>
    </>
  )
}
