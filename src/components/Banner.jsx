import React from 'react';
import SectionLayout from './structural/SectionLayout';
import InternalSectionLayout from './structural/InternalSectionLayout';


const Banner = ({title}) => {
    return (
        <SectionLayout className='pt-20'>
            <InternalSectionLayout className='md:py-5'>
                <div className='bg-violet-200 py-4 -mx-[40rem]'>
                    <div className='flex flex-row justify-between mx-[40rem] px-6'>
                        <span className='font-bold text-neutral-900 text-xl'>{title}</span>
                    </div>
                </div>
            </InternalSectionLayout>
        </SectionLayout>
    )
}

export default Banner;