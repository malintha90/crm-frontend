
import './App.css';
import Layout from './Layout/Layout';

import DashboardComp from './pages/Dashboard/DashboardComp';
import Entry from './pages/entry/Entry';
import AddNewTicket from './pages/NewTicket/AddNewTicket';

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <DashboardComp/> */}
        <AddNewTicket/>
      </Layout>
      {/* <Entry/> */}
    </div>
  );
}

export default App;
