import React from 'react';
import './_styles.scss';

const Logo = (props) => (
    <div className="logo">
        <h1>
            <img src={props.logoSrc}  alt={props.logoAlt} />
        </h1>
    </div>
)

export default Logo;