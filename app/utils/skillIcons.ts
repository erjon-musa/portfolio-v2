const skillIconMap: Record<string, string> = {
  // Languages
  'JavaScript': '/techstack/javascript.svg',
  'C#': '/techstack/csharp.svg',
  'Python': '/techstack/python.svg',
  'Kotlin': '/techstack/kotlin.svg',
  'C++': '/techstack/cpp.svg',
  'TypeScript': '/techstack/typescript.svg',
  'Java': '/techstack/java.svg',
  'C': '/techstack/c.svg',
  'SQL': '/techstack/sql.svg',

  // AI/ML frameworks
  'PyTorch': '/techstack/pytorch.svg',
  'TensorFlow': '/techstack/tensorflow.svg',
  'TensorFlow Lite': '/techstack/tensorflow.svg',
  'NumPy': '/techstack/numpy.svg',
  'Pandas': '/techstack/pandas.svg',
  'scikit-learn': '/techstack/scikit-learn.svg',
  'Matplotlib': '/techstack/matplotlib.svg',
  'Jupyter': '/techstack/jupyter.svg',

  // Web
  'React': '/techstack/react.svg',
  'HTML5': '/techstack/html5.svg',
  'CSS3': '/techstack/css3.svg',
  'HTML/CSS': '/techstack/html5.svg',

  // Tools & platforms
  'Figma': '/techstack/figma.svg',
  'Power Platform': '/techstack/powerplatform.svg',
  'Power Pages': '/techstack/PowerPages.svg',
  'Dynamics 365': '/techstack/icons8-microsoft-dynamics-365-96.png',
  'Azure DevOps': '/techstack/azure-devops.svg',
  'Git': '/techstack/git.svg',
  'Docker': '/techstack/docker.svg',
  'Linux': '/techstack/linux.svg',
  'Arduino': '/techstack/arduino.svg',
  'VS Code': '/techstack/vscode.svg',
  'Android Studio': '/techstack/androidstudio.svg',
}

export function getSkillIcon(skill: string): string | null {
  return skillIconMap[skill] ?? null
}
