export default function Loading() {
    return (
        <div className="fixed inset-0 bg-[#0a0e27] flex items-center justify-center z-50">
            <div className="relative">
                {/* Outer ring */}
                <div className="w-24 h-24 border-4 border-[#1e293b] rounded-full"></div>

                {/* Spinning ring */}
                <div className="absolute top-0 left-0 w-24 h-24 border-4 border-transparent border-t-[#00f0ff] rounded-full animate-spin"></div>

                {/* Inner pulsing dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#ff006e] rounded-full animate-pulse"></div>
            </div>

            {/* Loading text */}
            <p className="absolute mt-32 text-[#00f0ff] font-mono tracking-widest animate-pulse">
                LOADING...
            </p>
        </div>
    );
}
