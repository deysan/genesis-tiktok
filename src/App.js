import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Profile } from './pages/Profile';

function App() {
  return (
    <>
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/name' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
