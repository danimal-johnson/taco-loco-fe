import './index.css';
import { useState } from 'react';
import Header from './components/Header';
import Deliveries from './components/Deliveries';
import AddDelivery from './components/AddDelivery';

function App() {
  const [deliveries, setDeliveries] = useState([]);
  const [displayAddForm, setDisplayAddForm] = useState(true); // TODO: false

  const addDelivery = (delivery) => {
    const id = Math.floor(Math.random() * 10000);
    const newDev = { id, ...delivery };
    setDeliveries([...deliveries, newDev]);
  }

  const updateDelivery = (delivery) => {
    // TODO
  }

  const deleteDelivery = (delivery) => {
    setDeliveries(deliveries.filter(item => item.id !== delivery.id));
  }

  return (
    <div className="container">
      <Header />
      { true && <AddDelivery onAdd={addDelivery}/> }
      <Deliveries 
        deliveries={deliveries}
        onChange={updateDelivery}
        onDelete={deleteDelivery}
      />
    </div>
  );
}

export default App;
