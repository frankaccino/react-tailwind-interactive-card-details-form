import CreditCard from './components/CreditCard';
import CardForm from './components/CardForm';
import CardThanks from './components/CardThanks';
import './index.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({ name: null, number: null, mm: null, yy: null, cvc: null })
	const [validate, setValidate] = useState(false)

	const animateSlider = (validate) => {
		const axis = window.matchMedia('(max-width: 750px)').matches ? 'Y' : 'X'
		document.querySelector('.cardOverflow > div').style.transform = `translate${axis}(50${axis === 'Y' ? 'vh' : 'vw'})`

		document.body.classList.add('body-slider')

		setTimeout(() => {
			setValidate(validate)
			document.body.classList.remove('body-slider')
			document.querySelector('.cardOverflow > div').style.transform = 'translate(0)'
		}, 500)
	}
  
  return (
      <>
        <CreditCard formData={formData} />
          <main className='cardOverflow'>
            <div>
              {validate
                ? <CardThanks setFormData={setFormData} animateSlider={animateSlider} />
                : <CardForm setFormData={setFormData} animateSlider={animateSlider} formData={formData} />
              }
            </div>
            </main>
        <footer className='hidden fixed bottom-0 right-2 text-xs opacity-80 sm:inline-block'>
          <p className='m-3'>Challenge by <a className='text-blue-900' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a className='text-blue-900' href="https://github.com/frandomitrovic/" target="_blank">Fran</a>.</p>
        </footer>
      </>
  );
}

export default App;
