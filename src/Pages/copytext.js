<div
        style={{ width: '100%' }}
        className="d-flex justify-content-center mt-3"
      >
        <Row className="mt-5">
          <Col
            lg={4}
            className=" projects-card col-md-6 mb-4 d-flex align-items-center"
          >
            <Skillcard
              className="mb-4 d-flex justify-content-center"
              title="WRAPI (Wildlife Rescue API)"
              content={
                <>
                  <div className="d-flex flex-column align-items-center">
                    <img
                      className="projects rounded-top mb-3"
                      src={WRAPI}
                      alt="WRAPI (Wildlife Rescue API)"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <div className="d-flex flex-column align-items-end">
                    <Button
                      variant="primary"
                      onClick={() => openWebsite(websiteUrl3)}
                    >
                      Visit project github
                    </Button>
                  </div>
                </>
              }
            />
          </Col>
          <Col lg={8} className="col-md-6 mb-4">
            <div className="projects-text">
              <p style={{ color: 'black', textAlign: 'left', height: '500px' }}>
                {' '}
                <strong>
                  <a style={{ fontSize: '2rem', color: '#0a629c' }}>
                    WRAPI (Wildlife Rescue API)
                  </a>{' '}
                  is an API to give those interested in wildlife conservation a
                  platform to communicate with one another as well as
                  establishing their own rescue organisation.
                </strong>
                <br></br>
                <br></br>
                <strong>Technology Stack;</strong>
                <br></br>• Server side programming: python, SQL <br></br>•
                Back-end framework: flask<br></br>• Database: Postgres<br></br>•
                Client applications: Postman, Insomnia, Dbeaver <br></br>•
                Development IDE: Visual Studio Code<br></br>
                <strong>
                  <Link to="https://github.com/JamJuiceCreative/JamesLister_T2A2">
                    Github - github.com/JamJuiceCreative/JamesLister_T2A2
                  </Link>
                </strong>
              </p>
            </div>
          </Col>
        </Row>
      </div>