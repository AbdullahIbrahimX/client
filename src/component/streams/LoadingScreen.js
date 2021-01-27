import React from 'react';

const LoadingScreen = ({title}) => {
    return (
        <div>
            <div className={"ui active inverted dimmer"}>
                <div className={"ui text loader"}>
                    {title}
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
