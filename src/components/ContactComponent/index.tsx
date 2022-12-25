import { StyledContactComponent } from './styles';

function ContactComponent({ contact }) {
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
