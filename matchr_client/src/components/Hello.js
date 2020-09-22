import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function Daters(){
    const [daters, setDaters] = useState([])

    const getDaters = async () => {
      try {
        const response = await fetch('http://localhost:3000/users')
        const daters = await response.json()
        // await console.log(daters)
        setDaters(daters)
      } catch (error) {
        console.error(error)
      }
    }
  
    useEffect(
      () => {
      const callDaters = async () => {
        await getDaters()
      }
      callDaters()
    }, [] )

    const [formInputs, updateFormInputs] = useState({
        author: '',
        content: '',
        title: ''
      })
 
      const handleChange = (event) => {
        const updatedFormInputs = Object.assign({},
          formInputs, {[event.target.id]: event.target.value})
          updateFormInputs(updatedFormInputs)
      }
      const handleSubmit = async (event) => {
        event.preventDefault()
        try {
          const response = await axios.post(
            'http://localhost:3000/users',
            formInputs
          )
          const createdDater = response.data
          await updateFormInputs({
            name: '',
            starsign: '',
            age: '',
            img: '',
            ltl: ''
          })
          await setDaters([createdDater, ...daters])
        } catch (error) {
          console.error(error)
        }
      }

      const left = daters.slice(0,3)
      const right = daters.slice(3)
    return (
        <div>
            <div className='threeParts'>
            <div className='left'>
            {
                left.map(dater => {
                    return (
                        <div key={dater.id}>
                            <h2>Left</h2>
                            <h3>Name: {dater.name} </h3>
                            <img src={dater.img} alt={dater.name} />
                            <h4>Starsign: {dater.starsign}</h4>
                            <h4>Age: {dater.age}</h4>
                            {dater.ltl
                                ? <h5>Loves to laugh and have a great time</h5>
                                : <h5>Hates laughing and is a lovable grump</h5>
                            }
                        </div>
                    )
                })
            }
            </div>
            <main>
            <img src='http://www.clker.com/cliparts/h/A/F/F/k/X/question-mark-box-md.png' alt='question mark' />
            </main>
            <div className='right'>
            {
                right.map(dater => {
                    return (
                        <div key={dater.id}>
                            <h2>Right</h2>
                            <h3>Name: {dater.name} </h3>
                            <img src={dater.img} alt={dater.name} />
                            <h4>Starsign: {dater.starsign}</h4>
                            <h4>Age: {dater.age}</h4>
                            {dater.ltl
                                ? <h5>Loves to laugh and have a great time</h5>
                                : <h5>Hates laughing and is a lovable grump</h5>
                            }
                        </div>
                    )
                })
            }
            </div>
            </div>
            <footer>
                <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name: </label>
            <input 
            type='text' 
            id='name' 
            onChange={handleChange}
            value={formInputs.name} />

            <label htmlFor='starsign'>Starsign: </label>
            <input 
            type='text' 
            id='starsign' 
            onChange={handleChange}
            value={formInputs.starsign} />

<label htmlFor='age'>Age: </label>
            <input 
            type='text' 
            id='age' 
            onChange={handleChange}
            value={formInputs.age} />

<label htmlFor='img'>Img: </label>
            <input 
            type='text' 
            id='img' 
            onChange={handleChange}
            value={formInputs.img} />

<label htmlFor='ltl'>Likes to Laugh (Boolean): </label>
            <input 
            type='text' 
            id='ltl' 
            onChange={handleChange}
            value={formInputs.ltl} />

            <input type='submit' value='submit' />

          
                </form>
            </footer>

        </div>
    )
}