import React, { useState, useEffect } from 'react';
import lightLogo from './../../assets/img/logo2.png';

function SplashMessage() {
    return (
        <div className={`h-screen flex items-center justify-center bg-main-bg text-white splash-screen transition-all`}>
            <div className='items-center justify-center'>
                <img src={lightLogo} alt='' className='w-full p-6 md:p-none sm:w-[400px] mx-auto'></img>
            </div>
        </div>
    );
}

export default function withSplashScreen(WrappedComponent) {
    return function WrappedWithSplashScreen(props) {
        const [loading, setLoading] = useState(true);
        const [slideOut, setSlideOut] = useState(false);

        useEffect(() => {
            const timer = setTimeout(() => {
                setSlideOut(true);
                setTimeout(() => {
                    setLoading(false);
                }, 1000)
            }, 1600);

            return () => clearTimeout(timer); // Cleanup on unmount
        }, []);

        if (loading) {
            return (
                <div className={`h-screen flex items-center justify-center bg-main-bg text-white splash-screen transition-all ${slideOut? 'slide-out-left' : ''}`}>
                    <div className='items-center justify-center'>
                        <img src={lightLogo} alt='' className='w-full p-6 md:p-none sm:w-[400px] mx-auto'></img>
                    </div>
                </div>
            );
        }

        return <WrappedComponent {...props} />;
    };
}