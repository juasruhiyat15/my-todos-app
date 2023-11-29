import { DeleteButton } from './DeleteButton'

function TableList(props) {
  const { title, createdAt, description, onDelete, index } = props;

  return (
    <div className="col-sm-3 mb-5">
      <div className="card">
        <p className="card-header bg-warning">
          <div className="d-flex justify-content-end">
            <DeleteButton index={index} onDelete={onDelete} className='btn btn-danger btn-sm' color="white">Delete</DeleteButton>
          </div>
        </p>
        <div className="card-body">
          <h6 className='card-title'>
            {title}
          </h6>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer text-body-secondary">
          CreatedAt: {createdAt}
        </div>
      </div>
    </div>
  )
}

export default TableList;
