import React from 'react';

interface RoundImageProps {
    src: string;
    alt: string;
    size?: number;
    borderSize?: number;
    borderColor?: string;
}

const RoundPhoto: React.FC<RoundImageProps> = ({
    src,
    alt,
    size = 250,
    borderSize = 4,
    borderColor = 'lightblue',

}) => {
    const containerStyle: React.CSSProperties = {
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        border: `${borderSize}px solid ${borderColor}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '5 5 50px rgba(0, 0, 0, 0.8)',
    };

    const imageStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    return (
        <div style={containerStyle} >
            <img src={src} alt={alt} style={imageStyle} />
        </div>
    );
};

export default RoundPhoto;