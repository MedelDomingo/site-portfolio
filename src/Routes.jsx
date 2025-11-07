import JobFullStackPage from './pages/JobFullStackPage';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/job-3">
          <JobFullStackPage />
        </Route>
      </Switch>
    </Router>
  )
}
