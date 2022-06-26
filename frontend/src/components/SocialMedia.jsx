import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaSteam } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://github.com/danihooven'><BsGithub /></a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/danihooven/'><BsLinkedin /></a>
    </div>
    <div>
      <a href='https://steamcommunity.com/profiles/76561199057764554/'><FaSteam /></a>
    </div>
  </div>
);

export default SocialMedia;
