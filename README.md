# Spam Classification

This project is a full-stack application for classifying spam messages using machine learning. It consists of three main components:

- **ml**: Machine learning model for spam classification, implemented in a Jupyter notebook.
- **be (Backend)**: Django-based API that serves the ML model.
- **fe (Frontend)**: Next.js frontend for interacting with the spam classifier.

The project uses Docker Compose to set up and run the environment.
The following commands are defined in the `Makefile` for convenience:

- **`make build`**: Builds the Docker containers.
- **`make up`**: Starts the containers.
- **`make down`**: Stops the containers.
- **`make restart`**: Restarts the containers.
- **`make logs`**: Displays the logs of all services.

Before running the commands, ensure that Docker is running on your machine.
Once Docker is up, you can start the project with:

```bash
make up
```

Once the services are running, you can access the application by navigating to: [http://localhost:3000/](http://localhost:3000/)
