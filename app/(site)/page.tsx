'use client'
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Input from '@/components/Input';
import toast from 'react-hot-toast';
import Image from 'next/image';
import Button from '@/components/Button';



const Auth = () => {
    const router = useRouter();
    const session = useSession()


    const [isLoading, setIsLoading] = useState(false)
    const [variant, setVariant] = useState('login');

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    useEffect(() => {
        if (session?.status === 'authenticated') {
            router.push('/profiles')
        }
    }, [session?.status, router])

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);


    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'register') {
            axios.post('/api/register', data)
                .then(() => signIn('credentials', {
                    ...data,
                    redirect: false,
                }))
                .then((callback) => {
                    if (callback?.error) {
                        toast.error('Invalid credentials!');
                    }

                    if (callback?.ok) {
                        router.push('/profiles')
                    }
                })
                .catch(() => toast.error('Something went wrong!'))
                .finally(() => setIsLoading(false))
        }

        if (variant === 'login') {
            signIn('credentials', {
                ...data,
                redirect: false,

            })
                .then((callback) => {
                    if (callback?.error) {
                        toast.error(callback.error);
                    }

                    if (callback?.ok) {
                        router.push('/profiles')
                    }
                })
                .finally(() => setIsLoading(false))
        }
    }

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">

                    <Image src="/images/logo.png" alt='logo' className=' w-auto' width={100} height={48} />

                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

                            {variant === 'register' && (
                                <Input
                                    disabled={isLoading}
                                    register={register}
                                    errors={errors}
                                    required
                                    id="name"
                                    label="Name"
                                />
                            )}
                            <Input
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                required
                                id="email"
                                label="Email address"
                                type="email"
                            />
                            <Input
                                disabled={isLoading}
                                register={register}
                                errors={errors}
                                required
                                id="password"
                                label="Password"
                                type="password"
                            />

                            <div className='pt-5'>
                                <Button danger disabled={isLoading} fullWidth type='submit' >
                                    {variant === 'login' ? 'Login' : 'Sign up'}
                                </Button>
                            </div>
                        </form>




                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant === 'login' ? 'Create an account' : 'Login'}
                            </span>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
