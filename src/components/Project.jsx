import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "./Project.css"
import Card from 'react-bootstrap/Card';


const Project = () => {
  return (
    <div>
      <Navbar />
      <div className="heading">My Works..</div>
        <div className='project-head'>Data Science Projects</div>
         <div className="projects">
          <Card className='card'>
          <Card.Body>
            <Card.Title>Car Model Prediction</Card.Title>
            <Card.Text>
            A machine learning and deep learning-based application that predicts car models based on user inputs.
            </Card.Text>
            <a href="https://car-model-detection-bymj.streamlit.app/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card>
          <Card className='card'>
          <Card.Body>
            <Card.Title>College Helpdesk Chatbot</Card.Title>
            <Card.Text>
            Ask the queries about your college.
            </Card.Text>
            <a href="https://t.me/CollegeHelpdesk_bymj_Bot/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card>
          <Card className='card'>
          <Card.Body>
            <Card.Title>Machine Learning Prediction App</Card.Title>
            <Card.Text>
           Machine Learning Prediction App A Streamlit-based end-to-end machine learning system that allows users to select datasets, choose algorithms, run predictions, compare trained models, and explore datasets with built-in EDA tools
            </Card.Text>
            <a href="https://machine-learning-prediction-app-by-mj.streamlit.app/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card>
          <Card className='card'>
          <Card.Body>
            <Card.Title>College Helpdesk Chatbot</Card.Title>
            <Card.Text>
            Ask the queries about your college.
            </Card.Text>
            <a href="https://t.me/CollegeHelpdesk_bymj_Bot/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card>
        <Card className='card'>
          <Card.Body>
            <Card.Title>Titanic Survival Prediction</Card.Title>
            <Card.Text>
            Predict the survival of passengers on the Titanic.
            </Card.Text>
            <a href="https://titanic-survival-predictor-da-project-by-mj.streamlit.app/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card> 
        <Card className='card'>
          <Card.Body>
            <Card.Title>IPL Win Prediction</Card.Title>
            <Card.Text>
            Predict the win probability of the team in IPL match.
            </Card.Text>
            <a href="https://ipl-win-pridiction000.streamlit.app/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card> 

        <Card className='card'>
          <Card.Body>
            <Card.Title>Weather Dashboard Power BI</Card.Title>
            <Card.Text>
            Weather Dashboard using Power BI showing the weather analysis of different cities.
            </Card.Text>
            <a href="https://github.com/mohd-mustajab/Weather-Dashboard-using-Power-BI.git/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card> 
      </div>


        <div className='project-head'>Full Stack Web Development Projects</div>
      <div className="projects">
        <Card className='card'>
          <Card.Body>
            <Card.Title>Travel Chatbot</Card.Title>
            <Card.Text>
            Ask the queries about your journey.
            </Card.Text>
            <a href="https://ai-chatbot-five-murex.vercel.app/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card>
        <Card className='card'>
          <Card.Body>
            <Card.Title>Live Chat App</Card.Title>
            <Card.Text>
            A chat app where u can create the rooms and chat with your friends.
            </Card.Text>
            <a href="https://live-chat-app-7np2.onrender.com/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card>
        <Card className='card'>
          <Card.Body>
            <Card.Title>Video Player</Card.Title>
            <Card.Text>
            A multi-resolution video player whre u can upload and play video on diffrent resolutions.
            </Card.Text>
            <a href="https://multi-resolution-video-player.onrender.com/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card>
        <Card className='card'>
          <Card.Body>
            <Card.Title>Analog Clock</Card.Title>
            <Card.Text>
            An analog clock is a traditional timekeeping device featuring a circular dial.
            </Card.Text>
            <a href="https://mohd-mustajab.github.io/Analog_Clock-Project/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card>


        <Card className='card'>
          <Card.Body>
            <Card.Title>Music Player</Card.Title>
            <Card.Text>      
             A music player software application designed to play audio files. 
            </Card.Text>
            <a href="https://mohd-mustajab.github.io/Music_player_Project/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card>


        <Card className='card'>
          <Card.Body>
            <Card.Title>Calculator</Card.Title>
            <Card.Text>
            It used for performing mathematical calculations.
            </Card.Text>
            <a href="https://mohd-mustajab.github.io/Calculator/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card>

        <Card className='card'>
          <Card.Body>
            <Card.Title>User Data</Card.Title>
            <Card.Text>
             It fetch the user's data from external API.You can either search the user by name.
            </Card.Text>
            <a href="https://userdata-mj.netlify.app/" target='_blank'><button className="btn">Visit</button></a>
          </Card.Body>
        </Card>


      </div>
      <Footer />
    </div>
  )
}

export default Project

