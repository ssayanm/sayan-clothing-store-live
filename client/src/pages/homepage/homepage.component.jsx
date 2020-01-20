import React, { Profiler } from "react";
import Directory from "../../components/directory/directory.component";

import { HomepageContainer } from "./homepage.styles";

const HomePage = () => (
  <HomepageContainer>
    <Profiler
      id="Directory"
      onRender={(id, phase, actualDuration) => {
        console.log({
          id,
          phase,
          actualDuration
        });
      }}
    >
      <Directory />
    </Profiler>
  </HomepageContainer>
);

export default HomePage;
