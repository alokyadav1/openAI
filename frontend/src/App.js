import './App.css';
import Output from './pages/ImageGenerate/ImageGenerate';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from './Layout/Layout';
import TextCompletion from './pages/TextCompletion/TextCompletion';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout/> }>
            <Route index element={<Output/>}/>
            <Route path='textCompletion' element={<TextCompletion/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
