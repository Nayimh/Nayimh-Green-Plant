import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const Booking = () => {
    const { id } = useParams()
    
    const [plants, setPlants] = useState([]);
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch('/tree.json')
            .then(res => res.json())
            .then(dt => setPlants(dt)) 
    }, [])
    
    useEffect(() => {
        const foundDetails = plants.find(plant => plant.id === parseInt(id));
        setDetails(foundDetails);
   } ,[id, plants])

  


    return (
        <div className='pt-5 pt-5'>
            <h1 className='text-center text-success shadow p-2'>This is Booking 
            </h1>
            <div className='container'>
                <div className='row'>

                    <div className='col-sm-12 col-md-5 col-lg-5'>
                        
                    <Card  className='my-5 detailsCard shadow'>
    <Card.Img variant="top" src={details?.img} />
    <Card.Body>
                    <Card.Title className='name text-center'>Name: { details?.name }</Card.Title>
      <Card.Text className='price text-center'>
                       Price: ${ details?.price}
      </Card.Text>
      
      {/* <Card.Text className='desc'>
                        { details?.desc}
      </Card.Text> */}
    </Card.Body>
    <Card.Footer className='text-center'>
                   <button className='cardBtn'>Purchase</button>
      
    </Card.Footer>    
  </Card>
                 </div>
                    <div className='col-sm-12 col-md-6 col-lg-6'> 
                        
               </div>

                </div>
           </div>
           
        </div>
    );
};

export default Booking;