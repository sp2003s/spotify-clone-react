import axios from 'axios';
import React, { useState } from 'react'
import { useActionData } from 'react-router-dom';
import { url } from '../App';
import { toast } from 'react-toastify';

const ListAlbum = () => {

  const [data, setData] = useState([]);

  const fetchAlbums = async () => {
    try {

      const response = await axios.get(`${url}/api/album/list`)

      if(response.data.success){
        setData(response.data.albums)
      }
      
    } catch (error) {
      toast.error('Error Occoured')
    }
  }

  useEffect(() => {
    fetchAlbums();
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default ListAlbum
