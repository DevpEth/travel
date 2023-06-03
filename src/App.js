import './App.css';
import Topbar from './compents/topbar';
import Card from './compents/card';
import data from './data';


function App() {
  const cards = data.map(item => {
    return(
    <Card image={item.image}
          location={item.location} 
          map={item.map} 
          title={item.title} 
          start={item.start} 
          end={item.end} 
          desc={item.desc}
    />
    )
  })

  
  return (
    <div className="App">
      <Topbar/>
      {cards}
      
    </div>
  );
}

export default App;
