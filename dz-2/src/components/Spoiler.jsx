import React, { useState } from 'react';

const Spoiler = ({ header = "+", open, children }) => {
    const [isOpen, setIsOpen] = useState(open);
    const toggleSpoiler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div style={{ cursor: 'pointer' }} onClick={toggleSpoiler}>
                {header}
            </div>
            {isOpen && <div>{children}</div>}
        </div>
    );
};

const ExampleSpoiler = () => (
    <div>
        <Spoiler header={<h1>Заголовок</h1>} open>
            <h2>Контент 1</h2>
            <p>
                лорем іпсум тралівалі і тп.
            </p>
        </Spoiler>

        <Spoiler>
            <h2>Контент 2</h2>
            <p>
                лорем іпсум тралівалі і тп.
            </p>
        </Spoiler>
        <hr/>
    </div>
);

export default ExampleSpoiler ;