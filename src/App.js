import './index.css';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Deliveries from './components/Deliveries';
import AddDelivery from './components/AddDelivery';

const API_URL = 'http://localhost:3210/';

function App() {
  const [deliveries, setDeliveries] = useState([]);
  const [displayAddForm, setDisplayAddForm] = useState(false);

  useEffect(() => {
    // Define the async function first.
    const getDeliveries = async () => {
      const deliveriesFromServer = await fetchDeliveries();
      setDeliveries(deliveriesFromServer);
    }
    // Now call it.
    getDeliveries();
  }, []);

  // ------ Get All Deliveries ------
  const fetchDeliveries = async () => {
    const res = await fetch(API_URL + 'deliveries/');
    const data = await res.json();

    return data;
  }

  // ------ Get a single delivery ------
  // Not currently used. Keep for expansion.
  // eslint-disable-next-line no-unused-vars
  const fetchDelivery = async (id) => {
    const res = await fetch(API_URL + `deliveries/${id}`);
    const data = await res.json();

    return data;
  }

  // ------ Create a delivery ------
  const addDelivery = async (delivery) => {
    const res = await fetch(API_URL + `deliveries/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(delivery)
    });
    const newDelivery = await res.json();
    setDeliveries([...deliveries, newDelivery]);
  }

  // ------ Update a delivery ------
  const updateDelivery = async (delivery) => {

    // At least one field must be changed
    if (!delivery.name.length && !delivery.address.length) return;

    let updateValues = {};
    if (delivery.name.length) updateValues.name = delivery.name;
    if (delivery.address.length) updateValues.address = delivery.address;

    const res = await fetch(API_URL + `deliveries/${delivery.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateValues)
    });

    if (res.status === 200) {
      const newDelivery = await res.json();
      setDeliveries([...deliveries.filter(d => d.id !== delivery.id), newDelivery]);
    } else {
      console.error(res.status, res.body);
    }
  }

  // ------ Delete a delivery ------
  const deleteDelivery = async (id) => {
    const res = await fetch(API_URL + `deliveries/${id}`, {
      method: 'DELETE'
    });
    if (res.status === 200) {
      setDeliveries(deliveries.filter(item => item.id !== id));
    } else {
      console.error(`Delete delivery ${id} failed`);
    }
  }

  const onClickAdd = () => {
    setDisplayAddForm(!displayAddForm);
  }

  return (
    <div className='container'>
      <Header />
      <h2 className='subtitle'>Deliveries
      <Button
        color={displayAddForm ? 'red' : 'green' }
        text={displayAddForm ? 'Close' : 'Add'}
        onClick={onClickAdd}
      /></h2>
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
