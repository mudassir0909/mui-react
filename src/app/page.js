import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ margin: 2 }}>
          <ListOfBooks />
        </Box>

        <AppNavigation />
      </Container>
    </React.Fragment>
  );
}

function AppNavigation() {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
      >
        <BottomNavigationAction label="Books" icon={<AutoStoriesIcon />} />
        <BottomNavigationAction label="Food" icon={<DinnerDiningIcon />} />

      </BottomNavigation>
    </Paper>
  );
}

const books = [
  { title: 'Programming in C++', author: 'Balaguruswamy' },
  { title: 'Learning C', author: "Author 2" },
  { title: 'Adventures of C++', author: 'Auhtor 3' },
  { title: 'Learning Javascript', author: 'Author 4' },
  { title: 'Programming in C++', author: 'Balaguruswamy' },
  { title: 'Learning C', author: "Author 2" },
  { title: 'Adventures of C++', author: 'Auhtor 3' },
  { title: 'Learning Javascript', author: 'Author 4' },
  { title: 'Programming in C++', author: 'Balaguruswamy' },
  { title: 'Learning C', author: "Author 2" },
  { title: 'Adventures of C++', author: 'Auhtor 3' },
  { title: 'Learning Javascript', author: 'Author 4' },
  { title: 'Programming in C++', author: 'Balaguruswamy' },
  { title: 'Learning C', author: "Author 2" },
  { title: 'Adventures of C++', author: 'Auhtor 3' },
  { title: 'Learning Javascript', author: 'Author 4' },
];

function ListOfBooks() { // 12/3 = 4
  return (
    <Grid container spacing={2}>
      {books.map((book, idx) => (
        <Grid item xs={3} index={idx}>
          <BookCard title={book.title} author={book.author} />
        </Grid>
      ))}
    </Grid>
  );
}

function BookCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://m.media-amazon.com/images/I/41FQ-HlNyRL.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          FREE
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
      </CardActions>
    </Card>
  );
}
