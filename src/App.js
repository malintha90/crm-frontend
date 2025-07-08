
import './App.css';
import Layout from './Layout/Layout';

import DashboardComp from './pages/Dashboard/DashboardComp';

import Entry from './pages/entry/Entry';

function App() {
  return (
    <div className="App">
      <Layout>
        <DashboardComp/>
      </Layout>
      {/* <Entry/> */}
    </div>
  );
}

export default App;
