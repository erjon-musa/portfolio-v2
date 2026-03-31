'use client'

export default function MyEyesArchitecture() {
  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col md:flex-row items-stretch gap-4">
        {/* ESP32-S3 Card */}
        <div className="
          flex-1 p-5 rounded-xl
          bg-white/[0.04] border border-white/[0.1]
        ">
          <h4 className="text-sm font-bold text-cyan-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            ESP32-S3 Glasses
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>OV2640 Camera Module</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>MAX98357A I2S Speakers</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>MJPEG Stream <span className="text-gray-500">@:80</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>Audio Receive <span className="text-gray-500">@:81</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>WiFi SoftAP</span>
            </li>
          </ul>
        </div>

        {/* Connection Arrows */}
        <div className="flex flex-col items-center justify-center py-2 md:py-0">
          {/* Video stream arrow (right) */}
          <div className="flex items-center gap-1 mb-2">
            <span className="text-[10px] text-gray-500 hidden md:block">MJPEG</span>
            <div className="w-12 md:w-16 h-[2px] bg-gradient-to-r from-cyan-500/60 to-cyan-400" />
            <svg className="w-3 h-3 text-cyan-400 -ml-1" viewBox="0 0 12 12" fill="currentColor">
              <path d="M2 1l8 5-8 5V1z" />
            </svg>
          </div>
          <span className="text-xs font-medium text-gray-400 px-2 py-1 rounded-full border border-white/[0.08] bg-white/[0.03]">
            WiFi AP
          </span>
          {/* Audio stream arrow (left) */}
          <div className="flex items-center gap-1 mt-2">
            <svg className="w-3 h-3 text-cyan-400 -mr-1 rotate-180" viewBox="0 0 12 12" fill="currentColor">
              <path d="M2 1l8 5-8 5V1z" />
            </svg>
            <div className="w-12 md:w-16 h-[2px] bg-gradient-to-l from-cyan-500/60 to-cyan-400" />
            <span className="text-[10px] text-gray-500 hidden md:block">WAV</span>
          </div>
        </div>

        {/* Android App Card */}
        <div className="
          flex-1 p-5 rounded-xl
          bg-white/[0.04] border border-white/[0.1]
        ">
          <h4 className="text-sm font-bold text-cyan-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Android Companion App
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>YOLOv8n <span className="text-gray-500">(TFLite)</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>PaddleOCR <span className="text-gray-500">(on-device)</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>Text-to-Speech Engine</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>Detection Announcer</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>CameraX <span className="text-gray-500">(live camera mode)</span></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
