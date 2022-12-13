const User = ()=>{
  function boton(){

  alert('Esto es sobre mí!')}
  

    const user ={
      nom: "Luis Acevedo",
      mus: "Classic",
      pel: "Avatar"
    }
    

return(

 
       <div className="user">
      <h1 className='title1'>SOBRE MI</h1>
   
        
        <ul className='ul1'>
          <li className='nom'>{user.nom}</li>
          <li className='mus'>{user.mus}</li>
          <li className='pel'>{user.pel}</li></ul>
        
         <button className="btn" onClick={boton}>Dale Aquí</button>
        
      </div>
        
    
)


}
export default User;