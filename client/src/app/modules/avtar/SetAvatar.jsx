import React, { useEffect, useState } from 'react';
import loader from '../../../assets/loader.gif';
import './setAvatar.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Buffer } from 'buffer';
import toaster from '../../../utility/toaster/toaster';
import { postRequest } from '../../../services/axios-api-request/axios_api_Request';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default function SetAvatar() {
    const avatarAPI = 'https://api.dicebear.com/7.x/avataaars/svg?seed=';
    const navigate = useNavigate();
    const [avatars, setAvatars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAvatar, setSelectedAvatar] = useState(undefined);

    const getAvatar = async () => {
        const data = [];
        for (let i = 0; i < 4; i++) {
            const image = await axios.get(`${avatarAPI}${Math.round(Math.random() * 1000)}`);
            const buffer = new Buffer(image?.data);
            data?.push(buffer.toString("base64"));
        }
        setAvatars(data);
    }
    useEffect(() => {
        getAvatar();
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    const setProfilePicture = async () => {
        if (selectedAvatar === undefined) {
            toaster('error', 'Please select an avatar')
        }
        else{
            const {data} = await postRequest('api/user/userSetProfileImage',{avatarImage:avatars[selectedAvatar]});
            if(data?.results?.statusCode === 200){
                toaster('success','Profile image set successfully!');
                localStorage.setItem('isProfileImage', JSON.stringify(true));
                setTimeout(() => {
                    navigate('/');
                }, 500);
            }
            else if(data?.results?.statusCode === 401){
                toaster('error',data?.results?.message);
                localStorage.clear();
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            }
            else{
                toaster('error',data?.results?.message);
                setTimeout(() => {
                    navigate('/');
                }, 500);
            }
        }
    }

    return (
        <>
            {isLoading ? <div className='avatar-whole-container'>
                <img src={loader} alt="loader" className="loader" />
            </div> :
                <div className='avatar-whole-container'>
                    <div onClick={()=>navigate('/')} className="setAvatarBackBtn">
                    <KeyboardBackspaceIcon/>
                    </div>
                    <div className="title-container">
                        <h1>Pick an avatar as your profile picture</h1>
                    </div>
                    <div className="avatars">
                        {avatars.map((avatar, index) => (
                            <div
                                key={index}
                                className={`avatar ${selectedAvatar === index ? 'selected' : ''}`}
                            >
                                <img style={{cursor:'pointer'}} src={`data:image/svg+xml;base64,${avatar}`} alt="avatar" onClick={() => setSelectedAvatar(index)} />
                            </div>
                        ))}
                    </div>
                    <button className='submit-btn' onClick={() => getAvatar()}>Get More</button>
                    <button className='submit-btn' onClick={() => setProfilePicture()}>Set as Profile Picture</button>
                </div>
            }
        </>
    );
}

