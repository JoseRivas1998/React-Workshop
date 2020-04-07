import React from 'react';

import Navigation from '../../components/Navigation/Navigation';

const layout = (props) => (
    <>
        <Navigation />
        {props.children}
    </>
);

export default layout;