# Build the Docker image for Kubernetes
docker_build('algorithms-app', '.')

# Load the Kubernetes YAML for Tilt to deploy
k8s_yaml('kubernetes.yaml')

# Forward port 3000 from the cluster to your local machine
k8s_resource('algorithms-app', port_forwards=3000)