import './App.css';
import driverData from './data.json'
import Mc from './components/Mc.js'
import Driver from './components/Driver.js'
import Load from './components/Load.js'
import Reference from './components/Reference.js'

const App = () => {
  return (
    <div>
      <h1 className="appName">Dispatch Night Shift</h1>
      <div className='flexRow'>
        {driverData.map((data) => {
          return (
            <div class="card">
              <Mc companyName={data.company_name} mc={data.MC} phone={data.phone} />
              <Driver driverName={data.diver_name} mcNumber={data.MC} dotNumber={data.DOT} />
              <Reference poNumber={data.po_number} />
              <Load origin={data.current_load.origin} departureTime={data.current_load.departure_time} destination={data.current_load.destination} arrivalTime={data.current_load.arrival_time}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
