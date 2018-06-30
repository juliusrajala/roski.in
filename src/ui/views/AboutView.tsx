import * as React from 'react';
import { Card, CardTitle, BreadText } from 'src/ui/styles';

const FIRST_CHAPTER = `
  Ever had a hard time finding a trash bin nearby when you need to dispose or a candy wrapper
  or a piece of paper.
`;

const SECOND_CHAPTER = `
  This could be easier. It was our desire to help people find bins easier and as we couldn't
  easily find the data available, it was pretty easy to figure out we need to create a tool
  to mark them.
`;

const AboutView = (props) => (
  <Card>
    <CardTitle>What is Roski.in</CardTitle>
    <BreadText>{FIRST_CHAPTER}</BreadText>
    <BreadText>{SECOND_CHAPTER}</BreadText>
  </Card>
)

export default AboutView;