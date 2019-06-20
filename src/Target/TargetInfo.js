import React from 'react';


function TargetInfo({info = {}}) {

    return (
        <div className="TargetInfo">
            {Object.entries(info).map(([name, value]) => (
                <p key={name}>{name}: {value.toString()}</p>
            ))}
        </div>
    );
}

export default TargetInfo;
