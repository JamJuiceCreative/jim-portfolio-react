import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlogItem from '../Components/BlogItem'; // Import your BlogItem component

export default function Blog() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div>BLOG PAGE</div>
          </Col>
        </Row>
        <Row>
          <Col className="blog-container">
            {/* Example usage of BlogItem component 1 */}
            <BlogItem
              link="https://www.zdnet.com/article/lg-display-develops-stretchable-display-that-extends-by-20/?utm_source=tldrnewsletter"
              title="LG Display develops stretchable display"
              date="9.11.22"
              content="LG has developed a stretchable display that can be elongated from 12-inches in size to 14-inches. Stretchable displays are considered to be the next step of evolution for displays after rollable and foldable displays. The full-color display could find many applications within wearable technologies. LG has been developing the display since 2020 in collaboration with 20 South Korean research institutes."
            />

            {/* Example usage of BlogItem component 2 */}
            <BlogItem
              link="https://www.theverge.com/2022/11/7/23445476/elon-musk-twitter-user-growth-all-time-high-advertisers"
              title="Twitter states user growth at all-time high under Elon Musk"
              date="9.11.22"
              content="Twitter's monetizable daily user growth has accelerated to more than 20% since Elon Musk's takeover. The growth indicates that users are not leaving the platform en masse. Many advertisers have left Twitter due to activist pressure, resulting in a massive drop in revenue for the company. The level of hate speech on the platform remains within historical norms."
            />

            {/* Example usage of BlogItem component 3 */}
            <BlogItem
              link="https://www.bbc.com/news/health-63513330?utm_source=tldrnewsletter"
              title="Lab-grown blood given to people in world-first trial"
              date="8.11.22"
              content="A team of researchers from the UK has developed lab-grown blood and started human testing. Small amounts of the blood are being tested to see how it performs inside the body. The blood is created from a pool of stem cells, with the process taking about three weeks. Lab-grown blood is currently significantly more expensive than the cost of an average blood donation."
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
