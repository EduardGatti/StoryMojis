
import { useState } from "react";
import "./App.css"
import { TiWorld } from "react-icons/ti";
function App() {
  
  const [roletaSpin, setRoletaSpin] = useState(false)
  const [emojiInicial, setEmojiInicial] = useState("🛞")

    const emojis = [  
      "🌟", "🐉", "👑", "🚀", "💖", "🌈", "🧙‍♂️", "🐾", "⚔️", "🌍",   
      "🏰", "🌊", "👻", "🕵️", "🦁", "🎉", "🍭", "🎩", "🎈", "🚢",   
      "💎", "🥇", "🌻", "🧜‍♀️", "🦄", "🌪️", "🔮", "🐯", "🍕",   
      "🎸", "🛡️", "🧚‍♀️", "⏳", "🎭", "🏍️", "🔥", "🎃"  
    ]; 
  

  const roletaStory = () => {

    
    setRoletaSpin(true);  
    let spinCount = 0;  
    const totalSpins = 20; 
    
    const interval = setInterval(() => {  
      const Index = Math.floor(Math.random() * emojis.length);  
      setEmojiInicial(emojis[Index]);  
      spinCount++;  

    
      if (spinCount >= totalSpins) {  
        clearInterval(interval);  
    
        setEmojiInicial(emojis[Math.floor(Math.random() * emojis.length)]);  
        setRoletaSpin(false);  
      }  
    }, 100);

  }
  return (
   <div className="container-body">

    <TiWorld className="img" size={100} color='#00BFFF'/>
    <h1>
      Seja Bem Vindo ao Story Mujis
    </h1>
    <h2>{emojiInicial}</h2>
    
    <button onClick={roletaStory}>{roletaSpin ? "Girando..." : "Girar Roleta"}</button>
    
   </div>
  )
}

export default App;