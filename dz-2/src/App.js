import './App.css';
import ExampleSpoiler from './components/Spoiler';
import ExampleRangeInput from './components/RangeInput'
import LoginForm from './components/LoginForm';
import PasswordConfirm from './components/PasswordConfirm';
import Carousel from './components/Carousel';
import Pagination from './components/Pagination';

function App() {

  const imageUrls = [
    
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
                   "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg"
  ];

const Content = ({page}) => 
<div style={{fontSize: '5em'}}>
    Сторінка №{page}
</div>

const onLogin = (login, password) => {
  console.log('Login:', login, 'Password:', password);
}

const Color = ({page}) =>
<div style={{color: `rgb(${page*16},${page*16},${page*16})`}}>
    {page}
</div>

  return (
    <div className="App">
      <h1> Spoiler </h1>
      <ExampleSpoiler />
      <h1> RangeInput </h1>
      <ExampleRangeInput />
      <hr />
      <h1> LoginForm </h1>
      <LoginForm onLogin = {onLogin}/>
      <hr />
      <h1> PasswordConfirm </h1>
      <PasswordConfirm min={2} />
      <hr />
      <h1> Carousel </h1>
      <Carousel images={imageUrls} />
      <hr />
      <h1>Pagination</h1>
      <Pagination max={10} render={Content} />
      <Pagination max={16} render={Color} />
    </div>
     

  );
}

export default App;
