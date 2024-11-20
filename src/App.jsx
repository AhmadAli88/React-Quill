import './App.css';
import Basic from './components/Basic';
import Index from './components/context/Index';
import SavingOnServer from './components/Saving Editor Content to a Server';
import Custom from './components/Custom';
import ImageUpload from './components/Image Upload';

function App() {
  return (
    <div>
      <Basic />
      <Custom/>
      <ImageUpload/>
      <Index/>
      <SavingOnServer/>
    </div>
  );
}

export default App;
