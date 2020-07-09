import React from 'react';
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';

const state = {
  list: [
    { cid: 123, title: '技术胖的个人博客-1' },
    { cid: 456, title: '技术胖的个人博客-2' },
    { cid: 789, title: '技术胖的个人博客-3' }
  ]
};

function Index(props) {
  console.log(props)
  // return <h2>首页</h2>;
  return <Redirect to="/home/" />
}

function Home() {
  return <p>home页面</p>;
}

function List(props) {
  return (
    <>
      <h2>列表页</h2>
      <p>{props.match.params.id}</p>
    </>
  );
}

function AppRouter() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        {state.list.map((item, index) => {
          return (
            <li key={index}>
              <Link to={'/list/' + item.cid}> {item.title}</Link>
            </li>
          );
        })}
      </ul>
      <Route path="/" exact component={Index} />
      <Route path="/home/" component={Home} />
      <Route path="/list/:id" component={List} />
    </Router>
  );
}

export default AppRouter;
