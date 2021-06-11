import { useState } from 'react';
import EditDelivery from './EditDelivery';

const Delivery = ({ delivery, onChange, onDelete }) => {
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div className="delivery-entry">
      { showEditForm ? (
        <EditDelivery />
      ) : (
        <div className='summary'>
          <div className='detail'>
            <span className="field-name">ID: </span>{delivery.id}
          </div>
          <div className='detail'>
            <span className="field-name">Name: </span>{delivery.name}
          </div>
          <div className='delivery'>
            <span className="field-name">Address: </span>{delivery.address}
          </div>
        </div>
      )}
    </div>
  )
}

export default Delivery;
