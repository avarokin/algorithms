# Build the Docker image for Kubernetes
docker_build(
    'algorithms-app',
    '.',
    live_update=[
        sync('.', '/app'),  # Sync local changes to the container's /app directory
        run('npm install', trigger=['package.json', 'package-lock.json']),  # Run npm install only if package files change
    ]
)

# Load the Kubernetes YAML for Tilt to deploy
k8s_yaml('kubernetes.yaml')

# Forward port 3000 from the cluster to your local machine
k8s_resource('algorithms-app', port_forwards=3000)