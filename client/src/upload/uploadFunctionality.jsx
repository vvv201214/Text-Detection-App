import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const FileUploader = () => {
  // const navigate = useNavigate();
  // const cookieValue = Cookies.get('jwtoken');
  // useEffect(() => {
  //   if(window.location.pathname !== '/'){
  //     navigate('/');
  //   }
  //   if (!cookieValue) {
  //     navigate('/login');
  //   }
  // }, [cookieValue])

  const cookieValue = true;

  const [file, setFile] = useState(null);
  const [uploadedData, setUploadedData] = useState([
    {
      "_id": "667c29eeb5c41bef513f8058",
      "image": "https://stagingdmt.blob.core.windows.net/dmt-trade/632672207600544-Screenshot%202024-06-26%20075753.png",
      "text": "<p><span>Introducing </span><span><b>Brand </b></span><span><b>Name </b></span><span><b>Text </b></span><span><b>feature\n</b></span><span>Are </span><span>you </span><span>looking </span><span>for </span><span>a </span><span>powerful </span><span>tool </span><span>to </span><span>enhance </span><span>text </span><span>analysis </span><span>and </span><span>processing</span><span>? </span><span>Look </span><span>no </span><span>further</span><span>, </span><span>because </span><span>our </span><span>revolutionary </span><span>Brand </span><span>Name </span><span>Text </span><span>feature </span><span>has </span><span>got </span><span>you\n</span><span>covered</span><span>!\n</span></p>",
      "__v": 0
    }]);
  const baseUrl = process.env.NODE_ENV === "production" ? "/" : "http://localhost:8080/"

  useEffect(() => {
    axios.get(`${baseUrl}api/v1/data`)
      .then((resp) => {
        setUploadedData(resp.data.data);
      }).catch((err) => {
        console.log(err);
      })
  }, [file])

  const handleFileChange = (event) => {
    setFile(event.target.files);
  };


  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file[0]);

      const { data } = await axios.post(`${baseUrl}api/v1/uploads`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      });

      alert("File upload successfully");
      setFile(null)
    } catch (error) {
      alert('File upload failed');
    }
  };



  return (
    <>
      {cookieValue ?
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ borderRadius: '5px', backgroundColor: 'grey', width: '70%' }}>
            <h4>Upload Image</h4>
            <div style={{ width: '50%', marginBottom: '10px' }}>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                style={{ padding: '5px' }}
              />
            </div>
            <div style={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
              <button onClick={handleUpload} style={{ padding: '10px 20px', backgroundColor: 'red', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>
                Submit
              </button>
            </div>
          </div>

          <div style={{ width: '50%', marginBottom: '10px', marginTop: '20px', fontWeight: 'bold' }}>
            Uploaded Image will apear here
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {uploadedData?.map((elem, index) => {
              return (
                <div key={elem?._id}>
                  <img src={elem?.image} alt="Image" style={{ maxWidth: '60%', height: '60%' }} />
                  <div dangerouslySetInnerHTML={{ __html: elem?.text }} />
                </div>
              )
            })}
          </div>

        </div>
        :
        <></>
      }
    </>
  );
};

export default FileUploader;