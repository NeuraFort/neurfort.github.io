import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from 'react-icons/si';
import{ BsInfoCircle } from 'react-icons/bs';
import { IoMdOpen } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Scroll } from "./Index.js"


const Welcome = () => {

    const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";




    return (
        <div className="flex w-full justify-center">
            <Scroll/>
            <div className="flex md:flex-row flex-col items-strart justify-between md:p-20 py-12 px-4 ">
                <div className="flex flex-1 justify-start flex-col md:mr-10 slide-in">
                    
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1 ">
                        Welcome to <br /> NeuraFort
                    </h1>
                    <p className ="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Generate an authenticity report
                    </p>
                    <Link
                        to="/Authenticate"
                        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#3546eb] ">
                        <p className="text-white text-base font-semibold ">
                            Start Now
                        </p>
                        <IoMdOpen/>
                    </Link>
                    <div className="grid sm:grid-cols-3 grid-cols-2  w-full mt-10">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Reliability
                        </div>
                        <div className={commonStyles}>Security</div>
                        <div className={`sm:rounded-tr-2xl ${commonStyles}`}>
                            Cross-chain
                        </div>
                        <div className={`sm:rounded-bl-2xl ${commonStyles}`}>
                            Wallet
                        </div>
                        <div className={commonStyles}>Low Fees</div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>
                            WEB 3.0
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
                    <div className="p-3 justify-end items-start flex-col rounded-xl w-72 h-96 my-5 document-card white-glassmorphism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                <SiEthereum fontSize={21} color="#fff" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff" />
                            </div>
                            <div>
                                <p className="text-white font-light text-sm">Report ID</p>
                                <p className="text-white font-semibold text-lg mt-1">Sample Report</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-300 font-light text-xs"style={{ fontSize: '16px' }}>Date</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-300 font-light text-xs"style={{ fontSize: '16px' }} >Authors</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-300 font-light" style={{ fontSize: '16px' }} >Content</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-300 font-light" style={{ fontSize: '16px' }} >Certificate</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-300 font-light" style={{ fontSize: '16px' }} >Signature</p>
                            </div>
                        </div>

                    </div>
                    <div className="p-5 w-96 h-96 flex flex-col justify-start items-center blue-glassmorphism"></div>
                </div>

            </div>
        </div>
    );
    
}

export default Welcome;