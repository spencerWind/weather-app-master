import React, {useState} from 'react'
import Form from '../components/Form';
import Navigation from '../components/Navigation';
import Display from '../components/Display';



const Main = () => {



    return (
        <div className=" text-slate-100 max-w-[1280px] m-auto px-4">
            <Navigation />
            <div className="my-16">
                <h3 className='mb-4 font-semibold text-primary'>My forecasts</h3>
                <div className="flex flex-row justify-between gap-16">
                    <Display />
                </div>
            </div>
        </div>
    );
}

export default Main