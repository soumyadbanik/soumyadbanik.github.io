export const resumeData = {
    personalInfo: {
        name: "Soumyadeep Banik",
        title: "Computer Vision Researcher & Data Scientist",
        email: "soumya.d.banik@gmail.com",
        github: "https://github.com/soumyadbanik",
        linkedin: "https://www.linkedin.com/in/soumya-d-banik",
        phone: "+91 8478860607",
        location: "Mumbai, Maharashtra, India",
        about: "Data Scientist with 3+ years of experience working in Computer Vision & Deep Learning. Actively looking for a role in AI, Data Science, or Computer Vision to contribute effectively into real-world business problems and solutions.",
        interests: ["Photography", "Graphics Design", "Illustration", "Music"]
    },
    experience: [
        {
            company: "Quidich Innovation Labs",
            role: "Computer Vision Engineer",
            period: "April 2024 – Present",
            location: "Mumbai",
            description: "Building state-of-the-art AI solutions for sports broadcasting.",
            highlights: [
                "Developed and deployed real-time automated no-ball and run-out detection systems (DRS) using high-speed cameras (100–120 fps).",
                "Designed ground perspective tracking algorithms for real-time (50 fps) virtual graphics overlays (StiQy).",
                "Reconstructed 3D player poses (HyperView) with 90% accuracy using multi-camera setups for integration into Unreal Engine/Blender."
            ]
        },
        {
            company: "HappyMonk.ai",
            role: "Junior Data Scientist",
            period: "December 2022 – January 2024",
            location: "Bangalore",
            description: "Building edge-centric vision models for video surveillance.",
            highlights: [
                "Led Human Activity Recognition project using SLOWFAST spatio-temporal networks.",
                "Implemented space utilization algorithms for inventory areas.",
                "Collaborated on object detection models (YOLO v5, v8) for face detection, counting, emotion recognition, and fire-smoke detection deployed on edge devices."
            ]
        },
        {
            company: "Indian Statistical Institute",
            role: "Project Linked Junior Research Fellow",
            period: "October 2021 – November 2022",
            location: "Kolkata",
            description: "Developing a distributed Cognitive System for Healthcare.",
            highlights: [
                "Recognized abnormal human activities (coughing, falling) from RGB video and skeleton data.",
                "Focused on Graph representation learning for Human Skeletons."
            ]
        }
    ],
    education: [
        {
            degree: "M.Sc in Computer Science",
            institution: "Ramakrishna Mission Vivekananda Educational and Research Institute",
            period: "2019 – 2021",
            location: "Belur, Howrah"
        },
        {
            degree: "B.Sc(Hons) in Computer Science",
            institution: "Ramakrishna Mission Residential College (Autonomous)",
            period: "2016 – 2019",
            location: "Narendrapur, Kolkata"
        }
    ],
    projects: [
        {
            title: "SpecsKart - Virtual Try-on Platform",
            period: "January 2024 - Present",
            description: "Virtual specs try-on platform and recommendation system.",
            tech: ["Python3", "MediaPipe", "OpenCV", "Streamlit", "AWS Lambda"],
            link: null,
            details: ["Projecting specs onto user's face using facial keypoints.", "Recommendation system based on past choices."]
        },
        {
            title: "Social Distancing in Aerial Videos",
            period: "May 2021 - July 2021",
            description: "Web app for monitoring social distancing violations in video.",
            tech: ["Deep SORT", "YOLO-V4", "Flask", "Tensorflow"],
            link: "https://github.com/soumyadbanik/Safe-Distance-Monitoring-APP",
            details: ["Multiple object tracking on Stanford Drone Dataset."]
        },
        {
            title: "Quadtree Image Saliency Mapping",
            period: "Oct 2020 - Dec 2020",
            description: "Proposed Quadtree-based approach for salient features to reduce CNN complexity.",
            tech: ["Pytorch", "Python3"],
            link: "https://github.com/soumyadbanik/Quadtree-Image-saliency-mapping",
            details: ["Reduced complexity from O(M²N²C) to O(M²NC)."]
        },
        {
            title: "Video Steganography",
            period: "Mar 2019 - May 2019",
            description: "LSB Technique by a Unique Frame Selection Method.",
            tech: ["OpenCV", "Numpy", "Pandas"],
            link: "https://github.com/soumyadbanik/video_steganography",
            details: ["Unique frame selection using Linear Congruential Generator."]
        }
    ],
    skills: {
        interests: ["Pose Estimation", "Depth Estimation", "3D Computer Vision", "Human Activity Recognition", "Object Tracking", "Semantic Segmentation"],
        tools: ["Machine Learning", "Deep Learning (DNN, RNN, LSTM)", "Graph Neural Networks", "Data Structures"],
        frameworks: ["Pytorch", "Ultralytics", "Flask", "AWS Lambda", "Nvidia-Deep Stream", "CUDA"],
        languages: ["Python", "C", "HTML/CSS", "SQL"],
        technical: ["Git", "Linux", "Docker", "OpenCV", "LaTeX"]
    }
};
