import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {//config object
    summer: {
        text: 'Lets hit the bitch',
        iconName: 'sun'
    },
    winter: {
        text: 'Brrr it is chilli',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {//logic to seasonDisplay request
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const seasonDisplay = (props) => {//geting props from App
    const season = getSeason(props.lat, new Date().getMonth()); //getting PROPS from parent element

    const {text, iconName} = seasonConfig[season];//

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default seasonDisplay;