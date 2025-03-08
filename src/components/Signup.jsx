import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const Signup = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Create Your Account!</CardTitle>
                <CardDescription>
                    Join Shrinkster to manage, customize, and monitor your links all in one place.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="name-signup">Name</Label>
                    <Input id="name-signup" type="text" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="email-signup">Email</Label>
                    <Input id="email-signup" type="email" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="password-signup">Password</Label>
                    <Input id="password-signup" type="password" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="image-signup">Profile Image (Optional)</Label>
                    <Input id="new" type="file" />
                </div>
            </CardContent>
            <CardFooter>
                <Button>Signup</Button>
            </CardFooter>
        </Card>
    )
}

export default Signup