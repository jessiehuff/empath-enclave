import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, CardHeaderMain, CardTitle } from '@patternfly/react-core';

const BlogCard: React.FunctionComponent = () => (
  <Card>
    <CardHeader>
      <CardHeaderMain>
      </CardHeaderMain>
    </CardHeader>
    <CardTitle>Post Header</CardTitle>
    <CardBody>Body</CardBody>
    <CardFooter>Footer</CardFooter>
  </Card>
)

export { BlogCard };