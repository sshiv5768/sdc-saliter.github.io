import "../css/Events.css";
import event from "../team4.png";
import { Button, Heading, Paragraph } from "grommet";

function Events() {
  return (
    <>
      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <Heading
            className="featurette-heading"
            margin="large"
            alignSelf="center"
          >
            Meet. Inspire. Contribute.
          </Heading>
          <Paragraph margin="large" alignSelf="center">
            Connect with techies. Get inspired. Stay motivated.
          </Paragraph>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            src={event}
            alt="ks"
          />
        </div>
      </div>
    </>
  );
}

export default Events;
