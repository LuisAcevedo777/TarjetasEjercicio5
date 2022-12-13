
const Stack= ()=>{
  function boton(){

  alert('Revisa mi stack!')}
    

  
  const stack={
    html: "html",
    css: "css",
    javascript: "javascript"
  }
return(

 
       <div className="tlibre">
      <h1 className='title4'>Stack</h1>
   
        
        <ul className="ul4">
          <li className='nom'>{stack.html}</li>
          <li className='mus'>{stack.css}</li>
          <li className='pel'>{stack.javascript}</li></ul>
        
         <button className="btn4" onClick={boton}>Dale Aquí</button>
        
      </div>
        
    
)


}
export default Stack;