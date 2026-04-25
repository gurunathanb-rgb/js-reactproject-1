import React, { useState } from 'react'

const App = () => {
  const [Likes,setLikes] = useState(0);
  // const [Dislikes,setDislikes] = useState(0);

  const likeshandler = () =>
    {
      setLikes(Likes+1);
       
  }

  const Dislikeshandler = () => {
    if (Likes > 0)
    {
      setLikes(Likes -1 );
    }
    
  }

    //  console.log(`Likes count:${Likes}`);
    //  console.log(`Dislike count:${Dislikes}`);

  return (
    <>    
    <h1>Likes: {Likes}</h1>
    <button onClick={likeshandler}>
      <span className="material-symbols-outlined">thumb_up</span>
      
</button>&nbsp;&nbsp;
    <button onClick={Dislikeshandler}>
      <span className="material-symbols-outlined">thumb_down</span>
    </button>
    </>
  )
}

export default App;
