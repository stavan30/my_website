import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Spartan Food Pantry Web Application',
      date: 'Dec. 2022',
      description:
        'Developed a web application for a food pantry using React, Nginx, Apache Kafka, Firebase, and PostgreSQL',
      details: [
        'Implemented real-time updates for food inventory using Apache Kafka and Firebase',
        'Utilized PostgreSQL for storing and managing data related to food, distribution, and recipient information',
        'Configured Docker to manage the application dependencies and ensuring consistency across development',
        'Deployed the application using Nginx and ensured its stability and performance',
      ],
    },
    {
      title: 'AWS Buss Pass Web Application',
      date: 'Oct. 2022',
      description:
        'Created a web application for purchasing and organizing bus passes tickets using React, Django, and MySQL',
      details: [
        'Implemented a scalable and fault-tolerant architecture using AWS ECS, EC2, S3, API Gateway, Lambda, and SNS',
        'Applied AWS S3 for storing and serving static assets and media files. Leveraged AWS Lambda and API Gateway to build and expose RESTful APIs for the application',
        'Deployed the application on EC2 instances and controlled using ECS and utilized AWS SNS for sending email notifications to users',
      ],
    },
    {
      title: 'Trip Prediction using Bay Area Bike Share Data',
      date: 'Nov. 2022',
      description:
        'Applied machine learning techniques to predict the demand and projections of bike riders at a specific city for a specific day using the numerous time, weather, and behavior variables of Bay Area Bike Share Data',
      details: [
        'Utilized random forest regression, extra trees regressor, gradient boosting regressor, and lasso regression to build and compare multiple models',
        'Preprocessed and cleaned the data to prepare it for modeling. Evaluated the performance of the models using various metrics and selected the best performing model.',
      ],
      github: 'https://github.com/stavan30/cmpe255_final_project'
    },
    {
      title: 'House Price Prediction Model',
      date: 'Dec. 2021',
      description:
        'Developed a house price prediction model using a dataset of 700k houses in Singapore.',
      details: [
        'Utilized deep learning techniques and applied Convolutional Neural Network (CNN) for feature extraction.',
        'Implemented a model containing 5 Convolutional layers and 4 Fully Connected Linear layers.',
        'Each layer except the final output neuron layer is followed by a Batch Normalization layer and ReLU activation function.',
        'Training done on 20 Epochs with a learning rate of 0.0001, optimizer as SGD, and Mean Squared Error as the loss function.',
      ],
    },
  ];

  return (
    <div className='h-full w-full bg-gradient-to-b from-gray-800 to-black'>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-4xl text-cyan-400 font-bold mb-7">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2 text-cyan-400">{project.title}</h2>
            <p className="text-gray-500 mb-4">{project.date}</p>
            <p className="mb-4 text-white">{project.description}</p>
            <ul className="list-disc list-inside mb-4 text-teal-100">
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;
