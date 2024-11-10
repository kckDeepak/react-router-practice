import React from 'react'
import { Link } from 'react-router-dom';

const profiles= [1,2,3,4,5];
const Profiles = () => {
  return (
    <div>
        {profiles.map((profile) =>(
            <Link key={profile} to={`/profiles/${profile}`}>
                Profile {profile} <br/>
            </Link>
        ))}
    </div>
  )
}

export default Profiles