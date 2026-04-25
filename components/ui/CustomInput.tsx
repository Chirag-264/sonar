import React from 'react'
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

interface customInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
}

const CustomInput = ({ control, name, label, placeholder }: customInput) => {
  return (
    <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="flex flex-col gap-2">
                <FieldLabel htmlFor={name} className="text-14 font-medium text-gray-700">
                    {label}
                </FieldLabel>
                <Input
                    {...field}
                    id={name}
                    type={name === 'password' ? 'password' : 'text'}
                    aria-invalid={fieldState.invalid}
                    placeholder={placeholder}
                />
                {fieldState.invalid && (
                    <FieldError errors={[{ message: fieldState.error?.message || "Invalid input"}]} className="text-12 text-red-500"/>
                )}
                </Field>
            )}
        />
  )
}

export default CustomInput