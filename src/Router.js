function Router(){
    return (
      <>
        <Router>
           <Route path="/About" element={<App />}></Route>
          <Route path="/BookPage" element={<App />}></Route> 
          <Route path="/About" element={<App />}></Route>
          <Route path="/BookPage" element={<App />}></Route> 
          <Route path="/About" element={<App />}></Route>
          <Route path="/BookPage" element={<App />}></Route>
        </Router>
      </>
    );
}