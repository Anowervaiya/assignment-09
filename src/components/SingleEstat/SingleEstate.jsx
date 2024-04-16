import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
function SingleEstat({ item }) {

   
  
  const { id, image, estate_title,description,segment_name ,price,status} = item;
  
//   const [first,second] = tags;
   return (
  
       <Card className=" overflow-hidden p-4 border">
         <CardHeader
           floated={false}
           shadow={false}
           color="transparent"
           className="m-0 rounded-lg py-4 h-[300px] bg-gray-200"
         >
           <img
             src={image}
             className="mx-auto h-full  rounded-lg"
             alt="ui/ux review check"
           />
         </CardHeader  >
         <div className='py-8'>
           <Typography
             variant="h6"
             color="blue-gray"
             className=" *:text-[#23BE0A] *:bg-[#23BE0A29] *:px-3 *:py-2 *:rounded-full flex flex-wrap gap-4"
           >
          
           </Typography>
           <Typography
             className="mt-8  flex flex-col 
            "
           >
             <h1 className="text-xl text-black font-bold ">{ estate_title}</h1>
             <p className="font-bold text-xl mt-4 ">Segment : {segment_name}</p>
             <p className="font-bold text-xl mt-4 ">  {description}</p>

             <div className="border-b-4 mt-4 border-dashed"></div>
           </Typography>
         </div>
         <div className="flex mx-6 items-center justify-between flex-grow pb-4">
           <div className="flex font-bold text-xl  items-center">{status}</div>
           <Typography className="font-bold text-xl justify-center flex  items-center gap-4">
             {price} 
           </Typography>
         </div>
         <Link to={`/details/${id}`} className="inline-block">
            <Button
              variant="text"
              className="flex items-center bg-[#23BE0A] text-white hover:bg-transparent hover:border hover:border-[#23BE0A]  p-3 hover:text-black gap-2"
            >
              View Property
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </Link>
      
       </Card>
    
     
   );
}

export default SingleEstat
