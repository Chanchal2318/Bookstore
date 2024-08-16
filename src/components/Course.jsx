import React, { useEffect } from 'react';
import Cards from '../components/Cards';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Course() {
  const [book,setBook] = useState([])
  useEffect(() => {
    const getBook = async() => {
        try{
          const res= await axios.get("http://localhost:4000/book");
          console.log(res.data);
          setBook(res.data);
        }catch(error){
          console.log(error)
        }
     }
     getBook();
  },[])
  return (
  <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
         <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl'>
              We're delighted to have you{" "} 
              <span className='text-pink-500'>Here! :)</span>
            </h1>
            <p className='mt-10 items-center justify-center text-center'>
              Here, We are providing the best courses that will enhance your learning. This course contains various features like DPP(Daily Practice Paper) this will really be helpful for you people.We are here with you for next 3-4 months and we are available 24/7 to help you in your learning journey.
            </p>
            <Link to="/">
                 <button className="btn btn-active btn-secondary mt-10 hover:bg-pink-700 duration-300 rounded-md items-justify-center">Back</button>
            </Link>
         </div>
         <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            book.map((item)=>{
              <Cards key={item.id} item={item}/>
            })
          }
         </div>
     </div>
  
  </>
  );
}

export default Course
