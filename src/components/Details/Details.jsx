import React, { useContext, useEffect, useState } from "react";
import { contextApi } from "../../ContextComponent/Context";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const Details = (props) => {
  const [findedData, setFindedData] = useState(false);

  const { data } = useContext(contextApi);

  const { id } = useParams();

  useEffect(() => {
    const findeddata = data.find((item) => item.id == id);

    setFindedData(findeddata);
  }, [data]);

  if (!findedData) return "";

 

  const {
    image,
    segment_name,
    description,
    price,
    area,
    location,
    facilities,
    estate_title,
    status,
  } = findedData;

  const [first, second, third] = facilities;

  return (
    <Card className=" my-10 flex flex-col container mx-auto  md:flex-row gap-8 p-4">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 md:w-2/5 shrink-0 md:rounded-r-none"
      >
        <img
          src={image}
          alt="card-image"
          className=" w-full h-[400px] rounded-lg rounded-r-none "
        />
      </CardHeader>
      <CardBody className="text-xl font-semibold space-y-4">
        <Typography variant="h4" color="blue-gray" className="mb-4 ">
          Estate :{estate_title}
        </Typography>
        <hr />

        <Typography variant="h6" color="gray" className="mb-2">
          Segment : {segment_name}
        </Typography>
        <hr />
        <Typography variant="h6" color="gray" className="mb-2">
          Description:
          {description}
        </Typography>
        <Typography variant="h6" color="gray" className="mb-2">
          Description: #{first}
          <span className="mx-8">#{second}</span>
          <span>#{third}</span>
        </Typography>
        <hr />

        <Typography color="black" className="font-normal">
          <span className=" ">price: {price}</span>
        </Typography>
        <hr />
        <Typography color="black" className="font-normal space-x-2">
          Status: {status}
        </Typography>

        <hr />
      </CardBody>
    </Card>
  );
};

export default Details;
