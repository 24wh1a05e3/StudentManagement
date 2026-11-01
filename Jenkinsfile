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
        stage('Verify Kubernetes Connection') {
            steps {
                withKubeConfig(caCertificate: '''-----BEGIN CERTIFICATE-----
MIIDBjCCAe6gAwIBAgIBATANBgkqhkiG9w0BAQsFADAVMRMwEQYDVQQDEwptaW5p
a3ViZUNBMB4XDTI2MTAwOTA1NTQxNVoXDTM2MTAwNzA1NTQxNVowFTETMBEGA1UE
AxMKbWluaWt1YmVDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAK6Y
pCpJMYk+tcq/LmalUxI3SFSTCPRFV9krq+nq1x6oFBz3CNLtrvShDVTgXG928sAo
FwaL09qGFtA2YwmQtMm6RjG3ZKsWkQNXrLK/HzaLAH04aq1M8PVEnGE7rv5KiIuF
6waEoFQcpbVmHZ6HoQ+pSTWrwyrf9bxPm2WIyVZuLN8iaD10cQ4qLP58KfSoOwXS
y+mMJ5vBSEtMRnQXhZVqJ1HndHq5PiRLsYApZDU+qMYdMP63llkzXUgihFN7y+7f
BgWy4WQvyMvZBOG7hQcF1XQoboodKn29leNJ8sroJ8Fltupcgah9894hVOmx2/h5
nseSbdGKWVTAkix38kMCAwEAAaNhMF8wDgYDVR0PAQH/BAQDAgKkMB0GA1UdJQQW
MBQGCCsGAQUFBwMCBggrBgEFBQcDATAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQW
BBSx5Du+R7tiNoM/1c3Y+CzhUbToIzANBgkqhkiG9w0BAQsFAAOCAQEABuX1xmZW
Vy6j5e2qsBe2YWAfqv4/SG4+Vh8O9RC8xc0kL3t8aWLd18VlyL5csZ1KMZ2EAW2k
BUQGefDlypQ4n/I5oQNMLP+20u7Mx5CHBf3bpyX3G7bAwU3EQr7DwcsAZDXhjc6j
EhYQ19e+rf3m2LdysBpkT/q7Rk+DSXEcvXM2AFPi7vXnJn4fZu4QB0JKaXZ2NXtD
zTqWLj5ZO0KD2bodiFPHqL8KKh0lKnzAwFASC3fx0lbQvsNwUBqM7lTCWAlp4LkD
PI6yROovgMy6sOjcaS/CYDpMlYBPMRj32rPWTXdqPRK1vHTC/mviim3+0SmM5KWe
Ca/UAqpRFeqD/Q==
-----END CERTIFICATE-----''', clusterName: 'minikube', contextName: 'studentmanagement-jenkins', credentialsId: 'studentmanagement-k8s-token', namespace: 'default', restrictKubeConfigAccess: true, serverUrl: 'https://192.168.49.2:8443') {
    sh 'kubectl get deployment studentmanagement'
     }
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