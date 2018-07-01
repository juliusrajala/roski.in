import * as React from 'react';
import { Card, CardTitle, BreadText } from 'src/ui/styles';

const FIRST_CHAPTER = `
  Ever had a hard time finding a trash bin nearby, when you need to dispose or a candy wrapper
  or a piece of paper?
`;

const SECOND_CHAPTER = `
  We think this is an issue. It could and should be easier to find them. Sadly, we can't build
  digital trash bins for physical trash (yet).
`;

const THIRD_CHAPTER = `
  We want to help people take care of the environment and the places they live. So let's start
  by making finding those bins a bit easier.
`;

const AboutView = (props) => (
  <Card>
    <CardTitle>What is ROSKI.IN?</CardTitle>
    <BreadText>{FIRST_CHAPTER}</BreadText>
    <BreadText>{SECOND_CHAPTER}</BreadText>
    <BreadText>{THIRD_CHAPTER}</BreadText>
  </Card>
)

export default AboutView;