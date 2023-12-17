import { useState } from 'react';
import './style.css';

const EditModal = ({setShowEditModal, setEditItem, editItem, handleEditBook,})=> {
    const [newBookName,setNewBookName] = useState('');

    return <div className="confirm-modal">
        <div className="modal-inner">
            <h5>Update Book Name</h5>
            <input type="text" onChange={(e)=> setEditItem({...editItem, tittle: e.target.value, date: new Date().toLocaleString(), })}/>
        </div>
        <div>
            <button className="btn" onClick={()=>setShowEditModal(false)}>cancel</button>
            <button className="btn btnkaydet" onClick={handleEditBook}>confirm</button>
        </div>
    </div>;
}

export default EditModal;