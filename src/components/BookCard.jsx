import './style.css';

const BookCard = ({book, handleDelete, handleRead, setEditItem, setShowEditModal})=> {
    return (
        <div className='cardbox1'>
            <div className='cardname'>
                <h5 style={{
                    textDecoration: book.isRead ? 'line-through' : 'none'
                }}>{book.tittle}</h5>
                <p>{book.date}</p>
            </div>
            <div className="btn-group">
                <button className='del' onClick={()=>handleDelete(book.id)}>Delete</button>
                <button className='upd' onClick={()=>{setEditItem(book); setShowEditModal(true);}}>Update</button>
                <button className='rea' onClick={()=>handleRead(book)}>{book.isRead ? "read" : "not read"}</button>
            </div>
        </div>
    );
};

export default BookCard;