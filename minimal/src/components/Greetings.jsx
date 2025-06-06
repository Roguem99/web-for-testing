import { useState } from 'preact/hooks';

export default function Greeting({messages}) {
    const randomMesage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div>
            <h3 data-testid="greeting">{greeting}! Thank you for visiting!</h3>
            <button data-testid="newGreetingBtn" onClick={() => setGreeting(randomMesage())}>
                New Greeting
            </button>
        </div>
    );
}