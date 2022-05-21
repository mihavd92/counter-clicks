import React, {useEffect, useState} from "react";

function NewMatherial(props) {
    const [myName, setMyName] = useState('John Doe');


    return (
        <div>
            <h3>{myName}</h3>
            <input
                value={myName}
                onChange={(e) => setMyName(e.target.value)}
            />

            <button onClick={console.log('Your Name is ' + myName)}>OK</button>
        </div>
    )
}

export default NewMatherial;
