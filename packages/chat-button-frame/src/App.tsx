import { useLocation } from 'react-router-dom';
import useStyles from './styles';
import logo from './chat.png';

function App() {
  const color = useLocation()?.search.split('?color=')[1];
  const classes = useStyles({ color });

  return (
    <div className="App">
      <div className={classes.chatIcon}>
        <img src={logo} className={classes.chatIconImage} alt="logo" />
      </div>
    </div>
  );
}

export default App;
