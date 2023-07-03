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
        className={`
          px-2 py-1 bg-primary border-2 border-current border-solid rounded-xl text-sm
          transition ease-in-out duration-100 
          active:translate-y-0.5 active:scale-95
          hover:bg-shadow 
          ${props.className}
          sm:px-2 sm:py-1 sm:font-medium sm:text-base`} 
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