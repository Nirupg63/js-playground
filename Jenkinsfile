pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'cd server
                npm install                
                '
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                bat '
                cd server
                npm start
                '
            }
        }
    }
}