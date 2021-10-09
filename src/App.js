import Header from "./components/Header";
import Photos from "./pages/Photos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Like from "./pages/Like";
import { ShoppingCartIcon, HeartIcon } from "@heroicons/react/solid";
function App() {
	return (
		<Router>
			<Header ShoppingFill={ShoppingCartIcon} HeartFill={HeartIcon} />
			<Switch>
				<Route exact path="/">
					<Photos />
				</Route>
				<Route path="/like">
					<Like />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
