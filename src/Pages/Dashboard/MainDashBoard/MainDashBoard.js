import React from 'react';
import { Outlet } from 'react-router-dom';
import Drawer from '../Drawer/Drawer';



const MainDashBoard = () => {
   
    return (
        <>
        
        <div>
                <h1 className='text-center text-white bg-success p-2 shadow'>Dashboard</h1>
                 <Drawer/> 
               
               <Outlet/>
               
            </div>
          
            </>
    );
};

export default MainDashBoard;