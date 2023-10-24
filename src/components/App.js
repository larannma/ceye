import React from "react";
import Footer from './Footer';
import Main from './Main'
import Start from './Start'
import api from '../utils/api'
import PaginationTable from './PaginationTable'
import { HashRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import MOCK_DATA from '../final.json';

function App() {

  const [tableData, setTableData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate('/main', {replace: true});
  }

  const onDataSent = (event) => {
    event.preventDefault();
    api.getTable()
      .then((res) => {
        setTableData(res);
        navigate('/results', {replace: true});
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  const resendData = () => {
    navigate('/main', {replace: true});
  }

  return (
    <div className="App root">
      <div className="root__page">
        <HashRouter basename="/">
          <Route path="/" element={<Navigate to="/start" replace/>}/>
          <Route path="/start" element={<Start onButtonClick={onButtonClick}/>}/>
          <Route path="/main" element={<Main onDataSent={onDataSent}/>}/>
          <Route path="/results" element={<PaginationTable resendData={resendData} tableData={tableData}/>}/>
        </HashRouter>
        {/* <PaginationTable/> */}
        <Footer/>
      </div>
    </div>
  );
}

export default App;
