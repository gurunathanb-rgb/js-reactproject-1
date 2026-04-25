import React, { useState } from 'react'

const App = () => {

  const [reaction,setReaction] = useState({
    Likes:0,
    Dislikes:0
  });
 

  const likeshandler = () =>
    {
      setReaction({
        ...reaction,
        Likes: reaction.Likes+1
      })
       
  }

  const Dislikeshandler = () => {
   
      setReaction({
        ...reaction,
        Dislikes: reaction.Dislikes+1
      })

    
  }

console.log(reaction);

  return (
    <>    
    
    <button onClick={likeshandler}>
      <span className="material-symbols-outlined">thumb_up</span>
      {reaction.Likes}
    </button>&nbsp;&nbsp;
    <button onClick={Dislikeshandler}>
      <span className="material-symbols-outlined">thumb_down</span>
      {reaction.Dislikes}
    </button>
    </>
  )
}

export default App;
