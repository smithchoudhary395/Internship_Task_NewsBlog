import './App.css'
import Navbar from './components/Header/Navbar'
import {Navigate, Route,Routes,useNavigate} from 'react-router-dom'
import Home from './components/Home';
import AddNews from './components/PreviewPages/AddNews';
import PreviewBlog from './components/PreviewPages/previewBlog';
import Layout from './components/PreviewPages/Layout';

import Datashow from './components/ShowBlog/ShowBlog';
import { useState } from 'react';
import ShowNews from './ShowNews';
import Show from './Show';


function App() {
  const [allBlog, setAllBlog] = useState([]);
  const [finalData,setFinalData] = useState([]);
  const [showData, setShowData] = useState([]);
  const [editData, setEditData] = useState(null);
  const navigate = useNavigate();

  const arr = (newdata) => {

    if(editData!=null){
      setAllBlog((prev)=>
        prev.map((blog)=>
        blog.id === editData.id ? {...newdata,id:editData.id} : blog
        )
      );
    }
    
    else{setAllBlog((prev) => [...prev, newdata]);}
    
    setEditData(null)
  };

  //preview delete
  const handleDelete = (deleteIndex) => {
    const updateArray = allBlog.filter((ele,index) => index !== deleteIndex);
    setAllBlog(updateArray);
    navigate('/addBlog')
  }
  //final data delete
  const handleFinalDataDelete = (deleteIndex) => {
    const updateArray = allBlog.filter((ele,index) => index !== deleteIndex);
    setFinalData(updateArray);
    navigate('/home')
  }

  const handleSubmit = (submitIndex) => {
    setFinalData((prev) => [...prev,allBlog[submitIndex]])
    setAllBlog(allBlog.filter((ele,index) => index != submitIndex))
    navigate('/home')
  }

  const handleShowData = (showIndex) => {
     const data = finalData[showIndex];
     setShowData(data);
     navigate('/show')
  }
  const handleEdit = (blog) => {
     console.log("blog data",blog)
     setEditData(blog)
     navigate('/addBlog')
  };
  
 
 
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/home" element={<Home finalData={finalData} onShowData={handleShowData} onDelete={handleFinalDataDelete}/>} />
        <Route path="/addBlog" element={<AddNews arr={arr} editData={editData}/>} />
        <Route path='/allBlog' element={<PreviewBlog allBlog={allBlog} onDelete={handleDelete} onSubmit={handleSubmit} onEdit={handleEdit}/>}/>
        <Route path='/show' element={<Show showData={showData}/>}/>
        <Route path='/city' element={<ShowNews/>}></Route>
      </Routes>
    </>
  )
}

export default App
