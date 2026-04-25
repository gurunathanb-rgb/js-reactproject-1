import React, { useState } from 'react'

const App = () => {
  const [Likes,setLikes] = useState(0);
  const [Dislikes,setDislikes] = useState(0);

  const likeshandler = () =>
    {
      setLikes(Likes+1);
       
  }

  const Dislikeshandler = () => {
   
      setDislikes(Dislikes +1 );

    
  }

    //  console.log(`Likes count:${Likes}`);
    //  console.log(`Dislike count:${Dislikes}`);

  return (
    <>    
    
    <button onClick={likeshandler}>
      <span className="material-symbols-outlined">thumb_up</span>
      {Likes}
    </button>&nbsp;&nbsp;
    <button onClick={Dislikeshandler}>
      <span className="material-symbols-outlined">thumb_down</span>
      {Dislikes}
    </button>
    </>
  )
}

export default App;
