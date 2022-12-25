import { ReactNode } from 'react';

import { StyledContactComponent } from './styles';

interface ContactProps {
  icon: ReactNode;
  text: string;
  link?: string;
}

function ContactComponent({ contact }: { contact: ContactProps }) {
  return (
    <StyledContactComponent>
      <a href={contact.link} target="_blank" rel="noreferrer">
        {contact.icon}
      </a>
      <a href={contact.link} target="_blank" rel="noreferrer">
        {contact.text}
      </a>
    </StyledContactComponent>
  );
}

export default ContactComponent;
