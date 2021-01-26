import './App.css';
import data from './FakeData.json'
import { Route, NavLink, Switch } from "react-router-dom";
import NoMatch from './screens/NoMatch';
import Home from './screens/Home'
import About from './screens/About'
import Post from './screens/Post'
import Posts from './screens/Posts'



//Switch: is how you render the routes from one component to another in the same page -> https://reactrouter.com/web/api/Switch

//Route: A destination in our component or renders component when the location matches the path

//NavLink: is making the text clickable and will send the path to Route so we can render the component according to the path on the NavLink.


//React router -> That's where the cost savings come in, having only 1 API call instead of multiple calls. Saving money at the cost of performance. Pulls the same content once and rerenders for other components so that's why there is no lag time.

function App() {
  return (
    <div className="App">
      <div className="link">
        <nav>
          <NavLink
            exact
            to={"/"}
          >
            Home
          </NavLink >

          <NavLink to={"/about"}>
            About
          </NavLink>

          <NavLink to={"/post"}>
            Post
          </NavLink>
        </nav>  
      </div>
      {/* Using exact, exact path = stops the pages from piling on same page */}

      <main>
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>

          <Route path={"/about"}>
            <About />
          </Route>

          <Route path={ "/posts"}>
            <Posts
              post={data}
            />
          </Route>

          {/* can pass props */}
          <Route path="posts/:post_id">
            <Post />
          </Route>

          {/* cant pass props. everthing is thats not include this is what * */}
          <Route path={"*"} component={NoMatch} />
        </Switch>
      </main>

    </div>
  );
}

export default App;
