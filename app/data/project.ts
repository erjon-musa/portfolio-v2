// Type definition for project details
export type ProjectDetail = {
  id: number
  title: string
  company: string
  overview: string
  mainImage: string
  companyLogo?: string
  hideHeroImage?: boolean
  link: string
  github?: string
  features: {
    title: string
    description: string
    image: string | string[]
    customComponent?: string
  }[]
  techStack: {
    category: string
    items: string[]
  }[]
  achievements: {
    metric: string
    value: string
    change: number
  }[]
}

export const PROJECT_DATA: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: "UX/UI Design Team Lead & Frontend Developer",
    company: "Government of Ontario",
    overview: "Architected and developed the TRAC Portal using Microsoft Power Platform and Dynamics 365, migrating legacy PDF workflows to a scalable, secure, and accessible web application. Led a cross-functional team of 3 co-op students, managing project milestones and delivering features within an Agile framework.",
    mainImage: "/project/ontario/ontario.png",
    companyLogo: "/companyicon/ontario/ontario_nameandlogo.png",
    hideHeroImage: true,
    link: "",
    features: [
      {
        title: "Portal Architecture",
        description: "Migrated legacy PDF workflows to a scalable, secure Power Pages portal with JavaScript, C#, HTML/CSS, and Ontario Design Standards (ODS) compliance.",
        image: ""
      },
      {
        title: "CI/CD & DevOps",
        description: "Developed features from user stories utilizing Azure DevOps for source control, work-item tracking, and continuous integration/delivery.",
        image: ""
      },
      {
        title: "Team Leadership",
        description: "Directed a cross-functional team of 3 co-op students, managing project milestones and delegating tasks for the TRAC Portal using Agile methodology.",
        image: ""
      },
    ],
    techStack: [
      { category: "Frontend", items: ["JavaScript", "C#", "HTML/CSS", "Power Pages"] },
      { category: "Platform", items: ["Power Platform", "Dynamics 365"] },
      { category: "Tools", items: ["Figma", "Azure DevOps"] },
    ],
    achievements: [
      { metric: "Team Size Led", value: "3 Co-ops", change: 3 },
      { metric: "Framework", value: "Agile/Scrum", change: 100 },
      { metric: "Standards", value: "ODS Compliant", change: 100 },
    ],
  },
  101: {
    id: 101,
    title: "MyEyes AI Glasses",
    company: "Queen's University — Capstone Project",
    overview: "Award-winning wearable assistive system (3rd Place, Capstone Competition) that helps visually impaired individuals navigate their surroundings using real-time AI-powered object detection, OCR text reading, and audio feedback. The system pairs ESP32-S3 smart glasses with an Android companion app to deliver spoken alerts about nearby vehicles, crosswalks, pedestrian signals, street signs, and currency.",
    mainImage: "/project/myeyes/myeyes.png",
    link: "https://github.com/erjon-musa/myeyes",
    github: "https://github.com/erjon-musa/myeyes",
    features: [
      {
        title: "Currency Recognition",
        description: "Detects and verifies Canadian banknotes ($5–$100) using YOLOv8n for initial detection and PaddleOCR for denomination verification, enabling visually impaired users to independently identify money.",
        image: "/project/myeyes/detection_currency.jpg"
      },
      {
        title: "Crosswalk Safety",
        description: "Combines crosswalk detection with pedestrian light color analysis (green, red, neutral) to deliver real-time safe/unsafe crossing alerts via spoken audio feedback.",
        image: "/project/myeyes/detection_crosswalk.jpg"
      },
      {
        title: "Text Reading",
        description: "Detects important text regions in the environment (street signs, labels, notices) and reads them aloud using PaddleOCR and the on-device text-to-speech engine.",
        image: "/project/myeyes/detection_text.jpg"
      },
      {
        title: "System Architecture",
        description: "The ESP32-S3 glasses create a WiFi access point and stream MJPEG video to the Android companion app, which runs all AI inference on-device. Audio feedback is synthesized via TTS and streamed back as WAV to the glasses' I2S speakers.",
        image: "",
        customComponent: "myeyes-architecture"
      },
      {
        title: "Detection Classes",
        description: "Our YOLOv8n model was trained on 12 custom classes spanning Canadian currency, traffic safety elements, and text. Each detection triggers a specific action — from OCR verification of banknotes to crosswalk safety logic.",
        image: "",
        customComponent: "myeyes-detection-classes"
      },
    ],
    techStack: [
      { category: "AI/ML", items: ["YOLOv8n", "TensorFlow Lite", "PaddleOCR"] },
      { category: "Hardware", items: ["ESP32-S3", "OV2640", "I2S Audio", "WiFi SoftAP"] },
      { category: "Mobile", items: ["Kotlin", "Android Studio"] },
      { category: "Languages", items: ["Python", "Kotlin", "C++"] },
    ],
    achievements: [
      { metric: "Competition", value: "3rd Place", change: 3 },
      { metric: "Detection Classes", value: "12", change: 12 },
      { metric: "Cloud Dependency", value: "None", change: 100 },
    ],
  },
  102: {
    id: 102,
    title: "CLIP Fine-Tuning on MS COCO",
    company: "Queen's University — ELEC 475",
    overview: "A vision-language model that maps images and text into a shared embedding space. By pairing a trainable ResNet50 image encoder with a frozen OpenAI CLIP text encoder, I trained the system end-to-end on roughly 400,000 image-caption pairs. Now, you can type any natural language query and the model instantly retrieves the most visually relevant images without needing any task-specific fine-tuning.",
    mainImage: "/project/clip/clip.png",
    hideHeroImage: true,
    link: "https://github.com/erjon-musa/clip-finetuning-coco",
    github: "https://github.com/erjon-musa/clip-finetuning-coco",
    features: [
      {
        title: "Architecture & Training Pipeline",
        description: "Dual-encoder design: a ResNet50 image encoder with a learned projection head (2048 → 512 dimensions) is trained alongside a frozen OpenAI CLIP ViT-B/32 text encoder. Both encoders map their inputs into a shared embedding space where matching image-caption pairs are pulled together and non-matching pairs are pushed apart via InfoNCE contrastive loss with learnable temperature scaling.",
        image: "",
        customComponent: "clip-architecture"
      },
      {
        title: "Contrastive Learning Results",
        description: "The cosine similarity matrix below shows alignment between 50 image-text pairs from the validation set. The strong diagonal pattern confirms that the model has learned meaningful cross-modal alignment — each image embedding is most similar to its corresponding caption embedding. Trained with InfoNCE loss (τ=0.07), cosine annealing LR schedule, and batch size 128.",
        image: "/project/clip/clip_similarity.png"
      },
      {
        title: "Text-to-Image Retrieval: \"a dog catching a frisbee\"",
        description: "When you type a natural language sentence, the model computes its text embedding and immediately pulls the top 5 closest image matches from the validation set. This query proves it can natively understand complex interactions like \"catching\" alongside just classifying objects.",
        image: "/project/clip/clip_retrieval_dog.png"
      },
      {
        title: "Text-to-Image Retrieval: \"a zebra standing in a field\"",
        description: "Here is another retrieval example where the model perfectly identifies and ranks images of zebras in their natural settings. It's a great demonstration of how well the text and vision encoders have learned to understand each other.",
        image: "/project/clip/clip_retrieval_zebra.png"
      },
      {
        title: "Training & Optimization",
        description: "Trained for 10 epochs on the full MS COCO 2014 training set (~400K captions, ~83K images) over ~16.5 hours. Key optimizations: dropout regularization (p=0.5) on the projection head to prevent overfitting, cosine annealing LR scheduler for smooth convergence, gradient clipping, and checkpoint resumption for fault-tolerant long-running training.",
        image: ""
      },
    ],
    techStack: [
      { category: "AI/ML", items: ["PyTorch", "CLIP", "Vision Transformers"] },
      { category: "Data", items: ["MS COCO 2014", "Custom DataLoaders"] },
      { category: "Languages", items: ["Python"] },
    ],
    achievements: [
      { metric: "Best Val Loss", value: "0.862", change: 86 },
      { metric: "Text→Image R@10", value: "11.89%", change: 12 },
      { metric: "Training Time", value: "~16.5 hrs", change: 16 },
    ],
  },
  103: {
    id: 103,
    title: "Semantic Segmentation with Knowledge Distillation",
    company: "Queen's University — ELEC 475",
    overview: "Explores knowledge distillation techniques to train a compact semantic segmentation model (MobileNetV3-ASPP, ~7M parameters) that achieves competitive performance while being significantly smaller than the teacher network (FCN-ResNet50, ~40M parameters). Feature-based KD improves mIoU by +11.42% over the baseline.",
    hideHeroImage: true,
    mainImage: "",
    link: "https://github.com/erjon-musa/semantic-segmentation-knowledge-distillation",
    github: "https://github.com/erjon-musa/semantic-segmentation-knowledge-distillation",
    features: [
      {
        title: "MobileNetV3-ASPP Architecture",
        description: "Compact student model with MobileNetV3-Small backbone, ASPP module for multi-scale context (rates: 6, 12, 18), skip connections, and an auxiliary classifier to retain mid-level features. The complete architecture operates with only 6.9M parameters.",
        image: "",
        customComponent: "segmentation-architecture"
      },
      {
        title: "Knowledge Distillation Pipeline & Results",
        description: "I built both response-based and feature-based distillation pipelines to see which strategy transfers knowledge better. The feature-based approach worked incredibly well, scoring a 56.99% mIoU. That's a massive 11.42% accuracy boost over the baseline, all while keeping the student model just as small and fast as before.",
        image: "",
        customComponent: "segmentation-results"
      }
    ],
    techStack: [
      { category: "AI/ML", items: ["PyTorch", "MobileNetV3", "ASPP"] },
      { category: "Techniques", items: ["Knowledge Distillation", "Semantic Segmentation"] },
      { category: "Data", items: ["PASCAL VOC 2012"] },
    ],
    achievements: [
      { metric: "mIoU (Feature KD)", value: "56.99%", change: 57 },
      { metric: "Improvement", value: "+11.42%", change: 11 },
      { metric: "Parameters", value: "6.9M", change: 7 },
    ],
  },
  104: {
    id: 104,
    title: "SnoutNet: Pet Nose Localization",
    company: "Queen's University — ELEC 475",
    overview: "A deep learning project focused on finding exactly where a pet's nose is in a photo using CNN keypoint regression. I built and compared three different architectures to tackle this: a custom model built from scratch, along with AlexNet and VGG16. VGG16 completely dominated the benchmark, nailing the nose location with a tiny average error of just 4.46 pixels.",
    mainImage: "/project/snoutnet/snoutnethero.jpg",
    hideHeroImage: true,
    link: "https://github.com/erjon-musa/snoutnet-nose-localization",
    github: "https://github.com/erjon-musa/snoutnet-nose-localization",
    features: [
      {
        title: "Evaluated Architectures",
        description: "Designed a lightweight custom CNN from scratch and compared it against heavier pre-trained models (AlexNet and VGG16) fine-tuned for facial keypoint regression.",
        image: "",
        customComponent: "snoutnet-architecture"
      },
      {
        title: "Benchmark Results & Error Rates",
        description: "Evaluated on the Oxford-IIIT Pet dataset. The massive VGG16 backbone achieved the lowest mean localization error, successfully detecting pet noses across various breeds and scales.",
        image: "",
        customComponent: "snoutnet-results"
      },
      {
        title: "Model Output Examples",
        description: "Visualizations of the keypoint predictions. The deep VGG16 transfer learning model proved most resilient to difficult angles and variable lighting.",
        image: ["/project/snoutnet/snoutnet_alexnet_best.png", "/project/snoutnet/snoutnet_best.png"]
      },
      {
        title: "Data Augmentation & Failure Cases",
        description: "Implemented color jitter and horizontal flip augmentation with automatic coordinate transformation for the keypoints. Analyzed failure cases involving extreme lighting, occlusion, and the dataset's inherent center-bias.",
        image: "/project/snoutnet/snoutnet_worst.png"
      },
    ],
    techStack: [
      { category: "AI/ML", items: ["PyTorch", "CNNs", "Transfer Learning"] },
      { category: "Models", items: ["SnoutNet", "AlexNet", "VGG16"] },
      { category: "Data", items: ["Oxford-IIIT Pets"] },
    ],
    achievements: [
      { metric: "Best Error", value: "4.46 px", change: 4 },
      { metric: "Models Compared", value: "3", change: 3 },
      { metric: "Best Model", value: "VGG16", change: 100 },
    ],
  },
}

// Helper function: Get project by ID
export const getProjectById = (id: number): ProjectDetail | undefined => {
  if (!Object.keys(PROJECT_DATA).length) {
    console.warn('PROJECT_DATA is empty');
    return undefined;
  }
  return PROJECT_DATA[id] || Object.values(PROJECT_DATA)[0];
}
