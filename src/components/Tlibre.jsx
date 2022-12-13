const Tlibre = ()=>{
  function boton(){

  alert('En mi tiempo libre...')}
    

    const tlibre ={
      t1: "comer",
      t2: "salir",
      t3: "videojuegos"
    }
    
return(

 
       <div className="tlibre">
      <h1 className='title2'>Tiempo Libre</h1>
   
        
        <ul className="ul2">
          <li className='nom'>{tlibre.t1}</li>
          <li className='mus'>{tlibre.t2}</li>
          <li className='pel'>{tlibre.t3}</li></ul>
        
         <button className="btn2" onClick={boton}>Dale Aquí</button>
        
      </div>
        
    
)


}
export default Tlibre;