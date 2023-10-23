import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./pages/Home";
import { CreateDocument } from './pages/create/CreateDocument';

function App() {
  return (
    <>
      <BrowserRouter basename={'/doc.js'}>
        <Routes>
          <Route exact path="/" element={<Home />} >

          </Route>
          <Route path="document/">
            <Route index element={<CreateDocument />} />
            {/* <Route path='quotation/' element={<CreateQuotation />} /> */}
          </ Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
