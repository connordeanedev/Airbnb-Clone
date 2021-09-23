import React from 'react'

function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb luxe</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>This is my clone of Airbnb</p>
                <p>I hope you like</p>
                <p>Made by Connor Deane</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">HOST</h5>
                <p>Front End Developer</p>
                <p>React Js</p>
                <p>Tailwind</p>
                <p>Next J</p>
                <p>JavaScript</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Help Centre</p>
                <p>Trust & Safety</p>
                <p>Get in touch</p>
                <p>enquiries@connordeane.com</p>
                <p>HIRE ME</p>
            </div>
            
        </div>
    )
}

export default Footer
