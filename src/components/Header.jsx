import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link2, LogOut } from 'lucide-react'


const Header = () => {
    const linkTo = useNavigate();
    const login = true;
    return (
        <header className='bg-blue-50 shadow fixed w-full top-0'>
            <nav className='px-4 py-3 max-w-[1200px] mx-auto flex justify-between items-center'>
                <Link to='/'><img src="/shrinkster-logo.png" alt="Shrinkster" className='h-8' /></Link>
                <div>
                    {
                        login ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Hello Username</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem><Link2 /> My Links</DropdownMenuItem>
                                    <DropdownMenuItem><LogOut className='text-red-500' /> <span className='text-red-500'>Logout</span></DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) :
                            (<Button onClick={() => linkTo('/auth')}>Login / Signup</Button>)
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header