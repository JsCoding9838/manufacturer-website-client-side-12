import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-[22px] pt-2 md:pt-8 md:text-3xl lg:text-4xl font-semibold'>Frequently Asked Questions</h3>
            </div>
            
            <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-2 p-2 md:gap-3 sm:px-6 sm:gap-6 md:px-14 lg:gap-6 lg:px-20'>

                
                <div className="flex justify-center p-3 md:p-6 rounded-2xl">
                    <div className="rounded-xl block bg-white">
                        <div className="py-3 p-2 font-semibold text-center text-[18px]">
                        How will you improve the performance of a React Application?
                        </div>
                        
                        <div className="shadow-2xl rounded-2xl px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                            <h5 className="flex justify-center items-center space-x-5 text-gray-900 text-4xl font-medium mb-2 text-center">
                            </h5>
                            <p className="text-gray-700 text-base">
                                When building any react aplication, a lot of thought goes into how the appliction should work and end  looking. The least any team or developer needs to do is to check the performance to optimize the app for the end user's experience. A lot of times you overlook this action. but in this artical, I will be sharing five ways you  start potimizeing your application for beter performance.
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="flex justify-center p-3 md:p-6 rounded-2xl">
                    <div className="rounded-xl block bg-white">
                        <div className="py-3 p-2 font-semibold text-center text-[18px]">
                        What are the different ways to manage a state in a React application?

                        </div>
                        
                        <div className="rounded-2xl shadow-2xl px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                            <h5 className="flex justify-center items-center space-x-5 text-gray-900 text-4xl font-medium mb-2 text-center">
                            </h5>
                            <p className="text-gray-700 text-base">
                            We will start by talking about what state is and then go through teh many tools you can use to manage it. we look at the simple useState kook and also learn about more colex libraries like Redux. Then we will check out the most recent option available like recoil and Zustend.

                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="flex justify-center p-3 md:p-6 rounded-2xl">
                    <div className="rounded-xl block bg-white">
                        <div className="py-3 font-semibold text-center text-[18px]">
                        How does prototypical inheritance work?
                        </div>
                        
                        <div className="rounded-2xl shadow-2xl px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                            <h5 className="flex justify-center items-center space-x-5 text-gray-900 text-4xl font-medium mb-2 text-center">
                            </h5>
                            <p className="text-gray-700 text-base">
                            when we read a propert from object. and it's missing javaScript automatically takes it from the prototype. in programming this is called prototype inherritance. javaScript the most common of the prototype-capable languages, and its capabillities are relatively unique. wen used apppropriately, prototypical inheritance in favaScript is a powerful tool that can hours of codding.
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="flex justify-center p-3 md:p-6 rounded-2xl">
                    <div className="rounded-xl block bg-white">
                        <div className="py-3 p-2 font-semibold text-center text-[18px]">
                        Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?
                        </div>
                        
                        <div className="rounded-2xl shadow-2xl px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                            <h5 className="flex justify-center items-center space-x-5 text-gray-900 text-4xl font-medium mb-2 text-center">
                            </h5>
                            <p className="text-gray-700 text-base">
                            JWT Means JSON Web Token. is an open standard used to share security information between two  parties a client and server. Each JWT contains encoded Json objects including a set of claims. JWTs are signed using a cryptographic algorighm to ensure that claims can not be altered after the token is issued. And Specialy a JWT is string made up of three parts separated by dots. and serialized using base 64. (Header and the payload) and The signature. Every developer shoul know how does it jwt works.

                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="flex justify-center p-3 md:p-6 rounded-2xl">
                    <div className="rounded-xl block bg-white">
                        <div className="py-3 p-2 font-semibold text-center text-[18px]">
                        What is a unit test? Why should write unit tests?
                        </div>
                        
                        <div className="rounded-2xl shadow-2xl px-3 pb-3 sm:px-4 sm:pb-4 md:px-6 md:pb-6">
                            <h5 className="flex justify-center items-center space-x-5 text-gray-900 text-4xl font-medium mb-2 text-center">
                            </h5>
                            <p className="text-gray-700 text-base">
                            JWT Means JSON Web Token. is an open standard used to share security information between two  parties a client and server. Each JWT contains encoded Json objects including a set of claims. JWTs are signed using a cryptographic algorighm to ensure that claims can not be altered after the token is issued. And Specialy a JWT is string made up of three parts separated by dots. and serialized using base 64. (Header and the payload) and The signature. Every developer shoul know how does it jwt works.

                            </p>
                            
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Blogs;