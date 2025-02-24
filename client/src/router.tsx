import { createBrowserRouter } from 'react-router';
import LoginRegister from './view/pages/loginRegister/LoginRegister';
import AdminPanel from './view/pages/adminPanel/AdminPanel';
import Company from './view/pages/company/Company';
import CompanyHome from './view/pages/company/CompanyHome';
import SetFlights from './view/pages/setFlights/SetFlights';
import FlightSearch from './view/pages/company/CompanyHome';
import FlightActions from './view/pages/company/FlightActions';
import AddFlightForm from './view/pages/setFlights/AddFlightForm';
import FlightSearchResults from './view/pages/FlightSearchResults/FlightSearchResults';
import FlightDetails from './view/pages/FlightDetails/FlightDetails';

function ErrorBoundary() {
	return (
		<div className="error-container">
			<h2>Oops! Something went wrong</h2>
			<p>We couldn't find the page you're looking for.</p>
		</div>
	);
}

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginRegister />,
		errorElement: <ErrorBoundary />
	},
	{
		path: 'company',
		element: <Company />,
		errorElement: <ErrorBoundary />,
		children: [
			{
				index: true,
				element: <CompanyHome />,
			},
			{
				path: 'admin-panel',
				element: <AdminPanel />,
			},
			{
				path: 'set-flights',
				element: <SetFlights />,
			},
			{
				path: 'flight-search',
				element: <FlightSearch />,
				children: [
					{
						path: 'results',
						element: <FlightSearchResults />,
					},
					{
						path: 'results/:flightId',
						element: <FlightDetails />,
					}
				],

			},
			{
				path: 'flight-actions',
				element: <FlightActions />,
			},
			{
				path: 'add-flight',
				element: <AddFlightForm
					onSubmit={(flightData) => console.log(flightData)}
					onCancel={() => console.log('Cancel button clicked')} />,
			}
		],
	},
]);