import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const faqs = [
        {
            "question": "What is Shrinkster?",
            "answer": "Shrinkster is an easy-to-use URL shortener that allows users to convert long, complex links into short, clean, and shareable URLs. It helps in making links more manageable while providing insights into their performance. Whether you're sharing links on social media, emails, or websites, Shrinkster ensures they look professional and are easy to track."
        },
        {
            "question": "Do I need an account to use Shrinkster?",
            "answer": "Yes, creating an account is required to access Shrinkster. This ensures that users can securely manage their shortened links, track analytics, and make modifications when needed. By having an account, you also gain access to features like viewing click statistics and organizing your links in one place."
        },
        {
            "question": "Can I track the performance of my shortened links?",
            "answer": "Yes! Shrinkster provides real-time analytics to help you understand how your links are performing. You can see the number of clicks, the geographic location of visitors, referral sources, and device types. This data helps you optimize your link-sharing strategy by knowing where your audience is coming from and what works best."
        },
        {
            "question": "Is Shrinkster secure?",
            "answer": "Absolutely! Shrinkster takes security seriously by preventing spam, malicious links, and phishing attempts. We scan URLs for suspicious activity and provide users with the option to password-protect their links for extra security. This ensures that only authorized users can access certain links if needed."
        },
        {
            "question": "Do shortened links expire?",
            "answer": "No, shortened links do not expire automatically. Once you create a short link, it remains active indefinitely unless you choose to delete it manually from your account. This allows you to use your links for as long as you need without worrying about them becoming inactive."
        }
    ];
    const [longUrl, setLongUrl] = useState('');
    const navigate = useNavigate();
    const navigateToAuth = (e) => {
        e.preventDefault();
        if(longUrl){
            navigate(`/auth?createNew=${longUrl}`)
        }
        else{
            alert('Please enter Loooooong URL')
        }
    }
    return (
        <>
            <section className="hero bg-[url(/banner-bg.png)] text-white p-5 rounded-xl min-h-[70vh] bg-no-repeat bg-center bg-fixed bg-cover flex items-center justify-center mt-0 lg:mt-5">
                <div className="content max-w-[800px] mx-auto text-center flex gap-3 flex-col gap-7">
                    <h1 className='text-3xl md:text-5xl font-semibold md:font-bold'>Shorten. Share. Track. Effortlessly!</h1>
                    <h2 className='text-xl md:text-3xl'>Shrink your long URLs into sleek, shareable links with real-time tracking.</h2>
                    <form action="" className='flex gap-4 items-center justify-center flex-col' onSubmit={navigateToAuth}>
                        <Input type="url" placeholder="Paste/Type Loooooong URL here" className='placeholder:text-slate-200 placeholder:text-xl placeholder:text-center max-w-[500px] rounded-md px-4 py-3' onChange={(e) => setLongUrl(e.target.value)} />
                        <Button type='submit' className='text-xl'><span>Shorten Now</span></Button>
                    </form>
                </div>
            </section>
            <section className="faq my-10">
                <h2 className='text-xl md:text-3xl text-center'>Know More About Shrinkster</h2>
                <Accordion type="Multiple" collapsible>
                    {
                        faqs.map((faq, index) => (
                            <AccordionItem value={`item-${index + 1}`} key={index + 1}>
                                <AccordionTrigger className='text-xl'>{faq.question}</AccordionTrigger>
                                <AccordionContent className='lg'>
                                {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>

            </section>
        </>
    )
}

export default Home