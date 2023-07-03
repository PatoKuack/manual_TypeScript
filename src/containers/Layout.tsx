function Layout({ children }: { 
  children: JSX.Element // ReactNode or ReactElement or JSX.Element?
}) {
  return (
    <div className='bg-primary text-secondary'>

      {children}
      
    </div>
  );
}

export { Layout }