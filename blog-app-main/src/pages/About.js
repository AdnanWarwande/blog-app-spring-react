import { Container, Row, Col } from 'reactstrap';
import Base from '../components/Base';

const About = () => {
  return (
    <Base>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="text-center mb-4">About Us</h1>
            <p className="text-center">
              Welcome to our blogging platform, where tech enthusiasts and developers gather to explore the latest trends,
              share knowledge, and collaborate on exciting projects.
            </p>
            <h2 className="mt-5">Our Story</h2>
            <p>
              Founded in the heart of Silicon Valley by visionary entrepreneur Adnan Warwande, our platform started as a
              passion project born out of a deep love for technology and a desire to create a space where like-minded
              individuals could connect and grow together.
            </p>
            <p>
              Adnan's journey began in his college dorm room, where he spent countless hours coding and tinkering with
              cutting-edge technologies. With a relentless drive for innovation and a knack for problem-solving, he soon
              realized the power of community in driving progress and fostering creativity.
            </p>
            <p>
              What started as a humble blog quickly evolved into a thriving community-driven platform, attracting
              developers, engineers, and tech enthusiasts from around the globe. Today, our platform serves as a hub for
              knowledge exchange, collaboration, and inspiration, empowering individuals to push the boundaries of
              technology and shape the future.
            </p>
            <h2 className="mt-5">Our Mission</h2>
            <p>
              At our core, we believe in the transformative power of technology to drive positive change and improve
              lives. Our mission is to democratize access to knowledge, foster collaboration, and empower individuals to
              unleash their full potential in the digital age.
            </p>
            <p>
              Whether you're a seasoned developer, a curious newcomer, or simply passionate about all things tech, we
              invite you to join us on this journey of discovery and innovation. Together, we can build a brighter future
              fueled by creativity, ingenuity, and a shared passion for technology.
            </p>
            <h2 className="mt-5">Meet Our Founder</h2>
            <p>
              Adnan Warwande is a serial entrepreneur, technologist, and visionary leader with a passion for driving
              innovation and making a positive impact in the world. With a background in computer science and a keen
              interest in emerging technologies, Adnan has dedicated his career to building platforms that empower
              individuals and transform industries.
            </p>
            <p>
              As the driving force behind our platform, Adnan brings a unique blend of technical expertise, strategic
              vision, and unwavering determination to the table. His relentless pursuit of excellence and commitment to
              fostering a vibrant community have been instrumental in shaping our platform into what it is today.
            </p>
            <p>
              When he's not busy leading our team or exploring the latest tech trends, you can find Adnan hiking in the
              great outdoors, experimenting with new recipes in the kitchen, or mentoring aspiring entrepreneurs on their
              journey to success.
            </p>
            <p className="text-center mt-5">
              Join us and be part of something extraordinary. Together, we can redefine what's possible and shape the
              future of technology.
            </p>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default About;
