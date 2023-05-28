import React from 'react';

interface FullName {
  className?: string;
  content: string;
  type: "button" | "submit" | "reset" | undefined;
  title: string;
  onClick?: ()=>void;
}

function CreateButton(props: FullName) {
  
  return (
    <React.Fragment>
      <button 
        className={`px-2 py-1 rounded-xl font-medium ${props.className}`} 
        type = {props.type}
        title = {props.title}
        onClick={props.onClick}
      >
        {props.content}
      </button>
    </React.Fragment>
  );
}

export { CreateButton }