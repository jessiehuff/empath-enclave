import * as React from 'react';
import { Gallery, PageSection, TextContent, Text, Title } from '@patternfly/react-core';
import { BlogCard } from './BlogCard';
import ReactMarkdown from 'react-markdown';
import DOMPurify from 'dompurify';
import markdown from '@app/Dashboard/Posts/my-first-post.md';

// React.useEffect(() => {
//   const script = document.createElement('script');
//   script.innerHTML = JSON.stringify(model(files), null, 2);
//   script.type = 'application/ld+json';
//   script.setAttribute('data-id', 'audio-list');
//   const sanitizedScript = DOMPurify.sanitize(script, { IN_PLACE: true });
//   document.body.appendChild(sanitizedScript);
//   return () => {
//     document.body.removeChild(sanitizedScript);
//   }
// }, [files]);

// const importAll = (r) => r.keys().map(r);
// const markdownFiles = importAll(require.context('./Posts', false, /\.md$/))
//   .sort()
//   .reverse();

export interface DashboardProps  extends React.HTMLProps<HTMLElement> {
  activeCard?: boolean;
  posts?: React.ReactNode;
  res?: React.ReactNode;
}

class Dashboard extends React.Component {
  constructor(props: any){
    super(props);

    this.state = {
      activeCard: null,
      posts: [],
      res: []
    };

  }

  // async componentDidMount() {
  //   const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
  //     .catch((err) => console.error(err));

  //   this.setState((state) => ({ ...state, posts }));
  // }

    render() {
      /* eslint-disable react/no-array-index-key */
      // const { posts } = this.state;

      return (
        <React.Fragment>
          <PageSection>
            <TextContent>
              <Text component="h1">Empath Enclave</Text>
            </TextContent>
            <br/>
            <Gallery hasGutter>
            <div dangerouslySetInnerHTML={{ __html: markdown }} />
            {
              // posts.map((post, idx) => (
                <div className="card" >
                  <div className="card-content">
                    <div className="content">
                      {/* <ReactMarkdown source={post} /> */}
                    </div>
                  </div>
                </div>
              // ))
            }

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
