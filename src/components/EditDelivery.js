import { useState } from 'react';

const EditDelivery = ({ onEdit }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !address) {
      alert('All fields are required.');
      return;
    }
    // TODO: onEdit({ name, address });
    setName('');
    setAddress('');
    // Close the form
  }

  const onCancel = (e) => {
    // TODO: Close the form (toggle display)
  }

  const onDelete = (e) => {
    // TODO: Delete record
    // Ignore fields
  }

  return (
    <form className='edit-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Customer Name</label>
        <input
          type='text'
          placeholder='my placeholder'
          value={name}
          onChange={ e => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Address</label>
        <input
          type='text'
          placeholder='my address placeholder'
          value={address}
          onChange={ e => setAddress(e.target.value)}
        />
      </div>

      <input type='submit' value='Create' />
    </form>
  )
}

export default EditDelivery;