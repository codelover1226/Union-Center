import React, { useState, useEffect, Component } from 'react';
import lightLogo from './../../assets/img/logo2.png'

function SplashMessage() {
    return (
        <div className={`h-screen flex items-center justify-center bg-main-bg text-white splash-screen `}>
            <div className='items-center justify-center'>
                <img src={lightLogo} alt='' className='w-full p-6 md:p-none sm:w-[400px] mx-auto'></img>
                {/* <div className='w-full flex'>
                    <div className="animate-spin slow-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white mx-auto"></div>
                </div> */}
            </div>
        </div>
    );
}

export default function withSplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            const url = 'https://player.vimeo.com/video/651590904?background=1&loop=1&byline=0&title=0&autoplay=1';
            try {
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 2000)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // while checking user session, show "loading" message
            if (this.state.loading) return SplashMessage();

            // otherwise, show the desired route
            return <WrappedComponent {...this.props} />;
        }
    };
}