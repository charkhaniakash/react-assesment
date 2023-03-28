// import React, { useState, useEffect } from 'react'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Button, CardActions } from '@mui/material';
// import { CardActionArea } from '@mui/material';
// import { Link } from 'react-router-dom';
// import Popup from 'reactjs-popup';
// import ReactPlayer from 'react-player';



// const Entartainment = () => {

//   const [videos, setVideos] = useState([])

//   useEffect(() => {
//     const fetchData = () => {
//       fetch('http://localhost:8000/videos')
//         .then((response) => {
//           return response.json();
//         })
//         .then((data) => {
//           console.log(data);
//           setVideos(data);
//         })
//         .catch((err) => {
//           console.log(err);
//         })
//     }
//     fetchData()
//   }, [])
  
//   return (
//     <>
//     <Link to="/create"><Button variant = "contained" sx={{ m: 2, mx: 150, width: 150, mx: 1 }}>Add Items</Button></Link>
//       {videos?.map((item) => (
//         <Card
//           sx={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             p: 1,
//             m: 1,
//             bgcolor: 'background.paper',
//             width: "100%",
//             borderRadius: 1,
//             flexDirection: 'column'
//           }}
//           key={item.id} >
//           <Popup
//             trigger={<Button>
//               {item.cards?.map((vid) => {
//                 return (
//                   <>
//                   <CardActionArea>
//                     <CardMedia
//                       component="img"
//                       height="140"
//                       width="50"
//                       src={vid.thumbnailUrl}
//                       alt="green iguana"
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         {vid.author}
//                       </Typography>
//                       <Link>
//                         <Typography variant="body2" color="Blue">
//                           {vid.videoUrl}
//                         </Typography>
//                       </Link>
//                     </CardContent>
//                   </CardActionArea>
//                   <CardActions>
//                     <Button size="small" color="primary">
//                       <Link to="/AddItems">Update</Link>
//                     </Button>
//                     <Button size="small" color="primary">
//                       <Link>Delete</Link>
//                     </Button>
//                   </CardActions>
//                 </>
//                 )
                
//               })}
//             </Button>}
//             position="right center"
//           >
//             <div>
//               {item?.cards.map((vid) => (
//                 <ReactPlayer
//                   url={vid.videoUrl}
//                   width="100%"
//                   height="100%"
//                   controls
//                 />
//               ))}
//             </div>
//           </Popup>
//         </Card>
//       ))}
//     </>
//   )

// }

// export default Entartainment



import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import ReactPlayer from 'react-player';
import axios from 'axios';


const Entartainment = () => {



  const [videos, setVideos] = useState([])

  // const handleRemove = async (id) => {
  //   let response = await axios.delete(`http://localhost:8000/videos/${id}`);
  //   console.log(response);
  // };


  const handleRemove=(id) => {
      fetch(`http://localhost:8000/videos/${id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
  }



  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:8000/videos')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setVideos(data);
        })
        .catch((err) => {
          console.log(err);
        })
    }
    fetchData()
  }, [])

  return (
    <>
      <Link to="/create"><Button variant="contained" sx={{ m: 2, mx: 150, width: 150, mx: 1 }}>Add Items</Button></Link>
      <Card height="10vh"
        sx={{
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          width: "100%",
          borderRadius: 1,
          flexDirection: 'row'
        }}>
        {videos?.map((item) => (
          <Popup
            trigger={<button>
                  <>
                    <CardActionArea key={item.id}>
                      <CardMedia
                        component="img"
                        height="250"
                        width="50"
                        src={item.thumbnailUrl}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.name}
                        </Typography>
                        <Link>
                          <Typography variant="body2" color="Blue">
                            {item.videoUrl}
                          </Typography>
                        </Link>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        <Link to="/update">Update</Link>
                      </Button>
                      <Button size="small" color="primary" onClick={handleRemove} >
                        <Link>Delete</Link>
                      </Button>
                    </CardActions>
                  </>
            </button>}
            position="right center"
          >
            <div>
              {/* {item.map((vid) => ( */}
                <ReactPlayer
                  url={item.videoUrl}
                  width="100%"
                  height="100%"
                  controls
                />
              {/* ))} */}
            </div>
          </Popup>
        ))}
      </Card>

    </>
  )
}

export default Entartainment
