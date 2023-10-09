import { FaFacebookF, FaInstagram, FaGithub, FaYoutube, FaTwitter, FaTwitch } from "react-icons/fa";

interface ButtonProps {
  name: string;
  link: string;
}

const Social = ({ link, name }: ButtonProps) => {
  let size = 25;
  let socials = [
    {
      icon: (
        <FaFacebookF
          onClick={() => window.open(link)}
          size={size}
          className="m-auto"
        />
      ),
      name: "Facebook",
    },
    {
      icon: (
        <FaInstagram
          onClick={() => window.open(link)}
          size={size}
          className="m-auto"
        />
      ),
      name: "Instagram",
    },
    {
      icon: (
        <FaGithub
          onClick={() => window.open(link)}
          size={size}
          className="m-auto"
        />
      ),
      name: "Github",
    },
    {
      icon: (
        <FaYoutube
          onClick={() => window.open(link)}
          size={size}
          className="m-auto"
        />
      ),
      name: "Youtube",
    },
    {
      icon: (
        <FaTwitter
          onClick={() => window.open(link)}
          size={size}
          className="m-auto"
        />
      ),
      name: "Twitter",
    },
    {
      icon: (
        <FaTwitch
          onClick={() => window.open(link)}
          size={size}
          className="m-auto"
        />
      ),
      name: "Twitch",
    },
  ];

  let icon = socials.find((social) => social.name === name)?.icon;

  return (
    <div>
      <button className="w-10 h-10 bg-rose-700 rounded-full content-center m-2 hover:bg-rose-800">
        {icon}
      </button>
    </div>
  );
};

export default Social;