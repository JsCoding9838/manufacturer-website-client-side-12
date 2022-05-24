import { useEffect, useState } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect( () => {
        // const currentUserName = user?.user?.displayName;
        // console.log(user?.user, user?.user?.displayName);
        
        // console.log(currentUserName);
        if(user){
            const email = user?.user?.email;
            const currentUser = {email: email, displayName: user?.user?.displayName};
           
            
            fetch(`http://localhost:5000/user/${email}}`, {
                method: 'PUT',
                headers: { 
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                // console.log('data insid Token', data)
                const accessToken = data.token;
                localStorage.setItem('Access_token', accessToken)
                setToken(accessToken);
            })
        }
    }, [user])
    return token;
}

export default useToken;