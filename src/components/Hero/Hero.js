import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Jake York
      </SectionTitle>
      <SectionText>
        The purpose of my career is to conquer the biggest problems we face, logically and creatively, one step at a time.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/jakeyork25'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;