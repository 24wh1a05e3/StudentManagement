pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t studentmanagement:jenkins .'
    }
}
    }

    post {
        success {
            echo 'Student Management CI pipeline succeeded!'
        }
        failure {
            echo 'Student Management CI pipeline failed.'
        }
    }
}