import React from 'react'

const Card = ({
    asset
}) => {
    const {
        date,
        explanation,
        media_type,
        title,
        url
    } = asset;
    return (
        <li className="asset-item">
            <p className="asset-date">{date}</p>
            {media_type === 'video' ?
                <iframe
                    className="video-iframe"
                    src={url}
                    frameBorder="0"
                    allowFullScreen
                    width={230}
                    height={100}
                ></iframe> :
                <img
                    src={url}
                    alt={title}
                    className="image"
                    width={230}
                    height={100}
                />
            }
            <p className="asset-title">{title}</p>
            <p className="asset-explanation">{explanation}</p>
        </li>
    )
}

export default Card