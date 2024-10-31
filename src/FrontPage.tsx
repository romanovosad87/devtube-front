import React from 'react';

const FrontPage: React.FC = () => {
    const handleLogin = () => {
        // Placeholder for your login logic
        // Connect this to your AWS Cognito, Spring Security backend, or any other auth provider
        console.log("Login button clicked");
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
            <h1>Welcome to Your Application</h1>
            <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                Login
            </button>
        </div>
    );
};

export default FrontPage;