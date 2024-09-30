
import {Input} from "@nextui-org/react"

export default function CallService() {
  
  return (
    <div className="flex flex-col pt-3">        
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
  );
}