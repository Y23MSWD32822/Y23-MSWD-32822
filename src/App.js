import './App.css'; 
import Courses from './Components.js/Cources';
import Footer from './Components.js/Footer';
import Header from './Components.js/Header';
import Student from './Components.js/Student';
import Hello from './Components.js/Hello';

function App() {

  return (
  
    <div className="App" >
    <font face = "Times New Roman" size = "+5" color = "#ff0000"> KL UNIVERSITY </font> 
    <Header/>
    <font face = "Algerian" size = "+3" color = "#800000"> Faculty Details</font>
    <Footer/>
   <font face = "Algerian" size = "+3" color = "#800000"> Student Details</font>
    <Student/>
    <font face = "Algerian" size = "+3" color = "#800000"> Course Details</font>
    <Courses/>
    <Hello/>
    <font face = "Algerian" size = "+3" color = "#800080" > MSWD COPY RIGHTS 2024 ACT</font> 
         
    </div>

  );
}
export default App;