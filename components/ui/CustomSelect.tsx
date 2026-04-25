import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from 'next/link'
import Image from 'next/image'
import * as z from "zod"
import { Controller, FormProps, useForm, Control, FieldPath } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthFormSchema } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const formSchema = AuthFormSchema('sign-up')

interface customSelect {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    options: readonly string[],
    label: string
}


const CustomSelect = ({control, name, options, label}: customSelect) => {
  return (
<Controller
    name={name}
    control={control}
    render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className="flex flex-col gap-2">
            <FieldLabel htmlFor={name} className="text-14 font-medium text-gray-700">
                {label}
            </FieldLabel>
            
            <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger id={name} className={`bg-white ${fieldState.invalid ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px] bg-white">
                    {options.map((stateName: string) => (
                        <SelectItem key={stateName} value={stateName} className="cursor-pointer hover:bg-gray-100">
                            {stateName}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {fieldState.invalid && fieldState.error && (
                <FieldError errors={[fieldState.error]} className="text-12 text-red-500" />
            )}
        </Field>
    )}
/>
  )
}

export default CustomSelect