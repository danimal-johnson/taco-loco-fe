import './index.css';
import { useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Deliveries from './components/Deliveries';
import AddDelivery from './components/AddDelivery';


function App() {
  const [deliveries, setDeliveries] = useState([]);
  const [displayAddForm, setDisplayAddForm] = useState(false);

  const addDelivery = (delivery) => {
    const id = Math.floor(Math.random() * 10000);
    const newDev = { id, ...delivery };
    setDeliveries([...deliveries, newDev]);
  }

  const updateDelivery = (delivery) => {
    // TODO
    console.log(`Updating ${delivery.id} with ${delivery.name} and ${delivery.address}`);
  }

  const deleteDelivery = (id) => {
    console.log(`Deleting delivery #${id}`)
    setDeliveries(deliveries.filter(item => item.id !== id));
  }

  const onClickAdd = () => {
    setDisplayAddForm(!displayAddForm);
  }

  return (
    <div className="container">
      <Header />
      <Button
        color={displayAddForm ? 'red' : 'green' }
        text={displayAddForm ? 'Close' : 'Add'}
        onClick={onClickAdd}
      />
      { displayAddForm && <AddDelivery onAdd={addDelivery}/> }
      <Deliveries 
        deliveries={deliveries}
        onChange={updateDelivery}
        onDelete={deleteDelivery}
      />
    </div>
  );
}

export default App;
