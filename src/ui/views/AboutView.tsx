import * as React from 'react';
import { Container, Card, CardTitle, BreadText } from 'src/ui/styles';
import styled from 'styled-components';

const FIRST_CHAPTER = `
  I realized a while back that I'm pretty terrible at bar trivia.
`;

const SECOND_CHAPTER = `
  This app exists to fix the situation. I thought it would be nice
  to provide others with the same opportunity.
`;

const AboutView = (props) => (
  <Card>
    <CardTitle>What is this?</CardTitle>
    <BreadText>{FIRST_CHAPTER}</BreadText>
    <BreadText>{SECOND_CHAPTER}</BreadText>
  </Card>
)

export default AboutView;