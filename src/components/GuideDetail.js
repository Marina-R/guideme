import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const GuideDetail = (props) => {
  return (
    <Card>
      <Text>{props.guide.title}</Text>
    </Card>
  );
};

export default GuideDetail;
