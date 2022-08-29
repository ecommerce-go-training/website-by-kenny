import { Online, Offline } from 'react-detect-offline';

function Test() {
	return (
		<div>
			<h1>Hello</h1>
			<Online>Show when online</Online>
			<Offline>Show when offline</Offline>
		</div>
	);
}
export default Test;
