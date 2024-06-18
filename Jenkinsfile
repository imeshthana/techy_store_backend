
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
                sh 'docker build . -t techy-store-server3'
            }
        }
        stage('Run Docker Image') {
            steps {
                sh 'docker run -d --name techy-store-server3 -p 4001:4001 techy-store-server3'
            }
        }
    }
    
}