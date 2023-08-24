import React, { useState } from 'react';

export default function Projects() {
    const organizations = ['SONY', 'MAG7', 'SYNACK', 'GW'];
    const [activeIndex, setActiveIndex] = useState(0);

    const handleOrgContainerClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <div className="projectsText">
                <div className="projectsHero">
                    {/* Your hero content */}
                </div>
                <div className="projectsList">
                    {organizations.map((org, index) => (
                        <div
                            key={org}
                            className={`orgContainer ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => handleOrgContainerClick(index)}
                        >
                            <h3>{org}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
