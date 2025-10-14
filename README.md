<div align="center">
  <img src="./logo/logo-icon.png" alt="Kuberneat Logo" width="120" height="120"/>
  <h1>Kuberneat</h1>
  <p>A visualization and monitoring tool for Kubernetes clusters</p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![Status](https://img.shields.io/badge/status-in%20development-yellow)](https://github.com/oslabs-beta/Kuberneat)
  ![GitHub language count](https://img.shields.io/github/languages/count/oslabs-beta/Kuberneat)
  ![GitHub top language](https://img.shields.io/github/languages/top/oslabs-beta/Kuberneat?color=yellow)
  ![GitHub stars](https://img.shields.io/github/stars/oslabs-beta/Kuberneat?style=social)
  ![GitHub forks](https://img.shields.io/github/forks/oslabs-beta/Kuberneat?style=social)
  
  <h4>Supported Platforms</h4>
  <a href="https://github.com/oslabs-beta/Kuberneat"><img src="https://img.shields.io/badge/platform-macOS-lightgrey?style=for-the-badge&logo=apple" alt="macOS" /></a>
  <a href="https://github.com/oslabs-beta/Kuberneat"><img src="https://img.shields.io/badge/platform-Linux-orange?style=for-the-badge&logo=linux" alt="Linux" /></a>
  <a href="https://github.com/oslabs-beta/Kuberneat"><img src="https://img.shields.io/badge/platform-Windows-blue?style=for-the-badge&logo=windows" alt="Windows" /></a>

  <p>
    <a href="#overview">Overview</a> •
    <a href="#features">Features</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#contributing">Contributing</a> •
    <a href="#team">Team</a>
  </p>
</div>

## Overview

Kuberneat provides insights into Kubernetes environments through interactive visualizations. Originally released as Zeus in 2022, this project aims to offer a monitoring experience with Prometheus and Grafana integration. The project is currently in active development and welcomes community contributions.

<div align="center">
  <img src="./Demo-gifs/Zeus-Dasboard.gif" alt="Kuberneat Dashboard Concept" width="80%" />
</div>

## Features

> **Note:** Kuberneat is under active development. The features shown below represent both current capabilities and development goals. Community contributions are welcome to help enhance these features.

<div align="center">
  <table>
    <tr>
      <td width="50%">
        <h3 align="center">Interactive Cluster Visualization</h3>
        <img src="./Demo-gifs/visualizer%20demo.gif" alt="Cluster Visualization" />
        <p align="center">Explore connections between Kubernetes resources with dynamic graph visualizations</p>
      </td>
      <td width="50%">
        <h3 align="center">Kubelet Metrics</h3>
        <img src="./Demo-gifs/Kubelet.gif" alt="Kubelet Metrics" />
        <p align="center">Monitor Kubelet performance metrics integrated from Prometheus</p>
      </td>
    </tr>
    <tr>
      <td width="50%">
        <h3 align="center">Kube-State-Metrics Integration</h3>
        <img src="./Demo-gifs/Kube-State-Metrics.gif" alt="Kube-State-Metrics" />
        <p align="center">Access comprehensive state metrics for cluster management</p>
      </td>
      <td width="50%">
        <h3 align="center">Kubernetes API Monitoring</h3>
        <img src="./Demo%20Shots/K8s-API.png" alt="Kubernetes API Monitoring" />
        <p align="center">Track API server performance and request patterns</p>
      </td>
    </tr>
  </table>
</div>

## Getting Started

### Prerequisites

- Kubernetes cluster (local or remote)
- Prometheus and Grafana set up in your cluster
- Node.js 16+ and npm/yarn

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/oslabs-beta/Kuberneat.git
   cd Kuberneat
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment configuration:
   ```bash
   # Create a .env file in the root directory
   touch .env

   # Add your MongoDB connection string
   echo "mongoURI = \"Your NoSQL URI string\"" > .env
   ```

4. Launch the application in development mode:
   ```bash
   # For the web application
   npm run dev
   
   # For the Electron application
   npm run electron
   ```

> **Note:** This project is in development. You may encounter issues that require troubleshooting or configuration adjustments.

## Tech Stack

<details>
<summary>Frontend Technologies</summary>
<br>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![D3.js](https://img.shields.io/badge/D3.js-F9A03C?style=for-the-badge&logo=d3.js&logoColor=white)

</details>

<details>
<summary>Backend Technologies</summary>
<br>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Electron.js](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white)

</details>

<details>
<summary>Monitoring & Visualization Tools</summary>
<br>

![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Grafana](https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white)

</details>

## Contributing

We welcome contributions to help improve Kuberneat! Here's how you can help:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b your-name/awesome-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add some awesome feature'
   ```
4. Push to your branch:
   ```bash
   git push origin your-name/awesome-feature
   ```
5. Open a pull request with a detailed description of your changes

### Development Focus Areas

We're currently focusing on:
- Improving Prometheus/Grafana integration
- Enhancing D3.js visualizations
- Updating dependencies
- Expanding documentation
- Addressing compatibility issues

Please review our [Contribution Guidelines](https://github.com/oslabs-beta/Kuberneat/blob/dev/CONTRIBUTING.md) before submitting your PR.

<div align="center">
  <img src="./Demo%20Shots/PR-guide.png" alt="PR Guidelines" width="70%" />
</div>

## Team

<div align="center">
  <table>
    <tr>
      <td align="center"><a href="https://github.com/harvli"><img src="https://github.com/harvli.png" width="100px;" alt="Harvey Li"/><br /><sub><b>Harvey Li</b></sub></a><br /><a href="https://www.linkedin.com/in/harvey-li/">LinkedIn</a></td>
      <td align="center"><a href="https://github.com/TheNirmata"><img src="https://github.com/TheNirmata.png" width="100px;" alt="Amy (Aimée) Nguyen"/><br /><sub><b>Amy Nguyen</b></sub></a><br /><a href="https://www.linkedin.com/in/aqn/">LinkedIn</a></td>
      <td align="center"><a href="https://github.com/johnwroge"><img src="https://github.com/johnwroge.png" width="100px;" alt="John Wroge"/><br /><sub><b>John Wroge</b></sub></a><br /><a href="https://www.linkedin.com/in/john-wroge/">LinkedIn</a></td>
      <td align="center"><a href="https://github.com/edcho720"><img src="https://github.com/edcho720.png" width="100px;" alt="Ed Cho"/><br /><sub><b>Ed Cho</b></sub></a><br /><a href="https://www.linkedin.com/in/edcho720/">LinkedIn</a></td>
    </tr>
  </table>
</div>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<div align="center">
  <p>© 2025 Kuberneat • Originally released as Zeus in 2022</p>
  <a href="https://www.opensourcelabs.io/"><img src="https://img.shields.io/badge/Made%20at-OSLabs-blue?style=for-the-badge" alt="Made at OSLabs" /></a>
</div>