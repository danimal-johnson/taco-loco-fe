import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { TiPencil } from 'react-icons/ti';
import EditDelivery from './EditDelivery';

const Delivery = ({ delivery, onChange, onDelete }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  const toggleEdit = () => {
    setShowEditForm(!showEditForm);
  }

  const preChange = (data) => {
    toggleEdit();
    onChange(data);
    
  }

  return (
    <div className="delivery-entry">
      { showEditForm ? (
        <EditDelivery delivery={delivery} onChange={preChange} onCancel={toggleEdit}
        />
      ) : (
        <div className='summary'>
          <div className='info'>
            <h3>{delivery.name}</h3>
            <p>{delivery.address}</p>
          </div>
          <div className='icons'>
            <h3>
              <TiPencil
                style={{ color: 'orange', cursor: 'pointer' }}
                onClick={toggleEdit}
                title='Edit'
              />
              <FaTimes
                style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => onDelete(delivery.id)}
                title='Delete'
              />
            </h3>
          </div>
        </div>
      )}
    </div>
  )
}

export default Delivery;
