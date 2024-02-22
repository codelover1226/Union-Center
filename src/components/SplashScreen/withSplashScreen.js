import React, { useState, useEffect, Component } from 'react';

function SplashMessage() {
    return (
        <div className={`h-screen flex items-center justify-center bg-gray-900 text-white splash-screen `}>
            <div className="animate-spin slow-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
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
                }, 3000)
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