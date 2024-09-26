import Link from "next/link"
import {FaFacebook, FaGithub, FaLinkedinIn, FaInstagram} from "react-icons/fa"

const socials = [
    {icon: <FaFacebook/>, path: 'https://www.facebook.com/devmamunbd/',  target: '_blank'},
    {icon: <FaGithub/>, path: 'https://github.com/devmamunbd',  target: '_blank'},
    {icon: <FaLinkedinIn/>, path: 'https://www.linkedin.com/in/devmamunbd/',  target: '_blank'},
    {icon: <FaInstagram/>, path: 'https://www.instagram.com/dymamunbd/',  target: '_blank'}
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return <Link className={iconStyles}
            key={index} href={item.path}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Socials
