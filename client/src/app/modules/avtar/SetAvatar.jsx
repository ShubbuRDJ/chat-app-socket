import React, { useEffect, useState } from 'react';
import loader from '../../../assets/loader.gif';
import './setAvatar.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Buffer } from 'buffer';
import toaster from '../../../utility/toaster/toaster';
import { postRequest } from '../../../services/axios-api-request/axios_api_Request';

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
            const buffer = new Buffer(image.data);
            data.push(buffer.toString("base64"));
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
            console.log(data,"data from imge set ui");
            if(data.results.statusCode === 200){
                toaster('success','Profile image set successfully!')
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
                    <div className="title-container">
                        <h1>Pick an avatar as your profile picture</h1>
                    </div>
                    <div className="avatars">
                        {avatars.map((avatar, index) => (
                            <div
                                key={index}
                                className={`avatar ${selectedAvatar === index ? 'selected' : ''}`}
                            >
                                <img src={`data:image/svg+xml;base64,${avatar}`} alt="avatar" onClick={() => setSelectedAvatar(index)} />
                            </div>
                        ))}
                    </div>
                    <button className='submit-btn' onClick={() => setProfilePicture()}>Set as Profile Picture</button>
                </div>
            }
        </>
    );
}

