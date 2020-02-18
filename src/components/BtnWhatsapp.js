import React from 'react'
import wa from '../assets/btn-whatsapp.png';

const BtnWhatsapp = () => {
    return(
        <div className='bg-white shadow rounded px-5 py-2 py-2 flex flex-col items-center mt-6 sm:mt-0 sm:flex-row'>
            <img src={wa} alt='Whatsapp' />
            <div className='ml-4'>
                <h3 className='font-bold text-2xl'>Orçar seu projeto</h3>
                <p className='text-xs'>Projeto e orçamento sem compromisso</p>
                <p className='font-bold'>(99) 99999-9999</p>
            </div>
        </div>
    )
}

export default BtnWhatsapp