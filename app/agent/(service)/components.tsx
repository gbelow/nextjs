"use client"

import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import Link  from 'next/link'

export const ServiceNavBar = () => {
  const [route, setRoute] = useState('')

  let tabs = [
    {
      id: "triage",
      label: "Triagem",
      },
    {
      id: "procedure",
      label: "Procedimento"},
    {
      id: "reporting",
      label: "Documentação"},
    {
      id: "finish",
      label: "Finalizar"}
  ];

  return(
    <div className='flex flex-row space-x-4 text-lg justify-center bg-zinc-200 py-1  mb-2'>
      {tabs.map(el => 
        <Link href={'/agent/'+el.id}>
          <Card>
            <CardBody><p className="text-primary">{el.label}</p></CardBody>
          </Card>
        </Link>
        )}
    </div>
  )
}
