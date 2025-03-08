import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const Login = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Welcome Back!</CardTitle>
                <CardDescription>
                    Login to access your dashboard and track your shortened links effortlessly.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="email-login">Email</Label>
                    <Input id="email-login" type='email' />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="password-login">Password</Label>
                    <Input id="password-login" type='password' />
                </div>
            </CardContent>
            <CardFooter>
                <Button>Login</Button>
            </CardFooter>
        </Card>
    )
}

export default Login