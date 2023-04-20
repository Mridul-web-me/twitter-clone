import useLoginModal from "@/hooks/useLoginModal"
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegistrationModal from "@/hooks/useRegistration";
import { signIn } from "next-auth/react";

const LoginModals = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegistrationModal()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)


    const onToggle = useCallback(()=>{
        if(isLoading){
            return;
        }
        registerModal.onOpen()
        loginModal.onClose();
    },[isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async () =>{
        try{
            setIsLoading(true)

           await signIn('credentials', {
            email,
            password
           })

            loginModal.onClose()
        }
        catch(error){
            console.log(error)
        } finally{
            setIsLoading(false)
        }
    }, [loginModal, email, password])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
            placeholder="Email"
            onchange={(e)=> setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
            />
            <Input
            placeholder="Password"
            type="password"
            onchange={(e)=> setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
            />
        </div>
        
    )
    const footerContent = (
        <div className="
        text-neutral-400 text-center mt-4 my-4
        ">
            <p>
                First time using twitter? 
                <span
                onClick={onToggle}
                className=" text-white cursor-pointer hover:underline "> Create an account
                </span>
            </p>
        </div>
    )
  return (
    <Modal
    disabled={isLoading}
    isOpen={loginModal.isOpen}
    title="Login"
    actionLabel="Sign In"
    onClose={loginModal.onClose}
    onSubmit={onSubmit}
    body={bodyContent}
    footer={footerContent}
    />
  )
}

export default LoginModals