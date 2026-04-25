import React, { useState } from 'react'

const App = () => {

  const [reaction,setReaction] = useState({
    Likes:0,
    Dislikes:0
  });
  
   const [history, sethistory] = useState([]);

  const likeshandler = () =>
    {
      setReaction({
        ...reaction,
        Likes: reaction.Likes+1
      })
      sethistory([...history,'L']);
       
  }

  const Dislikeshandler = () => {
   
      setReaction({
        ...reaction,
        Dislikes: reaction.Dislikes+1
      })
      sethistory([...history,'D']);

    
  }

//console.log(reaction);
console.log(history);

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
