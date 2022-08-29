import { Online, Offline } from 'react-detect-offline';

function App() {
    return (
        <div>
            <h1>Hello world</h1>
            <Online>Show when online</Online>
            <Offline>Show when offline</Offline>
        </div>
    );
}

export default App;
