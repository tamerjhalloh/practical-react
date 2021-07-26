import React, {useRef, useState} from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

Modal.setAppElement('#root');

function IdleTimeContainer() {
   
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

   
    const idleTimeRef = useRef(null);
    const sessionTimeoutRef = useRef(null);


    const onIdle = () => { 
        if(isLoggedIn){
            setIsModalOpen(true);
            sessionTimeoutRef.current = setTimeout(logOut, 5000);
        } 
    }

    const logOut = () => {
        setIsLoggedIn(false);
        clearTimeout(sessionTimeoutRef.current);
        setIsModalOpen(false);

    }

    const stayActive = () => {
        setIsModalOpen(false);
        clearTimeout(sessionTimeoutRef.current);

    }

    return (
        <div>
            {
                isLoggedIn ? <h2> Hello Tamer</h2> : <h2>Hello Guest</h2>
            }
            <Modal isOpen={isModalOpen}>
                <h2> You have been idle for a while</h2>
                <p> You will be logged out be soon</p>
                <div>
                    <button onClick={logOut}>Log out</button>
                    <button onClick={stayActive}>Stay Active</button>
                </div>
            </Modal>
            <IdleTimer 
                ref={idleTimeRef} 
                timeout={5 * 1000}
                onIdle={onIdle}
                > </IdleTimer>
        </div>
    )
}


export default IdleTimeContainer
