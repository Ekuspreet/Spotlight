import React, { useEffect, useContext } from 'react';
import NavbarSpecific from '../Components/Navbar/NavbarSpecific';
import { useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie';
import NavbarProfile from '../Components/Navbar/NavbarProfile';
import axios from 'axios';
import { UserContext } from '../Contexts/UserProvider';
import Projects from '../Components/Projects/Projects';
import UploadModal from '../Components/Modals/UploadModal';

const Profile = () => {

  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const token = Cookie.get('token');
      if (!token) {
        navigate('/');
        return; // Exit function early if token is not available
      }

      try {
        const response = await axios.get('/api/profile');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    }

    fetchData();
  }, [setUser, navigate]);

  useEffect(() => {
    if (user) {
      console.log(user);

    }
  }, [user]);

  const projids = [
    {
      name: "User Auth"
    },
    {
      name: "Audio Workshop"
    }
  ]

  return (
    <>
      <NavbarProfile username={user.name} />
      <div className="divider"></div>
      <h1 className=' card-header justify-center gap-2 text-2xl'>Welcome, <span className='text-primary'> {user.name || (<div className="spinner-simple"></div>)} </span> </h1>
      <div className="divider"></div>
      <label class="btn btn-primary" for="modal-3">Add Project</label>

      <UploadModal/>

      {/* <Projects list = {user.projids}/> */}
      <Projects list={projids} />
      {/* <button className='btn-primary'></button> */}

    </>
  );
};

export default Profile;