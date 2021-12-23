import React from "react";
import Nav from "./Nav";
import HogsCollection from "./HogsCollection"

import hogs from "../porkers_data";

function App() {
	
	return (
		<div className="App">
			{/* <div>{hogsToDisplay}</div> */}
			<HogsCollection hogs={hogs}/>
			<Nav />
		</div>
	);
}

export default App;
