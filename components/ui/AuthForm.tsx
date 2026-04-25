'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as z from "zod"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthFormSchema} from '@/lib/utils';
import CustomSelect from './CustomSelect';
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
import CustomInput from './CustomInput';
import { Loader2 } from 'lucide-react';

const INDIAN_STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", 
  "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", 
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", 
  "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", 
  "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", 
  "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
] as const;

// 1. Defined the TypeScript Interface for your props
interface AuthFormProps {
  type: 'sign-in' | 'sign-up';
}

const AuthForm = ({ type }: AuthFormProps) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const formSchema = AuthFormSchema(type)

  // 3. Initialized the form with the correct email/password defaults
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      state: "",
      zipCode: "",
      pan: "",
      address1: "",
      dateOfBirth: ""
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
        //sign-up with appwrite and create plaid token
        if(type === 'sign-in') {
            //sign-in
        }
        if(type === 'sign-up') {
            //sign-up
        }
    }
    catch(err) {
        console.log(err)
    }
    finally {
        setIsLoading(false)
    }
  }

  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
            <Link href='/' className='cursor-pointer items-center flex gap-1'>
                <Image alt='Sonar Logo' src='/icons/logo.svg' width={30} height={30} className='size-[50px] max-xl:size-14'/>
                <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Sonar</h1>
            </Link>
            <div className='flex flex-col gap-1 md:gap-3'>
                <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
                    {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                </h1>
                <p className='text-16 font-normal text-gray-600'>
                    {user ? 'Link your account to get started' : 'Enter your details'}
                </p>
            </div>
        </header>

        {user ? (
            <div className='flex flex-col gap-4'>
                {/* Plaid Account Linking will go here */}
            </div>
        ) : (
            <>
                <Card className="w-full sm:max-w-md border-none shadow-none bg-transparent">
                    <CardContent className="p-4">
                        <form id="auth-form" onSubmit={form.handleSubmit(onSubmit)}>
                            <FieldGroup className="flex flex-col gap-4">
                                 {type === 'sign-up' && (
                                    <>
                                        <div className='flex gap-4'>
                                            <CustomInput 
                                                control={form.control} 
                                                name='firstName'
                                                label='First Name'
                                                placeholder='Enter your first name'
                                            />
                                            <CustomInput 
                                                control={form.control} 
                                                name='lastName'
                                                label='Last Name'
                                                placeholder='Enter your last name'
                                            />
                                        </div>
                                        <CustomInput 
                                            control={form.control} 
                                            name='address1'
                                            label='Address'
                                            placeholder='Enter your specific address.'
                                        />
                                        <CustomInput 
                                            control={form.control} 
                                            name='city'
                                            label='City'
                                            placeholder='Enter your city.'
                                        />
                                        <div className='flex gap-4'>
                                            <CustomSelect 
                                                control={form.control}
                                                name='state'
                                                label='State'
                                                options={INDIAN_STATES}
                                            />
                                            <CustomInput 
                                                control={form.control} 
                                                name='zipCode'
                                                label='Zip Code'
                                                placeholder='Ex: 201010'
                                            />
                                        </div>
                                        <div className='flex gap-4'>
                                            <CustomInput 
                                                control={form.control} 
                                                name='dateOfBirth'
                                                label='Date Of Birth'
                                                placeholder='dd-mm-yyyy'
                                            />
                                            <CustomInput 
                                                control={form.control} 
                                                name='pan'
                                                label='PAN'
                                                placeholder='Enter your PAN number'
                                            />
                                        </div>
                                        
                                    </>
                                 )}
                                
                                {/* EMAIL FIELD */}
                                <CustomInput 
                                    control={form.control} 
                                    name='email'
                                    label='Email'
                                    placeholder='Enter your email'
                                />

                                {/* PASSWORD FIELD */}
                                <CustomInput 
                                    control={form.control}
                                    name='password'
                                    label='Password'
                                    placeholder='Enter your password' 
                                />
                                
                            </FieldGroup>
                        </form>
                    </CardContent>
                    
                    <CardFooter className="p-4 mt-6 flex-col gap-4">
                        <Button type="submit" disabled={isLoading} form="auth-form" className="w-full bg-bankGradient text-white shadow-form">
                            {isLoading ? (
                                <>
                                    < Loader2 size={20} className='animate-spin' />
                                </>
                            ) : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
                        </Button>

                        <div className="flex justify-center gap-1">
                            <p className="text-14 font-normal text-gray-600">
                                {type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}
                            </p>
                            <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="text-14 cursor-pointer font-medium text-bankGradient">
                                {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </>
        )}
    </section>
  )
}

export default AuthForm