import { useState } from 'react';
import Button from './Button';

const EditDelivery = ({ delivery, onChange, onCancel }) => {
  const [nameField, setNameField] = useState('');
  const [addressField, setAddressField] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!nameField && !addressField) {
      onCancel();
    }

    onChange({
      id: delivery.id,
      name: nameField,
      address: addressField
    });
  }

  return (
    <form className='edit-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Customer Name</label>
        <input
          type='text'
          placeholder={delivery.name}
          value={nameField}
          onChange={ e => setNameField(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Customer Address</label>
        <input
          type='text'
          placeholder={delivery.address}
          value={addressField}
          onChange={ e => setAddressField(e.target.value)}
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