import Image from 'next/image'
import logo from "@/../public/logo.svg"
import rame from "@/../public/rame.svg"
import { useState } from 'react'

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
    <div className="bg-[#FFFFFF] w-screen h-screen overflow-hidden">
      <div className='w-full px-[45px] py-[18px]'>
        <Image
          src={logo}
          alt='..'
        />
      </div>


      <div className='flex w-full justify-center items-center'>
        <div className='h-[500px] w-[456px]'>
          <div className='flex flex-col gap-4 mb-[25px]'>
            <h1 className='text-[28px] text-zinc-800 font-semibold'>Formulário de Adesão</h1>
            <p className='text-[#575F6E] text-[16px] w-[456px] font-normal'>texto testing in the data for profile. It will take a couple of minutes. </p>
          </div>


          <div className='flex gap-4'>
            <input
              onChange={(event) => handleFormData(event, 'nome')}
              type="checkbox"
              name="" id="" />
            <div className='flex gap-2'>
              <p className='text-[16px] text-zinc-800 font-normal'>Aceitas o termos de privacidade da</p>
              <p className='text-[16px] text-[#00A7E1] font-normal'>gsc?</p>
            </div>
          </div>

          <div className='w-full h-[456px] border-[1px] border-[#E2E4E5] rounded-md py-[32px] px-[32px]'>
            <h1 className='text-[20px] mb-[30px] text-[#242731] font-semibold'>Gera já o seu tickes!</h1>

            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-3'>
                <p className='text-[14px] font-normal text-[#242426]'>Nome</p>
                <input type="text" className='w-[392px] py-[10px] px-4 outline-none border-b-[1px] placeholder:text-[#242426] border-b-[#E2E4E5]' placeholder='Digite o seu nome' />
              </div>

              <div className='flex flex-col gap-3'>
                <p className='text-[14px] font-normal text-[#242426]'>Email</p>
                <input type="text" className='w-[392px] py-[10px] px-4 outline-none border-b-[1px] placeholder:text-[#242426] border-b-[#E2E4E5]' placeholder='Digite o email' />
              </div>

              <div className='flex flex-col gap-3'>
                <p className='text-[14px] font-normal text-[#242426]'>Tipo de tickets</p>
                <input type="text" className='w-[392px] py-[10px] px-4 outline-none border-b-[1px] placeholder:text-[#242426] border-b-[#E2E4E5]' placeholder='Digite o tipo de tickets' />
              </div>
            </div>
          </div>
        </div>



        <Image
          src={rame}
          alt='..'
          className='hidden lg:flex'
        />
      </div>
    </div>
  )
}
