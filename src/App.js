import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import { Task1,Task2,DetailsScreen,KabanDetails, DisplayDataSet} from './Module';
import store from './Redux/Store';

function App() {
  return (
    <Provider store={store}>
       <Task1/>
    <div className="container-fluid">
                <div className="row">
                  <div className='fixed-top'>
                  <Task2/>
                  </div>
                    <main role="main" className="col-md-9 ml-sm-auto  col-lg-10    " style={{marginTop:"140px",backgroundColor:"#f4f4f4"}}>
                       
                        <Routes>
                       
                        <Route path="/" element={<Task2 />} />
                        <Route path="/project" element={<DetailsScreen/>} />
                        <Route path='/contract' element={<DisplayDataSet/>}/>
                        <Route path="/kanban" element={<KabanDetails/>} />
                  
                            </Routes>
                       
                    </main>
                </div>
            </div>


  </Provider>
  );
}

export default App;
