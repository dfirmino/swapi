import {
	BrowserRouter, Route, Routes,
} from 'react-router-dom';
import React, {Suspense} from 'react';
import Loading from '../components/Loading';

const Home = React.lazy(() => import('./Home'));

const RouteSystem = () => (
	<Suspense fallback={<Loading />}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	</Suspense>
);

export default RouteSystem;
