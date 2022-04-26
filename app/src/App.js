
import { AppStyled, BoldLabel,FormWrapper } from './App.styled'
import React,{useState} from 'react'

function App() {
  const [isColorFull,setIsColorFull] = useState(false)
  return (
    <AppStyled>
     <FormWrapper isColorFull={isColorFull} onClick={()=> setIsColorFull(!isColorFull)}>
       <div>
         <BoldLabel>Username : </BoldLabel>
         <input placeholder="Enter Username"/>
       </div>
       <div>
         <BoldLabel>Password : </BoldLabel>
         <input placeholder="Enter Password"/>
       </div>
     </FormWrapper>
    </AppStyled>
  );
}

export default App;
