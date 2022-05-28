import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import aboutme from '../../assets/img/remove-bg.png';
import site1 from '../../assets/img/Screenshot_8.png';
import site2 from '../../assets/img/Screenshot_9.png';
import site3 from '../../assets/img/Screenshot_10.png';

const MyPortfolio = () => {
    return (
        <div className="p-4 md:p-12">
            
            <div className="flex flex-col lg:flex-row justify-center items-center gap-3 md:gap-5">
                <div className="flex-1">
                    <img className="rounded-xl w-full bg-cover" src={aboutme} alt="" />
                </div>
                <div className="flex-1">
                    {/* <h2 className="text-center text-xl font-semibold text-[#2BAAA9]">About Me</h2> */}
                    <h2 className="text-center text-xl md:text-4xl font-semibold text-[#2BAAA9]">About Me</h2>
                    <div className="space-x-2 flex justify-center items-center mt-2">
                        <div className="bg-[#2BAAA9] w-12 md:w-16 h-[4px] rounded"></div>
                        <div className="bg-gradient-to-r  from-[#2BAAA9] to-[#1f4255] w-8 md:w-12 h-[4px] rounded"></div>
                        <div className="bg-gradient-to-r  from-[#1f6f6f] to-[#00033E] w-4 md:w-8 h-[4px] rounded"></div>
                    </div>
                    <h2 className="font-semibold text-xl py-3">Developer <span className="text-red-500">& Designer</span></h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quod quae hic exercitationem eveniet maxime est corporis eligendi non, expedita repellat sunt, mollitia illo iste cupiditate explicabo nam rem impedit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quod quae hic exercitationem eveniet maxime est corporis eligendi non
                    </p>
                    <div className="mt-6">
                        <PrimaryButton>Let's Talk</PrimaryButton>
                        {/* <div className="flex justify-around items-center">
                            <div>
                                
                                
                            </div>
                            <div>
                                <h2 className="text-center text-xl font-semibold text-[#2BAAA9] mb-3">Contack Me</h2>
                                <h2 className="font-semibold">Email: <span className="font-normal">jubayer@example.com</span></h2>
                                <h2 className="font-semibold">Phone: <span className="font-normal">+60111222445</span></h2>
                                <h2 className="font-semibold">Address: <span className="font-normal">11/12 chadput, Dhaka</span></h2>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="md:gap-4">
                <h2 className="text-center text-xl md:text-2xl font-semibold text-[#2BAAA9] py-4">My Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <a href="https://warehouse-with-node.web.app/home" target="_blank" className="shadow-2xl">
                    <img className="rounded-xl" src={site1} alt="" />
                    </a>
                    <a href="https://freshfoodsshop.netlify.app/home" target="_blank" className="shadow-2xl">
                    <img className="rounded-xl" src={site2} alt="" />
                    </a>
                    <a href="https://televisionshopwithled.netlify.app/" target="_blank" className="shadow-2xl">
                    <img className="rounded-xl" src={site3} alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;