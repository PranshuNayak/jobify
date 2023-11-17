import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Landing, Register, Error, ProtectedRoute } from "./pages"
import {
	AddJob,
	AllJobs,
	Profile,
	SharedLayout,
	Stats
} from "./pages/dashboard"
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<ProtectedRoute>
							<SharedLayout />
						</ProtectedRoute>
					}
				>
					<Route index element={<Stats />} />
					<Route path="all-jobs" element={<AllJobs />}></Route>
					<Route path="add-job" element={<AddJob />}></Route>
					<Route path="profile" element={<Profile />}></Route>
				</Route>
				<Route path="/register" element={<Register />} />
				<Route path="/landing" element={<Landing />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
