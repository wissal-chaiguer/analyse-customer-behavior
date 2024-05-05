import React from 'react';


function InternalSectionLayout({ children, className = "" }) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className={`py-6 md:py-10 ${className}`}>
                {children}
            </div>
        </div>
    );
}

export default InternalSectionLayout;