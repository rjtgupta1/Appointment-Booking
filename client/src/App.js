import AppointmentForm from "./components/AppointmentForm";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Paymentsuccess from "./pages/Paymentsuccess";
import Paymentfailed from "./pages/Paymentfailed"
import Checkstatus from "./pages/Checkstatus";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={AppointmentForm}></Route>
          <Route path="/paymentsuccess" Component={Paymentsuccess}></Route>
          <Route path="/paymentsuccess/:paymentId" Component={Paymentsuccess}></Route>
          <Route path="/paymentfailed/" Component={Paymentfailed}></Route>
          <Route path="/check-status" Component={Checkstatus}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
