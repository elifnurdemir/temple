import React, { useState } from "react";
import DashboardNavbar from '../navbar/dashboardNavbar';
import '../../assets/css/faq.css';

const Faq = () => {
   const [showAnswers, setShowAnswers] = useState({});

   const toggleAnswer = (index) => {
      setShowAnswers(prevState => ({
         ...prevState,
         [index]: !prevState[index]
      }));
   };

   return (
      <React.Fragment>
         <DashboardNavbar />
         <div className="faq-container">
            <div className="faq-text-area">
               <div className="faq-title">Sıkça Sorulan Sorular</div>
               <div className="faq-q" onClick={() => toggleAnswer(1)}>What is Lorem Ipsum? V</div>
               {showAnswers[1] && <div className="faq-a">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>}
               <div className="faq-q" onClick={() => toggleAnswer(2)}>What is Lorem Ipsum? V</div>
               {showAnswers[2] && <div className="faq-a">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>}
               <div className="faq-q" onClick={() => toggleAnswer(3)}>What is Lorem Ipsum? V</div>
               {showAnswers[3] && <div className="faq-a">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>}
               <div className="faq-q" onClick={() => toggleAnswer(4)}>What is Lorem Ipsum? V</div>
               {showAnswers[4] && <div className="faq-a">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>}
            </div>
            <div className="faq-search">
               <label htmlFor="search">Ara:</label>
               <input type="text" id="search" name="q" placeholder="Search..." />
            </div>
         </div>
      </React.Fragment>
   );
};

export default Faq;

