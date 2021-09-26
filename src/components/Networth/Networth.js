import React, { useEffect, useState } from 'react';
import Singers from '../Singers/Singers';

const Networth = () => {
    const [singers, setSingers] = useState([]);

    useEffect(() => {
        fetch('./singers.JSON')
            .then(res => res.json())
            .then(data => setSingers(data));
    }, []);
    return (
        <div className="w-75 mx-auto">
            {
                singers.map(singer => <Singers
                key={singer.id}
                singer={singer}
                ></Singers>)
            }
            
        </div>
    );
};

export default Networth;