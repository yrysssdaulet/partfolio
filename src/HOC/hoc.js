import React from 'react';

const Hoc = ({children}) => {
    let user = 'sss';
    if (!user)
        return <div>ssss</div>
    return  children
};

export default Hoc;