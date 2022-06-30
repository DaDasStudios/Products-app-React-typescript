import { FormControl } from '../form/FormControl'
import Container from '../layout/Container'
import React, {useState} from 'react'
import { useProductsContext } from '../../context/ProductsContext'

export type ProductFormState = {
  name: string,
  description: string,
  price: string | '',
  image: File | string
}

const initialState: ProductFormState = {
  name: '',
  description: '',
  price: '',
  image: ''
}

export const AddProduct = () => {
  const {addProduct} = useProductsContext()
  const [form, setForm] = useState(initialState)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    addProduct(form)
    setForm(initialState)
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>){
    e.target.name === 'image' && e.target.files ? setForm({...form, [e.target.name]: e.target.files[0]}) : setForm({...form, [e.target.name]: e.target.value})
    
  } 

  return (
    <Container>
        <form onSubmit={handleSubmit}>
          <section className='flex flex-col lg:w-2/3 lg:mx-auto xl:w-1/2'>
            <FormControl onChange={handleOnChange} label='Name' name='name' required={true} value={form.name}></FormControl>
            <FormControl onChange={handleOnChange} label='Description' name='description' required={true} value={form.description}></FormControl>
            <FormControl onChange={handleOnChange} label='Price' name='price' type='number' required={true} value={form.price}></FormControl>
            <FormControl onChange={handleOnChange} label='Image' name='image' type='file' required={true}></FormControl>
            <button className='bg-sky-500 hover:bg-sky-600 text-white font-semibold px-10 py-4 rounded-lg mt-4 mx-auto' type="submit">Add Product</button>  
          </section>
        </form>

    </Container>
  )
}
