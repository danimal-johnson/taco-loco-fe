import { useState } from 'react';
import Button from './Button';

const EditDelivery = ({ delivery, onChange, onCancel }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !address) {
      onCancel();
    }
    
    onChange({
      id: delivery.id,
      name: name.length ? name : delivery.name,
      address: address.length ? address : delivery.address
    })
  }

  return (
    <form className='edit-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Customer Name</label>
        <input
          type='text'
          placeholder={delivery.name}
          value={name}
          onChange={ e => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Customer Address</label>
        <input
          type='text'
          placeholder={delivery.address}
          value={address}
          onChange={ e => setAddress(e.target.value)}
        />
      </div>
      <Button
        color={'red'}
        text={'Cancel'}
        onClick={() => onCancel()}
      />
      <input type='submit' value='Update' className='btn' />
    </form>
  )
}

export default EditDelivery;