import './App.css';
import Output from './pages/ImageGenerate/ImageGenerate';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from './Layout/Layout';
import TextCompletion from './pages/TextCompletion/TextCompletion';
import Nasa from './pages/NASA/Nasa';
import NewsContainer from './pages/News/NewsContainer';
import Date from './pages/Date/Date';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout/> }>
            <Route index element={<Output/>}/>
            <Route path='textCompletion' element={<TextCompletion/>} />
            <Route path='nasa' element={<Nasa/>} />
            <Route path='news' element={<NewsContainer/>} />
            <Route path='date' element={<Date/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
