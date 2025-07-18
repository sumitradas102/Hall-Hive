import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NoticePage from "./pages/NoticePage";
import LoginPage from "./pages/LoginPage";
import ComplaintPage from "./pages/ComplaintPage";
import AdministrationPage from "./pages/AdministrationPage";
import ContactPage from "./pages/ContactPage";
import HallLayoutPage from "./pages/HallLayoutPage";
import EventsPage from "./pages/EventsPage";
import StudentPage from "./pages/StudentPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import RoomApplyPage from "./pages/RoomApplyPage";
import FaqChatPage from "./pages/FaqChatPage";
import SignupPage from "./pages/SignupPage";
import AdminComplaintPage from "./pages/AdminComplaintPage"; 
import AdminNoticePage from "./pages/AdminNoticePage"; 
import RoomApprove from "./pages/RoomApprove";
import AdminEventPage from "./pages/AdminEventPage";
import AllowedStudentsPage from "./pages/AllowedStudentsPage";
import demoPage from  "./pages/demoPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<demoPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/notice" element={<NoticePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/faq" element={<FaqChatPage />} />
      <Route path="/complaint" element={<ComplaintPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/administration" element={<AdministrationPage />} /> 
      <Route path="/contact"  element={<ContactPage/>}/>
      <Route path="/hall-layout" element={<HallLayoutPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/student"element={<StudentPage/>}/>
      <Route path="/room-application"element={<RoomApplyPage/>}/>
      <Route path="/signup"element={<SignupPage/>}/>
      <Route path="/admin" element={<AdminDashboardPage />} />
      <Route path="/admin/complaints" element={<AdminComplaintPage />} /> {/* <-- admin complaints page */}
      <Route path="/admin/notices" element={<AdminNoticePage />} /> {/* <-- admin complaints page */}
      <Route path="/admin/room-approve" element={<RoomApprove />}/>
      <Route path="/admin/events" element={<AdminEventPage />} />
      <Route path="/allowedStudentUpload" element={<AllowedStudentsPage/>}/>

    </Routes>
  );
}

export default App;
