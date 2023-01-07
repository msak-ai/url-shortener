import './App.css';
import ShortenUrl from './ShortenUrl';
import CopyShortenUrl from './CopyShortenUrl';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ShortenUrl />}/>
        <Route path='/copy' element={<CopyShortenUrl />} />
      </Routes>
    </>
  );
}

export default App;
