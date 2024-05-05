import React from 'react'


function SectionLayout({ children, className = '' }) {
    return (
        <section className={`relative ${className}`}>
          {children}
        </section>
  
    );
  }

export default SectionLayout;