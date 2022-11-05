import { Container } from 'react-bootstrap';
import { socialMedias, footerLinks } from '../constants';
import { logo } from '../assets/icons';

const Footer = () => (
  <footer className="mt-auto">
    <Container>
      <div className="d-flex flex-lg-row flex-column">
        <div className="w-100 flex-1">
          <img
            src={logo}
            alt="hoobank"
            width={266}
            height={72}
          />
          <p className="max-width-312 mt-4">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="d-flex flex-wrap flex-1.5 justify-content-between mt-5 w-100">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className="my-sm w-10">
              <h5 className="text-white mb-2">
                {footerlink.title}
              </h5>
              <ul className="list-unstyled">
              {footerlink.links.map((link) => (
                <li key={link.name} className="fs-6 mb-2">
                  <a href={link.link}>
                    {link.name}
                  </a>
                </li>
              ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex align-items-center
        justify-content-lg-between justify-content-center
        flex-lg-row flex-column
        py-4 mt-4 border-top">
          <p className="text-white text-lg-center text-center">Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>
          <div className="my-4">
            {socialMedias.map((social, index: number) => (
              <a href={social.link} target="_blank" key={social.id}>
                <img 
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className={index !== 0 ? "ms-3" : "ms-0"}
                />
              </a>
          ))}
          </div>
      </div>
    </Container>
  </footer>
)

export default Footer;