import * as React from 'react';


export interface LinkProps {
  active: boolean;
  onClick: () => Event;
  children: React.ReactNode;
}


const Link = ({ active, children, onClick }: LinkProps) => (
    <button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
    >
      {children}
    </button>
)


export default Link
