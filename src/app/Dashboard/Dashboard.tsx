import * as React from 'react';
import { Gallery, PageSection, TextContent, Text, Title, Card } from '@patternfly/react-core';

const markdownContext = require.context('./Posts/', false, /\.md$/);

const markdownFiles = markdownContext.keys().map(filePath => markdownContext(filePath))

export interface DashboardProps  extends React.HTMLProps<HTMLElement> {
  activeCard?: boolean;
  posts?: React.ReactNode;
  res?: React.ReactNode;
}
class Dashboard extends React.Component {
  constructor(props: any){
    super(props);

    this.state = {
      posts: []
    };
  }

    render() {
      /* eslint-disable react/no-array-index-key */
      return (
        <React.Fragment>
          <PageSection>
            <TextContent>
              <Text component="h1">Empath Enclave</Text>
            </TextContent>
            <br/>
            <Gallery hasGutter>
            {markdownFiles.map((el, idx) => {
              return (
                <Card 
                  isHoverable
                >
                  <div key={idx} className="markdown-body" dangerouslySetInnerHTML={{ __html: el }} />
                </Card>
              )
              })}
              {/* <Card
                isHoverable
                key={key}
                id={'card-view-' + key}
                isSelectable
                isSelected={activeCard === key}
              >
                <CardHeader>
                  <img src={icons[product.icon]} alt={`${product.name} icon`} style={{ height: '50px' }} />
                </CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardBody>{product.description}</CardBody>
              </Card> */}
              </Gallery>
          </PageSection>
      </React.Fragment>
      )};
  }

export { Dashboard };
