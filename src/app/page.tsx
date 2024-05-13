"use client"

import Image from 'next/image'
import logo from "@/../public/logo.svg"
import rame from "@/../public/rame.svg"
import { useState } from 'react'
import background1 from "../../public/background1.png"
import { Form } from './components/form'

type FormData = {

  nome: string;

  email: string;

  type_tickets: string;

};


export default function Home() {

  const [loginFormAdesao, setLoginFormAdesao] = useState<FormData>({

    nome: "",

    email: "",

    type_tickets: "",

  });

  const handleFormData = (event: React.ChangeEvent<HTMLInputElement>, key: keyof FormData) => {

    setLoginFormAdesao({ ...loginFormAdesao, [key]: event.target.value });

  };
  return (
    <div className='bg-[#141416] w-screen h-screen flex justify-between'>
      <div className='  w-[700px]  h-screen overflow-auto'>

        <div className='w-full py-[44px] px-[70px] flex justify-between'>
          <Image
            src={logo}
            alt='..'

          />


          <div className='flex gap-3 text-[#FFFF] font-semibold '>
            <h1 className='hover:text-[#dad9d9] duration-700 transition-all hover:cursor-pointer'>Particular</h1>
            <h1 className='hover:text-[#dad9d9] duration-700 transition-all hover:cursor-pointer'>Entidade</h1>
          </div>
        </div>

        <div>
          <Form />
        </div>

      </div>

      <div className=' flex-1 h-screen overflow-hidden'>
        <Image
          src={background1}
          alt='..'
          className='w-full h-screen object-cover'
        />
      </div>
    </div>
  )
}
