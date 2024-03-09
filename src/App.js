import logo from './logo.svg';
import './App.css';
import Modal from './modal/Modal';
function App() {
  return (
    <div className='container'>
     <Modal>
     <p>پرداخت شما با موفقیت انجام شد😀</p>
            <ul className='cd-buttons'>
                <li><a href="#">تایید</a></li>
                <li><a href="#">بازگشت</a></li>
            </ul>
      </Modal>
    </div>
  );
}

export default App;
