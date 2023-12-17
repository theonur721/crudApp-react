import { useState } from "react";
import BookCard from "./components/BookCard"
import EditModal from "./components/EditModal";


function App() {
// inputa yazılan kitap adı
  const [bookName,setBookName] = useState("");
// dizideki kitaplar
  const [books,setBooks] = useState([]);
// 
  const [showEditModal,setShowEditModal] = useState([false]);
  const [editItem,setEditItem] = useState([null]);


// add butonuna tıklanınca çalışacak
  const handleSubmit = (e)=> {
    e.preventDefault();
// kitap için obje oluştur
    const newBook = {
      id: new Date().getTime(),
      tittle: bookName,
      date: new Date().toLocaleString(),
      isRead: false,
    }
// oluşan kitabı kitaplar dizisine aktar - spread operatörü önceden olanı korur
    setBooks([...books,newBook]);
// kitap eklenince sıfırla
    setBookName("");
  };
  // kitap silme ve filtreleme
  const handleDelete = (deletingId)=> {
    const filtred = books.filter((item)=> item.id !== deletingId);
    setBooks(filtred);
  };

// okundu mu okunmadı mı
  const handleRead = (book)=> {
// okundu değerini tersine çevir
    const updatedBook = {...book, isRead: !book.isRead };
// dizinin kopyasını oluştur
    const cloneBooks = [...books];
// dizinin sırasını bul
    const index = books.findIndex((item)=> item.id === book.id);
// güncellmeye yarar, yukarıdaki tüm işlemler splice kullanmak için/
// sırasını bul,kaç tane, güncel değeri
    cloneBooks.splice(index,1,updatedBook);

    setBooks(cloneBooks);
  };

  const handleEditBook = ()=> {
    const index = books.findIndex((book)=> book.id === editItem.id);
    const cloneBooks = [...books];

    cloneBooks.splice(index,1,editItem);
    setBooks(cloneBooks);

    setShowEditModal(false);

  };


  return (
    <div className="App">
      <header>
        <h1>BOOK PARSER</h1>
      </header>

      <div className="container">

        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e)=>setBookName(e.target.value)} value={bookName}/>
          <button>ADD</button>
        </form>

        <div>
          {books.length === 0 && <h4>No book added yet...</h4>}
          {books.map((book)=>(
            <BookCard book={book} handleDelete={handleDelete} handleRead={handleRead} setEditItem={setEditItem} setShowEditModal={setShowEditModal} />
          ))}
        </div>

      </div>

      {showEditModal && <EditModal setShowEditModal={setShowEditModal} setEditItem={setEditItem} editItem={editItem} handleEditBook={handleEditBook} />}
    </div>
  );
}

export default App;
