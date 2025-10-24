'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation';




export default function LogoutButton() {

    const [loading, setloading] = useState(false);

    const router = useRouter();
    const handelLogOut = async () => {
        setloading(true);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const errorMessage = null;

        if (!errorMessage) {

            // toast({
            //     title: "Log out ",
            //     description: "يمكنك التراجع عنه",
            //     action: {
            //         label: "تراجع",
            //         onClick: () => console.log("Undo!   ")
            //     }
            // });
            router.push('/');
        } else {
            // toast({
            //     title: "Error",
            //     description: "يمكنك التراجع عنه",
            //     action: {
            //         label: "تراجع",
            //         onClick: () => console.log("Undo!   ")
            //     }
            // });  
        }
        setloading(false);
    }
    return (
        <Button
            variant={'outline'}
            onClick={handelLogOut}
            disabled={loading}
            className='w-24 '>
            {loading ? <Loader2 className='animate-spin' /> : "Log Out"}
        </Button>
    )
}
