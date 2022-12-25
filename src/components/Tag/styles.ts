import styled from 'styled-components';

export const StyledTag = styled.span`
  padding: 4px 10px;
  font-size: 0.75rem;
  border-radius: 30px;
  background: var(--primary);
  color: var(--text-inverse);

  &:hover {
    box-shadow: inset 0 0 4px var(--secondary), 0 0 0.75em var(--secondary),
      0 0 1em var(--secondary), 0 0 1.25em var(--secondary);
  }
`;
