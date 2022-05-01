import Navbar from './contextLec/Navbar'
import { ThemeProvider } from './contextLec/ThemeProvider'
import { Border } from './contextLec/AppOne.styled'


function AppOne(){
    return (
        <ThemeProvider>
            <Border>
                <Navbar/>
            </Border>
        </ThemeProvider>
    )
}

export default AppOne