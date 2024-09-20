

import React from 'react'

function Page({params}:{params:{username:string}}) {

  const username = params.username; 
  console.log(username);
  return (
    <div>
      Hi from the dashboard userId page  email is {username};
    </div>
  )
}

export default Page
