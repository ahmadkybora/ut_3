import React from 'react';

const Congrates = (props) => {
    if(props.success) {
        return (
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                    ok!
                </span>
            </div>
        )        
    } else {
        return (
            <div data-test="component-congrats">
            </div>
        ) 
    }
}

export default Congrates;