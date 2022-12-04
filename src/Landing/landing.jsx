import React from 'react';
import './landing.css';
import Logo from '../assets/Global.png'
import { Form } from 'react-bootstrap';
import {TbUpload} from 'react-icons/tb';
import {BsFillFileEarmarkCheckFill} from 'react-icons/bs';
import Dropzone from 'react-dropzone';
import Swal from 'sweetalert2';

import { useCallback } from 'react';

export default function Landing() {
  /* USE STATE */
  let [file,setFile]=React.useState(null);


  let [fileInput,setfileinput] = React.useState();
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


  return (
    <div className='LandingContainer'>
        <div className='FormContainer SecondContainer'>
            <form className='Form'>
                <span className='Title '>Data Processing</span>
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
                    <Form.Select aria-label="Default select example" id="InputSelect" className='shadow'>
                        <option value="1">Nuevos clientes</option>
                        <option value="2">Antiguos clientes</option>
                    </Form.Select>
                    
                    {file===null ? 
                    
                    <span className='Text alert'>Selecciona un archivo para analizar...</span>
                    :
                    <button type="" className='ButtonSubmit shadow' disabled={file===null}>Analizar</button>}
                </div>
                
            </form>
        </div>
        <div className='LogoContainer SecondContainer'>
            <img className='Logo' src={Logo} alt="" />
        </div>
    </div>
  )
} 
