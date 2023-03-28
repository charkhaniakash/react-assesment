import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Card sx={{ maxWidth: 345, m: 8 }}>
        <Link to='/entertain'>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              src='/edu.jpg'
              alt="green iguana"
              sx={{ m: 2 }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Entartainments
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It produce desired states such as relaxation or arousal and can induce the range of human emotions that enrich daily life
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
      <Card sx={{ maxWidth: 345, m: 8 }}>
        <Link to='/education' >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              src='/edu.jpg'
              alt="green iguana"
              sx={{ m: 2 }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Education
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It develop critical skills like decision-making, mental agility, problem-solving, and logical thinking.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  )
}

export default Home
