import Container from '../components/layout/Container'
import { NavLink } from 'react-router-dom'

export const NotFound404 = () => {
  return (
    <Container>
      <article className='text-center'>
        <h1 className='text-gray-900 font-extrabold text-6xl'>404 | Page not found</h1>
        <div className='text- text-gray-500 mt-10'>
          <p>Sorry, something went wrong, try to go back or reload</p>
        </div>
        <div className='mt-36 text-2xl font-extrabold text-gray-400 hover:text-sky-600 cursor-pointer flex justify-center items-center gap-4'>
        <NavLink to={'/'}> Go back</NavLink>
        </div>
      </article>
    </Container>
  )
}
