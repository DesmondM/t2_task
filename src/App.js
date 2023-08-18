import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src='image1.png' height={200} alt= 'Me'/>
      <h1>Personal Profile</h1>
      <p style={{width:'32%', margin:'auto'}}>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
       <Skill name='HTML' color='blue' imoji='💪'/>
       <Skill name='JavaScript' color='yellow' imoji='💪'/>
       <Skill name='Web Design' color='orange' imoji='❤️'/>
       <Skill name='Git &GitHub' color='grey' imoji='💕'/>
       <Skill name='React' color='cyan' imoji='👍'/>
       <Skill name='Svelte' color='magenta' imoji='😒'/>
    </div>
  );
}

function Skill(props){
    return(
        <div style={{background:`${props.color}`, width:'34%', margin:'auto'}}><p>{props.name} - {props.imoji}</p></div>
    )
}

export default App;
