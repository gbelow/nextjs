"use client"

import { useState, useMemo } from "react";
import { Card, CardBody, Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";
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
      id: "finish",
      label: "Finalizar"}
  ];

  return(
    <div className='flex flex-row space-x-4 text-lg justify-center bg-zinc-200 py-1  mb-2'>
      {tabs.map(el => 
        <Link href={'/agent/'+el.id}>
          <Card>
            <CardBody><p className="text-primary">{el.label + '  >> '} </p></CardBody>
          </Card>
        </Link>
        )}
    </div>
  )
}

export const IssueSelector = ({items}: {items:{id: string, label:string}[]}) => {
  return (
    <Autocomplete
      variant={'bordered'}
      isRequired
      label=""
      defaultItems={items}
      placeholder="Search"
      defaultSelectedKey=""
      className="flex h-11 max-w-xs my-1"
      classNames={{
        popoverContent: 'bg-zinc-500 border-primary border rounded-medium',
        base: 'flex shrink border-primary border rounded-medium'
      }}
    >
      {items.map((item) => <AutocompleteItem key={item.id}>{item.label}</AutocompleteItem>)}
    </Autocomplete>
  );
} 
