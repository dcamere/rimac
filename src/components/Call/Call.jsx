import React from 'react';
import './_styles.scss';
import phone from '../../assets/phone.svg';

const Call = (props) => (
    <div className="call">
        <span className="call__pretext">{props.preText}</span>
        <a className="call__link" href={'tel:' + props.numberCode}>
            <img className="call__image" src={phone} alt="" />
            <span className="call__text">{props.text}</span>
            <span className="call__number">{props.numberText}</span>
        </a>
    </div>
)

export default Call;