import './../index.css';
import iconComplete from '../assets/icon-complete.svg'

export default function CardThanks({ setFormData, animateSlider }) {
    const resetForm = () => {
        setFormData({ name: null, number: null, mm: null, yy: null, cvc: null });
        animateSlider(false);
    }

  return (
    <div className='cardThanks'>
        <img src={ iconComplete } alt="Thank You Icon" className='mx-auto pb-6' />
        <p className='tracking-widest p-4'>Thank you!</p>
        <p>We've added your card details</p>
        <button className='btn-primary pt-2' onClick={resetForm}>Continue</button>
    </div>
  )
}
