import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export function Form() {
    const [count, setCount] = useState(0)
    return (
        <div className="px-[150px] h-full">
            <div className="flex flex-col gap-2 mb-[32px]">
                <h1 className="font-semibold text-[25px] text-[#FFFF]">Formulário de Adesão</h1>
                <p className="text-[14px] font-normal text-[#9E9E9E]">Preparado para o evento ?</p>
            </div>

            <div className="flex flex-col gap-[22px] mb-[32px]">
                <div className="flex flex-col gap-3">
                    <label className="text-[15px] text-[#FFFFFF] font-semibold">Nome da empresa</label>
                    <input
                        className="w-[400px] bg-[#17181B] rounded-[4px] py-[16px] px-[22px] text-[12px] text-[#9E9E9E] font-normal border-[2px] border-[#1F2126] outline-none"
                        type="text"
                        placeholder="Insira o nome da empresa"
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <label className="text-[15px] text-[#FFFFFF] font-semibold">NIF</label>
                    <input
                        className="w-[400px] bg-[#17181B] rounded-[4px] py-[16px] px-[22px] text-[12px] text-[#9E9E9E] font-normal border-[2px] border-[#1F2126] outline-none"
                        type="text"
                        placeholder="+244 943 927 876"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <label className="text-[15px] text-[#FFFFFF] font-semibold">Email</label>
                    <input
                        className="w-[400px] bg-[#17181B] rounded-[4px] py-[16px] px-[22px] text-[12px] text-[#9E9E9E] font-normal border-[2px] border-[#1F2126] outline-none"
                        type="text"
                        placeholder="Insira o seu email"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <label className="text-[15px] text-[#FFFFFF] font-semibold">Numero telefonico</label>
                    <input
                        className="w-[400px] bg-[#17181B] rounded-[4px] py-[16px] px-[22px] text-[12px] text-[#9E9E9E] font-normal border-[2px] border-[#1F2126] outline-none"
                        type="text"
                        placeholder="Insira o seu numero telefonico"
                    />
                </div>
            </div>

            <div className="flex gap-5 ">
                <Select>
                    <SelectTrigger className="w-[180px] bg-[#0B0B0C] text-[#FFFFFF] font-semibold rounded-[4px] border-[2px] border-[#1F2126] outline-none">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent className="">
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>


                <div className="flex gap-3 w-auto h-auto justify-center items-center mb-[20px]"> 
                    <div 
                     onClick={() => setCount(prev => prev === 0 ? 0 : prev - 1)}
                    className="w-[32px] h-[30px] rounded-[5px] bg-[#30CBE8] flex justify-center items-center text-[18px] text-[#ffff] hover:cursor-pointer font-bold">
                        -
                    </div>
                    <div className="w-[64px] h-[40px] rounded-[5px] bg-[#FFFFFF] flex justify-center items-center text-[18px] text-[#1c1c1c] hover:cursor-pointer font-bold">
                        {count}
                    </div>
                    <div 
                    onClick={() => setCount(prev => prev +1)}
                    className="w-[32px] h-[30px] rounded-[5px] bg-[#30CBE8] flex justify-center items-center text-[18px] text-[#ffff] hover:cursor-pointer font-bold">
                        +
                    </div>
                </div>      
            </div>


            <div className="flex flex-col gap-6 py-[50px]">
            <Select>
                    <SelectTrigger className="w-[180px] bg-[#0B0B0C] text-[#FFFFFF] font-semibold rounded-[4px] border-[2px] border-[#1F2126] outline-none">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent className="">
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

               <div className="flex flex-col gap-3">
               <div className="flex gap-3">
                    <input type="checkbox" name="" id="" />
                    <p className="text-[16px] text-[#FFFFFF] font-medium">Aceitas os termos e condições?</p>
                </div>

                <button className="w-[400px] h-[56px] bg-[#00A7E1] flex justify-center items-center rounded-[4px] text-[18px] font-medium text-[#ffff]">
                   <p>Avançar</p>
                </button>
               </div>
            </div>
        </div>
    )
}