// ============================================================
// portfolioData.js — Centralized configuration for Malaya Ranjan Pradhan's Portfolio
// Cloud & DevOps Engineer Profile
// ============================================================

export const personalInfo = {
  name: "Malaya Ranjan Pradhan",
  firstName: "Malaya",
  brandName: "Malaya",
  title: "Cloud & DevOps Engineer",
  location: "Hyderabad, India",
  phone: "+91 8018490994",
  emails: {
    primary: "skp.pp.mrp@gmail.com",
  },
  summary:
    "MCA graduate with hands-on experience in AWS cloud infrastructure (Solutions Architect level), Linux administration, Python automation, and MySQL/PostgreSQL databases. Skilled in designing highly available, secure cloud architectures, implementing CI/CD pipelines, and automating infrastructure with Ansible, Docker, and Kubernetes.",
  resumeUrl: "/Malaya_Ranjan_Pradhan_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/dev0malaya",
  linkedin: "https://linkedin.com/in/malaya-ra-pradhan",
  instagram: "https://www.instagram.com/malaya_ranjan_pradhan_/",
};

export const heroContent = {
  greeting: "Hi, I'm Malaya Ranjan Pradhan",
  titleHighlight: "Cloud & DevOps Engineer",
  subtitle:
    "I design highly available AWS cloud architectures, automated CI/CD pipelines, and scalable Docker & Kubernetes infrastructure.",
  ctaPrimary: { text: "View Architecture Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:skp.pp.mrp@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Malaya,%0D%0A%0D%0AI came across your portfolio and would like to discuss a Cloud / DevOps opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Malaya_Ranjan_Pradhan_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Malaya Ranjan Pradhan</span>, a Cloud & DevOps Engineer based in Hyderabad, India, dedicated to designing highly available, secure AWS cloud architectures, automating CI/CD pipelines, and orchestrating containerized applications with Docker and Kubernetes.`,
  techStack: ["AWS Cloud", "DevOps & CI/CD", "Docker & Kubernetes", "Linux & Automation"],
};

export const skillsContent = {
  badge: "Engineering Process",
  heading: "Here's how I design & deploy resilient cloud infrastructure",
  description:
    "I follow a structured, security-first, and highly automated methodology to provision robust cloud environments.",
  cards: [
    {
      number: "01",
      title: "Architecture Design",
      text: "Designing multi-AZ custom VPCs, public/private subnets, IAM security policies, Internet/NAT Gateways, and load balancers for maximum fault tolerance.",
    },
    {
      number: "02",
      title: "Infrastructure as Code",
      text: "Provisioning reproducible, scalable cloud resources using Terraform, AWS CloudFormation, Ansible, and automated Python (boto3) scripts.",
    },
    {
      number: "03",
      title: "Container & CI/CD",
      text: "Containerizing microservices with Docker, configuring Kubernetes Ingress/Services, and orchestrating automated pipelines via Jenkins and GitHub Actions.",
    },
    {
      number: "04",
      title: "Monitoring & Delivery",
      text: "Integrating RDS databases, S3 storage, Route 53 DNS routing, CloudFront CDN edge caching, and CloudWatch automated monitoring.",
    },
  ],
  endText: "Ready to deploy!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Cloud Infrastructure (AWS)",
      skills: [
        { name: "EC2 & Auto Scaling", level: 95 },
        { name: "VPC, Subnets & Gateways", level: 95 },
        { name: "IAM & AWS Security (WAF/KMS)", level: 92 },
        { name: "S3, CloudFront & Route 53", level: 90 },
        { name: "RDS (MySQL / PostgreSQL)", level: 88 },
        { name: "ELB / ALB / NLB & CloudWatch", level: 90 }
      ]
    },
    {
      title: "DevOps & CI/CD",
      skills: [
        { name: "Docker & Containerization", level: 92 },
        { name: "Kubernetes Orchestration", level: 88 },
        { name: "Jenkins & GitHub Actions", level: 90 },
        { name: "Ansible Configuration", level: 85 },
        { name: "Infrastructure as Code (Terraform / CloudFormation)", level: 85 }
      ]
    },
    {
      title: "OS & Scripting",
      skills: [
        { name: "Linux (Ubuntu / RedHat)", level: 95 },
        { name: "Python Automation (boto3)", level: 88 },
        { name: "Bash / Shell Scripting", level: 92 },
        { name: "YAML / JSON Configurations", level: 95 },
        { name: "Windows Server Administration", level: 80 }
      ]
    },
    {
      title: "Networking & Security",
      skills: [
        { name: "VPC Subnets & Routing Tables", level: 95 },
        { name: "Security Groups & NACLs", level: 92 },
        { name: "SSL/TLS & AWS ACM", level: 90 },
        { name: "IAM Policies, Roles & SSM", level: 92 }
      ]
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "MySQL", level: 88 },
        { name: "PostgreSQL", level: 85 },
        { name: "AWS RDS Management", level: 90 },
        { name: "AWS S3 Bucket Policies", level: 92 }
      ]
    },
    {
      title: "Version Control & Collaboration",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Linux CLI Tools", level: 95 },
        { name: "VS Code & Postman", level: 90 }
      ]
    }
  ]
};

export const projects = [
  {
    id: "aws-3tier",
    number: "01",
    badge: "🚀 AWS Solutions Architect Project",
    title: "3-Tier Web Application on AWS",
    description:
      "Architected and deployed a highly available, fault-tolerant 3-tier web architecture on AWS using Terraform (IaC). Provisioned a custom VPC with public/private subnets across multiple Availability Zones, Internet/NAT Gateways, Security Groups, ALB, Auto Scaling Groups, RDS MySQL, S3, and CloudFront CDN.",
    architectureFlow: [
      "Terraform (IaC)",
      "AWS Custom VPC",
      "Application Load Balancer (ALB)",
      "Public & Private Subnets",
      "Auto Scaling Group EC2",
      "RDS MySQL + S3 & CloudFront CDN"
    ],
    techTags: [
      "Terraform",
      "AWS VPC",
      "EC2",
      "Node.js",
      "Nginx",
      "ALB",
      "Auto Scaling",
      "RDS MySQL",
      "S3",
      "CloudFront",
      "Route 53",
      "ACM",
      "SSM"
    ],
    architectureImage: "../assets/projects/Project1-Architecture.png",
    links: {
      github: "https://github.com/dev0malaya/aws-3tier-terraform-project",
      demo: "https://github.com/dev0malaya/aws-3tier-terraform-project",
    },
    isFlagship: true,
  },
  {
    id: "cicd-automation",
    number: "02",
    badge: "⚡ CI/CD Pipeline & CodeDeploy",
    title: "CI/CD Pipeline with Jenkins & AWS CodeDeploy",
    description:
      "Built an end-to-end automated Continuous Integration and Continuous Deployment pipeline using Jenkins and AWS CodeDeploy. Orchestrated automated code checkout from GitHub, build validation, SonarQube quality gate analysis, Docker ECR push, and automated blue/green or rolling deployments to EC2 target groups behind Application Load Balancers with CloudWatch monitoring.",
    architectureFlow: [
      "GitHub Webhook",
      "Jenkins CI Server",
      "SonarQube Quality Gate",
      "Docker ECR Registry",
      "AWS CodeDeploy Agent",
      "EC2 Auto Scaling Target Groups"
    ],
    techTags: [
      "Jenkins",
      "AWS CodeDeploy",
      "SonarQube",
      "Docker ECR",
      "GitHub Actions",
      "AWS EC2",
      "S3",
      "AWS ALB",
      "Bash Scripting",
      "CloudWatch"
    ],
    architectureImage: "../assets/projects/Project3-Architecture.png",
    links: {
      github: "https://github.com/dev0malaya/jenkins-aws-codedeploy-pipeline",
      demo: "https://github.com/dev0malaya/jenkins-aws-codedeploy-pipeline",
    },
    isFlagship: false,
  },
  {
    id: "kubernetes-fullstack",
    number: "03",
    badge: "☸️ AWS EKS Microservices",
    title: "Kubernetes Microservices Deployment on AWS EKS",
    description:
      "Containerized and deployed scalable microservices applications onto Amazon Elastic Kubernetes Service (AWS EKS). Configured Route 53 DNS routing, NGINX Ingress Controller, AWS Network Load Balancer (NLB), ACM SSL certificate automation, 6 core microservices deployments, Horizontal Pod Autoscaling (HPA), and a Prometheus & Grafana monitoring stack.",
    architectureFlow: [
      "Route 53 & ACM SSL",
      "NGINX Ingress Controller",
      "AWS EKS Kubernetes Cluster",
      "6 Microservices Deployments",
      "Horizontal Pod Autoscaler (HPA)",
      "Prometheus & Grafana Stack"
    ],
    techTags: [
      "AWS EKS",
      "Kubernetes",
      "Docker",
      "NGINX Ingress",
      "AWS NLB",
      "Prometheus",
      "Grafana",
      "Route 53",
      "ACM",
      "HPA"
    ],
    architectureImage: "../assets/projects/Project2-Architecture.png",
    links: {
      github: "https://github.com/dev0malaya/aws-eks-microservices-deployment",
      demo: "https://github.com/dev0malaya/aws-eks-microservices-deployment",
    },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [
    {
      name: "AWS Solutions Architect Level Architecture",
      issuer: "Amazon Web Services (Hands-on)",
      icon: "☁️",
    },
    {
      name: "Kubernetes & Container Orchestration",
      issuer: "Cloud Native & Docker",
      icon: "☸️",
    },
    {
      name: "DevOps & CI/CD Pipeline Automation",
      issuer: "Jenkins & GitHub Actions",
      icon: "⚡",
    },
    {
      name: "Linux Systems Administration & Scripting",
      issuer: "Ubuntu / RedHat Enterprise",
      icon: "🐧",
    },
    {
      name: "Python Cloud Automation (boto3)",
      issuer: "AWS Automation & Python",
      icon: "🐍",
    },
    {
      name: "Master of Computer Applications (MCA)",
      issuer: "KIIT Deemed to be University",
      icon: "🎓",
    },
  ],
  viewAllUrl: "https://github.com/dev0malaya",
};

export const leadershipList = [
  {
    title: "AWS 3-Tier Highly Available Cloud Architecture",
    description: "Designed multi-AZ VPC, Application Load Balancers, Auto Scaling Groups, private RDS MySQL failovers, and CloudFront edge delivery.",
    role: "Cloud Architect Lead",
    badge: "AWS Infrastructure"
  },
  {
    title: "Full-Stack Kubernetes & Ingress Deployment",
    description: "Orchestrated Docker containers, NGINX Ingress controllers, AWS NLB routing, and HTTPS SSL certificate setup via ACM and Route 53.",
    role: "DevOps Engineer",
    badge: "Kubernetes"
  },
  {
    title: "Python Automation & Linux Systems Administration",
    description: "Built automated Python boto3 scripts and Bash automation for cloud resource provisioning, system monitoring, and backup scheduling.",
    role: "Systems Automation",
    badge: "Linux & Python"
  },
  {
    title: "Master of Computer Applications (MCA) — KIIT University",
    description: "Specialized in Cloud Infrastructure, Distributed Systems, Database Management Systems, and DevOps Methodologies (2023 - 2025).",
    role: "MCA Post-Graduate",
    badge: "Education"
  }
];

export const softSkillsList = [
  { name: "Cloud System Architecture", icon: "☁️", desc: "Designing scalable, fault-tolerant, and cost-effective multi-AZ AWS environments." },
  { name: "Problem Solving & Troubleshooting", icon: "🧩", desc: "Diagnosing complex pod networking, DNS routing, ingress controllers, and DB connectivity." },
  { name: "Automation Mindset", icon: "⚡", desc: "Eliminating manual tasks with Python boto3, Bash scripts, Ansible, and Terraform IaC." },
  { name: "Team Collaboration", icon: "🤝", desc: "Working across engineering teams to streamline deployment pipelines and infrastructure." },
  { name: "Quick Learner", icon: "🚀", desc: "Rapidly adopting new cloud native technologies, service updates, and DevOps tooling." },
  { name: "Technical Communication", icon: "💬", desc: "Documenting architecture diagrams, security policies, and deployment workflows clearly." }
];

export const education = {
  degree: "Master of Computer Applications (MCA)",
  institution: "KIIT Deemed to be University",
  cgpa: "6.9 / 10",
  graduation: "2023 – 2025 | Bhubaneswar, Odisha",
  undergrad: "B.Sc. — Utkal University (2020 – 2023) | CGPA: 9.12",
  twelfth: "Class 12 (Higher Secondary) — Jupiter Science H S School (63.16%)",
  tenth: "Class 10 (BSE) — Belabhumi High School (90%)",
};

export const footerContent = {
  taglines: [
    "Cloud & DevOps Engineering",
    "AWS · Docker · Kubernetes · Linux",
    "CI/CD Pipelines · Automation · IaC",
  ],
  credential: "MCA · KIIT University",
  copyright: `© ${new Date().getFullYear()} Malaya Ranjan Pradhan | Built with React & Tailwind CSS`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
