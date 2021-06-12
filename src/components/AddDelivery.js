import { useState } from 'react';

const AddDelivery = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !address) {
      alert('All fields are required.');
      return;
    }
    onAdd({ name, address });
    // Clear the fields after sending
    setName('');
    setAddress('');
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Customer Name</label>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={ e => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Address</label>
        <input
          type='text'
          placeholder='Address'
          value={address}
          onChange={ e => setAddress(e.target.value)}
        />
      </div>

      <input type='submit' value='Create' className='btn' />
    </form>
  )
}

export default AddDelivery;
