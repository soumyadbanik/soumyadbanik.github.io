export const resumeData = {
    personalInfo: {
        name: "Soumyadeep Banik",
        title: "Computer Vision Engineer",
        email: "soumya.d.banik@gmail.com",
        github: "https://github.com/soumyadbanik",
        linkedin: "https://www.linkedin.com/in/soumya-d-banik",
        phone: "+91 8478860607",
        location: "Mumbai, Maharashtra, India",
        about: "I develop computer vision systems at the intersection of geometry and learning. My industry work has focused on real-time tracking, 3D reconstruction, and activity recognition in challenging scenarios. I am transitioning toward PhD research in Computer Vision, aiming to advance foundational methods in multi-view 3D understanding and human motion analysis.",
        interests: ["Photography", "Graphics Design", "Illustration", "Music"]
    },
    researchStatement: {
        intro: "My research interests lie at the intersection of geometric computer vision and deep learning. Through applied work in sports analytics and surveillance systems, I have developed strong foundations in spatial reasoning and temporal modeling.",
        areas: [
            "Multi-view Geometry & 3D Reconstruction",
            "Human Pose Estimation & Motion Analysis",
            "Real-time Video Understanding & Tracking",
            "Edge-optimized Deep Learning Systems"
        ],
        narrative: "I am particularly drawn to problems involving spatial reasoning, temporal modeling, and the integration of geometric priors into learning-based systems. My goal is to contribute to methods that enable robust 3D understanding from visual data, with applications in human-computer interaction, sports analytics, and embodied AI."
    },
    researchExperience: [
        {
            institution: "Indian Statistical Institute",
            location: "Kolkata, India",
            roles: [
                {
                    role: "Project-Linked Junior Research Fellow",
                    period: "October 2021 – November 2022",
                    project: "Distributed Cognitive System for Healthcare Monitoring",
                    description: "Contributed to a distributed cognitive system for healthcare monitoring, focusing on vision-based activity recognition from RGB and skeletal data.",
                    contributions: [
                        "Investigated graph-based representations for human skeleton data to recognize abnormal activities (falls, coughing) in healthcare settings",
                        "Developed activity recognition pipelines using spatio-temporal modeling on RGB video and pose sequences",
                        "Explored graph neural network architectures for skeleton-based action recognition, focusing on temporal dynamics and spatial relationships",
                        "Collaborated with interdisciplinary team on system design and evaluation protocols"
                    ]
                },
                {
                    role: "Teaching Assistant",
                    period: "January 2022 – October 2022",
                    contributions: [
                        "Machine Learning I",
                    ]
                },
                {
                    role: "Teaching Assistant",
                    period: "January 2022 – April 2022",
                    contributions: [
                        "M.Tech CS, Advance Image Processing",
                    ],
                    link: "https://docs.google.com/presentation/d/1T7tK6g_ol-zjFhTIGDfF5DXI_b8DviVseTPoGZGOXdw/edit?usp=sharing"
                }
            ]
        }
    ],
    industryExperience: [
        {
            company: "AI LENS",
            roles: [
                {
                    role: "Computer Vision Developer(Freelance)",
                    period: "Jan 2024 – Present",
                    location: "Remote",
                    description: "Building a virtual specs try-on platform and recommendation system ( In collaboration with [AI LENS](https://www.ailens.ai/) )",
                    contributions: [
                        " Implemented the algorithm to project the chosen specs onto the user’s face using facial keypoint features, accommodating various facial orientations."
                    ]
                }
            ]
        },
        {
            company: "Quidich Innovation Labs",
            roles: [
                {
                    role: "Computer Vision Engineer",
                    period: "April 2024 – Present",
                    location: "Mumbai, India",
                    description: "Developing real-time computer vision systems for sports broadcasting, including decision review systems and 3D player reconstruction.",
                    contributions: [
                        "Responsible for automated Decision Review Systems(DRS) for cricket (no-ball, run-out detection) using high-speed cameras (100-120 fps), addressing challenges in motion blur and temporal precision",
                        "Developed ground-plane tracking algorithms for real-time virtual graphics overlay (50 fps), involving homography estimation and camera calibration",
                        "Built multi-camera 3D pose reconstruction pipeline achieving 90% accuracy, integrating temporal consistency constraints and geometric validation for Unreal Engine integration",
                        "Optimized inference pipelines for real-time performance under strict latency constraints in live broadcast scenarios"
                    ]
                }
            ]
        },
        {
            company: "HappyMonk.ai",
            roles: [
                {
                    role: "Junior Data Scientist",
                    period: "December 2022 – January 2024",
                    location: "Bangalore, India",
                    description: "Developed edge-deployed computer vision models for video surveillance and spatial analytics applications.",
                    contributions: [
                        "Led development of human activity recognition system using SlowFast networks, investigating spatio-temporal feature learning for action classification",
                        "Designed space utilization algorithms for inventory monitoring, formulating the problem as occupancy estimation from overhead video",
                        "Implemented and optimized object detection models (YOLO v5, v8) for face detection, crowd counting, and fire-smoke detection on edge devices",
                        "Addressed deployment constraints including model compression, quantization, and inference optimization for resource-limited hardware"
                    ]
                }
            ]
        }
    ],
    education: [
        {
            degree: "M.Sc. in Computer Science",
            institution: "Ramakrishna Mission Vivekananda Educational and Research Institute",
            period: "2019 – 2021",
            location: "Belur, Howrah, India",
            coursework: ["Advanced Algorithms", "Machine Learning", "Computer Vision", "Deep Learning", "Pattern Recognition", "Digital Image Processing"]
        },
        {
            degree: "B.Sc. (Hons) in Computer Science",
            institution: "Ramakrishna Mission Residential College (Autonomous)",
            period: "2016 – 2019",
            location: "Narendrapur, Kolkata, India",
            coursework: []
        }
    ],
    projects: [
        {
            title: "Virtual Eyewear Try-on System",
            period: "January 2024 - Present",
            description: "Developed a real-time virtual eyewear try-on system using facial landmark detection and geometric transformation. Implementing face shape analysis for personalized recommendations. Investigating challenges in perspective-correct rendering and occlusion handling.",
            tech: ["Python", "MediaPipe", "OpenCV", "Streamlit", "AWS Lambda"],
            links: [
                {
                    url: "https://www.spectsgenie.com/product/3289/2",
                    type: "website",
                    label: "Try it"
                }
            ],
            researchAspects: ["Facial geometry estimation", "Real-time rendering", "Recommendation systems"],
            // Add your image/gif: "/images/projects/eyewear-tryon.gif"
            thumbnail: "/images/projects/spectsgenie.png"
        },
        {
            title: "Social Distancing Monitoring in Aerial Videos",
            period: "May 2021 - July 2021",
            description: "Designed a multi-object tracking system for monitoring social distancing compliance in drone footage. Addressed challenges in scale variation, occlusion, and perspective distortion in aerial views. Evaluated on Stanford Drone Dataset.",
            tech: ["Deep SORT", "YOLO-V4", "Flask", "TensorFlow"],
            links: [
                {
                    url: "https://github.com/soumyadbanik/Safe-Distance-Monitoring-APP",
                    type: "github"
                }
            ],
            researchAspects: ["Multi-object tracking", "Aerial view analysis", "Distance estimation"],
            // Add your image/gif: "/images/projects/social-distancing.gif"
            thumbnail: "/images/projects/hyang_social_short.webm"
        },
        {
            title: "Quadtree-based Spatial Attention for CNNs",
            period: "October 2020 - December 2020",
            description: "Proposed a quadtree-based spatial attention mechanism to reduce computational complexity in CNNs. Achieved complexity reduction from O(M²N²C) to O(M²NC) while preserving salient region focus. Explored trade-offs between efficiency and accuracy.",
            tech: ["PyTorch", "Python"],
            links: [
                {
                    url: "https://github.com/soumyadbanik/Quadtree-Image-saliency-mapping",
                    type: "github"
                }
            ],
            researchAspects: ["Spatial attention", "Computational efficiency", "Saliency detection"],
            // Add your image/gif: "/images/projects/quadtree-attention.png"
            thumbnail: "/images/projects/quadtree.png"
        },
        {
            title: "Video Steganography with Frame Selection",
            period: "March 2019 - May 2019",
            description: "Implemented LSB-based video steganography with a novel frame selection method using Linear Congruential Generators. Investigated imperceptibility and capacity trade-offs in video-based information hiding.",
            tech: ["OpenCV", "NumPy", "Pandas"],
            links: [
                {
                    url: "https://github.com/soumyadbanik/video_steganography",
                    type: "github"
                }
            ],
            researchAspects: ["Information hiding", "Frame selection algorithms", "Security analysis"],
            // Add your image/gif: "/images/projects/steganography.png"
            thumbnail: "/images/projects/stego.png"
        }
    ],
    technicalReports: [
        {
            title: "Human Skeleton Based Activity Recognition/Prediction",
            status: "Project",
            period: "October 2021 - September 2022",
            description: "A survey on human skeleton-based activity recognition and prediction, focusing on methods that progress from traditional computer vision to advanced techniques like Two-Stream Networks, Optical Flow, and Spatial Temporal Graph Convolutional Neural Networks (ST-GCNNs) for monitoring abnormalities in elderly people using video sensors.",
            links: [
                {
                    label: "Slides",
                    url: "https://docs.google.com/presentation/d/1-o_CdqgmmVh1_5lMaCsalqWUCwjXlP--ABLxiMIP2wg/edit?usp=sharing"
                }
            ]
        },
        {
            title: "Surveying Social Distancing in Aerial Drone Videos",
            status: "Thesis Project",
            period: "May 2021 - July 2021",
            description: "A comparative study between traditional MOT methods and SOTA object detection and tracking methods (e.g., YOLOv4 and Deep SORT) for social distancing monitoring in aerial drone videos.",
            links: [
                {
                    label: "Thesis Report",
                    url: "https://drive.google.com/file/d/1T6KgwVS5qZ_5baK53xH7IHpefNW-3cVM/view?usp=sharing"
                },
                {
                    label: "Slides",
                    url: "https://docs.google.com/presentation/d/1IGtcHEopTI3RaLDRwxQGYA-XjanRLYoY4K2u6hszFt8/edit?usp=sharing"
                }
            ]
        },
        {
            title: "Video Steganography using LSB Technique by Unique Frame Selection Method to Increase Security",
            status: "Thesis",
            period: "March 2019 - May 2019",
            description: "Proposed an approach for LSB-based video steganography with a novel frame selection method using Linear Congruential Generators to enhance security and imperceptibility.",
            links: [
                {
                    label: "Thesis Report",
                    url: "https://docs.google.com/document/d/16bjE0pG6jvcLOxRWXuXN9kMBaE1qGPSr/edit?usp=sharing&ouid=110193751286312594531&rtpof=true&sd=true"
                }
            ]
        }
    ],
    methodsAndTools: {
        researchAreas: [
            "3D Computer Vision & Multi-view Geometry",
            "Human Pose Estimation & Motion Analysis",
            "Object Tracking & Temporal Modeling",
            "Semantic Segmentation & Scene Understanding"
        ],
        methods: [
            "Deep Learning (CNNs, RNNs, Transformers)",
            "Graph Neural Networks",
            "Spatio-temporal Modeling",
            "Geometric Computer Vision",
            "Camera Calibration & 3D Reconstruction"
        ],
        frameworks: [
            "PyTorch",
            "TensorFlow",
            "Ultralytics",
            "OpenCV",
            "MediaPipe",
            "NVIDIA DeepStream",
            "CUDA"
        ],
        tools: [
            "Docker",
            "Git",
            "Linux",
            "LaTeX"
        ],
        programming: [
            "Python (primary)",
            "C",
            "SQL",
            "HTML/CSS"
        ]
    }
};
