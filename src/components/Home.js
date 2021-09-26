import React from "react"
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        topBtnText="Custom Order"
        bottomBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        topBtnText="Custom Order"
        bottomBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        topBtnText="Custom Order"
        bottomBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        topBtnText="Custom Order"
        bottomBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back gurantee"
        backgroundImg="solar-panel.jpg"
        topBtnText="Order now"
        bottomBtnText="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        topBtnText="Order now"
        bottomBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description="Money-back gurantee"
        backgroundImg="accessories.jpg"
        topBtnText="Shop now"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`
