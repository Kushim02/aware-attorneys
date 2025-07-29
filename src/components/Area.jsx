import React from "react";
import './Area.css'

const Area = () => { 

    /*function displayMessage() {
        return 'Wow';
    }*/
        <link href="https://fonts.googleapis.com/css2?family=Georgia&display=swap" rel="stylesheet"></link>
    return (
        <div className="areas p-4">
            <p className="text-xs sm:text-sm text-center sm:text-left">LEGAL DISCIPLINES</p>
            <h1 className="text-sm sm:text-xl md:text-3xl text-center sm:text-left font-semibold">The Area Where We Practice Our Law</h1>
            <div className=" text-[rgb(166, 139, 51)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="section">
                    <h3 className="font-semibold text-sm sm:text-lg text-[rgb(166, 139, 51)]">01</h3>
                    <h2 className="text-sm md:text-xl font-semibold">Corporate and Commercial Law</h2>
                    <p className="text-xs sm:text-sm">Our corporate law team delivers comprehensive solutions to help your business thrive in today's complex commercial environment. We combine deep industry knowledge with practical expertise to support your company's growth and success.</p>
                </div>
                <div className="section">
                    <h3 className="font-semibold text-sm sm:text-lg">02</h3>
                    <h2 className="text-sm md:text-xl font-semibold">Intellectual Property</h2>
                    <p className="text-xs sm:text-sm">Intellectual Property (IP) refers to creations of the mind, such as inventions, art, and trademarks, protected by law to promote innovation and creativity.</p>
                </div>
                <div className="section">
                    <h3 className="font-semibold text-sm sm:text-lg">03</h3>
                    <h2 className="text-sm md:text-xl font-semibold">Employment Law</h2>
                    <p className="text-xs sm:text-sm">Employment Law, the area of law that governs the legal relationship between employers and employees. It encompasses a wide range of issues related to the workplace.</p>
                </div>
                <div className="section">
                    <h3 className="font-semibold text-sm sm:text-lg">04</h3>
                    <h2 className="text-sm md:text-xl font-semibold">Real Estate Law</h2>
                    <p className="text-xs sm:text-sm">Real Estate Law is the legal domain that deals with the legal aspects of immovable properties such as houses, lands, buildings, etc.</p>
                </div>
                <div className="section">
                    <h3 className="font-semibold text-sm sm:text-lg">05</h3>
                    <h2 className="text-sm md:text-xl font-semibold">General Contracts</h2>
                    <p className="text-xs sm:text-sm"> General Contracts are legally binding agreements between parties, covering various everyday situations like buying, selling, services, leasing or lending.</p>
                </div>
                <div className="section">
                    <h3 className="font-semibold text-sm sm:text-lg">06</h3>
                    <h2 className="text-sm md:text-xl font-semibold">Tax Law</h2>
                    <p className="text-xs sm:text-sm">Tax Law deals with the the rules, regulations and policies governing taxation. It encompasses various tax-related matters, such as income tax, corporate tax, property tax, sales tax and international taxation.</p>
                </div>
            </div>
        </div>
    )

};

export default Area;

