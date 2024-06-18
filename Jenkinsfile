
pipeline {
    agent any

    environment {
        GITHUB_REPO_URL = 'https://github.com/imeshthana/techy_store_backend.git'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: "${env.GITHUB_REPO_URL}"
            }
        }
        stage('Docker Build') {
            steps {
                bat 'docker build . -t techy-store-server'
            }
        }
        stage('Run Docker Image') {
            steps {
                bat 'docker run -d --name techy-store-server -p 3001:3001 techy-store-server'
            }
        }
    }
    
}