import Image from "next/image";
import {useState, useEffect} from 'react'
import {PerformanceChart, AgentHeader, Sidebar} from '../components'
import { ArrowRightStartOnRectangleIcon} from "@heroicons/react/24/solid"
import {Input} from "@nextui-org/react"

export default function CallService() {
  
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row text-xl">
          <div className="col-span-3 m-2 p-3 ">
              
          </div>
          <div className="col-span-5 m-2 p-3 shadow shadow-black rounded text-center">
              ACEM PRIME
          </div>
          <div className="col-span-3 m-2 p-3 shadow shadow-black rounded text-center">
              Atendimento Telefônico
          </div>
        </div>
        <div className="flex flex-row">
          <div className="col-span-3 m-2 p-3  rounded text-center">
              <span className="text-md">Etapa do atendimento: </span><span className="font-bold">TRIAGEM</span>
          </div>
          <div className="flex flex-col col-span-3 m-2 p-3 shadow shadow-black rounded text-center justify-center">
              <p>Interação na etapa</p>
              <p>1:48</p>
          </div>
        </div>
        <div className="flex flex-col">
          <Input type="email" label="CPF" color={'primary'} className={'w-40'}/>
        </div>
        <div className="">
          <Input type="email" label="Telefone com DDD" color={'primary'} className={'w-40'}/>
        </div>
        <div className="">
          <Input type="email" label="Status do Contrato" color={'primary'} className={'w-40'}/>
        </div>
      </div>
    </>
  );
}