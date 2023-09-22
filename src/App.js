import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import Scroll from "./components/scroll/scroll.component";
import "./App.css";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState(robots);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  useEffect(() => {
    const newFilteredRobots = robots.filter((robot) => {
      return robot.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredRobots(newFilteredRobots);
  }, [robots, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App">
      <h1 className="app-title">RoboFriends</h1>
      <SearchBox
        className="robots-search-box"
        placeholder="Search Robots"
        onSearchChange={onSearchChange}
      />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;
