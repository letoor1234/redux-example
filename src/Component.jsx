import { useEffect } from "react";
import { useSelector } from "react-redux"

const Component = () => {

    const token = useSelector(
        (state) => state.user.token
    );

    /* const [isCarritoVisible, setIsCarritoVisible] = useState(false)


    useEffect(() => {
        if(token) {
            setIsCarritoVisible(true)
        } else {
            setIsCarritoVisible(false)
        } 
    }, [token]) */

    return <header>
        <h1>lOGO</h1>
        {
            token 
            ? <Carrito /> 
            : <LoginButtons />
        }
        <p>{userData.name}</p>
        <p>{userData.email}</p>
    </header>
}

export default Component