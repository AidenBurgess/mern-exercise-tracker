import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import Community from "./components/community.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component.js";
import CreateUser from "./components/create-user.component";

function App() {
	return (
		<Router basename={`${process.env.PUBLIC_URL}/`}>
			<div className="container">
				<Navbar />
				<br />
				<Route path="/" exact component={ExercisesList} />
				<Route path="/community" exact component={Community} />
				<Route path="/edit/:id" component={EditExercise} />
				<Route path="/create" component={CreateExercise} />
				<Route path="/user" component={CreateUser} />
			</div>
		</Router>
	);
}

export default App;
