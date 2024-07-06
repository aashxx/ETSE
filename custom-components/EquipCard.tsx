import { EquipCardProps } from '@/utils/types';
import React from 'react';

const EquipCard: React.FC<EquipCardProps> = ({ img, title }) => {
    return (
        <div className="h-[350px] cursor-pointer md:w-[40%] w-[350px] rounded-lg border-2 border-etse-primary text-[white] hover:shadow-xl">
            <div className='h-[85%]'>
                <img className='h-full w-full rounded-t-lg object-cover' src={img} alt={title} />
            </div>
            <h2 className='w-full bg-etse-primary text-xl px-5 flex justify-center items-center text-[white] text-center h-[15%] rounded-b-sm'>
                {title}
            </h2>
        </div>
    )
}

export default EquipCard;
