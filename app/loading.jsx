export default function Loading() {
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#12110f',
                flexDirection: 'column',
                gap: '24px',
            }}
        >
            <div
                style={{
                    fontFamily: 'var(--font-playfair), Georgia, serif',
                    fontSize: '2rem',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #9dbc9f, #c8a96e, #c17a5a)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'shimmer 2s linear infinite',
                    backgroundSize: '200% auto',
                }}
            >
                SC
            </div>
            <div
                style={{
                    width: '40px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #7a9e7e, transparent)',
                    animation: 'shimmer 1.5s linear infinite',
                    backgroundSize: '200% auto',
                }}
            />
        </div>
    );
}
