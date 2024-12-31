import { Link } from 'react-router-dom';

export default function NotFound404() {
  return (
    <div className="flex flex-col text-center h-lvh items-center gap-5 place-content-center">
      <h1 className='text-5xl font-bold'>404 Page Not Found</h1>
      <p>It seems you have been sent to the shadow realm!</p>
      <p>There are no games here duelist!</p>
      <Link to='/'>
        <button className='mt-4 text-black font-bold bg-white flex p-4 mx-auto rounded-lg
          hover:bg-pink-600'>Back to Home</button>
      </Link>
    </div>
  )
};