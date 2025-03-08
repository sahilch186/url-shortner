import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import Login from '@/components/Login'
import Signup from '@/components/Signup'

const Auth = () => {
    const [searchParams] = useSearchParams();
    return (
        <section>
            <h1 className='text-3xl md:text-5xl font-semibold md:font-bold text-center mb-5'>{searchParams.get('createNew') ? 'Hold up! Let’s ' : ''}Login / Signup to Shrinkster {searchParams.get('createNew') ? ' First' : ''}</h1>
            <h2 className='text-xl md:text-3xl text-center'>Shorten, manage, and track your URLs with ease.</h2>
            <Tabs defaultValue="login" className="max-w-[400px] mx-auto my-10">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Signup</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Login />
                </TabsContent>
                <TabsContent value="signup">
                    <Signup />
                </TabsContent>
            </Tabs>
        </section>
    )
}

export default Auth