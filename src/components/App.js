import React, { useState } from 'react'

// NO ESTA RECOMENDADO COLOCAR HOOKS "GLOBALES", PORQUE TIENE QUE ESTAR ASOCIADO AL COMPONENTE QUE VA A AFECTAR EL CAMBIO DE ESTADO
// const [currentLikes, setCurrentLikes] = useState(likes);

const Likes = ({likes}) => {
    const [currentLikes, setCurrentLikes] = useState(likes);
    console.log("Render likes");
    // console.log(state);

    return (<Button onClick={() => 
        // likes++;
        // console.log(likes);
        // setCurrentLikes(currentLikes + 1)}>
        // REACT ESPERA QUE EL VALOR CAMBIE, SOLO HACE UN PRIMER RENDERIZADO DE VERIFICACION
        setCurrentLikes(6)}>
        {currentLikes} likes
    </Button>)
}

const Button = ({ onClick, children}) => {
    console.log("Render button");
    return <button onClick={onClick}>{children}</button>
}

const App = () => {
    console.log("Render App");
  return <Likes likes={12}/>
}

export default App