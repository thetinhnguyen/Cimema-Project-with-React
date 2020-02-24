import React from 'react';
import './App.css'
import {routeHome} from './router'
import HomeTemplate from './templates/HomeTemplate'
import { BrowserRouter, Switch } from 'react-router-dom';



const showMenuHome=route=>{
  if(route && route.length>0 ){
    return  route.map((item,index)=> <HomeTemplate
    key={index}
    path={item.path} 
    exact={item.exact} 
    Component={item.component} />)
  }
}






function App() {

  return (
    <BrowserRouter>
     <div className='App'>
      
      <Switch>
        {showMenuHome(routeHome)}
   
      </Switch>
     
    
   
    
     
    </div>
   
    </BrowserRouter>
   
   
    
  );
}

export default App;
