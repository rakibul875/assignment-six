import React, { use } from 'react';
import DataCard from '../DataCard/DataCard';

const ProdactsSection = ({DataP,carts,setCarts}) => {
    const AllData=use(DataP)
    
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 my-10 gap-10 max-w-7xl mx-auto p-5'>
            {
                AllData.map(data=><DataCard key={data.id} data={data} carts={carts} setCarts={setCarts}></DataCard>)
            }
        </div>
    );
};

export default ProdactsSection;