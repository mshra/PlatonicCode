
  const RootLayout =({children,params}:{
    children:React.ReactNode, 
    params:{username:string}
  }) => {


    const username = params.username; 
    console.log(username);
   

    return (
      <>
        <div>
            {username}
        </div>
        {children}
      </>
    );
  };
  
  export default RootLayout;
  