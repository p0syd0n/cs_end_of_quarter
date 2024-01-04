import express from 'express';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;
const app = express();
const headers = {
  'User-Agent': "Mozilla/5.0 (Macintosh Intel Mac OS X 10.15 rv:84.0) Gecko/20100101 Firefox/84.0",
  'X-Forwarded-For': "cheesemoose"
};
const title = 'CS capstone project';

//begin server configs
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'public', 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//static routes

app.get('/', (req, res) => {
  res.redirect('/scenario1');
});

app.get('/scenario1', (req, res) => {
  res.render('scenario1', {title: title});
});

app.get('/scenario2', (req, res) => {
  res.render('scenario2');
});

app.get('/scenario3', (req, res) => {
  res.render('scenario3');
});

app.get('/scenario4', (req, res) => {
  res.render('scenario4');
});

app.get('/bibliography', (req, res) => {
  res.render('bibliography');
});

app.listen(port, async () => {
  console.log(`Server started on port ${port}`);
});
//https://wai.137900.xyz/search?q=test

