import React from 'react';
import './landing.css';
import Logo from '../assets/Global.png'
import { Form } from 'react-bootstrap';
import {TbUpload} from 'react-icons/tb';
import {BsFillFileEarmarkCheckFill} from 'react-icons/bs';
import Dropzone from 'react-dropzone';
import Swal from 'sweetalert2';
import ClipLoader from "react-spinners/ClipLoader";

/* DOWLOADING   */
import DownloadLink from "react-download-link";
import RunFile from '../services/landing';
import axios from 'axios';




/* LOADING */


function timeout(delay) {
  return new Promise( res => setTimeout(res, delay) );
}


  

export default function Landing() {

  /*LOADING */
  let [loadingInProgress, setLoading] = React.useState(false);

  /* USE STATE */
  let [file,setFile]=React.useState(null);
  let [selectValue,setSelectValue]=React.useState("Nuevos Clientes");

  /* USE EFFECT*/



  const ChangeSelectValue=(event)=>{
    setSelectValue(event.target.value);
  }

  const fileInputChange=(event)=>{
    if(event[0].type.includes("csv")){
      Swal.fire({
        icon: 'success',
        title: 'Archivo cargado correctamente',
      })
      console.log(event)
      setFile(event);
    }else{
      /* ALERT */
      Swal.fire({
        icon: 'error',
        title: 'Extensión de archivo incorrecta',
      })
    }

  }

  const ResetFile=()=>{
    setFile(null);
  }


  const Run=()=>{
    setLoading(true);
    RunFile(file[0],selectValue).then(data=>{
      console.log("ANSWER: ",data)
    }); 
    setLoading(false);
  }


  return (
     <>
     <ClipLoader className='Loading' color={'#183839'} loading={loadingInProgress} size={80} />
    <div className={`LandingContainer ${loadingInProgress ? "active" : ""}`}>
        
        <div className='FormContainer SecondContainer'>
            <form className='Form '>
                <Dropzone onDrop={acceptedFiles => fileInputChange(acceptedFiles)}  className='shadow'>
                {({getRootProps, getInputProps}) => (
                  <section>
                    <div {...getRootProps()} className="center">
                      <input {...getInputProps()} accept=".csv"/>
                      {file===null ? 
                      <>
                        <TbUpload className='LogoDrag'/>
                        <span className='Text mt-3' >Arrastra el archivo CSV o</span>
                        <span className='Text'>da click al logo para seleccionar</span>
                      </>:
                      <>
                        <BsFillFileEarmarkCheckFill className='LogoDrag'/>
                        <span className='Text  mt-3'>Archivo CSV cargado</span>
                        <span className='Text'>{file[0].name}</span>
                        <span onClick={ResetFile} className='Text mt-3 Text-Function'>resetear archivo</span>
                      </>}
                      
                      
                      
                    </div>
                  </section>
                )}
                </Dropzone>
                <div className='InputSelectContainer'>
                    <label className='Text'>Seleccione el tipo de cliente</label>
                    <Form.Select onChange={(event)=>ChangeSelectValue(event)} aria-label="Default select example" id="InputSelect" className='shadow'>
                        <option value="Nuevos Clientes">Nuevos clientes</option>
                        <option value="Antiguos Clientes">Antiguos clientes</option>
                    </Form.Select>
                    
                    {file===null ? 
                    
                    <span className='Text alert'>Selecciona un archivo para analizar...</span>
                    :
                    <button onClick={Run} type="button" className='ButtonSubmit shadow' disabled={file===null}>Analizar</button>}

                </div>
                
            </form>
        </div>
        <div className='LogoContainer SecondContainer'>
            <img className='Logo' src={Logo} alt="" />
        </div>
    </div>

     </>
    
  )
} 
