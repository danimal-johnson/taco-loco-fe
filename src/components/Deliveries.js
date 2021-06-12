import Delivery from './Delivery';

const Deliveries = ({ deliveries, onChange, onDelete }) => {
  return (
    <div className="delivery-list">
      { deliveries.length ? (
        deliveries.map((delivery) => (
          <Delivery
            key={delivery.id}
            delivery={delivery}
            onChange={onChange}
            onDelete={onDelete}
          />))
        ) : (
          <h3>No deliveries to display.</h3>
        )
      }
      
      
    </div>
  )
}

export default Deliveries;
