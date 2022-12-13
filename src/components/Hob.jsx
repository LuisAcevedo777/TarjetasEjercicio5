
const Hob= ()=>{
  function boton(){

  alert('Mis hobbies!')}
    

  
  const hob={
    h1: "chess",
    h2: "read",
    h3: "sing"
  }
return(

 
       <div className="tlibre">
      <h1 className='title5'>Hobbies</h1>
   
        
        <ul className="ul5">
          <li className='nom'>{hob.h1}</li>
          <li className='mus'>{hob.h2}</li>
          <li className='pel'>{hob.h3}</li></ul>
        
         <button className="btn5" onClick={boton}>Dale Aquí</button>
        
      </div>
        
    
)


}
export default Hob;