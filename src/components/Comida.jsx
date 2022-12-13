const Comida= ()=>{
  function boton(){

  alert('Me encanta!')}
    

  
    const comida={
      pasta: "steak",
      sushi: "pescado",
      hamburguesa:"hamburguesa"
    }

return(

 
       <div className="tlibre">
      <h1 className='title3'>Comida</h1>
   
        
        <ul className="ul3">
          <li className='nom'>{comida.pasta}</li>
          <li className='mus'>{comida.sushi}</li>
          <li className='pel'>{comida.hamburguesa}</li></ul>
        
         <button className="btn3" onClick={boton}>Dale Aquí</button>
        
      </div>
        
    
)


}
export default Comida;