import { contacts, description, interests, name } from '../../../markdowns';
import ContactComponent from '../ContactComponent';
import Tag from '../Tag';
import { ThemeSwitch } from '../ThemeSwitch';
import * as Profile from './styles';

function ProfileCard() {
  return (
    <Profile.CardContainer>
      <Profile.HeaderBackground />
      <Profile.HeaderContainer>
        <ThemeSwitch />
        <Profile.Image />
        <Profile.MainInfoContainer>
          <h2>{name}</h2>
          <p>{description}</p>
        </Profile.MainInfoContainer>
      </Profile.HeaderContainer>

      <Profile.ItemsContainer>
        <h3>Contacts</h3>
        <Profile.ContactsContainer>
          {contacts.map((contact) => (
            <li key={contact.name}>
              <ContactComponent contact={contact} />
            </li>
          ))}
        </Profile.ContactsContainer>
      </Profile.ItemsContainer>

      <Profile.ItemsContainer>
        <h3>Interests</h3>
        <Profile.InterestContainer>
          {interests.map((interest) => (
            <Tag key={interest} text={interest} />
          ))}
        </Profile.InterestContainer>
      </Profile.ItemsContainer>
    </Profile.CardContainer>
  );
}

export default ProfileCard;
