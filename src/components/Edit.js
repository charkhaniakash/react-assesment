import { Box, Container } from '@mui/system';
import { Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Edit = ({ videoId }) => {
  const [formData, setFormData] = useState({
    author: "",
    thumbnailUrl: "",
    videoUrl: "",
  });

  const updateVideo = async (videoId, updatedVideoData) => {
    try {
      const response = await axios.put(
        `http://localhost:8000/videos/${videoId}`,
        updatedVideoData
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    await updateVideo(videoId, formData);
  };

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/videos/${videoId}`);
        setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideoData();
  }, [videoId]);

  return (
    <Box
      onSubmit={handleSubmit}
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor:'grey'
      }}
    >
      <Typography component="h1" variant="h5">
        Update
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          autoFocus
          value={formData.author}
          onChange={(e) =>
            setFormData({ ...formData, author: e.target.value })
          }
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="author name"
          autoComplete="current-password"
          value={formData.videoUrl}
          onChange={(e) =>
            setFormData({ ...formData, videoUrl: e.target.value })
          }
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Insert url..."
          autoComplete="current-password"
          value={formData.thumbnailUrl}
          onChange={(e) =>
            setFormData({ ...formData, thumbnailUrl: e.target.value })
          }
        />
        <Link to="/entertain">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update Item
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Edit;











// import { useState } from 'react';
// import axios from 'axios';
// import { Box, Container } from '@mui/system';
// import { Button, TextField, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';

// const AddItems = () => {


//   const [formData, setFormData] = useState({
//         id: "",
//         name: "",
//         thumbnailUrl: "",
//         videoUrl: "",
//   });
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let response = await axios.post('http://localhost:8000/videos', formData);
//     console.log(response);
  
//     setFormData({
//           id: "",
//           name: "",
//           thumbnailUrl: "",
//           videoUrl: "",
//     });
//   };
//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Add new Items
//         </Typography>
//         <Box component="form" noValidate sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="Paste thumbnail"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             value={formData.thumbnailUrl}
//             onChange={(e) => setFormData({
//               ...formData, thumbnailUrl: e.target.value
//             })}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             label="author name"      
//             id="password"
//             autoComplete="current-password"
//             value={formData.name}
//             onChange={(e) => setFormData({
//               ...formData, name: e.target.value
//             })}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Paste url..."
//             id="password"
//             autoComplete="current-password"
//             value={formData.videoUrl}
//             onChange={(e) => setFormData({
//               ...formData, videoUrl: e.target.value
//             })}
//           />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               onClick={handleSubmit}
//               sx={{ mt: 3, mb: 2 }}>
//               <Link to="/entertain">
//               Add Items
//                </Link>
//             </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// }


// export default AddItems
