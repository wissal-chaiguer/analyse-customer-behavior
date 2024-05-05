import React from 'react';
import SectionLayout from './structural/SectionLayout';
import InternalSectionLayout from './structural/InternalSectionLayout';
import Card1 from '../assets/card1.svg';
import Card2 from '../assets/card2.svg';
import Card3 from '../assets/card3.svg';
import Card4 from '../assets/card4.svg';
import { Link } from 'react-router-dom';


const Card = ({title, description, image}) => {
    return(
        <div className='inline-flex flex-col p-6 justify-between h-auto'>
            <img src={image} className='h-64'/>
            <h3 className='text-2xl font-bold text-center mt-6 mb-6'>{title}</h3>
        </div>
    )
}

const Section03 = () => {

    return(
        <SectionLayout>
            <InternalSectionLayout>
                <div className="grid grid-flow-row items-center mx-auto">
                    <div className="mx-auto text-center max-w-4xl">
                        <p className="text-lg mb-4">Explorer notre étude</p>
                        <h2 className="h2 font-bold">Les details de notre étude</h2>
                        <p className="text-xl py-6">
                        Découvrez des informations clés sur l'Apple Watch. Explorez notre étude pour comprendre les motivations des clients et les tendances émergentes.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto'>
                        <Link to='/methodology' className=' bg-violet-200 rounded-xl w-72 hover:bg-violet-500 ease-in-out duration-300 hover:text-white'>
                            <Card title='Méthodologie' image={Card3}/>
                        </Link>
                        <Link to='/studyreason' className=' bg-violet-200 rounded-xl w-72 hover:bg-violet-500 ease-in-out duration-300 hover:text-white'>
                            <Card title='Objectifs' image={Card1}/>
                        </Link>
                        <Link to='/resultat' className=' bg-violet-200 rounded-xl w-72 hover:bg-violet-500 ease-in-out duration-300 hover:text-white'>
                            <Card title='Résultats' image={Card4}/>
                        </Link>
                        <Link to='/histoire' className=' bg-violet-200 rounded-xl w-72 hover:bg-violet-500 ease-in-out duration-300 hover:text-white'>
                            <Card title='Perspectives' image={Card2}/>
                        </Link>
                    </div>
                </div>
            </InternalSectionLayout>
        </SectionLayout>
    )

}

export default Section03;